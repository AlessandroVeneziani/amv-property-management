import type { Metadata } from "next";

export const siteConfig = {
  name: "AVM Asset Direction",
  shortName: "AVM",
  definition: "Direzione strategica dell’immobile",
  guidingStatement:
    "Ogni immobile possiede un potenziale. AVM ne definisce la direzione.",
  description:
    "AVM Asset Direction osserva, interpreta e guida la trasformazione dell’immobile, coordinando spazio, luce, materia e investimento all’interno di una visione unica.",
  metadataDescription:
    "AVM Asset Direction guida la trasformazione e la valorizzazione degli immobili attraverso distribuzione, luce, materia, funzione e strategia.",
  url: "https://alessandroveneziani.it",
  email: "info@alessandroveneziani.it",
  pec: "a.veneziani@pec.it",
  location: "Piazza Napoli 11, 20146 Milano"
} as const;

export const brandAssets = {
  wordmark: "/avm-wordmark.png",
  favicon: "/favicon.svg",
  icon192: "/icon-192.svg",
  icon512: "/icon-512.svg",
  appleTouchIcon: "/apple-touch-icon.svg"
} as const;

export const legalInfo = {
  companyName: "AVM Property Management",
  directors: ["Alessandro Veneziani", "Andrea Mirone"],
  vatNumber: "IT13770340969",
  taxCode: "VNZLSN74S17F205A",
  address: "Piazza Napoli 11, 20146 Milano",
  pec: "a.veneziani@pec.it",
  email: "info@alessandroveneziani.it"
} as const;

export type EditorialImageAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
  recommendedRatio?: string;
  suggestedRealAssetName?: string;
};

type MailtoOptions = {
  subject: string;
  body?: string;
};

export const createMailtoLink = ({ subject, body }: MailtoOptions) => {
  const params = new URLSearchParams();

  params.set("subject", subject);

  if (body) {
    params.set("body", body);
  }

  return `mailto:${siteConfig.email}?${params.toString()}`;
};

export const inquiryLinks = {
  consultation: createMailtoLink({
    subject: "Richiesta consulenza dal sito AVM Asset Direction"
  }),
  investors: createMailtoLink({
    subject: "Richiesta accesso area investitori AVM Asset Direction"
  }),
  general: createMailtoLink({
    subject: "Richiesta informazioni dal sito AVM Asset Direction"
  })
} as const;

type NavigationItem = {
  href: string;
  label: string;
  emphasized?: boolean;
};

export const navigation: readonly NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/asset-direction", label: "Asset Direction" },
  { href: "/metodo-avm", label: "Metodo" },
  { href: "/progetti", label: "Progetti" },
  { href: "/chi-e-avm", label: "Chi è AVM" },
  { href: "/contatti", label: "Contatti", emphasized: true }
] as const;

export const footerNavigation = navigation;

export const footerLegalNavigation = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" }
] as const;

export const socialLinks = {
  instagram: null,
  linkedin: null
} as const;

export const homeMetadata = {
  h1: "Asset Direction e valorizzazione immobiliare",
  seoTitle: "AVM Asset Direction | Valorizzazione immobiliare a Milano",
  seoDescription:
    "AVM Asset Direction guida la trasformazione degli immobili attraverso distribuzione, luce, materia, funzione e strategia."
} as const;

export const homeHero = {
  eyebrow: "ASSET DIRECTION",
  title: [
    "Ogni immobile possiede un potenziale.",
    "AVM ne definisce la direzione."
  ],
  description:
    "AVM Asset Direction osserva, interpreta e guida la trasformazione dell’immobile, coordinando spazio, luce, materia e investimento all’interno di una visione unica.",
  primaryCta: {
    label: "Scopri l’Asset Direction",
    href: "/asset-direction"
  },
  secondaryCta: {
    label: "Esplora i progetti",
    href: "/progetti"
  },
  image: {
    src: "/images/home/avm-home-hero-bedroom.png",
    alt: "Camera da letto con parete materica, luce architettonica integrata e atmosfera calda",
    objectPosition: "68% center",
    recommendedRatio: "21:10",
    suggestedRealAssetName: "public/images/home/avm-home-hero-bedroom.png"
  }
} as const;

export const homePositioning = {
  eyebrow: "Posizionamento",
  title: "Prima di progettare come apparirà, definiamo cosa deve diventare.",
  paragraphs: [
    "AVM non parte da uno stile da applicare.",
    "Parte dalla pianta, dalla destinazione, dal contesto e dal potenziale reale dell’immobile.",
    "Ogni scelta viene guidata da una direzione precisa."
  ],
  statement: ["Osservare.", "Interpretare.", "Dirigere."],
  question:
    "Ogni decisione progettuale deve rispondere a una domanda: questa scelta aiuta davvero l’immobile a esprimere il suo potenziale?",
  cta: {
    label: "Che cos’è Asset Direction",
    href: "/asset-direction"
  },
  image: {
    src: "/images/projects/certosa-residence.png",
    alt: "Interno residenziale con gerarchie luminose, materiali caldi e proporzioni controllate",
    objectPosition: "center center",
    recommendedRatio: "4:5",
    suggestedRealAssetName:
      "public/images/projects/viale-certosa/avm-viale-certosa-positioning-4x5.jpg"
  }
} as const;

export const homeSelectedProjects = {
  eyebrow: "Progetti selezionati",
  title: "Progetti in cui la direzione diventa spazio.",
  description:
    "Una selezione di trasformazioni costruite attraverso distribuzione, luce, materia e valore.",
  cta: {
    label: "Esplora tutti i progetti",
    href: "/progetti"
  },
  projectCtaLabel: "Scopri il progetto",
  projectPendingLabel: "Progetto in preparazione"
} as const;

export const homeMethod = {
  eyebrow: "METODO AVM",
  title: "Sei passaggi. Una sola direzione.",
  description:
    "Dal potenziale dell’immobile alla realizzazione, ogni scelta segue un ordine preciso.",
  steps: [
    {
      index: "01",
      title: "Osservare",
      text: "Leggere lo spazio, i vincoli e le qualità esistenti."
    },
    {
      index: "02",
      title: "Definire",
      text: "Stabilire il ruolo e l’obiettivo dell’immobile."
    },
    {
      index: "03",
      title: "Selezionare",
      text: "Capire cosa conservare, correggere e trasformare."
    },
    {
      index: "04",
      title: "Progettare",
      text: "Tradurre la strategia in scelte concrete."
    },
    {
      index: "05",
      title: "Coordinare",
      text: "Tenere insieme spazio, luce, materia e investimento."
    },
    {
      index: "06",
      title: "Verificare",
      text: "Proteggere la coerenza fino al risultato finale."
    }
  ]
} as const;

export const homeTransformationStory = {
  eyebrow: "Prima e dopo",
  title: "Quando cambia la direzione, cambia anche la percezione dello spazio.",
  description:
    "La Galleria racconta un passaggio netto: da ambiente ibrido e temporaneo a residenza hospitality con atmosfera, identità e continuità gestionale.",
  beforeSectionTitle: "Il punto di partenza",
  resultSectionTitle: "Il risultato",
  beforeTitle: "Showroom e spazio per eventi",
  beforeText:
    "Uno spazio usato come showroom, ufficio e location per eventi. Funzionale, ma ancora privo di una vera identità abitativa.",
  processTitle: "Ridefinizione della destinazione",
  processText:
    "La distribuzione, la luce, gli arredi e l’atmosfera sono stati coordinati per trasformare lo spazio in una residenza destinata all’ospitalità.",
  afterTitle: "La Galleria",
  afterText:
    "Una residenza hospitality più chiara, più coerente e più riconoscibile.",
  comparisonTitle: "Un confronto leggibile, senza mediazioni.",
  changesTitle: "Cosa è cambiato",
  changes: [
    {
      title: "Destinazione",
      text: "Da showroom ibrido a residenza hospitality."
    },
    {
      title: "Atmosfera",
      text: "Da neutra e dispersa a calda, riconoscibile e abitabile."
    },
    {
      title: "Lettura",
      text: "Da frammentata a continua, con una gerarchia più chiara."
    },
    {
      title: "Valore",
      text: "Da spazio generico a asset più forte e più desiderabile."
    }
  ],
  cta: {
    label: "Scopri il progetto completo",
    href: "/progetti/la-galleria"
  }
} as const;

export const homeMatterAndLight = {
  eyebrow: "Materia e luce",
  title: "La materia dà corpo allo spazio. La luce lo rende leggibile.",
  description:
    "Materiali e illuminazione non vengono aggiunti alla fine. Sono parte della struttura del progetto.",
  mainImage: {
    src: "/images/home/avm-materia-luce-main.webp",
    alt: "Ambiente con lampadario dorato a raggiera, pareti verdi verticali illuminate, tavolo rotondo centrale e superfici in pietra",
    objectPosition: "center center",
    recommendedRatio: "16:9",
    suggestedRealAssetName:
      "public/images/home/avm-materia-luce-main.webp"
  },
  supportImage: {
    src: "/images/home/avm-materia-luce-bedroom.webp",
    alt: "Camera da letto con armadio in vetro fumé illuminato, letto imbottito, parete marmorea retroilluminata e listelli verticali in legno",
    objectPosition: "center center",
    recommendedRatio: "4:5",
    suggestedRealAssetName:
      "public/images/home/avm-materia-luce-bedroom.webp"
  }
} as const;

export const homeFounder = {
  eyebrow: "Alessandro Veneziani",
  title: "Una direzione richiede qualcuno che se ne assuma la responsabilità.",
  paragraphs: [
    "Alessandro Veneziani fonda AVM come evoluzione di un percorso tra valorizzazione immobiliare, progetto, gestione e direzione creativa.",
    "Il suo lavoro parte dalla capacità di leggere il potenziale dell’immobile e tradurlo in una strategia concreta."
  ],
  cta: {
    label: "Scopri la visione AVM",
    href: "/chi-e-avm"
  },
  image: {
    src: "/images/home/alessandro-veneziani-avm.webp",
    alt: "Ritratto di Alessandro Veneziani con giacca scura su fondo neutro e luce morbida",
    objectPosition: "72% center",
    recommendedRatio: "3:2",
    suggestedRealAssetName:
      "public/images/home/alessandro-veneziani-avm.webp"
  }
} as const;

export const homeFinalContact = {
  eyebrow: "Contatto finale",
  title: "Parliamo del tuo immobile.",
  description:
    "Raccontaci brevemente il progetto oppure prenota una consulenza con Alessandro Veneziani.",
  primaryCta: {
    label: "Richiedi una prima valutazione",
    href: "/contatti"
  },
  secondaryCta: {
    label: "Prenota una consulenza",
    href: "/consulenza"
  }
} as const;

export const homePillars = [
  {
    id: "01",
    title: "Controllo",
    description:
      "Processi chiari, standard coerenti, continuità reale."
  },
  {
    id: "02",
    title: "Direzione",
    description:
      "Materia, luce e tono al servizio del valore."
  },
  {
    id: "03",
    title: "Posizionamento",
    description:
      "Un’identità più netta per immobili più forti."
  }
] as const;

export const positioningPoints = [
  {
    label: "Valore percepito",
    text: "Prima si vede, poi si sente, poi si misura."
  },
  {
    label: "Posizionamento",
    text: "Direzione chiara, lettura coerente, identità più credibile."
  },
  {
    label: "Asset enhancement",
    text: "Gestione, estetica e strategia convergono in un processo concreto e ordinato."
  }
] as const;

export const methodSteps = [
  {
    index: "01",
    title: "Diagnosi",
    text: "Leggiamo immobile, target e potenziale reale."
  },
  {
    index: "02",
    title: "Direzione",
    text: "Definiamo identità, tono e coerenza."
  },
  {
    index: "03",
    title: "Attivazione",
    text: "Traduciamo la visione in gestione concreta."
  },
  {
    index: "04",
    title: "Consolidamento",
    text: "Manteniamo standard, percezione e valore nel tempo."
  }
] as const;

export const audienceSegments = [
  {
    title: "Proprietari",
    description:
      "Più controllo, più identità, più valore nel tempo."
  },
  {
    title: "Investitori",
    description:
      "Operazioni con direzione chiara e posizionamento solido."
  },
  {
    title: "Partner / Developer",
    description:
      "Un interlocutore che unisce visione ed execution."
  }
] as const;

export const services = [
  {
    title: "Controllo operativo",
    summary:
      "Processi chiari, continuità concreta e un presidio costante dell’asset.",
    deliverables: [
      "Presidio operativo e coordinamento",
      "Continuità gestionale senza dispersione",
      "Standard coerenti nel tempo"
    ]
  },
  {
    title: "Direzione estetica",
    summary:
      "Materia, luce e proporzioni lavorano per rendere il valore più leggibile e più forte.",
    deliverables: [
      "Direzione su tono, materia e atmosfera",
      "Coerenza tra spazio e percezione",
      "Interventi calibrati sul posizionamento"
    ]
  },
  {
    title: "Posizionamento",
    summary:
      "Ogni immobile trova una direzione più precisa, più credibile e più selettiva.",
    deliverables: [
      "Lettura del target e del contesto",
      "Definizione della direzione dell’asset",
      "Allineamento tra gestione, spazio e valore"
    ]
  }
] as const;

export const investorPrinciples = [
  "Opportunità selezionate, sviluppate caso per caso.",
  "Accesso riservato a partner e interlocutori già qualificati.",
  "Collaborazioni strutturate con un perimetro operativo chiaro.",
  "Nessuna comunicazione di rendimenti, promesse o offerta al pubblico."
] as const;

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export const getSiteUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

  const normalizedUrl = envUrl.startsWith("http")
    ? envUrl
    : `https://${envUrl}`;

  return new URL(normalizedUrl);
};

export const createMetadata = ({
  title,
  description,
  path = "/"
}: MetadataInput): Metadata => {
  const siteUrl = getSiteUrl();
  const pageUrl = new URL(path, siteUrl);

  return {
    metadataBase: siteUrl,
    applicationName: siteConfig.name,
    title,
    description,
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        {
          url: brandAssets.favicon,
          type: "image/svg+xml"
        },
        {
          url: brandAssets.icon192,
          sizes: "192x192",
          type: "image/svg+xml"
        },
        {
          url: brandAssets.icon512,
          sizes: "512x512",
          type: "image/svg+xml"
        }
      ],
      apple: [
        {
          url: brandAssets.appleTouchIcon,
          sizes: "180x180",
          type: "image/svg+xml"
        }
      ],
      shortcut: brandAssets.favicon
    },
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "it_IT",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
};
