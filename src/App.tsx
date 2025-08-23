import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import useFPState from "./store/useFPState";
import FloorPlan from "./components/FloorPlan";
import planLogo from "./assets/planlogo.svg";
import { plans } from "./plans";

function FloorPlanPage() {
  const { planId } = useParams();
  const state = useFPState();

  // Get the SVG component for the planId, or fallback to planA
  const PlanSVG = plans[planId as keyof typeof plans] || plans["planA"];

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
      {/* Top bar */}
      <div className="flex h-12 items-center justify-between border-b bg-white/80 px-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src={planLogo} className="h-6 w-6" alt="Plan Logo" />
          <div className="text-sm font-semibold tracking-wide text-gray-500">Interactive Floor Plan</div>
        </div>
        <div className="text-xs text-gray-500">Demo – not for production</div>
      </div>

      <BrowserRouter>
        <Routes>
          {/* Default route: redirect to /planA */}
          <Route path="/" element={<Navigate to="/planA" replace />} />
          {/* Dynamic plan route */}
          <Route path="/:planId" element={<FloorPlanPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
