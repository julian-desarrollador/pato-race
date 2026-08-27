import { LandingPage } from "@/components/landing-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getPublicStats } from "@/lib/db/store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const stats = await getPublicStats();

  return (
    <>
      <SiteHeader />
      <main>
        <LandingPage stats={stats} />
      </main>
      <SiteFooter />
    </>
  );
}
