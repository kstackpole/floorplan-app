// types/floorplan.ts
import type { FPState } from "../store/useFPState";
import * as React from "react";

// ===== Pan/Zoom + SVG props (unchanged) =====
export type PanZoomHandlers = {
  onWheel: React.WheelEventHandler<SVGSVGElement>;
  onPointerDown: React.PointerEventHandler<SVGSVGElement>;
  onPointerMove: React.PointerEventHandler<SVGSVGElement>;
  onPointerUp: React.PointerEventHandler<SVGSVGElement>;
  scale: number; tx: number; ty: number;
  zoomIn?: () => void; zoomOut?: () => void; reset?: () => void;
  onWheelNative?: (ev: WheelEvent) => void;
};

export type SVGProps = {
  active: FPState["active"];
  svgRef?: React.RefObject<SVGSVGElement | null>;
  panRef?: React.RefObject<SVGGElement | null>;
  contentRef?: React.RefObject<SVGGElement | null>;
  panZoom: PanZoomHandlers;
  mirror?: boolean;
};

// ===== NEW: plan metadata types =====
export type OptionDef = { key: string; label: string; group?: string };

export type Floor = {
  id: string;
  name: string;
  SVG: React.ComponentType<SVGProps>;
  options: OptionDef[];
};

export type Plan = {
  code: string;
  title?: string;        // keep optional while migrating old plans
  description?: string;  // same here
  floors: Floor[];
};
