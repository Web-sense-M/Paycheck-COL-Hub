import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Offer Compare Calculator - Compare Two Offers by Salary & Location",
  description:
    "Free job offer compare calculator. Compare two job offers by take-home pay and cost of living. See which offer gives you more purchasing power.",
  openGraph: {
    title: "Job Offer Compare Calculator | Compare Two Offers | Paycheck & COL Hub",
    description: "Free job offer compare calculator. Compare two job offers by salary, tax, and cost of living.",
  },
};

export default function OfferCompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
