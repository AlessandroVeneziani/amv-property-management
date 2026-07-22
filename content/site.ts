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
  eyebrow: "Asset Direction",
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
    src: "/images/hero-milano.png",
    alt: "Interno residenziale con vista su Milano e luce serale controllata"
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
    src: "/images/projects/method-detail.png",
    alt: "Soglia architettonica con rivestimenti materici e luce integrata"
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
  slugs: ["la-galleria", "certosa-residence", "marco-aurelio"]
} as const;

export const homeMethod = {
  eyebrow: "Metodo AVM",
  title: "Dalla comprensione alla realizzazione.",
  description: "Ogni progetto segue un processo preciso.",
  cta: {
    label: "Scopri il Metodo AVM",
    href: "/metodo-avm"
  },
  steps: [
    {
      index: "01",
      title: "Osservare",
      text: "Leggere lo spazio, i vincoli e le qualità esistenti."
    },
    {
      index: "02",
      title: "Definire la destinazione",
      text: "Comprendere quale ruolo deve assumere l’immobile."
    },
    {
      index: "03",
      title: "Individuare il potenziale",
      text: "Stabilire cosa conservare, correggere e trasformare."
    },
    {
      index: "04",
      title: "Costruire la strategia",
      text: "Definire priorità, investimento e direzione."
    },
    {
      index: "05",
      title: "Progettare con coerenza",
      text: "Tradurre la visione in scelte concrete."
    },
    {
      index: "06",
      title: "Proteggere la direzione",
      text: "Mantenere coerenza fino alla realizzazione."
    }
  ],
  image: {
    src: "/images/projects/certosa-residence.png",
    alt: "Interno residenziale con gerarchie luminose e materiali controllati"
  }
} as const;

export const homeTransformationStory = {
  eyebrow: "Prima. Processo. Dopo.",
  title: "Il risultato mostra la trasformazione. Il processo mostra il valore.",
  description:
    "AVM racconta ogni progetto attraverso il punto di partenza, le decisioni che hanno guidato la trasformazione e il risultato finale.",
  archiveNote: "Archivio iniziale non ancora pubblicato.",
  processTitle: "Decisione centrale",
  processText:
    "Ridefinizione dell’identità spaziale e calibrazione della presentazione.",
  cta: {
    label: "Scopri i progetti",
    href: "/progetti"
  },
  processImage: {
    src: "/images/projects/method-detail.png",
    alt: "Dettaglio di progetto che mostra soglie, materia e luce indiretta"
  }
} as const;

export const homeMatterAndLight = {
  eyebrow: "Materia e luce",
  title: "La materia dà corpo allo spazio. La luce lo rende leggibile.",
  description:
    "Materiali e illuminazione non vengono aggiunti alla fine. Sono parte della struttura del progetto.",
  images: [
    {
      src: "/images/hero-milano.png",
      alt: "Living con superfici scure, luce calda e skyline milanese"
    },
    {
      src: "/images/projects/method-detail.png",
      alt: "Passaggio architettonico con boiserie, metalli e luce integrata"
    },
    {
      src: "/images/projects/marco-aurelio.png",
      alt: "Camera con testata tessile e illuminazione soffusa"
    },
    {
      src: "/images/projects/la-galleria.png",
      alt: "Zona giorno con tavolo scultoreo, tessuti neutri e luce calibrata"
    }
  ]
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
    src: "/images/projects/method-detail.png",
    alt: "Interno AVM con soglie materiche, luce indiretta e profondità controllata"
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
