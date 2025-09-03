// App.tsx
import { BrowserRouter, Routes, Route, Navigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import useFPState from "./store/useFPState";
import FloorPlan from "./components/FloorPlan";
import { plans } from "./plans";

type PlanKey = keyof typeof plans;

function FloorPlanPage() {
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const state = useFPState();
  const [selectedFloor, setSelectedFloor] = useState(0); // index of the floor

  const planKey = (planId?.toLowerCase() as PlanKey) ?? "plana";
  const plan = plans[planKey] || plans["plana"];
  const floor = plan.floors[selectedFloor];
  const options = floor.options;
  const PlanSVG = floor.SVG;

  // Reset to the first floor when plan changes
  useEffect(() => {
    setSelectedFloor(0);
  }, [planKey]);

  // Get preselected options from query string
  const pco = searchParams.get("pco");
  const lockedKeys = pco ? pco.split(",") : [];

  useEffect(() => {
    const keys = Array.isArray(options) ? options.map(o => o.key) : [];
    state.setKeys(keys);

    if (lockedKeys.length > 0) {
      keys.forEach((key) => {
        state.setActive(key, lockedKeys.includes(key));
      });
    } else {
      state.reset(keys);
    }
  }, [planKey, options, pco]); // options changes when selectedFloor changes

  return (
    <div className="flex h-[calc(100vh-3rem)]">
      <Sidebar
        floors={plan.floors}
        selectedFloor={selectedFloor}
        onSelectFloor={setSelectedFloor}
        options={options}
        active={state.active}
        setActive={state.setActive}
        reset={state.reset}
        lockedKeys={lockedKeys}
      />
      <div className="flex-1">
        <FloorPlan active={state.active} SVG={PlanSVG} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/plana" replace />} />
          <Route path="/:planId" element={<FloorPlanPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
