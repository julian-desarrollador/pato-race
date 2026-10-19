import type { Metadata } from "next";
import { HistoriaPageView } from "@/components/historia-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: t.meta.historiaTitle,
    description: t.meta.historiaDesc,
  };
}

export default function HistoriaPage() {
  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-32">
        <HistoriaPageView />
      </main>
      <SiteFooter />
    </>
  );
}
