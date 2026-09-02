"use client";

import Link from "next/link";
import { AwaitingSlot } from "@/components/awaiting-slot";
import { usePrefs } from "@/components/locale-provider";
import { merchTitle, type MerchSlug } from "@/lib/site-pages";

export function MerchIndexView() {
  const { t } = usePrefs();
  const items = [
    { slug: "remeras" as const, name: t.merch.tees },
    { slug: "gorras" as const, name: t.merch.caps },
    { slug: "stickers" as const, name: t.merch.stickers },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/#merch" className="text-sm text-ink-muted transition hover:text-ink">
        {t.participar.back}
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
        {t.merch.pageTitle}
      </h1>
      <p className="mt-4 max-w-2xl text-ink/85">{t.merch.pageLead}</p>
      <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-duck">
        {t.merch.limited}
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Link key={item.slug} href={`/merch/${item.slug}`} className="block">
            <article className="fun-card h-full rounded-3xl border border-line bg-bg-elevated p-5">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-duck">
                {item.name}
              </h2>
              <AwaitingSlot className="mt-4" title={t.fill.photo} hint={t.fill.photoHint} />
            </article>
          </Link>
        ))}
      </div>
      <p className="mt-8 rounded-2xl border border-dashed border-duck/40 bg-duck/5 px-4 py-3 text-sm text-ink">
        {t.merch.pickup} {t.merch.shipping}
      </p>
    </div>
  );
}

export function MerchProductView({ slug }: { slug: MerchSlug }) {
  const { t } = usePrefs();
  const name = merchTitle(t, slug);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/merch" className="text-sm text-ink-muted transition hover:text-ink">
        {t.participar.back}
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
        {name}
      </h1>
      <p className="mt-4 text-ink/85">{t.merch.coming}</p>
      <AwaitingSlot className="mt-8" tall title={t.fill.photo} hint={t.fill.photoHint} />
      <p className="mt-6 rounded-2xl border border-dashed border-duck/40 bg-duck/5 px-4 py-3 text-sm text-ink">
        {t.merch.pickup} {t.merch.shipping}
      </p>
    </div>
  );
}
