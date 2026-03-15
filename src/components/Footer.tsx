import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Tools
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/salary-calculator" className="text-slate-600 hover:text-teal-700">
                  Net Salary Calculator
                </Link>
              </li>
              <li>
                <Link href="/cost-of-living" className="text-slate-600 hover:text-teal-700">
                  Cost of Living Compare
                </Link>
              </li>
              <li>
                <Link href="/offer-compare" className="text-slate-600 hover:text-teal-700">
                  Job Offer Compare
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-slate-600 hover:text-teal-700">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>
                <Link href="/about" className="hover:text-teal-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-teal-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-teal-700">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-slate-500">
              Free calculators for salary, taxes, and cost of living. US, UK & EU.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {currentYear} Paycheck & COL Hub. Estimates only; not tax or legal advice.
        </div>
      </div>
    </footer>
  );
}
