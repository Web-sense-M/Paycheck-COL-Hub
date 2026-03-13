import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 hover:text-teal-700"
        >
          Paycheck & COL Hub
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <Link
            href="/salary-calculator"
            className="text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            Salary Calculator
          </Link>
          <Link
            href="/cost-of-living"
            className="text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            Cost of Living
          </Link>
          <Link
            href="/offer-compare"
            className="text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            Offer Compare
          </Link>
        </nav>
      </div>
    </header>
  );
}
