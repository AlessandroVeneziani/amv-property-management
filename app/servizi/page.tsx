import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata, inquiryLinks, services } from "@/content/site";

export const metadata = createMetadata({
  title: "Servizi | AMV Asset Direction",
  description:
    "Controllo operativo, direzione estetica e posizionamento per asset residenziali.",
  path: "/servizi"
});

export default function ServicesPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Servizi"
        title="Interventi essenziali, con una regia che resta coerente."
        description="I servizi AMV sono pensati per immobili che richiedono controllo, visione e continuità. Ogni ambito dialoga con gli altri: la gestione migliora il progetto, il progetto migliora la gestione."
      />

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 80}
                className="panel p-6 sm:p-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">
                      0{index + 1}
                    </p>
                    <span className="text-xs uppercase tracking-[0.24em] text-muted">
                      AMV scope
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl text-sand">{service.title}</h2>
                  <p className="max-w-xl text-sm leading-6 text-muted">
                    {service.summary}
                  </p>
                  <div className="grid gap-3">
                    {service.deliverables.map((deliverable) => (
                      <div
                        key={deliverable}
                        className="rounded-2xl border border-line bg-black/20 px-4 py-3 text-sm text-sand/80"
                      >
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-[34px] border border-line bg-white/[0.03] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4">
                  <p className="eyebrow">Modalità</p>
                  <h2 className="font-serif text-4xl leading-tight text-sand">
                    Ogni incarico parte da una lettura selettiva dell’asset.
                  </h2>
                </div>
                <div className="grid gap-4 text-sm leading-6 text-muted">
                  <p>
                    Il nostro lavoro può iniziare da un audit, da una singola unità o
                    da un portfolio più ampio. La forma dell’intervento cambia, il
                    principio resta: far emergere una qualità più precisa e sostenerla
                    nella gestione.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href={inquiryLinks.consultation} className="gold-fill-btn">
                      Richiedi una consulenza
                    </a>
                    <Link href="/metodo" className="gold-outline-btn">
                      Leggi il metodo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
