import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MerchProductView } from "@/components/merch-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";
import { isMerchSlug, merchTitle, MERCH_SLUGS } from "@/lib/site-pages";

export function generateStaticParams() {
  return MERCH_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { t } = await getServerPrefs();
  const { slug } = await params;
  if (!isMerchSlug(slug)) return { title: t.meta.merchTitle };
  return {
    title: `${merchTitle(t, slug)} | Pato Race 2026`,
    description: t.meta.merchDesc,
  };
}

export default async function MerchProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isMerchSlug(slug)) notFound();

  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-24">
        <MerchProductView slug={slug} />
      </main>
      <SiteFooter />
    </>
  );
}
