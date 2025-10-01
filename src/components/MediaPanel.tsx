// components/MediaPanel.tsx
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import useFPState from "../store/useFPState";
import type { ImageItem } from "../types/media";

function ytId(url: string) {
  const m = url.match(/(?:youtube\.com\/(?:.*[?&]v=|shorts\/)|youtu\.be\/)([\w-]{11})/i);
  return m?.[1] ?? null;
}
function vimeoId(url: string) {
  const m = url.match(/vimeo\.com\/(\d+)/i);
  return m?.[1] ?? null;
}

export default function MediaPanel() {
  const { mediaPanel, closeMedia, nextMedia, prevMedia, setMediaIndex } = useFPState();

  useEffect(() => {
    if (!mediaPanel) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMedia();
      if (mediaPanel.kind === "gallery") {
        if (e.key === "ArrowRight") nextMedia();
        if (e.key === "ArrowLeft") prevMedia();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mediaPanel, closeMedia, nextMedia, prevMedia]);

  if (!mediaPanel) return null;

  const panelTitle =
    mediaPanel.kind === "video" ? mediaPanel.item.title : mediaPanel.payload.title;
  const panelText =
    mediaPanel.kind === "video" ? mediaPanel.item.text : mediaPanel.payload.text;
    const wrapperBase = "w-full rounded-xl overflow-hidden bg-black/5 relative select-none";
    const wrapperClass = mediaPanel.kind === "video" ? `${wrapperBase} aspect-[9/16]` : wrapperBase;

  return (
    <div className="mx-3 mb-4 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        <div className="font-medium text-gray-800">{panelTitle}</div>
        <button onClick={closeMedia} aria-label="Close" className="rounded-lg p-1 hover:bg-gray-100">
          <X size={16} />
        </button>
      </div>

      <div className="p-3">
        <div className={wrapperClass}>
          {mediaPanel.kind === "video" ? (
            <VideoEmbed
              title={mediaPanel.item.title}
              src={mediaPanel.item.src}
              thumb={mediaPanel.item.thumb}
            />
          ) : (
            <GalleryView
              items={mediaPanel.payload.items}
              index={mediaPanel.payload.index ?? 0}
              onPrev={prevMedia}
              onNext={nextMedia}
              onJump={setMediaIndex}
            />
          )}
        </div>

        {panelText && <p className="mt-3 text-sm text-gray-600">{panelText}</p>}
      </div>
    </div>
  );
}

function VideoEmbed({ title, src, thumb }: { title: string; src: string; thumb?: string }) {
  const yid = ytId(src);
  const vid = vimeoId(src);
  const isMp4 = /\.mp4(\?|$)/i.test(src);

  if (yid) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${yid}?modestbranding=1&rel=0&iv_load_policy=3&controls=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    );
  }
  if (vid) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://player.vimeo.com/video/${vid}`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }
  if (isMp4) {
    return (
      <video className="w-full h-full" controls poster={thumb} preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
    );
  }
  return <div className="flex items-center justify-center h-full text-sm text-gray-500">Unsupported video</div>;
}

function GalleryView({
  items,
  index,
  onPrev,
  onNext,
  onJump,
}: {
  items: ImageItem[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let startX = 0;
    let dx = 0;
    let active = false;
    const down = (e: PointerEvent) => {
      active = true;
      startX = e.clientX;
      dx = 0;
    };
    const move = (e: PointerEvent) => {
      if (!active) return;
      dx = e.clientX - startX;
    };
    const up = () => {
      if (!active) return;
      active = false;
      if (dx < -50) onNext();
      if (dx > 50) onPrev();
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [onNext, onPrev]);

  useEffect(() => {
    if (items.length < 2) return;
    const prev = items[(index - 1 + items.length) % items.length];
    const next = items[(index + 1) % items.length];
    [prev, next].forEach((it) => {
      const img = new Image();
      img.src = it.src;
    });
  }, [index, items]);

  const current = items[index];

  return (
    <div ref={ref} className="w-full h-full relative">
      <img
        src={current.src}
        alt={current.alt ?? ""}
        className="w-full h-full object-contain"
        loading="eager"
        draggable={false}
      />
      {items.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow"
            onClick={onPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow"
            onClick={onNext}
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          <Dots count={items.length} active={index} onClick={onJump} />
        </>
      )}
    </div>
  );
}

function Dots({
  count,
  active,
  onClick,
}: {
  count: number;
  active: number;
  onClick: (i: number) => void;
}) {
  return (
    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className={`h-1.5 rounded-full transition-all ${
            i === active ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
