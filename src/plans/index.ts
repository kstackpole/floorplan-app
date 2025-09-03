import type { SVGProps } from "../types/floorplan";
import { planAOptions, PlanASVG } from "./planA";
import { planBOptions, PlanBSVG } from "./planB";

type Plan = {
  SVG: React.ComponentType<SVGProps>;
  options: { key: string; label: string }[];
};

export const plans: Record<string, Plan> = {
  plana: { SVG: PlanASVG, options: planAOptions },
  planb: { SVG: PlanBSVG, options: planBOptions },
};