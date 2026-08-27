export type Locale = "es" | "en";
export type Currency = "ARS" | "USD";

export const LOCALE_COOKIE = "pato-locale";
export const CURRENCY_COOKIE = "pato-currency";

export function parseLocale(value: string | undefined | null): Locale {
  return value === "en" ? "en" : "es";
}

export function parseCurrency(value: string | undefined | null): Currency {
  return value === "USD" ? "USD" : "ARS";
}
