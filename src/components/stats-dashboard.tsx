"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePrefs } from "@/components/locale-provider";
import { useMoney } from "@/components/use-money";
import { campaign } from "@/lib/campaign";
import type { PublicStats } from "@/lib/db/store";

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    const from = prev.current;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      const next = Math.round(from + (target - from) * eased);
      setValue(next);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        prev.current = target;
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

export function StatsDashboard({
  initial,
  compact = false,
}: {
  initial: PublicStats;
  compact?: boolean;
}) {
  const { t, locale } = usePrefs();
  const money = useMoney();
  const [stats, setStats] = useState(initial);
  const [bump, setBump] = useState(false);
  const raised = useCountUp(stats.raised);
  const participants = useCountUp(stats.participants);
  const progress = Math.min(100, stats.progress);
  const progressShown = useCountUp(Math.round(progress), 1600);
  const prevRaised = useRef(stats.raised);

  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const res = await fetch("/api/stats", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as PublicStats;
        if (data.raised !== prevRaised.current) {
          setBump(true);
          prevRaised.current = data.raised;
          window.setTimeout(() => setBump(false), 700);
        }
        setStats(data);
      } catch {
        /* ignore polling errors */
      }
    }, 8000);
    return () => clearInterval(id);
  }, []);

  if (compact) {
    const duckX = Math.max(6, Math.min(92, progress || 4));

    return (
      <div className={`rounded-3xl border border-line bg-[#0a1f24] p-4 sm:p-5 ${bump ? "live-bump" : ""}`}>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-wide text-ink sm:text-4xl">
              {participants.toLocaleString(locale === "en" ? "en-US" : "es-AR")}
            </p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-ink-muted">
              {t.live.ducks}
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-wide text-duck sm:text-4xl">
              {money.fromRaisedArs(raised)}
            </p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-ink-muted">
              {t.live.raised}
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-wide text-ink sm:text-4xl">
              {campaign.benefitPercent}%
            </p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-ink-muted">
              {t.counter.impactCaption}
            </p>
          </div>
        </div>
        <div className="relative mt-4 h-3 overflow-hidden rounded-full border border-water-bright/30 bg-[#06141a]">
          <div
            className="absolute inset-y-0 left-0 bg-duck transition-[width] duration-1000 ease-out"
            style={{ width: `${Math.max(progress, 3)}%` }}
          />
          <span
            className="absolute top-1/2 h-4 w-4 -translate-y-1/2 overflow-hidden rounded-full border border-duck bg-bg transition-[left] duration-1000"
            style={{ left: `calc(${duckX}% - 8px)` }}
            aria-hidden
          >
            <Image src="/pato_corre.webp" alt="" fill sizes="16px" className="object-cover" />
          </span>
        </div>
        <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-duck">
          {progressShown}% {t.live.ofGoal}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-line bg-bg-elevated/80 p-6 shadow-[var(--shadow)] backdrop-blur md:p-10">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-water-bright">
            {t.live.title}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-ink md:text-5xl">
            {t.live.subtitle}
          </h2>
        </div>
        <p className="max-w-sm text-sm text-ink-muted">
          {t.live.publicNote}
        </p>
      </div>

      <div className="mb-6 h-3 overflow-hidden rounded-full bg-bg">
        <div
          className="h-full rounded-full bg-gradient-to-r from-water to-duck transition-all duration-700"
          style={{ width: `${Math.min(100, stats.progress)}%` }}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label={t.live.ducks}
          value={participants.toLocaleString(locale === "en" ? "en-US" : "es-AR")}
          hint={t.live.ducks}
        />
        <StatCard
          label={t.live.raised}
          value={money.fromRaisedArs(raised)}
          hint={t.live.raised}
          glow
        />
        <StatCard
          label={t.live.ofGoal}
          value={`${progressShown}%`}
          hint={t.live.ofGoal}
        />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
  glow,
}: {
  label: string;
  value: string;
  hint: string;
  glow?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-bg/50 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">{label}</p>
      <p
        className={`mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-duck md:text-5xl ${glow ? "animate-count-glow" : ""}`}
      >
        {value}
      </p>
      <p className="mt-2 text-sm text-ink-muted">{hint}</p>
    </div>
  );
}
