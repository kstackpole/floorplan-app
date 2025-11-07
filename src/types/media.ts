// types/media.ts
import React from "react";

export type VideoItem = {
  title: string;
  src: string;
  thumb?: string;
  text?: string;
};

export type ImageItem = {
  src: string;
  alt?: string;
  thumb?: string;
  meta?: string;
};

export type GalleryPayload = {
  title: string;
  items: ImageItem[];
  index?: number;
  text?: string;
};

export type AppPayload = {
  title: string;
  text?: string;
  render: () => React.ReactNode;
};

export type ComparePayload = {
  title: string;
  text?: string;
  before: { src: string; alt?: string; label?: string };
  after:  { src: string; alt?: string; label?: string };
  start?: number; // 0–100
};

export type MediaPanelState =
  | { kind: "video"; item: VideoItem }
  | { kind: "gallery"; payload: GalleryPayload }
  | { kind: "app"; payload: AppPayload }
  | { kind: "compare"; payload: ComparePayload }
  | null;
