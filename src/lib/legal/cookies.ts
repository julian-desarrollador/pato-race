import type { LegalDocument } from "@/lib/legal/types";

export const cookiesDocument: LegalDocument = {
  kicker: "Cookies técnicas",
  title: "Cookies",
  versionNote:
    "Este sitio no usa cookies de publicidad, analítica ni remarketing. Si en el futuro se agregan Meta Pixel, Google Analytics u otras no esenciales, se implementará un gestor de consentimiento real.",
  articles: [
    {
      num: "1",
      title: "Qué usamos",
      paragraphs: [
        "Solo cookies técnicamente necesarias para recordar tu idioma y el mercado de pago (pesos o dólares) durante tu visita.",
      ],
    },
    {
      num: "2",
      title: "Qué no usamos",
      paragraphs: [
        "No hay Meta Pixel, Google Analytics, remarketing ni otras cookies no esenciales. Por eso no mostramos un banner de “aceptar todas / rechazar”.",
      ],
    },
    {
      num: "3",
      title: "Consultas",
      paragraphs: ["Escribinos a patorace.solidario@gmail.com."],
    },
  ],
};
