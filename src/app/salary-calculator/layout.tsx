import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Net Salary Calculator - Take Home Pay After Tax | US, UK, Germany",
  description:
    "Free net salary calculator. See your take-home pay after federal and state tax, social security, and NI for United States, UK, and Germany.",
  openGraph: {
    title: "Net Salary Calculator | Paycheck & COL Hub",
    description: "Estimate take-home pay after tax for US, UK & Germany.",
  },
};

export default function SalaryCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
