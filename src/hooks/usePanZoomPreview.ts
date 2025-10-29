// src/hooks/usePanZoomPreview.ts
import * as React from "react";

/** Accept nullable refs from useRef<SVGGElement | null>(null) */
type GRef =
  | React.RefObject<SVGGElement | null>
  | React.MutableRefObject<SVGGElement | null>;

type Opts = {
  /** OUTER pan/zoom <g> (never mirrored) */
  panRef: GRef;
  /** INNER heavy content <g> (mirrored here) */
  contentRef: GRef;
  /** SVG viewBox size */
  viewBox: { w: number; h: number };
  /** Optional drag threshold (px) */
  thresholdPx?: number;
  /** Optional zoom bounds */
  zoomMax?: number;
  zoomMin?: number;
};

export default function usePanZoomPreview({
  panRef,
  contentRef,
  viewBox,
  thresholdPx = 6,
  zoomMax = 4,
  zoomMin = 0.4,
}: Opts) {
  // Public state (for UI readouts only)
  const [scale, setScale] = React.useState(1);
  const [tx, setTx] = React.useState(0);
  const [ty, setTy] = React.useState(0);

  // Live values (no re-render)
  const scaleRef = React.useRef(1);
  const txRef = React.useRef(0);
  const tyRef = React.useRef(0);

  type Mode = "idle" | "tap" | "drag";
  const modeRef = React.useRef<Mode>("idle");
  const downRef = React.useRef<{ x: number; y: number } | null>(null);
  const lastDragRef = React.useRef<{ x: number; y: number } | null>(null);
  const suppressClickRef = React.useRef(false);
  const pointerIdRef = React.useRef<number | null>(null);

  // rAF batching for transforms
  const raf = React.useRef<number | null>(null);
  const apply = () => {
    raf.current = null;
    const pan = panRef.current;
    if (!pan) return;
    pan.setAttribute(
      "transform",
      `translate(${txRef.current} ${tyRef.current}) scale(${scaleRef.current})`
    );
  };
  const schedule = () => {
    if (raf.current == null) raf.current = requestAnimationFrame(apply);
  };

  // Preview bookkeeping
  const previewImgRef = React.useRef<SVGImageElement | null>(null);
  const prevVisibility = React.useRef<string | null>(null);

  const onWheel: React.WheelEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault();
    const factor = Math.exp(-e.deltaY * 0.001);

    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const cursor = pt.matrixTransform(svg.getScreenCTM()!.inverse());

    const next = clamp(scaleRef.current * factor, zoomMin, zoomMax);

    // zoom around cursor
    txRef.current = cursor.x - (cursor.x - txRef.current) * factor;
    tyRef.current = cursor.y - (cursor.y - tyRef.current) * factor;
    scaleRef.current = next;

    schedule();
  };
  // Native wheel handler so preventDefault actually works (Chrome passive wheel)
  const onWheelNative = (ev: WheelEvent) => {
    ev.preventDefault();

    // element that owns the listener
    const svg = (ev.currentTarget ?? ev.target) as SVGSVGElement;

    const factor = Math.exp(-ev.deltaY * 0.001);
    const next = clamp(scaleRef.current * factor, zoomMin, zoomMax);

    // Get cursor in SVG coords, fall back to center if CTM missing
    const ctm = svg.getScreenCTM();
    let cx = viewBox.w / 2, cy = viewBox.h / 2;
    if (ctm) {
      const pt = svg.createSVGPoint();
      pt.x = ev.clientX; pt.y = ev.clientY;
      const p = pt.matrixTransform(ctm.inverse());
      cx = p.x; cy = p.y;
    }

    // zoom about cursor
    txRef.current = cx - (cx - txRef.current) * (next / scaleRef.current);
    tyRef.current = cy - (cy - tyRef.current) * (next / scaleRef.current);
    scaleRef.current = next;

    schedule();
  };


  const onPointerDown: React.PointerEventHandler<SVGSVGElement> = (e) => {
    // DO NOT capture here — allow hotspot clicks
    modeRef.current = "tap";
    downRef.current = { x: e.clientX, y: e.clientY };
    lastDragRef.current = null;
    suppressClickRef.current = false;
    pointerIdRef.current = e.pointerId;
  };

  const onPointerMove: React.PointerEventHandler<SVGSVGElement> = async (e) => {
    const down = downRef.current;
    if (!down) return;

    if (modeRef.current === "tap") {
      const dx0 = e.clientX - down.x;
      const dy0 = e.clientY - down.y;
      if (Math.hypot(dx0, dy0) >= thresholdPx) {
        // Switch to drag: capture only now
        modeRef.current = "drag";
        suppressClickRef.current = true;
        e.currentTarget.classList.add("dragging");
        if (pointerIdRef.current != null) {
          (e.currentTarget as Element).setPointerCapture(pointerIdRef.current);
        }
        await startPreview(); // swap heavy vectors -> bitmap image
        lastDragRef.current = { x: e.clientX, y: e.clientY };
      }
      return;
    }

    if (modeRef.current === "drag") {
      const last = lastDragRef.current ?? { x: e.clientX, y: e.clientY };
      const dx = (e.clientX - last.x) / scaleRef.current;
      const dy = (e.clientY - last.y) / scaleRef.current;
      lastDragRef.current = { x: e.clientX, y: e.clientY };

      txRef.current += dx;
      tyRef.current += dy;
      schedule();
    }
  };

  const onPointerUp: React.PointerEventHandler<SVGSVGElement> = (e) => {
    // Release capture if any
    if (
      pointerIdRef.current != null &&
      (e.currentTarget as Element).hasPointerCapture?.(pointerIdRef.current)
    ) {
      (e.currentTarget as Element).releasePointerCapture(pointerIdRef.current);
    }
    pointerIdRef.current = null;

    if (modeRef.current === "drag") {
      e.currentTarget.classList.remove("dragging");
      stopPreview();
      lastDragRef.current = null;

      // sync values for any UI
      setScale(scaleRef.current);
      setTx(txRef.current);
      setTy(tyRef.current);

      // prevent synthetic click after a drag
      if (suppressClickRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    modeRef.current = "idle";
    downRef.current = null;
    suppressClickRef.current = false;
  };

  const zoomIn = () => {
    const next = clamp(scaleRef.current * 1.2, zoomMin, zoomMax);
    console.log("usePanZoomPreview.zoomIn current:", scaleRef.current, "next:", next);
    if (next === scaleRef.current) return;
    scaleRef.current = next;
    setScale(next);
    schedule();
  };

  const zoomOut = () => {
    const next = clamp(scaleRef.current / 1.2, zoomMin, zoomMax);
    console.log("usePanZoomPreview.zoomOut current:", scaleRef.current, "next:", next);
    if (next === scaleRef.current) return;
    scaleRef.current = next;
    setScale(next);
    schedule();
  };

  const reset = () => {
    console.log("usePanZoomPreview.reset (before)", {
      scale: scaleRef.current,
      tx: txRef.current,
      ty: tyRef.current,
    });
    scaleRef.current = 1;
    txRef.current = 0;
    tyRef.current = 0;
    setScale(1);
    setTx(0);
    setTy(0);
    schedule();
    console.log("usePanZoomPreview.reset (after)", {
      scale: scaleRef.current,
      tx: txRef.current,
      ty: tyRef.current,
    });
  };

  /** Build snapshot with embedded Fredoka + temporary text outline */
  async function startPreview() {
    const content = contentRef.current;
    const pan = panRef.current;
    if (!content || !pan) return;

    const fontCSS = await inlineBubblegumSans();
    const outlineCSS = `
      text {
        paint-order: stroke fill;
        stroke: rgba(255,255,255,0.9);
        stroke-width: 1.25px;
        stroke-linejoin: round;
      }
    `;

    const svgStr = wrapAsSVG(content, viewBox.w, viewBox.h, fontCSS + outlineCSS);
    const href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;

    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img.setAttribute("x", "0");
    img.setAttribute("y", "0");
    img.setAttribute("width", String(viewBox.w));
    img.setAttribute("height", String(viewBox.h));
    img.setAttributeNS("http://www.w3.org/1999/xlink", "href", href);
    img.setAttribute("pointer-events", "none"); // never intercept events
    img.style.imageRendering = "crisp-edges";

    pan.insertBefore(img, content);

    // Hide heavy vectors while dragging
    prevVisibility.current = content.getAttribute("visibility");
    content.setAttribute("visibility", "hidden");
    previewImgRef.current = img;
  }

  function stopPreview() {
    const content = contentRef.current;
    if (content) {
      if (prevVisibility.current == null) content.removeAttribute("visibility");
      else content.setAttribute("visibility", prevVisibility.current);
    }
    prevVisibility.current = null;

    const img = previewImgRef.current;
    if (img?.parentNode) img.parentNode.removeChild(img);
    previewImgRef.current = null;
  }

  return {
    scale,
    tx,
    ty,
    onWheel,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    zoomIn,
    zoomOut,
    reset,
    onWheelNative
  };
}

/* ---------------- helpers ---------------- */




function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

let cachedFontCSS: string | null = null;
async function inlineBubblegumSans(): Promise<string> {
  if (cachedFontCSS) return cachedFontCSS;

  // Pull Google CSS (contains several @font-face blocks for unicode ranges)
  const res = await fetch(
    "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap",
    { mode: "cors" }
  );
  const css = await res.text();

  // Grab ALL woff2 urls so we support latin + latin-ext, etc.
  const urls = [...css.matchAll(/url\((https:[^)]+\.woff2)\)/g)].map(m => m[1]);
  if (!urls.length) return "";

  // Fetch & embed each as its own @font-face (same family/weight)
  const faces: string[] = [];
  for (const u of urls) {
    const f = await fetch(u, { mode: "cors" });
    const buf = await f.arrayBuffer();
    const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
    const dataUrl = `data:font/woff2;base64,${b64}`;
    faces.push(`
@font-face {
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${dataUrl}) format('woff2');
}`);
  }
  cachedFontCSS = faces.join("\n");
  return cachedFontCSS;
}

function wrapAsSVG(g: SVGGElement, w: number, h: number, extraCSS = ""): string {
  const serializer = new XMLSerializer();

  // Clone so we can mutate safely
  const clone = g.cloneNode(true) as SVGGElement;

  // Force font-family on all text/tspan inside the snapshot
  const texts = clone.querySelectorAll<SVGTextElement | SVGTSpanElement>("text, tspan");
  texts.forEach((el) => {
    // If author style already sets a family, the !important CSS below will still win.
    el.setAttribute("font-family", "'Fredoka', sans-serif");
  });

  // Preserve mirror/transform from live group
  const t = g.getAttribute("transform");
  if (t) clone.setAttribute("transform", t);

  const inner = serializer.serializeToString(clone);

  // Root namespaces + strong CSS that both embeds the font and forces it on text
  const styleBlock = `
<style>
${extraCSS}
/* Force our family during preview, even if elements had inline styles */
text, tspan { font-family: 'Fredoka', sans-serif !important; }
</style>`;

  // Some renderers are pickier unless xlink ns is present
  return `<svg xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${styleBlock}
    ${inner}
  </svg>`;
}

