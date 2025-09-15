// store/useFPState.ts
import { useState, useEffect } from "react";

export type OptionKey = string;

export type MediaRef = {
  id: string;            // e.g., "mudroom"
  title: string;         // e.g., "Tame dirt and clutter..."
  text?: string;         // short blurb
  src: string;           // mp4 | YouTube | Vimeo URL (full URL)
  thumb?: string;        // optional preview image
};

export type FPState = {
  active: Record<OptionKey, boolean>;
  setActive: (k: OptionKey, v: boolean) => void;
  reset: (initialKeys?: OptionKey[]) => void;
  setKeys: (keys: OptionKey[]) => void;

  mirror: boolean;
  setMirror: (v: boolean) => void;

  // NEW ↓
  video: MediaRef | null;
  setVideo: (m: MediaRef | null) => void;
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
      Object.keys(state.active).forEach((k) => {
        if (!newKeys.includes(k)) delete state.active[k];
      });
      newKeys.forEach((k) => {
        if (!(k in state.active)) state.active[k] = false;
      });
      subscribers.forEach((cb) => cb());
    },

    mirror: false,
    setMirror: (v: boolean) => {
      state.mirror = v;
      subscribers.forEach((cb) => cb());
    },

    // NEW ↓
    video: null,
    setVideo: (m) => {
      state.video = m;
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
