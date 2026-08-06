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
  published: true,
  readyForEditorialPage: true,
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
    edificioEContesto: [
      {
        id: "imbonati-contesto-facciata",
        category: "edificio-e-contesto",
        label: "Facciata su via Imbonati",
        src: "/images/projects/imbonati-15/01-edificio-e-contesto/facciata-via-imbonati.jpg",
        format: "jpg",
        width: 4781,
        height: 3187,
        alt: "Facciata dello stabile di Imbonati 15 a Milano",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-contesto-corte",
        category: "edificio-e-contesto",
        label: "Corte interna",
        src: "/images/projects/imbonati-15/01-edificio-e-contesto/corte-interna.jpg",
        format: "jpg",
        width: 6000,
        height: 4000,
        alt: "Corte interna dello stabile di Imbonati 15",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-contesto-pianerottolo",
        category: "edificio-e-contesto",
        label: "Pianerottolo con due ingressi",
        src: "/images/projects/imbonati-15/01-edificio-e-contesto/pianerottolo-due-ingressi.jpg",
        format: "jpg",
        width: 6000,
        height: 4000,
        alt: "Pianerottolo con i due ingressi delle unità a Imbonati 15",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      }
    ] as Imbonati15Asset[],
    prima: [
      {
        id: "imbonati-prima-cucina",
        category: "prima",
        label: "Cucina originaria",
        src: "/images/projects/imbonati-15/02-prima/cucina-originaria.jpg",
        format: "jpg",
        width: 1600,
        height: 900,
        alt: "Cucina originaria dell'appartamento prima del frazionamento",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-prima-corridoio",
        category: "prima",
        label: "Corridoio originario",
        src: "/images/projects/imbonati-15/02-prima/corridoio-originario.jpg",
        format: "jpg",
        width: 1600,
        height: 900,
        alt: "Corridoio originario dell'appartamento prima del frazionamento",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-prima-camera-finestra",
        category: "prima",
        label: "Camera originaria con finestra",
        src: "/images/projects/imbonati-15/02-prima/camera-originaria-finestra.jpg",
        format: "jpg",
        width: 1600,
        height: 900,
        alt: "Camera originaria con finestra prima del frazionamento",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-prima-seconda-camera",
        category: "prima",
        label: "Seconda camera originaria",
        src: "/images/projects/imbonati-15/02-prima/seconda-camera-originaria.jpg",
        format: "jpg",
        width: 1600,
        height: 900,
        alt: "Seconda camera originaria dell'appartamento prima del frazionamento",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-prima-bagno",
        category: "prima",
        label: "Bagno originario",
        src: "/images/projects/imbonati-15/02-prima/bagno-originario.jpg",
        format: "jpg",
        width: 1600,
        height: 900,
        alt: "Bagno originario dell'appartamento prima del frazionamento",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      }
    ] as Imbonati15Asset[],
    statoAutorizzato: [] as Imbonati15Asset[],
    statoComparazione: [] as Imbonati15Asset[],
    statoProgetto: [] as Imbonati15Asset[],
    render: [
      {
        id: "imbonati-render-app1-soggiorno-tv",
        category: "render",
        label: "Soggiorno e parete TV",
        src: "/images/projects/imbonati-15/04-render/appartamento-1/appartamento-1-render-soggiorno-tv.jpg",
        format: "jpg",
        width: 1672,
        height: 941,
        alt: "Render di progetto del soggiorno e della parete TV dell’Appartamento 1",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-render-app1-cucina-penisola",
        category: "render",
        label: "Cucina e penisola",
        src: "/images/projects/imbonati-15/04-render/appartamento-1/appartamento-1-render-cucina-penisola.jpg",
        format: "jpg",
        width: 1535,
        height: 1024,
        alt: "Render di progetto della cucina con penisola dell’Appartamento 1",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-render-app2-soggiorno",
        category: "render",
        label: "Soggiorno",
        src: "/images/projects/imbonati-15/04-render/appartamento-2/appartamento-2-render-soggiorno.jpg",
        format: "jpg",
        width: 1121,
        height: 1403,
        alt: "Render di progetto del soggiorno dell’Appartamento 2",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-render-app2-cucina",
        category: "render",
        label: "Cucina in due blocchi",
        src: "/images/projects/imbonati-15/04-render/appartamento-2/appartamento-2-render-cucina-due-blocchi.jpg",
        format: "jpg",
        width: 1086,
        height: 1449,
        alt: "Render di progetto della cucina in due blocchi dell’Appartamento 2",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-render-app2-camera",
        category: "render",
        label: "Camera",
        src: "/images/projects/imbonati-15/04-render/appartamento-2/appartamento-2-render-camera.jpg",
        format: "jpg",
        width: 1086,
        height: 1448,
        alt: "Render di progetto della camera dell’Appartamento 2",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-render-app2-bagno",
        category: "render",
        label: "Bagno",
        src: "/images/projects/imbonati-15/04-render/appartamento-2/appartamento-2-render-bagno.jpg",
        format: "jpg",
        width: 1086,
        height: 1448,
        alt: "Render di progetto del bagno dell’Appartamento 2",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      }
    ] as Imbonati15Asset[],
    appartamento1: [
      {
        id: "imbonati-app1-living",
        category: "appartamento-1",
        label: "Soggiorno e cucina",
        src: "/images/projects/imbonati-15/07-appartamento-1/soggiorno-cucina-hero.jpg",
        format: "jpg",
        width: 5976,
        height: 3984,
        alt: "Imbonati 15, Appartamento 1, soggiorno e cucina con penisola",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-app1-kitchen",
        category: "appartamento-1",
        label: "Cucina e penisola",
        src: "/images/projects/imbonati-15/07-appartamento-1/cucina-penisola.jpg",
        format: "jpg",
        width: 6000,
        height: 4000,
        alt: "Imbonati 15, Appartamento 1, dettaglio della cucina lineare con penisola",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-app1-bedroom",
        category: "appartamento-1",
        label: "Camera",
        src: "/images/projects/imbonati-15/07-appartamento-1/camera-matrimoniale.jpg",
        format: "jpg",
        width: 1536,
        height: 1024,
        alt: "Imbonati 15, Appartamento 1, camera matrimoniale",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-app1-bathroom",
        category: "appartamento-1",
        label: "Bagno",
        src: "/images/projects/imbonati-15/07-appartamento-1/bagno.jpg",
        format: "jpg",
        width: 5934,
        height: 3956,
        alt: "Imbonati 15, Appartamento 1, bagno",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      }
    ] as Imbonati15Asset[],
    appartamento2: [
      {
        id: "imbonati-app2-living",
        category: "appartamento-2",
        label: "Soggiorno e cucina",
        src: "/images/projects/imbonati-15/08-appartamento-2/soggiorno-cucina.jpg",
        format: "jpg",
        width: 5912,
        height: 3941,
        alt: "Imbonati 15, Appartamento 2, soggiorno e cucina",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-app2-bedroom",
        category: "appartamento-2",
        label: "Camera e cabina armadio",
        src: "/images/projects/imbonati-15/08-appartamento-2/camera-cabina-armadio.jpg",
        format: "jpg",
        width: 1537,
        height: 1023,
        alt: "Imbonati 15, Appartamento 2, camera con cabina armadio",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-app2-wardrobe",
        category: "appartamento-2",
        label: "Cabina armadio",
        src: "/images/projects/imbonati-15/08-appartamento-2/cabina-armadio.jpg",
        format: "jpg",
        width: 6000,
        height: 4000,
        alt: "Imbonati 15, Appartamento 2, cabina armadio",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      },
      {
        id: "imbonati-app2-bathroom",
        category: "appartamento-2",
        label: "Bagno",
        src: "/images/projects/imbonati-15/08-appartamento-2/bagno.jpg",
        format: "jpg",
        width: 6000,
        height: 4000,
        alt: "Imbonati 15, Appartamento 2, bagno",
        objectPosition: "center center",
        mobileObjectPosition: "center center"
      }
    ] as Imbonati15Asset[],
    dettagli: [] as Imbonati15Asset[]
  }
} as const;
