import { countries } from "@/data/countries";
import { getAllGuideSlugs } from "@/data/guides";
import { baseUrl } from "@/lib/site";

const SALARY_AMOUNTS = [30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 120000, 150000];

/** High-value salary landing pages for sitemap. */
export function getSalaryAfterTaxUrls(): string[] {
  const urls: string[] = [];
  for (const c of countries) {
    for (const r of c.regions) {
      for (const amount of SALARY_AMOUNTS) {
        urls.push(`${baseUrl.replace(/\/$/, "")}/salary-after-tax/${c.id}/${r.id}/${amount}`);
      }
    }
  }
  return urls;
}

/** Top city pairs for cost-of-living comparison (subset for sitemap). */
const COL_PAIRS: [string, string][] = [
  ["new-york", "london"],
  ["new-york", "san-francisco"],
  ["new-york", "los-angeles"],
  ["london", "berlin"],
  ["london", "manchester"],
  ["san-francisco", "los-angeles"],
  ["chicago", "houston"],
  ["berlin", "munich"],
  ["los-angeles", "san-diego"],
  ["new-york", "chicago"],
  ["london", "edinburgh"],
  ["san-francisco", "chicago"],
  ["dallas", "phoenix"],
  ["munich", "frankfurt"],
  ["birmingham", "manchester"],
];

export function getCostOfLivingCompareUrls(): string[] {
  return COL_PAIRS.map(
    ([a, b]) => `${baseUrl.replace(/\/$/, "")}/cost-of-living-compare/${a}/${b}`
  );
}

export function getGuideUrls(): string[] {
  return getAllGuideSlugs().map(
    (slug) => `${baseUrl.replace(/\/$/, "")}/guides/${slug}`
  );
}
