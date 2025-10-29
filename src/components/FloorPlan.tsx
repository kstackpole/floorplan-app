// components/FloorPlan.tsx
import { Minimize2, ZoomIn, ZoomOut, Download } from "lucide-react";
import usePanZoomPreview from "../hooks/usePanZoomPreview";
import { useRef, useEffect, useState } from "react";
import { jsPDF } from "jspdf";

import type { SVGProps } from "../types/floorplan";

type FloorPlanProps = {
  active: SVGProps["active"];
  SVG: React.ComponentType<SVGProps>;
  mirror?: boolean;
};

function FloorPlan({ active, SVG, mirror = false }: FloorPlanProps) {
  // Refs used by pan/zoom hook
  const panRef = useRef<SVGGElement | null>(null);
  const contentRef = useRef<SVGGElement | null>(null);

  // <svg> element (export + viewBox probing + native wheel binding)
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [viewBox, setViewBox] = useState({ w: 1200, h: 1200 });

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    try {
      const vb = el.viewBox?.baseVal;
      const w = vb?.width || el.clientWidth || 1200;
      const h = vb?.height || el.clientHeight || 1200;
      setViewBox({ w, h });
    } catch {
      setViewBox({ w: 1200, h: 1200 });
    }
  }, []);

  const {
    scale, tx, ty,
    onWheel, onPointerDown, onPointerMove, onPointerUp,
    zoomIn, zoomOut, reset,
    onWheelNative, // from hook
  } = usePanZoomPreview({ panRef, contentRef, viewBox });

  // Bind non-passive wheel so preventDefault works (stops page scroll)
  useEffect(() => {
    const el = svgRef.current;
    if (!el || !onWheelNative) return;
    const handler = onWheelNative as unknown as EventListener;
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [onWheelNative]);

  const downloadPdf = async () => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const vb = svgEl.viewBox?.baseVal;
    const vw = vb?.width || svgEl.clientWidth || 1200;
    const vh = vb?.height || svgEl.clientHeight || 1200;

    const svgString = new XMLSerializer().serializeToString(svgEl);

    const scaleFactor = 2;
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.floor(vw * scaleFactor));
    canvas.height = Math.max(1, Math.floor(vh * scaleFactor));
    const ctx = canvas.getContext("2d")!;

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    try {
      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(url);
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });

      const pdf = new jsPDF({
        orientation: vw >= vh ? "landscape" : "portrait",
        unit: "pt",
        format: [vw, vh],
        compress: true,
      });

      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, vw, vh);
      pdf.save("floorplan.pdf");
    } catch (err) {
      console.error("Export to PDF failed:", err);
    }
  };

  return (
    <div className="relative h-full w-full bg-white overscroll-none">
      <div className="absolute right-3 top-3 z-10 flex gap-2 rounded-2xl bg-white/90 p-1 shadow">
        <button
          onClick={zoomOut}
          className="rounded-lg p-2 hover:bg-gray-100"
          title="Zoom out"
        >
          <ZoomOut size={18} />
        </button>
        <button
          onClick={zoomIn}
          className="rounded-lg p-2 hover:bg-gray-100"
          title="Zoom in"
        >
          <ZoomIn size={18} />
        </button>
        <button
          onClick={reset}
          className="rounded-lg p-2 hover:bg-gray-100"
          title="Reset view"
        >
          <Minimize2 size={18} />
        </button>

        <button
          onClick={downloadPdf}
          className="rounded-lg p-2 hover:bg-gray-100"
          title="Download PDF"
        >
          <Download size={18} />
        </button>
      </div>

      <div className="relative h-full w-full bg-white">
        <SVG
          active={active}
          mirror={mirror}
          svgRef={svgRef}
          panRef={panRef}
          contentRef={contentRef}
          // You can omit onWheel now; plan SVG should not attach it.
          panZoom={{ onWheel, onPointerDown, onPointerMove, onPointerUp, scale, tx, ty, zoomIn, zoomOut, reset }}
        />
      </div>
    </div>
  );
}

export default FloorPlan;
