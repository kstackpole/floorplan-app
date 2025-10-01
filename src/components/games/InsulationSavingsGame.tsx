import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";

type Fuel = "electricity" | "gas";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// Simple physics-ish model (order-of-magnitude estimator):
// Seasonal Energy (BTU) ≈ Area * U * ΔT * hours
// U = 1 / R
// Convert BTU -> kWh (1 kWh = 3412 BTU), or -> therms (1 therm = 100,000 BTU)

export default function InsulationSavingsGame() {
  // Inputs
  const [area, setArea] = useState(1800);         // ft² envelope area
  const [rStd, setRStd] = useState(13);           // standard insulation R
  const [rPro, setRPro] = useState(21);           // your insulation R
  const [deltaT, setDeltaT] = useState(30);       // average ΔT (°F) during season
  const [heatingDays, setHeatingDays] = useState(120);
  const [coolingDays, setCoolingDays] = useState(90);
  const [fuel, setFuel] = useState<Fuel>("gas");  // for heating
  const [elecRate, setElecRate] = useState(0.15); // $/kWh
  const [gasRate, setGasRate] = useState(1.20);   // $/therm
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // Derived
  const hoursHeat = heatingDays * 24;
  const hoursCool = coolingDays * 24;
  const Ustd = 1 / clamp(rStd, 1, 1000);
  const Upro = 1 / clamp(rPro, 1, 1000);

  const btuHeatStd = area * Ustd * deltaT * hoursHeat;
  const btuHeatPro = area * Upro * deltaT * hoursHeat;

  // cooling uses electricity by default (A/C)
  const btuCoolStd = area * Ustd * deltaT * hoursCool;
  const btuCoolPro = area * Upro * deltaT * hoursCool;

  const kWhHeatStd = btuHeatStd / 3412;
  const kWhHeatPro = btuHeatPro / 3412;
  const thermHeatStd = btuHeatStd / 100000;
  const thermHeatPro = btuHeatPro / 100000;

  const kWhCoolStd = btuCoolStd / 3412;
  const kWhCoolPro = btuCoolPro / 3412;

  const heatCostStd = fuel === "gas" ? thermHeatStd * gasRate : kWhHeatStd * elecRate;
  const heatCostPro = fuel === "gas" ? thermHeatPro * gasRate : kWhHeatPro * elecRate;

  const coolCostStd = kWhCoolStd * elecRate;
  const coolCostPro = kWhCoolPro * elecRate;

  const totalStd = heatCostStd + coolCostStd;
  const totalPro = heatCostPro + coolCostPro;
  const totalSavings = totalStd - totalPro;

  // animation
  useEffect(() => {
    if (!playing) return;
    const DUR = 1200;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const t = ts - startRef.current;
      const p = Math.min(1, t / DUR);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else {
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

  // animated bar heights (relative to worst of the two)
  const maxCost = Math.max(totalStd, totalPro, 1);
  const hStd = `${(progress * totalStd / maxCost) * 100}%`;
  const hPro = `${(progress * totalPro / maxCost) * 100}%`;

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border p-3">
          <div className="text-sm font-semibold mb-2 text-gray-500">Home & Envelope</div>
          <label className="flex items-center justify-between text-sm text-gray-500">
            Area (ft²)
            <input
              type="number" value={area} min={500} max={8000}
              onChange={(e) => setArea(clamp(parseInt(e.target.value || "0", 10), 500, 8000))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
          <div className="mt-3">
            <label className="text-sm font-medium text-gray-500">Standard R-Value: R{rStd}</label>
            <input type="range" min={9} max={30} value={rStd}
              onChange={(e) => setRStd(parseInt(e.target.value, 10))}
              className="w-full accent-gray-700" />
          </div>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-500">Specialized R-Value: R{rPro}</label>
            <input type="range" min={12} max={50} value={rPro}
              onChange={(e) => setRPro(parseInt(e.target.value, 10))}
              className="w-full accent-gray-700" />
          </div>
        </div>

        <div className="rounded-xl border p-3">
          <div className="text-sm font-semibold mb-2 text-gray-500">Season & Rates</div>
          <label className="flex items-center justify-between text-sm text-gray-500">
            Avg ΔT (°F)
            <input
              type="number" value={deltaT} min={10} max={60}
              onChange={(e) => setDeltaT(clamp(parseInt(e.target.value || "0", 10), 10, 60))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
          <label className="flex items-center justify-between text-sm mt-2 text-gray-500">
            Heating days
            <input
              type="number" value={heatingDays} min={30} max={240}
              onChange={(e) => setHeatingDays(clamp(parseInt(e.target.value || "0", 10), 30, 240))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
          <label className="flex items-center justify-between text-sm mt-2 text-gray-500">
            Cooling days
            <input
              type="number" value={coolingDays} min={0} max={240}
              onChange={(e) => setCoolingDays(clamp(parseInt(e.target.value || "0", 10), 0, 240))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>

          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <label className="flex items-center justify-between text-gray-500">
              Heating fuel
              <select
                value={fuel}
                onChange={(e) => setFuel(e.target.value as Fuel)}
                className="ml-2 rounded border px-2 py-1 text-white"
              >
                <option value="gas">Natural gas</option>
                <option value="electricity">Electric</option>
              </select>
            </label>
            <label className="flex items-center justify-between text-gray-500">
              $/kWh
              <input
                type="number" step="0.01" value={elecRate} min={0.05} max={1}
                onChange={(e) => setElecRate(parseFloat(e.target.value || "0"))}
                className="ml-2 w-24 rounded border px-2 py-1 text-white"
              />
            </label>
            <label className="flex items-center justify-between text-gray-500">
              $/therm
              <input
                type="number" step="0.05" value={gasRate} min={0.3} max={5}
                onChange={(e) => setGasRate(parseFloat(e.target.value || "0"))}
                className="ml-2 w-24 rounded border px-2 py-1 text-white"
              />
            </label>
          </div>

          <div className="mt-3 flex gap-2">
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
      </div>

      {/* Visualization */}
      <div className="mt-5 grid grid-cols-2 gap-4">
        <BarCard
          title="Season cost — Standard"
          cost={totalStd}
          height={hStd}
        />
        <BarCard
          title="Season cost — Specialized"
          cost={totalPro}
          height={hPro}
        />
      </div>

      {/* Results */}
      <div className="mt-4 rounded-xl border p-3 text-sm">
        <div className="text-gray-500">Estimated seasonal savings</div>
        <div className="text-xl font-semibold text-green-600">${totalSavings.toFixed(0)}</div>
        <div className="text-xs text-gray-500 mt-1">
          Simple envelope model for illustration: Energy ≈ Area × U × ΔT × hours.
          Actual results vary with equipment efficiency, air sealing, orientation, etc.
        </div>
      </div>
    </div>
  );
}

function BarCard({ title, cost, height }: { title: string; cost: number; height: string }) {
  return (
    <div className="rounded-xl border p-3">
      <div className="text-sm font-medium text-gray-700 mb-2">{title}</div>
      <div className="relative h-48 rounded-lg border bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 bg-orange-300 transition-[height] duration-150 ease-linear"
          style={{ height }}
        />
        <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-lg" />
        <div className="absolute top-2 right-2 text-xs font-medium text-gray-700 bg-white/70 rounded px-1.5 py-0.5">
          ${cost.toFixed(0)}
        </div>
      </div>
    </div>
  );
}
