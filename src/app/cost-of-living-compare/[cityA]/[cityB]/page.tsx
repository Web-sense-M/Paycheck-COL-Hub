import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCity, compareCol, equivalentSalary } from "@/data/col";
import { absoluteUrl } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

type Props = {
  params: Promise<{ cityA: string; cityB: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { cityA, cityB } = await params;
  const a = getCity(cityA);
  const b = getCity(cityB);
  if (!a || !b) return { title: "Cost of Living Comparison | Paycheck & COL Hub" };
  const title = `Cost of Living: ${a.name} vs ${b.name} 2026`;
  const ratio = compareCol(cityA, cityB);
  const pct = ((ratio - 1) * 100).toFixed(0);
  const desc = ratio >= 1
    ? `${b.name} is about ${pct}% more expensive than ${a.name}. Compare salaries and equivalent income.`
    : `${b.name} is about ${Math.abs(Number(pct))}% less expensive than ${a.name}. Compare salaries and equivalent income.`;
  return {
    title,
    description: desc,
    openGraph: { title, description: desc },
  };
}

export default async function CostOfLivingComparePage({ params }: Props) {
  const { cityA, cityB } = await params;
  const a = getCity(cityA);
  const b = getCity(cityB);

  if (!a || !b || cityA === cityB) notFound();

  const ratio = compareCol(cityA, cityB);
  const percentDiff = (ratio - 1) * 100;
  const path = `/cost-of-living-compare/${cityA}/${cityB}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Cost of Living", path: "/cost-of-living" },
          { name: `${a.name} vs ${b.name}`, path },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/cost-of-living" className="hover:text-teal-700">Cost of Living</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{a.name} vs {b.name}</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Cost of Living: {a.name} vs {b.name}
        </h1>
        <p className="mt-2 text-slate-600">
          Compare cost of living between {a.name} and {b.name}. See how much you’d need to earn in one city to match the other.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Relative cost</h2>
          <p className="mt-2 text-slate-600">
            {percentDiff > 0
              ? `${b.name} is about ${percentDiff.toFixed(0)}% more expensive than ${a.name} for a similar lifestyle.`
              : `${b.name} is about ${Math.abs(percentDiff).toFixed(0)}% less expensive than ${a.name}.`}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Based on our cost-of-living indices (housing, groceries, transport, and general expenses).
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-teal-50 p-6">
          <h2 className="text-lg font-semibold text-teal-900">Equivalent salary</h2>
          <p className="mt-1 text-sm text-teal-800">
            To have a similar standard of living in <strong>{b.name}</strong> as someone earning $60,000 in <strong>{a.name}</strong>, you’d need approximately{" "}
            <strong>
              {equivalentSalary(60000, cityA, cityB).toLocaleString("en-US", { maximumFractionDigits: 0 })}{" "}
              {b.countryId === "us" ? "USD" : b.countryId === "uk" ? "GBP" : "EUR"}/year
            </strong> in {b.name}.
          </p>
          <p className="mt-4">
            <Link href="/cost-of-living" className="font-medium text-teal-700 hover:underline">
              Use our Cost of Living Calculator →
            </Link>
          </p>
        </div>

        <section className="prose prose-slate mt-10 max-w-none">
          <h2 className="text-xl font-semibold text-slate-900">
            How we compare {a.name} and {b.name}
          </h2>
          <p className="text-slate-600">
            We use relative cost-of-living indices for housing, groceries, transport, and general expenses.
            The equivalent salary is an estimate; your own spending and lifestyle will affect the real number.
          </p>
        </section>
      </div>
    </>
  );
}
