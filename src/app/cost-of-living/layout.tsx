import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Living Comparison - Compare Cities US, UK, Europe",
  description:
    "Compare cost of living between cities. See what salary you need in a new city to match your current lifestyle. US, UK, Germany.",
  openGraph: {
    title: "Cost of Living Comparison | Paycheck & COL Hub",
    description: "Compare cities and equivalent salaries for US, UK & Europe.",
  },
};

export default function CostOfLivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
