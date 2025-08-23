import { Search, Layers } from "lucide-react";
import { useState } from "react";
import useFPState from "../store/useFPState";
import type { OptionKey } from "../store/useFPState";
// ...existing code...

function Sidebar() {
  const state = useFPState();
  const groups: { key: OptionKey; label: string }[] = [
    { key: "primaryRetreat", label: "Primary Retreat" },
    { key: "morningKitchen", label: "Morning Kitchen" },
    { key: "bbq", label: "BBQ Connection" },
    { key: "coveredPatio", label: "Covered Patio" },
    { key: "luxuryBath", label: "Luxury Bath" },
    { key: "study", label: "Study" },
    { key: "dining", label: "Dining" },
    { key: "primaryTwo", label: "Primary bedroom 2/primary bath 2" },
  ];

  const [query, setQuery] = useState("");
  const filtered = groups.filter((g) => g.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex h-full w-80 flex-col border-r border-gray-200 bg-white/90 backdrop-blur">
      <div className="flex items-center gap-2 p-3">
        <div className="rounded-xl border border-gray-200 px-2 py-1 flex items-center gap-2 w-full">
          <Search size={16} />
          <input className="w-full border-none outline-none bg-transparent text-sm" placeholder="Search options" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <button onClick={state.reset} className="rounded-lg p-2 hover:bg-gray-100" title="Clear">
          <Layers size={16} />
        </button>
      </div>

      <div className="px-3 pb-3 text-xs font-medium uppercase tracking-wider text-gray-500">Standard Options</div>
      <div className="flex-1 overflow-auto px-2">
        {filtered.map((g) => (
          <label key={g.key} className="mb-2 flex items-center justify-between rounded-xl border border-gray-200 p-3 text-sm hover:bg-gray-50 text-gray-700">
            <span>{g.label}</span>
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={!!state.active[g.key]}
              onChange={(e) => state.setActive(g.key, e.currentTarget.checked)}
            />
          </label>
        ))}
      </div>

      <div className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Components</div>
      <div className="px-3 pb-4 text-gray-400 text-sm">(Coming soon)</div>
    </div>
  );
}

export default Sidebar;