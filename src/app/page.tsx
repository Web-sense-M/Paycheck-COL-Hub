import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { guides } from "@/data/guides";

const faqItems = [
  {
    question: "What is a paycheck calculator?",
    answer:
      "A paycheck calculator (also called a salary calculator or net salary calculator) shows you how much of your gross pay you take home after taxes and deductions. Enter your gross annual salary and location, and see your net annual pay, net monthly pay, and effective tax rate. Our free paycheck calculator covers the US (many states), UK, and Germany.",
  },
  {
    question: "How accurate are the salary and tax calculations?",
    answer:
      "Our calculations are based on officially published tax brackets and social contribution rates for each country and region we support. We source data from the IRS (US), HMRC (UK), and the German Federal Ministry of Finance. Results are simplified estimates assuming a single filer with no extra deductions or credits. For precise figures, check with your tax authority or a qualified tax advisor.",
  },
  {
    question: "What is a cost of living calculator and how does it work?",
    answer:
      "A cost of living calculator compares the relative expense of living in two different cities. You enter your current salary and two cities, and the tool calculates an equivalent salary—the amount you would need in the new city to maintain a similar standard of living. We use indices for housing, groceries, transport, and general expenses across major US, UK, and European cities.",
  },
  {
    question: "How do I compare two job offers in different cities?",
    answer:
      "Use our Job Offer Compare calculator. Enter both offers (city and gross salary for each), and the tool calculates net (take-home) pay for each offer after tax, then adjusts for cost of living so you can see which offer gives you more real purchasing power. This is more accurate than comparing gross salaries alone.",
  },
  {
    question: "Which US states have no income tax?",
    answer:
      "Nine US states have no state income tax on wages: Alaska, Florida, Nevada, New Hampshire (wages only), South Dakota, Tennessee, Texas, Washington, and Wyoming. Workers in these states only pay federal income tax and FICA (Social Security and Medicare), resulting in higher take-home pay compared to high-tax states like California or New York.",
  },
  {
    question: "Can I use these tools for official tax filing?",
    answer:
      "No. Our tools are designed for planning and comparison only. They provide estimates based on simplified assumptions and should not be used for official tax filing or as a substitute for professional tax advice. For important financial decisions, always consult a qualified tax professional or use your tax authority's official resources.",
  },
];

const latestGuides = guides.slice(-4).reverse();

export default function HomePage() {
  return (
    <div>
      <FAQJsonLd items={faqItems} />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-linear-to-b from-white to-slate-50/50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Paycheck Calculator, Salary Calculator &amp; Cost of Living
            Calculator
          </h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            Free paycheck calculator and net salary calculator for take-home
            pay. Cost of living calculator to compare cities. Job offer compare
            calculator for US, UK &amp; Europe.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/salary-calculator"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              Paycheck Calculator
            </Link>
            <Link
              href="/cost-of-living"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Cost of Living Calculator
            </Link>
            <Link
              href="/offer-compare"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Job Offer Compare Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Top ad */}
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
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
              Paycheck Calculator
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Free paycheck calculator and net salary calculator. Take-home pay
              after tax for US, UK, and Germany.
            </p>
            <span className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Use paycheck calculator →
            </span>
          </Link>

          <Link
            href="/cost-of-living"
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-200">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
              Cost of Living Calculator
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Free cost of living calculator. Compare two cities and see
              equivalent salary for the same lifestyle.
            </p>
            <span className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Use cost of living calculator →
            </span>
          </Link>

          <Link
            href="/offer-compare"
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-200">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
              Job Offer Compare Calculator
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              Free job offer compare calculator. Compare two offers by take-home
              pay and cost of living.
            </p>
            <span className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Use job offer compare calculator →
            </span>
          </Link>
        </div>
      </section>

      {/* Mid-content ad */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <AdSlot id="home-mid" className="w-full" />
      </div>

      {/* ── How It Works ──────────────────────────────── */}
      <section className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Three simple steps to understand your real salary and compare
            opportunities.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Enter Your Salary
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Input your gross annual salary and select your country and
                region. We support the US (many states), UK (England, Scotland,
                Wales, NI), and Germany.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                See Your Tax Breakdown
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Instantly see your net (take-home) pay, monthly income, and
                effective tax rate. We apply current income tax brackets and
                social contributions automatically.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-xl font-bold text-teal-700">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Compare Cities &amp; Offers
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Use the cost of living calculator to compare two cities, or the
                job offer compare tool to see which offer gives you more real
                purchasing power after tax and living costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Guides ─────────────────────────────── */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Latest Guides</h2>
            <Link
              href="/guides"
              className="text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              View all guides →
            </Link>
          </div>
          <p className="mt-2 text-slate-600">
            In-depth articles on salary, taxes, cost of living, and career
            finance.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {latestGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-teal-700">
                  {g.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">{g.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-teal-600">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO content ───────────────────────────────── */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Free Paycheck Calculator, Salary Calculator, Cost of Living
            Calculator &amp; Job Offer Compare
          </h2>
          <div className="mt-6 space-y-4 text-slate-600">
            <p>
              Our free{" "}
              <Link
                href="/salary-calculator"
                className="font-medium text-teal-700 hover:underline"
              >
                paycheck calculator
              </Link>{" "}
              and{" "}
              <Link
                href="/salary-calculator"
                className="font-medium text-teal-700 hover:underline"
              >
                net salary calculator
              </Link>{" "}
              show your take-home pay after federal and state tax, social
              security, and National Insurance for the United States (including
              California, New York, Texas, and more), the United Kingdom, and
              Germany. Use the <strong>salary calculator</strong> to see how
              much you keep from any gross salary.
            </p>
            <p>
              Our free{" "}
              <Link
                href="/cost-of-living"
                className="font-medium text-teal-700 hover:underline"
              >
                cost of living calculator
              </Link>{" "}
              lets you compare two cities and see what salary you&apos;d need in
              the new city to keep the same lifestyle. The{" "}
              <strong>cost of living calculator</strong> uses relative indices
              for housing, groceries, transport, and general expenses across
              major US, UK, and European cities.
            </p>
            <p>
              Our free{" "}
              <Link
                href="/offer-compare"
                className="font-medium text-teal-700 hover:underline"
              >
                job offer compare calculator
              </Link>{" "}
              combines both: enter two job offers (city + salary) and we show
              take-home pay for each, then adjust for cost of living so you can
              see which offer gives you more purchasing power. Use the{" "}
              <strong>job offer compare calculator</strong> when you have two
              offers and want to compare them fairly.
            </p>
            <p>
              All calculations are based on officially published tax brackets
              and social contribution rates. We source data from the{" "}
              <a
                href="https://www.irs.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 hover:underline"
              >
                IRS
              </a>{" "}
              (United States),{" "}
              <a
                href="https://www.gov.uk/income-tax-rates"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 hover:underline"
              >
                HMRC
              </a>{" "}
              (United Kingdom), and the{" "}
              <a
                href="https://www.bundesfinanzministerium.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 hover:underline"
              >
                German Federal Ministry of Finance
              </a>
              . Results are estimates for planning and comparison only—see our{" "}
              <Link
                href="/disclaimer"
                className="font-medium text-teal-700 hover:underline"
              >
                Disclaimer
              </Link>{" "}
              for details.
            </p>
            <p>
              See our{" "}
              <Link
                href="/guides"
                className="font-medium text-teal-700 hover:underline"
              >
                Guides
              </Link>{" "}
              for examples like{" "}
              <Link
                href="/salary-after-tax/us/ca/70000"
                className="font-medium text-teal-700 hover:underline"
              >
                $70,000 after tax in California
              </Link>{" "}
              and{" "}
              <Link
                href="/cost-of-living-compare/new-york/london"
                className="font-medium text-teal-700 hover:underline"
              >
                New York vs London cost of living
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────── */}
      <section className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600">
            Common questions about our paycheck calculator, salary calculator,
            cost of living tools, and how to use them.
          </p>
          <div className="mt-8 divide-y divide-slate-200">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group py-5"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 group-open:text-teal-700">
                  {item.question}
                  <svg
                    className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </details>
            ))}
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
