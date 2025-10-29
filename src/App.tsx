// App.tsx
import { BrowserRouter, Routes, Route, Navigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import useFPState from "./store/useFPState";
import FloorPlan from "./components/FloorPlan";
import { selectPlan, selectFloor } from "./plans";
import MediaModal from "./components/mediaModal";

function FloorPlanPage() {
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const state = useFPState();                    // <- has mirror + setMirror
  const [selectedFloor, setSelectedFloor] = useState(0);

  const plan = selectPlan(planId);
  const floor = selectFloor(plan, selectedFloor);
  const options = floor.options;
  const PlanSVG = floor.SVG;

  useEffect(() => {
    setSelectedFloor(0);
  }, [plan.code]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan.code, options, pco]); // re-run when plan or floor options change

  return (
    <div className="flex h-[calc(100vh-3rem)]">
      <MediaModal />
      <Sidebar
        planTitle={plan.title}
        planDescription={plan.description}
        floors={plan.floors}
        selectedFloor={selectedFloor}
        onSelectFloor={setSelectedFloor}
        options={options}
        active={state.active}
        setActive={state.setActive}
        lockedKeys={lockedKeys}
        // NEW ↓
        mirror={state.mirror}
        setMirror={state.setMirror}
      />
      <div className="flex-1">
        {/* Pass mirror down so the SVG can flip */}
        <FloorPlan active={state.active} SVG={PlanSVG} mirror={state.mirror} />
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
