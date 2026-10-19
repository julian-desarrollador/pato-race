import type { Metadata } from "next";
import { MerchIndexView } from "@/components/merch-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: t.meta.merchTitle,
    description: t.meta.merchDesc,
  };
}

export default function MerchPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#f3f1ec] text-[#142028]">
        <div className="h-32 bg-bg" aria-hidden />
        <MerchIndexView />
      </main>
      <SiteFooter />
    </>
  );
}
