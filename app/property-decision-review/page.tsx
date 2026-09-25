import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { consultationProducts, createMetadata } from "@/content/site";

import { PropertyDecisionReviewCheckoutLink } from "./property-decision-review-checkout-link";

const product = consultationProducts.decisionReview;
const consultation = consultationProducts.hospitality;
const bespoke = consultationProducts.bespoke;

export const metadata = createMetadata({
  title: "Property Decision Review | AVM Asset Direction",
  description:
    "Property Decision Review AVM per valutare potenziale, distribuzione, criticità e coerenza di un immobile prima dell’acquisto o di una trasformazione importante.",
  path: product.href,
  openGraphTitle: "Property Decision Review | AVM",
  openGraphDescription:
    "Una lettura strategica prima di acquistare, trasformare o impegnare capitale su un immobile.",
  openGraphImage:
    "/images/projects/imbonati-15/04-render/appartamento-1/appartamento-1-render-soggiorno-tv.jpg",
  openGraphImageAlt: "Render di soggiorno AVM con parete TV e direzione materica"
});

const usefulWhen = [
  "stai valutando un acquisto e vuoi capire se l’immobile ha potenziale reale",
  "hai più ipotesi di trasformazione e devi scegliere quale approfondire",
  "devi verificare se distribuzione, costi e obiettivo sono coerenti",
  "vuoi individuare criticità prima di impegnare budget o firmare decisioni importanti",
  "stai considerando una destinazione residenziale, locativa o hospitality"
];

const reviewAreas = [
  {
    title: "Potenziale",
    text: "Quale direzione può rendere l’immobile più desiderabile, leggibile e coerente con il suo obiettivo."
  },
  {
    title: "Distribuzione",
    text: "Come la pianta supporta o limita uso, percezione, trasformazione e valore."
  },
  {
    title: "Criticità",
    text: "Quali nodi possono indebolire l’operazione se non vengono riconosciuti prima."
  },
  {
    title: "Valorizzazione",
    text: "Dove ha senso concentrare attenzione e investimento per aumentare qualità percepita."
  },
  {
    title: "Coerenza",
    text: "Se obiettivo, budget, intervento e posizionamento stanno raccontando la stessa direzione."
  },
  {
    title: "Priorità",
    text: "Quali decisioni vengono prima e quali approfondimenti tecnici richiedono specialisti dedicati."
  }
];

const materials = [
  "planimetria dell’immobile",
  "fotografie o video degli ambienti",
  "metratura, localizzazione e contesto",
  "obiettivo dell’operazione",
  "eventuali ipotesi distributive o progettuali",
  "preventivi, capitolati o vincoli già noti, se disponibili"
];

const exclusions = [
  "una perizia tecnica",
  "una due diligence legale",
  "una valutazione bancaria",
  "una certificazione urbanistica o catastale",
  "un computo metrico o preventivo lavori",
  "un progetto esecutivo"
];

export default function PropertyDecisionReviewPage() {
  return (
    <div className="overflow-hidden pb-16">
      <section className="relative isolate flex min-h-[min(54rem,calc(100svh-4rem))] items-end overflow-hidden py-20">
        <Image
          src="/images/projects/imbonati-15/04-render/appartamento-1/appartamento-1-render-soggiorno-tv.jpg"
          alt="Render di soggiorno AVM con parete TV e direzione materica"
          fill
          priority
          sizes="100vw"
          className="z-[-2] object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(90deg,rgba(10,9,7,0.9),rgba(10,9,7,0.72)_42%,rgba(10,9,7,0.26)),linear-gradient(180deg,rgba(10,9,7,0.12),rgba(10,9,7,0.68))]" />

        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal className="max-w-[49rem]">
            <p className="eyebrow">AVM Review</p>
            <h1 className="mt-4 max-w-[7.2em] font-serif text-[clamp(2.45rem,10.8vw,2.85rem)] leading-[0.98] text-sand [overflow-wrap:anywhere] [text-wrap:wrap] sm:max-w-[49rem] sm:text-[clamp(3.1rem,7vw,6.2rem)] sm:leading-[0.96] sm:[text-wrap:balance]">
              Property Decision Review
            </h1>
            <p className="mt-7 max-w-2xl font-serif text-[clamp(1.5rem,3vw,2.45rem)] leading-[1.08] text-sand">
              Una lettura strategica prima di acquistare, trasformare o impegnare capitale su un immobile.
            </p>
            <div className="mt-7 max-w-2xl space-y-3 text-base leading-8 text-sand/82">
              <p>
                La review è pensata per chi sta valutando un immobile e vuole capire se l’operazione ha una direzione solida prima di procedere.
              </p>
              <p>
                AVM legge potenziale, distribuzione, criticità e possibilità di valorizzazione, restituendo una visione ordinata delle decisioni da prendere.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
            <div className="space-y-4">
              <p className="eyebrow">Quando serve</p>
              <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                Prima della scelta, serve una lettura dell’operazione.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>
                Non sempre il punto è progettare subito. A volte la domanda più importante è capire se l’immobile, l’obiettivo e il livello di investimento stanno nella stessa direzione.
              </p>
              <p>
                La Property Decision Review serve a mettere ordine prima di acquistare, trasformare, riposizionare o avviare una ristrutturazione significativa.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-1 border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {usefulWhen.map((item, index) => (
              <Reveal key={item} delay={index * 45}>
                <div className="min-h-full bg-[#15130f] p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-5 font-serif text-2xl leading-snug text-sand">
                    {item}.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/[0.035]">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl space-y-4">
            <p className="eyebrow">Analisi</p>
            <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
              Sei livelli di revisione, una sola domanda di fondo.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Questa operazione ha una direzione credibile rispetto al suo potenziale?
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviewAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 65} className="panel p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 font-serif text-3xl leading-none text-sand">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {area.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="architectural-board p-6 text-ink sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8f7430]">
                Materiali preliminari
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-balance sm:text-4xl">
                La review parte dalla documentazione che hai già.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink/76">
                Non serve arrivare con un progetto completo. Servono elementi sufficienti per leggere contesto, spazio, obiettivo e decisioni aperte.
              </p>
              <ul className="mt-8 space-y-3">
                {materials.map((item) => (
                  <li
                    key={item}
                    className="border-t border-black/10 pt-3 text-sm leading-6 text-ink/82"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="editorial-bronze-glass-panel p-6 sm:p-8 lg:p-10" delay={100}>
              <p className="eyebrow">Restituzione</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl">
                Una sessione individuale con Alessandro Veneziani.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-muted">
                <p>
                  Dopo l’analisi preliminare, la review viene restituita in una sessione individuale dedicata.
                </p>
                <p>
                  L’obiettivo è chiarire potenziale, rischi evidenti, priorità e prossimi passaggi, distinguendo ciò che può essere deciso subito da ciò che richiede approfondimenti tecnici specialistici.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/[0.035]">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="space-y-4">
              <p className="eyebrow">Confini</p>
              <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                Non è una verifica tecnica o una certificazione.
              </h2>
              <p className="text-base leading-7 text-muted">
                La review aiuta a leggere l’operazione dal punto di vista strategico, distributivo e di valorizzazione. Non sostituisce professionisti tecnici, legali, fiscali o bancari.
              </p>
            </div>
            <ul className="grid gap-3">
              {exclusions.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-black/20 px-4 py-3 text-sm leading-6 text-sand/82"
                >
                  Non è {item}.
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-[38px] border border-accent/30 bg-[linear-gradient(145deg,rgba(198,167,94,0.12),rgba(255,255,255,0.02))] px-6 py-9 text-center sm:px-8 sm:py-12">
              <div className="mx-auto max-w-3xl space-y-5">
                <p className="eyebrow">{product.name}</p>
                <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                  Una review prima della decisione.
                </h2>
                <p className="text-base leading-7 text-muted sm:text-lg">
                  {product.summary}
                </p>
                <p className="font-serif text-4xl text-sand">{product.price}</p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <PropertyDecisionReviewCheckoutLink
                  href={product.stripeUrl}
                  className="gold-fill-btn"
                >
                  {product.ctaLabel}
                </PropertyDecisionReviewCheckoutLink>
                <Link href={consultation.href} className="gold-outline-btn">
                  Consulenza {consultation.price}
                </Link>
                <Link href={bespoke.href} className="gold-outline-btn">
                  {bespoke.shortName}
                </Link>
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-sand/62">
                Dopo il pagamento riceverai le istruzioni operative per completare la prenotazione e inviare la documentazione preliminare.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
