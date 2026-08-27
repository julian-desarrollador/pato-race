"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LocalizationMenu } from "@/components/localization-menu";
import { usePrefs } from "@/components/locale-provider";
import { readSession } from "@/components/profile-access";

export function SiteHeader() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { t } = usePrefs();

  useEffect(() => {
    setLoggedIn(Boolean(readSession()));
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-3 px-5 py-4 md:px-8">
        <Link href="/" className="group flex shrink-0 flex-nowrap items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-duck shadow-[0_0_0_3px_rgba(245,197,24,0.22)] transition group-hover:scale-105">
            <Image
              src="/foto_pato2.webp"
              alt="Pato Race"
              fill
              sizes="36px"
              className="object-cover object-center"
              priority
            />
          </span>
          <span className="shrink-0 whitespace-nowrap font-[family-name:var(--font-display)] text-2xl leading-none tracking-normal text-ink sm:text-[1.75rem]">
            PATO&nbsp;RACE
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-muted lg:flex">
          <a href="/#que-es" className="hover:text-ink transition">
            {t.nav.what}
          </a>
          <a href="/#sponsors" className="hover:text-ink transition">
            {t.nav.sponsors}
          </a>
          <a href="/#beneficio" className="hover:text-ink transition">
            {t.nav.benefit}
          </a>
          <a href="/#como" className="hover:text-ink transition">
            {t.nav.how}
          </a>
          <Link
            href={loggedIn ? "/perfil/cuenta" : "/perfil"}
            className="hover:text-ink transition"
          >
            {loggedIn ? t.nav.account : t.nav.login}
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LocalizationMenu align="right" compactOnMobile />
          <Link
            href={loggedIn ? "/perfil/cuenta" : "/perfil"}
            className="hidden rounded-full border border-line px-3 py-2 text-sm font-semibold text-ink transition hover:border-ink/40 md:inline-flex lg:hidden"
          >
            {loggedIn ? t.nav.account : t.nav.loginShort}
          </Link>
          <Link
            href="/participar"
            className="inline-flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-water-bright px-5 text-center text-sm font-black text-bg transition hover:brightness-110 sm:px-6 sm:text-base"
          >
            {t.nav.adoptLine1} {t.nav.adoptLine2}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function DuckMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block overflow-hidden rounded-full ${className}`}
    >
      <Image
        src="/foto_pato2.webp"
        alt=""
        fill
        sizes="32px"
        className="object-cover object-center"
        aria-hidden
      />
    </span>
  );
}

export function SiteFooter() {
  const { t } = usePrefs();
  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-ink-muted md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl leading-none tracking-wide text-ink">
            PATO RACE 2026
          </p>
          <p className="mt-2">{t.footer.event}</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <LocalizationMenu align="right" />
          <p className="max-w-md md:text-right">{t.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
