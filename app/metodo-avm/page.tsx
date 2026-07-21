import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata, methodSteps } from "@/content/site";

export const metadata = createMetadata({
  title: "Metodo AVM | AVM Asset Direction",
  description:
    "Metodo AVM per la valorizzazione immobiliare: una struttura iniziale che introduce diagnosi, direzione, attivazione e consolidamento.",
  path: "/metodo-avm"
});

export default function MethodAvmPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Metodo"
        title="Metodo AVM per la valorizzazione immobiliare"
        description="Prima comprendere. Poi trasformare. Questa pagina introduce l’ossatura del metodo AVM, che verrà approfondita nella prossima fase del lavoro."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/contatti" className="gold-fill-btn">
            Parla con AVM
          </Link>
          <Link href="/progetti" className="gold-outline-btn">
            Esplora i progetti
          </Link>
        </div>
      </PageHero>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            {methodSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 70}
                className="panel p-6 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-accent">
                  Fase {step.index}
                </p>
                <h2 className="mt-4 font-serif text-3xl text-sand">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
