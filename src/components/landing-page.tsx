"use client";

import Image from "next/image";
import Link from "next/link";
import { AwaitingSlot } from "@/components/awaiting-slot";
import { Countdown } from "@/components/countdown";
import { FaqAccordion } from "@/components/faq-accordion";
import { usePrefs } from "@/components/locale-provider";
import { StatsDashboard } from "@/components/stats-dashboard";
import { useMoney } from "@/components/use-money";
import { campaign } from "@/lib/campaign";
import type { PublicStats } from "@/lib/db/store";
import { faqHomeItems, interpolate } from "@/lib/i18n/messages";

export function LandingPage({ stats }: { stats: PublicStats }) {
  return (
    <>
      <Hero />
      <Counter stats={stats} />
      <QueEs />
      <ComoFunciona />
      <Cinematic />
      <Experience />
      <Quienes />
      <Impacto />
      <Sponsors />
      <Faq />
      <MerchTeaser />
      <Transparency />
      <Where />
      <Contact />
      <FinalCta />
    </>
  );
}

function heroDateBar(time: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  }).formatToParts(campaign.eventDate);
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  const month = (parts.find((part) => part.type === "month")?.value ?? "").replace(".", "").toUpperCase();
  const year = parts.find((part) => part.type === "year")?.value ?? String(campaign.year);
  return `${day} ${month} ${year} · ${time.toUpperCase()}`;
}

function Hero() {
  const { t } = usePrefs();
  const money = useMoney();
  const adoptLabel = `${t.hero.adopt} · ${money.ticket()}`;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#040e15]">
      <Image
        src="/hero/noche-dique.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#040e15]/88 via-[#040e15]/55 to-[#040e15]/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-bg via-bg/70 to-transparent" />

      <div className="pointer-events-none absolute bottom-[16%] right-[8%] z-[1] w-8 opacity-90 sm:bottom-[18%] sm:right-[22%] sm:w-10">
        <Image src="/foto_pato2.webp" alt="" width={48} height={48} className="h-auto w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-[12%] right-[18%] z-[1] w-6 opacity-80 sm:bottom-[14%] sm:right-[32%] sm:w-7">
        <Image src="/foto_pato2.webp" alt="" width={36} height={36} className="h-auto w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-[20%] right-[3%] z-[1] hidden w-7 opacity-75 sm:block">
        <Image src="/foto_pato2.webp" alt="" width={36} height={36} className="h-auto w-full" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-36 md:px-8 lg:justify-center">
        <div className="grid items-end gap-2 lg:grid-cols-12 lg:items-center lg:gap-6">
          <div className="relative z-10 text-center lg:col-span-7 lg:text-left">
            <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200 sm:text-sm lg:justify-start">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ffc800]" />
              {t.hero.kicker}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6.5rem)] leading-[0.84] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.75)]">
              PATO RACE <span className="text-[#ffc800]">{campaign.year}</span>
            </h1>
            <p className="mt-3 text-3xl font-light tracking-tight text-slate-100 drop-shadow-[0_8px_18px_rgba(0,0,0,0.7)] sm:text-5xl">
              {t.hero.nightTitle}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                id="hero-adopt"
                href="/participar"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#ffc800] px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_35px_rgba(255,200,0,0.45)] transition hover:bg-[#ffd533] sm:w-auto"
              >
                {adoptLabel}
              </Link>
              <a
                href="#que-es"
                className="inline-flex w-full items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-950/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-cyan-100 backdrop-blur transition hover:bg-cyan-900/50 sm:w-auto"
              >
                {t.hero.learnMore}
              </a>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[460px] lg:max-w-none">
              <svg aria-hidden className="pointer-events-none absolute h-0 w-0">
                <filter id="hero-water" x="-10%" y="-20%" width="120%" height="140%">
                  <feTurbulence type="turbulence" baseFrequency="0.006 0.035" numOctaves="2" seed="2" result="noise" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="soft" />
                  <feDisplacementMap in="soft" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </svg>
              <div
                aria-hidden
                className="pointer-events-none absolute top-[86%] left-1/2 z-[1] h-4 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-black/35 blur-md"
              />
              <div aria-hidden className="hero-ripple z-[2] right-[18%] left-[18%]" style={{ animationDelay: "0s" }} />
              <div aria-hidden className="hero-ripple z-[2] right-[12%] left-[12%]" style={{ animationDelay: "0.9s" }} />
              <div aria-hidden className="hero-ripple z-[2] right-[6%] left-[6%]" style={{ animationDelay: "1.8s" }} />
              <div className="hero-duck-bob relative z-10">
                <div aria-hidden className="hero-reflect-clip pointer-events-none absolute inset-x-[2%] top-[72%] z-[4] h-[32%] overflow-hidden">
                  <div className="hero-duck-reflect absolute inset-x-0 -top-[225%] h-[313%] origin-[50%_72%] scale-y-[-1]">
                    <Image src="/foto_pato2.webp" alt="" fill sizes="460px" className="object-contain" />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-[82%] left-1/2 z-[3] h-20 w-[76%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,200,0,0.32),transparent_70%)] blur-lg"
                />
                <div className="hero-duck-mask relative z-10">
                  <Image
                    src="/foto_pato2.webp"
                    alt={t.hero.duckAlt}
                    width={720}
                    height={720}
                    priority
                    sizes="(max-width: 1024px) 80vw, 460px"
                    className="relative z-10 h-auto w-full [filter:drop-shadow(0_0_14px_rgba(34,211,238,0.9))_drop-shadow(0_18px_24px_rgba(0,0,0,0.45))]"
                  />
                </div>
              </div>
              <div aria-hidden className="pointer-events-none absolute inset-x-[14%] top-[84%] z-[3] h-10">
                <div className="h-10 bg-gradient-to-b from-[#0c3d45]/35 to-transparent blur-[3px]" />
              </div>
              <Link
                href="/participar"
                className="absolute left-[64%] top-[38%] z-20 whitespace-nowrap rounded-full bg-[#ffc800] px-2.5 py-1.5 text-[11px] font-black text-black shadow-[0_0_28px_rgba(255,200,0,0.75)] sm:left-[74%] sm:top-[36%] sm:px-3 lg:left-[64%] lg:top-[34%] min-[1280px]:!left-[82%] min-[1440px]:!left-[84%] min-[1440px]:!px-5 min-[1440px]:!py-2.5 min-[1440px]:!text-sm"
              >
                {adoptLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-6 flex w-full max-w-4xl flex-col items-center justify-between gap-3 rounded-3xl border border-cyan-300/40 bg-[#071924]/75 px-4 py-3 shadow-[0_0_30px_rgba(0,242,254,0.18)] backdrop-blur sm:mt-8 sm:flex-row sm:rounded-full sm:px-2">
          <p className="px-4 font-mono text-xs font-bold uppercase tracking-wider text-cyan-100 sm:text-sm">
            {heroDateBar(t.hero.time)}
          </p>
          <span className="hidden h-8 w-1 rounded-full bg-cyan-300 shadow-[0_0_15px_#67e8f9] sm:block" />
          <p className="px-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-100 sm:text-sm">
            {campaign.location.toLocaleUpperCase("es-AR")}
          </p>
        </div>
      </div>
    </section>
  );
}

function Counter({ stats }: { stats: PublicStats }) {
  const { t } = usePrefs();

  return (
    <section id="carrera" className="section-pad border-t border-line bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
            {t.counter.kicker}
          </h2>
          <p className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-wide text-duck md:text-3xl">
            {t.counter.title}
          </p>
          <div className="mt-6">
            <Countdown targetIso={campaign.eventDate.toISOString()} />
          </div>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-duck">
            {t.counter.open}
          </p>
          <Link
            href="/participar"
            className="mt-6 inline-flex rounded-full bg-duck px-6 py-3 text-sm font-black text-bg"
          >
            {t.counter.cta}
          </Link>
        </div>
        <StatsDashboard initial={stats} compact />
      </div>
    </section>
  );
}

function QueEs() {
  const { t } = usePrefs();
  const highlights = [
    { label: t.queEs.adoptLabel, detail: t.queEs.adoptDetail },
    { label: t.queEs.shareLabel, detail: t.queEs.shareDetail },
    { label: t.queEs.prizeLabel, detail: t.queEs.prizeDetail },
  ];

  return (
    <section id="que-es" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.queEs.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
          {t.queEs.titleBefore} <span className="text-duck">{t.queEs.titleAccent}</span>
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85 md:text-lg">
          <p>{t.queEs.p1}</p>
          <p>{t.queEs.p2}</p>
          <p className="font-semibold text-ink">{t.queEs.p3}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className="fun-card rounded-3xl border border-line bg-bg-elevated p-6">
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-duck">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const { t } = usePrefs();
  const steps = [
    { n: "01", title: t.como.s1t, body: t.como.s1b },
    { n: "02", title: t.como.s2t, body: t.como.s2b },
    { n: "03", title: t.como.s3t, body: t.como.s3b },
    { n: "04", title: t.como.s4t, body: t.como.s4b },
    { n: "05", title: t.como.s5t, body: t.como.s5b },
  ];

  return (
    <section id="como" className="section-pad border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-water-bright">{t.como.kicker}</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
          {t.como.title}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link href="/sponsors" className="fun-card rounded-3xl border border-line bg-bg p-6">
            <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-duck">
              {t.como.sponsorPath}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{t.como.sponsorBody}</p>
          </Link>
          <Link href="/participar" className="fun-card rounded-3xl border border-duck/40 bg-duck/10 p-6">
            <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
              {t.como.adoptPath}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{t.como.adoptBody}</p>
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {steps.map((step) => (
            <article key={step.n} className="rounded-3xl border border-line bg-bg/60 p-5">
              <p className="font-[family-name:var(--font-display)] text-3xl text-duck/80">{step.n}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-[family-name:var(--font-display)] text-3xl tracking-wide md:text-4xl">
          {t.como.close}
        </p>
        <Link
          href="/participar"
          className="mt-6 inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-bg"
        >
          {t.como.cta}
        </Link>
      </div>
    </section>
  );
}

function Cinematic() {
  const { t } = usePrefs();
  const lines = [t.cine.l1, t.cine.l2, t.cine.l3, t.cine.l4];

  return (
    <section className="bg-[#070b10] px-5 py-24 text-ink md:py-36">
      <div className="mx-auto max-w-6xl">
        {lines.map((line) => (
          <p
            key={line}
            className="font-[family-name:var(--font-display)] text-5xl leading-[0.9] tracking-wide md:text-8xl"
          >
            {line}
          </p>
        ))}
        <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-duck">{t.cine.caption}</p>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = usePrefs();
  const items = [
    { title: t.experience.start, body: t.experience.startBody },
    { title: t.experience.race, body: t.experience.raceBody },
    { title: t.experience.live, body: t.experience.liveBody },
    { title: t.experience.lights, body: t.experience.lightsBody },
    { title: t.experience.activations, body: t.experience.activationsBody },
    { title: t.experience.finale, body: t.experience.finaleBody },
  ];

  return (
    <section id="experiencia" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.experience.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-6xl">
          {t.experience.title}
        </h2>
        <p className="mt-4 max-w-2xl text-ink/85">{t.experience.lead}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line bg-bg-elevated p-6">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-duck">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-[family-name:var(--font-display)] text-3xl tracking-wide md:text-4xl">
          {t.experience.close}
        </p>
      </div>
    </section>
  );
}

function Quienes() {
  const { t } = usePrefs();

  return (
    <section id="quienes" className="section-pad border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-water-bright">
          {t.quienes.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-6xl">
          {t.quienes.titleBefore} <span className="text-duck">{t.quienes.titleAccent}</span>
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85 md:text-lg">
          <p>{t.quienes.p1}</p>
          <p>{t.quienes.p2}</p>
          <p>{t.quienes.p3}</p>
          <p>{t.quienes.p4}</p>
        </div>
        <p className="mt-8 max-w-3xl font-[family-name:var(--font-display)] text-3xl tracking-wide">
          {t.quienes.close}
        </p>
        <p className="mt-4 max-w-3xl text-ink/85">{t.quienes.vision}</p>
        <Link
          href="/historia"
          className="mt-8 inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-bg"
        >
          {t.quienes.cta}
        </Link>
      </div>
    </section>
  );
}

function Impacto() {
  const { t } = usePrefs();

  return (
    <section id="beneficio" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-water-bright">{t.impacto.kicker}</p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-6xl">
          {t.impacto.titleBefore} <span className="text-duck">{t.impacto.titleAccent}</span>
        </h2>
        <p className="mt-8 font-[family-name:var(--font-display)] text-7xl leading-none text-duck md:text-8xl">
          {campaign.benefitPercent}%
        </p>
        <p className="mt-3 max-w-xl text-lg text-ink">{t.impacto.lead}</p>
        <p className="mt-4 max-w-2xl text-ink-muted">{t.impacto.shareBody}</p>
        <p className="mt-6 max-w-2xl text-sm text-ink-muted">
          {t.impacto.note}{" "}
          <Link href="/legal/bases" className="font-semibold text-duck underline underline-offset-4">
            {t.faq.basesCta}
          </Link>
        </p>
      </div>
    </section>
  );
}

function Sponsors() {
  const { t } = usePrefs();

  return (
    <section id="sponsors" className="section-pad border-y border-line bg-bg">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-water-bright">{t.sponsors.kicker}</p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl tracking-wide">
          {t.sponsors.title}
        </h2>
        <p className="mt-4 max-w-3xl text-ink/85">{t.sponsors.body}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {campaign.sponsors.slice(0, 3).map((sponsor, index) => (
            <AwaitingSlot
              key={`${sponsor.name}-${index}`}
              title={t.fill.logo}
              hint={t.fill.logoHint}
            />
          ))}
        </div>
        <div className="mt-10 max-w-2xl">
          <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
            {t.sponsors.intro}
          </h3>
          <p className="mt-3 text-ink/85">{t.sponsors.wantBody}</p>
        </div>
        <Link
          href="/sponsors"
          className="mt-6 inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-bg"
        >
          {t.sponsors.cta}
        </Link>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = usePrefs();

  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide">{t.faq.title}</h2>
        <FaqAccordion items={faqHomeItems(t)} />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/legal/bases"
            className="inline-flex rounded-full bg-duck px-6 py-3 text-sm font-black text-bg"
          >
            {t.faq.basesCta}
          </Link>
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
  const money = useMoney();

  return (
    <section className="bg-duck px-5 py-20 text-bg md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
          {t.finalCta.title}
        </h2>
        <p className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
          {t.finalCta.question}
        </p>
        <p className="mt-6 text-sm font-black uppercase tracking-[0.18em]">{t.finalCta.meta}</p>
        <Link
          href="/participar"
          className="mt-8 inline-flex rounded-full bg-bg px-8 py-3.5 text-base font-black text-duck"
        >
          {t.finalCta.button} · {money.ticket()}
        </Link>
        <p className="mt-6 text-sm font-semibold">{t.finalCta.body}</p>
      </div>
    </section>
  );
}

function MerchTeaser() {
  const { t } = usePrefs();
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
        <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-duck">{t.merch.limited}</p>
        <Link
          href="/merch"
          className="mt-8 inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-bg"
        >
          {t.merch.viewDrop}
        </Link>
        <p className="mt-6 max-w-2xl text-sm text-ink-muted">{t.merch.independent}</p>
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
            <article key={item.t} className="rounded-3xl border border-line bg-bg-elevated p-6">
              <h3 className="text-lg font-black uppercase tracking-[0.08em] text-duck">{item.t}</h3>
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
