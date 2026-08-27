import type { Metadata } from "next";
import { ParticipateView } from "@/components/participate-view";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getServerPrefs } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerPrefs();
  return {
    title: t.meta.participarTitle,
    description: t.meta.participarDesc,
  };
}

export default async function ParticiparPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;

  return (
    <>
      <SiteHeader />
      <main className="water-mesh flex-1 pt-24">
        <ParticipateView status={status} />
      </main>
      <SiteFooter />
    </>
  );
}
