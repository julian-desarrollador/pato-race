"use client";

import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { usePrefs } from "@/components/locale-provider";
import { faqAllItems } from "@/lib/i18n/messages";

export function FaqPageView() {
  const { t } = usePrefs();

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <Link
        href="/#faq"
        className="text-sm text-ink-muted transition hover:text-ink"
      >
        {t.participar.back}
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-6xl">
        {t.faq.pageTitle}
      </h1>
      <p className="mt-4 max-w-xl text-ink-muted">{t.faq.pageLead}</p>
      <FaqAccordion items={faqAllItems(t)} />
    </div>
  );
}
