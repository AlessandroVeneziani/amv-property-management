export type CaseStudyAssetCategory =
  | "esterno"
  | "prima"
  | "planimetria-rilievo"
  | "planimetria-progetto"
  | "render"
  | "foto-finali";

export type CaseStudyAsset = {
  id: string;
  category: CaseStudyAssetCategory;
  label: string;
  src: string;
  format: "webp" | "png";
  width: number;
  height: number;
  alt?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
};

export type CaseStudyRenderChapter = {
  id: string;
  title: string;
  status: "definitivo" | "in-preparazione";
  layout: "immersive-sequence";
  description?: string;
  assetIds: string[];
};

export type CaseStudyDistributionSpace = {
  role: "ingresso-bussola";
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  assetId: string;
};

export const brunelleschi4CaseStudy = {
  slug: "brunelleschi-4",
  title: "Brunelleschi 4 – Milano",
  city: "Milano",
  published: false,
  readyForEditorialPage: false,
  basePath: "/images/projects/brunelleschi-4",
  folders: {
    esterno: "01-esterno",
    prima: "02-prima",
    planimetriaRilievo: "03-planimetria-rilievo",
    planimetriaProgetto: "04-planimetria-progetto",
    render: "05-render",
    fotoFinali: "06-foto-finali"
  },
  distributionSpace: {
    role: "ingresso-bussola",
    eyebrow: "Ingresso comune",
    title: "Un nuovo spazio di distribuzione",
    paragraphs: [
      "Il frazionamento non consiste soltanto nel dividere un appartamento. Richiede la progettazione di una soglia capace di mettere in relazione le due nuove unità con ordine e coerenza.",
      "L’ingresso comune diventa così uno spazio essenziale, definito da luce architettonica, superfici continue e contenimento integrato."
    ],
    assetId: "render-ingresso-bussola-01"
  },
  renderChapters: [
    {
      id: "appartamento-1",
      title: "Appartamento 1",
      status: "definitivo",
      layout: "immersive-sequence",
      description:
        "Prima unità indipendente prevista dallo studio, definita attraverso luce integrata, arredi su misura e continuità materica.",
      assetIds: [
        "render-living-01",
        "render-cucina-02",
        "render-camera-03",
        "render-bagno-04",
        "render-bagno-dettaglio-05"
      ]
    },
    {
      id: "appartamento-2",
      title: "Appartamento 2",
      status: "definitivo",
      layout: "immersive-sequence",
      description:
        "Seconda unità prevista dallo stesso intervento, sviluppata con la medesima continuità progettuale e una propria autonomia funzionale.",
      assetIds: [
        "render-app2-living-01",
        "render-app2-cucina-02",
        "render-app2-camera-03",
        "render-app2-ingresso-05",
        "render-app2-bagno-04"
      ]
    }
  ],
  assets: {
    esterno: [
      {
        id: "esterno-edificio-01",
        category: "esterno",
        label: "Edificio esterno",
        src: "/images/projects/brunelleschi-4/01-esterno/brunelleschi-4-milano-esterno-edificio-01.webp",
        format: "webp",
        width: 1440,
        height: 1920,
        alt: "Edificio di Brunelleschi 4 a Milano, oggetto dello studio pre-acquisto AVM",
        objectPosition: "center center"
      }
    ],
    prima: [
      {
        id: "prima-camera-01",
        category: "prima",
        label: "Camera esistente",
        src: "/images/projects/brunelleschi-4/02-prima/brunelleschi-4-milano-prima-camera-01.webp",
        format: "webp",
        width: 1448,
        height: 1086,
        alt: "Camera esistente dell'appartamento originario prima del frazionamento",
        objectPosition: "center center"
      },
      {
        id: "prima-cucina-01",
        category: "prima",
        label: "Cucina esistente",
        src: "/images/projects/brunelleschi-4/02-prima/brunelleschi-4-milano-prima-cucina-01.webp",
        format: "webp",
        width: 1448,
        height: 1086,
        alt: "Cucina esistente dell'appartamento originario prima della trasformazione",
        objectPosition: "center center"
      },
      {
        id: "prima-bagno-lavanderia-01",
        category: "prima",
        label: "Bagno lavanderia esistente",
        src: "/images/projects/brunelleschi-4/02-prima/brunelleschi-4-milano-prima-bagno-lavanderia-01.webp",
        format: "webp",
        width: 1152,
        height: 864,
        alt: "Bagno lavanderia esistente dell'appartamento originario",
        objectPosition: "center center"
      },
      {
        id: "prima-angolo-cottura-02",
        category: "prima",
        label: "Angolo cottura esistente",
        src: "/images/projects/brunelleschi-4/02-prima/brunelleschi-4-milano-prima-angolo-cottura-02.webp",
        format: "webp",
        width: 1152,
        height: 864,
        alt: "Angolo cottura esistente dell'appartamento originario prima del progetto",
        objectPosition: "center center"
      }
    ],
    planimetriaRilievo: [
      {
        id: "planimetria-rilievo-01",
        category: "planimetria-rilievo",
        label: "Planimetria di rilievo",
        src: "/images/projects/brunelleschi-4/03-planimetria-rilievo/brunelleschi-4-milano-planimetria-rilievo-01.png",
        format: "png",
        width: 1902,
        height: 1270,
        alt: "Planimetria di rilievo dell'appartamento originario di Brunelleschi 4"
      }
    ],
    planimetriaProgetto: [
      {
        id: "planimetria-progetto-01",
        category: "planimetria-progetto",
        label: "Planimetria di progetto",
        src: "/images/projects/brunelleschi-4/04-planimetria-progetto/brunelleschi-4-milano-planimetria-progetto-01.png",
        format: "png",
        width: 1428,
        height: 1034,
        alt: "Planimetria di progetto con nuova distribuzione in due unità indipendenti a Brunelleschi 4"
      }
    ],
    render: [
      {
        id: "render-ingresso-bussola-01",
        category: "render",
        label: "Ingresso bussola",
        src: "/images/projects/brunelleschi-4/05-render/ingresso-bussola/brunelleschi-4-milano-ingresso-bussola-01.webp",
        format: "webp",
        width: 1086,
        height: 1448,
        alt: "Ingresso comune tra le due unità con illuminazione architettonica integrata",
        objectPosition: "center center"
      },
      {
        id: "render-living-01",
        category: "render",
        label: "Living",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-living-01.webp",
        format: "webp",
        width: 1160,
        height: 1356,
        alt: "Living dell’Appartamento 1 con luce lineare integrata e arredi su misura",
        objectPosition: "center center"
      },
      {
        id: "render-cucina-02",
        category: "render",
        label: "Cucina",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-cucina-02.webp",
        format: "webp",
        width: 1672,
        height: 941,
        alt: "Cucina dell’Appartamento 1 con composizione a parete e tavolo scultoreo",
        objectPosition: "center center"
      },
      {
        id: "render-camera-03",
        category: "render",
        label: "Camera",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-camera-03.webp",
        format: "webp",
        width: 1920,
        height: 1280,
        alt: "Camera dell’Appartamento 1 con parete materica retroilluminata",
        objectPosition: "center center"
      },
      {
        id: "render-bagno-04",
        category: "render",
        label: "Bagno",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-bagno-04.webp",
        format: "webp",
        width: 1920,
        height: 1280,
        alt: "Bagno dell’Appartamento 1 con superfici effetto pietra e doccia vetrata",
        objectPosition: "center center"
      },
      {
        id: "render-bagno-dettaglio-05",
        category: "render",
        label: "Dettaglio bagno",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-bagno-dettaglio-05.webp",
        format: "webp",
        width: 1920,
        height: 1280,
        alt: "Dettaglio del bagno dell’Appartamento 1 con superfici continue e illuminazione integrata",
        objectPosition: "center center"
      },
      {
        id: "render-app2-living-01",
        category: "render",
        label: "Living",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-2/brunelleschi-4-milano-appartamento-2-render-living-01.webp",
        format: "webp",
        width: 1672,
        height: 941,
        alt: "Living dell’Appartamento 2 con lampadario scultoreo, tavolo centrale e cucina sul fondo",
        objectPosition: "center center"
      },
      {
        id: "render-app2-cucina-02",
        category: "render",
        label: "Cucina",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-2/brunelleschi-4-milano-appartamento-2-render-cucina-02.webp",
        format: "webp",
        width: 1672,
        height: 941,
        alt: "Cucina dell’Appartamento 2 con composizione a parete e tavolo integrato",
        objectPosition: "center center"
      },
      {
        id: "render-app2-camera-03",
        category: "render",
        label: "Camera",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-2/brunelleschi-4-milano-appartamento-2-render-camera-03.webp",
        format: "webp",
        width: 1672,
        height: 941,
        alt: "Camera dell’Appartamento 2 con parete materica retroilluminata e armadiatura integrata",
        objectPosition: "center center"
      },
      {
        id: "render-app2-bagno-04",
        category: "render",
        label: "Bagno",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-2/brunelleschi-4-milano-appartamento-2-render-bagno-04.webp",
        format: "webp",
        width: 1672,
        height: 941,
        alt: "Bagno dell’Appartamento 2 con superfici effetto pietra e doccia integrata",
        objectPosition: "center center"
      },
      {
        id: "render-app2-ingresso-05",
        category: "render",
        label: "Ingresso",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-2/brunelleschi-4-milano-appartamento-2-render-ingresso-05.webp",
        format: "webp",
        width: 1448,
        height: 1086,
        alt: "Ingresso dell’Appartamento 2 con armadiatura integrata e passaggio verso il living",
        objectPosition: "center center"
      }
    ],
    fotoFinali: []
  }
} as const satisfies {
  slug: string;
  title: string;
  city: string;
  published: boolean;
  readyForEditorialPage: boolean;
  basePath: string;
  folders: Record<string, string>;
  distributionSpace: CaseStudyDistributionSpace;
  renderChapters: readonly CaseStudyRenderChapter[];
  assets: {
    esterno: readonly CaseStudyAsset[];
    prima: readonly CaseStudyAsset[];
    planimetriaRilievo: readonly CaseStudyAsset[];
    planimetriaProgetto: readonly CaseStudyAsset[];
    render: readonly CaseStudyAsset[];
    fotoFinali: readonly CaseStudyAsset[];
  };
};
