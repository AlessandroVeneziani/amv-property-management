import type { EditorialImageAsset } from "@/content/site";

export type ProjectStatus =
  | "In portfolio"
  | "In valorizzazione"
  | "Gestione attiva"
  | "Completato";

export type ProjectHomeMedia = {
  feature?: EditorialImageAsset;
  split?: EditorialImageAsset;
  stack?: EditorialImageAsset;
  before?: EditorialImageAsset;
  after?: EditorialImageAsset;
};

export type Project = {
  slug: string;
  title: string;
  city: string;
  status: ProjectStatus;
  category: string;
  year: string;
  coverImage: EditorialImageAsset;
  galleryImages: EditorialImageAsset[];
  homeMedia?: ProjectHomeMedia;
  summary: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  focus: string[];
  metrics: { label: string; value: string }[];
  valueStory?: {
    before: string;
    after: string;
    value: string;
  };
};

export type ListedProject = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: EditorialImageAsset;
  city: string;
  status: ProjectStatus;
  href: string | null;
  summary?: string;
  valueStory?: Project["valueStory"];
};

export const projects: Project[] = [
  {
    slug: "la-galleria",
    title: "La Galleria",
    city: "Milano",
    status: "Gestione attiva",
    category: "Residenza hospitality",
    year: "2026",
    coverImage: {
      src: "/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg",
      alt: "La Galleria dopo la trasformazione in residenza hospitality, con living, parete listellata e lampadario Dandelion",
      objectPosition: "56% center",
      recommendedRatio: "16:10",
      suggestedRealAssetName:
        "public/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg"
    },
    galleryImages: [
      {
        src: "/images/projects/la-galleria/before/la-galleria-showroom-before-01.jpg",
        alt: "La Galleria prima della trasformazione, utilizzata come showroom, ufficio e spazio eventi",
        objectPosition: "center center",
        recommendedRatio: "3:2",
        suggestedRealAssetName:
          "public/images/projects/la-galleria/before/la-galleria-showroom-before-01.jpg"
      },
      {
        src: "/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg",
        alt: "La Galleria dopo la trasformazione in residenza hospitality, con living, parete listellata e lampadario Dandelion",
        objectPosition: "58% center",
        recommendedRatio: "3:2",
        suggestedRealAssetName:
          "public/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg"
      }
    ],
    homeMedia: {
      feature: {
        src: "/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg",
        alt: "La Galleria dopo la trasformazione in residenza hospitality a Milano",
        objectPosition: "56% center",
        recommendedRatio: "3:2",
        suggestedRealAssetName:
          "public/images/projects/la-galleria/after/la-galleria-hospitality-after-01.jpg"
      },
      split: {
        src: "/images/projects/la-galleria/after/la-galleria-hospitality-after-01.jpg",
        alt: "La Galleria dopo la trasformazione in residenza hospitality a Milano",
        objectPosition: "center center",
        recommendedRatio: "3:2",
        suggestedRealAssetName:
          "public/images/projects/la-galleria/after/la-galleria-hospitality-after-01.jpg"
      },
      before: {
        src: "/images/projects/la-galleria/before/la-galleria-showroom-before-01.jpg",
        alt: "La Galleria prima della trasformazione, utilizzata come showroom, ufficio e spazio eventi",
        objectPosition: "center center",
        recommendedRatio: "3:2",
        suggestedRealAssetName:
          "public/images/projects/la-galleria/before/la-galleria-showroom-before-01.jpg"
      },
      after: {
        src: "/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg",
        alt: "La Galleria dopo la trasformazione in residenza hospitality, con living, parete listellata e lampadario Dandelion",
        objectPosition: "58% center",
        recommendedRatio: "3:2",
        suggestedRealAssetName:
          "public/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg"
      }
    },
    summary:
      "Uno showroom riconvertito in residenza hospitality, realizzato e oggi gestito con una regia coerente tra atmosfera, esperienza e standard operativi.",
    description:
      "AVM ha trasformato uno spazio privo di identità abitativa in una residenza hospitality riconoscibile, leggibile e pronta alla gestione.",
    challenge:
      "Ridefinire la destinazione d’uso, correggere la percezione dello spazio e costruire un asset più forte e più chiaro.",
    approach:
      "Ridefinizione della destinazione, coordinamento di atmosfera, arredi e standard operativi, fino alla messa in gestione.",
    outcome:
      "Uno spazio trasformato, realizzato e in gestione, con una lettura più solida e una presenza più credibile.",
    focus: [
      "Spatial editing",
      "Restyling percettivo",
      "Gestione coordinata"
    ],
    metrics: [
      { label: "Focus", value: "Atmosfera e posizionamento" },
      { label: "Asset", value: "Hospitality residence" },
      { label: "Processo", value: "Design + management" }
    ],
    valueStory: {
      before: "immobile elegante ma poco posizionato.",
      after: "identità più chiara, atmosfera più riconoscibile.",
      value: "maggiore appeal e percezione premium."
    }
  },
  {
    slug: "certosa-residence",
    title: "Viale Certosa",
    city: "Milano",
    status: "In valorizzazione",
    category: "Monolocale residenziale",
    year: "2026",
    coverImage: {
      src: "/images/projects/certosa-residence.png",
      alt: "Viale Certosa, interno residenziale con assetto ordinato e tono caldo",
      objectPosition: "center center",
      recommendedRatio: "5:4",
      suggestedRealAssetName:
        "public/images/projects/viale-certosa/avm-viale-certosa-cover-5x4.jpg"
    },
    galleryImages: [
      {
        src: "/images/projects/certosa-residence.png",
        alt: "Viale Certosa, veduta principale del living",
        objectPosition: "center center",
        recommendedRatio: "16:10",
        suggestedRealAssetName:
          "public/images/projects/viale-certosa/avm-viale-certosa-gallery-01-16x10.jpg"
      },
      {
        src: "/images/projects/la-galleria.png",
        alt: "Viale Certosa, dettaglio di atmosfera e materiali",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/viale-certosa/avm-viale-certosa-gallery-02-4x5.jpg"
      },
      {
        src: "/images/projects/method-detail.png",
        alt: "Viale Certosa, dettaglio luce e materia",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/viale-certosa/avm-viale-certosa-gallery-03-4x5.jpg"
      }
    ],
    homeMedia: {
      split: {
        src: "/images/projects/certosa-residence.png",
        alt: "Viale Certosa, immagine principale per card Home",
        objectPosition: "center center",
        recommendedRatio: "5:4",
        suggestedRealAssetName:
          "public/images/projects/viale-certosa/avm-viale-certosa-home-split-5x4.jpg"
      },
      stack: {
        src: "/images/projects/certosa-residence.png",
        alt: "Viale Certosa, dettaglio verticale per stack editoriale",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/viale-certosa/avm-viale-certosa-home-stack-4x5.jpg"
      }
    },
    summary:
      "Un monolocale ristrutturato e organizzato per una gestione residenziale semplice, funzionale e continuativa.",
    description:
      "L’immobile viene seguito con un’impostazione più chiara e ordinata, per rendere la gestione lineare e la percezione più coerente.",
    challenge:
      "Tradurre un potenziale poco espresso in una lettura più contemporanea e più facilmente gestibile.",
    approach:
      "Riorganizzazione del tono complessivo, semplificazione percettiva e maggiore controllo dell’utilizzo quotidiano.",
    outcome:
      "Un asset più chiaro, più funzionale e più stabile nella gestione.",
    focus: ["Valorizzazione estetica", "Direzione immagine", "Controllo qualità"],
    metrics: [
      { label: "Focus", value: "Tono materico" },
      { label: "Asset", value: "Interno signorile" },
      { label: "Processo", value: "Audit + intervento" }
    ],
    valueStory: {
      before: "potenziale non espresso in modo coerente.",
      after: "lettura più contemporanea e controllata dello spazio.",
      value: "posizionamento più solido e desiderabile."
    }
  },
  {
    slug: "marco-aurelio",
    title: "Marco Aurelio 45",
    city: "Roma",
    status: "Completato",
    category: "Operazione immobiliare completa",
    year: "2025",
    coverImage: {
      src: "/images/projects/marco-aurelio.png",
      alt: "Marco Aurelio 45, camera e tono residenziale calibrato",
      objectPosition: "center center",
      recommendedRatio: "5:4",
      suggestedRealAssetName:
        "public/images/projects/marco-aurelio-45/avm-marco-aurelio-45-cover-5x4.jpg"
    },
    galleryImages: [
      {
        src: "/images/projects/marco-aurelio.png",
        alt: "Marco Aurelio 45, vista principale dello spazio",
        objectPosition: "center center",
        recommendedRatio: "16:10",
        suggestedRealAssetName:
          "public/images/projects/marco-aurelio-45/avm-marco-aurelio-45-gallery-01-16x10.jpg"
      },
      {
        src: "/images/projects/method-detail.png",
        alt: "Marco Aurelio 45, dettaglio di materia e luce",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/marco-aurelio-45/avm-marco-aurelio-45-gallery-02-4x5.jpg"
      },
      {
        src: "/images/projects/certosa-residence.png",
        alt: "Marco Aurelio 45, secondo punto di vista dell'intervento",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/marco-aurelio-45/avm-marco-aurelio-45-gallery-03-4x5.jpg"
      }
    ],
    homeMedia: {
      split: {
        src: "/images/projects/marco-aurelio.png",
        alt: "Marco Aurelio 45, immagine principale per card Home",
        objectPosition: "center center",
        recommendedRatio: "5:4",
        suggestedRealAssetName:
          "public/images/projects/marco-aurelio-45/avm-marco-aurelio-45-home-split-5x4.jpg"
      },
      stack: {
        src: "/images/projects/marco-aurelio.png",
        alt: "Marco Aurelio 45, dettaglio verticale per stack editoriale",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/marco-aurelio-45/avm-marco-aurelio-45-home-stack-4x5.jpg"
      }
    },
    summary:
      "Due monolocali gemelli valorizzati attraverso acquisto, ristrutturazione, locazione e vendita.",
    description:
      "Il progetto è stato seguito come operazione immobiliare completa, dalla fase di acquisizione fino alla vendita finale.",
    challenge:
      "Coordinare più fasi dell’operazione mantenendo chiarezza economica, controllo esecutivo e qualità percepita.",
    approach:
      "Acquisto, ridefinizione dello spazio, ristrutturazione, messa a reddito e successiva dismissione con una regia unitaria.",
    outcome:
      "Un’operazione immobiliare conclusa con un asset più leggibile, più forte e più controllato in tutte le sue fasi.",
    focus: ["Acquisizione", "Ristrutturazione", "Messa a reddito"],
    metrics: [
      { label: "Focus", value: "Operazione completa" },
      { label: "Asset", value: "Residenziale urbano" },
      { label: "Processo", value: "Acquisto + valorizzazione + vendita" }
    ],
    valueStory: {
      before: "gestione ordinaria e immagine poco distintiva.",
      after: "continuità visiva, maggiore cura dell’esperienza.",
      value: "asset più leggibile, più gestibile, più forte."
    }
  },
  {
    slug: "brera-corte",
    title: "Brera Corte",
    city: "Milano",
    status: "Completato",
    category: "Pied-a-terre",
    year: "2025",
    coverImage: {
      src: "/images/hero-milano.png",
      alt: "Brera Corte, interno serale con luce controllata",
      objectPosition: "center center",
      recommendedRatio: "16:10",
      suggestedRealAssetName:
        "public/images/projects/brera-corte/avm-brera-corte-cover-16x10.jpg"
    },
    galleryImages: [
      {
        src: "/images/hero-milano.png",
        alt: "Brera Corte, veduta principale dell'interno",
        objectPosition: "center center",
        recommendedRatio: "16:10",
        suggestedRealAssetName:
          "public/images/projects/brera-corte/avm-brera-corte-gallery-01-16x10.jpg"
      },
      {
        src: "/images/projects/la-galleria.png",
        alt: "Brera Corte, dettaglio di atmosfera",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/brera-corte/avm-brera-corte-gallery-02-4x5.jpg"
      },
      {
        src: "/images/projects/method-detail.png",
        alt: "Brera Corte, dettaglio materico",
        objectPosition: "center center",
        recommendedRatio: "4:5",
        suggestedRealAssetName:
          "public/images/projects/brera-corte/avm-brera-corte-gallery-03-4x5.jpg"
      }
    ],
    summary:
      "Un taglio più essenziale e più preciso per un immobile che aveva bisogno di densità, non di eccesso.",
    description:
      "Il progetto ha consolidato linguaggio materico, tono luminoso e leggibilità dell’insieme con un intervento misurato.",
    challenge:
      "Trasformare un appartamento corretto ma anonimo in uno spazio con presenza e memoria.",
    approach:
      "Selezione degli elementi, revisione delle relazioni visive e allineamento delle scelte operative alla nuova identità.",
    outcome:
      "Un risultato più netto, più credibile e più coerente con la fascia a cui l’immobile si rivolge.",
    focus: ["Direzione artistica", "Coerenza visiva", "Asset refinement"],
    metrics: [
      { label: "Focus", value: "Identità spaziale" },
      { label: "Asset", value: "Residenza urbana" },
      { label: "Processo", value: "Intervento selettivo" }
    ]
  }
];

export const projectCities = Array.from(new Set(projects.map((project) => project.city)));
export const projectStatuses = Array.from(
  new Set(projects.map((project) => project.status))
) as ProjectStatus[];

const laGalleriaProject =
  projects.find((project) => project.slug === "la-galleria") ?? null;

export const listedProjects: ListedProject[] = [
  {
    slug: "brunelleschi",
    title: "Brunelleschi",
    eyebrow: "MILANO · CONCEPT RESIDENZIALE",
    description:
      "Una nuova lettura dello spazio costruita attraverso luce, arredi su misura e continuità visiva.",
    image: {
      src: "/images/projects/brunelleschi/brunelleschi-home-cover.webp",
      alt: "Brunelleschi, living con divano curvo, lampadario ad anelli, tavolo davanti alla finestra e cucina sul fondo",
      objectPosition: "center center",
      recommendedRatio: "16:9",
      suggestedRealAssetName:
        "public/images/projects/brunelleschi/brunelleschi-home-cover.webp"
    },
    city: "Milano",
    status: "In valorizzazione",
    href: null,
    summary:
      "Una nuova lettura dello spazio costruita attraverso luce, arredi su misura e continuità visiva."
  },
  {
    slug: "imbonati-15",
    title: "Imbonati 15",
    eyebrow: "MILANO · FRAZIONAMENTO E VALORIZZAZIONE",
    description:
      "Un appartamento originario trasformato in due residenze indipendenti, attraverso distribuzione, luce e materia.",
    image: {
      src: "/images/projects/imbonati-15/imbonati-home-cover.webp",
      alt: "Imbonati 15, cucina lineare color tortora con penisola, quattro sgabelli, lampadario scultoreo e zona TV sul fondo",
      objectPosition: "center center",
      recommendedRatio: "16:9",
      suggestedRealAssetName:
        "public/images/projects/imbonati-15/imbonati-home-cover.webp"
    },
    city: "Milano",
    status: "In valorizzazione",
    href: null,
    summary:
      "Un appartamento originario trasformato in due residenze indipendenti, attraverso distribuzione, luce e materia."
  },
  ...(laGalleriaProject
    ? [
        {
          slug: laGalleriaProject.slug,
          title: laGalleriaProject.title,
          eyebrow: `${laGalleriaProject.city.toUpperCase()} · ${laGalleriaProject.category.toUpperCase()}`,
          description: laGalleriaProject.summary,
          image: laGalleriaProject.coverImage,
          city: laGalleriaProject.city,
          status: laGalleriaProject.status,
          href: `/progetti/${laGalleriaProject.slug}`,
          summary: laGalleriaProject.summary,
          valueStory: laGalleriaProject.valueStory
        } satisfies ListedProject
      ]
    : [])
];

export const listedProjectCities = Array.from(
  new Set(listedProjects.map((project) => project.city))
);

export const listedProjectStatuses = Array.from(
  new Set(listedProjects.map((project) => project.status))
) as ProjectStatus[];
