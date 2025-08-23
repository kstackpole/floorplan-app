import { Minimize2, ZoomIn, ZoomOut } from "lucide-react";
import type { FPState } from "../store/useFPState";
import usePanZoom from "../hooks/usePanZoom";
// import type { SVGProps } from "../types/floorplan";

export type LocalSVGProps = {
  active: FPState["active"];
  panZoom: {
    onWheel: React.WheelEventHandler<SVGSVGElement>;
    onPointerDown: React.PointerEventHandler<SVGSVGElement>;
    onPointerMove: React.PointerEventHandler<SVGSVGElement>;
    onPointerUp: React.PointerEventHandler<SVGSVGElement>;
    scale: number;
    tx: number;
    ty: number;
  };
};

type FloorPlanProps = {
  active: LocalSVGProps["active"];
  SVG: React.ComponentType<LocalSVGProps>;
};


function FloorPlan({ active, SVG }: FloorPlanProps) {
    const { scale, tx, ty, onWheel, onPointerDown, onPointerMove, onPointerUp, zoomIn, zoomOut, reset } = usePanZoom();

    return (
        <div className="relative h-full w-full bg-white">
            <div className="absolute right-3 top-3 z-10 flex gap-2 rounded-2xl bg-white/90 p-1 shadow">
                <button onClick={zoomOut} className="rounded-lg p-2 hover:bg-gray-100" title="Zoom out"><ZoomOut size={18} /></button>
                <button onClick={zoomIn} className="rounded-lg p-2 hover:bg-gray-100" title="Zoom in"><ZoomIn size={18} /></button>
                <button onClick={reset} className="rounded-lg p-2 hover:bg-gray-100" title="Reset view"><Minimize2 size={18} /></button>
            </div>
            <div className="relative h-full w-full bg-white">
                <SVG
                    active={active}
                    panZoom={{ onWheel, onPointerDown, onPointerMove, onPointerUp, scale, tx, ty }}
                />
            </div>
        </div>
    );
}

export default FloorPlan;