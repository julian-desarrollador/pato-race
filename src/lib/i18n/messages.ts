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
    event: string;
    merch: string;
    questions: string;
    contact: string;
    menu: string;
    close: string;
    regret: string;
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
    brandCol: string;
    infoCol: string;
    legalCol: string;
    contactCol: string;
    copyright: string;
    organizer: string;
    people: string;
    taxId: string;
    address: string;
    hoursNeed: string;
    email: string;
  };
  sticky: {
    adopt: string;
  };
  fill: {
    badge: string;
    video: string;
    videoHint: string;
    logo: string;
    logoHint: string;
    deck: string;
    deckHint: string;
    artist: string;
    artistHint: string;
    photo: string;
    photoHint: string;
    map: string;
    mapHint: string;
    legal: string;
    legalHint: string;
    cuit: string;
    cuitHint: string;
  };
  hero: {
    city: string;
    dateTime: string;
    date: string;
    tagline: string;
    lead: string;
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
    venue: string;
    anywhere: string;
    priceContext: string;
    adoptionsOpen: string;
  };
  live: {
    title: string;
    subtitle: string;
    raised: string;
    start: string;
    ducks: string;
    ofGoal: string;
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
    adoptLabel: string;
    adoptDetail: string;
    shareLabel: string;
    shareDetail: string;
    prizeLabel: string;
    prizeDetail: string;
  };
  sponsors: {
    kicker: string;
    title: string;
    intro: string;
    body: string;
    placeholder: string;
    cta: string;
    pageTitle: string;
    pageLead: string;
    formTitle: string;
    formBody: string;
  };
  impacto: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    lead: string;
    share: string;
    shareTitle: string;
    shareBody: string;
    prizes: string;
    costs: string;
    ops: string;
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
  remote: {
    kicker: string;
    title: string;
    body: string;
  };
  video: {
    kicker: string;
    title: string;
  };
  experience: {
    kicker: string;
    title: string;
    race: string;
    twoRaces: string;
    music: string;
    dj: string;
  };
  transparency: {
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
  merch: {
    kicker: string;
    title: string;
    lead: string;
    limited: string;
    pickup: string;
    shipping: string;
    pageTitle: string;
    pageLead: string;
    tees: string;
    caps: string;
    stickers: string;
    coming: string;
  };
  where: {
    kicker: string;
    title: string;
    body: string;
  };
  contactBlock: {
    kicker: string;
    title: string;
    body: string;
  };
  legal: {
    draft: string;
    officialEs: string;
    body: string;
    terms: string;
    privacy: string;
    cookies: string;
    rules: string;
    returns: string;
    regret: string;
  };
  faq: {
    title: string;
    seeAll: string;
    pageTitle: string;
    pageLead: string;
    home: {
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
      q6: string;
      a6: string;
      q7: string;
      a7: string;
      q8: string;
      a8: string;
    };
    extra: {
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
      q6: string;
      a6: string;
      q7: string;
      a7: string;
      q8: string;
      a8: string;
      q9: string;
      a9: string;
      q10: string;
      a10: string;
    };
  };
  finalCta: {
    title: string;
    body: string;
    motto: string;
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
    acceptBases: string;
    acceptBasesLink: string;
    ageConfirm: string;
    marketing: string;
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
    acceptedBases: string;
    ageConfirmed: string;
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
    instagram: string;
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
    doneTitle: string;
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
    faqTitle: string;
    faqDesc: string;
    sponsorsTitle: string;
    sponsorsDesc: string;
    merchTitle: string;
    merchDesc: string;
    legalTitle: string;
    contactTitle: string;
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
    event: "Evento",
    merch: "Merch",
    questions: "Preguntas",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
    regret: "Botón de arrepentimiento",
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
    event: "A beneficio · Buenos Aires · Dique 3, Puerto Madero",
    note: "El 70% de lo recaudado por las participaciones se destina a causas con impacto social. Participás aunque no asistas al dique.",
    brandCol: "El evento",
    infoCol: "Información",
    legalCol: "Legal",
    contactCol: "Contacto",
    copyright: "© 2026 Pato Race. Todos los derechos reservados.",
    organizer: "Evento producido por PATO RACE SOLIDARIO S.R.L.",
    people: "Rocío Bustamante y Luis Ortiz",
    taxId: "CUIT 30-71952790-2",
    address: "Juncal 2061, piso 9° A, CABA",
    hoursNeed: "Horario del evento provisorio: confirmar apertura 19:00",
    email: "patorace.solidario@gmail.com",
  },
  sticky: {
    adopt: "Adoptá tu pato",
  },
  fill: {
    badge: "Falta material",
    video: "Falta teaser 15–25 s",
    videoHint: "Enviar el video para el primer tercio de la home.",
    logo: "Falta logo de marca",
    logoHint: "Enviar logos de sponsors (PNG o SVG, fondo transparente).",
    deck: "Falta Partner Deck",
    deckHint: "Enviar PDF o link del deck para descargar acá.",
    artist: "Falta nombre",
    artistHint: "Enviar artistas / DJ / gente de la franja.",
    photo: "Falta foto de producto",
    photoHint: "Enviar fotos de remeras, gorras y stickers.",
    map: "Falta mapa / cómo llegar",
    mapHint: "Enviar mapa, pin o indicaciones al Dique 3.",
    legal: "Falta texto final",
    legalHint: "Estructura lista. Pegar T&C, bases y políticas cuando estén.",
    cuit: "Falta CUIT / razón social",
    cuitHint: "Enviar CUIT y datos fiscales para el pie.",
  },
  hero: {
    city: "Ciudad",
    dateTime: "Fecha y hora",
    date: "22 de noviembre 2026",
    tagline: "La carrera solidaria de patos más grande de Argentina.",
    lead: "Miles de patos. Una carrera sobre el agua. Una experiencia en Puerto Madero. 70% destinado a causas con impacto social.",
    adopt: "Adoptá tu pato",
    how: "Cómo participar",
    duckAlt: "Pato corredor con casco argentino y anteojos",
    solidary: "70% A BENEFICIO",
    racesLine: "Dique 3 · Puerto Madero",
    remaining: "FALTA",
    countdownDays: "días",
    countdownHours: "horas",
    countdownMin: "min",
    countdownSec: "seg",
    time: "Apertura 19:00 · Carrera + experiencia en vivo",
    quack: "¡CUAC!",
    venue: "Lugar",
    anywhere: "Participá desde cualquier lugar del país",
    priceContext: "Con {price} ya sos parte de la carrera",
    adoptionsOpen: "Las adopciones ya están abiertas",
  },
  live: {
    title: "EN VIVO",
    subtitle: "Esta carrera la hacemos entre todos",
    raised: "Recaudado",
    start: "Salida",
    ducks: "Participaciones adoptadas",
    ofGoal: "del objetivo",
    progress: "Avance",
    publicNote:
      "Números públicos que también pueden mostrar socios y sponsors. Actualización automática.",
  },
  queEs: {
    kicker: "¿Qué es Pato Race?",
    titleBefore: "Una carrera donde tu pato",
    titleAccent: "corre por vos",
    p1: "Miles de patos sobre el agua en el Dique 3, Puerto Madero: una experiencia masiva con propósito, en el muelle o a distancia.",
    p2: "Adoptá tu pato, recibí un número único y, unas 48 horas antes de la carrera, se vincula a un pato al azar según las Bases. Un pato puede reunir múltiples participaciones. Hay dos carreras: sponsors y general. El premio crece con la carrera (2%).",
    p3: "Tu pato corre por vos. Vos corrés por ellos.",
    adoptLabel: "Adoptá tu pato",
    adoptDetail: "Con tu participación ya sos parte de la carrera, estés donde estés.",
    shareLabel: "Un pato · múltiples participaciones",
    shareDetail: "Varias personas pueden sumarse al mismo pato. Cantidad y procedimiento, en las Bases.",
    prizeLabel: "El premio crece con la carrera",
    prizeDetail: "El 2% de la recaudación computable de participaciones se destina a premios, después de comisiones impositivas y bancarias. Sin monto fijo.",
  },
  sponsors: {
    kicker: "Sponsors",
    title: "Marcas que hacen posible la carrera",
    intro: "Las marcas también corren por una causa.",
    body: "Buscamos aliados que quieran potenciar la carrera, ampliar su alcance y sumar impacto. Las alianzas se anuncian acá cuando estén confirmadas.",
    placeholder: "Próximamente",
    cta: "Conocé las alianzas",
    pageTitle: "Alianzas",
    pageLead: "Las marcas también corren por una causa. Acá van a vivir los logos y el Partner Deck.",
    formTitle: "¿Querés sumar tu marca?",
    formBody: "Escribinos a {email}. Cuando esté el Partner Deck, lo publicamos acá.",
  },
  impacto: {
    kicker: "A beneficio",
    titleBefore: "70% va a",
    titleAccent: "causas con impacto social",
    lead: "El 70% de lo recaudado por las participaciones se destina a beneficio social.",
    share: "70%",
    shareTitle: "A causas con impacto social",
    shareBody:
      "El 70% de lo recaudado por las participaciones se destina a causas con impacto social. Las organizaciones beneficiarias se informan por los canales oficiales.",
    prizes:
      "El fondo de premios es el 2% de la recaudación computable de participaciones, previa deducción de comisiones impositivas y bancarias.",
    costs:
      "El 30% se destina a órdenes de compra: premios, producción, organización, tecnología, servicios, seguridad, logística, comunicación, medios de pago, impuestos y demás costos del evento.",
    ops: "30% operación y premios",
    goalTitle: "Argentina corre junta",
    goalBody: "Miles de personas. Miles de patos. Una misma causa.",
  },
  como: {
    kicker: "Cómo participar",
    title: "Simple, claro y con propósito",
    s1t: "Adoptá tu pato",
    s1b: "Comprá tu participación por {price} y ya sos parte de la carrera.",
    s2t: "Recibí tu número único",
    s2b: "Te enviamos un comprobante digital con tu participación.",
    s3t: "Te asignamos un pato",
    s3b: "Aproximadamente 48 horas antes, según las Bases, te avisamos qué pato corre por vos. La asignación es aleatoria y auditada por escribano el día del evento.",
    s4t: "Seguí la carrera",
    s4b: "Hay dos carreras: una de sponsors y una general. Si tu pato gana, el premio se reparte en partes iguales entre las participaciones de ese pato.",
  },
  remote: {
    kicker: "Desde cualquier lugar",
    title: "Estés donde estés, tu pato corre",
    body: "No hace falta estar en el Dique 3. Participás online y seguís las novedades por los canales oficiales.",
  },
  video: {
    kicker: "Mirá la carrera",
    title: "El teaser va acá",
  },
  experience: {
    kicker: "La noche",
    title: "Carrera + experiencia en vivo",
    race: "Carrera sobre el agua",
    twoRaces: "Dos carreras: sponsors y general",
    music: "Música",
    dj: "DJ",
  },
  transparency: {
    kicker: "Confianza",
    title: "Una carrera transparente",
    s1t: "70% a beneficio",
    s1b: "El 70% de lo recaudado por las participaciones se destina a causas con impacto social.",
    s2t: "Pago seguro",
    s2b: "Pagás online y recibís tu número único de participación.",
    s3t: "Asignación aleatoria",
    s3b: "Asignación aleatoria unas 48 h antes, con registro verificable y auditoría de escribano el día del evento.",
    s4t: "Recaudación en vivo",
    s4b: "Los totales de participaciones se ven en la home.",
  },
  merch: {
    kicker: "Merch oficial",
    title: "Pato Race también se usa",
    lead: "Llevate un pedacito de la carrera. Stock limitado.",
    limited: "Merch oficial · stock limitado",
    pickup: "Retiro en Pato Race 2026.",
    shipping: "Envío a domicilio a confirmar. Si se implementa, los costos se van a mostrar antes de pagar.",
    pageTitle: "Merch",
    pageLead: "Remeras, gorras y stickers. Las fotos y la entrega se cargan cuando lleguen.",
    tees: "Remeras",
    caps: "Gorras",
    stickers: "Stickers",
    coming: "Producto a la venta cuando cierren stock y fotos.",
  },
  where: {
    kicker: "El lugar",
    title: "¿Dónde es?",
    body: "Dique 3 · Puerto Madero · Buenos Aires. 22 de noviembre 2026. Apertura 19:00 (provisoria).",
  },
  contactBlock: {
    kicker: "Contacto",
    title: "Hablemos",
    body: "Prensa, sponsors e institucionales: {email}",
  },
  legal: {
    draft: "Texto provisorio",
    officialEs: "The official legal text is in Spanish. The version below is the one published by the Organization.",
    body: "Esta página está armada para el pie legal. El contenido largo se pega cuando llegue la versión final. No es el texto oficial todavía.",
    terms: "Términos y condiciones",
    privacy: "Privacidad",
    cookies: "Cookies",
    rules: "Bases y condiciones",
    returns: "Cambios y devoluciones",
    regret: "Botón de arrepentimiento",
  },
  faq: {
    title: "Preguntas frecuentes",
    seeAll: "Ver todas las preguntas",
    pageTitle: "Preguntas frecuentes",
    pageLead:
      "Todo lo que necesitás saber para adoptar tu pato y ser parte de Pato Race 2026.",
    home: {
      q1: "¿Puedo participar sin ir al Dique 3?",
      a1: "Sí. Podés comprar tu participación online y ser parte de la carrera desde cualquier lugar. Las novedades las compartimos por los canales oficiales.",
      q2: "¿Cómo se asigna mi pato?",
      a2: "Cada participación tiene un número único. Unas 48 horas antes de la carrera se asigna al azar a un pato habilitado, según las Bases, y te avisamos por medios digitales. La asignación se audita con escribano el día del evento.",
      q3: "¿Necesito estar presente para ganar?",
      a3: "No. Si tu pato resulta ganador, el premio se gestiona según las Bases aunque no estés en el Dique 3.",
      q4: "¿Qué incluye mi participación?",
      a4: "Un número único y la asignación de un pato según las Bases. No incluye un pato físico.",
      q5: "¿Cuánto es el premio?",
      a5: "El premio crece con la carrera: el 2% de la recaudación computable de participaciones, después de comisiones impositivas y bancarias. Gana un pato por carrera y, si hay varios adoptantes, se reparte en partes iguales. El detalle está en las Bases.",
      q6: "¿A dónde va el dinero?",
      a6: "El 70% va a beneficio, a causas con impacto social. El 30% cubre órdenes de compra (premios, producción, organización, tecnología, seguridad, logística, impuestos y demás costos). El fondo de premios es el 2% de la recaudación computable de participaciones. La distribución se comunica de forma pública.",
      q7: "¿Qué pasa si llueve?",
      a7: "Puede haber cambios de fecha u horario. Tu participación sigue válida en la nueva fecha. Si una carrera se interrumpe, puede reanudarse, repetirse o reprogramarse. Ante cancelación definitiva se aplica la normativa de defensa del consumidor y se tratará de realizar en fecha posterior; el lugar podría cambiar con aviso previo.",
      q8: "¿Puedo comprar más de una participación?",
      a8: "Sí. Podés sumar tantas participaciones como quieras.",
    },
    extra: {
      q1: "¿Varias personas pueden compartir un pato?",
      a1: "Sí: un pato, múltiples participaciones. La distribución procura ser uniforme; el procedimiento está en las Bases.",
      q2: "¿Qué pasa si mi pato gana y hay varias participaciones?",
      a2: "Gana un solo pato por carrera. El premio de ese pato se divide en partes iguales entre todas las participaciones válidas asociadas. Si compraste más de una, cobrás por cada una.",
      q3: "¿Me llevo el pato a casa?",
      a3: "No. Los patos son de producción y se reutilizan. Los coleccionables, si hay, son merch aparte.",
      q4: "¿Pueden participar menores?",
      a4: "Los titulares de participaciones con derecho a premios son personas mayores de 18 años o personas jurídicas.",
      q5: "¿Puedo comprar merch sin participar?",
      a5: "Sí, el merch se puede comprar aparte. El retiro es en Pato Race 2026; el envío a domicilio está a confirmar y, si se implementa, los costos se muestran antes de pagar.",
      q6: "¿Cómo me sumo como marca o aliado?",
      a6: "Las alianzas se coordinan con la organización. Cuando esté el Partner Deck, lo vamos a publicar junto a un formulario de contacto.",
      q7: "¿Cómo se transparentan los fondos?",
      a7: "La distribución de lo recaudado se comunica de forma pública. La asignación de patos se registra y se audita con escribano el día del evento.",
      q8: "¿Hasta cuándo puedo comprar?",
      a8: "Las participaciones se pueden adquirir hasta el 22 de noviembre de 2026 a las 19:00. La fecha de apertura de ventas es aproximada (20/09) y está pendiente de confirmación.",
      q9: "¿Hay más de una carrera?",
      a9: "Sí. Hay una carrera de sponsors y una general abierta al público. Los detalles operativos se informan antes del evento.",
      q10: "¿Mi participación incluye acceso VIP?",
      a10: "No. Participar no da por sí mismo acceso a sectores restringidos, VIP, backstage u hospitality.",
    },
  },
  finalCta: {
    title: "Sumate",
    body: "Tu pato puede ganar una carrera. Tu participación puede ayudar a mucho más.",
    motto: "Tu pato corre por vos. Vos corrés por ellos.",
    button: "Adoptá tu pato",
  },
  participar: {
    back: "← Volver",
    titleBefore: "Adoptá tu",
    titleAccent: "pato",
    lead: "Completá tus datos y adoptá tu pato para Pato Race 2026.",
    cardTitle: "Tu aporte corre por una buena causa",
    cardBody:
      "Cuando adoptás tu pato, no solo participás de la carrera: también formás parte de una acción de gran escala con impacto social.",
    bullet1: "Número único de participación",
    bullet2: "Participás aunque no vayas al dique",
    bullet3: "70% a beneficio · {price}",
    payFail: "El pago no se completó. Podés intentar de nuevo.",
    benefitTitle: "70% de tu aporte va a beneficio",
    benefitBody:
      "El 70% de tu aporte va a causas con impacto social. El 30% cubre premios, producción y operación. El fondo de premios es el 2% de la recaudación computable de participaciones.",
    payNote:
      "Vas a pagar {price}. Pagás online, recibís tu ticket digital y podés participar aunque no estés en el Dique 3. Titulares con derecho a premio: mayores de 18 años o personas jurídicas.",
    payUsdNote: "Estás pagando en dólares estadounidenses (USD).",
    acceptBases: "Leí y acepto las",
    acceptBasesLink: "Bases y Condiciones de PATO RACE 2026",
    ageConfirm: "Declaro ser mayor de 18 años o actuar en representación de una persona jurídica.",
    marketing: "Quiero recibir novedades de PATO RACE (opcional).",
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
    acceptedBases: "Tenés que aceptar las Bases y Condiciones para continuar.",
    ageConfirmed: "Tenés que confirmar que sos mayor de 18 años o persona jurídica.",
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
    instagram: "Copiar texto para Instagram",
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
      "El {percent}% de lo recaudado se destina a causas con impacto social. Conservá este comprobante como constancia de tu participación. Evento: {location} · {date} · {time}.",
    viralKicker: "Viralizá la causa",
    shareTitle: "COMPARTÍ TU PERFIL",
    shareBody:
      "Ya tenés tu pato. Mandá el vínculo por WhatsApp o copiá el texto para Instagram. Cada participación suma.",
    doneTitle: "Ya tenés tu pato",
    backHome: "Volver al inicio",
    payApproved: "Pago aprobado",
    payPending: "Pago pendiente",
    payRejected: "Pago rechazado",
    payCancelled: "Pago cancelado",
  },
  meta: {
    homeTitle: "Pato Race 2026 | Carrera de patos a beneficio",
    homeDesc:
      "La carrera solidaria de patos más grande de Argentina. Dique 3, Puerto Madero. 22 de noviembre 2026. 70% a beneficio. Adoptá tu pato y participá.",
    ogDesc:
      "Carrera de patos a beneficio en Puerto Madero. 70% destinado a causas con impacto social.",
    faqTitle: "Preguntas frecuentes | Pato Race 2026",
    faqDesc:
      "Cómo participar, a dónde va el dinero, cómo se asigna tu pato y más sobre Pato Race 2026.",
    sponsorsTitle: "Alianzas | Pato Race 2026",
    sponsorsDesc: "Marcas y aliados de Pato Race 2026. Partner Deck cuando esté listo.",
    merchTitle: "Merch | Pato Race 2026",
    merchDesc: "Remeras, gorras y stickers oficiales de Pato Race.",
    legalTitle: "Legal | Pato Race 2026",
    contactTitle: "Contacto | Pato Race 2026",
    participarTitle: "Adoptá tu pato | Pato Race 2026",
    participarDesc:
      "Adoptá tu pato y recibí tu ticket digital para Pato Race 2026.",
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
    event: "The event",
    merch: "Merch",
    questions: "FAQ",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    regret: "Right of withdrawal",
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
    event: "For a cause · Buenos Aires · Dique 3, Puerto Madero",
    note: "70% of participation proceeds go to social causes. You can take part even if you aren't at the dock.",
    brandCol: "The event",
    infoCol: "Info",
    legalCol: "Legal",
    contactCol: "Contact",
    copyright: "© 2026 Pato Race. All rights reserved.",
    organizer: "Produced by PATO RACE SOLIDARIO S.R.L.",
    people: "Rocío Bustamante and Luis Ortiz",
    taxId: "CUIT 30-71952790-2",
    address: "Juncal 2061, 9th floor A, CABA",
    hoursNeed: "Event start time still provisional: confirm 7:00 PM doors",
    email: "patorace.solidario@gmail.com",
  },
  sticky: {
    adopt: "Adopt your duck",
  },
  fill: {
    badge: "Missing asset",
    video: "Need 15–25s teaser",
    videoHint: "Send the video for the first third of the home page.",
    logo: "Need brand logo",
    logoHint: "Send sponsor logos (PNG or SVG, transparent background).",
    deck: "Need Partner Deck",
    deckHint: "Send a PDF or link so we can put a download here.",
    artist: "Need a name",
    artistHint: "Send artists / DJ / people for this strip.",
    photo: "Need product photo",
    photoHint: "Send photos of tees, caps, and stickers.",
    map: "Need map / directions",
    mapHint: "Send a map, pin, or how-to-get-there for Dique 3.",
    legal: "Need final copy",
    legalHint: "The page is ready. Paste T&Cs, rules, and policies when you have them.",
    cuit: "Need tax ID / legal name",
    cuitHint: "Send tax ID and legal details for the footer.",
  },
  hero: {
    city: "City",
    dateTime: "Date & time",
    date: "November 22, 2026",
    tagline: "Argentina's biggest charity duck race.",
    lead: "Thousands of ducks. A race on the water. An experience in Puerto Madero. 70% goes to social causes.",
    adopt: "Adopt your duck",
    how: "How to join",
    duckAlt: "Racing duck in an Argentine helmet and sunglasses",
    solidary: "70% TO THE CAUSE",
    racesLine: "Dique 3 · Puerto Madero",
    remaining: "TO GO",
    countdownDays: "days",
    countdownHours: "hours",
    countdownMin: "min",
    countdownSec: "sec",
    time: "Doors 7:00 PM · Race + live experience",
    quack: "QUACK!",
    venue: "Venue",
    anywhere: "Join from anywhere in the country",
    priceContext: "With {price} you're already in the race",
    adoptionsOpen: "Adoptions are open",
  },
  live: {
    title: "LIVE",
    subtitle: "We're building this race together",
    raised: "Raised",
    start: "Start",
    ducks: "Entries adopted",
    ofGoal: "of the goal",
    progress: "Progress",
    publicNote:
      "These public totals are for partners and sponsors to share too. They update automatically.",
  },
  queEs: {
    kicker: "What is Pato Race?",
    titleBefore: "A race where your duck",
    titleAccent: "runs for you",
    p1: "Thousands of ducks on the water at Dique 3, Puerto Madero — a massive experience with purpose, at the dock or from afar.",
    p2: "Adopt your duck, get a unique number, and about 48 hours before the race it's randomly matched under the official rules. One duck can hold multiple entries. There are two races: sponsors and general. The prize grows with the race (2%).",
    p3: "Your duck runs for you. You run for them.",
    adoptLabel: "Adopt your duck",
    adoptDetail: "With your entry you're already in the race, wherever you are.",
    shareLabel: "One duck · multiple entries",
    shareDetail: "Several people can join the same duck. Numbers and process are in the official rules.",
    prizeLabel: "The prize grows with the race",
    prizeDetail: "2% of computable entry proceeds go to prizes, after tax and bank fees. No fixed amount.",
  },
  sponsors: {
    kicker: "Sponsors",
    title: "The brands behind the race",
    intro: "Brands are racing for a cause too.",
    body: "We're looking for partners who want to grow the race, expand its reach, and add impact. Confirmed alliances will show up here.",
    placeholder: "Coming soon",
    cta: "See the alliances",
    pageTitle: "Alliances",
    pageLead: "Brands are racing for a cause too. Logos and the Partner Deck will live here.",
    formTitle: "Want your brand in the race?",
    formBody: "Write to {email}. When the Partner Deck is ready, we'll publish it here.",
  },
  impacto: {
    kicker: "For a cause",
    titleBefore: "70% goes to",
    titleAccent: "social impact",
    lead: "70% of entry proceeds go to social causes.",
    share: "70%",
    shareTitle: "To social impact causes",
    shareBody:
      "70% of entry proceeds go to social impact causes. Beneficiary organizations are shared through official channels.",
    prizes:
      "The prize fund is 2% of computable entry proceeds, after tax and bank fees.",
    costs:
      "30% goes to purchase orders: prizes, production, organization, technology, services, safety, logistics, communications, payment fees, taxes, and other event costs.",
    ops: "30% operations and prizes",
    goalTitle: "Argentina runs together",
    goalBody: "Thousands of people. Thousands of ducks. One cause.",
  },
  como: {
    kicker: "How to join",
    title: "Simple, clear, and with purpose",
    s1t: "Adopt your duck",
    s1b: "Buy your entry for {price} and you're already in the race.",
    s2t: "Get your unique number",
    s2b: "We send you a digital receipt with your entry.",
    s3t: "We assign your duck",
    s3b: "About 48 hours before the race, under the official rules, we'll tell you which duck runs for you. Assignment is random and audited by a notary on event day.",
    s4t: "Follow the race",
    s4b: "There are two races: one for sponsors and one general. If your duck wins, the prize is split equally among that duck's entries.",
  },
  remote: {
    kicker: "From anywhere",
    title: "Wherever you are, your duck still races",
    body: "You don't need to be at Dique 3. Join online and follow updates on official channels.",
  },
  video: {
    kicker: "Watch the race",
    title: "The teaser goes here",
  },
  experience: {
    kicker: "The night",
    title: "Race + live experience",
    race: "Race on the water",
    twoRaces: "Two races: sponsors and general",
    music: "Music",
    dj: "DJ",
  },
  transparency: {
    kicker: "Trust",
    title: "A transparent race",
    s1t: "70% to the cause",
    s1b: "70% of entry proceeds go to social impact causes.",
    s2t: "Secure payment",
    s2b: "You pay online and get a unique entry number.",
    s3t: "Random assignment",
    s3b: "Random assignment about 48 hours before, with a verifiable record and a notary audit on event day.",
    s4t: "Live totals",
    s4b: "Entry totals are public on the home page.",
  },
  merch: {
    kicker: "Official merch",
    title: "Pato Race is also something you wear",
    lead: "Take a piece of the race home. Limited stock.",
    limited: "Official merch · limited stock",
    pickup: "Pickup at Pato Race 2026.",
    shipping: "Home delivery still to be confirmed. If it launches, costs will be shown before you pay.",
    pageTitle: "Merch",
    pageLead: "Tees, caps, and stickers. Photos and delivery land when we have them.",
    tees: "Tees",
    caps: "Caps",
    stickers: "Stickers",
    coming: "On sale once stock and photos are in.",
  },
  where: {
    kicker: "The venue",
    title: "Where is it?",
    body: "Dique 3 · Puerto Madero · Buenos Aires. November 22, 2026. Doors 7:00 PM (provisional).",
  },
  contactBlock: {
    kicker: "Contact",
    title: "Say hello",
    body: "Press, sponsors, and institutional: {email}",
  },
  legal: {
    draft: "Draft copy",
    officialEs: "The official legal text is in Spanish. The version below is the one published by the Organization.",
    body: "This page is a legal shell for the footer. Long-form copy gets pasted when the final version arrives. It is not official yet.",
    terms: "Terms and conditions",
    privacy: "Privacy",
    cookies: "Cookies",
    rules: "Official rules",
    returns: "Returns and exchanges",
    regret: "Right of withdrawal",
  },
  faq: {
    title: "FAQ",
    seeAll: "See all questions",
    pageTitle: "FAQ",
    pageLead: "Everything you need to know to adopt your duck and join Pato Race 2026.",
    home: {
      q1: "Can I take part without going to Dique 3?",
      a1: "Yes. You can buy your entry online and be part of the race from anywhere. We'll share updates on official channels.",
      q2: "How is my duck assigned?",
      a2: "Each entry has a unique number. About 48 hours before the race it is randomly assigned to an eligible duck under the official rules, and we'll tell you digitally. Assignment is audited by a notary on event day.",
      q3: "Do I need to be there to win?",
      a3: "No. If your duck wins, the prize is handled under the official rules even if you aren't at Dique 3.",
      q4: "What's included in my entry?",
      a4: "A unique number and a duck assignment under the official rules. It does not include a physical duck.",
      q5: "How much is the prize?",
      a5: "The prize grows with the race: 2% of computable entry proceeds, after tax and bank fees. One duck wins each race; if that duck has several entries, the prize is split equally. Details are in the official rules.",
      q6: "Where does the money go?",
      a6: "70% goes to social impact causes. 30% covers purchase orders (prizes, production, organization, technology, safety, logistics, taxes, and other costs). The prize fund is 2% of computable entry proceeds. The split is shared publicly.",
      q7: "What if it rains?",
      a7: "The date or time may change. Your entry stays valid for the new date. If a race is interrupted, it may resume, be rerun, or be rescheduled. If the event is cancelled for good, consumer-protection rules apply and the organizers will try a later date; the venue may change with prior notice.",
      q8: "Can I buy more than one entry?",
      a8: "Yes. You can add as many entries as you want.",
    },
    extra: {
      q1: "Can several people share a duck?",
      a1: "Yes: one duck, multiple entries. Distribution aims to be even; the process is in the official rules.",
      q2: "What if my duck wins and there are multiple entries?",
      a2: "Only one duck wins each race. That duck's prize is split equally among all valid entries on it. If you bought more than one, you collect for each.",
      q3: "Do I take the duck home?",
      a3: "No. The ducks are production pieces and get reused. Collectibles, if any, are merch sold separately.",
      q4: "Can minors take part?",
      a4: "Holders of prize-eligible entries must be 18 or older, or legal entities.",
      q5: "Can I buy merch without entering?",
      a5: "Yes, merch can be bought separately. Pickup is at Pato Race 2026; home delivery is still to be confirmed and, if it launches, costs will be shown before you pay.",
      q6: "How do I join as a brand or partner?",
      a6: "Partnerships are coordinated with the organizers. When the Partner Deck is ready, we'll publish it with a contact form.",
      q7: "How are funds made transparent?",
      a7: "How proceeds are distributed is shared publicly. Duck assignment is recorded and audited by a notary on event day.",
      q8: "Until when can I buy?",
      a8: "Entries can be bought until November 22, 2026 at 7:00 PM. The sales opening date is around 20 September and still to be confirmed.",
      q9: "Is there more than one race?",
      a9: "Yes. There is a sponsors race and a general public race. Operational details will be shared before the event.",
      q10: "Does my entry include VIP access?",
      a10: "No. Taking part does not by itself grant access to restricted, VIP, backstage, or hospitality areas.",
    },
  },
  finalCta: {
    title: "Join in",
    body: "Your duck can win a race. Your entry can help far more.",
    motto: "Your duck runs for you. You run for them.",
    button: "Adopt your duck",
  },
  participar: {
    back: "← Back",
    titleBefore: "Adopt your",
    titleAccent: "duck",
    lead: "Fill in your details and adopt your duck for Pato Race 2026.",
    cardTitle: "Your duck races for a good cause",
    cardBody:
      "When you adopt your duck, you're not just in the race — you're part of a large-scale campaign with social impact.",
    bullet1: "A unique entry number",
    bullet2: "You can take part even if you aren't at the dock",
    bullet3: "70% to the causes · {price}",
    payFail: "The payment didn't go through. You can try again.",
    benefitTitle: "70% of what you give goes to the causes",
    benefitBody:
      "70% of what you give goes to social impact causes. 30% covers prizes, production, and operations. The prize fund is 2% of computable entry proceeds.",
    payNote:
      "You'll pay {price}. You pay online, get your digital ticket, and can take part even if you aren't at Dique 3. Prize-eligible holders must be 18+ or a legal entity.",
    payUsdNote: "You'll be charged in US dollars (USD).",
    acceptBases: "I have read and accept the",
    acceptBasesLink: "PATO RACE 2026 official rules",
    ageConfirm: "I confirm I am 18 or older, or I am acting for a legal entity.",
    marketing: "I want to receive PATO RACE news (optional).",
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
    acceptedBases: "You need to accept the official rules to continue.",
    ageConfirmed: "You need to confirm you are 18+ or a legal entity.",
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
    instagram: "Copy caption for Instagram",
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
      "{percent}% of proceeds go to social impact causes. Keep this receipt as proof of your entry. Event: {location} · {date} · {time}.",
    viralKicker: "Spread the word",
    shareTitle: "SHARE YOUR PROFILE",
    shareBody:
      "You've got your duck. Send the link on WhatsApp or copy the caption for Instagram. Every entry adds up.",
    doneTitle: "You've got your duck",
    backHome: "Back to home",
    payApproved: "Payment approved",
    payPending: "Payment pending",
    payRejected: "Payment declined",
    payCancelled: "Payment cancelled",
  },
  meta: {
    homeTitle: "Pato Race 2026 | Charity duck race",
    homeDesc:
      "Argentina's biggest charity duck race. Dique 3, Puerto Madero. November 22, 2026. 70% to the causes. Adopt your duck and join in.",
    ogDesc:
      "Charity duck race in Puerto Madero. 70% goes to social impact causes.",
    faqTitle: "FAQ | Pato Race 2026",
    faqDesc:
      "How to join, where the money goes, how your duck is assigned, and more about Pato Race 2026.",
    sponsorsTitle: "Alliances | Pato Race 2026",
    sponsorsDesc: "Pato Race 2026 brands and partners. Partner Deck when it's ready.",
    merchTitle: "Merch | Pato Race 2026",
    merchDesc: "Official Pato Race tees, caps, and stickers.",
    legalTitle: "Legal | Pato Race 2026",
    contactTitle: "Contact | Pato Race 2026",
    participarTitle: "Adopt your duck | Pato Race 2026",
    participarDesc:
      "Adopt your duck and get your digital ticket for Pato Race 2026.",
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

export type FaqItem = { q: string; a: string };

export function faqHomeItems(t: Messages): FaqItem[] {
  const h = t.faq.home;
  return [
    { q: h.q1, a: h.a1 },
    { q: h.q2, a: h.a2 },
    { q: h.q3, a: h.a3 },
    { q: h.q4, a: h.a4 },
    { q: h.q5, a: h.a5 },
    { q: h.q6, a: h.a6 },
    { q: h.q7, a: h.a7 },
    { q: h.q8, a: h.a8 },
  ];
}

export function faqAllItems(t: Messages): FaqItem[] {
  const x = t.faq.extra;
  return [
    ...faqHomeItems(t),
    { q: x.q1, a: x.a1 },
    { q: x.q2, a: x.a2 },
    { q: x.q3, a: x.a3 },
    { q: x.q4, a: x.a4 },
    { q: x.q5, a: x.a5 },
    { q: x.q6, a: x.a6 },
    { q: x.q7, a: x.a7 },
    { q: x.q8, a: x.a8 },
    { q: x.q9, a: x.a9 },
    { q: x.q10, a: x.a10 },
  ];
}

export function interpolate(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
}
