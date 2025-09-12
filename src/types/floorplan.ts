import type { FPState } from "../store/useFPState";

export type SVGProps = {
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
    svgRef?: React.Ref<SVGSVGElement>;
    mirror?: boolean; 
};