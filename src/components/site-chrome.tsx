"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, type ReactNode } from "react";
import { LocalizationMenu } from "@/components/localization-menu";
import { useMerchCart } from "@/components/merch-cart";
import { MerchCartDrawer } from "@/components/merch-page";
import { usePrefs } from "@/components/locale-provider";
import { useMoney } from "@/components/use-money";
import { readSession } from "@/components/profile-access";
import { campaign } from "@/lib/campaign";
import { interpolate } from "@/lib/i18n/messages";

type NavItem = { href: string; label: string };

function HeaderCart({ onOpen }: { onOpen: () => void }) {
  const { t } = usePrefs();
  const { count, cartOpen, openCart } = useMerchCart();

  return (
    <button
      type="button"
      aria-label={interpolate(t.merch.cartLink, { count })}
      aria-expanded={cartOpen}
      aria-haspopup="dialog"
      onClick={() => {
        onOpen();
        openCart();
      }}
      className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink/40"
    >
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12l-1 12H7L6 8z" />
        <path strokeLinecap="round" d="M9 8V7a3 3 0 0 1 6 0v1" />
      </svg>
      <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-duck px-1 text-[10px] font-black text-bg">
        {count}
      </span>
    </button>
  );
}

function useNavItems(loggedIn: boolean) {
  const { t } = usePrefs();
  return {
    // Desktop omits Contacto to leave room for Botón de arrepentimiento.
    primary: [
      { href: "/#que-es", label: t.nav.event },
      { href: "/#como", label: t.nav.how },
      { href: "/#beneficio", label: t.nav.benefit },
      { href: "/historia", label: t.nav.historia },
      { href: "/sponsors", label: t.nav.sponsors },
      { href: "/merch", label: t.nav.merch },
      { href: "/faq", label: t.nav.questions },
    ] satisfies NavItem[],
    contact: {
      href: "/#contacto",
      label: t.nav.contact,
    } satisfies NavItem,
    account: {
      href: loggedIn ? "/perfil/cuenta" : "/perfil",
      label: loggedIn ? t.nav.account : t.nav.login,
    } satisfies NavItem,
  };
}

export function SiteHeader() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = usePrefs();
  const nav = useNavItems(loggedIn);
  const menuId = useId();

  useEffect(() => {
    setLoggedIn(Boolean(readSession()));
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
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
        <nav className="hidden items-center gap-5 text-sm text-ink-muted xl:flex xl:gap-5">
          {nav.primary.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href={nav.account.href} className="transition hover:text-ink">
            {nav.account.label}
          </Link>
          <Link
            href="/legal/arrepentimiento"
            className="whitespace-nowrap text-xs text-ink-muted/80 underline decoration-ink-muted/30 underline-offset-4 transition hover:text-ink"
          >
            {t.nav.regret}
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={t.nav.menu}
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">{t.nav.menu}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
            </span>
          </button>
          <LocalizationMenu align="right" compactOnMobile />
          <Link
            href={nav.account.href}
            className="hidden rounded-full border border-line px-3 py-2 text-sm font-semibold text-ink transition hover:border-ink/40 md:inline-flex xl:hidden"
          >
            {loggedIn ? t.nav.account : t.nav.loginShort}
          </Link>
          <HeaderCart onOpen={() => setOpen(false)} />
          <Link
            href="/participar"
            className="inline-flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-water-bright px-5 text-center text-sm font-black text-bg transition hover:brightness-110 sm:px-6 sm:text-base"
          >
            {t.nav.adoptLine1} {t.nav.adoptLine2}
          </Link>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 z-50 flex flex-col bg-bg-elevated xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menu}
        >
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-normal text-ink">
              PATO&nbsp;RACE
            </span>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink/50"
              aria-label={t.nav.close}
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">{t.nav.close}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-lg font-semibold text-ink hover:bg-bg/60"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={nav.contact.href}
              className="rounded-2xl px-3 py-3 text-lg font-semibold text-ink hover:bg-bg/60"
              onClick={() => setOpen(false)}
            >
              {nav.contact.label}
            </Link>
            <Link
              href={nav.account.href}
              className="rounded-2xl px-3 py-3 text-lg font-semibold text-ink hover:bg-bg/60"
              onClick={() => setOpen(false)}
            >
              {nav.account.label}
            </Link>
            <Link
              href="/legal/arrepentimiento"
              className="rounded-2xl px-3 py-3 text-lg font-semibold text-ink hover:bg-bg/60"
              onClick={() => setOpen(false)}
            >
              {t.nav.regret}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
    <MerchCartDrawer />
    </>
  );
}

export function StickyAdoptBar() {
  const pathname = usePathname();
  const { t } = usePrefs();
  const money = useMoney();

  if (pathname === "/participar") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-duck/40 bg-bg-elevated/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur xl:hidden">
      <Link
        href="/participar"
        className="flex h-12 w-full items-center justify-center rounded-full bg-duck text-sm font-black text-bg"
      >
        {t.sticky.adopt} · {money.ticket()}
      </Link>
      <Link
        href="/legal/arrepentimiento"
        className="mt-2 block text-center text-[11px] text-ink-muted underline decoration-ink-muted/30 underline-offset-2 transition hover:text-ink"
      >
        {t.nav.regret}
      </Link>
    </div>
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

function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line md:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left text-sm font-black uppercase tracking-[0.16em] text-water-bright md:pointer-events-none md:py-0"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
        <span className="md:hidden">{open ? "−" : "+"}</span>
      </button>
      <div className={`${open ? "block pb-4" : "hidden"} md:mt-4 md:block md:pb-0`}>
        {children}
      </div>
    </div>
  );
}

export function SiteFooter() {
  const { t } = usePrefs();
  const year = campaign.year;

  return (
    <>
      <footer className="border-t border-line bg-bg-elevated pb-32 xl:pb-0">
        <div className="mx-auto grid max-w-6xl gap-2 px-5 py-10 text-sm text-ink-muted md:grid-cols-4 md:gap-8 md:px-8">
          <FooterAccordion title={t.footer.brandCol}>
            <p className="font-[family-name:var(--font-display)] text-xl leading-none tracking-wide text-ink">
              PATO RACE {year}
            </p>
            <p className="mt-2">{t.footer.tagline}</p>
            <p className="mt-2">{t.footer.event}</p>
            <p className="mt-2">{t.footer.organizer}</p>
            <p className="mt-2 text-ink">{t.footer.people}</p>
            <p className="mt-1">{t.footer.taxId}</p>
            <p className="mt-1">{t.footer.address}</p>
            <p className="mt-3 rounded-2xl border border-dashed border-duck/40 bg-duck/5 px-3 py-2 text-xs text-ink">
              {t.footer.hoursNeed}
            </p>
          </FooterAccordion>
          <FooterAccordion title={t.footer.infoCol}>
            <ul className="space-y-2 text-ink">
              <li>
                <Link href="/historia" className="hover:text-duck">
                  {t.nav.historia}
                </Link>
              </li>
              <li>
                <Link href="/#que-es" className="hover:text-duck">
                  {t.nav.event}
                </Link>
              </li>
              <li>
                <Link href="/#como" className="hover:text-duck">
                  {t.nav.how}
                </Link>
              </li>
              <li>
                <Link href="/merch" className="hover:text-duck">
                  {t.nav.merch}
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-duck">
                  {t.sponsors.kicker}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-duck">
                  {t.nav.questions}
                </Link>
              </li>
            </ul>
          </FooterAccordion>
          <FooterAccordion title={t.footer.legalCol}>
            <ul className="space-y-2 text-ink">
              <li>
                <Link href="/legal/terminos" className="hover:text-duck">
                  {t.legal.terms}
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="hover:text-duck">
                  {t.legal.privacy}
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-duck">
                  {t.legal.cookies}
                </Link>
              </li>
              <li>
                <Link href="/legal/bases" className="hover:text-duck">
                  {t.legal.rules}
                </Link>
              </li>
              <li>
                <Link href="/legal/devoluciones" className="hover:text-duck">
                  {t.legal.returns}
                </Link>
              </li>
              <li>
                <Link href="/legal/arrepentimiento" className="hover:text-duck">
                  {t.legal.regret}
                </Link>
              </li>
            </ul>
          </FooterAccordion>
          <FooterAccordion title={t.footer.contactCol}>
            <p className="text-ink">{t.footer.note}</p>
            <a
              href={`mailto:${campaign.contactEmail}`}
              className="mt-3 inline-block text-duck hover:underline"
            >
              {t.footer.email}
            </a>
            <div className="mt-4">
              <LocalizationMenu align="left" />
            </div>
          </FooterAccordion>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-xs text-ink-muted md:px-8">
          {t.footer.copyright}
        </p>
      </footer>
      <StickyAdoptBar />
    </>
  );
}
