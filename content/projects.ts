import {
  homeTransformationStory,
  inquiryLinks,
  type EditorialImageAsset
} from "@/content/site";
import { brunelleschi4CaseStudy } from "@/content/case-studies/brunelleschi-4";
import { imbonati15CaseStudy } from "@/content/case-studies/imbonati-15";

export type ProjectStatus =
  | "In portfolio"
  | "In valorizzazione"
  | "Gestione attiva"
  | "Completato"
  | "Concept progettuale"
  | "In cantiere"
  | "Progetto in sviluppo";

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
    href: "/progetti/imbonati-15",
    summary:
      "Un appartamento originario trasformato in due residenze indipendenti, attraverso distribuzione, luce e materia."
  },
  {
    slug: "brunelleschi",
    title: "Brunelleschi 4",
    eyebrow: "MILANO · FRAZIONAMENTO RESIDENZIALE",
    description:
      "Una nuova lettura dello spazio costruita attraverso luce, arredi su misura e continuità visiva.",
    image: {
      src: "/images/projects/brunelleschi/brunelleschi-home-cover.webp",
      alt: "Brunelleschi 4, living con divano curvo, lampadario ad anelli, tavolo davanti alla finestra e cucina sul fondo",
      objectPosition: "center center",
      recommendedRatio: "16:9",
      suggestedRealAssetName:
        "public/images/projects/brunelleschi/brunelleschi-home-cover.webp"
    },
    city: "Milano",
    status: "Progetto in sviluppo",
    href: "/progetti/brunelleschi",
    summary:
      "Una nuova lettura dello spazio costruita attraverso luce, arredi su misura e continuità visiva."
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
  width?: number;
  height?: number;
  fit?: "cover" | "contain";
};

export type ProjectPageFact = {
  label: string;
  value: string;
};

export type ProjectPageStageBadge = {
  label: string;
  note?: string;
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
  displayMode?: "immersive" | "intrinsic";
  imageWidth?: number;
  imageHeight?: number;
};

export type ProjectPageFocusSection = {
  type: "focus";
  id: string;
  eyebrow?: string;
  title?: string;
  layout?: "default" | "emphasized";
  items: Array<{
    label: string;
    text: string;
  }>;
};

export type ProjectPageGalleryCaption = {
  title: string;
  subtitle?: string;
};

export type ProjectPageGallerySection = {
  type: "gallery";
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  layout?: "default" | "origin-editorial" | "plan-pair";
  captions?: ProjectPageGalleryCaption[];
  images: ProjectPageImage[];
};

export type ProjectPageRenderSequenceSection = {
  type: "render-sequence";
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  layout?: "stack" | "editorial-chapter";
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
  variant?: "light" | "smoky-bronze";
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
  seoTitle?: string;
  seoDescription?: string;
  compactOverview?: boolean;
  overviewLayout?: "default" | "anchored-introduction-panel";
  stageBadge?: ProjectPageStageBadge;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image?: ProjectPageImage;
    variant?: "default" | "photographic";
    titleClassName?: string;
    descriptionClassName?: string;
  };
  summaryCard?: {
    eyebrow?: string;
    title?: string;
    titleClassName?: string;
    variant?: "light" | "smoky-bronze";
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

type ProjectCaseStudyAsset = {
  label: string;
  src: string;
  width: number;
  height: number;
  alt?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
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
  asset: ProjectCaseStudyAsset,
  options?: {
    alt?: string;
    objectPosition?: string;
    mobileObjectPosition?: string;
  }
): ProjectPageImage => ({
  src: asset.src,
  alt:
    options?.alt ??
    asset.alt ??
    `${brunelleschi4CaseStudy.title}, ${asset.label.toLowerCase()}`,
  objectPosition: options?.objectPosition ?? asset.objectPosition ?? "center center",
  mobileObjectPosition:
    options?.mobileObjectPosition ??
    asset.mobileObjectPosition ??
    asset.objectPosition ??
    "center center",
  suggestedRealAssetName: `public${asset.src}`,
  width: asset.width,
  height: asset.height
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
    stageBadge: {
      label: "Completato"
    },
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

const brunelleschi4BeforeAssetsById = new Map(
  brunelleschi4CaseStudy.assets.prima.map((asset) => [asset.id, asset])
);

const brunelleschi4PlanAssetsById = new Map(
  [
    ...brunelleschi4CaseStudy.assets.planimetriaRilievo,
    ...brunelleschi4CaseStudy.assets.planimetriaProgetto
  ].map((asset) => [asset.id, asset])
);

const buildBrunelleschiDraftSections = (): ProjectPageSection[] => {
  if (!brunelleschi4CaseStudy.renderChapters.length) {
    return [];
  }

  const distributionSpaceSection = (() => {
    const distributionSpace = brunelleschi4CaseStudy.distributionSpace;
    const asset = brunelleschi4RenderAssetsById.get(distributionSpace.assetId);

    if (!asset) {
      return null;
    }

    return {
      type: "full-width-media",
      id: "ingresso-bussola",
      eyebrow: distributionSpace.eyebrow,
      title: distributionSpace.title,
      paragraphs: distributionSpace.paragraphs,
      image: toCaseStudyProjectPageImage(asset),
      displayMode: "intrinsic",
      imageWidth: asset.width,
      imageHeight: asset.height
    } satisfies ProjectPageFullWidthSection;
  })();

  const renderSections = brunelleschi4CaseStudy.renderChapters
    .map((chapter) => {
      const items = chapter.assetIds
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
        return null;
      }

      return {
        type: "render-sequence",
        id: `${chapter.id}-render-sequence`,
        eyebrow: "Visione progettuale",
        title: chapter.title,
      description: chapter.description,
      layout: "editorial-chapter",
      items
    } satisfies ProjectPageRenderSequenceSection;
  })
  .filter(isDefined);

  const originalStateSection = (() => {
    const orderedAssets = [
      brunelleschi4BeforeAssetsById.get("prima-camera-01"),
      brunelleschi4BeforeAssetsById.get("prima-cucina-01"),
      brunelleschi4BeforeAssetsById.get("prima-angolo-cottura-02"),
      brunelleschi4BeforeAssetsById.get("prima-bagno-lavanderia-01")
    ].filter(isDefined);

    if (!orderedAssets.length) {
      return null;
    }

    return {
      type: "gallery",
      id: "stato-originario",
      eyebrow: "Stato originario",
      title: "Un unico appartamento prima della trasformazione",
      description:
        "L’immobile presentava una distribuzione tradizionale, con ambienti separati e relazioni interne poco adatte al nuovo obiettivo. La lettura dello stato esistente ha permesso di individuare margini, limiti e reali possibilità di intervento.",
      layout: "origin-editorial",
      images: orderedAssets.map((asset) => toCaseStudyProjectPageImage(asset))
    } satisfies ProjectPageGallerySection;
  })();

  const planComparisonSection = (() => {
    const rilievo = brunelleschi4PlanAssetsById.get("planimetria-rilievo-01");
    const progetto = brunelleschi4PlanAssetsById.get("planimetria-progetto-01");

    if (!rilievo || !progetto) {
      return null;
    }

    return {
      type: "gallery",
      id: "analisi-distributiva",
      eyebrow: "Analisi distributiva",
      title: "Dal rilievo alla nuova configurazione",
      description:
        "Il confronto tra stato di rilievo e stato di progetto rende visibile la trasformazione distributiva: nuovi accessi, nuovi servizi e una diversa organizzazione degli ambienti.",
      layout: "plan-pair",
      captions: [
        { title: "Stato di rilievo", subtitle: "Pianta esistente" },
        { title: "Stato di progetto", subtitle: "Nuova distribuzione" }
      ],
      images: [
        {
          ...toCaseStudyProjectPageImage(rilievo),
          fit: "contain"
        },
        {
          ...toCaseStudyProjectPageImage(progetto),
          fit: "contain"
        }
      ]
    } satisfies ProjectPageGallerySection;
  })();

  if (!renderSections.length) {
    return [];
  }

  return [
    {
      type: "focus",
      id: "frazionamento-overview",
      eyebrow: "Studio di fattibilità",
      title: "Il potenziale si chiarisce prima della realizzazione.",
      layout: "emphasized",
      items: [
        {
          label: "Verifica distributiva",
          text:
            "Valutare la possibilità concreta di ricavare due unità autonome senza compromettere proporzioni e funzionalità."
        },
        {
          label: "Autonomia funzionale",
          text:
            "Organizzare accessi, servizi e percorsi affinché ogni residenza abbia una propria identità."
        },
        {
          label: "Visione progettuale",
          text:
            "Tradurre la strategia in immagini capaci di anticipare atmosfera, qualità e valore percepito."
        }
      ]
    },
    ...(originalStateSection ? [originalStateSection] : []),
    ...(planComparisonSection ? [planComparisonSection] : []),
    ...(distributionSpaceSection ? [distributionSpaceSection] : []),
    ...renderSections
  ];
};

const brunelleschiHeroAsset = brunelleschi4RenderAssetsById.get(
  "render-app2-living-01"
);

const buildImbonati15DraftSections = (): ProjectPageSection[] => {
  const buildingContextImages = imbonati15CaseStudy.assets.edificioEContesto.map((asset) =>
    toCaseStudyProjectPageImage(asset)
  );
  const originalStateImages = imbonati15CaseStudy.assets.prima.map((asset) =>
    toCaseStudyProjectPageImage(asset)
  );
  const authorizedImages = imbonati15CaseStudy.assets.statoAutorizzato.map((asset) => ({
    ...toCaseStudyProjectPageImage(asset),
    fit: "contain" as const
  }));
  const comparisonImages = imbonati15CaseStudy.assets.statoComparazione.map((asset) => ({
    ...toCaseStudyProjectPageImage(asset),
    fit: "contain" as const
  }));
  const designStateImages = imbonati15CaseStudy.assets.statoProgetto.map((asset) => ({
    ...toCaseStudyProjectPageImage(asset),
    fit: "contain" as const
  }));
  const apartment1Items = imbonati15CaseStudy.assets.appartamento1.map((asset) => ({
    id: asset.id,
    title: asset.label,
    image: toCaseStudyProjectPageImage(asset),
    width: asset.width,
    height: asset.height
  }));
  const apartment2Items = imbonati15CaseStudy.assets.appartamento2.map((asset) => ({
    id: asset.id,
    title: asset.label,
    image: toCaseStudyProjectPageImage(asset),
    width: asset.width,
    height: asset.height
  }));
  const detailImages = imbonati15CaseStudy.assets.dettagli.map((asset) =>
    toCaseStudyProjectPageImage(asset)
  );

  return [
    {
      type: "focus",
      id: "imbonati-strategic-frame",
      eyebrow: "Strategia",
      title: "Trasformare la superficie in valore",
      layout: "emphasized",
      items: [
        {
          label: "Potenziale",
          text: "La lettura degli accessi, degli affacci e degli impianti ha permesso di individuare un frazionamento equilibrato, capace di generare maggiore autonomia e valore percepito."
        },
        {
          label: "Due unità",
          text: "Due ingressi indipendenti e due residenze complete, differenti nella distribuzione ma costruite attraverso lo stesso linguaggio progettuale."
        },
        {
          label: "Linguaggio",
          text: "Travi originali alleggerite, gres avorio effetto resina, calce decorativa e luce dimmerabile CCT definiscono un’atmosfera calda e contemporanea."
        }
      ]
    },
    {
      type: "gallery",
      id: "imbonati-edificio-contesto",
      eyebrow: "Edificio e contesto",
      title: "Lo scenario urbano e gli accessi",
      description:
        "Facciata, corte interna e pianerottolo rendono leggibile il contesto reale in cui si inserisce la trasformazione.",
      layout: "origin-editorial",
      images: buildingContextImages
    },
    {
      type: "gallery",
      id: "imbonati-stato-originario",
      eyebrow: "Stato originario",
      title: "Punto di partenza",
      description:
        "L’impianto originario era organizzato attraverso un corridoio centrale, una cucina separata, più camere e un solo bagno. La metratura era significativa, ma la distribuzione non ne esprimeva pienamente il valore.",
      layout: "origin-editorial",
      images: originalStateImages
    },
    {
      type: "gallery",
      id: "imbonati-planimetrie",
      eyebrow: "Planimetrie",
      title: "Planimetrie",
      layout: "plan-pair",
      images: [
        {
          src: "/images/projects/imbonati-15/03-planimetrie/stato-di-rilievo.jpg",
          alt: "Stato di rilievo del progetto Imbonati 15",
          fit: "contain"
        },
        {
          src: "/images/projects/imbonati-15/03-planimetrie/stato-di-progetto.jpg",
          alt: "Stato di progetto del progetto Imbonati 15",
          fit: "contain"
        }
      ],
      captions: [{ title: "01 — Stato di rilievo" }, { title: "02 — Stato di progetto" }]
    },
    {
      type: "outcome",
      id: "imbonati-visione-progettuale",
      eyebrow: "Visione progettuale",
      title: "Due identità, un unico linguaggio",
      paragraphs: [
        "La visione progettuale si ispira a un’idea di ospitalità domestica, materica e contemporanea.",
        "I massetti originari sono stati mantenuti, consolidati e rinforzati, per poi essere rivestiti con un gres avorio effetto resina. Le travi storiche sono state conservate e alleggerite attraverso una finitura più morbida, capace di dialogare con la nuova palette.",
        "L’illuminazione integrata, dimmerabile e regolabile nella temperatura colore, disegna i soffitti e valorizza le superfici in calce decorativa."
      ],
      mode: "expected"
    },
    {
      type: "render-sequence",
      id: "imbonati-appartamento-1",
      eyebrow: "Appartamento 1",
      title: "Appartamento 1",
      description:
        "Il primo appartamento che si incontra salendo le scale sviluppa la zona giorno intorno a una cucina lineare e a una grande penisola centrale. La camera più raccolta è completata da un letto in ciniglia con contenitore e da un’armadiatura capiente. Le pareti in calce decorativa dietro la cucina e nella zona TV introducono profondità e carattere.",
      layout: "editorial-chapter",
      items: apartment1Items
    },
    {
      type: "render-sequence",
      id: "imbonati-appartamento-2",
      eyebrow: "Appartamento 2",
      title: "Appartamento 2",
      description:
        "Il secondo appartamento presenta una zona giorno longitudinale, con la cucina organizzata in due blocchi funzionali distinti. La camera più ampia è collegata a una cabina armadio sviluppata parallelamente allo spazio notte. La parete della testata, rifinita in calce decorativa, costruisce il principale fondale materico dell’ambiente.",
      layout: "editorial-chapter",
      items: apartment2Items
    },
    {
      type: "gallery",
      id: "imbonati-materia-luce-dettagli",
      eyebrow: "Materia, luce e dettagli",
      title: "[TODO] Inserire il titolo della sezione dettagli.",
      description:
        "[TODO] Inserire il raccordo tra superfici, luce e dettagli esecutivi.",
      images: detailImages
    },
    {
      type: "outcome",
      id: "imbonati-risultato",
      eyebrow: "Risultato",
      title: "Due nuove residenze, un valore moltiplicato",
      paragraphs: [
        "Il risultato è una trasformazione immobiliare completa: due abitazioni autonome di circa 50 mq commerciali ciascuna, dotate di soggiorno con cucina, camera matrimoniale, bagno e ingresso indipendente.",
        "L’Appartamento 1 privilegia la convivialità della penisola centrale.",
        "L’Appartamento 2 amplia il comfort attraverso una cucina articolata in due blocchi e una cabina armadio dedicata."
      ],
      mode: "expected"
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
    title: "Brunelleschi 4",
    place: "Milano",
    category: "Studio di fattibilità",
    status: "Progetto in sviluppo",
    visibility: "published",
    description:
      "Studio pre-acquisto AVM per il frazionamento di un appartamento a Milano in due unità indipendenti, attraverso analisi distributiva, luce e visione progettuale.",
    seoTitle: "Brunelleschi 4 | Studio di fattibilità e frazionamento | AVM",
    seoDescription:
      "Studio pre-acquisto AVM per il frazionamento di un appartamento a Milano in due unità indipendenti, attraverso analisi distributiva, luce e visione progettuale.",
    compactOverview: true,
    overviewLayout: "anchored-introduction-panel",
    stageBadge: {
      label: "Concept",
      note: "Studio di fattibilità"
    },
    hero: {
      eyebrow: "MILANO · FRAZIONAMENTO RESIDENZIALE",
      title: "Brunelleschi 4",
      description:
        "Uno studio pre-acquisto per verificare il reale potenziale distributivo dell’immobile.",
      image: brunelleschiHeroAsset
        ? toCaseStudyProjectPageImage(brunelleschiHeroAsset, {
            objectPosition: "center center",
            mobileObjectPosition: "center center"
          })
        : undefined,
      variant: "photographic",
      titleClassName:
        "text-[#fffaf2] [text-shadow:0_10px_28px_rgba(0,0,0,0.52)]",
      descriptionClassName:
        "text-[#fbf1e4]/96 [text-shadow:0_8px_20px_rgba(0,0,0,0.42)]"
    },
    summaryCard: {
      eyebrow: "Scheda sintetica",
      title: "Brunelleschi 4",
      titleClassName: "text-[#A97845]",
      variant: "smoky-bronze",
      items: [
        { label: "Luogo", value: "Milano" },
        { label: "Categoria", value: "Studio di fattibilità" },
        { label: "Stato", value: "Progetto in sviluppo" },
        { label: "Intervento", value: "Frazionamento in due unità" },
        { label: "Fase", value: "Valutazione pre-acquisto" }
      ]
    },
    narrative: {
      introduction: [
        "L’analisi è nata prima dell’acquisto, per verificare se la distribuzione esistente potesse sostenere una trasformazione reale e coerente.",
        "Lo studio mette in relazione spazi, accessi, servizi e percorsi, traducendo questa lettura in una proposta progettuale concreta.",
        "I render anticipano la qualità potenziale dell’intervento e ne restituiscono atmosfera, coerenza e valore."
      ]
    },
    sections: buildBrunelleschiDraftSections(),
    finalCta: {
      eyebrow: "Valore progettuale",
      title: "Il valore nasce prima della realizzazione.",
      paragraphs: [
        "Brunelleschi 4 mostra come una decisione di acquisto possa essere supportata da una lettura progettuale concreta.",
        "Prima di intervenire, AVM verifica distribuzione, qualità spaziale e possibilità reali di trasformazione."
      ],
      variant: "smoky-bronze",
      primary: {
        label: "Parliamo del potenziale del tuo immobile",
        href: "/contatti"
      }
    },
    navigation: {
      previousSlug: "la-galleria"
    }
  },
  {
    slug: "imbonati-15",
    title: "Imbonati 15",
    place: "Milano",
    category: "Frazionamento e valorizzazione immobiliare",
    status: "Realizzato",
    visibility: "published",
    description:
      "Un appartamento originario di circa 100 mq trasformato in due residenze indipendenti, attraverso distribuzione, luce e materia.",
    seoTitle: "Imbonati 15 | Frazionamento e valorizzazione immobiliare | AVM",
    seoDescription:
      "Imbonati 15 racconta la trasformazione di un appartamento milanese in due residenze indipendenti, attraverso distribuzione, materia e luce.",
    compactOverview: true,
    overviewLayout: "anchored-introduction-panel",
    stageBadge: {
      label: "Completato",
      note: "In vendita"
    },
    hero: {
      eyebrow: "MILANO · FRAZIONAMENTO E VALORIZZAZIONE",
      title: "Imbonati 15",
      description:
        "Un appartamento originario di circa 100 mq trasformato in due residenze indipendenti, attraverso un progetto che unisce strategia distributiva, materia e luce.",
      image: toCaseStudyProjectPageImage(imbonati15CaseStudy.assets.appartamento1[0], {
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      }),
      variant: "photographic"
    },
    summaryCard: {
      eyebrow: "Scheda sintetica",
      title: "Imbonati 15",
      titleClassName: "text-[#A97845]",
      variant: "smoky-bronze",
      items: [
        { label: "Luogo", value: "Milano" },
        { label: "Categoria", value: "Frazionamento e valorizzazione immobiliare" },
        { label: "Stato", value: "Realizzato" },
        {
          label: "Intervento",
          value: "Trasformazione di un appartamento in due residenze indipendenti"
        },
        { label: "Fase", value: "Completato · In vendita" }
      ]
    },
    narrative: {
      introduction: [
        "Imbonati 15 nasce dalla lettura di un potenziale ancora inespresso: un appartamento ampio, ma frammentato in una successione di stanze, poteva diventare due abitazioni autonome, funzionali e riconoscibili.",
        "Il progetto parte dalla distribuzione, conserva i segni dell’edificio storico e li traduce in un linguaggio contemporaneo fatto di superfici calde, travi recuperate e luce architettonica."
      ],
      startingPoint: [
        "L’impianto originario era organizzato attraverso un corridoio centrale, una cucina separata, più camere e un solo bagno. La metratura era significativa, ma la distribuzione non ne esprimeva pienamente il valore."
      ],
      objective: [
        "Creare due bilocali indipendenti e completi, capaci di rispondere alle esigenze del mercato senza perdere il carattere materico dell’immobile."
      ],
      designDirection: [
        "La visione progettuale si ispira a un’idea di ospitalità domestica, materica e contemporanea.",
        "I massetti originari sono stati mantenuti, consolidati e rinforzati, per poi essere rivestiti con un gres avorio effetto resina. Le travi storiche sono state conservate e alleggerite attraverso una finitura più morbida, capace di dialogare con la nuova palette.",
        "L’illuminazione integrata, dimmerabile e regolabile nella temperatura colore, disegna i soffitti e valorizza le superfici in calce decorativa."
      ]
    },
    sections: buildImbonati15DraftSections(),
    finalCta: {
      eyebrow: "Case history",
      title: "Il potenziale, reso visibile",
      paragraphs: [
        "Imbonati 15 dimostra come distribuzione, materia e luce possano cambiare non soltanto lo spazio, ma anche la percezione e il valore di un immobile."
      ],
      variant: "smoky-bronze",
      primary: {
        label: "Parliamo del tuo immobile",
        href: "/contatti"
      },
      secondary: {
        label: "Torna ai progetti",
        href: "/progetti"
      }
    },
    navigation: {
      previousSlug: "la-galleria",
      nextSlug: "brunelleschi"
    }
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
