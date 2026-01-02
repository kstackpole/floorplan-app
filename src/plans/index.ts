// plans/index.ts
import type { Plan } from "../types/floorplan";
import { planA } from "./planA";
import { ravenP33R } from "./raven-p33r";
import { planC } from "./planC";
import { dariusD786 } from "./darius-d786";
import { danielD237 } from "./daniel-d237";
import { AugustaP740 } from "./augusta-p740";
import { RaleighP741 } from "./raleigh-p741";
import { DillonD399 } from "./dillon-d399";
import { PowellD854 } from "./powell-d854";
import { PinecrestD853 } from "./pinecrest-d853";
import { TetonDA55 } from "./teton-da55";


const toLowerKey = (code: string) => code.toLowerCase();

export const plans: Record<string, Plan> = {
  [toLowerKey(planA.code)]: planA,
  [toLowerKey(planC.code)]: planC,
  [toLowerKey(ravenP33R.code)]: ravenP33R,
  [toLowerKey(dariusD786.code)]: dariusD786,
  [toLowerKey(danielD237.code)]: danielD237,
  [toLowerKey(AugustaP740.code)]: AugustaP740,
  [toLowerKey(RaleighP741.code)]: RaleighP741,
  [toLowerKey(DillonD399.code)]: DillonD399,
  [toLowerKey(PowellD854.code)]: PowellD854,
  [toLowerKey(PinecrestD853.code)]: PinecrestD853,
  [toLowerKey(TetonDA55.code)]: TetonDA55,
};

const humanize = (s: string) =>
  s.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

export function selectPlan(planId?: string): Plan & { title: string; description: string } {
  const key = toLowerKey(planId ?? "plana");
  const plan = plans[key] ?? plans["plana"] ?? Object.values(plans)[0];  

  // guarantee fields for UI
  return {
    ...plan,
    title: plan.title ?? humanize(plan.code),
    description: plan.description ?? "",
  };
}

export function getAllPlans(): (Plan & { title: string })[] {
  return Object.values(plans)
    .map((plan) => ({
      ...plan,
      title: plan.title ?? humanize(plan.code),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}


export function selectFloor(plan: Plan, floorIndex: number) {
  return plan.floors[floorIndex] ?? plan.floors[0];
}

export function findFloor(plan: Plan, floorId: string) {
  return plan.floors.find((f) => f.id === floorId);
}
