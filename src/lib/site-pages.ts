import type { Messages } from "@/lib/i18n/messages";
import { MERCH_SLUGS, isMerchSlug, type MerchSlug } from "@/lib/merch-catalog";

export { MERCH_SLUGS, isMerchSlug, type MerchSlug };

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

export function merchTitle(t: Messages, slug: MerchSlug): string {
  return t.merch.items[slug].name;
}
