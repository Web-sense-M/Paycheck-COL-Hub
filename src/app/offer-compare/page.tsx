"use client";

import { useState, useMemo } from "react";
import { cities, getCity, compareCol } from "@/data/col";
import { calculateNet, type NetResult } from "@/data/tax";
import { countries, getCountry, type CountryId } from "@/data/countries";
import AdSlot from "@/components/AdSlot";

function formatMoney(value: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
}

// Map city to country + region for tax
function getCountryRegionForCity(cityId: string): { countryId: CountryId; regionId: string } {
  const city = getCity(cityId);
  if (!city) return { countryId: "us", regionId: "ca" };
  const country = getCountry(city.countryId);
  const regionId = country?.regions[0]?.id ?? "ca";
  return { countryId: city.countryId, regionId };
}

export default function OfferComparePage() {
  const [cityAId, setCityAId] = useState("new-york");
  const [cityBId, setCityBId] = useState("san-francisco");
  const [salaryA, setSalaryA] = useState("80000");
  const [salaryB, setSalaryB] = useState("120000");

  const { countryId: countryAId, regionId: regionAId } = useMemo(
    () => getCountryRegionForCity(cityAId),
    [cityAId]
  );
  const { countryId: countryBId, regionId: regionBId } = useMemo(
    () => getCountryRegionForCity(cityBId),
    [cityBId]
  );

  const numA = useMemo(() => {
    const n = parseFloat(salaryA.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }, [salaryA]);
  const numB = useMemo(() => {
    const n = parseFloat(salaryB.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }, [salaryB]);

  const resultA: NetResult | null = useMemo(
    () => (numA > 0 ? calculateNet(countryAId, numA, regionAId) : null),
    [countryAId, regionAId, numA]
  );
  const resultB: NetResult | null = useMemo(
    () => (numB > 0 ? calculateNet(countryBId, numB, regionBId) : null),
    [countryBId, regionBId, numB]
  );

  const cityA = getCity(cityAId);
  const cityB = getCity(cityBId);
  const ratio = useMemo(() => compareCol(cityAId, cityBId), [cityAId, cityBId]);

  // COL-adjusted: what would offer B's net be worth in city A's cost of living?
  const netBAdjustedForA = useMemo(() => {
    if (!resultB) return 0;
    return resultB.netAnnual / ratio;
  }, [resultB, ratio]);

  const betterOffer = useMemo(() => {
    if (!resultA || !resultB) return null;
    return netBAdjustedForA > resultA.netAnnual ? "B" : "A";
  }, [resultA, resultB, netBAdjustedForA]);

  const countryA = getCountry(countryAId);
  const countryB = getCountry(countryBId);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Job Offer Compare
        </h1>
        <p className="mt-2 text-slate-600">
          Compare two job offers by location and salary. We show take-home pay and cost-of-living adjusted value.
        </p>
      </div>

      <AdSlot id="offer-top" className="mb-8 w-full" />

      <div className="grid gap-6 sm:grid-cols-2">
        <section
          className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm"
          aria-labelledby="offer-a"
        >
          <h2 id="offer-a" className="text-lg font-semibold text-slate-900">
            Offer A
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="city-a" className="block text-sm font-medium text-slate-700">
                City
              </label>
              <select
                id="city-a"
                value={cityAId}
                onChange={(e) => setCityAId(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"
              >
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}, {c.country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="salary-a" className="block text-sm font-medium text-slate-700">
                Gross annual salary
              </label>
              <input
                id="salary-a"
                type="text"
                inputMode="numeric"
                value={salaryA}
                onChange={(e) => setSalaryA(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"
              />
            </div>
            {resultA && countryA && (
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm text-slate-600">Net annual</p>
                <p className="text-xl font-bold text-slate-900">
                  {formatMoney(resultA.netAnnual, countryA.currency)}
                </p>
                <p className="text-sm text-slate-500">
                  {formatMoney(resultA.netMonthly, countryA.currency)}/month
                </p>
              </div>
            )}
          </div>
        </section>

        <section
          className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm"
          aria-labelledby="offer-b"
        >
          <h2 id="offer-b" className="text-lg font-semibold text-slate-900">
            Offer B
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="city-b" className="block text-sm font-medium text-slate-700">
                City
              </label>
              <select
                id="city-b"
                value={cityBId}
                onChange={(e) => setCityBId(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"
              >
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}, {c.country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="salary-b" className="block text-sm font-medium text-slate-700">
                Gross annual salary
              </label>
              <input
                id="salary-b"
                type="text"
                inputMode="numeric"
                value={salaryB}
                onChange={(e) => setSalaryB(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"
              />
            </div>
            {resultB && countryB && (
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm text-slate-600">Net annual</p>
                <p className="text-xl font-bold text-slate-900">
                  {formatMoney(resultB.netAnnual, countryB.currency)}
                </p>
                <p className="text-sm text-slate-500">
                  {formatMoney(resultB.netMonthly, countryB.currency)}/month
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {resultA && resultB && cityA && cityB && (
        <section
          className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6"
          aria-live="polite"
        >
          <h2 className="text-lg font-semibold text-teal-900">
            Cost-of-living adjusted comparison
          </h2>
          <p className="mt-1 text-sm text-teal-800">
            We convert Offer B’s net pay into {cityA.name} equivalent purchasing power (so you can compare apples to apples).
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div>
              <p className="text-sm text-teal-700">Offer A net in {cityA.name}</p>
              <p className="text-2xl font-bold text-teal-900">
                {formatMoney(resultA.netAnnual, countryA?.currency ?? "USD")}
              </p>
            </div>
            <div className="text-slate-400">vs</div>
            <div>
              <p className="text-sm text-teal-700">
                Offer B net ≈ {formatMoney(netBAdjustedForA, countryA?.currency ?? "USD")} in {cityA.name} terms
              </p>
              <p className="text-2xl font-bold text-teal-900">
                {betterOffer === "A"
                  ? "Offer A is better (higher purchasing power)"
                  : "Offer B is better (higher purchasing power)"}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-teal-700">
            Based on tax estimates and relative cost of living. Benefits, equity, and other factors not included.
          </p>
        </section>
      )}

      <AdSlot id="offer-mid" className="mt-8 w-full" />

      <section className="prose prose-slate mt-12 max-w-none">
        <h2 className="text-xl font-semibold text-slate-900">
          How job offer comparison works
        </h2>
        <p className="text-slate-600">
          We estimate net (after-tax) pay for each offer using the country and region for the chosen city,
          then adjust for cost of living so both are expressed in the same city’s purchasing power.
          This gives you a like-for-like view; always consider benefits, growth, and personal preferences too.
        </p>
      </section>
    </div>
  );
}
