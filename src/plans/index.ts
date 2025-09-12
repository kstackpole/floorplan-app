import type { SVGProps as BaseSVGProps } from "../types/floorplan";
import { planA } from "./planA";
import { ravenP33R } from "./raven-p33r";
import { planB } from "./planB";
import { planC } from "./planC";

// ---- Shared types used by the app ----
export type OptionDef = { key: string; label: string };
export type SVGProps = BaseSVGProps;

export type Floor = {
  id: string;                                   // "main" | "second" | "basement" ...
  name: string;                                 // display label
  SVG: React.ComponentType<SVGProps>;           // floor-specific SVG component
  options: OptionDef[];                         // floor-specific options
};

export type Plan = {
  code: string;                                 // e.g. "plana"
  floors: Floor[];
};

// ---- Build the plans map (lowercased keys) ----
const toLowerKey = (code: string) => code.toLowerCase();

export const plans: Record<string, Plan> = {
  [toLowerKey(planA.code)]: planA,
  [toLowerKey(planB.code)]: planB,
  [toLowerKey(planC.code)]: planC,
  [toLowerKey(ravenP33R.code)]: ravenP33R,
};

// ---- Safe selectors used by App.tsx ----
export function selectPlan(planId?: string): Plan {
  const key = toLowerKey(planId ?? "plana");
  return plans[key] ?? plans["plana"] ?? Object.values(plans)[0];
}

export function selectFloor(plan: Plan, floorIndex: number): Floor {
  return plan.floors[floorIndex] ?? plan.floors[0];
}

// Optional: find by floor id ("main", "second", ...)
export function findFloor(plan: Plan, floorId: string): Floor | undefined {
  return plan.floors.find(f => f.id === floorId);
}
