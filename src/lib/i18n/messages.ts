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
    historia: string;
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
    tagline: string;
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
    moment: string;
    momentHint: string;
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
    merch: string;
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
    headline: string;
    headlineAccent: string;
    benefitCaption: string;
    discover: string;
  };
  counter: {
    kicker: string;
    title: string;
    open: string;
    impactCaption: string;
    cta: string;
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
    wantTitle: string;
    wantBody: string;
    tiersKicker: string;
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
    note: string;
  };
  como: {
    kicker: string;
    title: string;
    pathsTitle: string;
    sponsorPath: string;
    sponsorBody: string;
    adoptPath: string;
    adoptBody: string;
    s1t: string;
    s1b: string;
    s2t: string;
    s2b: string;
    s3t: string;
    s3b: string;
    s4t: string;
    s4b: string;
    s5t: string;
    s5b: string;
    close: string;
    cta: string;
  };
  cine: {
    l1: string;
    l2: string;
    l3: string;
    l4: string;
    caption: string;
  };
  quienes: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    close: string;
    vision: string;
    cta: string;
  };
  historia: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    p1: string;
    p2: string;
    moments: string;
    finaleBefore: string;
    finaleWhen: string;
    finaleWhere: string;
    garrahanTitle: string;
    garrahanWhen: string;
    garrahanBody: string;
    favaloroTitle: string;
    favaloroWhen: string;
    favaloroBody: string;
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
    lead: string;
    race: string;
    raceBody: string;
    twoRaces: string;
    music: string;
    dj: string;
    start: string;
    startBody: string;
    live: string;
    liveBody: string;
    lights: string;
    lightsBody: string;
    activations: string;
    activationsBody: string;
    finale: string;
    finaleBody: string;
    close: string;
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
    originals: string;
    dropKicker: string;
    dropTitle: string;
    independent: string;
    pricePending: string;
    add: string;
    added: string;
    cartLink: string;
    cartTitle: string;
    empty: string;
    keepShopping: string;
    sizeLabel: string;
    sizeRequired: string;
    qty: string;
    remove: string;
    clear: string;
    total: string;
    toCheckout: string;
    checkoutTitle: string;
    buyerName: string;
    buyerEmail: string;
    buyerPhone: string;
    pay: string;
    payDisabled: string;
    viewDrop: string;
    items: {
      pato: { name: string; line: string; detail: string };
      remera: { name: string; line: string; detail: string };
      gorra: { name: string; line: string; detail: string };
      tote: { name: string; line: string; detail: string };
      stickers: { name: string; line: string; detail: string };
    };
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
    basesCta: string;
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
    question: string;
    meta: string;
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
    historiaTitle: string;
    historiaDesc: string;
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
    historia: "Historia",
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
    tagline: "Entretenimiento × Comunidad × Impacto.",
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
    moment: "Foto pendiente",
    momentHint: "Cuando haya fotos reales de este encuentro, se publican acá.",
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
    tagline: "Miles de patos. Una sola meta.",
    lead: "Miles de patos sobre el agua. Una carrera. Una experiencia en vivo y una comunidad entera corriendo por causas que importan.",
    adopt: "Adoptá tu pato",
    merch: "Ver merchandising",
    how: "Descubrí la experiencia",
    headline: "Hacer algo grande.",
    headlineAccent: "70%",
    benefitCaption: "destinado a causas con impacto social.",
    discover: "Descubrí la experiencia",
    duckAlt: "Pato corredor con casco argentino y anteojos",
    solidary: "70% A BENEFICIO",
    racesLine: "Dique 3 · Puerto Madero",
    remaining: "FALTA",
    countdownDays: "días",
    countdownHours: "horas",
    countdownMin: "min",
    countdownSec: "seg",
    time: "Apertura 19:00",
    quack: "¡CUAC!",
    venue: "Lugar",
    anywhere: "Podés participar desde cualquier lugar de Argentina.",
    priceContext: "Con {price} ya sos parte de la carrera",
    adoptionsOpen: "Adopciones abiertas",
  },
  counter: {
    kicker: "La carrera ya empezó.",
    title: "Antes de llegar al agua.",
    open: "Adopciones abiertas",
    impactCaption: "Destinado a impacto social",
    cta: "Sumá tu pato",
  },
  live: {
    title: "EN VIVO",
    subtitle: "Esta carrera la hacemos entre todos",
    raised: "Recaudados",
    start: "Salida",
    ducks: "Participaciones",
    ofGoal: "del objetivo",
    progress: "Avance",
    publicNote:
      "Números públicos que también pueden mostrar socios y sponsors. Actualización automática.",
  },
  queEs: {
    kicker: "¿Qué es Pato Race?",
    titleBefore: "Una carrera donde",
    titleAccent: "tu pato corre por vos.",
    p1: "Miles de patos toman el Dique 3 de Puerto Madero en una carrera sobre el agua.",
    p2: "Adoptás una participación, recibís un número único y, antes de la largada, tu participación se vincula al azar con uno de los patos de la carrera según las Bases.",
    p3: "Cuando ellos tocan el agua, empieza tu carrera.",
    adoptLabel: "Número único",
    adoptDetail: "Cada participación queda registrada con un número único.",
    shareLabel: "Al azar, según las Bases",
    shareDetail: "Antes de la largada, tu participación se vincula a un pato de la carrera.",
    prizeLabel: "En el dique o desde casa",
    prizeDetail: "Podés vivirla en Puerto Madero o participar desde cualquier lugar del país.",
  },
  sponsors: {
    kicker: "Marcas",
    title: "Las marcas también corren por algo.",
    intro: "¿Tu marca quiere entrar en carrera?",
    body: "Pato Race conecta marcas, comunidad y causas dentro de una experiencia creada para generar participación, conversación e impacto.",
    placeholder: "Próximamente",
    cta: "Quiero ser parte",
    pageTitle: "Membresías",
    pageLead: "Cuatro niveles. Un solo objetivo: que se hable de tu marca.",
    formTitle: "¿Tu marca quiere entrar en carrera?",
    formBody: "Escribinos a {email}.",
    wantTitle: "No buscamos simplemente logos.",
    wantBody:
      "Buscamos aliados que quieran ser parte de la experiencia. Activaciones · contenido · presencia digital · hospitality · experiencias · carrera corporativa.",
    tiersKicker: "Paquetes de sponsorship",
  },
  impacto: {
    kicker: "Nuestro impacto",
    titleBefore: "Correr es divertido.",
    titleAccent: "Hacerlo por alguien, mucho más.",
    lead: "De lo recaudado por participaciones se destina a causas con impacto social.",
    share: "70%",
    shareTitle: "De lo recaudado por participaciones",
    shareBody:
      "Cada participación transforma una experiencia colectiva en recursos para organizaciones que trabajan todos los días generando impacto real.",
    prizes:
      "El fondo de premios es el 2% de la recaudación computable de participaciones, previa deducción de comisiones impositivas y bancarias.",
    costs:
      "El 30% se destina a órdenes de compra: premios, producción, organización, tecnología, servicios, seguridad, logística, comunicación, medios de pago, impuestos y demás costos del evento.",
    ops: "30% operación y premios",
    goalTitle: "Argentina corre junta",
    goalBody: "Miles de personas. Miles de patos. Una misma causa.",
    note: "Los porcentajes y la base de cálculo se aplican conforme a las Bases y Condiciones.",
  },
  como: {
    kicker: "Cómo funciona",
    title: "Dos formas de participar",
    pathsTitle: "Dos formas de participar",
    sponsorPath: "Sé nuestro sponsor",
    sponsorBody: "Las membresías están en un apartado del menú.",
    adoptPath: "Adoptá un pato",
    adoptBody: "Sumate a la carrera con una o más participaciones.",
    s1t: "Adoptá",
    s1b: "Sumate a la carrera con una o más participaciones.",
    s2t: "Recibí tu número",
    s2b: "Cada participación queda registrada con un número único.",
    s3t: "Descubrí tu pato",
    s3b: "Antes de la carrera vinculamos las participaciones a los patos según las Bases.",
    s4t: "Corré",
    s4b: "Los patos toman el agua y empieza la carrera.",
    s5t: "Ganá",
    s5b: "Si tu participación está vinculada al pato ganador, el premio también corre hacia vos.",
    close: "No comprás un pato. Entrás en la carrera.",
    cta: "Quiero participar",
  },
  cine: {
    l1: "Una ciudad.",
    l2: "Un dique.",
    l3: "Miles de patos.",
    l4: "Una misma causa.",
    caption: "Pato Race · Puerto Madero",
  },
  quienes: {
    kicker: "Somos Pato Race",
    titleBefore: "Hacemos del entretenimiento",
    titleAccent: "una forma de ayudar.",
    p1: "Pato Race es una empresa argentina que transforma entretenimiento en impacto social.",
    p2: "Recaudamos fondos para fundaciones y organizaciones sociales a través de una experiencia tan simple como inesperada: una gran carrera de miles de patos de hule sobre el agua.",
    p3: "Pero la carrera es sólo el comienzo. Creamos un evento público y gratuito que reúne a la comunidad alrededor de causas que importan, combinando música en vivo, DJs, luces, experiencias audiovisuales, activaciones de marcas y entretenimiento.",
    p4: "Y no hace falta estar en Buenos Aires para ser parte: se puede participar desde cualquier lugar del país.",
    close: "Entretenimiento que moviliza. Comunidad que participa. Impacto que llega más lejos.",
    vision:
      "Pato Race nace en Buenos Aires con una visión: crear una nueva manera de conectar personas, marcas y causas y llevarla cada vez más lejos.",
    cta: "Conocé Pato Race",
  },
  historia: {
    kicker: "Nuestra historia",
    titleBefore: "Antes de la largada,",
    titleAccent: "ya empezamos a correr.",
    p1: "Pato Race no empieza el día en que miles de patos lleguen al agua. Empieza mucho antes.",
    p2: "En cada encuentro, cada alianza y cada espacio que nos acerca a quienes trabajan todos los días por transformar realidades. Estamos construyendo una nueva forma de conectar entretenimiento, comunidad y compromiso social. Y esta es la historia de ese camino.",
    moments: "Momentos que ya son parte de Pato Race.",
    finaleBefore: "Y todo este camino lleva a una largada.",
    finaleWhen: "22 de noviembre de 2026",
    finaleWhere: "Dique 3 · Puerto Madero",
    garrahanTitle: "Cena anual Fundación Garrahan",
    garrahanWhen: "Septiembre 2026",
    garrahanBody:
      "Una noche para encontrarnos con personas, empresas y organizaciones comprometidas con una de las instituciones de salud pediátrica más importantes del país. Pato Race estuvo presente para escuchar, conectar y seguir construyendo vínculos alrededor de una convicción: cuando la comunidad se encuentra, el impacto puede multiplicarse.",
    favaloroTitle: "Encuentro Fundación Favaloro",
    favaloroWhen: "Septiembre 2026",
    favaloroBody:
      "Nos acercamos para presentar Pato Race, conocer su trabajo y explorar nuevas formas de colaboración entre organizaciones, empresas y experiencias con propósito. Porque construir impacto también significa sentarse a conversar, escuchar y crear nuevas posibilidades.",
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
    title: "Miles de patos. Una noche imposible de repetir.",
    lead: "El Dique 3 se transforma en escenario de una experiencia pública y gratuita que combina solidaridad, entretenimiento y espectáculo.",
    race: "La carrera",
    raceBody: "Seguí el recorrido y descubrí quién cruza primero.",
    twoRaces: "Dos carreras: sponsors y general",
    music: "Música",
    dj: "DJ",
    start: "La largada",
    startBody: "Miles de patos entrando al agua.",
    live: "En vivo",
    liveBody: "Música, DJs y artistas acompañando la experiencia.",
    lights: "Luces",
    lightsBody: "Una puesta audiovisual especialmente diseñada para transformar el Dique.",
    activations: "Experiencias",
    activationsBody: "Activaciones, intervenciones y propuestas de las marcas que hacen posible Pato Race.",
    finale: "El final",
    finaleBody: "Ganadores, celebración y el impacto conseguido entre todos.",
    close: "Venís por la experiencia. Terminás corriendo por algo más grande.",
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
    kicker: "Pato Race Originals",
    title: "Llevá la carrera fuera del agua.",
    lead: "Una colección para quienes quieren ser parte de Pato Race después de la largada.",
    limited: "Drop 01 · Race for others",
    pickup: "Retiro en Pato Race 2026.",
    shipping: "",
    pageTitle: "Pato Race Originals",
    pageLead: "Llevá la carrera fuera del agua.",
    tees: "Remeras",
    caps: "Gorras",
    stickers: "Stickers",
    coming: "Precio a confirmar.",
    originals: "Pato Race Originals",
    dropKicker: "Drop 01",
    dropTitle: "Race for others.",
    independent:
      "La compra de merch es independiente de la participación en la carrera. Retiro en el evento. No hay envío.",
    pricePending: "Precio a confirmar",
    add: "Agregar al carrito",
    added: "Agregado al carrito",
    cartLink: "Carrito ({count})",
    cartTitle: "Carrito",
    empty: "El carrito está vacío.",
    keepShopping: "Volver al drop",
    sizeLabel: "Talle",
    sizeRequired: "Elegí un talle para agregar la remera.",
    qty: "Cantidad",
    remove: "Quitar",
    clear: "Vaciar",
    total: "Total",
    toCheckout: "Ir al checkout",
    checkoutTitle: "Checkout",
    buyerName: "Nombre y apellido",
    buyerEmail: "Email",
    buyerPhone: "Teléfono",
    pay: "Pagar",
    payDisabled: "El pago se habilita cuando estén los precios.",
    viewDrop: "Ver drop",
    items: {
      pato: {
        name: "The Duck",
        line: "Edición Buenos Aires 2026",
        detail: "Pato oficial de colección Pato Race. Edición limitada.",
      },
      remera: {
        name: "Race for Others Tee",
        line: "Remera",
        detail: "Frente: Pato Race. Espalda: Race for others.",
      },
      gorra: {
        name: "Race Cap",
        line: "Gorra",
        detail: "Logo Pato Race bordado.",
      },
      tote: {
        name: "Tote",
        line: "Tote",
        detail: "Edición Drop 01.",
      },
      stickers: {
        name: "Sticker pack",
        line: "Stickers",
        detail: "Pack de stickers Pato Race.",
      },
    },
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
    title: "Preguntas que todo el mundo hace.",
    seeAll: "Ver todas las preguntas",
    basesCta: "Ver Bases y Condiciones",
    pageTitle: "Preguntas que todo el mundo hace.",
    pageLead:
      "Todo lo que necesitás saber para adoptar tu pato y ser parte de Pato Race 2026.",
    home: {
      q1: "¿Tengo que estar en Buenos Aires para participar?",
      a1: "No. Podés participar desde cualquier lugar del país.",
      q2: "¿Puedo adoptar más de una participación?",
      a2: "Sí.",
      q3: "¿Cómo sé qué pato me corresponde?",
      a3: "Antes de la carrera las participaciones se vinculan a los patos conforme al procedimiento establecido en las Bases.",
      q4: "¿Puedo ir al evento sin adoptar?",
      a4: "Sí. Pato Race es un evento público y gratuito.",
      q5: "¿Qué pasa con los patos después de la carrera?",
      a5: "Todos son recuperados mediante el operativo previsto para el evento. No quedan patos en el agua.",
      q6: "¿A dónde va lo recaudado?",
      a6: "El 70% de la recaudación computable de participaciones se destina a causas con impacto social conforme a las Bases.",
      q7: "¿Necesito estar presente para que mi pato participe?",
      a7: "No. Estés donde estés, tu participación ya está en carrera.",
      q8: "¿Pueden participar menores?",
      a8: "Los titulares de participaciones con derecho a premios son personas mayores de 18 años o personas jurídicas.",
    },
    extra: {
      q1: "¿Varias personas pueden compartir un pato?",
      a1: "Sí: un pato, múltiples participaciones. La distribución procura ser uniforme; el procedimiento está en las Bases.",
      q2: "¿Qué pasa si mi pato gana y hay varias participaciones?",
      a2: "Gana un solo pato por carrera. El premio de ese pato se divide en partes iguales entre todas las participaciones válidas asociadas. Si compraste más de una, cobrás por cada una.",
      q3: "¿Me llevo el pato a casa?",
      a3: "No. Después de la carrera los patos se recuperan con el operativo del evento y no quedan en el agua. Los coleccionables, si hay, son merch aparte.",
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
    title: "Buenos Aires está lista.",
    question: "¿Y vos? ¿Vas a correr?",
    meta: "22 NOV · Dique 3 · Puerto Madero",
    body: "Estés donde estés, podés ser parte.",
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
    sponsorsTitle: "Membresías | Pato Race 2026",
    sponsorsDesc: "Paquetes de sponsorship de Pato Race 2026: Nido, Oleada, Corriente y Gota.",
    historiaTitle: "Historia | Pato Race 2026",
    historiaDesc: "Encuentros y el camino de Pato Race antes de la largada en Puerto Madero.",
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
    historia: "History",
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
    tagline: "Entertainment × Community × Impact.",
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
    moment: "Photo pending",
    momentHint: "Real photos from this meeting will go here when we have them.",
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
    tagline: "Thousands of ducks. One finish line.",
    lead: "Thousands of ducks on the water. One race. A live experience and a whole community running for causes that matter.",
    adopt: "Adopt your duck",
    merch: "See the merch",
    how: "See the experience",
    headline: "Make it big.",
    headlineAccent: "70%",
    benefitCaption: "goes to social impact causes.",
    discover: "See the experience",
    duckAlt: "Racing duck in an Argentine helmet and sunglasses",
    solidary: "70% TO THE CAUSE",
    racesLine: "Dique 3 · Puerto Madero",
    remaining: "TO GO",
    countdownDays: "days",
    countdownHours: "hours",
    countdownMin: "min",
    countdownSec: "sec",
    time: "Doors 7:00 PM",
    quack: "QUACK!",
    venue: "Venue",
    anywhere: "You can join from anywhere in Argentina.",
    priceContext: "With {price} you're already in the race",
    adoptionsOpen: "Adoptions are open",
  },
  counter: {
    kicker: "The race has already started.",
    title: "Before it hits the water.",
    open: "Adoptions are open",
    impactCaption: "Goes to social impact",
    cta: "Add your duck",
  },
  live: {
    title: "LIVE",
    subtitle: "We're building this race together",
    raised: "Raised",
    start: "Start",
    ducks: "Entries",
    ofGoal: "of the goal",
    progress: "Progress",
    publicNote:
      "These public totals are for partners and sponsors to share too. They update automatically.",
  },
  queEs: {
    kicker: "What is Pato Race?",
    titleBefore: "A race where",
    titleAccent: "your duck runs for you.",
    p1: "Thousands of ducks take Dique 3 in Puerto Madero for a race on the water.",
    p2: "You adopt an entry, get a unique number, and before the start your entry is randomly linked to one of the race ducks under the official rules.",
    p3: "When they hit the water, your race begins.",
    adoptLabel: "A unique number",
    adoptDetail: "Every entry is registered with its own number.",
    shareLabel: "Random, under the rules",
    shareDetail: "Before the start, your entry is linked to a duck in the race.",
    prizeLabel: "At the dock or from home",
    prizeDetail: "You can be in Puerto Madero or join from anywhere in the country.",
  },
  sponsors: {
    kicker: "Brands",
    title: "Brands run for something too.",
    intro: "Does your brand want in the race?",
    body: "Pato Race connects brands, community, and causes inside an experience built for participation, conversation, and impact.",
    placeholder: "Coming soon",
    cta: "I want in",
    pageTitle: "Memberships",
    pageLead: "Four levels. One goal: people talk about your brand.",
    formTitle: "Does your brand want in the race?",
    formBody: "Write to {email}.",
    wantTitle: "We're not just looking for logos.",
    wantBody:
      "We want allies inside the experience. Activations · content · digital presence · hospitality · experiences · a corporate race.",
    tiersKicker: "Sponsorship packages",
  },
  impacto: {
    kicker: "Our impact",
    titleBefore: "Running is fun.",
    titleAccent: "Running for someone is better.",
    lead: "Of what entries raise goes to social impact causes.",
    share: "70%",
    shareTitle: "Of entry proceeds",
    shareBody:
      "Each entry turns a shared experience into resources for organizations doing real work every day.",
    prizes:
      "The prize fund is 2% of computable entry proceeds, after tax and bank fees.",
    costs:
      "30% goes to purchase orders: prizes, production, organization, technology, services, safety, logistics, communications, payment fees, taxes, and other event costs.",
    ops: "30% operations and prizes",
    goalTitle: "Argentina runs together",
    goalBody: "Thousands of people. Thousands of ducks. One cause.",
    note: "Percentages and the calculation base follow the official rules.",
  },
  como: {
    kicker: "How it works",
    title: "Two ways to take part",
    pathsTitle: "Two ways to take part",
    sponsorPath: "Be our sponsor",
    sponsorBody: "Memberships live in their own menu section.",
    adoptPath: "Adopt a duck",
    adoptBody: "Join the race with one or more entries.",
    s1t: "Adopt",
    s1b: "Join the race with one or more entries.",
    s2t: "Get your number",
    s2b: "Each entry is registered with a unique number.",
    s3t: "Meet your duck",
    s3b: "Before the race we link entries to ducks under the official rules.",
    s4t: "Run",
    s4b: "The ducks hit the water and the race starts.",
    s5t: "Win",
    s5b: "If your entry is linked to the winning duck, the prize runs toward you too.",
    close: "You are not buying a duck. You are entering the race.",
    cta: "I want in",
  },
  cine: {
    l1: "One city.",
    l2: "One dock.",
    l3: "Thousands of ducks.",
    l4: "One cause.",
    caption: "Pato Race · Puerto Madero",
  },
  quienes: {
    kicker: "We are Pato Race",
    titleBefore: "We turn entertainment",
    titleAccent: "into a way to help.",
    p1: "Pato Race is an Argentine company that turns entertainment into social impact.",
    p2: "We raise funds for foundations and social organizations through something simple and unexpected: a huge race of thousands of rubber ducks on the water.",
    p3: "But the race is only the start. We build a free public event that brings the community together around causes that matter, with live music, DJs, lights, audiovisual experiences, brand activations, and entertainment.",
    p4: "You don't have to be in Buenos Aires to be part of it. You can join from anywhere in the country.",
    close: "Entertainment that moves people. A community that shows up. Impact that travels further.",
    vision:
      "Pato Race starts in Buenos Aires with a vision: a new way to connect people, brands, and causes, and take it further every time.",
    cta: "Meet Pato Race",
  },
  historia: {
    kicker: "Our story",
    titleBefore: "Before the start,",
    titleAccent: "we were already running.",
    p1: "Pato Race does not begin the day thousands of ducks hit the water. It begins long before.",
    p2: "In every meeting, every alliance, and every room that brings us closer to people who work every day to change things. We are building a new way to connect entertainment, community, and social commitment. This is the story of that path.",
    moments: "Moments that are already part of Pato Race.",
    finaleBefore: "And this whole path leads to a start.",
    finaleWhen: "November 22, 2026",
    finaleWhere: "Dique 3 · Puerto Madero",
    garrahanTitle: "Fundación Garrahan annual dinner",
    garrahanWhen: "September 2026",
    garrahanBody:
      "A night to meet people, companies, and organizations committed to one of the country's most important pediatric health institutions. Pato Race was there to listen, connect, and keep building relationships around one conviction: when a community gets together, impact can multiply.",
    favaloroTitle: "Meeting with Fundación Favaloro",
    favaloroWhen: "September 2026",
    favaloroBody:
      "We went to introduce Pato Race, learn about their work, and explore new ways for organizations, companies, and purpose-driven experiences to collaborate. Building impact also means sitting down, listening, and opening new possibilities.",
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
    title: "Thousands of ducks. A night you won't see twice.",
    lead: "Dique 3 becomes the stage for a free public experience that mixes solidarity, entertainment, and spectacle.",
    race: "The race",
    raceBody: "Follow the course and see who crosses first.",
    twoRaces: "Two races: sponsors and general",
    music: "Music",
    dj: "DJ",
    start: "The start",
    startBody: "Thousands of ducks entering the water.",
    live: "Live",
    liveBody: "Music, DJs, and artists with the experience.",
    lights: "Lights",
    lightsBody: "An audiovisual show designed to transform the dock.",
    activations: "Experiences",
    activationsBody: "Activations and ideas from the brands that make Pato Race possible.",
    finale: "The finish",
    finaleBody: "Winners, celebration, and the impact we built together.",
    close: "You come for the experience. You leave running for something bigger.",
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
    kicker: "Pato Race Originals",
    title: "Take the race off the water.",
    lead: "A collection for people who want to stay in Pato Race after the start.",
    limited: "Drop 01 · Race for others",
    pickup: "Pickup at Pato Race 2026.",
    shipping: "",
    pageTitle: "Pato Race Originals",
    pageLead: "Take the race off the water.",
    tees: "Tees",
    caps: "Caps",
    stickers: "Stickers",
    coming: "Price to be confirmed.",
    originals: "Pato Race Originals",
    dropKicker: "Drop 01",
    dropTitle: "Race for others.",
    independent:
      "Merch is separate from your race entry. Pickup at the event. No shipping.",
    pricePending: "Price to be confirmed",
    add: "Add to cart",
    added: "Added to cart",
    cartLink: "Cart ({count})",
    cartTitle: "Cart",
    empty: "Your cart is empty.",
    keepShopping: "Back to the drop",
    sizeLabel: "Size",
    sizeRequired: "Choose a size to add the tee.",
    qty: "Quantity",
    remove: "Remove",
    clear: "Clear",
    total: "Total",
    toCheckout: "Go to checkout",
    checkoutTitle: "Checkout",
    buyerName: "Full name",
    buyerEmail: "Email",
    buyerPhone: "Phone",
    pay: "Pay",
    payDisabled: "Payment turns on once prices are set.",
    viewDrop: "See the drop",
    items: {
      pato: {
        name: "The Duck",
        line: "Buenos Aires 2026 edition",
        detail: "Official Pato Race collection duck. Limited edition.",
      },
      remera: {
        name: "Race for Others Tee",
        line: "Tee",
        detail: "Front: Pato Race. Back: Race for others.",
      },
      gorra: {
        name: "Race Cap",
        line: "Cap",
        detail: "Embroidered Pato Race logo.",
      },
      tote: {
        name: "Tote",
        line: "Tote",
        detail: "Drop 01 edition.",
      },
      stickers: {
        name: "Sticker pack",
        line: "Stickers",
        detail: "Pato Race sticker pack.",
      },
    },
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
    title: "Questions everybody asks.",
    seeAll: "See all questions",
    basesCta: "Read the official rules",
    pageTitle: "Questions everybody asks.",
    pageLead: "Everything you need to know to adopt your duck and join Pato Race 2026.",
    home: {
      q1: "Do I have to be in Buenos Aires to take part?",
      a1: "No. You can join from anywhere in the country.",
      q2: "Can I adopt more than one entry?",
      a2: "Yes.",
      q3: "How do I know which duck is mine?",
      a3: "Before the race, entries are linked to ducks under the procedure in the official rules.",
      q4: "Can I go to the event without adopting?",
      a4: "Yes. Pato Race is a free public event.",
      q5: "What happens to the ducks after the race?",
      a5: "They are all recovered in the operation planned for the event. No ducks are left in the water.",
      q6: "Where does the money go?",
      a6: "70% of computable entry proceeds goes to social impact causes, under the official rules.",
      q7: "Do I need to be there for my duck to race?",
      a7: "No. Wherever you are, your entry is already in the race.",
      q8: "Can minors take part?",
      a8: "Holders of prize-eligible entries must be 18 or older, or legal entities.",
    },
    extra: {
      q1: "Can several people share a duck?",
      a1: "Yes: one duck, multiple entries. Distribution aims to be even; the process is in the official rules.",
      q2: "What if my duck wins and there are multiple entries?",
      a2: "Only one duck wins each race. That duck's prize is split equally among all valid entries on it. If you bought more than one, you collect for each.",
      q3: "Do I take the duck home?",
      a3: "No. After the race the ducks are recovered in the event operation and none are left in the water. Collectibles, if any, are merch sold separately.",
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
    title: "Buenos Aires is ready.",
    question: "Are you? Are you going to run?",
    meta: "22 NOV · Dique 3 · Puerto Madero",
    body: "Wherever you are, you can be part of it.",
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
    sponsorsTitle: "Memberships | Pato Race 2026",
    sponsorsDesc: "Pato Race 2026 sponsorship packages: Nido, Oleada, Corriente, and Gota.",
    historiaTitle: "History | Pato Race 2026",
    historiaDesc: "Meetings and the path of Pato Race before the start in Puerto Madero.",
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
