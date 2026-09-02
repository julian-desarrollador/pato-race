import { basesDocument } from "@/lib/legal/bases-2026";
import { cookiesDocument } from "@/lib/legal/cookies";
import { returnsDocument } from "@/lib/legal/devoluciones";
import { privacyDocument } from "@/lib/legal/privacidad";
import { regretDocument } from "@/lib/legal/arrepentimiento";
import { termsDocument } from "@/lib/legal/terminos-2026";
import type { LegalDocument } from "@/lib/legal/types";
import type { LegalSlug } from "@/lib/site-pages";

export function legalDocument(slug: LegalSlug): LegalDocument | null {
  switch (slug) {
    case "bases":
      return basesDocument;
    case "terminos":
      return termsDocument;
    case "privacidad":
      return privacyDocument;
    case "cookies":
      return cookiesDocument;
    case "arrepentimiento":
      return regretDocument;
    case "devoluciones":
      return returnsDocument;
    default:
      return null;
  }
}
