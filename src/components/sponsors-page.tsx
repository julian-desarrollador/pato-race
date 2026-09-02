"use client";

import Link from "next/link";
import { AwaitingSlot } from "@/components/awaiting-slot";
import { usePrefs } from "@/components/locale-provider";
import { campaign } from "@/lib/campaign";
import { interpolate } from "@/lib/i18n/messages";

export function SponsorsPageView() {
  const { t } = usePrefs();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/#sponsors" className="text-sm text-ink-muted transition hover:text-ink">
        {t.participar.back}
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
        {t.sponsors.pageTitle}
      </h1>
      <p className="mt-4 max-w-2xl text-ink/85">{t.sponsors.pageLead}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {campaign.sponsors.map((sponsor, index) => (
          <AwaitingSlot
            key={`${sponsor.name}-${index}`}
            title={t.fill.logo}
            hint={t.fill.logoHint}
          />
        ))}
      </div>
      <AwaitingSlot
        className="mt-6"
        title={t.fill.deck}
        hint={t.fill.deckHint}
      />
      <div className="mt-10 rounded-[2rem] border border-line bg-bg-elevated p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
          {t.sponsors.formTitle}
        </h2>
        <p className="mt-3 text-ink/85">
          {interpolate(t.sponsors.formBody, { email: campaign.contactEmail })}
        </p>
        <a
          href={`mailto:${campaign.contactEmail}?subject=Alianza%20Pato%20Race`}
          className="mt-5 inline-flex rounded-full bg-duck px-6 py-3 text-sm font-black text-bg"
        >
          {campaign.contactEmail}
        </a>
      </div>
    </div>
  );
}
