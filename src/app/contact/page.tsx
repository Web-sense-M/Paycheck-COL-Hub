import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Paycheck & COL Hub with questions or feedback.",
};

const CONTACT_EMAIL = "hello@example.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p className="mt-2 text-slate-600">
        Have a question about the calculators, spotted an issue with a tax rate, or want to suggest
        a new country or city? We&apos;d love to hear from you.
      </p>
      <div className="prose prose-slate mt-8 max-w-none space-y-4">
        <p>
          The fastest way to reach us is by email. We read every message and use your feedback to
          improve the tools and add new locations and features over time.
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-700 underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="text-sm text-slate-500">
          Please do not send any sensitive personal information or full tax records. General
          questions and suggestions are welcome.
        </p>
      </div>
    </div>
  );
}

