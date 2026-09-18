import type { Currency } from "@/lib/i18n/config";

export const campaign = {
  name: "Pato Race",
  year: 2026,
  tagline: "La carrera solidaria de patos más grande de Argentina",
  location: "Dique 3 · Puerto Madero",
  city: "Buenos Aires",
  eventDate: new Date("2026-11-22T19:00:00-03:00"),
  eventDateLabel: "22 de noviembre 2026",
  eventTimeLabel: "Apertura 19:00 · Carrera + experiencia en vivo",
  ticketPrice: Number(process.env.TICKET_PRICE ?? 10_000),
  ticketPriceUsd: Number(process.env.TICKET_PRICE_USD ?? 12),
  /** Meta interna para la barra de progreso; no se muestra en $ en EN VIVO. */
  goalAmount: Number(process.env.GOAL_AMOUNT ?? 100_000_000),
  goalAmountUsd: Number(process.env.GOAL_AMOUNT_USD ?? 100_000),
  benefitPercent: 70,
  opsPercent: 30,
  prizePercent: 2,
  races: 2,
  eventDuration: "≈ 2 horas",
  salesOpenNote: "Aprox. 20/09/2026 — fecha exacta pendiente",
  salesCloseLabel: "22 de noviembre de 2026 a las 19:00",
  sponsors: [{ name: "Alianza" }, { name: "Alianza" }, { name: "Alianza" }, { name: "Alianza" }, { name: "Alianza" }, { name: "Alianza" }],
  organizer: "PATO RACE SOLIDARIO S.R.L.",
  organizers: "Rocío Bustamante y Luis Ortiz",
  contactEmail: "patorace.solidario@gmail.com",
  cuit: "30-71952790-2",
  address: "Juncal 2061, piso 9° A, Ciudad Autónoma de Buenos Aires",
} as const;

/** ARS por 1 USD para unificar el tablero en vivo. */
export const usdToArs = Number(
  process.env.USD_TO_ARS ??
    (campaign.ticketPriceUsd > 0
      ? campaign.ticketPrice / campaign.ticketPriceUsd
      : 1000),
);

export function ticketAmount(currency: Currency): number {
  return currency === "USD" ? campaign.ticketPriceUsd : campaign.ticketPrice;
}

export function goalAmount(currency: Currency): number {
  return currency === "USD" ? campaign.goalAmountUsd : campaign.goalAmount;
}

export function toArs(amount: number, currency: Currency): number {
  return currency === "USD" ? amount * usdToArs : amount;
}

export function fromArs(amountArs: number, currency: Currency): number {
  if (currency !== "USD") return amountArs;
  return usdToArs > 0 ? Math.round(amountArs / usdToArs) : amountArs;
}

export function formatMoney(amount: number, currency: Currency): string {
  const locale = currency === "USD" ? "en-US" : "es-AR";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatARS(amount: number): string {
  return formatMoney(amount, "ARS");
}
