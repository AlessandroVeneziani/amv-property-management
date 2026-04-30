import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { methodSteps, createMetadata } from "@/content/site";

export const metadata = createMetadata({
  title: "Metodo | AVM Asset Direction",
  description:
    "Come AVM integra gestione, design e posizionamento per creare valore immobiliare nel tempo.",
  path: "/metodo"
});

export default function MethodPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Metodo"
        title="Una pratica che tiene insieme progetto, gestione e percezione."
        description="AVM interviene sul valore immobiliare con un approccio che unisce lettura del contesto, direzione estetica e controllo operativo. Ogni scelta deve essere bella, utile e sostenibile nel tempo."
      />

      <section className="pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="space-y-5">
              <p className="eyebrow">Integrazione</p>
              <h2 className="font-serif text-4xl leading-tight text-sand">
                Design e management non sono due fasi separate.
              </h2>
              <p className="text-base leading-7 text-muted sm:text-lg">
                Un immobile si rafforza quando la qualità visiva e quella operativa
                avanzano insieme. Per questo lavoriamo sulla direzione degli spazi
                con la stessa attenzione riservata a procedure, manutenzione,
                utilizzo e presentazione.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative min-h-[28rem] overflow-hidden rounded-[34px] border border-line shadow-glow">
              <Image
                src="/images/projects/method-detail.png"
                alt="Dettaglio di un interno raffinato con luci calde"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            {methodSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 80}
                className="panel p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">
                      Fase {step.index}
                    </p>
                    <h3 className="font-serif text-3xl text-sand">{step.title}</h3>
                    <p className="text-sm leading-6 text-muted">{step.text}</p>
                  </div>
                  <span className="font-serif text-5xl text-white/10">{step.index}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Lettura precisa",
                  text: "Partiamo da ciò che l’immobile comunica oggi, non da formule standard."
                },
                {
                  title: "Scelte calibrate",
                  text: "Interveniamo per sottrazione, proporzione e continuità, non per accumulo."
                },
                {
                  title: "Valore durevole",
                  text: "Ogni decisione deve reggere nel tempo, nella gestione e nell’esperienza."
                }
              ].map((item, index) => (
                <div key={item.title} className="panel h-full p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-serif text-2xl text-sand">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
