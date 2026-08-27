import type { Locale } from "@/lib/i18n/config";

export type Messages = {
  nav: {
    what: string;
    sponsors: string;
    benefit: string;
    how: string;
    account: string;
    login: string;
    loginShort: string;
    adoptLine1: string;
    adoptLine2: string;
  };
  loc: {
    open: string;
    language: string;
    spanish: string;
    english: string;
    payIn: string;
    argentina: string;
    argentinaHint: string;
    international: string;
    internationalHint: string;
    triggerLangEs: string;
    triggerLangEn: string;
  };
  footer: {
    event: string;
    note: string;
  };
  hero: {
    city: string;
    dateTime: string;
    date: string;
    tagline: string;
    adopt: string;
    how: string;
    duckAlt: string;
    solidary: string;
    racesLine: string;
    remaining: string;
    countdownDays: string;
    countdownHours: string;
    countdownMin: string;
    countdownSec: string;
    time: string;
    quack: string;
  };
  live: {
    title: string;
    subtitle: string;
    goal: string;
    raised: string;
    start: string;
    toGoal: string;
    goalEnd: string;
    ducks: string;
    progress: string;
    publicNote: string;
  };
  queEs: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    p1: string;
    p2: string;
    p3: string;
    racesLabel: string;
    racesDetail: string;
    peopleLabel: string;
    peopleDetail: string;
    prizeLabel: string;
    prizeDetail: string;
  };
  sponsors: {
    kicker: string;
    title: string;
    intro: string;
    body: string;
    gold: string;
    silver: string;
    bronze: string;
  };
  impacto: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    lead: string;
    lineGarrahan: string;
    lineGardel: string;
    lineOther: string;
    costs: string;
    descGarrahan: string;
    descGardel: string;
    descOther: string;
    otherName: string;
    goalTitle: string;
    goalBody: string;
  };
  como: {
    kicker: string;
    title: string;
    s1t: string;
    s1b: string;
    s2t: string;
    s2b: string;
    s3t: string;
    s3b: string;
    s4t: string;
    s4b: string;
  };
  faq: {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  finalCta: {
    title: string;
    body: string;
    button: string;
  };
  participar: {
    back: string;
    titleBefore: string;
    titleAccent: string;
    lead: string;
    cardTitle: string;
    cardBody: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    payFail: string;
    benefitTitle: string;
    benefitBody: string;
    payNote: string;
    payUsdNote: string;
    submit: string;
    submitting: string;
    name: string;
    dni: string;
    email: string;
    phone: string;
  };
  perfil: {
    kicker: string;
    title: string;
    lead: string;
    b1: string;
    b2: string;
    b3: string;
    notYet: string;
    adopt: string;
    enter: string;
    twoWays: string;
    login: string;
    ticket: string;
    loginHelp: string;
    name: string;
    email: string;
    password: string;
    emailPlaceholder: string;
    demo: string;
    enterAccount: string;
    entering: string;
    ticketHelp: string;
    ticketNumber: string;
    registerEmail: string;
    seeTicket: string;
    searching: string;
    continueSaved: string;
    accountKicker: string;
    hello: string;
    logout: string;
    myDucks: string;
    zeroDucks: string;
    oneDuck: string;
    manyDucks: string;
    webhookNote: string;
    loading: string;
    howTitle: string;
    how1: string;
    how2: string;
    how3: string;
    how4: string;
    event: string;
    duckN: string;
    seeTicketLink: string;
    adoptAnother: string;
    guestName: string;
  };
  errors: {
    connection: string;
    checkoutStart: string;
    name: string;
    dni: string;
    email: string;
    phone: string;
    loginFields: string;
    lookupGeneric: string;
    lookupMissing: string;
    lookupNotFound: string;
  };
  share: {
    text: string;
    copy: string;
    copied: string;
    more: string;
  };
  print: {
    button: string;
  };
  duck: {
    statusLabel: string;
  };
  ticket: {
    active: string;
    pendingPay: string;
    intro: string;
    seeReceipt: string;
    shareCta: string;
    duckPending: string;
    yourTicket: string;
    digitalEntry: string;
    ticketNumber: string;
    participant: string;
    dni: string;
    email: string;
    phone: string;
    event: string;
    status: string;
    receiptKicker: string;
    receiptTitle: string;
    digitalProof: string;
    holder: string;
    concept: string;
    conceptValue: string;
    amount: string;
    registeredAt: string;
    lastPaymentUpdate: string;
    internalRef: string;
    mpId: string;
    demoMode: string;
    receiptLegal: string;
    viralKicker: string;
    shareTitle: string;
    shareBody: string;
    backHome: string;
    payApproved: string;
    payPending: string;
    payRejected: string;
    payCancelled: string;
  };
  meta: {
    homeTitle: string;
    homeDesc: string;
    ogDesc: string;
    participarTitle: string;
    participarDesc: string;
    perfilTitle: string;
    perfilDesc: string;
    cuentaTitle: string;
    cuentaDesc: string;
    perfilFallbackTitle: string;
    perfilOgDesc: string;
  };
};

export const es: Messages = {
  nav: {
    what: "Qué es",
    sponsors: "Sponsors",
    benefit: "Beneficio",
    how: "Cómo participar",
    account: "Mi cuenta",
    login: "Ingresar",
    loginShort: "Ingresar",
    adoptLine1: "Adoptá",
    adoptLine2: "tu pato",
  },
  loc: {
    open: "Idioma y mercado",
    language: "Idioma",
    spanish: "Español",
    english: "English",
    payIn: "Cómo pagás",
    argentina: "Argentina (ARS $)",
    argentinaHint: "Precios y cobro en pesos argentinos.",
    international: "Internacional (USD $)",
    internationalHint: "Cuenta en dólares estadounidenses.",
    triggerLangEs: "Español",
    triggerLangEn: "English",
  },
  footer: {
    event: "Evento a beneficio · Buenos Aires · Dique 3, Puerto Madero",
    note: "El 70% de lo recaudado se destina a causas solidarias. Participás con tu ticket aunque no asistas al dique.",
  },
  hero: {
    city: "Ciudad",
    dateTime: "Fecha y hora",
    date: "21–22 de noviembre 2026",
    tagline:
      "La carrera de patos solidaria más grande de Argentina. 70% a beneficio. Adoptá tu pato y sumate a la carrera del Dique 3.",
    adopt: "Adoptá tu pato",
    how: "Cómo participar",
    duckAlt: "Pato corredor con casco argentino y anteojos",
    solidary: "70% SOLIDARIO",
    racesLine: "2 carreras · ≈ 2 horas",
    remaining: "FALTA",
    countdownDays: "días",
    countdownHours: "horas",
    countdownMin: "min",
    countdownSec: "seg",
    time: "15:00 a 17:00",
    quack: "¡CUAC!",
  },
  live: {
    title: "EN VIVO",
    subtitle: "La carrera ya suma",
    goal: "Meta",
    raised: "Recaudado",
    start: "Salida",
    toGoal: "a meta",
    goalEnd: "Meta",
    ducks: "Patos adoptados",
    progress: "Avance",
    publicNote:
      "Números públicos que también pueden mostrar socios y sponsors. Actualización automática.",
  },
  queEs: {
    kicker: "¿Qué es Pato Race?",
    titleBefore: "Una carrera donde tu pato",
    titleAccent: "corre por vos",
    p1: "Pato Race es un evento solidario y masivo en el que miles de patitos participan en una carrera sobre el agua en Puerto Madero.",
    p2: "Cada persona compra una participación y recibe un número de ticket. Luego, 48 horas antes de la carrera, ese ticket se vincula al azar con un pato. Si ese pato gana, ganás junto a las demás personas a las que les tocó ese mismo pato.",
    p3: "Es una propuesta pensada para divertir, convocar y recaudar fondos para causas benéficas, permitiendo que participe gente tanto de manera presencial como a distancia.",
    racesLabel: "carreras de patos",
    racesDetail: "Dos carreras dentro de una jornada de aproximadamente dos horas.",
    peopleLabel: "personas por pato",
    peopleDetail: "Cada pato puede ser compartido por un grupo de participantes.",
    prizeLabel: "de premio",
    prizeDetail: "Si tu pato gana, el premio se reparte entre quienes lo adoptaron.",
  },
  sponsors: {
    kicker: "Sponsors",
    title: "Marcas que hacen posible la carrera",
    intro:
      "Pato Race busca sumar marcas y aliados que quieran ser parte de una experiencia única, masiva y con impacto social real.",
    body: "El aporte de los sponsors ayuda a potenciar el evento, ampliar su alcance y reducir costos de producción, permitiendo que una mayor parte de la recaudación llegue a destino.",
    gold: "Sponsor Oro",
    silver: "Sponsor Plata",
    bronze: "Sponsor Bronce",
  },
  impacto: {
    kicker: "A beneficio",
    titleBefore: "70% va a",
    titleAccent: "causas solidarias",
    lead: "El 70% de lo recaudado por Pato Race será destinado a causas solidarias.",
    lineGarrahan: "50% para el Hospital Garrahan",
    lineGardel: "10% para Fundación Gardel",
    lineOther: "10% destinado a otra causa solidaria a definir por la organización",
    costs:
      "El 30% restante cubre producción y costos del evento. El apoyo de sponsors ayuda a reducir esos costos y aumentar el impacto.",
    descGarrahan: "Principal destino solidario de la recaudación.",
    descGardel: "Parte del 70% destinado a beneficio social.",
    descOther: "Entidad beneficiaria a anunciar por la organización.",
    otherName: "Otras causas solidarias",
    goalTitle: "Meta ambiciosa",
    goalBody:
      "Objetivo de convocatoria: llegar a una audiencia masiva en el dique y online. Cada adopción suma al contador público.",
  },
  como: {
    kicker: "Cómo participar",
    title: "Simple, divertido y solidario",
    s1t: "Comprá tu participación",
    s1b: "Adoptás tu pato por {price} a través de Mercado Pago.",
    s2t: "Recibí tu ticket",
    s2b: "Te enviamos un comprobante digital con tu número único de participación.",
    s3t: "Esperá la asignación",
    s3b: "48 horas antes de la carrera, te avisamos qué pato te tocó al azar.",
    s4t: "Seguí la carrera",
    s4b: "Si tu pato resulta ganador, compartís el premio de {prize} con las demás personas asignadas a ese mismo pato.",
  },
  faq: {
    title: "Preguntas frecuentes",
    q1: "¿Puedo participar sin ir al Dique 3?",
    a1: "Sí. Podés comprar tu participación online y ser parte de la carrera desde cualquier lugar.",
    q2: "¿Cómo se asigna el pato?",
    a2: "48 horas antes de la carrera te informaremos qué pato quedó asignado a tu ticket.",
    q3: "¿Cuántas personas comparten un pato?",
    a3: "Cada pato podrá representar aproximadamente a {people} personas. Si ese pato gana, el premio de {prize} se reparte entre quienes lo adoptaron.",
    q4: "¿A dónde va el dinero?",
    a4: "El 70% de lo recaudado va a beneficio: 50% al Hospital Garrahan, 10% a Fundación Gardel y 10% a otra causa solidaria que será anunciada por la organización. El 30% restante cubre producción y costos del evento, que se reducen con el apoyo de sponsors.",
    q5: "¿Qué incluye el ticket?",
    a5: "Tu participación en la carrera, ticket digital con número único y enlace para compartir. Valor aproximado: {price}.",
  },
  finalCta: {
    title: "Sumate a la carrera solidaria más grande del país",
    body: "Adoptá tu pato, compartí tu participación y ayudanos a convertir esta carrera en una gran acción solidaria.",
    button: "Adoptá tu pato ahora",
  },
  participar: {
    back: "← Volver",
    titleBefore: "Adoptá tu",
    titleAccent: "pato",
    lead: "Registrate, pagá con Mercado Pago y recibí tu ticket digital para participar en Pato Race 2026.",
    cardTitle: "Tu aporte corre por una buena causa",
    cardBody:
      "Cuando adoptás tu pato, no solo participás de la carrera: también formás parte de una acción solidaria de gran escala.",
    bullet1: "Ticket digital con número único",
    bullet2: "Participás aunque no vayas al dique",
    bullet3: "70% a beneficio · {price}",
    payFail: "El pago no se completó. Podés intentar de nuevo.",
    benefitTitle: "70% de tu aporte va a beneficio",
    benefitBody:
      "50% al Hospital Garrahan, 10% a Fundación Gardel y 10% a otra causa solidaria que será anunciada por la organización.",
    payNote:
      "Vas a pagar {price} por Mercado Pago. Pagás online, recibís tu ticket digital y podés participar aunque no estés presente en el evento.",
    payUsdNote: "Estás pagando en dólares estadounidenses (USD).",
    submit: "Continuar al pago",
    submitting: "Redirigiendo al pago…",
    name: "Nombre y apellido",
    dni: "DNI / ID",
    email: "Email",
    phone: "Teléfono",
  },
  perfil: {
    kicker: "Área de participantes",
    title: "MI PERFIL",
    lead: "Iniciá sesión para ver tus patos, o abrí un ticket si ya adoptaste. Si todavía no participaste, tu cuenta arranca en cero y desde ahí adoptás.",
    b1: "Login para seguir tus patos en un solo lugar",
    b2: "Opción alternativa con número de ticket",
    b3: "Tras el pago confirmado, el ticket se suma a tu cuenta",
    notYet: "¿Todavía no adoptaste?",
    adopt: "Adoptá tu pato",
    enter: "Entrá",
    twoWays: "Dos caminos: cuenta o ticket.",
    login: "Iniciar sesión",
    ticket: "Tengo un ticket",
    loginHelp:
      "Entrá con tu cuenta. Si todavía no adoptaste, vas a ver 0 patos y el botón para adoptar. Cuando Mercado Pago confirme el pago, el pato y el ticket aparecen acá.",
    name: "Nombre",
    email: "Email",
    password: "Contraseña",
    emailPlaceholder: "tu@email.com",
    demo: "Demo UI: el login se guarda en este dispositivo. El backend de autenticación llega después.",
    enterAccount: "Entrar a mi cuenta",
    entering: "Entrando…",
    ticketHelp: "Si ya adoptaste y tenés el número, abrí el comprobante directo.",
    ticketNumber: "Número de ticket",
    registerEmail: "Email del registro",
    seeTicket: "Ver mi ticket",
    searching: "Buscando…",
    continueSaved: "Continuar con el ticket guardado",
    accountKicker: "Tu cuenta",
    hello: "HOLA,",
    logout: "Cerrar sesión",
    myDucks: "Mis patos",
    zeroDucks: "Todavía no tenés patos adoptados.",
    oneDuck: "Tenés 1 pato en carrera.",
    manyDucks: "Tenés {count} patos en carrera.",
    webhookNote:
      "Cuando Mercado Pago nos avise que el pago está aprobado, tu ticket y tu pato aparecen acá automáticamente.",
    loading: "Cargando tu cuenta…",
    howTitle: "Cómo funciona",
    how1: "1. Adoptás tu pato desde la app.",
    how2: "2. Pagás con Mercado Pago.",
    how3: "3. El webhook confirma el pago y te asignamos ticket + pato en esta cuenta.",
    how4: "4. Compartís tu participación y seguís la carrera.",
    event: "Evento",
    duckN: "Pato #{n}",
    seeTicketLink: "Ver ticket →",
    adoptAnother: "Adoptar otro pato",
    guestName: "Participante",
  },
  errors: {
    connection: "Error de conexión. Intentá de nuevo.",
    checkoutStart: "No se pudo iniciar el pago",
    name: "Ingresá tu nombre completo",
    dni: "DNI inválido (7 u 8 dígitos)",
    email: "Email inválido",
    phone: "Teléfono inválido",
    loginFields: "Completá email y una contraseña de al menos 4 caracteres.",
    lookupGeneric: "No se pudo abrir el perfil",
    lookupMissing: "Ingresá tu número de ticket y el email del registro.",
    lookupNotFound:
      "No encontramos ese perfil. Revisá el ticket y el email usados al adoptar.",
  },
  share: {
    text: "¡Adopté mi pato en Pato Race 2026! Ticket {ticket}. Sumate vos también:",
    copy: "Copiar enlace",
    copied: "¡Enlace copiado!",
    more: "Más opciones",
  },
  print: {
    button: "Descargar / imprimir comprobante",
  },
  duck: {
    statusLabel: "Pato en camino",
  },
  ticket: {
    active: "Participación activa",
    pendingPay: "Pago pendiente",
    intro:
      "Este es tu centro de carrera. Acá tenés tu pato, el ticket y el comprobante listo para compartir o imprimir.",
    seeReceipt: "Ver comprobante",
    shareCta: "Compartir",
    duckPending:
      "El pato oficial se confirma 48 hs antes de la carrera. Esta es tu identidad de carrera mientras tanto.",
    yourTicket: "Tu ticket",
    digitalEntry: "ENTRADA DIGITAL",
    ticketNumber: "Número de ticket",
    participant: "Participante",
    dni: "DNI",
    email: "Email",
    phone: "Teléfono",
    event: "Evento",
    status: "Estado",
    receiptKicker: "Comprobante de pago",
    receiptTitle: "RECIBO OFICIAL",
    digitalProof: "Comprobante digital de adopción solidaria",
    holder: "Titular",
    concept: "Concepto",
    conceptValue: "Adopción de pato — {name} {year}",
    amount: "Monto",
    registeredAt: "Fecha de registro",
    lastPaymentUpdate: "Última actualización de pago",
    internalRef: "Referencia interna",
    mpId: "ID Mercado Pago",
    demoMode: "Modo demo: pago simulado (sin Mercado Pago configurado).",
    receiptLegal:
      "El {percent}% de lo recaudado se destina a causas solidarias ({names}). Conservá este comprobante como constancia de tu participación. Evento: {location} · {date} · {time}.",
    viralKicker: "Viralizá la causa",
    shareTitle: "COMPARTÍ TU PERFIL",
    shareBody:
      "Mandá tu vínculo a amigos y redes. Cada adopción suma a la recaudación solidaria.",
    backHome: "Volver al inicio",
    payApproved: "Pago aprobado",
    payPending: "Pago pendiente",
    payRejected: "Pago rechazado",
    payCancelled: "Pago cancelado",
  },
  meta: {
    homeTitle: "Pato Race 2026 | Carrera de patos solidaria",
    homeDesc:
      "La carrera de patos solidaria más grande de Argentina. Dique 3, Puerto Madero. 70% a beneficio. Adoptá tu pato y participá.",
    ogDesc:
      "Carrera de patos solidaria en Puerto Madero. 70% a beneficio de Garrahan y Fundación Gardel.",
    participarTitle: "Adoptá tu pato | Pato Race 2026",
    participarDesc:
      "Registrate, pagá con Mercado Pago y recibí tu ticket digital para Pato Race 2026.",
    perfilTitle: "Mi perfil | Pato Race 2026",
    perfilDesc:
      "Iniciá sesión o abrí tu ticket de Pato Race: patos, comprobante y enlace para compartir.",
    cuentaTitle: "Mi cuenta | Pato Race 2026",
    cuentaDesc:
      "Tu cuenta de Pato Race: patos adoptados, tickets y accesos a la carrera.",
    perfilFallbackTitle: "Perfil | Pato Race",
    perfilOgDesc: "Perfil de participación de {name} en Pato Race 2026.",
  },
};

export const en: Messages = {
  nav: {
    what: "About",
    sponsors: "Sponsors",
    benefit: "The cause",
    how: "How to join",
    account: "My account",
    login: "Log in",
    loginShort: "Log in",
    adoptLine1: "Adopt",
    adoptLine2: "your duck",
  },
  loc: {
    open: "Language and market",
    language: "Language",
    spanish: "Español",
    english: "English",
    payIn: "How you pay",
    argentina: "Argentina (ARS $)",
    argentinaHint: "You'll see prices and pay in Argentine pesos.",
    international: "International (USD $)",
    internationalHint: "You'll see prices and pay in US dollars.",
    triggerLangEs: "Español",
    triggerLangEn: "English",
  },
  footer: {
    event: "Charity event · Buenos Aires · Dique 3, Puerto Madero",
    note: "70% of proceeds go to social causes. You can take part with your ticket even if you aren't at the dock.",
  },
  hero: {
    city: "City",
    dateTime: "Date & time",
    date: "November 21–22, 2026",
    tagline:
      "Argentina's biggest charity duck race. 70% goes to the causes. Adopt your duck and join the race at Dique 3.",
    adopt: "Adopt your duck",
    how: "How to join",
    duckAlt: "Racing duck in an Argentine helmet and sunglasses",
    solidary: "70% TO CHARITY",
    racesLine: "2 races · ≈ 2 hours",
    remaining: "TO GO",
    countdownDays: "days",
    countdownHours: "hours",
    countdownMin: "min",
    countdownSec: "sec",
    time: "3:00–5:00 PM",
    quack: "QUACK!",
  },
  live: {
    title: "LIVE",
    subtitle: "The totals are live",
    goal: "Goal",
    raised: "Raised",
    start: "Start",
    toGoal: "to go",
    goalEnd: "Goal",
    ducks: "Ducks adopted",
    progress: "Progress",
    publicNote:
      "These public totals are for partners and sponsors to share too. They update automatically.",
  },
  queEs: {
    kicker: "What is Pato Race?",
    titleBefore: "A race where your duck",
    titleAccent: "runs for you",
    p1: "Pato Race is a massive charity event where thousands of rubber ducks race on the water in Puerto Madero.",
    p2: "Each person buys an entry and gets a ticket number. Then, 48 hours before the race, that ticket is randomly matched to a duck. If that duck wins, you win along with everyone else assigned to the same duck.",
    p3: "It's built to be fun, bring people together, and raise money for social causes — whether you're there in person or following from afar.",
    racesLabel: "duck races",
    racesDetail: "Two races in a session of about two hours.",
    peopleLabel: "people per duck",
    peopleDetail: "Each duck can be shared by a group of participants.",
    prizeLabel: "prize",
    prizeDetail: "If your duck wins, the prize is split among everyone who adopted it.",
  },
  sponsors: {
    kicker: "Sponsors",
    title: "The brands behind the race",
    intro:
      "Pato Race is looking for brands and partners who want to join a one-of-a-kind, high-energy event with real social impact.",
    body: "Sponsor support helps grow the event, expand its reach, and lower production costs so more of the money can go to the causes.",
    gold: "Gold Sponsor",
    silver: "Silver Sponsor",
    bronze: "Bronze Sponsor",
  },
  impacto: {
    kicker: "For charity",
    titleBefore: "70% goes to",
    titleAccent: "social causes",
    lead: "70% of Pato Race proceeds will go to social causes.",
    lineGarrahan: "50% to Hospital Garrahan",
    lineGardel: "10% to Fundación Gardel",
    lineOther: "10% to another charity, to be announced by the organizers",
    costs:
      "The remaining 30% covers production and event costs. Sponsor support helps bring those costs down and grow the impact.",
    descGarrahan: "The main recipient of funds raised.",
    descGardel: "Part of the 70% going to social causes.",
    descOther: "A beneficiary to be announced by the organizers.",
    otherName: "Other social causes",
    goalTitle: "A big goal",
    goalBody:
      "We're aiming for a huge crowd at the dock and online. Every adoption adds to the public counter.",
  },
  como: {
    kicker: "How to join",
    title: "Simple, fun, and for a good cause",
    s1t: "Adopt your duck",
    s1b: "Adopt your duck for {price} through Mercado Pago.",
    s2t: "Get your ticket",
    s2b: "We send you a digital receipt with your unique entry number.",
    s3t: "Wait for your duck",
    s3b: "48 hours before the race, we'll tell you which duck you were randomly assigned.",
    s4t: "Follow the race",
    s4b: "If your duck wins, you share the {prize} prize with everyone else assigned to that duck.",
  },
  faq: {
    title: "FAQ",
    q1: "Can I take part without going to Dique 3?",
    a1: "Yes. You can buy your entry online and be part of the race from anywhere.",
    q2: "How is the duck assigned?",
    a2: "48 hours before the race, we'll let you know which duck was assigned to your ticket.",
    q3: "How many people share a duck?",
    a3: "Each duck can represent about {people} people. If that duck wins, the {prize} prize is split among those who adopted it.",
    q4: "Where does the money go?",
    a4: "70% of proceeds go to the causes: 50% to Hospital Garrahan, 10% to Fundación Gardel, and 10% to another charity to be announced. The remaining 30% covers production and event costs, which sponsors help bring down.",
    q5: "What's included in the ticket?",
    a5: "Your place in the race, a digital ticket with a unique number, and a link to share. Approximate value: {price}.",
  },
  finalCta: {
    title: "Join the country's biggest charity duck race",
    body: "Adopt your duck, share your entry, and help turn this race into a major fundraiser.",
    button: "Adopt your duck now",
  },
  participar: {
    back: "← Back",
    titleBefore: "Adopt your",
    titleAccent: "duck",
    lead: "Sign up, pay with Mercado Pago, and get your digital ticket for Pato Race 2026.",
    cardTitle: "Your duck races for a good cause",
    cardBody:
      "When you adopt your duck, you're not just in the race — you're part of a large-scale charity campaign.",
    bullet1: "Digital ticket with a unique number",
    bullet2: "You can take part even if you aren't at the dock",
    bullet3: "70% to the causes · {price}",
    payFail: "The payment didn't go through. You can try again.",
    benefitTitle: "70% of what you give goes to the causes",
    benefitBody:
      "50% to Hospital Garrahan, 10% to Fundación Gardel, and 10% to another charity to be announced by the organizers.",
    payNote:
      "You'll pay {price} through Mercado Pago. You pay online, get your digital ticket, and can take part even if you aren't at the event.",
    payUsdNote: "You'll be charged in US dollars (USD).",
    submit: "Continue to payment",
    submitting: "Taking you to payment…",
    name: "Full name",
    dni: "ID number",
    email: "Email",
    phone: "Phone",
  },
  perfil: {
    kicker: "For participants",
    title: "MY PROFILE",
    lead: "Log in to see your ducks, or open a ticket if you've already adopted. If you haven't joined yet, your account starts at zero — you adopt from there.",
    b1: "Log in to keep all your ducks in one place",
    b2: "Or look up your ticket number",
    b3: "Once payment is confirmed, the ticket is added to your account",
    notYet: "Haven't adopted yet?",
    adopt: "Adopt your duck",
    enter: "Sign in",
    twoWays: "Two ways in: account or ticket.",
    login: "Log in",
    ticket: "I have a ticket",
    loginHelp:
      "Log in with your account. If you haven't adopted yet, you'll see 0 ducks and a button to adopt. When Mercado Pago confirms payment, your duck and ticket show up here.",
    name: "Name",
    email: "Email",
    password: "Password",
    emailPlaceholder: "you@email.com",
    demo: "Demo only: your login stays on this device. Full sign-in comes later.",
    enterAccount: "Go to my account",
    entering: "Signing in…",
    ticketHelp: "If you've already adopted and have the number, open the receipt directly.",
    ticketNumber: "Ticket number",
    registerEmail: "Email used at checkout",
    seeTicket: "View my ticket",
    searching: "Searching…",
    continueSaved: "Continue with saved ticket",
    accountKicker: "Your account",
    hello: "HI,",
    logout: "Log out",
    myDucks: "My ducks",
    zeroDucks: "You don't have any adopted ducks yet.",
    oneDuck: "You have 1 duck in the race.",
    manyDucks: "You have {count} ducks in the race.",
    webhookNote:
      "When Mercado Pago confirms your payment, your ticket and duck appear here automatically.",
    loading: "Loading your account…",
    howTitle: "How it works",
    how1: "1. Adopt your duck in the app.",
    how2: "2. Pay with Mercado Pago.",
    how3: "3. Once payment is confirmed, we add a ticket and a duck to this account.",
    how4: "4. Share your entry and follow the race.",
    event: "Event",
    duckN: "Duck #{n}",
    seeTicketLink: "View ticket →",
    adoptAnother: "Adopt another duck",
    guestName: "Racer",
  },
  errors: {
    connection: "Connection error. Please try again.",
    checkoutStart: "We couldn't start checkout",
    name: "Enter your full name",
    dni: "Invalid ID number (7 or 8 digits)",
    email: "Invalid email",
    phone: "Invalid phone number",
    loginFields: "Enter an email and a password of at least 4 characters.",
    lookupGeneric: "We couldn't open that profile",
    lookupMissing: "Enter your ticket number and the email you used to register.",
    lookupNotFound:
      "We couldn't find that profile. Check the ticket and email you used when you adopted.",
  },
  share: {
    text: "I adopted my duck in Pato Race 2026! Ticket {ticket}. Come join us:",
    copy: "Copy link",
    copied: "Link copied!",
    more: "More options",
  },
  print: {
    button: "Download / print receipt",
  },
  duck: {
    statusLabel: "Duck on the way",
  },
  ticket: {
    active: "You're in the race",
    pendingPay: "Payment pending",
    intro:
      "This is your race hub. Your duck, ticket, and receipt are here — ready to share or print.",
    seeReceipt: "View receipt",
    shareCta: "Share",
    duckPending:
      "Your official duck is confirmed 48 hours before the race. This is your race identity until then.",
    yourTicket: "Your ticket",
    digitalEntry: "DIGITAL ENTRY",
    ticketNumber: "Ticket number",
    participant: "Participant",
    dni: "ID",
    email: "Email",
    phone: "Phone",
    event: "Event",
    status: "Status",
    receiptKicker: "Payment receipt",
    receiptTitle: "OFFICIAL RECEIPT",
    digitalProof: "Digital receipt for your charity adoption",
    holder: "Name",
    concept: "Description",
    conceptValue: "Duck adoption — {name} {year}",
    amount: "Amount",
    registeredAt: "Registered",
    lastPaymentUpdate: "Last payment update",
    internalRef: "Internal reference",
    mpId: "Mercado Pago ID",
    demoMode: "Demo mode: simulated payment (Mercado Pago is not configured).",
    receiptLegal:
      "{percent}% of proceeds go to social causes ({names}). Keep this receipt as proof of your entry. Event: {location} · {date} · {time}.",
    viralKicker: "Spread the word",
    shareTitle: "SHARE YOUR PROFILE",
    shareBody:
      "Send your link to friends and socials. Every adoption adds to the funds raised.",
    backHome: "Back to home",
    payApproved: "Payment approved",
    payPending: "Payment pending",
    payRejected: "Payment declined",
    payCancelled: "Payment cancelled",
  },
  meta: {
    homeTitle: "Pato Race 2026 | Charity duck race",
    homeDesc:
      "Argentina's biggest charity duck race. Dique 3, Puerto Madero. 70% to the causes. Adopt your duck and join in.",
    ogDesc:
      "Charity duck race in Puerto Madero. 70% to Garrahan and Fundación Gardel.",
    participarTitle: "Adopt your duck | Pato Race 2026",
    participarDesc:
      "Sign up, pay with Mercado Pago, and get your digital ticket for Pato Race 2026.",
    perfilTitle: "My profile | Pato Race 2026",
    perfilDesc:
      "Log in or open your Pato Race ticket: ducks, receipt, and a link to share.",
    cuentaTitle: "My account | Pato Race 2026",
    cuentaDesc:
      "Your Pato Race account: adopted ducks, tickets, and race access.",
    perfilFallbackTitle: "Profile | Pato Race",
    perfilOgDesc: "{name}'s Pato Race 2026 entry profile.",
  },
};

export const dictionaries: Record<Locale, Messages> = { es, en };

export function interpolate(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
}
