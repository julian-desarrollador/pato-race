"use client";

import Link from "next/link";
import { AwaitingSlot } from "@/components/awaiting-slot";
import { usePrefs } from "@/components/locale-provider";
import { campaign } from "@/lib/campaign";
import { legalDocument } from "@/lib/legal";
import { legalTitle, type LegalSlug } from "@/lib/site-pages";

export function LegalPageView({ slug }: { slug: LegalSlug }) {
  const { t, locale } = usePrefs();
  const doc = legalDocument(slug);

  if (!doc) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Link href="/" className="text-sm text-ink-muted transition hover:text-ink">
          {t.participar.back}
        </Link>
        <p className="mt-6 inline-flex rounded-full bg-coral px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
          {t.legal.draft}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
          {legalTitle(t, slug)}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink/85">{t.legal.body}</p>
        <AwaitingSlot className="mt-8" tall title={t.fill.legal} hint={t.fill.legalHint} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/" className="text-sm text-ink-muted transition hover:text-ink">
        {t.participar.back}
      </Link>
      {locale !== "es" ? (
        <p className="mt-6 rounded-2xl border border-line bg-bg-elevated/70 px-4 py-3 text-sm text-ink-muted">
          {t.legal.officialEs}
        </p>
      ) : null}
      <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-water-bright">
        {doc.kicker}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
        {doc.title}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{doc.versionNote}</p>
      <div className="mt-10 space-y-10">
        {doc.articles.map((article) => (
          <article key={article.num} className="scroll-mt-28">
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-duck md:text-3xl">
              {article.num}. {article.title}
            </h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-ink/85">
              {article.paragraphs.map((p, i) => (
                <p key={`${article.num}-${i}`}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-12 text-sm text-ink-muted">
        {campaign.organizer} · CUIT {campaign.cuit}
        <br />
        <a className="text-duck hover:underline" href={`mailto:${campaign.contactEmail}`}>
          {campaign.contactEmail}
        </a>
      </p>
    </div>
  );
}
