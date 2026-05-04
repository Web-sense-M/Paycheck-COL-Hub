export interface Guide {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
  // Optional editorial metadata for trust/E-E-A-T
  author?: {
    name: string;
    url?: string;
  };
  reviewer?: string;
  updatedAt?: string;
}

export const guides: Guide[] = [
  {
    slug: "70000-after-tax-california-2026",
    title: "$70,000 After Tax in California 2026",
    description:
      "How much is $70,000 a year after tax in California? Net salary, monthly take-home, and effective tax rate.",
    publishedAt: "2026-03-12",
    author: { name: "Paycheck & COL Hub Editorial Team", url: "/about" },
    updatedAt: "2026-04-01",
    content: `
A $70,000 salary in California sounds solid until you open your first pay stub. Federal tax, state tax, and FICA all take a bite—and California’s state income tax is one of the steepest in the country. So what actually lands in your bank account, and what’s driving the difference?

**What you take home on $70,000 in California**

For a single filer with no additional deductions or credits, a gross salary of $70,000 in California typically results in roughly $52,000–$54,000 in net annual income. That’s about $4,300–$4,500 per month. Your exact number depends on your filing status (single, married filing jointly, etc.), how many allowances or credits you claim on your W-4, and whether you contribute to a 401(k), HSA, or other pre-tax benefits. Those reduce your taxable income and can push your take-home higher than the numbers above.

**How California state tax works at $70k**

California uses a progressive state income tax with multiple brackets. Rates go from about 1% on the first slice of taxable income up to 13.3% on income above roughly $1 million. At $70,000 gross, most of your income is taxed in the middle brackets—you’re not in the top tier, but you’re paying more state tax than someone earning the same in Texas or Florida, where there is no state income tax. The state also doesn’t allow a full deduction for federal tax paid, which can make the effective burden feel heavier when you add federal and state together.

**Federal tax and FICA**

On top of California tax, you have federal income tax (also progressive, with brackets from 10% to 37%) and FICA: Social Security (6.2% on wages up to the annual cap) and Medicare (1.45%). Together, these three layers define your pay stub. Our [Net Salary Calculator](/salary-calculator) applies current federal and California rates so you can see the breakdown for your exact salary—and compare [$70,000 after tax in California](/salary-after-tax/us/ca/70000) side by side with [Texas](/salary-after-tax/us/tx/70000) or [New York](/salary-after-tax/us/ny/70000).

**Why the state line matters when you compare offers**

A lot of people compare job offers in California vs Texas or Florida and only look at the gross number. That’s a mistake. The same $70,000 goes much further in Houston or Miami because there’s no state income tax—your net can be several thousand dollars higher per year. If you’re weighing a move or a remote role, run the numbers: try our [salary after tax pages](/salary-calculator) for different states and you’ll see how much location changes your take-home. It’s one of the biggest levers in your control.

**What this estimate doesn’t include**

These figures assume a straightforward single-filer case with no dependents, no itemized deductions, and no other income (e.g. side gigs, investments). Real paychecks are affected by 401(k) or IRA contributions, health insurance premiums (often pre-tax), student loan interest, and tax credits (e.g. EITC, child tax credit). For anything that affects your actual return, use the [IRS](https://www.irs.gov/) and [California FTB](https://www.ftb.ca.gov/) official tools or a tax professional. What you see here is for planning and comparison only—not tax or legal advice.
    `.trim(),
  },
  {
    slug: "60000-after-tax-new-york-2026",
    title: "$60,000 After Tax in New York 2026",
    description:
      "Net salary for $60,000 in New York. Take-home pay and tax breakdown for 2026.",
    publishedAt: "2026-03-12",
    author: { name: "Paycheck & COL Hub Editorial Team", url: "/about" },
    updatedAt: "2026-04-01",
    content: `
New York City draws people in with opportunity, but the cost of living and taxes can make a $60,000 salary feel tighter than it looks on paper. Here’s what that number actually turns into after the IRS and New York State take their share—and how it compares to other states.

**Take-home on $60,000 in New York**

For a single filer with no special deductions, $60,000 gross in New York typically leaves you with around $46,000–$48,000 net per year—call it $3,800–$4,000 per month. That’s after federal income tax, New York state income tax (progressive, and it applies whether you live in the city or elsewhere in the state), plus FICA: Social Security and Medicare. New York City does not have a separate city income tax for residents in the same way some other cities do; the state rate already makes New York one of the heavier tax states in the US.

**How New York state tax works**

New York has its own progressive income tax with brackets that top out at 10.9% on high earners. At $60k you’re in the middle bands. The state also has a complex set of rules for New York City residents vs non-residents (e.g. if you work in the city but live in Jersey). For a typical resident, the numbers we quote assume you’re subject to full state (and where applicable city) tax. If you’re a non-resident or have a hybrid situation, your withholding and final liability can differ—always check [NY State tax](https://www.tax.ny.gov/) and the [IRS](https://www.irs.gov/) for your case.

**How $60k in New York stacks up against other states**

If you’re job hunting or thinking about relocating, the same $60k goes further in states with no income tax. [$60,000 after tax in Florida](/salary-after-tax/us/fl/60000) or [$60,000 in Texas](/salary-after-tax/us/tx/60000) will show a higher net; [California](/salary-after-tax/us/ca/60000) is in the same high-tax league as New York. Use our [Salary Calculator](/salary-calculator) to compare any state—especially useful when you’re weighing a remote role or a move and want to see the real difference in take-home pay.

**What affects your real paycheck**

These figures assume a standard single-filer case. Real paychecks depend on your W-4 (allowances and extra withholding), pre-tax benefits (health insurance, 401(k), FSA/HSA), and any other income. Treat this as a planning estimate. For official numbers or filing questions, use your state and federal tax resources or a qualified tax advisor.
    `.trim(),
  },
  {
    slug: "cost-of-living-new-york-vs-london",
    title: "Cost of Living: New York vs London 2026",
    description:
      "Compare cost of living between New York and London. Equivalent salary and what to expect when relocating.",
    publishedAt: "2026-03-12",
    content: `
New York and London both rank among the most expensive cities in the world. If you’re weighing a job offer in one city while living in the other—or planning a move—you need to compare more than the number on the contract. Rent, transport, food, and nights out don’t scale the same way in Manhattan and Zone 1. This guide walks through what to expect and how to put a number on “equivalent” salary.

**Is New York or London more expensive?**

There’s no single answer—it depends on the category and how you live. Rent in central London can be brutal; so can Manhattan and prime Brooklyn. Groceries, utilities, and eating out swing depending on neighborhood and habits. Overall cost-of-living indices often put the two close, with London sometimes edging higher when you normalize for a similar lifestyle (e.g. a one-bed in a central area, similar diet, occasional meals out). The gap narrows or flips when you factor in healthcare: in the US it’s often employer-covered or a big line item; in the UK you have the NHS plus optional private. The only way to get a number that’s useful for you is to run your own salary through a comparison.

**What “equivalent salary” means**

Say you earn $80,000 in New York. To keep a similar standard of living in London, you’d need a salary in GBP that, after tax and local prices, gives you comparable purchasing power. Exchange rates and tax systems differ—UK income tax and National Insurance aren’t the same as US federal and state tax—so “same number in pounds” doesn’t work. You have to account for both take-home pay and how far that money goes in each city. Our [New York vs London cost of living](/cost-of-living-compare/new-york/london) page lays out the relative cost and an equivalent salary so you can see, in one city’s terms, what the other offer is really worth.

**How to use the numbers when negotiating or deciding**

Use our [Cost of Living Calculator](/cost-of-living) to plug in your exact current salary (in either city) and see the equivalent in the other. That gives you a benchmark: “To maintain my current lifestyle in London, I’d need roughly £X.” When you have two concrete offers—e.g. one in New York and one in London—use [Job Offer Compare](/offer-compare): enter both (city + gross salary), and the tool shows net pay for each and then converts one into the other city’s equivalent so you can say which offer gives you more purchasing power.

**When it’s not just about money**

Rent and groceries are one thing; visa rules, career networks, and quality of life are another. Use the numbers as a baseline. Then layer in what matters to you—commute, culture, schools, healthcare, family. For the money side, start with [New York vs London](/cost-of-living-compare/new-york/london), then try [Job Offer Compare](/offer-compare) if you have two offers to weigh. All figures are estimates; your own spending and priorities will vary.
    `.trim(),
  },
  {
    slug: "net-salary-calculator-us-uk-germany",
    title: "Net Salary Calculator: US, UK & Germany 2026",
    description:
      "How to use our free net salary calculator for United States, UK, and Germany. Take-home pay after tax.",
    publishedAt: "2026-03-12",
    content: `
Job ads show gross salary. Your bank account gets net. In between: federal tax, state or national tax, and social contributions—and the rules change by country and sometimes by region. Our [Net Salary Calculator](/salary-calculator) is built to bridge that gap for the US, UK, and Germany so you can see your take-home pay in minutes. This guide explains what it does, where it works, and what to keep in mind.

**What the calculator does**

You enter your **gross annual salary** and pick your **country and region** (e.g. a US state, UK nation, or Germany). The tool applies the relevant income tax brackets and social contributions—Social Security and Medicare in the US, National Insurance in the UK, and the main social contributions in Germany (pension, health, unemployment, etc.)—and returns **net annual**, **net monthly**, and an **effective tax rate**. No sign-up, no email. Useful when you’re comparing offers, planning a move, or just curious what a raise actually means in hand.

**United States: federal plus state**

We cover federal income tax plus a long list of states, including [California](/salary-after-tax/us/ca/75000), [New York](/salary-after-tax/us/ny/75000), Texas, Florida, Illinois, Washington, and more. State rules vary a lot: no-income-tax states (Texas, Florida, Washington) will show a higher net for the same gross. State tax is often progressive too, so the gap between high-tax and no-tax states grows as salary increases. Use the calculator to switch states and see the difference—for example [$70,000 after tax in California](/salary-after-tax/us/ca/70000) vs [$70,000 in Texas](/salary-after-tax/us/tx/70000).

**United Kingdom: income tax and National Insurance**

We include income tax and National Insurance for England, Wales, Northern Ireland, and Scotland. Scotland has its own bands and rates, so we treat it separately—check [salary after tax in Scotland](/salary-after-tax/uk/uk-scotland/50000) if that’s where you’re based. The personal allowance, basic rate, higher rate, and additional rate all feed into your net; NI has its own thresholds. The calculator gives you a single-filer estimate so you can compare [£50,000 after tax in the UK](/guides/50000-after-tax-uk-2026) or try different salaries.

**Germany: federal rules for the whole country**

Germany has one set of income tax and social contribution rules for the whole country (with minor regional church tax differences). We apply the standard formula: income tax plus the main social contributions (e.g. pension, health, unemployment, care). Try [€50,000 after tax in Germany](/salary-after-tax/de/de-all/50000) to see typical take-home there. Useful if you’re comparing a German offer with a US or UK one—run the same “purchasing power” salary in each country to see net in hand.

**What the calculator doesn’t do**

It assumes a single filer with no extra deductions or credits (e.g. no 401(k), no child tax credit, no student loan). It’s an **estimate**—handy for planning and comparison, not for filing or legal advice. Tax law changes every year; when in doubt, use your tax authority’s official calculator or a professional. For deeper dives, see our guides on [$70,000 after tax in California](/guides/70000-after-tax-california-2026), [$60,000 after tax in New York](/guides/60000-after-tax-new-york-2026), and [£50,000 after tax in the UK](/guides/50000-after-tax-uk-2026).
    `.trim(),
  },
  // (the file continues with the rest of the guides unchanged)
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
