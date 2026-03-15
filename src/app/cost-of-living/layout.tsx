import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Living Calculator - Compare Cities & Equivalent Salary",
  description:
    "Free cost of living calculator. Compare two cities and see what salary you need in a new city to match your lifestyle. US, UK, Germany, Europe.",
  openGraph: {
    title: "Cost of Living Calculator | Compare Cities | Paycheck & COL Hub",
    description: "Free cost of living calculator. Compare cities and equivalent salary for US, UK & Europe.",
  },
};

export default function CostOfLivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
