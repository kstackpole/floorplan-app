// App.tsx
import { Routes, Route, Navigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
// import { ChevronRight } from "lucide-react";  // <- not needed for the tabs anymore
import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
import useFPState from "./store/useFPState";
import FloorPlan from "./components/FloorPlan";
import { selectPlan, selectFloor } from "./plans";
import MediaModal from "./components/mediaModal";

/** Hard-sized chevron that ignores global icon CSS */
function BigChevron({
  direction = "right",
  size = 40,
  className = "",
}: {
  direction?: "right" | "left";
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`shrink-0 ${direction === "left" ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M9 18l6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Lock page scroll when drawer is open */
function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    if (locked) body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [locked]);
}

function FloorPlanPage() {
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const state = useFPState();
  const [selectedFloor, setSelectedFloor] = useState(0);

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  useBodyScrollLock(drawerOpen);

  const plan = selectPlan(planId);
  const floor = selectFloor(plan, selectedFloor);
  const options = floor.options;
  const PlanSVG = floor.SVG;

  useEffect(() => {
    setSelectedFloor(0);
  }, [plan.code]);

  const lockedKeys = useMemo(() => {
    const pco = searchParams.get("pco");
    return pco ? pco.split(",") : [];
  }, [searchParams]);

  useEffect(() => {
    const keys = Array.isArray(options) ? options.map(o => o.key) : [];
    state.setKeys(keys);
    if (lockedKeys.length > 0) {
      keys.forEach((key) => state.setActive(key, lockedKeys.includes(key)));
    } else {
      state.reset(keys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan.code, options, lockedKeys.join("|")]);

  return (
    <>
      <MediaModal />

      {/* Desktop ≥ md: sidebar grid; Mobile: plan full-bleed + drawer */}
      <div className="h-[100dvh] flex-1 overflow-hidden md:grid md:grid-cols-[320px_minmax(0,1fr)] bg-gray-50">

        {/* Sidebar (desktop/tablet) */}
        <aside className="hidden md:block border-r bg-white overflow-y-auto">
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
            mirror={state.mirror}
            setMirror={state.setMirror}
          />
        </aside>

        {/* Floorplan area */}
        <main className="relative overflow-hidden flex-1 h-[100dvh] md:h-auto">
          <FloorPlan active={state.active} SVG={PlanSVG} mirror={state.mirror} />

          {/* LEFT-EDGE TAB — show ONLY when drawer is CLOSED */}
          {!drawerOpen && (
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden fixed z-50 top-1/2 -translate-y-1/2 -left-1
                         w-12 h-28 rounded-r-2xl bg-white border shadow-xl
                         flex items-center justify-center text-gray-600
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open options"
              style={{ touchAction: "manipulation" }}
            >
              {/* Right-facing big chevron */}
              <BigChevron direction="right" size={25} />
            </button>
          )}
        </main>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-options-drawer"
        className={`md:hidden fixed left-0 right-0 top-0 bottom-0 z-[60] ${drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!drawerOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${drawerOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute left-0 top-0 h-full w-[88%] max-w-[360px] bg-white shadow-xl border-r
                      transition-transform will-change-transform
                      ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header (hide Close on mobile; drawer uses tab) */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-3 border-b bg-white">
            <div className="text-sm font-semibold">Options</div>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="hidden md:inline-flex rounded-md border px-2 py-1 text-xs"
              aria-label="Close options"
            >
              Close
            </button>
          </div>

          {/* Drawer body */}
          <div className="h-[calc(100dvh-49px)] overflow-y-auto">
            <Sidebar
              planTitle={plan.title}
              planDescription={plan.description}
              floors={plan.floors}
              selectedFloor={selectedFloor}
              onSelectFloor={(i) => { setSelectedFloor(i); }}
              options={options}
              active={state.active}
              setActive={state.setActive}
              lockedKeys={lockedKeys}
              mirror={state.mirror}
              setMirror={state.setMirror}
            />
          </div>

          {/* DRAWER-EDGE TAB — only when drawer is OPEN; sits outside edge */}
          {drawerOpen && (
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="md:hidden absolute top-1/2 right-0 translate-x-full -translate-y-1/2
                         z-50 w-12 h-28
                         rounded-r-2xl rounded-tl-none rounded-bl-none
                         bg-white border border-l-0 shadow-xl
                         flex items-center justify-center text-gray-600
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close options"
              style={{ touchAction: "manipulation" }}
            >
              {/* Left-facing big chevron */}
              <BigChevron direction="left" size={25} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh w-screen bg-gray-50">
      {/* <div className="sticky top-0 z-50">
        <Topbar />
      </div> */}

      <Routes>
        <Route path="/" element={<Navigate to="plana" replace />} />
        <Route path=":planId" element={<FloorPlanPage />} />
        <Route path="*" element={<Navigate to="plana" replace />} />
      </Routes>
    </div>
  );
}
