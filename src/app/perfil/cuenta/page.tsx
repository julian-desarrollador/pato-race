import type { Metadata } from "next";
import { AccountDashboard } from "@/components/account-dashboard";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: t.meta.cuentaTitle,
    description: t.meta.cuentaDesc,
  };
}

export default function CuentaPage() {
  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-24">
        <AccountDashboard />
      </main>
      <SiteFooter />
    </>
  );
}
