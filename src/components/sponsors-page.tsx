"use client";

import Link from "next/link";
import { usePrefs } from "@/components/locale-provider";
import { campaign } from "@/lib/campaign";
import { interpolate } from "@/lib/i18n/messages";
import { formatTierPrice, sponsorshipTiers } from "@/lib/sponsorship-tiers";

export function SponsorsPageView() {
  const { t, locale } = usePrefs();
  const tiers = sponsorshipTiers[locale];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/#sponsors" className="text-sm text-ink-muted transition hover:text-ink">
        {t.participar.back}
      </Link>
      <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-water-bright">
        {t.sponsors.tiersKicker}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
        {t.sponsors.pageTitle}
      </h1>
      <p className="mt-4 max-w-2xl text-ink/85">{t.sponsors.pageLead}</p>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {tiers.map((tier) => (
          <article key={tier.id} className="rounded-3xl border border-line bg-bg-elevated p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-water-bright">{tier.role}</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-duck">
              {tier.name}
            </h2>
            <p className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-wide">
              {formatTierPrice(tier.priceUsd, locale)}
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink/85">
              {tier.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-line bg-bg-elevated p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
          {t.sponsors.formTitle}
        </h2>
        <p className="mt-3 text-ink/85">{t.sponsors.wantTitle}</p>
        <p className="mt-2 text-ink/85">{t.sponsors.wantBody}</p>
        <p className="mt-3 text-ink/85">
          {interpolate(t.sponsors.formBody, { email: campaign.contactEmail })}
        </p>
        <a
          href={`mailto:${campaign.contactEmail}?subject=Membresia%20Pato%20Race`}
          className="mt-5 inline-flex rounded-full bg-duck px-6 py-3 text-sm font-black text-bg"
        >
          {campaign.contactEmail}
        </a>
      </div>
    </div>
  );
}
