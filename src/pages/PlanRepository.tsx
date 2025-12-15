import { Link } from "react-router-dom";
import { getAllPlans } from "../plans";

export default function PlanRepository() {
  const plans = getAllPlans();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">
        Floor Plan Repository
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <li
            key={plan.code}
            className="border rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <Link
              to={`/plans/${plan.code.toLowerCase()}`}
              className="block"
            >
              <h2 className="text-lg font-medium">
                {plan.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Code: {plan.code}
              </p>

              {plan.floors?.length && (
                <p className="text-xs text-gray-400 mt-1">
                  Floors: {plan.floors.length}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
