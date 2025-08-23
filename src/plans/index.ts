import type { SVGProps } from "../types/floorplan";
import { PlanASVG } from "./planA";
import { PlanBSVG } from "./planB";

export const plans: Record<string, React.ComponentType<SVGProps>> = {
  planA: PlanASVG,
  planb: PlanBSVG,
};