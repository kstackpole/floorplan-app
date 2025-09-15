// components/VideoPanel.tsx
import { X } from "lucide-react";
import useFPState from "../store/useFPState";

function ytId(url: string) {
  const m = url.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([\w-]{11})/i);
  return m?.[1] ?? null;
}

function vimeoId(url: string) {
  const m = url.match(/vimeo\.com\/(\d+)/i);
  return m?.[1] ?? null;
}

export default function VideoPanel() {
  const { video, setVideo } = useFPState();

  if (!video) return null;

  const yid = ytId(video.src);
  const vid = vimeoId(video.src);
  const isMp4 = /\.mp4(\?|$)/i.test(video.src);

  return (
    <div className="mx-3 mb-4 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        <div className="font-medium text-gray-800">{video.title}</div>
        <button
          onClick={() => setVideo(null)}
          aria-label="Close video"
          className="rounded-lg p-1 hover:bg-gray-100"
        >
          <X size={16} />
        </button>
      </div>

      <div className="p-3">
        <div className="w-full h-96 rounded-xl overflow-hidden bg-black/5">
          {yid && (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${yid}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          )}
          {!yid && vid && (
            <iframe
              className="w-full h-full"
              src={`https://player.vimeo.com/video/${vid}`}
              title={video.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
          {!yid && !vid && isMp4 && (
            <video className="w-full h-full" controls poster={video.thumb}>
              <source src={video.src} type="video/mp4" />
            </video>
          )}
        </div>

        {video.text && (
          <p className="mt-3 text-sm text-gray-600">{video.text}</p>
        )}
      </div>
    </div>
  );
}
