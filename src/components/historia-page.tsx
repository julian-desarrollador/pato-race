"use client";

import Link from "next/link";
import { AwaitingSlot } from "@/components/awaiting-slot";
import { usePrefs } from "@/components/locale-provider";

export function HistoriaPageView() {
  const { t } = usePrefs();
  const moments = [
    {
      when: t.historia.garrahanWhen,
      title: t.historia.garrahanTitle,
      body: t.historia.garrahanBody,
    },
    {
      when: t.historia.favaloroWhen,
      title: t.historia.favaloroTitle,
      body: t.historia.favaloroBody,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/#quienes" className="text-sm text-ink-muted transition hover:text-ink">
        {t.participar.back}
      </Link>
      <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-water-bright">
        {t.historia.kicker}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
        {t.historia.titleBefore} <span className="text-duck">{t.historia.titleAccent}</span>
      </h1>
      <div className="mt-6 space-y-4 text-ink/85">
        <p>{t.historia.p1}</p>
        <p>{t.historia.p2}</p>
      </div>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl tracking-wide">
        {t.historia.moments}
      </h2>
      <ol className="mt-8 space-y-10">
        {moments.map((moment) => (
          <li key={moment.title} className="border-l-2 border-duck pl-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-water-bright">
              {moment.when}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-wide">
              {moment.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">{moment.body}</p>
            <AwaitingSlot className="mt-4" title={t.fill.moment} hint={t.fill.momentHint} />
          </li>
        ))}
      </ol>

      <div className="mt-14 rounded-[2rem] bg-duck px-6 py-10 text-bg">
        <p className="font-[family-name:var(--font-display)] text-3xl tracking-wide md:text-4xl">
          {t.historia.finaleBefore}
        </p>
        <p className="mt-4 text-sm font-black uppercase tracking-[0.16em]">{t.historia.finaleWhen}</p>
        <p className="mt-1 text-sm font-black uppercase tracking-[0.16em]">{t.historia.finaleWhere}</p>
      </div>
    </div>
  );
}
