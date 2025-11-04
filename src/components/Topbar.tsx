import planLogo from "../assets/planlogo.svg";

export default function topBar() {
    return (
      <div className="flex h-12 items-center justify-between border-b bg-white/80 px-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src={planLogo} className="h-6 w-6" alt="Plan Logo" />
          <div className="text-sm font-semibold tracking-wide text-gray-500">Interactive Floor Plan</div>
        </div>
        <div className="text-xs text-gray-500"></div>
      </div>
    )
}