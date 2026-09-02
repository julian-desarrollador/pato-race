import type { Messages } from "@/lib/i18n/messages";

export const LEGAL_SLUGS = [
  "terminos",
  "privacidad",
  "cookies",
  "bases",
  "devoluciones",
  "arrepentimiento",
] as const;

export type LegalSlug = (typeof LEGAL_SLUGS)[number];

export function isLegalSlug(value: string): value is LegalSlug {
  return (LEGAL_SLUGS as readonly string[]).includes(value);
}

export function legalTitle(t: Messages, slug: LegalSlug): string {
  const map: Record<LegalSlug, string> = {
    terminos: t.legal.terms,
    privacidad: t.legal.privacy,
    cookies: t.legal.cookies,
    bases: t.legal.rules,
    devoluciones: t.legal.returns,
    arrepentimiento: t.legal.regret,
  };
  return map[slug];
}

export const MERCH_SLUGS = ["remeras", "gorras", "stickers"] as const;
export type MerchSlug = (typeof MERCH_SLUGS)[number];

export function isMerchSlug(value: string): value is MerchSlug {
  return (MERCH_SLUGS as readonly string[]).includes(value);
}

export function merchTitle(t: Messages, slug: MerchSlug): string {
  const map: Record<MerchSlug, string> = {
    remeras: t.merch.tees,
    gorras: t.merch.caps,
    stickers: t.merch.stickers,
  };
  return map[slug];
}
