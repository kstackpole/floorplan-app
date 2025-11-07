// components/MediaModal.tsx
import { Minimize2, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useFPState from "../store/useFPState";
import type { ImageItem } from "../types/media";

/** Local type so this file is drop-in. If you already added it to ../types/media, feel free to import instead. */
type ComparePayload = {
  title: string;
  text?: string;
  before: { src: string; alt?: string; label?: string };
  after: { src: string; alt?: string; label?: string };
  /** starting split position (0–100), default 50 */
  start?: number;
};

function ytId(url: string) {
  const m = url.match(/(?:youtube\.com\/(?:.*[?&]v=|shorts\/)|youtu\.be\/)([\w-]{11})/i);
  return m?.[1] ?? null;
}
function vimeoId(url: string) {
  const m = url.match(/vimeo\.com\/(\d+)/i);
  return m?.[1] ?? null;
}

export default function MediaModal() {
  const {
    mediaPanel,
    isModalOpen,
    closeModal,
    nextMedia,
    prevMedia,
    setMediaIndex,
  } = useFPState();

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (mediaPanel?.kind === "gallery") {
        if (e.key === "ArrowRight") nextMedia();
        if (e.key === "ArrowLeft") prevMedia();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, mediaPanel, closeModal, nextMedia, prevMedia]);

  if (!mediaPanel || !isModalOpen) return null;

  const title =
    mediaPanel.kind === "video" ? mediaPanel.item.title : mediaPanel.payload.title;
  const blurb =
    mediaPanel.kind === "video" ? mediaPanel.item.text : mediaPanel.payload.text;

  const wrapperClass =
    mediaPanel.kind === "video"
      ? "w-full aspect-[16/9] bg-black/5 rounded-xl overflow-hidden relative"
      : "w-full bg-black/5 rounded-xl overflow-hidden relative";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" aria-modal="true" role="dialog">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeModal} aria-hidden="true" />
      {/* modal card */}
      <div className="relative z-[101] w-[min(92vw,1100px)] max-h-[99vh] rounded-2xl bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-gray-900 truncate">{title}</h2>
          <button onClick={closeModal} aria-label="Minimize modal" className="rounded-lg p-1 hover:bg-gray-100">
            <Minimize2 size={18} />
          </button>
        </div>

        {/* make inner scrollable if content is tall */}
        <div className="p-4 overflow-auto">
          <div className={wrapperClass}>
            {/* VIDEO */}
            {mediaPanel.kind === "video" && (
              <VideoEmbed
                title={mediaPanel.item.title}
                src={mediaPanel.item.src}
                thumb={mediaPanel.item.thumb}
              />
            )}

            {/* GALLERY */}
            {mediaPanel.kind === "gallery" && (
              <GalleryView
                items={mediaPanel.payload.items}
                index={mediaPanel.payload.index ?? 0}
                onPrev={prevMedia}
                onNext={nextMedia}
                onJump={setMediaIndex}
              />
            )}

            {/* APP / MINI-GAME */}
            {mediaPanel.kind === "app" && (
              <div className="p-4 bg-white rounded-xl w-full">
                {mediaPanel.payload.render()}
              </div>
            )}

            {/* COMPARE / BEFORE-AFTER */}
            {mediaPanel.kind === "compare" && (
              <CompareView payload={mediaPanel.payload as ComparePayload} />
            )}
          </div>

          {/* blurb (works for video, gallery, app, compare if provided) */}
          {blurb && <p className="mt-3 text-sm text-gray-700 leading-relaxed">{blurb}</p>}
        </div>
      </div>
    </div>
  );
}

function VideoEmbed({ title, src, thumb }: { title: string; src: string; thumb?: string }) {
  const yid = ytId(src);
  const vid = vimeoId(src);
  const isMp4 = /\.mp4(\?|$)/i.test(src);
  if (yid) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${yid}?modestbranding=1&rel=0&iv_load_policy=3&controls=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    );
  }
  if (vid) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://player.vimeo.com/video/${vid}`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }
  if (isMp4) {
    return (
      <video className="w-full h-full" controls poster={thumb} preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
    );
  }
  return <div className="flex items-center justify-center h-[50vh] text-sm text-gray-500">Unsupported video</div>;
}

function GalleryView({
  items,
  index,
  onPrev,
  onNext,
  onJump,
}: {
  items: ImageItem[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // swipe
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let startX = 0;
    let dx = 0;
    let active = false;
    const down = (e: PointerEvent) => { active = true; startX = e.clientX; dx = 0; };
    const move = (e: PointerEvent) => { if (!active) return; dx = e.clientX - startX; };
    const up = () => {
      if (!active) return;
      active = false;
      if (dx < -50) onNext();
      if (dx > 50) onPrev();
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [onNext, onPrev]);

  // preload neighbors
  useEffect(() => {
    if (items.length < 2) return;
    const prev = items[(index - 1 + items.length) % items.length];
    const next = items[(index + 1) % items.length];
    [prev, next].forEach((it) => {
      const img = new Image();
      img.src = it.src;
    });
  }, [index, items]);

  const current = items[index];

  return (
    <div ref={ref} className="w-full relative">
      <img
        src={current.src}
        alt={current.alt ?? ""}
        className="w-full h-auto max-h-[75vh] object-contain"
        loading="eager"
        draggable={false}
      />
      {items.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow"
            onClick={onPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow"
            onClick={onNext}
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          <Dots count={items.length} active={index} onClick={onJump} />
        </>
      )}
    </div>
  );
}

function Dots({
  count,
  active,
  onClick,
}: {
  count: number;
  active: number;
  onClick: (i: number) => void;
}) {
  return (
    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className={`h-1.5 rounded-full transition-all ${
            i === active ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

/** BEFORE/AFTER SLIDE REVEAL — CROPPING MASK (object-cover) */
function CompareView({ payload }: { payload: ComparePayload }) {
  const { before, after, start = 50 } = payload;

  // optional: allow payload.fit = "cover" | "contain" (default cover for crop mask)
  const fit: "cover" | "contain" = (payload as any).fit ?? "cover";

  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(start); // 0–100
  const [ratio, setRatio] = useState<number | null>(null); // width / height

  // Determine aspect ratio from AFTER image (fallback 16/9)
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setRatio(img.naturalWidth / img.naturalHeight);
      }
    };
    img.src = after.src;
  }, [after.src]);

  const setPos = (v: number) => {
    posRef.current = Math.max(0, Math.min(100, v));
    trackRef.current?.style.setProperty("--split", `${posRef.current}%`);
  };

  // init
  useEffect(() => setPos(start), [start]);

  // drag logic
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let active = false;
    const pctFromClientX = (clientX: number) => {
      const r = el.getBoundingClientRect();
      const clamp = (x: number, min: number, max: number) => Math.min(max, Math.max(min, x));
      return ((clamp(clientX, r.left, r.right) - r.left) / r.width) * 100;
    };

    const down = (e: PointerEvent) => {
      active = true;
      (e.target as Element).setPointerCapture?.(e.pointerId);
      setPos(pctFromClientX(e.clientX));
    };
    const move = (e: PointerEvent) => {
      if (!active) return;
      setPos(pctFromClientX(e.clientX));
    };
    const up = (e: PointerEvent) => {
      active = false;
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    };

    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  // keyboard on handle
  const onKey = (e: React.KeyboardEvent) => {
    const step = 5;
    if (e.key === "ArrowLeft") setPos(posRef.current - step);
    if (e.key === "ArrowRight") setPos(posRef.current + step);
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  const imgFitClass = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div className="w-full relative">
      <div
        ref={trackRef}
        className="relative w-full max-h-[75vh] bg-black/5 rounded-xl overflow-hidden"
        style={{
          ["--split" as any]: `${start}%`,
          aspectRatio: ratio ?? 16 / 9,
        }}
      >
        {/* AFTER (base) — fixed, full frame */}
        <img
          src={after.src}
          alt={after.alt ?? ""}
          className={`absolute inset-0 w-full h-full ${imgFitClass} select-none pointer-events-none`}
          style={{ objectPosition: "center center" }}
          draggable={false}
          loading="eager"
        />

        {/* BEFORE — fixed, full frame, clipped by clip-path (doesn't move/resize) */}
        <img
          src={before.src}
          alt=""
          className={`absolute inset-0 w-full h-full ${imgFitClass} select-none pointer-events-none`}
          style={{
            objectPosition: "center center",
            // Reveal left portion up to --split; the right side is masked.
            clipPath: "inset(0 calc(100% - var(--split)) 0 0)",
            willChange: "clip-path",
          }}
          draggable={false}
          loading="eager"
          aria-hidden="true"
        />

        {/* vertical divider */}
        <div className="absolute top-0 bottom-0" style={{ left: "var(--split)" }} aria-hidden="true">
          <div className="absolute -translate-x-1/2 top-0 bottom-0 w-px bg-white/80 shadow" />
        </div>

        {/* handle */}
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full p-2 bg-white/90 hover:bg-white shadow border cursor-col-resize"
          style={{ left: "var(--split)" }}
          onKeyDown={onKey}
          aria-label="Before/after slider"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(posRef.current)}
          aria-valuetext={`${Math.round(posRef.current)} percent`}
          tabIndex={0}
        >
          <div className="flex items-center gap-1">
            <ChevronLeft className="w-4 h-4 text-gray-700" />
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </div>
        </button>

        {/* labels (optional) */}
        {(before.label || after.label) && (
          <>
            {before.label && (
              <span className="absolute left-2 bottom-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
                {before.label}
              </span>
            )}
            {after.label && (
              <span className="absolute right-2 bottom-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
                {after.label}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}


