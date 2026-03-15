"use client";

import { useState, useMemo } from "react";
import { cities, compareCol, equivalentSalary, getCity } from "@/data/col";
import AdSlot from "@/components/AdSlot";

export default function CostOfLivingPage() {
  const [cityAId, setCityAId] = useState("new-york");
  const [cityBId, setCityBId] = useState("london");
  const [salaryInput, setSalaryInput] = useState("60000");

  const salaryInA = useMemo(() => {
    const n = parseFloat(salaryInput.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }, [salaryInput]);

  const ratio = useMemo(() => compareCol(cityAId, cityBId), [cityAId, cityBId]);
  const equivalentInB = useMemo(
    () => equivalentSalary(salaryInA, cityAId, cityBId),
    [salaryInA, cityAId, cityBId]
  );

  const cityA = getCity(cityAId);
  const cityB = getCity(cityBId);
  const percentDiff = ((ratio - 1) * 100);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Cost of Living Calculator
        </h1>
        <p className="mt-2 text-slate-600">
          Use this free cost of living calculator to compare two cities and see what salary you’d need in the new city to keep the same lifestyle.
        </p>
      </div>

      <AdSlot id="col-top" className="mb-8 w-full" />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <section
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            aria-labelledby="col-inputs"
          >
            <h2 id="col-inputs" className="sr-only">
              Comparison inputs
            </h2>
            <div className="space-y-5">
              <div>
                <label htmlFor="city-a" className="block text-sm font-medium text-slate-700">
                  From city (current)
                </label>
                <select
                  id="city-a"
                  value={cityAId}
                  onChange={(e) => setCityAId(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                >
                  {cities.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}, {c.country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="city-b" className="block text-sm font-medium text-slate-700">
                  To city (new)
                </label>
                <select
                  id="city-b"
                  value={cityBId}
                  onChange={(e) => setCityBId(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                >
                  {cities.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}, {c.country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-slate-700">
                  Your current salary (annual)
                </label>
                <input
                  id="salary"
                  type="text"
                  inputMode="numeric"
                  value={salaryInput}
                  onChange={(e) => setSalaryInput(e.target.value)}
                  placeholder="60000"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-3">
          <section
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            aria-live="polite"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              Equivalent salary
            </h2>
            <p className="mt-2 text-slate-600">
              To have a similar standard of living in{" "}
              <strong>{cityB?.name}</strong> as you have in{" "}
              <strong>{cityA?.name}</strong> with your current salary, you’d need approximately:
            </p>
            <div className="mt-6 rounded-xl bg-teal-50 p-6">
              <p className="text-sm font-medium text-teal-800">
                {cityB?.name} equivalent
              </p>
              <p className="mt-1 text-3xl font-bold text-teal-700">
                {equivalentInB.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                })}{" "}
                <span className="text-lg font-normal text-teal-600">
                  {cityB?.countryId === "us" ? "USD" : cityB?.countryId === "uk" ? "GBP" : "EUR"}/year
                </span>
              </p>
              {percentDiff !== 0 && (
                <p className="mt-2 text-sm text-teal-700">
                  {percentDiff > 0
                    ? `${percentDiff.toFixed(0)}% more expensive than ${cityA?.name}`
                    : `${Math.abs(percentDiff).toFixed(0)}% less expensive than ${cityA?.name}`}
                </p>
              )}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Based on relative cost of living indices. Actual costs depend on lifestyle and family size.
            </p>
          </section>

          <AdSlot id="col-mid" className="mt-8 w-full" />
        </div>
      </div>

      <section className="prose prose-slate mt-12 max-w-none">
        <h2 className="text-xl font-semibold text-slate-900">
          How we compare cost of living
        </h2>
        <p className="text-slate-600">
          We use relative cost-of-living indices for housing, groceries, transport, and general
          expenses. The equivalent salary is the amount you’d need in the new city to maintain a
          similar purchasing power. This is a guide only; your own spending habits will vary.
        </p>
      </section>
    </div>
  );
}
