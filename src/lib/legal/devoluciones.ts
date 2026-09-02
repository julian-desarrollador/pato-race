import type { LegalDocument } from "@/lib/legal/types";

/** Resumen operativo basado en Bases §§14, 24–26 y T&C §§7–8, 10. No inventa plazos ni excepciones. */
export const returnsDocument: LegalDocument = {
  kicker: "Bases y Términos",
  title: "Cambios y devoluciones",
  versionNote:
    "Esta página resume las reglas ya publicadas en las Bases y Condiciones de PATO RACE 2026 y en los Términos y Condiciones del sitio. Ante duda, prevalecen esos documentos y la legislación de defensa del consumidor aplicable.",
  articles: [
    {
      num: "1",
      title: "Participaciones",
      paragraphs: [
        "La adquisición de participaciones se rige por las Bases y Condiciones de PATO RACE 2026.",
        "Si el evento fuera reprogramado, las participaciones conservan su validez para la nueva fecha, sin perjuicio de los derechos inderogables que correspondan a los consumidores conforme la legislación aplicable. Toda modificación se comunica por los canales oficiales.",
        "Ante cancelación definitiva, se procede de acuerdo con la naturaleza jurídica de las contrataciones y la legislación de defensa del consumidor aplicable. Por tratarse de un evento solidario, se tratará de realizar en fecha posterior; eventualmente puede modificarse el lugar, informando previamente.",
        "Si por razones meteorológicas, técnicas, de seguridad, intervención de terceros, disposición de autoridad competente o fuerza mayor una carrera debiera interrumpirse antes de poder determinar un resultado válido, podrá reanudarse, repetirse o reprogramarse. No se declararán ganadores cuando no exista información suficiente para determinar válidamente el resultado.",
      ],
    },
    {
      num: "2",
      title: "Merchandising",
      paragraphs: [
        "Las operaciones de merchandising están sujetas a disponibilidad de stock.",
        "Si luego de una contratación se verificara excepcionalmente la inexistencia del producto adquirido, se ofrecerán las alternativas legalmente correspondientes, incluyendo cuando proceda la devolución del importe abonado.",
        "Las fotografías del catálogo pueden ser ilustrativas; el producto entregado deberá responder sustancialmente a las características ofrecidas.",
        "El retiro en el evento y, si se habilita, el envío a domicilio con sus costos, se informan en la ficha del producto antes de pagar.",
      ],
    },
    {
      num: "3",
      title: "Derecho de arrepentimiento",
      paragraphs: [
        "En las contrataciones a distancia aplica el derecho de revocación cuando legalmente corresponda, conforme la Ley 24.240, el Código Civil y Comercial y normativa complementaria.",
        "El sitio dispone, desde el primer acceso y de manera visible, del enlace Botón de arrepentimiento, con el procedimiento para ejercer el derecho cuando corresponda.",
      ],
    },
    {
      num: "4",
      title: "Cómo contactarnos",
      paragraphs: [
        "Para trámites de cambios, devoluciones o arrepentimiento cuando corresponda, escribinos a patorace.solidario@gmail.com indicando tu nombre, DNI, email de compra y número de ticket o comprobante.",
        "La Organización responderá por el mismo canal para coordinar el trámite conforme la normativa aplicable y la documentación contractual correspondiente.",
      ],
    },
  ],
};
