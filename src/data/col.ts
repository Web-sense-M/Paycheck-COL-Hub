/**
 * Cost of living indices (relative, base 100 = US national average).
 * Used for city comparison. Data is illustrative for demo.
 */

export interface City {
  id: string;
  name: string;
  country: string;
  countryId: "us" | "uk" | "de";
  /** COL index: 100 = baseline (e.g. US average) */
  colIndex: number;
  /** Rent index relative to same baseline */
  rentIndex: number;
}

export const cities: City[] = [
  { id: "new-york", name: "New York", country: "United States", countryId: "us", colIndex: 100, rentIndex: 100 },
  { id: "san-francisco", name: "San Francisco", country: "United States", countryId: "us", colIndex: 95, rentIndex: 120 },
  { id: "los-angeles", name: "Los Angeles", country: "United States", countryId: "us", colIndex: 88, rentIndex: 95 },
  { id: "chicago", name: "Chicago", country: "United States", countryId: "us", colIndex: 78, rentIndex: 72 },
  { id: "houston", name: "Houston", country: "United States", countryId: "us", colIndex: 72, rentIndex: 58 },
  { id: "phoenix", name: "Phoenix", country: "United States", countryId: "us", colIndex: 75, rentIndex: 65 },
  { id: "philadelphia", name: "Philadelphia", country: "United States", countryId: "us", colIndex: 76, rentIndex: 62 },
  { id: "san-antonio", name: "San Antonio", country: "United States", countryId: "us", colIndex: 68, rentIndex: 52 },
  { id: "san-diego", name: "San Diego", country: "United States", countryId: "us", colIndex: 90, rentIndex: 98 },
  { id: "dallas", name: "Dallas", country: "United States", countryId: "us", colIndex: 74, rentIndex: 68 },
  { id: "london", name: "London", country: "United Kingdom", countryId: "uk", colIndex: 92, rentIndex: 105 },
  { id: "manchester", name: "Manchester", country: "United Kingdom", countryId: "uk", colIndex: 72, rentIndex: 58 },
  { id: "birmingham", name: "Birmingham", country: "United Kingdom", countryId: "uk", colIndex: 68, rentIndex: 52 },
  { id: "edinburgh", name: "Edinburgh", country: "United Kingdom", countryId: "uk", colIndex: 75, rentIndex: 65 },
  { id: "berlin", name: "Berlin", country: "Germany", countryId: "de", colIndex: 72, rentIndex: 68 },
  { id: "munich", name: "Munich", country: "Germany", countryId: "de", colIndex: 85, rentIndex: 88 },
  { id: "frankfurt", name: "Frankfurt", country: "Germany", countryId: "de", colIndex: 82, rentIndex: 80 },
  { id: "hamburg", name: "Hamburg", country: "Germany", countryId: "de", colIndex: 78, rentIndex: 75 },
  { id: "cologne", name: "Cologne", country: "Germany", countryId: "de", colIndex: 75, rentIndex: 70 },
];

const baseIndex = 100;

export function getCity(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}

/**
 * Compare two cities: how much more/less you need to maintain same lifestyle.
 * Returns multiplier for city B relative to city A (e.g. 1.2 = 20% more expensive).
 */
export function compareCol(cityAId: string, cityBId: string): number {
  const a = getCity(cityAId);
  const b = getCity(cityBId);
  if (!a || !b) return 1;
  return b.colIndex / a.colIndex;
}

/**
 * Equivalent salary in city B to have same purchasing power as salary in city A.
 */
export function equivalentSalary(
  salaryInA: number,
  cityAId: string,
  cityBId: string
): number {
  const ratio = compareCol(cityAId, cityBId);
  return Math.round(salaryInA * ratio);
}
