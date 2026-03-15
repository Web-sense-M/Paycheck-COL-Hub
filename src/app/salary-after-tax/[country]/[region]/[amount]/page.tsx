import { notFound } from "next/navigation";
import Link from "next/link";
import { countries, getCountry, getRegion, type CountryId } from "@/data/countries";
import { calculateNet } from "@/data/tax";
import { absoluteUrl } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const VALID_COUNTRIES = ["us", "uk", "de"] as const;
const MIN_AMOUNT = 10000;
const MAX_AMOUNT = 500000;

function formatMoney(value: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
}

type Props = {
  params: Promise<{ country: string; region: string; amount: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { country, region, amount } = await params;
  const countryId = country.toLowerCase() as CountryId;
  const c = getCountry(countryId);
  const r = c && getRegion(countryId, region);
  const amt = parseInt(amount, 10);
  if (!c || !r || !Number.isFinite(amt) || amt < MIN_AMOUNT || amt > MAX_AMOUNT) {
    return { title: "Salary After Tax | Paycheck & COL Hub" };
  }
  const result = calculateNet(countryId, amt, r.id);
  const title = `${formatMoney(amt, c.currency)} After Tax in ${r.name} (${c.name}) 2026`;
  const description = `${r.name}: ${formatMoney(amt, c.currency)} gross → ${formatMoney(result.netAnnual, c.currency)} net annual (${formatMoney(result.netMonthly, c.currency)}/month). Effective tax ${result.effectiveRate.toFixed(1)}%.`;
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function SalaryAfterTaxPage({ params }: Props) {
  const { country, region, amount } = await params;
  const countryId = country.toLowerCase() as CountryId;
  const c = getCountry(countryId);
  const r = c && getRegion(countryId, region);
  const amt = parseInt(amount, 10);

  if (!c || !r || !Number.isFinite(amt) || amt < MIN_AMOUNT || amt > MAX_AMOUNT) {
    notFound();
  }

  const result = calculateNet(countryId, amt, r.id);
  const path = `/salary-after-tax/${country}/${region}/${amount}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Salary Calculator", path: "/salary-calculator" },
          { name: `${formatMoney(amt, c.currency)} in ${r.name}`, path },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/salary-calculator" className="hover:text-teal-700">Salary Calculator</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{formatMoney(amt, c.currency)} in {r.name}</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {formatMoney(amt, c.currency)} After Tax in {r.name}
        </h1>
        <p className="mt-2 text-slate-600">
          Estimated take-home pay for a gross annual salary of {formatMoney(amt, c.currency)} in {r.name}, {c.name}.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Summary</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-600">Gross annual</dt>
                <dd className="font-medium text-slate-900">{formatMoney(result.grossAnnual, c.currency)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">Net annual</dt>
                <dd className="font-bold text-teal-700">{formatMoney(result.netAnnual, c.currency)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">Net monthly</dt>
                <dd className="font-medium text-slate-900">{formatMoney(result.netMonthly, c.currency)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">Effective tax rate</dt>
                <dd className="text-slate-900">{result.effectiveRate.toFixed(1)}%</dd>
              </div>
            </dl>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Breakdown</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Federal income tax: −{formatMoney(result.federalIncomeTax, c.currency)}</li>
              {result.stateOrRegionalTax > 0 && (
                <li>State / regional: −{formatMoney(result.stateOrRegionalTax, c.currency)}</li>
              )}
              <li>Social / NI: −{formatMoney(result.socialTax, c.currency)}</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 rounded-xl bg-slate-50 p-6">
          <p className="text-sm text-slate-600">
            Use our <Link href="/salary-calculator" className="font-medium text-teal-700 hover:underline">Net Salary Calculator</Link> to try other amounts and regions. Estimates only; not tax advice.
          </p>
        </div>

        <section className="prose prose-slate mt-10 max-w-none">
          <h2 className="text-xl font-semibold text-slate-900">
            How we calculate {formatMoney(amt, c.currency)} after tax in {r.name}
          </h2>
          <p className="text-slate-600">
            We apply federal (and where relevant state or regional) income tax brackets plus social security,
            National Insurance, or similar contributions for {c.name}. This page shows a single filer estimate
            and does not include every deduction or credit. For official figures, use your tax authority’s
            calculator or a qualified professional.
          </p>
        </section>
      </div>
    </>
  );
}
