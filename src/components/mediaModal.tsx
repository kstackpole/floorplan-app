// components/MediaModal.tsx
import { Minimize2, ChevronLeft, ChevronRight } from "lucide-react";
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

export default function MediaModal() {
  const {
    mediaPanel,
    isModalOpen,
    closeModal,
    nextMedia,
    prevMedia,
    setMediaIndex,
  } = useFPState();

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (mediaPanel?.kind === "gallery") {
        if (e.key === "ArrowRight") nextMedia();
        if (e.key === "ArrowLeft") prevMedia();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, mediaPanel, closeModal, nextMedia, prevMedia]);

  if (!mediaPanel || !isModalOpen) return null;

  const title =
    mediaPanel.kind === "video" ? mediaPanel.item.title : mediaPanel.payload.title;
  const blurb =
    mediaPanel.kind === "video" ? mediaPanel.item.text : mediaPanel.payload.text;

  const wrapperClass =
    mediaPanel.kind === "video"
      ? "w-full aspect-[16/9] bg-black/5 rounded-xl overflow-hidden relative"
      : "w-full bg-black/5 rounded-xl overflow-hidden relative";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" aria-modal="true" role="dialog">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeModal} aria-hidden="true" />
      {/* modal card */}
      <div className="relative z-[101] w-[min(92vw,1100px)] max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-gray-900 truncate">{title}</h2>
          <button onClick={closeModal} aria-label="Minimize modal" className="rounded-lg p-1 hover:bg-gray-100">
            <Minimize2 size={18} />
          </button>
        </div>

        {/* make inner scrollable if content is tall */}
        <div className="p-4 overflow-auto">
          <div className={wrapperClass}>
            {/* VIDEO */}
            {mediaPanel.kind === "video" && (
              <VideoEmbed
                title={mediaPanel.item.title}
                src={mediaPanel.item.src}
                thumb={mediaPanel.item.thumb}
              />
            )}

            {/* GALLERY */}
            {mediaPanel.kind === "gallery" && (
              <GalleryView
                items={mediaPanel.payload.items}
                index={mediaPanel.payload.index ?? 0}
                onPrev={prevMedia}
                onNext={nextMedia}
                onJump={setMediaIndex}
              />
            )}

            {/* APP / MINI-GAME */}
            {mediaPanel.kind === "app" && (
              <div className="p-4 bg-white rounded-xl w-full">
                {mediaPanel.payload.render()}
              </div>
            )}
          </div>

          {/* blurb (works for video, gallery, app if provided) */}
          {blurb && <p className="mt-3 text-sm text-gray-700 leading-relaxed">{blurb}</p>}
        </div>
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
  return <div className="flex items-center justify-center h-[50vh] text-sm text-gray-500">Unsupported video</div>;
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

  // swipe
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let startX = 0;
    let dx = 0;
    let active = false;
    const down = (e: PointerEvent) => { active = true; startX = e.clientX; dx = 0; };
    const move = (e: PointerEvent) => { if (!active) return; dx = e.clientX - startX; };
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

  // preload neighbors
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
    <div ref={ref} className="w-full relative">
      <img
        src={current.src}
        alt={current.alt ?? ""}
        className="w-full h-auto max-h-[75vh] object-contain"
        loading="eager"
        draggable={false}
      />
      {items.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow"
            onClick={onPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow"
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
