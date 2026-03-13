import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Paycheck & COL Hub.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-slate-600">Last updated: March 2026.</p>
      <div className="prose prose-slate mt-8 max-w-none">
        <p>
          Paycheck & COL Hub (&quot;we&quot;) may collect information you provide when using our
          calculators (e.g. salary and location inputs). We do not sell your personal data. We may
          use cookies and similar technologies for analytics and advertising (e.g. Google AdSense).
          You can control cookies through your browser settings.
        </p>
        <p>
          We use Google AdSense to show ads. Google may use cookies and data to personalize ads.
          See Google’s Privacy Policy for details. By using this site you agree to our use of
          cookies and third-party advertising as described here.
        </p>
        <p>
          For questions, contact us via the contact information on the site. We may update this
          policy from time to time; the &quot;Last updated&quot; date will be revised accordingly.
        </p>
      </div>
    </div>
  );
}
