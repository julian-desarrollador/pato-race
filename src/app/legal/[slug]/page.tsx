import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";
import { isLegalSlug, legalTitle, LEGAL_SLUGS } from "@/lib/site-pages";

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { t } = await getServerPrefs();
  const { slug } = await params;
  if (!isLegalSlug(slug)) return { title: t.meta.legalTitle };
  return {
    title: `${legalTitle(t, slug)} | Pato Race 2026`,
    description: t.legal.draft,
  };
}

export default async function LegalDocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isLegalSlug(slug)) notFound();

  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-24">
        <LegalPageView slug={slug} />
      </main>
      <SiteFooter />
    </>
  );
}
