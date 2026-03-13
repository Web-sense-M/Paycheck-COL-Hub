const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paycheckcolhub.com";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Paycheck & COL Hub",
  url: baseUrl,
  description:
    "Free net salary calculator, cost of living comparison, and job offer comparison for US, UK & Europe.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${baseUrl}/salary-calculator?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
