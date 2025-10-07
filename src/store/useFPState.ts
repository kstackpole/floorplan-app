// store/useFPState.ts
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

export type OptionKey = string;

/** Existing video payload */
export type MediaRef = {
  id: string;        // e.g., "mudroom"
  title: string;     // e.g., "Tame dirt and clutter..."
  text?: string;     // short blurb
  src: string;       // mp4 | YouTube | Vimeo URL (full URL)
  thumb?: string;    // optional preview image
};

/** Gallery types */
export type ImageItem = {
  src: string;
  alt?: string;
  thumb?: string;    // optional small preview
  meta?: string;     // optional caption
};

export type GalleryPayload = {
  title: string;
  items: ImageItem[];
  index?: number;    // start index
  text?: string;
};

/** NEW: mini-app payload */
export type AppPayload = {
  title: string;
  text?: string;            // optional blurb shown under app
  render: () => ReactNode; // factory that returns a mini-app component
};

/** Unified media state */
export type MediaPanelState =
  | { kind: "video"; item: MediaRef }
  | { kind: "gallery"; payload: GalleryPayload }
  | { kind: "app"; payload: AppPayload }   // ← NEW
  | null;

export type FPState = {
  active: Record<OptionKey, boolean>;
  setActive: (k: OptionKey, v: boolean) => void;
  reset: (initialKeys?: OptionKey[]) => void;
  setKeys: (keys: OptionKey[]) => void;

  mirror: boolean;
  setMirror: (v: boolean) => void;

  /** Legacy video state (kept for back-compat) */
  video: MediaRef | null;
  setVideo: (m: MediaRef | null) => void;

  /** Unified media panel */
  mediaPanel: MediaPanelState;
  openVideo: (item: MediaRef) => void;
  openGallery: (payload: GalleryPayload) => void;
  openApp: (payload: AppPayload) => void;      // ← NEW
  closeMedia: () => void;

  /** Modal controls */
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;

  /** Gallery navigation helpers */
  nextMedia: () => void;
  prevMedia: () => void;
  setMediaIndex: (i: number) => void;
};

const useFPState = (() => {
  const subscribers = new Set<() => void>();
  let keys: OptionKey[] = [];

  const notify = () => subscribers.forEach((cb) => cb());

  const state: FPState = {
    active: {},
    setActive: (k, v) => {
      state.active[k] = v;
      notify();
    },
    reset: (initialKeys = keys) => {
      state.active = {};
      initialKeys.forEach((k) => (state.active[k] = false));
      notify();
    },
    setKeys: (newKeys) => {
      keys = newKeys;
      Object.keys(state.active).forEach((k) => {
        if (!newKeys.includes(k)) delete state.active[k];
      });
      newKeys.forEach((k) => {
        if (!(k in state.active)) state.active[k] = false;
      });
      notify();
    },

    mirror: false,
    setMirror: (v: boolean) => {
      state.mirror = v;
      notify();
    },

    /** Legacy video field */
    video: null,
    setVideo: (m) => {
      // Back-compat: also drive the new unified panel
      state.video = m;
      if (m) {
        state.mediaPanel = { kind: "video", item: m };
      } else if (state.mediaPanel?.kind === "video") {
        state.mediaPanel = null;
      }
      notify();
    },

    /** Unified media panel + controls */
    mediaPanel: null,
    openVideo: (item) => {
      state.video = null; // keep legacy field clear to avoid confusion
      state.mediaPanel = { kind: "video", item };
      notify();
    },
    openGallery: (payload) => {
      state.video = null;
      state.mediaPanel = {
        kind: "gallery",
        payload: { ...payload, index: payload.index ?? 0 },
      };
      notify();
    },
    openApp: (payload) => {
      state.video = null;
      state.mediaPanel = { kind: "app", payload };
      notify();
    },
    closeMedia: () => {
      state.mediaPanel = null;
      // Intentionally do not change isModalOpen; the modal checks both.
      notify();
    },

    /** Modal controls */
    isModalOpen: false,
    openModal: () => {
      state.isModalOpen = true;
      notify();
    },
    closeModal: () => {
      state.isModalOpen = false;
      notify();
    },
    toggleModal: () => {
      state.isModalOpen = !state.isModalOpen;
      notify();
    },

    /** Gallery nav helpers */
    nextMedia: () => {
      const s = state.mediaPanel;
      if (s?.kind !== "gallery") return;
      const { items } = s.payload;
      if (!items.length) return;
      const i = (s.payload.index ?? 0) + 1;
      state.mediaPanel = {
        kind: "gallery",
        payload: { ...s.payload, index: i % items.length },
      };
      notify();
    },
    prevMedia: () => {
      const s = state.mediaPanel;
      if (s?.kind !== "gallery") return;
      const { items } = s.payload;
      if (!items.length) return;
      const i = (s.payload.index ?? 0) - 1;
      const next = (i + items.length) % items.length;
      state.mediaPanel = {
        kind: "gallery",
        payload: { ...s.payload, index: next },
      };
      notify();
    },
    setMediaIndex: (i: number) => {
      const s = state.mediaPanel;
      if (s?.kind !== "gallery") return;
      const { items } = s.payload;
      if (!items.length) return;
      const clamped = Math.max(0, Math.min(i, items.length - 1));
      state.mediaPanel = {
        kind: "gallery",
        payload: { ...s.payload, index: clamped },
      };
      notify();
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
