import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebsiteJsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.paycheckcitycompare.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paycheck Calculator | Salary Calculator & Cost of Living Calculator",
    template: "%s | Paycheck & COL Hub",
  },
  description:
    "Free paycheck calculator and net salary calculator for take-home pay. Cost of living calculator to compare cities. Job offer compare calculator for US, UK & Europe.",
  keywords: [
    "paycheck calculator",
    "salary calculator",
    "net salary calculator",
    "take home pay calculator",
    "cost of living calculator",
    "job offer compare",
    "job offer compare calculator",
    "salary after tax",
    "cost of living comparison",
    "tax calculator",
    "US salary",
    "UK salary",
    "Germany salary",
  ],
  authors: [{ name: "Paycheck & COL Hub" }],
  creator: "Paycheck & COL Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Paycheck & COL Hub",
    title: "Paycheck Calculator | Salary Calculator & Cost of Living Calculator",
    description:
      "Free paycheck calculator, net salary calculator, cost of living calculator, and job offer compare calculator for US, UK & Europe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paycheck Calculator | Salary & Cost of Living Calculator",
    description: "Free paycheck calculator, salary calculator, cost of living calculator, job offer compare.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8089420504634185" />
        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8089420504634185"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WebsiteJsonLd />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
