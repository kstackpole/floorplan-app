import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import MediaPanel from "./MediaPanel";
import type { OptionKey } from "../store/useFPState";

type Option = { key: OptionKey; label: string; group?: string };
type FloorTab = { name: string };

type SidebarProps = {
  floors: FloorTab[];
  selectedFloor: number;
  onSelectFloor: (idx: number) => void;

  options: Option[];
  active: Record<OptionKey, boolean>;
  setActive: (k: OptionKey, v: boolean) => void;
  reset: () => void;
  lockedKeys?: string[];

  mirror: boolean;
  setMirror: (v: boolean) => void;
};

export default function Sidebar({
  floors,
  selectedFloor,
  onSelectFloor,
  options,
  active,
  setActive,
  reset,
  lockedKeys = [],
  mirror,
  setMirror,
}: SidebarProps) {
  const [query, setQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(selectedFloor);

  useEffect(() => setExpandedIndex(selectedFloor), [selectedFloor]);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleFloorClick = (idx: number) => {
    if (idx === selectedFloor) {
      setExpandedIndex((cur) => (cur === idx ? null : idx));
    } else {
      onSelectFloor(idx);
      setExpandedIndex(idx);
    }
  };

  return (
    <div className="flex h-full w-80 flex-col border-r border-gray-200 bg-white/90 backdrop-blur">
      {/* Plan-level settings (GLOBAL) */}
      <div className="p-3">
        <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 flex items-center justify-between">
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
      <div className="p-3 pt-0 flex flex-col gap-2">
        {floors.map((f, idx) => {
          const isActive = selectedFloor === idx;
          const isOpen = expandedIndex === idx;

          return (
            <div key={f.name} className="rounded-xl border border-gray-200">
              <button
                type="button"
                onClick={() => handleFloorClick(idx)}
                className={`flex w-full items-center justify-between px-3 py-2 rounded-xl transition
                  ${isActive ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                aria-expanded={isOpen}
                aria-controls={`floor-panel-${idx}`}
              >
                <span className="font-medium">{f.name}</span>
                <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
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
                      {/* Search + Clear for this floor's options */}
                      <div className="flex items-center gap-2 p-3">
                      </div>

                      <div className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                        Standard Options
                      </div>

                      <div className="max-h-80 overflow-auto px-2 pb-3">
                        {filtered.map((opt) => (
                          <label
                            key={opt.key}
                            className="mb-2 flex items-center justify-between rounded-xl border border-gray-200 p-3 text-sm hover:bg-gray-50 text-gray-700 bg-white"
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
                        {filtered.length === 0 && (
                          <div className="px-3 pb-3 text-sm text-gray-400">No matches.</div>
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


      {/* Optional footer */}
      <div className="mt-auto px-3 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
        Components
      </div>
      <div className="px-3 pb-4 text-gray-400 text-sm">(Coming soon)</div>
    </div>
  );
}
