import type { SVGProps } from "../types/floorplan";
import { planAOptions, PlanASVG } from "./planA";
import { planBOptions, PlanBSVG } from "./planB";
import { planCOptions, PlanCSVG } from "./planC";

type Floor = {
  name: string;
  SVG: React.ComponentType<SVGProps>;
  options: { key: string; label: string }[];
};

type Plan = { floors: Floor[] };

export const plans: Record<string, Plan> = {
  plana: {
    floors: [
      { name: "Main Level", SVG: PlanASVG, options: planAOptions },
    ],
  },
  planb: {
    floors: [
      { name: "Main Level", SVG: PlanBSVG, options: planBOptions },
      { name: "Second Floor", SVG: PlanBSVG, options: planBOptions },
    ],
  },
  planc: {
    floors: [
      { name: "Main Level", SVG: PlanCSVG, options: planCOptions },
      { name: "Second Floor", SVG: PlanCSVG, options: planCOptions },
      { name: "Basement", SVG: PlanCSVG, options: planCOptions },
    ],
  },
};
