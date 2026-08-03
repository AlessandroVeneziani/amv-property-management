import {
  homeTransformationStory,
  inquiryLinks,
  type EditorialImageAsset
} from "@/content/site";
import {
  brunelleschi4CaseStudy,
  type CaseStudyAsset
} from "@/content/case-studies/brunelleschi-4";

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

export type ProjectPageVisibility = "published" | "draft";

export type ProjectPageImage = EditorialImageAsset & {
  mobileObjectPosition?: string;
};

export type ProjectPageFact = {
  label: string;
  value: string;
};

export type ProjectPageNarrative = {
  introduction?: string[];
  startingPoint?: string[];
  objective?: string[];
  designDirection?: string[];
  distribution?: string;
  light?: string;
  matter?: string;
  result?: string[];
  expectedDirection?: string[];
};

export type ProjectPageEditorialSection = {
  type: "editorial";
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image: ProjectPageImage;
  imageSide?: "left" | "right";
  surface?: "transparent" | "light";
};

export type ProjectPageFullWidthSection = {
  type: "full-width-media";
  id: string;
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  image: ProjectPageImage;
};

export type ProjectPageFocusSection = {
  type: "focus";
  id: string;
  eyebrow?: string;
  title?: string;
  items: Array<{
    label: string;
    text: string;
  }>;
};

export type ProjectPageGallerySection = {
  type: "gallery";
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  images: ProjectPageImage[];
};

export type ProjectPageRenderSequenceSection = {
  type: "render-sequence";
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items: Array<{
    id: string;
    title: string;
    image: ProjectPageImage;
    width: number;
    height: number;
  }>;
};

export type ProjectPageBeforeAfterSection = {
  type: "before-after";
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  beforeLabel: string;
  afterLabel: string;
  before: ProjectPageImage;
  after: ProjectPageImage;
};

export type ProjectPageOutcomeSection = {
  type: "outcome";
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image?: ProjectPageImage;
  mode?: "result" | "expected";
};

export type ProjectPageSection =
  | ProjectPageEditorialSection
  | ProjectPageFullWidthSection
  | ProjectPageFocusSection
  | ProjectPageGallerySection
  | ProjectPageRenderSequenceSection
  | ProjectPageBeforeAfterSection
  | ProjectPageOutcomeSection;

export type ProjectPageCta = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  primary: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export type ProjectPageTemplate = {
  slug: string;
  title: string;
  place: string;
  category: string;
  status: string;
  visibility: ProjectPageVisibility;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image?: ProjectPageImage;
  };
  summaryCard?: {
    eyebrow?: string;
    title?: string;
    items: ProjectPageFact[];
  };
  narrative?: ProjectPageNarrative;
  sections: ProjectPageSection[];
  finalCta?: ProjectPageCta;
  navigation?: {
    previousSlug?: string;
    nextSlug?: string;
  };
};

const hasText = (value: string | undefined | null): value is string =>
  Boolean(value && value.trim().length > 0);

const isDefined = <T,>(value: T | null | undefined): value is T =>
  value !== undefined && value !== null;

const compactText = (values: Array<string | undefined | null>) =>
  values.filter(hasText);

const toProjectPageImage = (
  image: EditorialImageAsset,
  mobileObjectPosition?: string
): ProjectPageImage => ({
  ...image,
  mobileObjectPosition: mobileObjectPosition ?? image.objectPosition
});

const toCaseStudyProjectPageImage = (
  asset: CaseStudyAsset,
  options?: {
    alt?: string;
    objectPosition?: string;
    mobileObjectPosition?: string;
  }
): ProjectPageImage => ({
  src: asset.src,
  alt:
    options?.alt ??
    `${brunelleschi4CaseStudy.title}, ${asset.label.toLowerCase()}`,
  objectPosition: options?.objectPosition ?? "center center",
  mobileObjectPosition: options?.mobileObjectPosition ?? "center center",
  suggestedRealAssetName: `public${asset.src}`
});

const buildSummaryCard = (project: Project) => ({
  eyebrow: "Scheda sintetica",
  title: project.title,
  items: [
    { label: "Luogo", value: project.city },
    { label: "Categoria", value: project.category },
    { label: "Stato", value: project.status },
    { label: "Anno", value: project.year },
    { label: "Focus", value: project.focus.join(" · ") }
  ]
});

const buildGenericProjectSections = (project: Project): ProjectPageSection[] => {
  const sections: ProjectPageSection[] = [];
  const gallery = project.galleryImages.map((image) => toProjectPageImage(image));
  const galleryLead = gallery.find((image) => image.src !== project.coverImage.src);
  const galleryTail = gallery.filter((image) => image.src !== galleryLead?.src);
  const gallerySectionImages = galleryTail.length ? galleryTail : gallery;

  if (galleryLead) {
    sections.push({
      type: "full-width-media",
      id: "hero-detail",
      eyebrow: "Fotografia del progetto",
      image: galleryLead
    });
  }

  if (hasText(project.approach)) {
    sections.push({
      type: "editorial",
      id: "direction",
      eyebrow: "Direzione progettuale",
      title: "Una regia che tiene insieme spazio, tono e funzione.",
      paragraphs: compactText([project.approach]),
      image: toProjectPageImage(galleryTail[0] ?? project.coverImage),
      imageSide: "left",
      surface: "light"
    });
  }

  if (gallerySectionImages.length > 0) {
    sections.push({
      type: "gallery",
      id: "gallery",
      eyebrow: "Galleria",
      title: "Fotografie e dettagli del progetto.",
      images: gallerySectionImages
    });
  }

  if (hasText(project.outcome)) {
    sections.push({
      type: "outcome",
      id: "result",
      eyebrow: "Risultato",
      title: "Un risultato che rende l’asset più chiaro e più leggibile.",
      paragraphs: compactText([project.outcome]),
      image: galleryTail[1]
    });
  }

  return sections;
};

const buildGenericProjectPage = (project: Project): ProjectPageTemplate => ({
  slug: project.slug,
  title: project.title,
  place: project.city,
  category: project.category,
  status: project.status,
  visibility: "published",
  description: project.summary,
  hero: {
    eyebrow: `${project.city.toUpperCase()} · ${project.category.toUpperCase()}`,
    title: project.title,
    description: project.description,
    image: toProjectPageImage(project.coverImage, "center center")
  },
  summaryCard: buildSummaryCard(project),
  narrative: {
    introduction: compactText([project.summary, project.description]),
    startingPoint: compactText([project.summary]),
    objective: compactText([project.challenge]),
    designDirection: compactText([project.approach]),
    result: compactText([project.outcome])
  },
  sections: buildGenericProjectSections(project),
  finalCta: {
    eyebrow: "Contatto",
    title: "Ogni trasformazione efficace nasce da una lettura lucida del contesto.",
    paragraphs: [
      "Se il progetto richiede direzione, coordinamento e una visione coerente, possiamo partire da qui."
    ],
    primary: {
      label: "Richiedi una prima analisi",
      href: inquiryLinks.consultation
    },
    secondary: {
      label: "Vai ai contatti",
      href: "/contatti"
    }
  }
});

const buildLaGalleriaProjectPage = (project: Project): ProjectPageTemplate => {
  const beforeImage = project.homeMedia?.before
    ? toProjectPageImage(project.homeMedia.before)
    : null;
  const afterImage = project.homeMedia?.after
    ? toProjectPageImage(project.homeMedia.after, "56% center")
    : null;

  return {
    slug: project.slug,
    title: project.title,
    place: project.city,
    category: project.category,
    status: project.status,
    visibility: "published",
    description: project.summary,
    hero: {
      eyebrow: `${project.city.toUpperCase()} · ${project.category.toUpperCase()}`,
      title: project.title,
      description: project.description,
      image: toProjectPageImage(project.coverImage, "52% center")
    },
    summaryCard: buildSummaryCard(project),
    narrative: {
      introduction: compactText([project.summary, project.description]),
      startingPoint: compactText([homeTransformationStory.beforeText]),
      objective: compactText([project.challenge]),
      designDirection: compactText([homeTransformationStory.processText]),
      distribution:
        "La destinazione d’uso è stata ridefinita per trasformare uno spazio ibrido in una residenza hospitality leggibile.",
      light:
        "La luce è stata coordinata per costruire un’atmosfera più calda, riconoscibile e coerente con l’esperienza abitativa.",
      matter:
        "Arredi, superfici e tono complessivo sono stati riallineati per dare continuità percettiva e rafforzare il posizionamento.",
      result: compactText([project.outcome, homeTransformationStory.afterText])
    },
    sections: [
      ...(beforeImage && afterImage
        ? ([
            {
              type: "before-after",
              id: "before-after",
              eyebrow: homeTransformationStory.eyebrow,
              title: homeTransformationStory.comparisonTitle,
              description: homeTransformationStory.description,
              beforeLabel: homeTransformationStory.beforeSectionTitle,
              afterLabel: homeTransformationStory.resultSectionTitle,
              before: beforeImage,
              after: afterImage
            } satisfies ProjectPageBeforeAfterSection
          ] as ProjectPageSection[])
        : []),
      {
        type: "focus",
        id: "distribution-light-matter",
        eyebrow: "Distribuzione, luce e materia",
        title: "Tre livelli che lavorano insieme per rendere il progetto più solido.",
        items: [
          {
            label: "Distribuzione",
            text: "Il passaggio da showroom ibrido a residenza hospitality parte dalla ridefinizione dell’uso e delle gerarchie spaziali."
          },
          {
            label: "Luce",
            text: "L’illuminazione costruisce un’atmosfera più calda, riconoscibile e coerente con la permanenza degli ospiti."
          },
          {
            label: "Materia",
            text: "Arredi, superfici e continuità visiva danno densità al progetto e rafforzano la percezione del valore."
          }
        ]
      },
      {
        type: "outcome",
        id: "result",
        eyebrow: "Risultato",
        title: "Una residenza hospitality più chiara, più coerente e più riconoscibile.",
        paragraphs: compactText([project.outcome, homeTransformationStory.afterText]),
        image: toProjectPageImage(project.coverImage, "56% center"),
        mode: "result"
      }
    ],
    finalCta: {
      eyebrow: "Prossimo passo",
      title: "Quando direzione e gestione lavorano insieme, il valore diventa più leggibile.",
      paragraphs: [
        "Se vuoi costruire un asset più chiaro, più solido e più desiderabile, possiamo partire da una prima analisi."
      ],
      primary: {
        label: "Richiedi una prima analisi",
        href: inquiryLinks.consultation
      },
      secondary: {
        label: "Torna ai progetti",
        href: "/progetti"
      }
    }
  };
};

const brunelleschi4RenderAssetsById = new Map(
  brunelleschi4CaseStudy.assets.render.map((asset) => [asset.id, asset])
);

const buildBrunelleschiDraftSections = (): ProjectPageSection[] => {
  const appartamento1Chapter = brunelleschi4CaseStudy.renderChapters.find(
    (chapter) => chapter.id === "appartamento-1"
  );

  if (!appartamento1Chapter) {
    return [];
  }

  const items = appartamento1Chapter.assetIds
    .map((assetId) => brunelleschi4RenderAssetsById.get(assetId))
    .filter(isDefined)
    .map((asset) => ({
      id: asset.id,
      title: asset.label,
      image: toCaseStudyProjectPageImage(asset),
      width: asset.width,
      height: asset.height
    }));

  if (!items.length) {
    return [];
  }

  return [
    {
      type: "render-sequence",
      id: "appartamento-1-render-sequence",
      eyebrow: "Render definitivi",
      title: "Appartamento 1",
      items
    }
  ];
};

const publishedProjectPageTemplates = projects.map((project) =>
  project.slug === "la-galleria"
    ? buildLaGalleriaProjectPage(project)
    : buildGenericProjectPage(project)
);

const projectPageDrafts: ProjectPageTemplate[] = [
  {
    slug: "brunelleschi",
    title: "Brunelleschi",
    place: "Milano",
    category: "Concept residenziale",
    status: "Progetto in preparazione",
    visibility: "draft",
    description:
      "Una nuova lettura dello spazio costruita attraverso luce, arredi su misura e continuità visiva.",
    hero: {
      eyebrow: "MILANO · CONCEPT RESIDENZIALE",
      title: "Brunelleschi",
      description:
        "Una nuova lettura dello spazio costruita attraverso luce, arredi su misura e continuità visiva."
    },
    summaryCard: {
      eyebrow: "Scheda sintetica",
      title: "Brunelleschi",
      items: [
        { label: "Luogo", value: "Milano" },
        { label: "Categoria", value: "Concept residenziale" },
        { label: "Stato", value: "Progetto in preparazione" }
      ]
    },
    narrative: {
      introduction: [
        "Una nuova lettura dello spazio costruita attraverso luce, arredi su misura e continuità visiva."
      ]
    },
    sections: buildBrunelleschiDraftSections()
  }
];

export const projectPageTemplates: ProjectPageTemplate[] = [
  ...publishedProjectPageTemplates,
  ...projectPageDrafts
];

export const publishedProjectPages = projectPageTemplates.filter(
  (project): project is ProjectPageTemplate => project.visibility === "published"
);

export const getProjectPageBySlug = (slug: string) =>
  publishedProjectPages.find((project) => project.slug === slug) ?? null;

export const getProjectPageNavigation = (slug: string) => {
  const index = publishedProjectPages.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {
      previous: null,
      next: null
    };
  }

  const current = publishedProjectPages[index];
  const previousSlug = current.navigation?.previousSlug;
  const nextSlug = current.navigation?.nextSlug;

  const previous =
    (previousSlug
      ? publishedProjectPages.find((project) => project.slug === previousSlug)
      : publishedProjectPages[index - 1]) ?? null;
  const next =
    (nextSlug
      ? publishedProjectPages.find((project) => project.slug === nextSlug)
      : publishedProjectPages[index + 1]) ?? null;

  return { previous, next };
};
