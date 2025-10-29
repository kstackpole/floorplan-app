// usePanZoom.ts
import { useRef, useState } from "react";

export default function usePanZoom() {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  // refs hold the "live" values (don’t cause re-render)
  const scaleRef = useRef(1);
  const txRef = useRef(0);
  const tyRef = useRef(0);

  // rAF scheduler
  const frame = useRef<number | null>(null);
  const flush = () => {
    frame.current = null;
    // commit the latest refs into React state once per frame
    setScale(scaleRef.current);
    setTx(txRef.current);
    setTy(tyRef.current);
  };
  const schedule = () => {
    if (frame.current == null) frame.current = requestAnimationFrame(flush);
  };

  const onWheel: React.WheelEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault();
    const factor = Math.exp(-e.deltaY * 0.001);

    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const cursor = pt.matrixTransform(svg.getScreenCTM()!.inverse());

    const nextScale = Math.min(4, Math.max(0.4, scaleRef.current * factor));

    // zoom about cursor: move world so the cursor stays fixed
    txRef.current = cursor.x - (cursor.x - txRef.current) * factor;
    tyRef.current = cursor.y - (cursor.y - tyRef.current) * factor;
    scaleRef.current = nextScale;

    schedule();
  };

  const onPointerDown: React.PointerEventHandler<SVGSVGElement> = (e) => {
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerMove: React.PointerEventHandler<SVGSVGElement> = (e) => {
    if (!dragging.current) return;
    const dx = (e.clientX - last.current.x) / scaleRef.current;
    const dy = (e.clientY - last.current.y) / scaleRef.current;

    txRef.current += dx;
    tyRef.current += dy;
    last.current = { x: e.clientX, y: e.clientY };

    schedule();
  };

  const onPointerUp: React.PointerEventHandler<SVGSVGElement> = () => {
    dragging.current = false;
  };

  const zoomIn = () => {
    scaleRef.current = Math.min(4, scaleRef.current * 1.2);
    schedule();
  };
  const zoomOut = () => {
    scaleRef.current = Math.max(0.4, scaleRef.current / 1.2);
    schedule();
  };
  const reset = () => {
    scaleRef.current = 1;
    txRef.current = 0;
    tyRef.current = 0;
    schedule();
  };

  return {
    scale, tx, ty,
    onWheel, onPointerDown, onPointerMove, onPointerUp,
    zoomIn, zoomOut, reset
  };
}
