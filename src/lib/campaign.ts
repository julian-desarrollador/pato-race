import type { Currency } from "@/lib/i18n/config";

export const campaign = {
  name: "Pato Race",
  year: 2026,
  tagline: "La carrera de patos solidaria más grande de Argentina",
  location: "Dique 3 · Puerto Madero",
  city: "Buenos Aires",
  /** Fecha aproximada del evento (21–22 nov 2026) */
  eventDate: new Date("2026-11-21T15:00:00-03:00"),
  eventDateLabel: "21–22 de noviembre 2026",
  eventTimeLabel: "15:00 a 17:00",
  ticketPrice: Number(process.env.TICKET_PRICE ?? 10_000),
  ticketPriceUsd: Number(process.env.TICKET_PRICE_USD ?? 10),
  goalAmount: Number(process.env.GOAL_AMOUNT ?? 100_000_000),
  goalAmountUsd: Number(process.env.GOAL_AMOUNT_USD ?? 100_000),
  benefitPercent: 70,
  peoplePerDuck: "20–30",
  prizePerDuck: 500_000,
  prizePerDuckUsd: Number(process.env.PRIZE_PER_DUCK_USD ?? 500),
  races: 2,
  eventDuration: "≈ 2 horas",
  beneficiaries: [
    {
      name: "Hospital Garrahan",
      share: "50%",
      description: "Principal destino solidario de la recaudación.",
    },
    {
      name: "Fundación Gardel",
      share: "10%",
      description: "Parte del 70% destinado a beneficio social.",
    },
    {
      name: "Otras causas solidarias",
      share: "10%",
      description: "Entidad beneficiaria a anunciar por la organización.",
    },
  ],
  sponsors: [
    { name: "Sponsor Oro", tier: "oro" },
    { name: "Sponsor Plata", tier: "plata" },
    { name: "Sponsor Bronce", tier: "bronce" },
  ],
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

export function prizeAmount(currency: Currency): number {
  return currency === "USD" ? campaign.prizePerDuckUsd : campaign.prizePerDuck;
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
