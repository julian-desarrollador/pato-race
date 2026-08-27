"use client";

import Link from "next/link";
import { ParticipateForm } from "@/components/participate-form";
import { DuckMark } from "@/components/site-chrome";
import { usePrefs } from "@/components/locale-provider";
import { useMoney } from "@/components/use-money";
import { interpolate } from "@/lib/i18n/messages";

export function ParticipateView({ status }: { status?: string }) {
  const { t } = usePrefs();
  const money = useMoney();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-16">
      <div>
        <Link
          href="/"
          className="text-sm text-ink-muted transition hover:text-ink"
        >
          {t.participar.back}
        </Link>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
          {t.participar.titleBefore}{" "}
          <span className="text-duck">{t.participar.titleAccent}</span>
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">{t.participar.lead}</p>

        <div className="mt-6 max-w-md rotate-[-1deg] rounded-2xl bg-duck px-5 py-4 text-bg shadow-[0_6px_0_#9a7400]">
          <p className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
            {t.participar.cardTitle}
          </p>
          <p className="mt-1 text-sm font-bold">{t.participar.cardBody}</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm text-ink-muted">
          <li className="flex gap-3">
            <DuckMark className="mt-0.5 h-5 w-5 text-duck" />
            {t.participar.bullet1}
          </li>
          <li className="flex gap-3">
            <DuckMark className="mt-0.5 h-5 w-5 text-duck" />
            {t.participar.bullet2}
          </li>
          <li className="flex gap-3">
            <DuckMark className="mt-0.5 h-5 w-5 text-duck" />
            {interpolate(t.participar.bullet3, { price: money.ticket() })}
          </li>
        </ul>

        {status === "failure" ? (
          <p className="mt-6 rounded-2xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm">
            {t.participar.payFail}
          </p>
        ) : null}
      </div>

      <div className="rounded-[2rem] border border-line bg-bg-elevated/80 p-6 shadow-[var(--shadow)] backdrop-blur md:p-8">
        <ParticipateForm />
      </div>
    </div>
  );
}
