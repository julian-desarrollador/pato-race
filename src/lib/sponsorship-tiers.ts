import type { Locale } from "@/lib/i18n/config";

export type SponsorshipTier = {
  id: "nido" | "oleada" | "corriente" | "gota";
  name: string;
  priceUsd: number;
  role: string;
  perks: string[];
};

const es: SponsorshipTier[] = [
  {
    id: "nido",
    name: "Nido",
    priceUsd: 20_000,
    role: "Exclusivo total",
    perks: [
      "Logo en el Puente de la Mujer y pantallas LED 10x6m (a confirmar)",
      "Naming del área VIP del evento",
      "10% del monto sponsoreado en patos personalizados corriendo",
      "Presencia en toda la comunicación digital",
      "Stand de activación (a confirmar)",
      "Video branded 60 seg producción premium",
      "Entradas al post evento +7",
      "6 invitados VIP con experiencia completa",
    ],
  },
  {
    id: "oleada",
    name: "Oleada",
    priceUsd: 10_000,
    role: "Sponsor destacado",
    perks: [
      "Señalética del área VIP con tu logo",
      "Tu producto en el catering VIP",
      "10% del monto sponsoreado en patos personalizados corriendo",
      "Stand de activación 12m² (a confirmar)",
      "Video testimonial 60 seg zona VIP + logo en pantallas LED apertura y cierre",
      "Entradas al post evento + 4",
      "Agradecimiento especial del artista",
      "4 invitados VIP con experiencia completa",
    ],
  },
  {
    id: "corriente",
    name: "Corriente",
    priceUsd: 4_000,
    role: "Sponsor activo",
    perks: [
      "10% del monto sponsoreado en patos personalizados corriendo",
      "Logo en pantallas LED en rotación",
      "6 piezas de contenido branded",
      "2 invitados VIP",
      "Informe ESG de 2 páginas",
      "Derecho a usar el logo del evento 3 meses",
      "Certificado de impacto para tu reporte",
    ],
  },
  {
    id: "gota",
    name: "Gota",
    priceUsd: 2_000,
    role: "Sponsor de la causa",
    perks: [
      "Mención como Sponsor de la Causa",
      "Video 45 seg de la ONG con tu logo",
      "Presencia en dashboard público de impacto",
      "Derecho a usar el logo del evento 1 mes",
      "10% del monto sponsoreado en patos personalizados corriendo",
    ],
  },
];

const en: SponsorshipTier[] = [
  {
    id: "nido",
    name: "Nido",
    priceUsd: 20_000,
    role: "Full exclusive",
    perks: [
      "Logo on the Puente de la Mujer and 10x6m LED screens (to confirm)",
      "Naming of the event VIP area",
      "10% of the sponsored amount in custom ducks on the water",
      "Presence across digital communications",
      "Activation stand (to confirm)",
      "60-second branded video, premium production",
      "After-party tickets +7",
      "6 VIP guests with the full experience",
    ],
  },
  {
    id: "oleada",
    name: "Oleada",
    priceUsd: 10_000,
    role: "Featured sponsor",
    perks: [
      "VIP-area signage with your logo",
      "Your product in the VIP catering",
      "10% of the sponsored amount in custom ducks on the water",
      "12m² activation stand (to confirm)",
      "60-second VIP testimonial + logo on LED screens at open and close",
      "After-party tickets + 4",
      "A special thank-you from the artist",
      "4 VIP guests with the full experience",
    ],
  },
  {
    id: "corriente",
    name: "Corriente",
    priceUsd: 4_000,
    role: "Active sponsor",
    perks: [
      "10% of the sponsored amount in custom ducks on the water",
      "Logo on LED screens in rotation",
      "6 branded content pieces",
      "2 VIP guests",
      "2-page ESG report",
      "Right to use the event logo for 3 months",
      "Impact certificate for your report",
    ],
  },
  {
    id: "gota",
    name: "Gota",
    priceUsd: 2_000,
    role: "Cause sponsor",
    perks: [
      "Mentioned as Cause Sponsor",
      "45-second NGO video with your logo",
      "Presence on the public impact dashboard",
      "Right to use the event logo for 1 month",
      "10% of the sponsored amount in custom ducks on the water",
    ],
  },
];

export const sponsorshipTiers: Record<Locale, SponsorshipTier[]> = { es, en };

export function formatTierPrice(amount: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "es-AR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
