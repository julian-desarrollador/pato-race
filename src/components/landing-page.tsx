"use client";

import Image from "next/image";
import Link from "next/link";
import { AwaitingSlot } from "@/components/awaiting-slot";
import { Countdown } from "@/components/countdown";
import { FaqAccordion } from "@/components/faq-accordion";
import { usePrefs } from "@/components/locale-provider";
import { StatsDashboard } from "@/components/stats-dashboard";
import { useMoney } from "@/components/use-money";
import { campaign, type BeneficiaryId } from "@/lib/campaign";
import type { PublicStats } from "@/lib/db/store";
import { faqHomeItems, interpolate } from "@/lib/i18n/messages";

export function LandingPage({ stats }: { stats: PublicStats }) {
  return (
    <>
      <Hero stats={stats} />
      <VideoTeaser />
      <QueEs />
      <Experience />
      <Sponsors />
      <Impacto />
      <ComoFunciona />
      <Remote />
      <MerchTeaser />
      <Faq />
      <Transparency />
      <Where />
      <Contact />
      <FinalCta />
    </>
  );
}

function Hero({ stats }: { stats: PublicStats }) {
  const { t } = usePrefs();
  const money = useMoney();

  return (
    <section className="relative min-h-[100svh] overflow-hidden hero-party">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute -left-20 top-28 h-52 w-52 rounded-full bg-coral/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-duck/25 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-14 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="grid grid-cols-[1.15fr_0.85fr] items-center gap-3 sm:gap-6 md:gap-10">
          <div className="animate-rise min-w-0">
            <div className="date-chip mb-4 inline-flex w-fit max-w-full -rotate-1 flex-col overflow-hidden rounded-2xl border-2 border-duck bg-duck text-bg shadow-[5px_5px_0_#9a7400] sm:mb-6 sm:rotate-0 sm:flex-row sm:items-stretch">
              <div className="px-3.5 py-2.5 sm:px-4 sm:py-3">
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-bg/55">
                  {t.hero.city}
                </p>
                <p className="font-[family-name:var(--font-display)] text-xl leading-none tracking-wide sm:text-2xl">
                  {campaign.city}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-bg/75">
                  {campaign.location}
                </p>
              </div>
              <div className="hidden w-px self-stretch bg-bg/20 sm:block" aria-hidden />
              <div className="border-t-2 border-bg/15 px-3.5 py-2.5 sm:border-t-0 sm:px-4 sm:py-3">
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-bg/55">
                  {t.hero.dateTime}
                </p>
                <p className="text-xs font-black uppercase leading-tight tracking-wide sm:text-sm">
                  {t.hero.date}
                </p>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-bg/75 sm:text-sm">
                  {t.hero.time}
                </p>
              </div>
            </div>

            <h1 className="hero-title font-[family-name:var(--font-display)] text-[clamp(3.4rem,12vw,9.5rem)] leading-[0.78] tracking-wide text-ink">
              PATO
              <br />
              <span className="relative inline-block text-duck">
                RACE
                <span className="absolute -right-10 -top-3 rotate-12 rounded-full bg-foam px-2.5 py-1 font-[family-name:var(--font-body)] text-[10px] font-black tracking-normal text-bg [text-shadow:none] sm:-right-14 sm:text-xs md:-right-20 md:text-sm">
                  {t.hero.quack}
                </span>
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm font-semibold uppercase tracking-[0.08em] text-ink sm:mt-6 sm:text-base md:text-lg">
              {t.hero.tagline}
            </p>
            <p className="mt-2 max-w-md text-sm text-ink-muted sm:text-lg md:text-xl">
              {t.hero.lead}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="/participar"
                className="fun-button whitespace-nowrap rounded-full bg-duck px-5 py-3 text-sm font-black text-bg sm:px-7 sm:py-3.5 sm:text-base"
              >
                {t.hero.adopt} · {money.ticket()}
              </Link>
              <a
                href="#como"
                className="rounded-full border border-line px-5 py-3 text-sm text-ink transition hover:border-ink/40 sm:px-6 sm:py-3.5 sm:text-base"
              >
                {t.hero.how}
              </a>
            </div>
            <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-ink-muted">
              {interpolate(t.hero.priceContext, { price: money.ticket() })}
            </p>
            <p className="mt-1 text-sm text-ink-muted">{t.hero.anywhere}</p>
          </div>

          <div
            className="relative animate-rise self-center"
            style={{ animationDelay: "120ms" }}
          >
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-duck/80 animate-ripple sm:h-48 sm:w-48 md:h-72 md:w-72" />
            <div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-water-bright/30 animate-ripple sm:h-64 sm:w-64 sm:border-4 md:h-96 md:w-96"
              style={{ animationDelay: "1s" }}
            />
            <div className="relative mx-auto w-full max-w-[160px] animate-float-duck sm:max-w-[260px] md:max-w-[400px]">
              <div className="relative aspect-square overflow-hidden rounded-[42%_58%_45%_55%/55%_42%_58%_45%] border-[4px] border-duck bg-[#15120d] shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:border-[5px] md:border-[6px]">
                <Image
                  src="/foto_pato2.webp"
                  alt={t.hero.duckAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 400px"
                  className="object-cover"
                />
              </div>
              <span className="absolute -right-1 bottom-4 rotate-6 rounded-full bg-water-bright px-2 py-1 text-[9px] font-black text-bg shadow-xl sm:-right-3 sm:bottom-8 sm:px-3 sm:py-1.5 sm:text-xs md:bottom-10 md:px-4 md:py-2 md:text-sm">
                {t.hero.solidary}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
          <div className="rotate-1 rounded-[1.5rem] border-2 border-line bg-[#13302e] p-4 text-ink shadow-[0_14px_36px_rgba(0,0,0,0.28)] sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-[family-name:var(--font-display)] text-xl leading-none tracking-wide sm:text-2xl">
                  {campaign.location}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-ink-muted sm:text-xs">
                  {t.hero.racesLine}
                </p>
              </div>
              <span className="rounded-full bg-duck px-3 py-1 text-[10px] font-black text-bg sm:text-xs">
                {t.hero.remaining}
              </span>
            </div>
            <Countdown targetIso={campaign.eventDate.toISOString()} />
            <p className="mt-3 text-[11px] font-black uppercase tracking-[0.16em] text-duck">
              {t.hero.adoptionsOpen}
            </p>
          </div>

          <div id="stats" className="min-w-0">
            <StatsDashboard initial={stats} compact />
          </div>
        </div>
      </div>
      <div className="hero-wave pointer-events-none absolute inset-x-0 bottom-0 h-8 md:h-12" />
    </section>
  );
}

function QueEs() {
  const { t } = usePrefs();
  const highlights = [
    {
      value: t.queEs.adoptLabel,
      label: t.queEs.adoptLabel,
      detail: t.queEs.adoptDetail,
    },
    {
      value: t.queEs.shareLabel,
      label: t.queEs.shareLabel,
      detail: t.queEs.shareDetail,
    },
    {
      value: t.queEs.prizeLabel,
      label: t.queEs.prizeLabel,
      detail: t.queEs.prizeDetail,
    },
  ];

  return (
    <section id="que-es" className="section-pad border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
              {t.queEs.kicker}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
              {t.queEs.titleBefore}{" "}
              <span className="text-duck">{t.queEs.titleAccent}</span>
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink/85 md:text-lg">
            <p>{t.queEs.p1}</p>
            <p>{t.queEs.p2}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="fun-card rounded-3xl border border-line bg-bg/45 p-6"
            >
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-duck md:text-3xl">
                {item.value}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impacto() {
  const { t } = usePrefs();
  const descriptions: Record<BeneficiaryId, string> = {
    garrahan: t.impacto.descGarrahan,
    tandil: t.impacto.descTandil,
    gardel: t.impacto.descGardel,
  };
  const lines = [
    t.impacto.lineGarrahan,
    t.impacto.lineGardel,
    t.impacto.lineTandil,
  ];

  return (
    <section id="beneficio" className="section-pad border-t border-line bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-water-bright">
            {t.impacto.kicker}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
            {t.impacto.titleBefore}
            <span className="text-duck"> {t.impacto.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-md text-ink-muted">{t.impacto.lead}</p>
          <div className="mt-4 space-y-2 text-sm text-ink-muted">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-4 max-w-md rounded-2xl border border-line bg-bg-elevated/70 px-4 py-3 text-sm text-ink-muted">
            {t.impacto.prizes}
          </p>
          <p className="mt-3 max-w-md text-sm text-ink-muted">{t.impacto.costs}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {campaign.beneficiaries.map((b) => (
            <article
              key={b.id}
              className="fun-card rounded-3xl border border-line bg-bg/40 p-6"
            >
              <p className="font-[family-name:var(--font-display)] text-4xl text-duck">
                {b.share}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{b.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{descriptions[b.id]}</p>
            </article>
          ))}
          <article className="fun-card rounded-3xl border border-line bg-gradient-to-br from-water/20 to-duck/10 p-6 sm:col-span-3">
            <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
              {t.impacto.goalTitle}
            </h3>
            <p className="mt-2 text-ink-muted">{t.impacto.goalBody}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const { t } = usePrefs();
  const money = useMoney();
  const steps = [
    {
      n: "01",
      title: t.como.s1t,
      body: interpolate(t.como.s1b, { price: money.ticket() }),
    },
    { n: "02", title: t.como.s2t, body: t.como.s2b },
    { n: "03", title: t.como.s3t, body: t.como.s3b },
    { n: "04", title: t.como.s4t, body: t.como.s4b },
  ];

  return (
    <section id="como" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-water-bright">
            {t.como.kicker}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
            {t.como.title}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.n}
              className="fun-card group relative overflow-hidden rounded-3xl border border-line bg-bg-soft/60 p-6"
            >
              <span className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-duck/10 transition group-hover:scale-150" />
              <p className="font-[family-name:var(--font-display)] text-4xl text-duck/80">
                {step.n}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Remote() {
  const { t } = usePrefs();
  return (
    <section id="desde-donde-estes" className="section-pad pt-0">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-bg-elevated/80 px-6 py-10 md:px-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.remote.kicker}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
          {t.remote.title}
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted">{t.remote.body}</p>
      </div>
    </section>
  );
}

function Sponsors() {
  const { t } = usePrefs();

  return (
    <section id="sponsors" className="section-pad border-y border-line bg-bg">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-water-bright">
              {t.sponsors.kicker}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide">
              {t.sponsors.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-muted">{t.sponsors.intro}</p>
        </div>
        <p className="mb-8 max-w-3xl text-ink/85">{t.sponsors.body}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {campaign.sponsors.map((sponsor, index) => (
            <AwaitingSlot
              key={`${sponsor.name}-${index}`}
              title={t.fill.logo}
              hint={t.fill.logoHint}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/sponsors"
            className="inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-bg"
          >
            {t.sponsors.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = usePrefs();

  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide">
          {t.faq.title}
        </h2>
        <FaqAccordion items={faqHomeItems(t)} />
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
          >
            {t.faq.seeAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = usePrefs();
  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-water/30 via-bg-elevated to-duck/20 px-6 py-14 text-center md:px-12">
        <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
          {t.finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-muted">{t.finalCta.body}</p>
        <p className="mx-auto mt-3 max-w-xl text-sm font-black uppercase tracking-[0.14em] text-duck">
          {t.finalCta.motto}
        </p>
        <Link
          href="/participar"
          className="mt-8 inline-flex rounded-full bg-duck px-8 py-3.5 text-base font-semibold text-bg transition hover:bg-duck-deep"
        >
          {t.finalCta.button}
        </Link>
      </div>
    </section>
  );
}

function VideoTeaser() {
  const { t } = usePrefs();
  return (
    <section id="video" className="section-pad border-t border-line pt-12 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.video.kicker}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
          {t.video.title}
        </h2>
        <AwaitingSlot
          className="mt-8 aspect-video min-h-0 w-full"
          tall
          title={t.fill.video}
          hint={t.fill.videoHint}
        />
      </div>
    </section>
  );
}

function Experience() {
  const { t } = usePrefs();
  return (
    <section id="experiencia" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.experience.kicker}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
          {t.experience.title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-3xl border border-line bg-bg-elevated p-6">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-duck">
              {t.experience.twoRaces}
            </h3>
          </article>
          <article className="rounded-3xl border border-line bg-bg-elevated p-6">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-duck">
              {t.experience.race}
            </h3>
          </article>
          <article className="rounded-3xl border border-line bg-bg-elevated p-6">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-duck">
              {t.experience.music}
            </h3>
            <AwaitingSlot className="mt-4 min-h-24" title={t.fill.artist} hint={t.fill.artistHint} />
          </article>
          <article className="rounded-3xl border border-line bg-bg-elevated p-6">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-duck">
              {t.experience.dj}
            </h3>
            <AwaitingSlot className="mt-4 min-h-24" title={t.fill.artist} hint={t.fill.artistHint} />
          </article>
          <AwaitingSlot tall title={t.fill.artist} hint={t.fill.artistHint} />
        </div>
      </div>
    </section>
  );
}

function MerchTeaser() {
  const { t } = usePrefs();
  const items = [
    { href: "/merch/remeras", name: t.merch.tees },
    { href: "/merch/gorras", name: t.merch.caps },
    { href: "/merch/stickers", name: t.merch.stickers },
  ];
  return (
    <section id="merch" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.merch.kicker}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
          {t.merch.title}
        </h2>
        <p className="mt-4 max-w-2xl text-ink/85">{t.merch.lead}</p>
        <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-duck">
          {t.merch.limited}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block">
              <article className="fun-card h-full rounded-3xl border border-line bg-bg-elevated p-5">
                <h3 className="font-[family-name:var(--font-display)] text-3xl text-duck">
                  {item.name}
                </h3>
                <AwaitingSlot className="mt-4" title={t.fill.photo} hint={t.fill.photoHint} />
              </article>
            </Link>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-dashed border-duck/40 bg-duck/5 px-4 py-3 text-sm text-ink">
          {t.merch.pickup} {t.merch.shipping}
        </p>
      </div>
    </section>
  );
}

function Transparency() {
  const { t } = usePrefs();
  const stamps = [
    { t: t.transparency.s1t, b: t.transparency.s1b },
    { t: t.transparency.s2t, b: t.transparency.s2b },
    { t: t.transparency.s3t, b: t.transparency.s3b },
    { t: t.transparency.s4t, b: t.transparency.s4b },
  ];
  return (
    <section id="transparencia" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.transparency.kicker}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
          {t.transparency.title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {stamps.map((item) => (
            <article
              key={item.t}
              className="rounded-3xl border border-line bg-bg-elevated p-6"
            >
              <h3 className="text-lg font-black uppercase tracking-[0.08em] text-duck">
                {item.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">{item.b}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Where() {
  const { t } = usePrefs();
  return (
    <section id="donde" className="section-pad pt-0">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
            {t.where.kicker}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
            {t.where.title}
          </h2>
          <p className="mt-4 text-ink/85">{t.where.body}</p>
        </div>
        <AwaitingSlot tall title={t.fill.map} hint={t.fill.mapHint} />
      </div>
    </section>
  );
}

function Contact() {
  const { t } = usePrefs();
  return (
    <section id="contacto" className="section-pad pt-0">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-line bg-bg-elevated px-6 py-10 md:px-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.contactBlock.kicker}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide">
          {t.contactBlock.title}
        </h2>
        <p className="mt-4 text-ink/85">
          {interpolate(t.contactBlock.body, { email: campaign.contactEmail })}
        </p>
        <a
          href={`mailto:${campaign.contactEmail}`}
          className="mt-4 inline-block font-semibold text-duck hover:underline"
        >
          {campaign.contactEmail}
        </a>
      </div>
    </section>
  );
}
