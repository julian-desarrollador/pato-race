import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SponsorsPageView } from "@/components/sponsors-page";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: t.meta.sponsorsTitle,
    description: t.meta.sponsorsDesc,
  };
}

export default function SponsorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-32">
        <SponsorsPageView />
      </main>
      <SiteFooter />
    </>
  );
}
