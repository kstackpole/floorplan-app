import { useState, useEffect } from "react";

export type OptionKey = "primaryRetreat" | "morningKitchen" | "bbq" | "coveredPatio" | "luxuryBath" | "study" | "dining" | "primaryTwo";

export type FPState = {
  active: Record<OptionKey, boolean>;
  setActive: (k: OptionKey, v: boolean) => void;
  reset: () => void;
};

const useFPState = (() => {
  const subscribers = new Set<() => void>();
  const state: FPState = {
    active: { primaryRetreat: false, morningKitchen: false, bbq: false, coveredPatio: false, luxuryBath: false, study: false, dining: false, primaryTwo: false },
    setActive: (k, v) => {
      state.active[k] = v;
      subscribers.forEach((cb) => cb());
    },
    reset: () => {
      state.active = { primaryRetreat: false, morningKitchen: false, bbq: false, coveredPatio: false, luxuryBath: false, study: false, dining: false, primaryTwo: false };
      subscribers.forEach((cb) => cb());
    },
  };
  return function useLocalState() {
    const [, setTick] = useState(0);
    useEffect(() => {
      const cb = () => setTick((t) => t + 1);
      subscribers.add(cb);
      return () => void subscribers.delete(cb);
    }, []);
    return state;
  };
})();

export default useFPState;