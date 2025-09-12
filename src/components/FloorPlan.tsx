// components/FloorPlan.tsx
import { Minimize2, ZoomIn, ZoomOut, Download } from "lucide-react";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import usePanZoom from "../hooks/usePanZoom";
import type { SVGProps } from "../types/floorplan";

type FloorPlanProps = {
  active: SVGProps["active"];
  SVG: React.ComponentType<SVGProps>;
  mirror?: boolean;
};

function FloorPlan({ active, SVG, mirror = false }: FloorPlanProps) {
  const {
    scale, tx, ty,
    onWheel, onPointerDown, onPointerMove, onPointerUp,
    zoomIn, zoomOut, reset
  } = usePanZoom();

  // Ref that your plan SVG attaches to via props
  const svgRef = useRef<SVGSVGElement | null>(null);

  const downloadPdf = async () => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    // Size from viewBox (falls back to client size)
    const vb = svgEl.viewBox?.baseVal;
    const vw = vb?.width || svgEl.clientWidth || 1200;
    const vh = vb?.height || svgEl.clientHeight || 1200;

    // Serialize the live SVG (includes mirror + pan/zoom)
    const svgString = new XMLSerializer().serializeToString(svgEl);

    // Render SVG → Canvas
    const scaleFactor = 2; // increase to 3/4 for crisper PDFs
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
          // white background (optional; helps if your SVG has transparency)
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(url);
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });

      // Canvas → PDF
      const pdf = new jsPDF({
        orientation: vw >= vh ? "landscape" : "portrait",
        unit: "pt",
        format: [vw, vh], // 1pt ~= 1px for our purposes
        compress: true,
      });

      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, vw, vh);
      pdf.save("floorplan.pdf");
    } catch (err) {
      console.error("Export to PDF failed:", err);
      // Optionally show a toast here
    }
  };

  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute right-3 top-3 z-10 flex gap-2 rounded-2xl bg-white/90 p-1 shadow">
        <button onClick={zoomOut} className="rounded-lg p-2 hover:bg-gray-100" title="Zoom out">
          <ZoomOut size={18} />
        </button>
        <button onClick={zoomIn} className="rounded-lg p-2 hover:bg-gray-100" title="Zoom in">
          <ZoomIn size={18} />
        </button>
        <button onClick={reset} className="rounded-lg p-2 hover:bg-gray-100" title="Reset view">
          <Minimize2 size={18} />
        </button>

        {/* NEW: Download PDF */}
        <button onClick={downloadPdf} className="rounded-lg p-2 hover:bg-gray-100" title="Download PDF">
          <Download size={18} />
        </button>
      </div>

      <div className="relative h-full w-full bg-white">
        <SVG
          active={active}
          panZoom={{ onWheel, onPointerDown, onPointerMove, onPointerUp, scale, tx, ty }}
          mirror={mirror}
          svgRef={svgRef}  // <-- attaches the live <svg> here
        />
      </div>
    </div>
  );
}

export default FloorPlan;
