import Link from "next/link";
import AdSlot from "@/components/AdSlot";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Know your take-home pay and cost of living
          </h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            Free salary calculator, city comparison, and job offer comparison for the United States, UK, and Europe.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/salary-calculator"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              Net Salary Calculator
            </Link>
            <Link
              href="/cost-of-living"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Cost of Living Compare
            </Link>
            <Link
              href="/offer-compare"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Job Offer Compare
            </Link>
          </div>
        </div>
      </section>

      {/* Top ad - above fold, full width for AdSense */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <AdSlot id="home-top" className="w-full" />
      </div>

      {/* Tool cards */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
        aria-labelledby="tools-heading"
      >
        <h2 id="tools-heading" className="sr-only">
          Free tools
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/salary-calculator"
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
              Net Salary Calculator
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Estimate take-home pay after federal and state tax, social security, and NI for US, UK, and Germany.
            </p>
            <span className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Calculate →
            </span>
          </Link>

          <Link
            href="/cost-of-living"
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
              Cost of Living Compare
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Compare two cities and see what salary you’d need in the new city to keep the same lifestyle.
            </p>
            <span className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Compare cities →
            </span>
          </Link>

          <Link
            href="/offer-compare"
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
              Job Offer Compare
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Compare two job offers by take-home pay and cost-of-living adjusted value.
            </p>
            <span className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Compare offers →
            </span>
          </Link>
        </div>
      </section>

      {/* Mid-content ad */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <AdSlot id="home-mid" className="w-full" />
      </div>

      {/* SEO content */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Salary and cost of living tools for the US, UK, and Europe
          </h2>
          <div className="mt-6 space-y-4 text-slate-600">
            <p>
              Whether you’re negotiating a new job, moving cities, or planning a relocation,
              knowing your <strong>net salary</strong> (take-home pay after tax) and how
              <strong> cost of living</strong> differs between cities helps you make better decisions.
            </p>
            <p>
              Our <strong>net salary calculator</strong> estimates federal and state income tax,
              social security, National Insurance, and similar contributions for the United States
              (including California, New York, Texas, and more), the United Kingdom, and Germany.
              Results are for illustration only and are not a substitute for professional tax advice.
            </p>
            <p>
              The <strong>cost of living comparison</strong> tool shows you how much you’d need to
              earn in another city to maintain a similar standard of living. We use relative indices
              for housing, groceries, transport, and general expenses across major US, UK, and
              European cities.
            </p>
            <p>
              The <strong>job offer compare</strong> tool combines both: it calculates take-home pay
              for each offer and then adjusts for cost of living so you can see which offer gives
              you more purchasing power in the same city terms.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom ad */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <AdSlot id="home-bottom" className="w-full" />
      </div>
    </div>
  );
}
