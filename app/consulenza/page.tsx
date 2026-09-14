import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { consultationProducts, createMetadata } from "@/content/site";

import styles from "./consulenza.module.css";

export const metadata = createMetadata({
  title: "Consulenza Strategica Immobiliare Milano | AVM",
  description:
    "Consulenza strategica immobiliare AVM per proprietari e investitori: analisi di planimetrie, distribuzione, budget, valorizzazione e decisioni prima del progetto.",
  path: "/consulenza",
  openGraphTitle: "Consulenza Strategica Immobiliare | AVM",
  openGraphDescription:
    "Un confronto strategico prima di prendere decisioni costose.",
  openGraphImage:
    "/images/projects/imbonati-15/07-appartamento-1/soggiorno-cucina-hero.jpg",
  openGraphImageAlt: "Soggiorno e cucina di Imbonati 15 dopo l’intervento"
});

const situations = [
  "stai acquistando un immobile e vuoi valutarne il potenziale",
  "devi decidere se ristrutturare prima di vendere",
  "hai più ipotesi distributive e non sai quale abbia più senso",
  "vuoi capire se un preventivo è coerente con il risultato atteso",
  "stai valutando un frazionamento",
  "devi scegliere dove investire il budget",
  "vuoi riposizionare un immobile per locazione o hospitality",
  "hai già un progetto e desideri una seconda lettura strategica",
  "senti che qualcosa non funziona, ma non hai ancora identificato il problema"
];

const materials = [
  "planimetria", "fotografie o video", "metratura e localizzazione", "obiettivo dell’immobile", "eventuali progetti già sviluppati", "preventivi o capitolati", "dubbi e decisioni ancora aperte"
];

const analysis = [
  { title: "Distribuzione", text: "Come vengono utilizzati gli spazi e dove esistono criticità o opportunità." },
  { title: "Valorizzazione", text: "Quali interventi possono aumentare desiderabilità e qualità percepita." },
  { title: "Investimento", text: "Dove ha senso spendere e dove il costo rischia di non essere riconosciuto." },
  { title: "Posizionamento", text: "Vendita, locazione, hospitality o abitazione richiedono strategie differenti." },
  { title: "Luce e materiali", text: "Quando incidono realmente sulla percezione dello spazio e sul risultato finale." },
  { title: "Priorità", text: "Quali decisioni prendere prima e quali possono aspettare." }
];

const outcomes = [
  "quali sono le priorità", "quali problemi meritano realmente di essere risolti", "quali ipotesi approfondire", "quali interventi evitare", "dove concentrare il budget", "quale dovrebbe essere il prossimo passo"
];

const exclusions = [
  "un sopralluogo tecnico", "una perizia", "una verifica urbanistica o catastale", "un preventivo lavori", "un servizio di property management", "una sessione di interior decoration"
];

const audience = [
  "proprietario di un immobile", "investitore", "acquirente prima di una decisione", "proprietario che vuole vendere o locare", "operatore hospitality", "professionista che desidera un confronto esterno", "cliente che ha già un progetto ma vuole verificarne la direzione"
];

const product = consultationProducts.hospitality;

const includes = [
  "una sessione individuale di 60 minuti con Alessandro Veneziani",
  "lettura del potenziale dell’immobile rispetto all’obiettivo",
  "analisi di distribuzione, priorità, criticità e opportunità",
  "orientamento su scelte di valorizzazione, hospitality o locazione",
  "indicazione dei passaggi successivi più sensati"
];

export default function ConsultationPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src="/images/projects/imbonati-15/07-appartamento-1/soggiorno-cucina-hero.jpg" alt="Soggiorno e cucina di Imbonati 15 dopo l’intervento" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className={styles.heroShade} />
        <div className={styles.container}>
          <Reveal className={styles.heroContent}>
            <p className="eyebrow">Consulenza AVM</p>
            <h1>Consulenza Strategica Immobiliare</h1>
            <p className={styles.heroStatement}>Un confronto strategico prima di prendere decisioni costose.</p>
            <div className={styles.heroCopy}>
              <p>La consulenza AVM è pensata per chi ha un immobile, un progetto o un investimento e ha bisogno di una lettura esterna, concreta e strategica prima di procedere.</p>
              <p>Puoi arrivare con una planimetria, alcune fotografie, un preventivo, un’idea ancora confusa o una decisione da prendere.</p>
              <p>L’obiettivo è capire cosa ha senso fare, cosa evitare e quale direzione seguire.</p>
            </div>
            <Link href="#acquisto" className="gold-fill-btn">Scopri modalità e prezzo</Link>
            <p className={styles.microcopy}>Per proprietari, investitori e professionisti.</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.splitIntro}>
            <div><p className="eyebrow">01 — Quando serve</p><h2>Non sempre serve un progetto completo.</h2></div>
            <div className={styles.prose}><p>A volte il problema non è progettare.</p><p>È capire quale scelta fare prima di progettare.</p><p>La consulenza può essere utile quando:</p></div>
          </Reveal>
          <div className={styles.situations}>{situations.map((item, index) => <Reveal key={item} delay={index * 45} className={styles.situation}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}.</p></Reveal>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.materialsSection}`}>
        <div className={styles.container}>
          <div className={styles.materialsGrid}>
            <Reveal className={styles.planImage}><Image src="/images/projects/imbonati-15/03-planimetrie/stato-di-progetto.jpg" alt="Planimetria di progetto di Imbonati 15" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /></Reveal>
            <Reveal className={styles.materialsCopy} delay={100}><p className="eyebrow">02 — Materiali</p><h2>Per iniziare bastano pochi elementi.</h2><p>Quando disponibili, possono essere utili:</p><ul>{materials.map((item) => <li key={item}>{item};</li>)}</ul><p className={styles.closingLine}>Non è necessario avere già tutto definito. Spesso la consulenza è più utile proprio prima che le decisioni diventino definitive.</p></Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.heading}><p className="eyebrow">03 — Analisi</p><h2>Un confronto concreto sull’immobile.</h2><p>Durante la consulenza analizziamo il progetto partendo dall’obiettivo reale.</p></Reveal>
          <div className={styles.analysisGrid}>{analysis.map((item, index) => <Reveal key={item.title} delay={index * 65} className={styles.analysisCard}><p>{String(index + 1).padStart(2, "0")}</p><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.outputSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.outputPanel}>
            <div><p className="eyebrow">04 — Output</p><h2>Non una conversazione generica. Una direzione.</h2><p>Alla fine dell’incontro dovresti avere maggiore chiarezza su:</p></div>
            <ul>{outcomes.map((item) => <li key={item}>{item};</li>)}</ul>
            <p className={styles.outputClosing}>Quando utile, la consulenza può diventare il punto di partenza per un successivo lavoro di Asset Direction o progettazione. <strong>Ma non obbliga il cliente a proseguire con AVM.</strong></p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.modeGrid}>
            <div><p className="eyebrow">05 — Modalità</p><h2>Una consulenza costruita sul tema da affrontare.</h2></div>
            <div className={styles.prose}><p>La consulenza dura {product.duration} e viene definita in funzione del tema da affrontare e del materiale disponibile.</p><p>Può svolgersi online oppure in presenza, quando concordato.</p><p>Dopo l’acquisto riceverai le indicazioni operative per fissare l’incontro e inviare planimetrie, fotografie, preventivi o altri materiali utili alla lettura del caso.</p><p>Il costo della sessione è {product.price}.</p></div>
          </Reveal>
        </div>
      </section>

      <section id="acquisto" className={`${styles.section} ${styles.offerSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.offerPanel}>
            <div className={styles.offerIntro}>
              <p className="eyebrow">{product.name}</p>
              <h2>{product.shortName}</h2>
              <p>{product.summary}</p>
            </div>
            <div className={styles.offerMeta}>
              <div>
                <p>Durata</p>
                <strong>{product.duration}</strong>
              </div>
              <div>
                <p>Prezzo</p>
                <strong>{product.price}</strong>
              </div>
            </div>
            <div className={styles.offerIncludes}>
              <p className={styles.listLabel}>Cosa comprende</p>
              <ul>{includes.map((item) => <li key={item}>{item};</li>)}</ul>
            </div>
            <div className={styles.offerAction}>
              <a href={product.stripeUrl} className="gold-fill-btn">
                {product.ctaLabel}
              </a>
              <p>Dopo il pagamento riceverai le istruzioni per completare la prenotazione e preparare il materiale utile alla sessione.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.boundariesSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.boundaries}><div><p className="eyebrow">06 — Confini del servizio</p><h2>La consulenza non è…</h2></div><ul>{exclusions.map((item) => <li key={item}>{item};</li>)}</ul><p>Quando necessario, AVM può indicare quali approfondimenti tecnici devono essere affidati ai professionisti competenti.</p></Reveal>
        </div>
      </section>

      <section className={styles.evolution}>
        <div className={styles.evolutionImage}><Image src="/images/projects/method-detail.png" alt="Dettaglio materico di un progetto AVM" fill sizes="100vw" className="object-cover" /></div><div className={styles.evolutionShade} />
        <div className={styles.container}><Reveal className={styles.evolutionContent}><p className="eyebrow">07 — Evoluzione</p><h2>Se emerge un potenziale da sviluppare.</h2><p>Alcuni immobili richiedono soltanto una decisione.</p><p>Altri meritano un lavoro più approfondito.</p><p>Se durante la consulenza emergono opportunità che richiedono sviluppo, possiamo valutare insieme un percorso successivo di Asset Direction, progettazione o direzione strategica dell’intervento.</p><Link href="/asset-direction/" className="gold-outline-btn">Scopri Asset Direction</Link></Reveal></div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.audience}><div><p className="eyebrow">08 — Per chi</p><h2>Può essere utile se sei…</h2><p>{product.idealFor}</p></div><ul>{audience.map((item) => <li key={item}>{item};</li>)}</ul></Reveal>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.container}><Reveal className={styles.finalContent}><p className="eyebrow">Prima di decidere</p><h2>Se hai un immobile e una decisione aperta, partiamo da quella.</h2><p>Non serve arrivare con tutte le risposte.</p><p>Porta la planimetria, le informazioni che hai e il problema che vuoi risolvere.</p><a href={product.stripeUrl} className="gold-fill-btn">{product.ctaLabel}</a><p className={styles.microcopy}>Prima dell’incontro potrai inviare planimetrie, fotografie e materiali utili alla lettura del progetto.</p></Reveal></div>
      </section>
    </div>
  );
}
