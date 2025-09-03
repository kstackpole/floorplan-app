import { useState, useEffect } from "react";

export type OptionKey = string; // Now any string

export type FPState = {
  active: Record<OptionKey, boolean>;
  setActive: (k: OptionKey, v: boolean) => void;
  reset: (initialKeys?: OptionKey[]) => void; // Accepts keys to reset
  setKeys: (keys: OptionKey[]) => void; // New: set available keys
};

const useFPState = (() => {
  const subscribers = new Set<() => void>();
  let keys: OptionKey[] = [];
  const state: FPState = {
    active: {},
    setActive: (k, v) => {
      state.active[k] = v;
      subscribers.forEach((cb) => cb());
    },
    reset: (initialKeys = keys) => {
      state.active = {};
      initialKeys.forEach((k) => (state.active[k] = false));
      subscribers.forEach((cb) => cb());
    },
    setKeys: (newKeys) => {
      keys = newKeys;
      // Remove keys not in newKeys
      Object.keys(state.active).forEach((k) => {
        if (!newKeys.includes(k)) delete state.active[k];
      });
      // Add new keys
      newKeys.forEach((k) => {
        if (!(k in state.active)) state.active[k] = false;
      });
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