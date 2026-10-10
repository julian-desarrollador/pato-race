import type { Metadata } from "next";
import { MerchCheckoutView } from "@/components/merch-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: `${t.merch.checkoutTitle} | Pato Race 2026`,
    description: t.meta.merchDesc,
  };
}

export default function MerchCheckoutPage() {
  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-24">
        <MerchCheckoutView />
      </main>
      <SiteFooter />
    </>
  );
}
