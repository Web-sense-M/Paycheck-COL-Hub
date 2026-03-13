import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Offer Compare - Compare Two Offers by Salary & Location",
  description:
    "Compare two job offers by take-home pay and cost of living. See which offer gives you more purchasing power in US, UK & Europe.",
  openGraph: {
    title: "Job Offer Compare | Paycheck & COL Hub",
    description: "Compare job offers by salary and location with tax and COL adjustment.",
  },
};

export default function OfferCompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
