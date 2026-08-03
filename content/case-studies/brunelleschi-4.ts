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
};

export type CaseStudyRenderChapter = {
  id: string;
  title: string;
  status: "definitivo" | "in-preparazione";
  layout: "immersive-sequence";
  assetIds: string[];
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
  renderChapters: [
    {
      id: "appartamento-1",
      title: "Appartamento 1",
      status: "definitivo",
      layout: "immersive-sequence",
      assetIds: [
        "render-living-01",
        "render-cucina-02",
        "render-camera-03",
        "render-bagno-04",
        "render-bagno-dettaglio-05"
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
        height: 1920
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
        height: 1086
      },
      {
        id: "prima-cucina-01",
        category: "prima",
        label: "Cucina esistente",
        src: "/images/projects/brunelleschi-4/02-prima/brunelleschi-4-milano-prima-cucina-01.webp",
        format: "webp",
        width: 1448,
        height: 1086
      },
      {
        id: "prima-bagno-lavanderia-01",
        category: "prima",
        label: "Bagno lavanderia esistente",
        src: "/images/projects/brunelleschi-4/02-prima/brunelleschi-4-milano-prima-bagno-lavanderia-01.webp",
        format: "webp",
        width: 1152,
        height: 864
      },
      {
        id: "prima-angolo-cottura-02",
        category: "prima",
        label: "Angolo cottura esistente",
        src: "/images/projects/brunelleschi-4/02-prima/brunelleschi-4-milano-prima-angolo-cottura-02.webp",
        format: "webp",
        width: 1152,
        height: 864
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
        height: 1270
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
        height: 1034
      }
    ],
    render: [
      {
        id: "render-living-01",
        category: "render",
        label: "Living",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-living-01.webp",
        format: "webp",
        width: 1160,
        height: 1356
      },
      {
        id: "render-cucina-02",
        category: "render",
        label: "Cucina",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-cucina-02.webp",
        format: "webp",
        width: 1672,
        height: 941
      },
      {
        id: "render-camera-03",
        category: "render",
        label: "Camera",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-camera-03.webp",
        format: "webp",
        width: 1920,
        height: 1280
      },
      {
        id: "render-bagno-04",
        category: "render",
        label: "Bagno",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-bagno-04.webp",
        format: "webp",
        width: 1920,
        height: 1280
      },
      {
        id: "render-bagno-dettaglio-05",
        category: "render",
        label: "Dettaglio bagno",
        src: "/images/projects/brunelleschi-4/05-render/appartamento-1/brunelleschi-4-milano-appartamento-1-render-bagno-dettaglio-05.webp",
        format: "webp",
        width: 1920,
        height: 1280
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
