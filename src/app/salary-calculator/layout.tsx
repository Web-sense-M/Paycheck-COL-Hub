import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paycheck Calculator | Net Salary Calculator - Take Home Pay After Tax",
  description:
    "Free paycheck calculator and net salary calculator. See your take-home pay after federal and state tax, social security, and NI for US, UK, and Germany.",
  openGraph: {
    title: "Paycheck Calculator | Net Salary Calculator | Paycheck & COL Hub",
    description: "Free paycheck calculator and net salary calculator for take-home pay. US, UK & Germany.",
  },
};

export default function SalaryCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
