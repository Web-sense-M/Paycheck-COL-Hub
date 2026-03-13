/**
 * Simplified tax logic for US federal, UK, and Germany.
 * For display/estimation only — not for actual tax filing.
 */

export interface TaxBracket {
  min: number;
  max: number;
  rate: number; // 0-100
}

// US Federal 2024 single filer (simplified)
const US_FEDERAL_BRACKETS: TaxBracket[] = [
  { min: 0, max: 11600, rate: 10 },
  { min: 11600, max: 47150, rate: 12 },
  { min: 47150, max: 100525, rate: 22 },
  { min: 100525, max: 191950, rate: 24 },
  { min: 191950, max: 243725, rate: 32 },
  { min: 243725, max: 609350, rate: 35 },
  { min: 609350, max: Infinity, rate: 37 },
];

// UK 2024/25 (simplified: basic + higher + additional; no personal allowance taper here)
const UK_BRACKETS: TaxBracket[] = [
  { min: 0, max: 12570, rate: 0 },
  { min: 12570, max: 50270, rate: 20 },
  { min: 50270, max: 125140, rate: 40 },
  { min: 125140, max: Infinity, rate: 45 },
];

// Germany 2024 (simplified formula: Zone 1–5; we use bracket approximation)
const DE_BRACKETS: TaxBracket[] = [
  { min: 0, max: 11604, rate: 0 },
  { min: 11604, max: 17005, rate: 14 },
  { min: 17005, max: 66760, rate: 42 },
  { min: 66760, max: 277825, rate: 45 },
  { min: 277825, max: Infinity, rate: 45 },
];

function taxFromBrackets(grossAnnual: number, brackets: TaxBracket[]): number {
  let tax = 0;
  for (const b of brackets) {
    if (grossAnnual <= b.min) break;
    const taxableInBracket = Math.min(grossAnnual, b.max) - b.min;
    if (taxableInBracket > 0) tax += (taxableInBracket * b.rate) / 100;
  }
  return Math.round(tax * 100) / 100;
}

export type CountryId = "us" | "uk" | "de";

export function getFederalIncomeTax(countryId: CountryId, grossAnnual: number): number {
  switch (countryId) {
    case "us":
      return taxFromBrackets(grossAnnual, US_FEDERAL_BRACKETS);
    case "uk":
      return taxFromBrackets(grossAnnual, UK_BRACKETS);
    case "de":
      return taxFromBrackets(grossAnnual, DE_BRACKETS);
    default:
      return 0;
  }
}

/** US state flat rate on taxable income (simplified). */
export function getUSStateTax(regionId: string, grossAnnual: number): number {
  const stateRates: Record<string, number> = {
    ca: 9.3,
    ny: 6.5,
    il: 4.95,
    pa: 3.07,
    oh: 3.75,
    ga: 5.75,
    nc: 4.5,
    mi: 4.25,
    nj: 6.37,
    va: 5.75,
    ma: 5,
    az: 4.5,
    co: 4.4,
  };
  const rate = stateRates[regionId] ?? 0;
  if (rate === 0) return 0;
  // Very simplified: apply to gross minus rough federal standard deduction
  const deductible = 14600; // 2024 single
  const taxable = Math.max(0, grossAnnual - deductible);
  return Math.round((taxable * rate) / 100 * 100) / 100;
}

/** Social / NI / Medicare etc. */
export function getSocialTax(
  countryId: CountryId,
  grossAnnual: number,
  regionId?: string
): number {
  switch (countryId) {
    case "us": {
      const ssCap = 168600;
      const ssRate = 6.2;
      const medicareRate = 1.45;
      const ss = Math.min(grossAnnual, ssCap) * (ssRate / 100);
      const medicare = grossAnnual * (medicareRate / 100);
      return Math.round((ss + medicare) * 100) / 100;
    }
    case "uk": {
      const niThreshold = 12570;
      const niUpper = 50270;
      const lowerRate = 8; // % between threshold and upper
      const upperRate = 2; // % above upper
      let ni = 0;
      if (grossAnnual > niThreshold) {
        const inBand = Math.min(grossAnnual, niUpper) - niThreshold;
        ni += (inBand * lowerRate) / 100;
        if (grossAnnual > niUpper) {
          ni += ((grossAnnual - niUpper) * upperRate) / 100;
        }
      }
      return Math.round(ni * 100) / 100;
    }
    case "de": {
      // Simplified: pension + unemployment + health + care ~20.225% total
      const rate = 20.225;
      return Math.round((grossAnnual * rate) / 100 * 100) / 100;
    }
    default:
      return 0;
  }
}

export interface NetResult {
  grossAnnual: number;
  federalIncomeTax: number;
  stateOrRegionalTax: number;
  socialTax: number;
  totalTax: number;
  netAnnual: number;
  netMonthly: number;
  effectiveRate: number;
}

export function calculateNet(
  countryId: CountryId,
  grossAnnual: number,
  regionId: string
): NetResult {
  const federal = getFederalIncomeTax(countryId, grossAnnual);
  let state = 0;
  if (countryId === "us") state = getUSStateTax(regionId, grossAnnual);
  const social = getSocialTax(countryId, grossAnnual, regionId);
  const totalTax = federal + state + social;
  const netAnnual = grossAnnual - totalTax;
  const netMonthly = netAnnual / 12;
  const effectiveRate = grossAnnual > 0 ? (totalTax / grossAnnual) * 100 : 0;
  return {
    grossAnnual,
    federalIncomeTax: federal,
    stateOrRegionalTax: state,
    socialTax: social,
    totalTax,
    netAnnual,
    netMonthly,
    effectiveRate,
  };
}
