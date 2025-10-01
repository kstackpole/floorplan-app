import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";

/**
 * Simple illustrative model (not a detailed simulation):
 * q_net [W/m²] = U * (T_in - T_out) - SHGC * I_solar
 * Interior surface temp (°C) ≈ T_in - q_net / h_in      (h_in ≈ 8 W/m²K)
 * Power [W] = max(q_net, 0) * Area_m² (we clamp at 0 so "net gain" doesn't show negative loss)
 * Cost per hour ≈ (Power / 1000 / systemEff_kWh) * $/kWh   where systemEff_kWh = COP (heat) or EER/3.412 (cool)
 */
const H_IN = 8; // W/m²K, inside convective film coefficient
const FT2_TO_M2 = 0.092903;

type Mode = "heating" | "cooling";

function fToC(f: number) { return (f - 32) * 5/9; }
function cToF(c: number) { return (c * 9/5) + 32; }
function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }

export default function WindowIRGame() {
  // Weather/indoor
  const [mode, setMode] = useState<Mode>("heating");
  const [tOutF, setTOutF] = useState(35);         // °F
  const [tInF, setTInF] = useState(70);           // °F
  const [solar, setSolar] = useState(400);        // W/m², 0..1000

  // Window area (ft² -> m²)
  const [areaFt2, setAreaFt2] = useState(25);

  // Standard window (typical single/clear)
  const [uStd, setUStd] = useState(5.7);          // W/m²K
  const [shgcStd, setShgcStd] = useState(0.86);   // unitless

  // High-eff window (double/low-e, argon, etc.)
  const [uHi, setUHi] = useState(1.4);            // W/m²K
  const [shgcHi, setShgcHi] = useState(0.35);     // unitless

  // Pricing / equipment efficiency
  const [rateKWh, setRateKWh] = useState(0.15);   // $/kWh
  const [cop, setCOP] = useState(3.0);            // heating COP
  const [eer, setEER] = useState(12);             // cooling EER (BTU/W·h)

  // Animation
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    const DUR = 1200;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / DUR);
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
      rafRef.current = null; startRef.current = null;
    };
  }, [playing]);

  // Derived calcs (in SI)
  const TinC = fToC(tInF);
  const ToutC = fToC(tOutF);
  const dT = TinC - ToutC;
  const A = Math.max(1, areaFt2) * FT2_TO_M2;

  // For cooling mode, solar still drives interior-surface warming; sign convention still ok.
  // We clamp solar >= 0.
  const I = clamp(solar, 0, 1200);

  // Replace the existing windowCalc and derived "animated" bits with this:

    function windowCalc(U: number, SHGC: number) {
    // Signed net heat (positive means outward loss from interior -> heating load)
    const q_net = U * dT - SHGC * I;      // W/m²
    const TsurfC = TinC - q_net / H_IN;   // °C
    const TsurfF = cToF(TsurfC);

    // Mode-specific *positive* load (what your system must deliver/remove)
    const load_W_per_m2 =
        mode === "heating"
        ? Math.max(q_net, 0)                 // outward loss to be supplied by heat
        : Math.max(-q_net, 0);               // inward gain to be removed by A/C

    const P_W = load_W_per_m2 * A;          // W total
    const eff_kWh = mode === "heating" ? cop : (eer / 3.412); // EER -> W/W
    const kW_in = P_W / 1000 / Math.max(0.1, eff_kWh);
    const costPerHour = kW_in * rateKWh;

    return { TsurfF, P_W, costPerHour, q_net };
    }

    // … keep std/hi:
    const std = windowCalc(uStd, shgcStd);
    const hi  = windowCalc(uHi,  shgcHi);

    // Animated bar heights:
    const maxP = Math.max(std.P_W, hi.P_W, 1);
    const hStd = `${(progress * std.P_W / maxP) * 100}%`;
    const hHi  = `${(progress * hi.P_W  / maxP) * 100}%`;

    // Optional: set a gentler default sun level so heating mode shows bars right away
    // const [solar, setSolar] = useState(150);


  const play = () => { setProgress(0); setPlaying(true); };
  const reset = () => { setPlaying(false); setProgress(0); };

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Environment */}
        <div className="rounded-xl border p-3">
          <div className="text-sm font-semibold mb-2 text-gray-600">Environment</div>
          <label className="flex items-center justify-between text-sm text-gray-600">
            Mode
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as Mode)}
              className="ml-2 rounded border px-2 py-1 text-white"
            >
              <option className="text-white" value="heating">Heating</option>
              <option className="text-white" value="cooling">Cooling</option>
            </select>
          </label>
          <label className="flex items-center justify-between text-sm mt-2 text-gray-600">
            Outdoor temp (°F)
            <input
              type="number" value={tOutF}
              onChange={(e) => setTOutF(parseFloat(e.target.value || "0"))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
          <label className="flex items-center justify-between text-sm mt-2 text-gray-700">
            Indoor setpoint (°F)
            <input
              type="number" value={tInF}
              onChange={(e) => setTInF(parseFloat(e.target.value || "0"))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
          <div className="mt-3">
            <label className="text-sm font-medium text-gray-700">Sun (W/m²): {I}</label>
            <input
              type="range" min={0} max={1000} value={solar}
              onChange={(e) => setSolar(parseInt(e.target.value, 10))}
              className="w-full accent-gray-700"
            />
          </div>
          <label className="flex items-center justify-between text-sm mt-2 text-gray-700">
            Window area (ft²)
            <input
              type="number" value={areaFt2} min={2} max={150}
              onChange={(e) => setAreaFt2(clamp(parseFloat(e.target.value || "0"), 2, 150))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
        </div>

        {/* Standard */}
        <div className="rounded-xl border p-3">
          <div className="text-sm font-semibold mb-2 text-g text-gray-700">Standard Window</div>
          <label className="flex items-center justify-between text-sm text-gray-700">
            U-factor (W/m²K)
            <input
              type="number" step="0.1" value={uStd} min={0.5} max={7}
              onChange={(e) => setUStd(parseFloat(e.target.value || "0"))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">Solar Heat Gain Coefficient: {shgcStd.toFixed(2)}</label>
            <input
              type="range" min={0.1} max={0.9} step={0.01} value={shgcStd}
              onChange={(e) => setShgcStd(parseFloat(e.target.value))}
              className="w-full accent-gray-700 text-white"
            />
          </div>
        </div>

        {/* High-efficiency */}
        <div className="rounded-xl border p-3">
          <div className="text-sm font-semibold mb-2 text-gray-700">High-Efficiency Window</div>
          <label className="flex items-center justify-between text-sm text-gray-700">
            U-factor (W/m²K)
            <input
              type="number" step="0.1" value={uHi} min={0.5} max={7}
              onChange={(e) => setUHi(parseFloat(e.target.value || "0"))}
              className="ml-2 w-24 rounded border px-2 py-1 text-white"
            />
          </label>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">Solar Heat Gain Coefficient: {shgcHi.toFixed(2)}</label>
            <input
              type="range" min={0.1} max={0.9} step={0.01} value={shgcHi}
              onChange={(e) => setShgcHi(parseFloat(e.target.value))}
              className="w-full accent-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Rates / efficiency */}
      <div className="mt-4 rounded-xl border p-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <label className="flex items-center justify-between text-sm text-gray-700">
          $/kWh
          <input
            type="number" step="0.01" value={rateKWh} min={0.05} max={1.5}
            onChange={(e) => setRateKWh(parseFloat(e.target.value || "0"))}
            className="ml-2 w-24 rounded border px-2 py-1 text-white"
          />
        </label>
        <label className="flex items-center justify-between text-sm text-gray-700">
          Heating COP
          <input
            type="number" step="0.1" value={cop} min={1} max={5}
            onChange={(e) => setCOP(parseFloat(e.target.value || "0"))}
            className="ml-2 w-24 rounded border px-2 py-1 text-white"
          />
        </label>
        <label className="flex items-center justify-between text-sm text-gray-700">
          Cooling EER
          <input
            type="number" step="0.5" value={eer} min={6} max={20}
            onChange={(e) => setEER(parseFloat(e.target.value || "0"))}
            className="ml-2 w-24 rounded border px-2 py-1 text-white"
          />
        </label>

        <div className="col-span-full mt-1 flex gap-2">
          <button
            onClick={() => { reset(); play(); }}
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

      {/* Visualization */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <IRCard
          title="Standard Window"
          TsurfF={std.TsurfF}
          P_W={std.P_W}
          costPerHour={std.costPerHour}
          barHeight={hStd}
          progress={progress}
          color="bg-orange-400"
        />
        <IRCard
          title="High-Efficiency Window"
          TsurfF={hi.TsurfF}
          P_W={hi.P_W}
          costPerHour={hi.costPerHour}
          barHeight={hHi}
          progress={progress}
          color="bg-emerald-400"
        />
      </div>

      {/* Summary */}
      <div className="mt-4 rounded-xl border p-3 text-sm">
        <div className="text-gray-500">Instantaneous difference (at current conditions)</div>
        <div className="text-lg font-semibold text-green-700">
          ΔSurface: {(std.TsurfF - hi.TsurfF).toFixed(1)} °F · ΔLoad: {((std.P_W - hi.P_W)/1000).toFixed(2)} kW · Δ$/hr: ${(std.costPerHour - hi.costPerHour).toFixed(2)}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Interior surface temperature is a proxy measured by an IR thermometer; lower U-factor and tuned SHGC reduce heat flow and improve comfort. Values are illustrative.
        </div>
      </div>
    </div>
  );
}

function IRCard({
  title, TsurfF, P_W, costPerHour, barHeight, progress, color,
}: {
  title: string;
  TsurfF: number;
  P_W: number;
  costPerHour: number;
  barHeight: string;
  progress: number;
  color: string; // tailwind bg color
}) {
  return (
    <div className="rounded-xl border p-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-700">{title}</div>
        {/* IR thermometer readout */}
        <div className="text-xs px-2 py-1 rounded bg-black/80 text-white font-semibold">
          {TsurfF.toFixed(1)} °F
        </div>
      </div>

      {/* "Laser" pane + bar */}
      <div className="mt-2 grid grid-cols-[1fr,140px] gap-3">
        {/* Glass pane with a red "laser dot" */}
        <WindowPane progress={progress} />


        {/* Power bar */}
        <div className="relative h-40 rounded-lg border bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
          <div
            className={`absolute bottom-0 left-0 right-0 ${color} transition-[height] duration-150 ease-linear`}
            style={{ height: barHeight }}
          />
          <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-lg" />
          <div className="absolute top-2 right-2 text-xs font-medium text-gray-700 bg-white/70 rounded px-1.5 py-0.5">
            {(P_W/1000).toFixed(2)} kW · ${costPerHour.toFixed(2)}/hr
          </div>
        </div>
      </div>
    </div>
  );
}

function WindowPane({ progress }: { progress: number }) {
  return (
    <div className="relative h-40 rounded-xl border border-slate-300 bg-slate-300 p-2">
      {/* 2×2 panes; the container bg (slate-300) peeks through the gaps as muntins */}
      <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-2 rounded-lg">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-lg bg-gradient-to-b from-slate-50 to-slate-100 ring-1 ring-black/5"
          />
        ))}
      </div>

      {/* Subtle inner frame highlight */}
      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-white/40" />

      {/* IR “laser” dot */}
      <div
        className="absolute w-3 h-3 rounded-full bg-red-500 shadow"
        style={{
          left: "75%",
          top: "25%",
          transform: `translate(-50%, -50%) scale(${0.85 + 0.25 * progress})`,
          opacity: 0.6 + 0.4 * progress,
        }}
      />
    </div>
  );
}

