import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import useFPState from "./store/useFPState";
import FloorPlan from "./components/FloorPlan";
import { plans } from "./plans";

function FloorPlanPage() {
  const { planId } = useParams();
  const state = useFPState();

  // Get the SVG component for the planId, or fallback to planA
  const planKey = planId?.toLowerCase() ?? "plana";
  const PlanSVG = plans[planKey] || plans["plana"];

  return (
    <div className="flex h-[calc(100vh-3rem)]">
      <Sidebar />
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
          {/* Default route: redirect to /planA */}
          <Route path="/" element={<Navigate to="/plana" replace />} />
          {/* Dynamic plan route */}
          <Route path="/:planId" element={<FloorPlanPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
