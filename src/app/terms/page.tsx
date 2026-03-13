import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Paycheck & COL Hub.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-2 text-slate-600">Last updated: March 2026.</p>
      <div className="prose prose-slate mt-8 max-w-none">
        <p>
          By using Paycheck & COL Hub you agree to these terms. Our tools (salary calculator, cost
          of living comparison, job offer compare) are for informational and estimation purposes
          only. They are not tax, legal, or financial advice. Always verify figures with official
          sources or a professional before making decisions.
        </p>
        <p>
          We do not guarantee accuracy of tax rates, cost-of-living indices, or conversions.
          You use the site at your own risk. We are not liable for any loss resulting from reliance
          on our calculators or content.
        </p>
        <p>
          You may link to our site for non-commercial use. Do not scrape or automate access
          without permission. We may change or discontinue the service at any time.
        </p>
      </div>
    </div>
  );
}
