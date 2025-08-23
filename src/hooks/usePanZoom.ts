import { useRef, useState } from "react";

export default function usePanZoom() {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const dragging = useRef(false);
  const last = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const onWheel: React.WheelEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault();
    const delta = -e.deltaY;
    const factor = Math.exp(delta * 0.001);
    const newScale = Math.min(4, Math.max(0.4, scale * factor));

    // zoom toward cursor
    const pt = (e.target as SVGSVGElement).createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const svg = e.currentTarget;
    const cursor = pt.matrixTransform(svg.getScreenCTM()?.inverse());

    // translate so the point under cursor stays under the cursor
    const nx = cursor.x * (1 - factor) + tx * factor;
    const ny = cursor.y * (1 - factor) + ty * factor;

    setScale(newScale);
    setTx(nx);
    setTy(ny);
  };

  const onPointerDown: React.PointerEventHandler<SVGSVGElement> = (e) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerMove: React.PointerEventHandler<SVGSVGElement> = (e) => {
    if (!dragging.current) return;
    const dx = (e.clientX - last.current.x) / scale;
    const dy = (e.clientY - last.current.y) / scale;
    setTx((t) => t + dx);
    setTy((t) => t + dy);
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp: React.PointerEventHandler<SVGSVGElement> = (_e) => {
    dragging.current = false;
  };

  const zoomIn = () => setScale((s) => Math.min(4, s * 1.2));
  const zoomOut = () => setScale((s) => Math.max(0.4, s / 1.2));
  const reset = () => { setScale(1); setTx(0); setTy(0); };

  return { scale, tx, ty, onWheel, onPointerDown, onPointerMove, onPointerUp, zoomIn, zoomOut, reset };
}