// types/media.ts
export type VideoItem = {
  title: string;
  src: string;        // YouTube/Vimeo/mp4
  thumb?: string;
  text?: string;
};

export type ImageItem = {
  src: string;
  alt?: string;
  thumb?: string;     // optional small preview
  meta?: string;      // optional caption
};

export type GalleryPayload = {
  title: string;
  items: ImageItem[];
  index?: number;     // start index
  text?: string;
};

export type MediaPanelState =
  | { kind: "video"; item: VideoItem }
  | { kind: "gallery"; payload: GalleryPayload }
  | null;
