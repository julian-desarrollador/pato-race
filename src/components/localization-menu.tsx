"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { usePrefs } from "@/components/locale-provider";
import type { Currency, Locale } from "@/lib/i18n/config";

export function LocalizationMenu({
  align = "right",
  compactOnMobile = false,
}: {
  align?: "left" | "right";
  compactOnMobile?: boolean;
}) {
  const { t, locale, currency, setLocale, setCurrency } = usePrefs();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const langName = locale === "en" ? t.loc.triggerLangEn : t.loc.triggerLangEs;
  const moneyLabel = currency === "USD" ? "USD $" : "ARS $";

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!open) return;

    const margin = 16;
    const gap = 8;

    function place() {
      const root = rootRef.current;
      const menu = menuRef.current;
      if (!root || !menu) return;

      const trigger = root.querySelector("[aria-haspopup='dialog']");
      if (!(trigger instanceof HTMLElement)) return;

      const rect = trigger.getBoundingClientRect();
      const visual = window.visualViewport;
      const viewport = visual?.width ?? document.documentElement.clientWidth;
      const origin = visual?.offsetLeft ?? 0;
      const available = Math.max(200, viewport - margin * 2);
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const width = isMobile ? available : Math.min(296, available);
      let left = align === "right" ? rect.right - width : rect.left;
      left = Math.min(
        Math.max(left, origin + margin),
        origin + viewport - margin - width,
      );

      menu.style.position = "fixed";
      menu.style.top = `${rect.bottom + gap}px`;
      menu.style.left = `${left}px`;
      menu.style.right = "auto";
      menu.style.width = `${width}px`;
      menu.style.maxWidth = `${available}px`;
    }

    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    window.visualViewport?.addEventListener("resize", place);
    window.visualViewport?.addEventListener("scroll", place);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
      window.visualViewport?.removeEventListener("resize", place);
      window.visualViewport?.removeEventListener("scroll", place);
    };
  }, [open, align]);

  function chooseLocale(next: Locale) {
    setLocale(next);
  }

  function chooseMarket(next: Currency) {
    setCurrency(next);
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t.loc.open}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-line bg-bg/40 font-semibold leading-tight text-ink transition hover:border-ink/40 ${
          compactOnMobile
            ? "h-12 w-12 px-0 md:h-auto md:w-auto md:max-w-none md:px-3 md:py-2 md:text-xs"
            : "max-w-[11.5rem] px-3 py-2 text-left text-[11px] sm:max-w-none sm:text-xs"
        }`}
      >
        <GlobeIcon />
        <span
          className={`min-w-0 truncate ${
            compactOnMobile ? "hidden md:inline" : ""
          }`}
        >
          {langName} · {moneyLabel}
        </span>
      </button>

      {open ? (
        <div
          ref={menuRef}
          id={menuId}
          role="dialog"
          aria-label={t.loc.open}
          className="absolute top-[calc(100%+8px)] z-50 w-[min(18.5rem,calc(100vw-2rem))] rounded-2xl border border-line bg-bg-elevated p-3 shadow-[var(--shadow)]"
        >
          <p className="px-2 pb-2 text-[10px] font-black uppercase tracking-[0.18em] text-ink-muted">
            {t.loc.language}
          </p>
          <div className="grid gap-1">
            <Choice
              selected={locale === "es"}
              title={t.loc.spanish}
              onClick={() => chooseLocale("es")}
            />
            <Choice
              selected={locale === "en"}
              title={t.loc.english}
              onClick={() => chooseLocale("en")}
            />
          </div>

          <p className="mt-4 px-2 pb-2 text-[10px] font-black uppercase tracking-[0.18em] text-ink-muted">
            {t.loc.payIn}
          </p>
          <div className="grid gap-1">
            <Choice
              selected={currency === "ARS"}
              title={t.loc.argentina}
              hint={t.loc.argentinaHint}
              onClick={() => chooseMarket("ARS")}
            />
            <Choice
              selected={currency === "USD"}
              title={t.loc.international}
              hint={t.loc.internationalHint}
              onClick={() => chooseMarket("USD")}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Choice({
  selected,
  title,
  hint,
  onClick,
}: {
  selected: boolean;
  title: string;
  hint?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-3 py-2.5 text-left transition ${
        selected
          ? "bg-duck/15 text-ink"
          : "text-ink-muted hover:bg-bg/60 hover:text-ink"
      }`}
    >
      <span className="flex items-start justify-between gap-3">
        <span>
          <span className="block text-sm font-semibold text-ink">{title}</span>
          {hint ? (
            <span className="mt-0.5 block text-xs text-ink-muted">{hint}</span>
          ) : null}
        </span>
        {selected ? (
          <span className="mt-0.5 text-duck" aria-hidden>
            ✓
          </span>
        ) : null}
      </span>
    </button>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-water-bright"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 3.5 6 3.5 9s-1 6-3.5 9c-2.5-3-3.5-6-3.5-9s1-6 3.5-9z" />
    </svg>
  );
}
