/** Persona visual provisional del pato hasta la asignación real (48 hs antes). */

import type { Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/messages";

const NAMES: Record<Locale, readonly string[]> = {
  es: [
    "Relámpago",
    "Cuacktor",
    "Naranja Mecánica",
    "Dique Dash",
    "Gardelito",
    "Pico Veloz",
    "Marea Amarilla",
    "Turbo Cuac",
    "Puerto Flash",
    "Solidario",
    "Splash",
  ],
  en: [
    "Lightning",
    "Cuacktor",
    "Clockwork Orange",
    "Dock Dash",
    "Gardelito",
    "Fast Beak",
    "Yellow Tide",
    "Turbo Quack",
    "Port Flash",
    "Good Cause",
    "Splash",
  ],
};

const TRAITS: Record<Locale, readonly string[]> = {
  es: [
    "Sale como bólido en la largada",
    "Nada con estilo porteño",
    "Especialista en curvas del dique",
    "Motivado por la causa solidaria",
    "Le gusta la foto finish",
    "Corre con la hinchada en la cabeza",
  ],
  en: [
    "Explodes off the start line",
    "Swims with Buenos Aires swagger",
    "A specialist in dock corners",
    "Fueled by the cause",
    "Lives for the photo finish",
    "Races with the crowd in its head",
  ],
};

const ACCENTS = [
  "#f5c518",
  "#3ec9e0",
  "#ff5a45",
  "#e8f6f4",
  "#1aa6c1",
  "#e0a800",
] as const;

function hashCode(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

export type DuckPersona = {
  displayName: string;
  bib: string;
  trait: string;
  accent: string;
  assigned: false;
  statusLabel: string;
};

export function getDuckPersona(
  ticketCode: string,
  locale: Locale = "es",
): DuckPersona {
  const h = hashCode(ticketCode.toUpperCase());
  const names = NAMES[locale];
  const traits = TRAITS[locale];
  const name = names[h % names.length];
  const trait = traits[(h >>> 8) % traits.length];
  const accent = ACCENTS[(h >>> 16) % ACCENTS.length];
  const bib = String(100 + (h % 900)).padStart(3, "0");

  return {
    displayName: name,
    bib,
    trait,
    accent,
    assigned: false,
    statusLabel: dictionaries[locale].duck.statusLabel,
  };
}
