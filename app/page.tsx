import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import type { Project } from "@/content/projects";
import { projects } from "@/content/projects";
import {
  createMetadata,
  homeFinalContact,
  homeFounder,
  homeHero,
  homeMatterAndLight,
  homeMetadata,
  homeMethod,
  homePositioning,
  homeSelectedProjects,
  homeTransformationStory
} from "@/content/site";

export const metadata = createMetadata({
  title: homeMetadata.seoTitle,
  description: homeMetadata.seoDescription,
  path: "/"
});

const selectedProjects = homeSelectedProjects.slugs
  .map<HomeProjectPreview | null>((slug) => {
    const project = projects.find((candidate) => candidate.slug === slug);

    if (!project) {
      return null;
    }

    const override =
      homeSelectedProjects.overrides[
        project.slug as keyof typeof homeSelectedProjects.overrides
      ];

    return {
      slug: project.slug,
      href: `/progetti/${project.slug}`,
      image: project.image,
      title: override?.title ?? project.title,
      city: override?.city ?? project.city,
      status: override?.status ?? project.status,
      category: override?.category ?? project.category,
      summary: override?.summary ?? project.summary
    };
  })
  .filter((project): project is HomeProjectPreview => project !== null);

const fallbackProject = projects[0];
const primaryProject = selectedProjects[0] ?? {
  slug: fallbackProject.slug,
  href: `/progetti/${fallbackProject.slug}`,
  image: fallbackProject.image,
  title: fallbackProject.title,
  city: fallbackProject.city,
  status: fallbackProject.status,
  category: fallbackProject.category,
  summary: fallbackProject.summary
};
const secondaryProject = selectedProjects[1] ?? primaryProject;
const tertiaryProject = selectedProjects[2] ?? secondaryProject;
const transformationProject = primaryProject;

type HomeProjectPreview = {
  slug: Project["slug"];
  href: string;
  image: string;
  title: string;
  city: string;
  status: string;
  category: string;
  summary: string;
};

type EditorialProjectPreviewProps = {
  project: HomeProjectPreview;
  variant: "feature" | "split" | "stack";
};

function EditorialProjectPreview({
  project,
  variant
}: EditorialProjectPreviewProps) {
  if (variant === "feature") {
    return (
      <Link
        href={project.href}
        className="group block overflow-hidden rounded-[34px] border border-line bg-white/[0.03] shadow-glow"
      >
        <div className="relative min-h-[31rem] sm:min-h-[34rem] lg:min-h-[36rem]">
          <Image
            src={project.image}
            alt={`Vista interna del progetto ${project.title} a ${project.city}`}
            fill
            sizes="100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.06),rgba(15,15,15,0.42)_52%,rgba(15,15,15,0.92))]" />

          <div className="absolute inset-x-0 bottom-0 space-y-5 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-sand/70">
              <span>{project.city}</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{project.status}</span>
            </div>

            <div className="space-y-3">
              <h3 className="max-w-2xl font-serif text-3xl text-sand sm:text-4xl">
                {project.title}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-sand/78 sm:text-base">
                {project.summary}
              </p>
            </div>

            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-accent transition group-hover:gap-4">
              Apri progetto
              <span aria-hidden="true">+</span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "split") {
    return (
      <Link
        href={project.href}
        className="group block overflow-hidden rounded-[32px] border border-line bg-white/[0.03] shadow-glow"
      >
        <div className="grid gap-0 md:grid-cols-[0.52fr_0.48fr]">
          <div className="relative min-h-[18rem] md:min-h-full">
            <Image
              src={project.image}
              alt={`Interno del progetto ${project.title} a ${project.city}`}
              fill
              sizes="(min-width: 1024px) 22vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 sm:p-7">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span>{project.city}</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>{project.status}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-sand">{project.title}</h3>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {project.category}
                </p>
              </div>
              <p className="text-sm leading-7 text-muted">{project.summary}</p>
            </div>

            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-accent transition group-hover:gap-4">
              Apri progetto
              <span aria-hidden="true">+</span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={project.href}
      className="group block overflow-hidden rounded-[32px] border border-line bg-white/[0.03] shadow-glow"
    >
      <div className="relative min-h-[18rem] overflow-hidden">
        <Image
          src={project.image}
          alt={`Camera e atmosfera del progetto ${project.title} a ${project.city}`}
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      </div>

      <div className="space-y-4 p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
          <span>{project.city}</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>{project.status}</span>
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-sand">{project.title}</h3>
          <p className="text-sm leading-7 text-muted">{project.summary}</p>
        </div>

        <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-accent transition group-hover:gap-4">
          Apri progetto
          <span aria-hidden="true">+</span>
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden px-6 pb-12 pt-6 sm:pb-14 sm:pt-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] border border-line shadow-glow">
              <Image
                src={homeHero.image.src}
                alt={homeHero.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,15,15,0.9),rgba(15,15,15,0.62)_38%,rgba(15,15,15,0.18)_72%,rgba(15,15,15,0.55))]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.08),rgba(15,15,15,0.45)_48%,rgba(15,15,15,0.82))]" />

              <div className="relative flex min-h-[34rem] items-end px-6 py-8 sm:min-h-[38rem] sm:px-8 sm:py-10 lg:min-h-[42rem] lg:px-12 lg:py-11">
                <div className="max-w-[62rem] space-y-5 sm:space-y-6">
                  <h1 className="sr-only">{homeMetadata.h1}</h1>
                  <p className="eyebrow">{homeHero.eyebrow}</p>
                  <p
                    aria-hidden="true"
                    className="max-w-[62rem] font-serif text-[clamp(3rem,10vw,4.55rem)] leading-[0.98] text-sand text-balance lg:text-[clamp(3.9rem,5vw,5.85rem)]"
                  >
                    <span className="block">{homeHero.title[0]}</span>
                    <span className="mt-1.5 block sm:mt-2">{homeHero.title[1]}</span>
                  </p>
                  <p className="max-w-3xl text-base leading-7 text-sand/82 sm:text-lg">
                    {homeHero.description}
                  </p>

                  <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap">
                    <Link
                      href={homeHero.primaryCta.href}
                      className="gold-fill-btn w-full justify-center sm:w-auto"
                    >
                      {homeHero.primaryCta.label}
                    </Link>
                    <Link
                      href={homeHero.secondaryCta.href}
                      className="gold-outline-btn w-full justify-center sm:w-auto"
                    >
                      {homeHero.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="posizionamento" className="section-space pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-[38px] border border-black/10 bg-sand text-ink shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
              <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-12">
                <div className="space-y-8">
                  <div className="space-y-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#8f7430]">
                      {homePositioning.eyebrow}
                    </p>
                    <h2 className="max-w-3xl font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                      {homePositioning.title}
                    </h2>
                  </div>

                  <div className="max-w-2xl space-y-4 text-base leading-8 text-ink/80 sm:text-lg">
                    {homePositioning.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-black/10 pt-8">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#8f7430]">
                      Domanda guida
                    </p>
                    <p className="max-w-3xl font-serif text-2xl leading-snug text-ink/88 sm:text-3xl">
                      {homePositioning.question}
                    </p>
                  </div>

                  <Link
                    href={homePositioning.cta.href}
                    className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8f7430] transition hover:gap-4"
                  >
                    {homePositioning.cta.label}
                    <span aria-hidden="true">+</span>
                  </Link>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1 font-serif text-[clamp(2.4rem,5vw,5rem)] leading-[0.88] text-ink">
                    {homePositioning.statement.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <div className="relative min-h-[24rem] overflow-hidden rounded-[32px]">
                    <Image
                      src={homePositioning.image.src}
                      alt={homePositioning.image.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="progetti" className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">{homeSelectedProjects.eyebrow}</p>
              <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                {homeSelectedProjects.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {homeSelectedProjects.description}
              </p>
            </div>

            <Link href={homeSelectedProjects.cta.href} className="gold-outline-btn">
              {homeSelectedProjects.cta.label}
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6">
            <Reveal>
              <EditorialProjectPreview
                project={primaryProject}
                variant="feature"
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal delay={90}>
                <EditorialProjectPreview
                  project={secondaryProject}
                  variant="split"
                />
              </Reveal>
              <Reveal delay={160}>
                <EditorialProjectPreview
                  project={tertiaryProject}
                  variant="split"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="space-y-4">
                <p className="eyebrow">{homeMethod.eyebrow}</p>
                <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                  {homeMethod.title}
                </h2>
                <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
                  {homeMethod.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="relative min-h-[20rem] overflow-hidden rounded-[30px] border border-line">
                  <Image
                    src={homeMethod.image.src}
                    alt={homeMethod.image.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                </div>
                <div className="grid gap-4">
                  <div className="relative min-h-[9.5rem] overflow-hidden rounded-[28px] border border-line">
                    <Image
                      src={homeMethod.detailImage.src}
                      alt={homeMethod.detailImage.alt}
                      fill
                      sizes="(min-width: 1024px) 14vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  </div>
                  <div className="panel flex min-h-[9.5rem] flex-col justify-between p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">
                      Domanda guida
                    </p>
                    <p className="font-serif text-xl leading-snug text-sand">
                      Ogni scelta deve aumentare coerenza, funzionalità e valore percepito.
                    </p>
                  </div>
                </div>
              </div>

              <Link href={homeMethod.cta.href} className="gold-outline-btn">
                {homeMethod.cta.label}
              </Link>
            </Reveal>

            <ol className="space-y-5">
              {homeMethod.steps.map((step, index) => (
                <Reveal
                  key={step.index}
                  delay={index * 80}
                  className={index % 2 === 1 ? "lg:ml-12" : ""}
                >
                  <li className="relative border-l border-line pl-8">
                    <span className="absolute -left-[5px] top-2 h-[10px] w-[10px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(198,167,94,0.14)]" />
                    <div className="grid gap-3 pb-6 sm:grid-cols-[76px_1fr] sm:gap-6">
                      <p className="font-serif text-3xl text-accent">{step.index}</p>
                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl text-sand">{step.title}</h3>
                        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="prima-processo-dopo" className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-[38px] border border-black/10 bg-sand text-ink shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
              <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                <div className="max-w-3xl space-y-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#8f7430]">
                    {homeTransformationStory.eyebrow}
                  </p>
                  <h2 className="font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                    {homeTransformationStory.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-ink/78 sm:text-lg">
                    {homeTransformationStory.description}
                  </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_0.92fr_1.16fr]">
                  <div className="rounded-[32px] border border-black/10 bg-white/60 p-6 sm:p-7">
                    <div className="space-y-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#8f7430]">
                        Prima
                      </p>
                      <h3 className="font-serif text-2xl text-ink">
                        {homeTransformationStory.beforeTitle}
                      </h3>
                      <p className="text-sm leading-7 text-ink/72 sm:text-base">
                        {homeTransformationStory.beforeText}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[32px] border border-black/10 bg-white/70 p-6 sm:p-7">
                    <div className="space-y-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#8f7430]">
                        Processo
                      </p>
                      <h3 className="font-serif text-2xl text-ink">
                        {homeTransformationStory.processTitle}
                      </h3>
                      <p className="text-sm leading-7 text-ink/72 sm:text-base">
                        {homeTransformationStory.processText}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={transformationProject.href}
                    className="group block overflow-hidden rounded-[32px] border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
                  >
                    <div className="relative min-h-[24rem]">
                      <Image
                        src={transformationProject.image}
                        alt={`Esito del progetto ${transformationProject.title} a ${transformationProject.city}`}
                        fill
                        sizes="(min-width: 1024px) 34vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/24 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 sm:p-7">
                        <p className="text-xs uppercase tracking-[0.24em] text-accent">
                          Dopo
                        </p>
                        <h3 className="font-serif text-2xl text-sand">
                          {homeTransformationStory.afterTitle}
                        </h3>
                        <p className="max-w-md text-sm leading-7 text-sand/80 sm:text-base">
                          {homeTransformationStory.afterText}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="mt-8 flex justify-start">
                  <Link
                    href={homeTransformationStory.cta.href}
                    className="gold-outline-btn border-[#8f7430] text-[#8f7430] hover:border-[#8f7430] hover:bg-[#8f7430] hover:text-sand"
                  >
                    {homeTransformationStory.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="materia-luce" className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl space-y-4">
            <p className="eyebrow">{homeMatterAndLight.eyebrow}</p>
            <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
              {homeMatterAndLight.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {homeMatterAndLight.description}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
            <Reveal>
              <div className="relative min-h-[32rem] overflow-hidden rounded-[34px] border border-line">
                <Image
                  src={homeMatterAndLight.images[0].src}
                  alt={homeMatterAndLight.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent" />
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={80}>
                <div className="relative min-h-[15rem] overflow-hidden rounded-[30px] border border-line">
                  <Image
                    src={homeMatterAndLight.images[1].src}
                    alt={homeMatterAndLight.images[1].alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="relative min-h-[15rem] overflow-hidden rounded-[28px] border border-line">
                  <Image
                    src={homeMatterAndLight.images[2].src}
                    alt={homeMatterAndLight.images[2].alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="alessandro" className="section-space">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-[38px] border border-black/10 bg-sand text-ink shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
              <div className="grid gap-0 lg:grid-cols-[0.98fr_1.02fr]">
                <div className="space-y-6 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#8f7430]">
                    {homeFounder.eyebrow}
                  </p>
                  <h2 className="max-w-3xl font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                    {homeFounder.title}
                  </h2>
                  <div className="max-w-2xl space-y-4 text-base leading-8 text-ink/78 sm:text-lg">
                    {homeFounder.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <Link href={homeFounder.cta.href} className="gold-fill-btn">
                    {homeFounder.cta.label}
                  </Link>
                </div>

                <div className="relative min-h-[22rem] lg:min-h-full">
                  <Image
                    src={homeFounder.image.src}
                    alt={homeFounder.image.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.05),rgba(15,15,15,0.05))]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contatto-finale" className="section-space pt-6">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-[38px] border border-accent/30 bg-[linear-gradient(145deg,rgba(198,167,94,0.12),rgba(255,255,255,0.02))] px-6 py-9 text-center sm:px-8 sm:py-12">
              <div className="mx-auto max-w-3xl space-y-5">
                <p className="eyebrow">{homeFinalContact.eyebrow}</p>
                <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                  {homeFinalContact.title}
                </h2>
                <p className="text-base leading-7 text-muted sm:text-lg">
                  {homeFinalContact.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={homeFinalContact.primaryCta.href} className="gold-fill-btn">
                  {homeFinalContact.primaryCta.label}
                </Link>
                <Link
                  href={homeFinalContact.secondaryCta.href}
                  className="gold-outline-btn"
                >
                  {homeFinalContact.secondaryCta.label}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
