import type { Metadata } from "next";
import { PerfilAccessView } from "@/components/perfil-access-view";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: t.meta.perfilTitle,
    description: t.meta.perfilDesc,
  };
}

export default function PerfilAccessPage() {
  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-24">
        <PerfilAccessView />
      </main>
      <SiteFooter />
    </>
  );
}
