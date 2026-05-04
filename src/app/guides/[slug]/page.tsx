import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getAllGuideSlugs, guides } from "@/data/guides";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { GuideContent } from "@/components/GuideContent";
import AdSlot from "@/components/AdSlot";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.paycheckcitycompare.com/";
const cleanBase = baseUrl.replace(/\/$/, "");

type Props = Readonly<{ params: Promise<{ slug: string }> }>;

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide | Paycheck & COL Hub" };
  return {
    title: guide.title,
    description: guide.description,
    openGraph: { title: guide.title, description: guide.description },
  };
}

/** Pick up to 3 related guides (excluding current). */
function getRelatedGuides(currentSlug: string) {
  const current = getGuideBySlug(currentSlug);
  if (!current) return [];

  // Simple relevance: prefer guides that share keywords in the title
  const words = current.title.toLowerCase().split(/\s+/);
  const scored = guides
    .filter((g) => g.slug !== currentSlug)
    .map((g) => {
      const titleLower = g.title.toLowerCase();
      const score = words.filter(
        (w) => w.length > 3 && titleLower.includes(w),
      ).length;
      return { guide: g, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map((s) => s.guide);
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt || guide.publishedAt,
    url: `${cleanBase}/guides/${slug}`,
    author: guide.author
      ? {
          "@type": "Person",
          name: guide.author.name,
          url: guide.author.url || cleanBase,
        }
      : {
          "@type": "Organization",
          name: "Paycheck & COL Hub",
          url: cleanBase,
        },
    publisher: {
      "@type": "Organization",
      name: "Paycheck & COL Hub",
      url: cleanBase,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${cleanBase}/guides/${slug}`,
    },
  };

  const publishedDate = new Date(guide.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: `/guides/${slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-teal-700">
            Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{guide.title}</span>
        </nav>

        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-2 text-slate-600">{guide.description}</p>

          {/* Author & Date badge */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>
                By{" "}
                <Link
                  href="/about"
                  className="font-medium text-teal-700 hover:underline"
                >
                  Paycheck &amp; COL Hub Editorial Team
                </Link>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time dateTime={guide.publishedAt}>
                Published {publishedDate}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {Math.max(
                  5,
                  Math.round(guide.content.split(/\s+/).length / 200),
                )}{" "}
                min read
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mt-8">
          <GuideContent
            content={guide.content}
            authorName={guide.author?.name}
            publishedAt={guide.publishedAt}
            updatedAt={guide.updatedAt}
          />
        </div>

        {/* Mid-article ad */}
        <div className="my-8">
          <AdSlot id={`guide-${slug}`} className="w-full" />
        </div>

        {/* Author bio box */}
        <aside className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                About the{" "}
                <Link href="/about" className="text-teal-700 hover:underline">
                  Paycheck &amp; COL Hub Editorial Team
                </Link>
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Our team of finance enthusiasts and software engineers has lived
                and worked across the US, UK, and Europe. We combine firsthand
                relocation experience with data from official tax authorities (
                <a
                  href="https://www.irs.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:underline"
                >
                  IRS
                </a>
                ,{" "}
                <a
                  href="https://www.gov.uk/income-tax-rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:underline"
                >
                  HMRC
                </a>
                ,{" "}
                <a
                  href="https://www.bundesfinanzministerium.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:underline"
                >
                  BMF
                </a>
                ) to produce accurate, transparent guides. All content is
                reviewed for accuracy and updated at least annually.
              </p>
            </div>
          </div>
        </aside>

        {/* Editorial disclaimer */}
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-xs text-amber-800">
            <strong>Disclaimer:</strong> This guide is for informational and
            planning purposes only. It is not tax, financial, or legal advice.
            Tax laws change; always verify with official sources or a qualified
            professional. Read our full{" "}
            <Link
              href="/disclaimer"
              className="font-medium text-amber-900 underline hover:no-underline"
            >
              Disclaimer
            </Link>
            .
          </p>
        </div>

        {/* Related guides */}
        {related.length > 0 && (
          <section className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Related Guides
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/guides/${r.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-teal-200 hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-700">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {r.description}
                  </p>
                  <span className="mt-2 inline-block text-xs font-medium text-teal-600">
                    Read guide →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <footer className="mt-10 border-t border-slate-200 pt-6">
          <Link
            href="/guides"
            className="text-sm font-medium text-teal-700 hover:underline"
          >
            ← All guides
          </Link>
        </footer>
      </article>
    </>
  );
}
