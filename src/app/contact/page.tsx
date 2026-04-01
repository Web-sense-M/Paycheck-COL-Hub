import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us – Paycheck & COL Hub",
  description:
    "Get in touch with Paycheck & COL Hub. Report a data issue, suggest a new feature, or ask a question about our salary and cost of living tools.",
};

const CONTACT_EMAIL = "support@paycheckcitycompare.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-3 text-lg text-slate-600">
        Have a question, found a data issue, or want to suggest a new country
        or city? We&apos;d love to hear from you.
      </p>

      <div className="mt-10 space-y-10">
        {/* ── Email ───────────────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Email Us Directly
          </h2>
          <p className="mt-3 text-slate-600">
            The fastest way to reach us is by email. We read every message and
            typically respond within <strong>1–2 business days</strong>.
          </p>
          <p className="mt-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        {/* ── What to include ─────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            What to Include in Your Message
          </h2>
          <p className="mt-3 text-slate-600">
            To help us respond quickly, please include the following where
            relevant:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>
              <strong>Data issue:</strong> The page or calculator you were using,
              the inputs you entered, the result you received, and what you
              believe the correct value should be (with a source if possible).
            </li>
            <li>
              <strong>Feature request:</strong> A description of the country,
              city, or tool feature you&apos;d like us to add.
            </li>
            <li>
              <strong>General question:</strong> As much context as you can
              provide so we can give you a helpful answer.
            </li>
          </ul>
        </section>

        {/* ── FAQ ─────────────────────────────────────── */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-slate-800">
                Why does my result differ from my actual paycheck?
              </h3>
              <p className="mt-1 text-slate-600">
                Our calculators assume a single filer with no extra deductions
                (401(k), HSA, dependents, etc.). Real paychecks include
                employer-specific withholdings, benefits, and credits that we
                don&apos;t model. Our numbers are planning estimates—for exact
                figures, check with your payroll department or a tax
                professional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Do you support my country or state?
              </h3>
              <p className="mt-1 text-slate-600">
                We currently cover the US (many states), UK (England/Wales/NI
                and Scotland), and Germany. We are actively adding more regions.
                If yours is missing, email us and we will prioritize it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                How often is your data updated?
              </h3>
              <p className="mt-1 text-slate-600">
                We review and update tax brackets and social contribution rates
                at least once per tax year for each country we support. Cost of
                living indices are refreshed regularly. See our{" "}
                <Link
                  href="/about"
                  className="font-medium text-teal-700 hover:underline"
                >
                  About page
                </Link>{" "}
                for details on our data sources.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Can I use your tools for official tax filing?
              </h3>
              <p className="mt-1 text-slate-600">
                No. Our tools are for planning and comparison only. They are not a
                substitute for official tax-filing software or professional tax
                advice. Please read our{" "}
                <Link
                  href="/disclaimer"
                  className="font-medium text-teal-700 hover:underline"
                >
                  Disclaimer
                </Link>{" "}
                for more details.
              </p>
            </div>
          </div>
        </section>

        {/* ── Note ────────────────────────────────────── */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Please note:</strong> Do not send sensitive personal
            information, full tax records, or Social Security / National
            Insurance numbers via email. We cannot provide individual tax or
            financial advice. For personalized guidance, consult a qualified
            professional.
          </p>
        </div>
      </div>
    </div>
  );
}
