import type { Metadata } from "next";
import { MerchCartView } from "@/components/merch-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: `${t.merch.cartTitle} | Pato Race 2026`,
    description: t.meta.merchDesc,
  };
}

export default function MerchCartPage() {
  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-32">
        <MerchCartView />
      </main>
      <SiteFooter />
    </>
  );
}
