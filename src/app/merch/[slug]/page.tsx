import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { MerchProductView } from "@/components/merch-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";
import { isMerchSlug, legacyMerchSlug, MERCH_SLUGS } from "@/lib/merch-catalog";
import { merchTitle } from "@/lib/site-pages";

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
  const legacy = legacyMerchSlug(slug);
  if (legacy) redirect(`/merch/${legacy}`);
  if (!isMerchSlug(slug)) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#f3f1ec] text-[#142028]">
        <div className="h-24 bg-bg" aria-hidden />
        <MerchProductView slug={slug} />
      </main>
      <SiteFooter />
    </>
  );
}
