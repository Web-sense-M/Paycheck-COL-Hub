import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Paycheck & COL Hub",
  description:
    "Learn why we built Paycheck & COL Hub and how our salary and cost of living tools work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">About Paycheck & COL Hub</h1>
      <p className="mt-2 text-slate-600">
        Paycheck & COL Hub is a free set of tools to help you quickly understand your net salary,
        compare cost of living between cities, and compare job offers in different locations.
      </p>
      <div className="prose prose-slate mt-8 max-w-none space-y-4">
        <p>
          Many people look at a gross salary number without seeing how much actually lands in their
          bank account after income tax and social security, or how far that money goes in another
          city. Our goal is to give you simple calculators that turn complex tax rules and cost of
          living data into clear estimates you can use in everyday decisions.
        </p>
        <p>
          The salary and tax calculations on this site are based on publicly available tax brackets
          and typical social contributions for the countries we support. Results are simplified
          estimates and do not include every possible deduction, credit, or personal situation. For
          important decisions, always double‑check figures with official calculators or a qualified
          professional.
        </p>
        <p>
          We plan to expand the site with more countries, more cities, and clearer guides around
          moving between locations, negotiating offers, and understanding take‑home pay. If you have
          suggestions or spot issues with the numbers, please reach out via the contact page.
        </p>
      </div>
    </div>
  );
}

