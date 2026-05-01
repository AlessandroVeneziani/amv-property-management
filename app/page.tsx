import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  audienceSegments,
  createMetadata,
  homePillars,
  inquiryLinks,
  methodSteps,
  positioningPoints
} from "@/content/site";
import { projects } from "@/content/projects";

export const metadata = createMetadata({
  title: "AVM Asset Direction | Diamo direzione al valore immobiliare",
  description:
    "Ogni immobile diventa un asset più chiaro, più solido, più desiderabile.",
  path: "/"
});

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="section-space overflow-hidden pb-16 pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <Reveal className="space-y-8">
            <div className="space-y-6">
              <p className="eyebrow">Asset Direction</p>
              <h1 className="max-w-3xl font-serif text-4xl leading-tight text-balance text-sand sm:text-5xl lg:text-7xl">
                Diamo direzione al valore immobiliare.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Ogni immobile diventa un asset più chiaro, più solido, più
                desiderabile.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={inquiryLinks.consultation} className="gold-fill-btn">
                Richiedi una prima analisi
              </a>
              <Link href="/progetti" className="gold-outline-btn">
                Scopri i progetti
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Controllo",
                  text: "Processi chiari, standard coerenti, continuità reale."
                },
                {
                  title: "Direzione",
                  text: "Materia, luce e tono al servizio del valore."
                },
                {
                  title: "Posizionamento",
                  text: "Un’identità più netta per immobili più forti."
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`panel p-5 ${index === 1 ? "bg-accent/[0.06]" : ""}`}
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-accent">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[28rem] overflow-hidden rounded-[34px] border border-line shadow-glow">
                <Image
                  src="/images/hero-milano.png"
                  alt="Interno cinematografico di un appartamento a Milano"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">
                    Milano skyline
                  </p>
                  <p className="max-w-sm font-serif text-2xl text-sand">
                    Un linguaggio più calmo, più netto, più credibile.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="panel flex min-h-[11rem] flex-col justify-between p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">
                    Posizionamento
                  </p>
                  <p className="font-serif text-2xl leading-snug text-sand">
                    Non più semplice gestione. Una direzione completa dell’asset.
                  </p>
                </div>

                <div className="relative min-h-[16rem] overflow-hidden rounded-[30px] border border-line">
                  <Image
                    src="/images/projects/method-detail.png"
                    alt="Dettaglio architettonico di un interno residenziale"
                    fill
                    sizes="(min-width: 1024px) 20vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm text-sand/85">
                      Cura materica, controllo dell’atmosfera, processi senza attrito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="posizionamento" className="section-space pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <SectionHeading
                eyebrow="Posizionamento"
                title="Non ci limitiamo a gestire immobili. Li rendiamo più forti."
                description="Quando gestione, estetica e strategia lavorano insieme, il valore diventa più leggibile, più solido, più desiderabile."
              />

              <div className="grid gap-4">
                {positioningPoints.map((point, index) => (
                  <div key={point.label} className="panel p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.24em] text-accent">
                          {point.label}
                        </p>
                        <p className="max-w-xl text-base leading-7 text-muted">
                          {point.text}
                        </p>
                      </div>
                      <span className="font-serif text-3xl text-white/15">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="servizi" className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Pilastri"
              title="Tre direttrici, una sola regia."
              description="Ogni asset si rafforza quando controllo, identità e posizionamento lavorano insieme."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homePillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 80}
                className="panel h-full p-6"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-accent">
                  {pillar.id}
                </p>
                <h3 className="mt-6 font-serif text-2xl text-sand">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="progetti" className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Portfolio"
                title="Asset gestiti con una direzione precisa."
                description="Ogni progetto è un lavoro di allineamento tra spazio, percezione e valore."
              />
              <Link href="/progetti" className="gold-outline-btn">
                Scopri i progetti
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <ProjectCard project={featuredProjects[0]} tall />
            </Reveal>

            <div className="grid gap-6 lg:col-span-5">
              {featuredProjects.slice(1).map((project, index) => (
                <Reveal key={project.slug} delay={index * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-space">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[34rem] overflow-hidden rounded-[34px] border border-line shadow-glow">
              <Image
                src="/images/projects/method-detail.png"
                alt="Dettaglio di un interno progettato con materiali caldi e luce indiretta"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <SectionHeading
                eyebrow="Metodo"
                title="Un metodo per dare direzione, non solo gestione."
              />
            </Reveal>

            <div className="space-y-4">
              {methodSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90} className="panel p-5 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-[72px_1fr]">
                    <p className="font-serif text-3xl text-accent">{step.index}</p>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-sand">{step.title}</h3>
                      <p className="text-sm leading-6 text-muted">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220}>
              <Link href="/metodo" className="gold-outline-btn">
                Approfondisci il metodo
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Destinatari"
              title="Per chi non si accontenta di una gestione ordinaria."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {audienceSegments.map((segment, index) => (
              <Reveal
                key={segment.title}
                delay={index * 80}
                className="panel flex h-full flex-col justify-between p-6"
              >
                <div className="space-y-5">
                  <span className="text-sm uppercase tracking-[0.18em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-3xl text-sand">{segment.title}</h3>
                  <p className="text-sm leading-6 text-muted">{segment.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-5 rounded-[34px] border border-line bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-4">
                <p className="eyebrow">Valore</p>
                <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl">
                  Il valore non è solo nei numeri. È nella percezione.
                </h2>
              </div>
              <div className="flex items-center">
                <p className="max-w-2xl font-serif text-2xl leading-snug text-sand/92 sm:text-3xl">
                  Prima si vede, poi si sente, poi si misura.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-[36px] border border-accent/30 bg-[linear-gradient(135deg,rgba(198,167,94,0.12),rgba(255,255,255,0.02))] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="space-y-4">
                  <p className="eyebrow">Contatto</p>
                  <h2 className="max-w-3xl font-serif text-4xl leading-tight text-sand sm:text-5xl">
                    Richiedi una prima analisi del tuo immobile.
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    Valutiamo se esiste un margine reale di valorizzazione.
                  </p>
                  <p className="max-w-2xl text-sm leading-6 text-sand/72">
                    Lavoriamo solo su immobili dove possiamo creare un miglioramento concreto.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <a href={inquiryLinks.consultation} className="gold-fill-btn">
                    Richiedi una prima analisi
                  </a>
                  <Link href="/progetti" className="gold-outline-btn">
                    Scopri i progetti
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
