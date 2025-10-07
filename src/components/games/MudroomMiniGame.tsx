import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * MudroomMiniGame.tsx
 * - Lightweight SVG drag & drop mini-game (no external libraries)
 * - Features:
 *   • Drag items (Coat, Backpack, Shoes, Ball, Leash, Umbrella, Hat, Groceries)
 *   • Snap into cubbies/hooks if compatible
 *   • Capacity meter & item counter
 *   • Reset & Challenge mode
 *   • Keyboard-accessible (Enter to pick up/drop; arrows to nudge)
 *
 * Props:
 *   - onClose?: () => void   // optional (use if you want a close button)
 *   - width?: number         // optional layout width (px)
 *   - height?: number        // optional layout height (px)
 */

type ItemType =
  | "coat"
  | "backpack"
  | "shoes"
  | "ball"
  | "leash"
  | "umbrella"
  | "hat"
  | "groceries";

type SlotKind = "hook" | "cubbySmall" | "cubbyWide" | "floor";

type XY = { x: number; y: number };

type Item = {
  id: string;
  label: string;
  type: ItemType;
  // current position (in SVG coords)
  x: number;
  y: number;
  // default "home" position (for reset)
  home: XY;
  // if snapped to a slot, store it here
  snappedTo?: string; // slot.id
  // for keyboard pickup
  isPickedUp?: boolean;
};

type Slot = {
  id: string;
  kind: SlotKind;
  accepts: ItemType[];
  // slot rect in SVG coords
  x: number;
  y: number;
  w: number;
  h: number;
  occupiedBy?: string; // item.id
};

// SVG world dimensions (viewBox)
const WORLD = { w: 960, h: 700 };

// Utility: simple rect hit-test
function rectsOverlap(a: { x: number; y: number; w: number; h: number }, b: { x: number; y: number; w: number; h: number }) {
  return !(a.x + a.w < b.x || b.x + b.w < a.x || a.y + a.h < b.y || b.y + b.h < a.y);
}

// Convert client (px) to SVG (viewBox) coords
function clientToSvgCoords(svgEl: SVGSVGElement, clientX: number, clientY: number): XY {
  const pt = svgEl.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const ctm = svgEl.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const inv = ctm.inverse();
  const sp = pt.matrixTransform(inv);
  return { x: sp.x, y: sp.y };
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// Item visual sizes (tight-ish for snapping feel)
const ITEM_BOUNDS: Record<ItemType, { w: number; h: number }> = {
  coat: { w: 70, h: 90 },
  backpack: { w: 60, h: 80 },
  shoes: { w: 80, h: 40 },
  ball: { w: 50, h: 50 },
  leash: { w: 70, h: 24 },
  umbrella: { w: 70, h: 90 },
  hat: { w: 60, h: 35 },
  groceries: { w: 70, h: 80 },
};

// Default items (laid out along the bottom)
function makeDefaultItems(): Item[] {
  const startY = WORLD.h - 60;
  const gap = 90;
  const left = 80;
  const types: Array<{ type: ItemType; label: string }> = [
    { type: "coat", label: "Coat" },
    { type: "backpack", label: "Backpack" },
    { type: "shoes", label: "Shoes" },
    { type: "ball", label: "Ball" },
    { type: "leash", label: "Leash" },
    { type: "umbrella", label: "Umbrella" },
    { type: "hat", label: "Hat" },
    { type: "groceries", label: "Groceries" },
  ];
  return types.map((t, i) => {
    const x = left + i * gap;
    return {
      id: `item-${t.type}-${i}`,
      label: t.label,
      type: t.type,
      x,
      y: startY,
      home: { x, y: startY },
    };
  });
}

// Build mudroom slots (hooks + cubbies + wide cubby + floor zone)
function makeSlots(): Slot[] {
  const slots: Slot[] = [];

  // Hooks row (accept coat, backpack, hat, umbrella, leash)
  const hookAccepts: ItemType[] = ["coat", "backpack", "hat", "umbrella", "leash"];
  const hookY = 150;
  const hookCount = 6;
  const hookStartX = 180;
  const hookGap = 100;
  for (let i = 0; i < hookCount; i++) {
    slots.push({
      id: `slot-hook-${i}`,
      kind: "hook",
      accepts: hookAccepts,
      x: hookStartX + i * hookGap - 20,
      y: hookY - 10,
      w: 40,
      h: 20,
    });
  }

  // Cubbies grid (accept backpack, shoes, ball, hat, groceries, leash)
  const cubbyAccepts: ItemType[] = ["backpack", "shoes", "ball", "hat", "groceries", "leash"];
  const gridX = 120;
  const gridY = 240;
  const cols = 5;
  const rows = 2;
  const cw = 120;
  const ch = 80;
  const hgap = 10;
  const vgap = 10;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = gridX + c * (cw + hgap);
      const y = gridY + r * (ch + vgap);
      slots.push({
        id: `slot-cubby-${r}-${c}`,
        kind: "cubbySmall",
        accepts: cubbyAccepts,
        x,
        y,
        w: cw,
        h: ch,
      });
    }
  }

  // Wide cubby (bottom right bench storage)
  slots.push({
    id: "slot-cubby-wide",
    kind: "cubbyWide",
    accepts: ["backpack", "shoes", "groceries", "ball", "leash", "hat"],
    x: 760,
    y: 320,
    w: 140,
    h: 100,
  });

  // Floor zone (accept shoes, ball, groceries)
  slots.push({
    id: "slot-floor-1",
    kind: "floor",
    accepts: ["shoes", "ball", "groceries"],
    x: 700,
    y: 430,
    w: 200,
    h: 60,
  });

  return slots;
}

// Visuals for items (simple inline SVG shapes for portability)
function ItemSprite({ item }: { item: Item }) {
  const { w, h } = ITEM_BOUNDS[item.type];
  // Use a consistent “anchor” at (x, y) as top-left
  return (
    <g transform={`translate(${item.x}, ${item.y})`} pointerEvents="none">
      {item.type === "coat" && (
        <g>
          <rect rx={8} ry={8} width={w} height={h} fill="#f59e0b" />
          <path d={`M${w * 0.5},0 L${w * 0.6},${h} L${w * 0.4},${h} Z`} fill="#b45309" opacity={0.2} />
        </g>
      )}
      {item.type === "backpack" && (
        <g>
          <rect rx={10} ry={10} width={w} height={h} fill="#3b82f6" />
          <rect x={8} y={14} width={w - 16} height={h - 28} rx={8} ry={8} fill="#60a5fa" />
        </g>
      )}
      {item.type === "shoes" && (
        <g>
          <rect rx={6} ry={6} width={w} height={h} fill="#6b7280" />
          <rect x={4} y={8} width={w - 8} height={h - 16} rx={4} ry={4} fill="#9ca3af" />
        </g>
      )}
      {item.type === "ball" && (
        <g>
          <circle cx={w / 2} cy={h / 2} r={Math.min(w, h) / 2} fill="#ef4444" />
          <path d={`M0 ${h / 2} H ${w}`} stroke="#fff" strokeWidth={4} />
          <path d={`M${w / 2} 0 V ${h}`} stroke="#fff" strokeWidth={4} />
        </g>
      )}
      {item.type === "leash" && (
        <g>
          <rect rx={12} ry={12} width={w} height={h} fill="#22c55e" />
          <circle cx={w - 14} cy={h / 2} r={10} fill="#16a34a" />
        </g>
      )}
      {item.type === "umbrella" && (
        <g>
          <rect rx={8} ry={8} width={w} height={h} fill="#a855f7" />
          <path d={`M${w / 2} 6 V ${h - 6}`} stroke="#fff" strokeWidth={3} />
        </g>
      )}
      {item.type === "hat" && (
        <g>
          <rect rx={8} ry={8} width={w} height={h} fill="#f97316" />
          <rect x={-10} y={h - 12} width={w + 20} height={12} rx={6} ry={6} fill="#fb923c" />
        </g>
      )}
      {item.type === "groceries" && (
        <g>
          <rect rx={4} ry={4} width={w} height={h} fill="#d97706" />
          <rect x={6} y={6} width={w - 12} height={h - 24} fill="#fde68a" />
        </g>
      )}
      <text
        x={w / 2}
        y={h + 16}
        textAnchor="middle"
        fontSize={14}
        fill="#111827"
        pointerEvents="none"
      >
        {item.label}
      </text>
    </g>
  );
}

function SlotSprite({ slot, highlighted }: { slot: Slot; highlighted?: boolean }) {
  const stroke = highlighted ? "#10b981" : "#374151";
  const dash = slot.kind === "hook" ? "3,3" : undefined;
  return (
    <g>
      <rect
        x={slot.x}
        y={slot.y}
        width={slot.w}
        height={slot.h}
        fill={slot.kind === "floor" ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.1)"}
        stroke={stroke}
        strokeWidth={2}
        strokeDasharray={dash}
        rx={slot.kind === "hook" ? 6 : 8}
        ry={slot.kind === "hook" ? 6 : 8}
      />
      {/* A little hook ornament */}
      {slot.kind === "hook" && (
        <path
          d={`M${slot.x + slot.w / 2} ${slot.y - 12} c 0,-8 14,-8 14,0`}
          stroke="#6b7280"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

export default function MudroomMiniGame({
  onClose,
  width = 960,
  height = 560,
}: {
  onClose?: () => void;
  width?: number;
  height?: number;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [items, setItems] = useState<Item[]>(() => makeDefaultItems());
  const [slots, setSlots] = useState<Slot[]>(() => makeSlots());
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<XY>({ x: 0, y: 0 });
  const [hoverSlotId, setHoverSlotId] = useState<string | null>(null);
  const [challengeMode, setChallengeMode] = useState(false);

  const placedCount = useMemo(() => items.filter((it) => !!it.snappedTo).length, [items]);
  const capacityTotal = useMemo(() => slots.length, [slots]);
  const capacityPct = Math.round((placedCount / capacityTotal) * 100);

  // Bring dragged item to front by sorting items (render order)
  const orderedItems = useMemo(() => {
    if (!dragId) return items;
    const dragging = items.find((i) => i.id === dragId);
    const rest = items.filter((i) => i.id !== dragId);
    return dragging ? [...rest, dragging] : items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, dragId]);

  // Reset
  function handleReset() {
    setItems((prev) =>
      prev.map((i) => ({
        ...i,
        x: i.home.x,
        y: i.home.y,
        snappedTo: undefined,
        isPickedUp: false,
      }))
    );
    setSlots((prev) => prev.map((s) => ({ ...s, occupiedBy: undefined })));
    setHoverSlotId(null);
  }

  // Challenge mode simply shuffles items to the bottom & clears placements
  function handleChallenge() {
    handleReset();
    setChallengeMode(true);
    // (Optional) could enqueue a timer or confetti, but keeping it minimal.
  }

  // Try to find a compatible, free slot under an item
  function findCompatibleSlot(item: Item): Slot | undefined {
    const bounds = { x: item.x, y: item.y, w: ITEM_BOUNDS[item.type].w, h: ITEM_BOUNDS[item.type].h };
    return slots.find((s) => {
      if (s.occupiedBy) return false;
      if (!s.accepts.includes(item.type)) return false;
      return rectsOverlap(bounds, s);
    });
  }

  // Update hover highlight during drag
  function updateHoverFor(item: Item) {
    const s = findCompatibleSlot(item);
    setHoverSlotId(s?.id || null);
  }

  // Attach/detach item to slot
  function snapItemToSlot(itemId: string, slot?: Slot) {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id !== itemId) return i;
        if (!slot) return { ...i, snappedTo: undefined }; // detach
        // center item within slot
        const { w, h } = ITEM_BOUNDS[i.type];
        const nx = slot.x + (slot.w - w) / 2;
        const ny = slot.y + (slot.h - h) / 2;
        return { ...i, x: nx, y: ny, snappedTo: slot.id };
      })
    );
    setSlots((prev) =>
      prev.map((s) => {
        if (slot && s.id === slot.id) return { ...s, occupiedBy: itemId };
        if (s.occupiedBy === itemId && (!slot || s.id !== slot.id)) return { ...s, occupiedBy: undefined };
        return s;
      })
    );
  }

  // Pointer handlers
  function onPointerDownItem(e: React.PointerEvent, itemId: string) {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragId(itemId);

    const svg = svgRef.current!;
    const { x, y } = clientToSvgCoords(svg, e.clientX, e.clientY);

    // find the item once
    const item = items.find((i) => i.id === itemId)!;

    // these were previously unused — make them the drag offset
    const dx = x - item.x;
    const dy = y - item.y;
    setDragOffset({ x: dx, y: dy });

    // just mark it picked up
    setItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, isPickedUp: true } : i))
    );
  }


  function onPointerMove(e: React.PointerEvent) {
    if (!dragId) return;
    const svg = svgRef.current!;
    const { x, y } = clientToSvgCoords(svg, e.clientX, e.clientY);
    const nx = clamp(x - dragOffset.x, 0, WORLD.w - 10);
    const ny = clamp(y - dragOffset.y, 0, WORLD.h - 10);
    setItems((prev) =>
      prev.map((i) => (i.id === dragId ? { ...i, x: nx, y: ny } : i))
    );
    const item = items.find((i) => i.id === dragId);
    if (item) updateHoverFor({ ...item, x: nx, y: ny });
  }

  function onPointerUp(_: React.PointerEvent) {
    if (!dragId) return;
    const item = items.find((i) => i.id === dragId)!;
    const slot = findCompatibleSlot(item);
    if (slot) {
      snapItemToSlot(item.id, slot);
    } else {
      // If item was previously snapped to a slot, and we drop elsewhere, detach
      if (item.snappedTo) snapItemToSlot(item.id, undefined);
    }
    setHoverSlotId(null);
    setDragId(null);
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, isPickedUp: false } : i)));
  }

  // Keyboard accessibility: Enter to pick up/drop; Arrow keys to nudge
  function onKeyDownItem(e: React.KeyboardEvent, item: Item) {
    const step = 6;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (dragId === item.id || item.isPickedUp) {
        // drop
        const slot = findCompatibleSlot(item);
        if (slot) snapItemToSlot(item.id, slot);
        setDragId(null);
        setHoverSlotId(null);
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, isPickedUp: false } : i)));
      } else {
        // pick up
        setDragId(item.id);
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, isPickedUp: true } : i)));
      }
    } else if (item.isPickedUp) {
      if (e.key === "ArrowLeft") {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, x: clamp(i.x - step, 0, WORLD.w) } : i)));
      } else if (e.key === "ArrowRight") {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, x: clamp(i.x + step, 0, WORLD.w) } : i)));
      } else if (e.key === "ArrowUp") {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, y: clamp(i.y - step, 0, WORLD.h) } : i)));
      } else if (e.key === "ArrowDown") {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, y: clamp(i.y + step, 0, WORLD.h) } : i)));
      }
      const curr = items.find((i) => i.id === item.id);
      if (curr) updateHoverFor(curr);
    }
  }

  // Background / cabinetry drawing
  function MudroomBackground() {
    return (
      <g>
        {/* Wall */}
        <rect x={0} y={0} width={WORLD.w} height={WORLD.h} fill="#f3f4f6" />
        {/* Wainscot / bench area */}
        <rect x={80} y={110} width={800} height={360} fill="#e5e7eb" stroke="#d1d5db" strokeWidth={2} />
        {/* Top shelf */}
        <rect x={100} y={120} width={760} height={16} fill="#d1d5db" />
        {/* Hooks rail */}
        <rect x={130} y={140} width={700} height={10} fill="#cbd5e1" />
        {/* Cubbies frame */}
        <rect x={110} y={230} width={640} height={200} fill="#ffffff" stroke="#cbd5e1" strokeWidth={2} rx={8} ry={8} />
        {/* Cubbies grid lines */}
        {Array.from({ length: 4 }).map((_, i) => (
          <rect key={`v${i}`} x={110 + (i + 1) * 130} y={230} width={2} height={200} fill="#e5e7eb" />
        ))}
        <rect x={110} y={230 + 100} width={640} height={2} fill="#e5e7eb" />
        {/* Wide cubby / bench right */}
        <rect x={760} y={320} width={140} height={100} fill="#ffffff" stroke="#cbd5e1" strokeWidth={2} rx={8} ry={8} />
        {/* Floor zone */}
        <rect x={60} y={480} width={840} height={40} fill="#e5e7eb" />
        {/* Title */}
        <text x={WORLD.w / 2} y={40} textAnchor="middle" fontSize={24} fill="#111827" fontWeight={700}>
          Mudroom Organizer
        </text>
        <text x={WORLD.w / 2} y={68} textAnchor="middle" fontSize={14} fill="#374151">
          Drag items onto hooks, cubbies, or the floor area. Try to place them all!
        </text>
      </g>
    );
  }

  // Controls (outside SVG for ease)
  const Controls = () => (
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <button
        onClick={handleReset}
        className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-sm"
      >
        Reset
      </button>
      <button
        onClick={handleChallenge}
        className="px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-100 hover:bg-amber-200 text-sm"
      >
        Challenge Mode
      </button>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto px-3 py-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-sm"
        >
          Close
        </button>
      )}
    </div>
  );

  useEffect(() => {
    // If challenge mode is toggled, you could randomize item homes slightly
    if (challengeMode) {
      setItems((prev) =>
        prev.map((i, idx) => {
          const jitter = (n: number) => n + (Math.random() * 30 - 15);
          const y = WORLD.h - 60 + (idx % 2 === 0 ? 0 : 6);
          return {
            ...i,
            x: clamp(jitter(i.home.x), 40, WORLD.w - 100),
            y,
          };
        })
      );
    }
  }, [challengeMode]);

  // Highlight logic: mark the active hover slot
  const slotIsHighlighted = (slot: Slot) => slot.id === hoverSlotId;

  return (
    <div className="w-full h-full flex flex-col select-none" style={{ maxWidth: width }}>
      {/* Header / meter */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex-1">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Capacity</span>
            <span>
              {placedCount}/{capacityTotal} ({isNaN(capacityPct) ? 0 : capacityPct}%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all"
              style={{ width: `${clamp(isNaN(capacityPct) ? 0 : capacityPct, 0, 100)}%` }}
            />
          </div>
        </div>
        {placedCount === items.length && (
          <span className="text-emerald-600 text-sm font-medium">Nice! Everything’s organized 🎉</span>
        )}
      </div>

      <Controls />

      <div
        className="relative rounded-xl border border-gray-200 bg-white shadow-sm"
        style={{ width, height }}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WORLD.w} ${WORLD.h}`}
          width="100%"
          height="100%"
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          role="application"
          aria-label="Mudroom Organizer mini-game"
        >
          {/* Background cabinetry */}
          <MudroomBackground />

          {/* Slots (under items) */}
          {slots.map((s) => (
            <SlotSprite key={s.id} slot={s} highlighted={slotIsHighlighted(s)} />
          ))}

          {/* Items */}
          {orderedItems.map((item) => {
            const { w, h } = ITEM_BOUNDS[item.type];
            return (
              <g
                key={item.id}
                tabIndex={0}
                aria-label={`${item.label}${item.snappedTo ? " (placed)" : ""}`}
                role="button"
                onKeyDown={(e) => onKeyDownItem(e, item)}
                onPointerDown={(e) => onPointerDownItem(e, item.id)}
                cursor={dragId === item.id || item.isPickedUp ? "grabbing" : "grab"}
              >
                {/* A transparent drag handle rect to make pickup easier */}
                <rect x={item.x - 6} y={item.y - 6} width={w + 12} height={h + 26} fill="transparent" />
                <ItemSprite item={item} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Helper text */}
      <div className="mt-2 text-xs text-gray-600 leading-relaxed">
        <p>
          Tip: Hooks are best for coats, backpacks, hats, umbrellas and leashes. Cubbies love backpacks, shoes, balls,
          hats, groceries, and leashes. The floor zone fits shoes, balls, and groceries.
        </p>
        <p>
          Keyboard: Focus an item, press <kbd>Enter</kbd>/<kbd>Space</kbd> to pick up or drop, and use arrow keys to
          nudge while picked up.
        </p>
      </div>
    </div>
  );
}
