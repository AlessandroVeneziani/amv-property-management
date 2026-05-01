import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";
import { createMetadata, inquiryLinks } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return createMetadata({
      title: "Progetto non trovato | AVM Asset Direction",
      description: "Il progetto richiesto non è disponibile.",
      path: "/progetti"
    });
  }

  return createMetadata({
    title: `${project.title} | AVM Asset Direction`,
    description: project.summary,
    path: `/progetti/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-16">
      <PageHero
        eyebrow={`${project.city} / ${project.status}`}
        title={project.title}
        description={project.description}
      >
        <div className="flex flex-wrap gap-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-full border border-line px-4 py-2 text-sm text-muted"
            >
              <span className="text-sand">{metric.label}:</span> {metric.value}
            </div>
          ))}
        </div>
      </PageHero>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative min-h-[28rem] overflow-hidden rounded-[34px] border border-line shadow-glow sm:min-h-[36rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="panel p-6 sm:p-8">
            <p className="eyebrow">Scheda progetto</p>
            <div className="mt-6 grid gap-5 text-sm text-muted">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sand">Categoria</p>
                <p className="mt-2">{project.category}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sand">Anno</p>
                <p className="mt-2">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sand">Focus</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {[
              { label: "Sfida", text: project.challenge },
              { label: "Approccio", text: project.approach },
              { label: "Esito", text: project.outcome }
            ].map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 90}
                className="panel p-6 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-accent">{item.label}</p>
                <p className="mt-4 font-serif text-2xl leading-snug text-sand sm:text-3xl">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-3">
              {project.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`relative overflow-hidden rounded-[28px] border border-line ${
                    index === 0 ? "lg:col-span-2 min-h-[26rem]" : "min-h-[26rem]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} dettaglio ${index + 1}`}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 52vw, 100vw" : "(min-width: 1024px) 26vw, 100vw"}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-[34px] border border-line bg-white/[0.03] p-8 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-4">
                  <p className="eyebrow">Prossimo passo</p>
                  <h2 className="font-serif text-4xl leading-tight text-sand">
                    Un progetto efficace nasce da una lettura lucida del contesto.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href={inquiryLinks.consultation} className="gold-fill-btn">
                    Richiedi una prima analisi
                  </a>
                  <Link href="/progetti" className="gold-outline-btn">
                    Torna ai progetti
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
