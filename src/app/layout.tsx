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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paycheckcolhub.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paycheck & Cost of Living Hub | Net Salary & COL Calculator",
    template: "%s | Paycheck & COL Hub",
  },
  description:
    "Free net salary calculator, cost of living comparison, and job offer comparison for US, UK & Europe. Know your take-home pay and compare cities.",
  keywords: [
    "salary calculator",
    "net salary",
    "take home pay",
    "cost of living",
    "cost of living comparison",
    "tax calculator",
    "salary after tax",
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
    title: "Paycheck & Cost of Living Hub | Net Salary & COL Calculator",
    description:
      "Free net salary calculator, cost of living comparison, and job offer comparison for US, UK & Europe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paycheck & Cost of Living Hub",
    description: "Free salary & cost of living tools for US, UK & Europe.",
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
        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8089420504634185"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WebsiteJsonLd />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
