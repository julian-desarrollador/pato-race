import type { LegalDocument } from "@/lib/legal/types";

export const privacyDocument: LegalDocument = {
  kicker: "Ley 25.326",
  title: "Datos personales",
  versionNote: "Según los Términos y condiciones del sitio enviados por la Organización.",
  articles: [
    {
      num: "1",
      title: "Responsable",
      paragraphs: [
        "El responsable del tratamiento es PATO RACE SOLIDARIO S.R.L., CUIT 30-71952790-2, domicilio Juncal 2061, piso 9° A, Ciudad Autónoma de Buenos Aires, correo electrónico patorace.solidario@gmail.com.",
      ],
    },
    {
      num: "2",
      title: "Finalidades",
      paragraphs: [
        "Los datos personales serán utilizados exclusivamente para las finalidades informadas, incluyendo gestión de compras, participaciones, entrega de productos, comunicaciones operativas y atención de consultas.",
      ],
    },
    {
      num: "3",
      title: "Marketing",
      paragraphs: [
        "Cuando se pretenda utilizar los datos para marketing, se solicitará un consentimiento independiente, no obligatorio para comprar.",
      ],
    },
    {
      num: "4",
      title: "Derechos",
      paragraphs: [
        "La Ley 25.326 reconoce, entre otros, derechos de acceso, rectificación, actualización y supresión de los datos personales. Para ejercerlos, escribinos a patorace.solidario@gmail.com.",
      ],
    },
  ],
};
