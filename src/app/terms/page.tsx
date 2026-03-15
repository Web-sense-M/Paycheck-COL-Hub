import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Paycheck & COL Hub. Rules and disclaimers for using our salary and cost of living calculators.",
};

const LAST_UPDATED = "March 12, 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-2 text-slate-600">Last updated: {LAST_UPDATED}</p>

      <div className="prose prose-slate mt-10 max-w-none space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of the website Paycheck &
            COL Hub and any related tools, content, and services (collectively, the
            &quot;Service&quot;) operated by Paycheck & COL Hub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
            accessing or using the Service, you agree to be bound by these Terms. If you do not
            agree to these Terms, you may not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Description of the Service</h2>
          <p>
            The Service provides free online tools and content, including but not limited to: a net
            salary (take-home pay) calculator, cost of living comparison tools, job offer
            comparison tools, and related guides and articles (the &quot;Tools&quot; and &quot;Content&quot;).
            The Tools use tax brackets, social security rates, and cost-of-living indices to produce
            estimates. All results are for informational and educational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Not Professional Advice</h2>
          <p>
            <strong>The Service does not provide tax, legal, financial, or career advice.</strong> The
            calculations, comparisons, and Content are estimates based on simplified assumptions and
            publicly available data. They may not reflect your actual tax liability, cost of living,
            or financial situation. Tax laws, rates, and cost-of-living data change over time and
            vary by jurisdiction and personal circumstances.
          </p>
          <p>
            You should not rely on the Service as the sole basis for any financial, tax, or
            relocation decision. Always verify figures with official sources (e.g., tax authorities,
            government statistics) and, where appropriate, consult a qualified tax advisor, lawyer,
            or financial professional before making decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Disclaimers</h2>
          <p>
            <strong>Accuracy:</strong> We strive to keep tax rates, brackets, and cost-of-living data
            up to date, but we do not guarantee the accuracy, completeness, or timeliness of any
            data or results. The Service may contain errors or omissions. We are not responsible
            for any loss, damage, or inconvenience arising from your use of or reliance on the
            Service.
          </p>
          <p>
            <strong>&quot;As is&quot;:</strong> The Service is provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, either express or implied, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Paycheck & COL Hub and its operators,
            affiliates, and service providers shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits, data, or goodwill,
            arising out of or in connection with your use of the Service or your inability to use
            it. Our total liability for any claims arising from or related to the Service shall not
            exceed the amount you paid to us, if any, in the twelve (12) months preceding the
            claim, or one hundred United States dollars (USD 100), whichever is greater. Some
            jurisdictions do not allow the exclusion or limitation of certain damages; in such
            jurisdictions, our liability will be limited to the maximum extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Acceptable Use</h2>
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Service in any way that violates applicable laws or regulations;</li>
            <li>Scrape, crawl, or use automated means to access or collect data from the Service without our prior written permission;</li>
            <li>Attempt to interfere with, disrupt, or compromise the security or availability of the Service;</li>
            <li>Use the Service to transmit malware, spam, or any harmful or unlawful content;</li>
            <li>Impersonate any person or entity or misrepresent your affiliation;</li>
            <li>Remove or alter any copyright, trademark, or other proprietary notices on the Service.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your access to the Service if we believe
            you have violated these Terms or for any other reason at our discretion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Intellectual Property</h2>
          <p>
            The Service, including its design, text, graphics, software, and Content (other than
            user-generated content, if any), is owned by or licensed to Paycheck & COL Hub and is
            protected by copyright, trademark, and other intellectual property laws. You may view
            and use the Service for your personal, non-commercial use. You may not copy, modify,
            distribute, sell, or create derivative works from the Service or any part of it without
            our prior written consent. You may link to our homepage or public pages for
            non-commercial purposes in a way that does not suggest endorsement or misrepresent our
            relationship with you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Third-Party Content and Services</h2>
          <p>
            The Service may contain links to third-party websites or services (e.g., tax
            authorities, Google AdSense) or display third-party content or advertisements. We do not
            control and are not responsible for the content, privacy practices, or terms of those
            third parties. Your use of third-party sites or services is at your own risk and
            subject to their respective terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">9. Changes to the Service and Terms</h2>
          <p>
            We may modify, suspend, or discontinue the Service (or any part of it) at any time
            without notice. We may also update these Terms from time to time. We will post the
            updated Terms on this page and update the &quot;Last updated&quot; date. Your continued use of
            the Service after changes constitutes acceptance of the revised Terms. If you do not
            agree to the new Terms, you must stop using the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">10. General</h2>
          <p>
            <strong>Entire agreement:</strong> These Terms, together with our{" "}
            <Link href="/privacy" className="text-teal-700 underline hover:no-underline">Privacy Policy</Link>,
            constitute the entire agreement between you and us regarding the Service.
          </p>
          <p>
            <strong>Severability:</strong> If any provision of these Terms is held to be invalid or
            unenforceable, the remaining provisions will remain in effect.
          </p>
          <p>
            <strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms
            will not be deemed a waiver of such right or provision.
          </p>
          <p>
            <strong>Governing law:</strong> These Terms shall be governed by and construed in
            accordance with the laws of the jurisdiction in which we operate, without regard to
            conflict of law principles. Any dispute arising from these Terms or the Service shall be
            resolved in the courts of that jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">11. Contact</h2>
          <p>
            For questions about these Terms of Use, please contact us via our{" "}
            <Link href="/contact" className="text-teal-700 underline hover:no-underline">Contact</Link> page.
          </p>
        </section>
      </div>
    </div>
  );
}
