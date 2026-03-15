import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { GuideContent } from "@/components/GuideContent";

type Props = { params: Promise<{ slug: string }> };

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

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: `/guides/${slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-teal-700">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{guide.title}</span>
        </nav>
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-2 text-slate-600">{guide.description}</p>
          <time dateTime={guide.publishedAt} className="mt-2 block text-sm text-slate-500">
            {new Date(guide.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <div className="mt-8">
          <GuideContent content={guide.content} />
        </div>
        <footer className="mt-10 border-t border-slate-200 pt-6">
          <Link href="/guides" className="text-sm font-medium text-teal-700 hover:underline">
            ← All guides
          </Link>
        </footer>
      </article>
    </>
  );
}
