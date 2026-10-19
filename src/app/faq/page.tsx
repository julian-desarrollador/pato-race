import type { Metadata } from "next";
import { FaqPageView } from "@/components/faq-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: t.meta.faqTitle,
    description: t.meta.faqDesc,
  };
}

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-32">
        <FaqPageView />
      </main>
      <SiteFooter />
    </>
  );
}
