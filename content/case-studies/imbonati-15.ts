export type Imbonati15AssetCategory =
  | "edificio-e-contesto"
  | "prima"
  | "stato-autorizzato"
  | "stato-comparazione"
  | "stato-progetto"
  | "render"
  | "appartamento-1"
  | "appartamento-2"
  | "dettagli";

export type Imbonati15Asset = {
  id: string;
  category: Imbonati15AssetCategory;
  label: string;
  src: string;
  format: "webp" | "png" | "jpg" | "jpeg";
  width: number;
  height: number;
  alt?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
};

export const imbonati15CaseStudy = {
  slug: "imbonati-15",
  title: "Imbonati 15 – Milano",
  city: "Milano",
  published: false,
  readyForEditorialPage: false,
  basePath: "/images/projects/imbonati-15",
  folders: {
    edificioEContesto: "01-edificio-e-contesto",
    prima: "02-prima",
    statoAutorizzato: "03-stato-autorizzato",
    statoComparazione: "04-stato-comparazione",
    statoProgetto: "05-stato-progetto",
    render: "06-render",
    appartamento1: "07-appartamento-1",
    appartamento2: "08-appartamento-2",
    dettagli: "09-dettagli"
  },
  projectFacts: {
    originalSurface: "Circa 100 mq",
    resultingUnits: "Due residenze indipendenti da circa 50 mq commerciali",
    buildingIdentity: "Edificio storico milanese",
    narrativeDirection: "Valorizzazione immobiliare e frazionamento in due unità autonome",
    projectStatus: "Realizzato",
    projectPhase: "Completato · In vendita",
    projectCategory: "Frazionamento e valorizzazione immobiliare",
    projectIntervention:
      "Trasformazione di un appartamento in due residenze indipendenti"
  },
  systemsAndMaterials: {
    flooring: "Gres porcellanato avorio effetto resina",
    beams: "Travi originali conservate e alleggerite",
    finishes: "Calce decorativa e palette calda naturale",
    lighting: "Illuminazione dimmerabile e CCT",
    hvac: "Olimpia Splendid Unico Dual"
  },
  apartments: [
    {
      id: "appartamento-1",
      title: "Appartamento 1",
      sequence: "Prima unità incontrata salendo le scale",
      planPosition: "Unità destra nello stato di progetto",
      layout: "Soggiorno/cucina con penisola centrale, camera, bagno e disimpegno",
      kitchenConfiguration: "Cucina lineare con grande penisola centrale",
      signatureElements: [
        "Armadiatura nella camera",
        "Parete dietro la cucina in calce decorativa",
        "Parete TV in calce decorativa e retroilluminata"
      ],
      spaces: [
        "Soggiorno/cucina: 14,93 mq",
        "Camera: 12,58 mq",
        "Bagno: 3,28 mq",
        "Disimpegno: 2,23 mq"
      ]
    },
    {
      id: "appartamento-2",
      title: "Appartamento 2",
      sequence: "Seconda unità del frazionamento",
      planPosition: "Unità sinistra nello stato di progetto",
      layout: "Soggiorno, camera, bagno e disimpegno",
      kitchenConfiguration: "Cucina organizzata in due blocchi funzionali distinti",
      signatureElements: [
        "Cabina armadio sviluppata parallelamente alla camera",
        "Parete della testata del letto in calce decorativa"
      ],
      spaces: [
        "Soggiorno: 14,18 mq",
        "Camera: 12,77 mq",
        "Bagno: 3,68 mq",
        "Disimpegno: 2,60 mq"
      ]
    }
  ],
  ceilingHeight: "2,65 m",
  assets: {
    edificioEContesto: [] as Imbonati15Asset[],
    prima: [] as Imbonati15Asset[],
    statoAutorizzato: [] as Imbonati15Asset[],
    statoComparazione: [] as Imbonati15Asset[],
    statoProgetto: [] as Imbonati15Asset[],
    render: [] as Imbonati15Asset[],
    appartamento1: [] as Imbonati15Asset[],
    appartamento2: [] as Imbonati15Asset[],
    dettagli: [] as Imbonati15Asset[]
  }
} as const;
