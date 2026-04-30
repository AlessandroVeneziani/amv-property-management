import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata, inquiryLinks, investorPrinciples } from "@/content/site";

export const metadata = createMetadata({
  title: "Investitori | AMV Asset Direction",
  description:
    "Collaborazioni immobiliari riservate, strutturate caso per caso e accessibili solo a partner selezionati.",
  path: "/investitori"
});

export default function InvestorsPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Investitori"
        title="Operazioni immobiliari riservate"
        description="AMV valuta collaborazioni project-based con partner selezionati. L’accesso è riservato, il perimetro operativo è definito caso per caso e la comunicazione resta sempre conforme."
      >
        <p className="text-sm leading-6 text-muted">
          Nessuna offerta al pubblico. Nessuna promessa finanziaria. Solo
          interlocuzioni qualificate e collaborazioni strutturate.
        </p>
      </PageHero>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            {investorPrinciples.map((principle, index) => (
              <Reveal
                key={principle}
                delay={index * 70}
                className="panel flex items-start gap-5 p-6 sm:p-8"
              >
                <span className="font-serif text-4xl text-accent">0{index + 1}</span>
                <p className="text-base leading-7 text-muted">{principle}</p>
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
                  title: "Accesso su invito",
                  text: "Le operazioni vengono condivise solo con interlocutori già qualificati o con richieste valutate in modo selettivo."
                },
                {
                  title: "Struttura per progetto",
                  text: "Ogni collaborazione nasce da un perimetro chiaro: obiettivo, ruolo operativo, tempistiche e responsabilità."
                },
                {
                  title: "Comunicazione conforme",
                  text: "Il linguaggio utilizzato resta descrittivo, prudente e privo di riferimenti a rendimenti o promesse."
                }
              ].map((item) => (
                <div key={item.title} className="panel h-full p-6">
                  <h2 className="font-serif text-2xl text-sand">{item.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-[34px] border border-accent/25 bg-white/[0.03] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="space-y-4">
                  <p className="eyebrow">Accesso</p>
                  <h2 className="font-serif text-4xl leading-tight text-sand">
                    Richiedi un primo confronto riservato
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-muted">
                    Se desideri presentare il tuo profilo o valutare una possibile
                    collaborazione, AMV può aprire una prima interlocuzione privata.
                  </p>
                </div>
                <a href={inquiryLinks.investors} className="gold-fill-btn">
                  Richiedi accesso
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
