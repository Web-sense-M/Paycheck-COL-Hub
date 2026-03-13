"use client";

import { useState, useMemo } from "react";
import { countries, getCountry, type CountryId } from "@/data/countries";
import { calculateNet, type NetResult } from "@/data/tax";
import AdSlot from "@/components/AdSlot";

function formatMoney(value: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
}

export default function SalaryCalculatorPage() {
  const [countryId, setCountryId] = useState<CountryId>("us");
  const [regionId, setRegionId] = useState("ca");
  const [grossInput, setGrossInput] = useState("75000");

  const country = useMemo(() => getCountry(countryId), [countryId]);
  const grossAnnual = useMemo(() => {
    const n = parseFloat(grossInput.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }, [grossInput]);

  const result: NetResult | null = useMemo(() => {
    if (!country || grossAnnual <= 0) return null;
    const region = country.regions.find((r) => r.id === regionId) || country.regions[0];
    return calculateNet(countryId, grossAnnual, region.id);
  }, [countryId, regionId, grossAnnual, country]);

  // When country changes, reset region to first of that country
  const handleCountryChange = (id: CountryId) => {
    setCountryId(id);
    const c = getCountry(id);
    if (c?.regions[0]) setRegionId(c.regions[0].id);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Net Salary Calculator
        </h1>
        <p className="mt-2 text-slate-600">
          Estimate your take-home pay after income tax and social security in the US, UK, and Germany.
        </p>
      </div>

      <AdSlot id="salary-top" className="mb-8 w-full" />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <section
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            aria-labelledby="calculator-inputs"
          >
            <h2 id="calculator-inputs" className="sr-only">
              Calculator inputs
            </h2>
            <div className="space-y-5">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-700">
                  Country
                </label>
                <select
                  id="country"
                  value={countryId}
                  onChange={(e) => handleCountryChange(e.target.value as CountryId)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-slate-700">
                  State / Region
                </label>
                <select
                  id="region"
                  value={regionId}
                  onChange={(e) => setRegionId(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                >
                  {country?.regions.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="gross" className="block text-sm font-medium text-slate-700">
                  Gross annual salary ({country?.currency ?? "USD"})
                </label>
                <input
                  id="gross"
                  type="text"
                  inputMode="numeric"
                  value={grossInput}
                  onChange={(e) => setGrossInput(e.target.value)}
                  placeholder="75000"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-3">
          {result && (
            <section
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              aria-labelledby="results"
            >
              <h2 id="results" className="text-lg font-semibold text-slate-900">
                Your take-home pay
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Gross annual</span>
                  <span className="font-medium text-slate-900">
                    {formatMoney(result.grossAnnual, country?.currency ?? "USD")}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Federal income tax</span>
                  <span>-{formatMoney(result.federalIncomeTax, country?.currency ?? "USD")}</span>
                </div>
                {result.stateOrRegionalTax > 0 && (
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>State / regional tax</span>
                    <span>-{formatMoney(result.stateOrRegionalTax, country?.currency ?? "USD")}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Social security / NI</span>
                  <span>-{formatMoney(result.socialTax, country?.currency ?? "USD")}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-4">
                  <span className="font-medium text-slate-700">Net annual</span>
                  <span className="text-xl font-bold text-teal-700">
                    {formatMoney(result.netAnnual, country?.currency ?? "USD")}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-2">
                  <span className="text-slate-600">Net monthly</span>
                  <span className="font-semibold text-slate-900">
                    {formatMoney(result.netMonthly, country?.currency ?? "USD")}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Effective tax rate: {result.effectiveRate.toFixed(1)}%. Estimates only; not tax advice.
                </p>
              </div>
            </section>
          )}

          <AdSlot id="salary-mid" className="mt-8 w-full" />
        </div>
      </div>

      <section className="prose prose-slate mt-12 max-w-none">
        <h2 className="text-xl font-semibold text-slate-900">
          How the salary calculator works
        </h2>
        <p className="text-slate-600">
          We apply federal (and where relevant state) income tax brackets plus social security,
          National Insurance, or similar contributions for the country and region you choose.
          Results are estimates for a single filer and do not account for deductions, credits,
          or other situations. Always confirm with a tax professional or official calculator.
        </p>
      </section>
    </div>
  );
}
