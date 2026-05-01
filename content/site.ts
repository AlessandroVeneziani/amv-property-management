import type { Metadata } from "next";

export const siteConfig = {
  name: "AVM Asset Direction",
  shortName: "AVM",
  description:
    "Diamo direzione al valore immobiliare attraverso gestione, identità e valorizzazione.",
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
    subject: "Richiesta consulenza dal sito AVM"
  }),
  investors: createMailtoLink({
    subject: "Richiesta accesso area investitori AVM"
  }),
  general: createMailtoLink({
    subject: "Richiesta informazioni dal sito AVM"
  })
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/progetti", label: "Progetti" },
  { href: "/metodo", label: "Metodo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/investitori", label: "Investitori" },
  { href: "/contatti", label: "Contatti" }
] as const;

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
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

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
