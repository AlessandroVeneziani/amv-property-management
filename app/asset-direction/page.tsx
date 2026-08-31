import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { createMetadata, inquiryLinks } from "@/content/site";

import styles from "./asset-direction.module.css";

export const metadata = createMetadata({
  title: "Asset Direction | AVM",
  description:
    "Asset Direction AVM: strategia immobiliare, valorizzazione e distribuzione degli spazi a Milano prima di progetto, ristrutturazione o investimento.",
  path: "/asset-direction"
});

const spaceAnalysis = [
  "distribuzione e percorsi",
  "proporzioni degli ambienti",
  "superfici utilizzabili e spazi sacrificati",
  "luce naturale e illuminazione",
  "rapporto tra le funzioni",
  "eventuale possibilità di ridistribuzione o frazionamento",
  "caratteristiche che possono diventare elementi distintivi",
  "criticità che limitano il valore percepito"
];

const strategies = [
  { title: "Vendita", text: "L’obiettivo è aumentare desiderabilità, leggibilità degli spazi e percezione di valore, evitando investimenti che il mercato difficilmente riconoscerà." },
  { title: "Locazione", text: "La priorità diventa trovare il giusto equilibrio tra investimento, durabilità, appeal fotografico, funzionalità e rendimento." },
  { title: "Hospitality", text: "Il progetto deve creare esperienza, riconoscibilità e valore percepito senza compromettere gestione, manutenzione e operatività." },
  { title: "Abitazione", text: "Le esigenze personali diventano parte del progetto, ma vengono ordinate attraverso distribuzione, luce, proporzioni e coerenza." },
  { title: "Investimento", text: "Ogni decisione viene confrontata con costo, valore post-intervento, domanda, liquidità e possibile ritorno." }
];

const assetLevels = [
  { index: "01", title: "Spazio", text: "Pianta, distribuzione, percorsi e funzioni." },
  { index: "02", title: "Luce", text: "Naturale e artificiale. La luce non decora lo spazio: lo costruisce." },
  { index: "03", title: "Materia", text: "Materiali, texture e finiture scelti per creare carattere senza compromettere commerciabilità e durata." },
  { index: "04", title: "Posizionamento", text: "A chi è destinato l’immobile e quale percezione deve generare." },
  { index: "05", title: "Valore", text: "Ogni intervento viene valutato anche rispetto a investimento, desiderabilità e potenziale economico." }
];

const outputs = [
  "lettura strategica dell’immobile", "analisi della planimetria", "individuazione di criticità e opportunità", "priorità di intervento", "ipotesi distributive", "direzione stilistica e materica", "indicazioni su luce e illuminazione", "valutazione delle scelte rispetto all’obiettivo dell’asset", "eventuale roadmap degli interventi", "indicazione delle aree in cui investire e di quelle in cui evitare spese non necessarie"
];

const whenUseful = [
  "hai acquistato un immobile e non sai ancora quale trasformazione abbia più senso", "devi ristrutturare prima di vendere o locare", "vuoi capire se una distribuzione può essere migliorata", "stai valutando un frazionamento", "vuoi evitare una ristrutturazione costosa ma commercialmente debole", "hai un immobile corretto ma poco desiderabile", "devi riposizionare un appartamento verso una fascia più alta", "vuoi capire dove investire il budget e dove non serve", "hai già un progetto ma vuoi una seconda lettura strategica"
];

const method = [
  { index: "01", title: "Osservare", text: "Leggere l’immobile senza partire da soluzioni preconfezionate." },
  { index: "02", title: "Interpretare", text: "Capire identità, limiti, opportunità e obiettivo dell’asset." },
  { index: "03", title: "Definire", text: "Stabilire distribuzione, priorità e direzione." },
  { index: "04", title: "Progettare", text: "Tradurre la strategia in spazio, luce, materia e dettagli." },
  { index: "05", title: "Verificare", text: "Controllare che ogni scelta continui a rispondere all’obiettivo iniziale." }
];

const audiences = [
  "proprietari privati", "investitori immobiliari", "operatori hospitality", "chi acquista per ristrutturare e rivendere", "chi deve riposizionare un immobile", "chi vuole prendere decisioni prima di impegnare capitale nei lavori"
];

export default function AssetDirectionPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src="/images/projects/imbonati-15/imbonati-home-cover.webp" alt="Imbonati 15, interno ristrutturato con cucina e penisola" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className={styles.heroShade} />
        <div className={styles.container}>
          <Reveal className={styles.heroContent}>
            <p className="eyebrow">Asset Direction</p>
            <h1>Asset Direction</h1>
            <p className={styles.heroStatement}>Prima di progettare, capire dove si trova davvero il valore.</p>
            <div className={styles.heroCopy}>
              <p>AVM osserva l’immobile prima di intervenire.</p>
              <p>Analizziamo distribuzione, proporzioni, luce, potenziale commerciale e obiettivo dell’asset per definire una direzione chiara prima che inizino progetto, lavori o investimento.</p>
              <p>Non partiamo dallo stile. Partiamo da ciò che l’immobile può diventare.</p>
            </div>
            <div className={styles.heroActions}><a href={inquiryLinks.consultation} className="gold-fill-btn">Richiedi una prima analisi</a></div>
            <p className={styles.microcopy}>Per immobili da valorizzare, ristrutturare, vendere, locare o riposizionare.</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.introGrid}>
            <div><p className="eyebrow">01 — Cos’è</p><h2>Non interior design. Direzione dell’immobile.</h2></div>
            <div className={styles.prose}>
              <p>Asset Direction è il lavoro che viene prima delle scelte estetiche.</p>
              <p>Serve a individuare il potenziale dell’immobile e a decidere quali trasformazioni abbiano realmente senso rispetto all’obiettivo.</p>
              <div className={styles.questionBlock}><p>La domanda non è:</p><p>“Come possiamo renderlo più bello?”</p><p>La domanda è:</p><p>“Quali decisioni aiutano davvero questo immobile a esprimere maggiore valore?”</p></div>
              <p>Distribuzione, luce, materiali, funzioni e linguaggio estetico diventano strumenti di una strategia immobiliare più ampia.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.spaceSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}><p className="eyebrow">02 — Lo spazio</p><h2>Ogni progetto parte dalla pianta.</h2><p>La prima lettura riguarda sempre lo spazio. La distribuzione degli spazi definisce ciò che l’immobile può diventare prima ancora della sua immagine.</p></Reveal>
          <div className={styles.spaceGrid}>
            <Reveal className={styles.planImage}><Image src="/images/projects/imbonati-15/03-planimetrie/stato-di-progetto.jpg" alt="Planimetria di progetto di Imbonati 15" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /></Reveal>
            <Reveal className={styles.analysis} delay={100}><div><p className={styles.listLabel}>Analizziamo</p><ul>{spaceAnalysis.map((item) => <li key={item}>{item};</li>)}</ul></div><p className={styles.closingLine}>Prima di scegliere un materiale dobbiamo sapere perché quell’intervento serve all’immobile.</p></Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}><p className="eyebrow">03 — Strategia</p><h2>Lo stesso immobile non si progetta allo stesso modo per tutti.</h2></Reveal>
          <div className={styles.strategyGrid}>{strategies.map((strategy, index) => <Reveal key={strategy.title} delay={index * 70} className={styles.strategyCard}><p>{String(index + 1).padStart(2, "0")}</p><h3>{strategy.title}</h3><p>{strategy.text}</p></Reveal>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.levelsSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}><p className="eyebrow">04 — Lettura dell’asset</p><h2>Cinque livelli. Una sola direzione.</h2></Reveal>
          <div className={styles.levels}>{assetLevels.map((level, index) => <Reveal key={level.title} delay={index * 75} className={styles.level}><p>{level.index}</p><div><h3>{level.title}</h3><p>{level.text}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.outputPanel}>
            <div className={styles.outputHeading}><p className="eyebrow">05 — Output</p><h2>Una direzione prima di spendere.</h2><p>La prima fase serve a trasformare l’incertezza in una serie di decisioni ordinate.</p></div>
            <div><p className={styles.listLabel}>In base al livello di approfondimento, il lavoro può comprendere:</p><ul className={styles.outputList}>{outputs.map((item) => <li key={item}>{item};</li>)}</ul></div>
            <p className={styles.outputQuote}><span>Il risultato non è semplicemente una moodboard.</span>È una direzione decisionale.</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}><p className="eyebrow">06 — Quando serve</p><h2>Asset Direction è particolarmente utile quando…</h2></Reveal>
          <div className={styles.whenGrid}>{whenUseful.map((item, index) => <Reveal key={item} delay={index * 45} className={styles.whenItem}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}.</p></Reveal>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.methodSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.methodIntro}><p className="eyebrow">07 — Metodo</p><h2>Prima il pensiero. Poi il progetto.</h2></Reveal>
          <ol className={styles.methodList}>{method.map((step, index) => <Reveal key={step.title} delay={index * 70}><li><p>{step.index}</p><h3>{step.title}</h3><p>{step.text}</p></li></Reveal>)}</ol>
          <Reveal className={styles.methodQuote}><p>“Ogni decisione progettuale deve rispondere a una domanda:</p><p>questa scelta aiuta davvero l’immobile a esprimere il suo potenziale?”</p></Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}><p className="eyebrow">08 — In pratica</p><h2>Asset Direction applicata agli immobili.</h2></Reveal>
          <div className={styles.caseGrid}>
            <Reveal className={styles.caseCard}><Link href="/progetti/imbonati-15" className={styles.caseLink}><div className={styles.caseImage}><Image src="/images/projects/imbonati-15/imbonati-home-cover.webp" alt="Imbonati 15, soggiorno e cucina rinnovati" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div><div className={styles.caseCopy}><p>Milano · Frazionamento e valorizzazione</p><h3>Imbonati 15</h3><p>Distribuzione, materiali, illuminazione e posizionamento costruiti per aumentare il valore percepito senza rendere l’immobile divisivo.</p><span>Scopri il progetto +</span></div></Link></Reveal>
            <Reveal className={styles.caseCard} delay={100}><Link href="/progetti/la-galleria" className={styles.caseLink}><div className={styles.caseImage}><Image src="/images/projects/la-galleria/after/la-galleria-hospitality-after-02.jpg" alt="La Galleria, residenza hospitality dopo la trasformazione" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: "56% center" }} /></div><div className={styles.caseCopy}><p>Milano · Hospitality</p><h3>La Galleria Milano</h3><p>Trasformazione di un immobile in asset hospitality riconoscibile attraverso spazio, scenografia, luce e signature pieces.</p><span>Scopri il progetto +</span></div></Link></Reveal>
          </div>
          <Reveal className={styles.projectsAction}><Link href="/progetti" className="gold-outline-btn">Scopri i progetti</Link></Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.audienceSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.audienceGrid}><div><p className="eyebrow">09 — Per chi</p><h2>Proprietari, investitori e immobili con potenziale ancora inespresso.</h2><p>Asset Direction è pensata per chi vuole prendere decisioni con un criterio prima di impegnare un investimento immobiliare.</p></div><ul>{audiences.map((item) => <li key={item}>{item};</li>)}</ul></Reveal>
          <Reveal className={styles.audienceClosing}>Non serve avere già un progetto. Spesso il momento più utile per intervenire è proprio prima che il progetto esista.</Reveal>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.finalImage}><Image src="/images/projects/imbonati-15/07-appartamento-1/soggiorno-cucina-hero.jpg" alt="Imbonati 15, soggiorno e cucina dopo la ristrutturazione" fill sizes="100vw" className="object-cover" /></div>
        <div className={styles.finalShade} />
        <div className={styles.container}><Reveal className={styles.finalContent}><p className="eyebrow">Prima di intervenire</p><h2>Capiamo cosa merita davvero di essere fatto.</h2><p>Puoi partire da una planimetria, alcune fotografie e una breve descrizione dell’obiettivo.</p><p>Da lì possiamo capire se è utile approfondire e quale livello di intervento ha senso.</p><a href={inquiryLinks.consultation} className="gold-fill-btn">Richiedi una prima analisi</a><p className={styles.microcopy}>Planimetria, fotografie e obiettivo dell’immobile sono sufficienti per iniziare.</p></Reveal></div>
      </section>
    </div>
  );
}
