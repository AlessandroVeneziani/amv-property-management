export type ProjectStatus =
  | "In portfolio"
  | "In valorizzazione"
  | "Gestione attiva"
  | "Completato";

export type Project = {
  slug: string;
  title: string;
  city: string;
  status: ProjectStatus;
  category: string;
  year: string;
  image: string;
  summary: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  focus: string[];
  metrics: { label: string; value: string }[];
  gallery: string[];
  valueStory?: {
    before: string;
    after: string;
    value: string;
  };
};

export const projects: Project[] = [
  {
    slug: "la-galleria",
    title: "La Galleria",
    city: "Milano",
    status: "In portfolio",
    category: "Residenza storica",
    year: "2026",
    image: "/images/projects/la-galleria.png",
    summary:
      "Un appartamento nel centro di Milano riallineato attraverso atmosfera, controllo operativo e una presenza più netta.",
    description:
      "AMV ha lavorato su un immobile dal forte potenziale ma privo di una lettura coerente. L’intervento ha ricostruito gerarchie, tono materico e qualità dell’esperienza.",
    challenge:
      "Restituire autorevolezza a uno spazio elegante ma disperso, migliorando percezione, continuità e gestione.",
    approach:
      "Ridefinizione dell’identità spaziale, editing degli arredi, standard operativi e calibrazione della presentazione.",
    outcome:
      "Un asset più leggibile, più forte e più allineato al proprio contesto urbano e al pubblico di riferimento.",
    focus: [
      "Spatial editing",
      "Restyling percettivo",
      "Gestione coordinata"
    ],
    metrics: [
      { label: "Focus", value: "Atmosfera e posizionamento" },
      { label: "Asset", value: "Residenziale premium" },
      { label: "Processo", value: "Design + management" }
    ],
    gallery: [
      "/images/projects/la-galleria.png",
      "/images/projects/method-detail.png",
      "/images/hero-milano.png"
    ],
    valueStory: {
      before: "immobile elegante ma poco posizionato.",
      after: "identità più chiara, atmosfera più riconoscibile.",
      value: "maggiore appeal e percezione premium."
    }
  },
  {
    slug: "certosa-residence",
    title: "Certosa Residence",
    city: "Milano",
    status: "In valorizzazione",
    category: "Appartamento d’epoca",
    year: "2026",
    image: "/images/projects/certosa-residence.png",
    summary:
      "Un interno dal carattere classico reinterpretato con una postura più contemporanea e controllata.",
    description:
      "L’immobile richiedeva una rilettura capace di conservare autorevolezza architettonica senza scivolare nel decorativo. AMV ha operato per sottrazione, chiarezza e qualità dei dettagli.",
    challenge:
      "Rendere attuale un appartamento prestigioso senza snaturare il suo impianto originario.",
    approach:
      "Direzione estetica, revisione dei materiali percepiti, regia della presentazione e criteri di utilizzo più rigorosi.",
    outcome:
      "Uno spazio più coerente, capace di sostenere una narrazione sobria ma distintiva.",
    focus: ["Valorizzazione estetica", "Direzione immagine", "Controllo qualità"],
    metrics: [
      { label: "Focus", value: "Tono materico" },
      { label: "Asset", value: "Interno signorile" },
      { label: "Processo", value: "Audit + intervento" }
    ],
    gallery: [
      "/images/projects/certosa-residence.png",
      "/images/projects/la-galleria.png",
      "/images/projects/method-detail.png"
    ],
    valueStory: {
      before: "potenziale non espresso in modo coerente.",
      after: "lettura più contemporanea e controllata dello spazio.",
      value: "posizionamento più solido e desiderabile."
    }
  },
  {
    slug: "marco-aurelio",
    title: "Marco Aurelio",
    city: "Roma",
    status: "Gestione attiva",
    category: "Suite residenziale",
    year: "2025",
    image: "/images/projects/marco-aurelio.png",
    summary:
      "Un appartamento gestito con attenzione alla quiete visiva, alla continuità dell’esperienza e al dettaglio d’uso.",
    description:
      "AMV presidia questo immobile attraverso un modello che integra cura estetica, manutenzione e standard operativi costanti.",
    challenge:
      "Mantenere alto il valore percepito nel quotidiano, senza lasciare che la gestione intacchi l’identità dello spazio.",
    approach:
      "Regole d’uso, revisione dell’atmosfera, controllo dell’allestimento e monitoraggio della qualità in ogni passaggio.",
    outcome:
      "Uno spazio stabile, credibile e capace di conservare intensità anche nella normale operatività.",
    focus: ["Gestione operativa", "Controllo esperienza", "Mantenimento del tono"],
    metrics: [
      { label: "Focus", value: "Continuità" },
      { label: "Asset", value: "Suite urbana" },
      { label: "Processo", value: "Presidio attivo" }
    ],
    gallery: [
      "/images/projects/marco-aurelio.png",
      "/images/projects/method-detail.png",
      "/images/projects/certosa-residence.png"
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
    image: "/images/hero-milano.png",
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
    ],
    gallery: [
      "/images/hero-milano.png",
      "/images/projects/la-galleria.png",
      "/images/projects/method-detail.png"
    ]
  }
];

export const projectCities = Array.from(new Set(projects.map((project) => project.city)));
export const projectStatuses = Array.from(
  new Set(projects.map((project) => project.status))
) as ProjectStatus[];
