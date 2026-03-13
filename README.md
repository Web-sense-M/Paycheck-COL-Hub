# Paycheck & Cost of Living Hub

A Next.js site with **net salary calculator**, **cost of living comparison**, and **job offer compare** for US, UK & Europe. Built for SEO and Google AdSense.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Features

- **Salary Calculator** (`/salary-calculator`) – Take-home pay after tax for US (federal + state), UK, Germany
- **Cost of Living** (`/cost-of-living`) – Compare two cities and equivalent salary
- **Offer Compare** (`/offer-compare`) – Compare two job offers with tax and COL adjustment
- **SEO** – Metadata, sitemap, robots.txt, JSON-LD (WebSite schema)
- **Ad slots** – Placeholder components ready for Google AdSense (see `src/components/AdSlot.tsx`)

## AdSense

Replace the placeholder in `AdSlot.tsx` with your AdSense unit. Use responsive units and place slots where indicated (top, mid-content, bottom) for policy compliance.

## Env

Optional: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` for canonical URLs and sitemap.
