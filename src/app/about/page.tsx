import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Paycheck & COL Hub – Our Mission, Methodology & Team",
  description:
    "Learn about Paycheck & COL Hub: our mission, how we calculate take-home pay and cost of living, our data sources, and our commitment to accuracy.",
};

const LAST_UPDATED = "April 15, 2026";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        About Paycheck &amp; COL Hub
      </h1>
      <p className="mt-3 text-lg text-slate-600">
        Free, transparent salary and cost-of-living tools built for real
        financial decisions.
      </p>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-10 space-y-10">
        {/* ── Our Mission ─────────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
          <div className="mt-3 space-y-4 text-slate-600">
            <p>
              Every year, millions of professionals evaluate job offers, plan
              relocations, or simply wonder how much of their salary they
              actually keep after taxes. The challenge? Tax rules differ by
              country, state, and even city—and cost of living can turn a
              &ldquo;bigger&rdquo; salary into less purchasing power.
            </p>
            <p>
              Paycheck &amp; COL Hub exists to make that comparison effortless.
              We built a{" "}
              <Link
                href="/salary-calculator"
                className="font-medium text-teal-700 hover:underline"
              >
                net salary calculator
              </Link>
              , a{" "}
              <Link
                href="/cost-of-living"
                className="font-medium text-teal-700 hover:underline"
              >
                cost of living calculator
              </Link>
              , and a{" "}
              <Link
                href="/offer-compare"
                className="font-medium text-teal-700 hover:underline"
              >
                job offer compare calculator
              </Link>{" "}
              so you can see, in minutes, what a salary is really worth—after
              tax, after rent, after groceries. No sign-up, no paywall. Just
              clear numbers.
            </p>
          </div>
        </section>

        {/* ── How We Calculate ────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            How We Calculate
          </h2>
          <div className="mt-3 space-y-4 text-slate-600">
            <p>
              Our salary and tax calculations are built on publicly available,
              government-published tax brackets and social-contribution rates
              for each country and region we support. Here is a summary of our
              methodology:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>United States:</strong> We apply current federal income
                tax brackets (10 %–37 %), Social Security (6.2 % up to the wage
                cap), Medicare (1.45 %), plus state income tax for every state
                we cover—including California, New York, Texas, Florida,
                Illinois, Washington, and more. For states with no income tax
                (TX, FL, WA, etc.) the state component is zero, making the
                comparison immediately clear.
              </li>
              <li>
                <strong>United Kingdom:</strong> We use the current personal
                allowance, basic-rate, higher-rate, and additional-rate bands,
                plus National Insurance contributions. Scotland has separate
                bands and rates, which we handle independently.
              </li>
              <li>
                <strong>Germany:</strong> We apply the standard German income
                tax formula (Einkommensteuer) and the four main social
                contributions: pension insurance (Rentenversicherung), health
                insurance (Krankenversicherung), unemployment insurance
                (Arbeitslosenversicherung), and long-term care insurance
                (Pflegeversicherung).
              </li>
            </ul>
            <p>
              Cost-of-living comparisons use relative price indices for housing,
              groceries, transport, and general expenses across major cities. We
              cross-reference multiple data points to produce a single,
              intuitive equivalent-salary figure.
            </p>
          </div>
        </section>

        {/* ── Our Data Sources ────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Our Data Sources
          </h2>
          <div className="mt-3 space-y-4 text-slate-600">
            <p>
              Transparency matters. We source our tax data from official
              government publications:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>US:</strong>{" "}
                <a
                  href="https://www.irs.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline hover:no-underline"
                >
                  Internal Revenue Service (IRS)
                </a>{" "}
                and individual state tax authority websites (e.g., California
                Franchise Tax Board, New York State Department of Taxation and
                Finance).
              </li>
              <li>
                <strong>UK:</strong>{" "}
                <a
                  href="https://www.gov.uk/income-tax-rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline hover:no-underline"
                >
                  HM Revenue &amp; Customs (HMRC)
                </a>{" "}
                and{" "}
                <a
                  href="https://www.gov.uk/national-insurance-rates-letters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline hover:no-underline"
                >
                  National Insurance rate tables
                </a>
                .
              </li>
              <li>
                <strong>Germany:</strong>{" "}
                <a
                  href="https://www.bundesfinanzministerium.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline hover:no-underline"
                >
                  Bundesministerium der Finanzen (BMF)
                </a>{" "}
                and the social insurance contribution schedules published
                annually.
              </li>
            </ul>
            <p>
              Cost-of-living indices are derived from aggregated consumer-price
              data, housing-market reports, and publicly available city-level
              statistics. We update our data regularly, though we cannot
              guarantee real-time accuracy—see our{" "}
              <Link
                href="/disclaimer"
                className="font-medium text-teal-700 hover:underline"
              >
                Disclaimer
              </Link>{" "}
              for important caveats.
            </p>
          </div>
        </section>

        {/* ── Editorial Standards ─────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Our Editorial Standards
          </h2>
          <div className="mt-3 space-y-4 text-slate-600">
            <p>
              Every guide and calculator on this site follows a set of
              principles:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Accuracy first:</strong> We cross-check tax rates
                against official sources before publishing and update them when
                new rates are announced.
              </li>
              <li>
                <strong>Transparency:</strong> We explain our assumptions (e.g.,
                single filer, no extra deductions) so you know exactly what the
                numbers represent.
              </li>
              <li>
                <strong>No hidden agenda:</strong> Our guides are written to
                inform, not to sell you anything. Advertising (via Google
                AdSense) helps keep the tools free, but it never influences our
                calculations or editorial content.
              </li>
              <li>
                <strong>Regular updates:</strong> Tax law changes every year. We
                review and update our data at least annually for each country we
                support.
              </li>
              <li>
                <strong>Not advice:</strong> We always make it clear that our
                results are estimates for planning and comparison—never a
                substitute for professional tax, financial, or legal advice.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Who We Are ──────────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Who We Are</h2>
          <div className="mt-3 space-y-4 text-slate-600">
            <p>
              Paycheck &amp; COL Hub was created by a small team of finance
              enthusiasts and software engineers who have navigated cross-border
              job changes themselves. We have lived and worked across the US,
              UK, and Europe—and we understand how confusing it can be to
              compare a salary in dollars, pounds, and euros while factoring in
              wildly different tax systems and living costs.
            </p>
            <p>
              We built the tools we wished existed when we were making our own
              relocation decisions. Today, thousands of people use Paycheck
              &amp; COL Hub every month to plan moves, evaluate offers, and
              understand their financial picture. We are committed to keeping
              the tools free and continuously improving them.
            </p>
          </div>
        </section>

        {/* ── Get in Touch ────────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Get in Touch</h2>
          <p className="mt-3 text-slate-600">
            Have a suggestion, found a data issue, or want to request a new
            country or city? We would love to hear from you—visit our{" "}
            <Link
              href="/contact"
              className="font-medium text-teal-700 hover:underline"
            >
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
