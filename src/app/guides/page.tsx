import Link from "next/link";
import { guides } from "@/data/guides";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Guides – Salary, Tax & Cost of Living",
  description:
    "Guides on net salary, tax estimates, and cost of living for US, UK and Europe. Use our calculators to plan your move or compare job offers.",
};

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }]} />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Guides</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Guides
        </h1>
        <p className="mt-2 text-slate-600">
          Practical guides on take-home pay, tax estimates, and cost of living for the US, UK and Germany.
        </p>
        <ul className="mt-10 space-y-6">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-slate-900 hover:text-teal-700">
                  {g.title}
                </h2>
                <p className="mt-1 text-sm text-slate-600">{g.description}</p>
                <span className="mt-2 inline-block text-sm font-medium text-teal-600">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
