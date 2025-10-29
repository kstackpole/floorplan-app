import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import type { OptionKey } from "../store/useFPState";

type Option = { key: OptionKey; label: string; group?: string };
type FloorTab = { name: string };

type SidebarProps = {
  // NEW: plan-level content
  planTitle: string;
  planDescription: string;

  floors: FloorTab[];
  selectedFloor: number;
  onSelectFloor: (idx: number) => void;

  options: Option[];
  active: Record<OptionKey, boolean>;
  setActive: (k: OptionKey, v: boolean) => void;
  lockedKeys?: string[];

  mirror: boolean;
  setMirror: (v: boolean) => void;
};

export default function Sidebar({
  planTitle,
  planDescription,
  floors,
  selectedFloor,
  onSelectFloor,
  options,
  active,
  setActive,
  lockedKeys = [],
  mirror,
  setMirror,
}: SidebarProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(selectedFloor);
  const [descOpen, setDescOpen] = useState(false);

  useEffect(() => setExpandedIndex(selectedFloor), [selectedFloor]);

  const handleFloorClick = (idx: number) => {
    if (idx === selectedFloor) {
      setExpandedIndex((cur) => (cur === idx ? null : idx));
    } else {
      onSelectFloor(idx);
      setExpandedIndex(idx);
    }
  };

  // Fallback teaser for when Tailwind line-clamp isn't configured
  const teaser =
    planDescription && planDescription.length > 180
      ? planDescription.slice(0, 180) + "…"
      : planDescription;

  return (
    <div className="flex h-full w-80 flex-col border-r border-gray-200 bg-white/90 backdrop-blur">
      {/* Plan-level settings (GLOBAL) */}
      <div className="p-3">
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Plan settings
          </span>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={mirror}
              onChange={(e) => setMirror(e.currentTarget.checked)}
              className="h-4 w-4"
            />
            Mirror plan
          </label>
        </div>
      </div>

      {/* Floors accordion */}
      <div className="flex flex-col gap-2 p-3 pt-0">
        {floors.map((f, idx) => {
          const isActive = selectedFloor === idx;
          const isOpen = expandedIndex === idx;

          return (
            <div key={f.name} className="rounded-xl border border-gray-200">
              <button
                type="button"
                onClick={() => handleFloorClick(idx)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 transition
                  ${isActive ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                aria-expanded={isOpen}
                aria-controls={`floor-panel-${idx}`}
              >
                <span className="font-medium">{f.name}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                id={`floor-panel-${idx}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  {isActive && (
                    <>
                      <div className="mt-2 px-3 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                        Standard Options
                      </div>

                      <div className="max-h-80 overflow-auto px-2 pb-3">
                        {options.map((opt) => (
                          <label
                            key={opt.key}
                            className="mb-2 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <span>{opt.label}</span>
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={!!active[opt.key]}
                              onChange={(e) => {
                                const checked = e.currentTarget.checked;
                                if (checked && opt.group) {
                                  options
                                    .filter((o) => o.group === opt.group && o.key !== opt.key)
                                    .forEach((o) => setActive(o.key, false));
                                }
                                setActive(opt.key, checked);
                              }}
                              disabled={lockedKeys.length > 0}
                            />
                          </label>
                        ))}
                        {options.length === 0 && (
                          <div className="px-3 pb-3 text-sm text-gray-400">
                            No options available.
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 p-3 pt-0">
        {/* NEW: Plan headline + expandable description */}
        <div className="mt-3 rounded-xl border border-gray-200 bg-white px-3 py-3">
          <h1 className="text-lg font-semibold leading-tight text-gray-900">{planTitle}</h1>

          {/* Teaser (shown when collapsed) */}
          {!descOpen && teaser && (
            <p className="mt-1 text-sm leading-6 text-gray-700">{teaser}</p>
          )}

          {/* Expand/collapse area */}
          <div
            id="plan-desc"
            className={`mt-1 grid transition-[grid-template-rows] duration-300 ease-out ${
              descOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
            aria-hidden={!descOpen}
          >
            <div className="overflow-hidden">
              <p className="text-sm leading-6 text-gray-700 whitespace-pre-line">
                {planDescription}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDescOpen((o) => !o)}
            aria-expanded={descOpen}
            aria-controls="plan-desc"
            className="bg-gray-800 mt-2 inline-flex items-center gap-1 text-xs font-medium text-gray-300"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${descOpen ? "rotate-180" : ""}`}
            />
            {descOpen ? "Show less" : "Show description"}
          </button>
        </div>
      </div>
      {/* Optional footer */}
      <div className="mt-auto px-3 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
        Components
      </div>
      <div className="px-3 pb-4 text-sm text-gray-400">(Coming soon)</div>
    </div>
  );
}
