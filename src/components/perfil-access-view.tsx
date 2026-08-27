"use client";

import Link from "next/link";
import { ProfileAccessPanel } from "@/components/profile-access";
import { usePrefs } from "@/components/locale-provider";

export function PerfilAccessView() {
  const { t } = usePrefs();
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-20">
      <div className="animate-rise">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-water-bright">
          {t.perfil.kicker}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-ink md:text-7xl">
          {t.perfil.title}
        </h1>
        <p className="mt-4 max-w-md text-base text-ink-muted md:text-lg">
          {t.perfil.lead}
        </p>
        <ul className="mt-8 space-y-3 text-sm text-ink-muted">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-duck" />
            {t.perfil.b1}
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-water-bright" />
            {t.perfil.b2}
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-coral" />
            {t.perfil.b3}
          </li>
        </ul>
        <p className="mt-8 text-sm text-ink-muted">
          {t.perfil.notYet}{" "}
          <Link
            href="/participar"
            className="font-semibold text-duck hover:underline"
          >
            {t.perfil.adopt}
          </Link>
        </p>
      </div>

      <div className="animate-rise rounded-[2rem] border border-line bg-bg-elevated/90 p-6 shadow-[var(--shadow)] backdrop-blur md:p-8">
        <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ink">
          {t.perfil.enter}
        </p>
        <p className="mt-1 text-sm text-ink-muted">{t.perfil.twoWays}</p>
        <div className="mt-6">
          <ProfileAccessPanel />
        </div>
      </div>
    </div>
  );
}
