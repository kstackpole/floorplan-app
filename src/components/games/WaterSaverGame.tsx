// components/games/WaterSaverGame.tsx
import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";

type Props = {
  gpmStandard?: number;   // default 2.5
  gpmEfficient?: number;  // default 1.8
  costPerGallon?: number; // default $0.015
};

export default function WaterSaverGame({
  gpmStandard = 2.5,
  gpmEfficient = 1.8,
  costPerGallon = 0.015,
}: Props) {
  const [minutes, setMinutes] = useState(10);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0→1 animation progress
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const gallonsStandard = minutes * gpmStandard;
  const gallonsEfficient = minutes * gpmEfficient;
  const savingsGallons = gallonsStandard - gallonsEfficient;
  const costStandard = gallonsStandard * costPerGallon;
  const costEfficient = gallonsEfficient * costPerGallon;
  const savingsCost = costStandard - costEfficient;

  useEffect(() => {
    if (!playing) return;

    const DUR = 1200; // ms
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const t = ts - startRef.current;
      const p = Math.min(1, t / DUR);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setPlaying(false);
        startRef.current = null;
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
    };
  }, [playing]);

  const reset = () => {
    setPlaying(false);
    setProgress(0);
  };

  // compute animated levels
  const levelStd = progress * gallonsStandard;
  const levelEff = progress * gallonsEfficient;
  // scale levels to bucket height with a simple ratio
  const maxGallons = Math.max(gallonsStandard, gallonsEfficient, 1);
  const levelHStd = `${(levelStd / maxGallons) * 100}%`;
  const levelHEff = `${(levelEff / maxGallons) * 100}%`;

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">Shower length: {minutes} min</label>
          <input
            type="range"
            min={1}
            max={30}
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
            className="w-full accent-gray-700"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { reset(); setPlaying(true); }}
            className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800"
          >
            <Play className="w-4 h-4" /> Play
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium bg-blue-400 hover:bg-gray-200"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      {/* Buckets */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Bucket
          title="Standard (2.5 gpm)"
          levelH={levelHStd}
          label={`${levelStd.toFixed(1)} gal`}
        />
        <Bucket
          title="Efficient (1.8 gpm)"
          levelH={levelHEff}
          label={`${levelEff.toFixed(1)} gal`}
        />
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-lg border p-3">
          <div className="text-gray-500">Water used (standard)</div>
          <div className="text-lg font-semibold text-gray-500">{gallonsStandard.toFixed(1)} gal</div>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-gray-500">Water used (efficient)</div>
          <div className="text-lg font-semibold text-green-600">{gallonsEfficient.toFixed(1)} gal</div>
        </div>
        <div className="rounded-lg border p-3 col-span-2">
          <div className="text-gray-500">Savings this shower</div>
          <div className="text-lg font-semibold text-green-600">
            {savingsGallons.toFixed(1)} gal · ${savingsCost.toFixed(2)}
          </div>
          <div className="text-xs text-gray-500 mt-1">Assumes ${costPerGallon.toFixed(3)}/gal for water + sewer.</div>
        </div>
      </div>
    </div>
  );
}

function Bucket({ title, levelH, label }: { title: string; levelH: string; label: string }) {
  return (
    <div className="rounded-xl border bg-white p-3">
      <div className="text-sm font-medium text-gray-700 mb-2">{title}</div>
      <div className="relative h-48 rounded-lg border bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
        {/* “Water” fill */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-blue-200 transition-[height] duration-150 ease-linear"
          style={{ height: levelH }}
        />
        {/* Rim */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-lg" />
        {/* Label */}
        <div className="absolute top-2 right-2 text-xs font-medium text-gray-700 bg-white/70 rounded px-1.5 py-0.5">
          {label}
        </div>
      </div>
    </div>
  );
}
