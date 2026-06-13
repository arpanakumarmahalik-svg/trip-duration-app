import { useState } from "react";
import { predictDuration } from "./api";
import type { TripInput, PredictionResult } from "./api";

const defaultForm: TripInput = {
  vendor_id: 1,
  passenger_count: 1,
  pickup_longitude: -73.98,
  pickup_latitude: 40.75,
  dropoff_longitude: -73.96,
  dropoff_latitude: 40.77,
  hour: 9,
  day: 15,
  month: 6,
  weekday: 2,
  is_weekend: 0,
  distance_km: 3.5,
};

export default function App() {
  const [form, setForm] = useState<TripInput>(defaultForm);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const data = await predictDuration(form);
      setResult(data);
    } catch {
      setError("Something went wrong. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "distance_km",       label: "Distance (km)",        step: "0.1"    },
    { name: "passenger_count",   label: "Passenger count",       step: "1"      },
    { name: "hour",              label: "Hour (0–23)",           step: "1"      },
    { name: "day",               label: "Day of month",          step: "1"      },
    { name: "month",             label: "Month (1–12)",          step: "1"      },
    { name: "weekday",           label: "Weekday (0=Mon)",       step: "1"      },
    { name: "is_weekend",        label: "Is weekend (0 or 1)",  step: "1"      },
    { name: "vendor_id",         label: "Vendor ID (1 or 2)",   step: "1"      },
    { name: "pickup_latitude",   label: "Pickup latitude",       step: "0.0001" },
    { name: "pickup_longitude",  label: "Pickup longitude",      step: "0.0001" },
    { name: "dropoff_latitude",  label: "Dropoff latitude",      step: "0.0001" },
    { name: "dropoff_longitude", label: "Dropoff longitude",     step: "0.0001" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">
            🚕 Trip Duration Predictor
          </h1>
          <p className="text-gray-500 text-sm">
            Enter trip details below to predict estimated travel time
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Trip details
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {fields.map((f) => (
              <div key={f.name}>
                <label className="block text-xs text-gray-500 mb-1">
                  {f.label}
                </label>
                <input
                  type="number"
                  name={f.name}
                  step={f.step}
                  value={form[f.name as keyof TripInput]}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Predicting..." : "Predict trip duration"}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm mb-4">
            {error}
          </div>
        )}

        {result && (
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <p className="text-gray-400 text-sm mb-1">Estimated duration</p>
            <p className="text-5xl font-bold text-indigo-600 mb-2">
              {result.duration_minutes}
              <span className="text-2xl font-normal text-gray-400"> min</span>
            </p>
            <p className="text-gray-400 text-sm">
              {result.duration_seconds} seconds
            </p>
            <p className="text-green-500 text-sm mt-2">{result.message}</p>
          </div>
        )}

      </div>
    </div>
  );
}