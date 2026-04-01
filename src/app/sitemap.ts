import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";
import {
  getSalaryAfterTaxUrls,
  getCostOfLivingCompareUrls,
  getGuideUrls,
} from "@/data/sitemap-urls";

const cleanBase = baseUrl.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: cleanBase, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${cleanBase}/salary-calculator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${cleanBase}/cost-of-living`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${cleanBase}/offer-compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${cleanBase}/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${cleanBase}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${cleanBase}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${cleanBase}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${cleanBase}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${cleanBase}/disclaimer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  const salaryUrls = getSalaryAfterTaxUrls().map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const colUrls = getCostOfLivingCompareUrls().map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guideUrls = getGuideUrls().map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...salaryUrls, ...colUrls, ...guideUrls];
}
