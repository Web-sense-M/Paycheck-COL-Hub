import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
            PH
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900">
              Paycheck Hub
            </span>
            <span className="text-[11px] text-zinc-500">
              Net pay & cost-of-living
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 text-xs font-medium text-zinc-600 sm:flex">
          <Link
            href="#net-pay"
            className="rounded-full px-3 py-1 hover:bg-zinc-100"
          >
            Net Pay Calculator
          </Link>
          <Link
            href="#cost-of-living"
            className="rounded-full px-3 py-1 hover:bg-zinc-100"
          >
            Cost of Living
          </Link>
        </nav>
      </div>
    </header>
  );
}

