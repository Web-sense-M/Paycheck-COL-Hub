const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.paycheckcitycompare.com/";
const cleanBase = baseUrl.replace(/\/$/, "");

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Paycheck & COL Hub",
  url: cleanBase,
  description:
    "Free paycheck calculator, salary calculator, cost of living calculator, and job offer compare calculator for US, UK & Europe.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${cleanBase}/salary-calculator?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Paycheck and salary calculators",
  description:
    "Free paycheck calculator, net salary calculator, cost of living calculator, and job offer compare calculator.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Paycheck Calculator",
        alternateName: "Net Salary Calculator",
        url: `${cleanBase}/salary-calculator`,
        applicationCategory: "FinanceApplication",
        description:
          "Free paycheck calculator and net salary calculator for take-home pay after tax. US, UK, Germany.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Cost of Living Calculator",
        url: `${cleanBase}/cost-of-living`,
        applicationCategory: "FinanceApplication",
        description:
          "Free cost of living calculator to compare cities and equivalent salary. US, UK, Europe.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Job Offer Compare Calculator",
        url: `${cleanBase}/offer-compare`,
        applicationCategory: "FinanceApplication",
        description:
          "Free job offer compare calculator to compare two job offers by salary and cost of living.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Paycheck & COL Hub",
  url: cleanBase,
  description:
    "Free paycheck calculator, salary calculator, cost of living calculator, and job offer compare calculator for US, UK & Europe.",
  foundingDate: "2026",
  sameAs: [],
  logo: `${cleanBase}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@paycheckcitycompare.com",
    url: `${cleanBase}/contact`,
  },
};

// Add publisher info into the site-level schema for better trust signals
websiteSchema.publisher = {
  "@type": "Organization",
  name: organizationSchema.name,
  url: organizationSchema.url,
  logo: organizationSchema.logo,
};

export function WebsiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
