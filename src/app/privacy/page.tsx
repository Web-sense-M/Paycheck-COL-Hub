import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Paycheck & COL Hub. How we collect, use, and protect your information when you use our salary and cost of living tools.",
};

const LAST_UPDATED = "March 12, 2026";
const METHODOLOGY_SUMMARY = `We process calculator inputs primarily in the browser and use aggregated, non-identifying usage data to improve the tools. The calculators themselves do not log personal identifiable inputs unless you explicitly submit them via contact forms.`;

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-slate-600">Last updated: {LAST_UPDATED}</p>

      <div className="prose prose-slate mt-10 max-w-none space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            1. Introduction
          </h2>
          <p>
            Paycheck & COL Hub (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) operates the website Paycheck & COL Hub and related
            tools (the &quot;Service&quot;). This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit or use our Service. By accessing or using the Service, you
            agree to the practices described in this policy. If you do not
            agree, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Methodology & Data Handling
          </h2>
          <p>{METHODOLOGY_SUMMARY}</p>
          <p>
            We retain aggregated usage metrics to improve calculator accuracy
            and identify data drift. We do not retain individual calculator
            inputs tied to your identity unless you explicitly provide contact
            information via the Contact page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            2. Information We Collect
          </h2>
          <p>
            <strong>Information you provide:</strong> When you use our
            calculators (e.g., salary calculator, cost of living comparison, job
            offer compare), you may enter data such as salary amounts,
            locations, and cities. This information is processed in your browser
            and on our servers to display results. We do not require you to
            create an account or submit personally identifiable information
            (such as name or email) to use the calculators.
          </p>
          <p>
            <strong>Automatically collected information:</strong> When you visit
            our Service, we and our service providers may automatically collect
            certain information, including your IP address, browser type, device
            type, referring URL, pages viewed, and the date and time of your
            visit. This information is used to operate the Service, analyze
            usage, and improve our content and tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            3. Cookies and Similar Technologies
          </h2>
          <p>
            We use cookies and similar technologies (e.g., local storage) to
            provide the Service, remember preferences, and analyze traffic. We
            also allow third-party services to use cookies and similar
            technologies on our Service:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Google AdSense:</strong> We use Google AdSense to display
              advertisements. Google may use cookies, web beacons, and other
              technologies to collect information about your visits to our
              Service and other sites, to serve relevant ads and measure ad
              performance. For more information, see{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:no-underline"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:no-underline"
              >
                How Google uses data when you use our partners&apos; sites or
                apps
              </a>
              .
            </li>
          </ul>
          <p>
            You can control or delete cookies through your browser settings.
            Disabling cookies may affect the functionality of the Service and
            the relevance of ads you see.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            4. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide, operate, and maintain the Service;</li>
            <li>
              Calculate and display salary, tax, and cost of living results;
            </li>
            <li>Understand how the Service is used and improve it;</li>
            <li>Comply with applicable law and protect our rights; and</li>
            <li>As otherwise described in this Privacy Policy.</li>
          </ul>
          <p>
            We do not sell your personal information to third parties. We do not
            use the data you enter into our calculators (e.g., salary or
            location) to identify you or to build profiles for advertising
            beyond what is described in Section 3.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            5. Disclosure of Information
          </h2>
          <p>
            We may share information with service providers who assist us in
            operating the Service (e.g., hosting, analytics, advertising). These
            providers are contractually or legally required to protect your
            information and use it only for the purposes we specify. We may also
            disclose information if required by law, to protect our rights or
            safety, or in connection with a merger, sale, or other transfer of
            assets.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            6. Data Retention and Security
          </h2>
          <p>
            We retain information only as long as necessary to provide the
            Service and as required by law. We implement reasonable technical
            and organizational measures to protect your information against
            unauthorized access, alteration, or destruction. No method of
            transmission over the Internet or electronic storage is completely
            secure; we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            7. Your Rights and Choices
          </h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, or restrict the processing of your personal information, or
            to object to certain processing. You may also have the right to
            lodge a complaint with a supervisory authority. To exercise these
            rights or ask questions about your data, please contact us using the
            information on our{" "}
            <Link
              href="/contact"
              className="text-teal-700 underline hover:no-underline"
            >
              Contact
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            8. Children&apos;s Privacy
          </h2>
          <p>
            The Service is not directed to individuals under the age of 16. We
            do not knowingly collect personal information from children under
            16. If you believe we have collected such information, please
            contact us and we will take steps to delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            9. International Transfers
          </h2>
          <p>
            Your information may be processed in countries other than your
            country of residence. Those countries may have different data
            protection laws. By using the Service, you consent to the transfer
            of your information to such countries as necessary to provide the
            Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will post
            the updated policy on this page and update the &quot;Last
            updated&quot; date. Your continued use of the Service after changes
            constitutes acceptance of the revised policy. We encourage you to
            review this page periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            11. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or our privacy
            practices, please contact us via our{" "}
            <Link
              href="/contact"
              className="text-teal-700 underline hover:no-underline"
            >
              Contact
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </div>
  );
}
