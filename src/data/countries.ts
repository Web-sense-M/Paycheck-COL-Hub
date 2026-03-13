export type CountryId = "us" | "uk" | "de";

export interface Country {
  id: CountryId;
  name: string;
  currency: string;
  regions: Region[];
}

export interface Region {
  id: string;
  name: string;
  /** Optional state/province tax or adjustment (e.g. US state, UK has no regional income tax) */
  incomeTaxRate?: number;
  /** Social security / NI / similar as % of gross (simplified) */
  socialRate?: number;
}

export const countries: Country[] = [
  {
    id: "us",
    name: "United States",
    currency: "USD",
    regions: [
      { id: "us-federal", name: "Federal (all states)", incomeTaxRate: 0, socialRate: 7.65 },
      { id: "ca", name: "California", incomeTaxRate: 9.3, socialRate: 0 },
      { id: "ny", name: "New York", incomeTaxRate: 6.5, socialRate: 0 },
      { id: "tx", name: "Texas", incomeTaxRate: 0, socialRate: 0 },
      { id: "fl", name: "Florida", incomeTaxRate: 0, socialRate: 0 },
      { id: "wa", name: "Washington", incomeTaxRate: 0, socialRate: 0 },
      { id: "il", name: "Illinois", incomeTaxRate: 4.95, socialRate: 0 },
      { id: "pa", name: "Pennsylvania", incomeTaxRate: 3.07, socialRate: 0 },
      { id: "oh", name: "Ohio", incomeTaxRate: 3.75, socialRate: 0 },
      { id: "ga", name: "Georgia", incomeTaxRate: 5.75, socialRate: 0 },
      { id: "nc", name: "North Carolina", incomeTaxRate: 4.5, socialRate: 0 },
      { id: "mi", name: "Michigan", incomeTaxRate: 4.25, socialRate: 0 },
      { id: "nj", name: "New Jersey", incomeTaxRate: 6.37, socialRate: 0 },
      { id: "va", name: "Virginia", incomeTaxRate: 5.75, socialRate: 0 },
      { id: "ma", name: "Massachusetts", incomeTaxRate: 5, socialRate: 0 },
      { id: "az", name: "Arizona", incomeTaxRate: 4.5, socialRate: 0 },
      { id: "co", name: "Colorado", incomeTaxRate: 4.4, socialRate: 0 },
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    currency: "GBP",
    regions: [
      { id: "uk-england", name: "England, Wales & NI", incomeTaxRate: 0, socialRate: 12 },
      { id: "uk-scotland", name: "Scotland", incomeTaxRate: 0, socialRate: 12 },
    ],
  },
  {
    id: "de",
    name: "Germany",
    currency: "EUR",
    regions: [
      { id: "de-all", name: "Germany (all)", incomeTaxRate: 0, socialRate: 20.225 },
    ],
  },
];

export function getCountry(id: CountryId): Country | undefined {
  return countries.find((c) => c.id === id);
}

export function getRegion(countryId: CountryId, regionId: string): Region | undefined {
  const country = getCountry(countryId);
  return country?.regions.find((r) => r.id === regionId);
}
