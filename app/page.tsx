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

type HomeProjectPreview = {
  slug: Project["slug"];
  href: string;
  images: {
    feature: Project["coverImage"];
    split: Project["coverImage"];
    stack: Project["coverImage"];
    before: Project["coverImage"];
    after: Project["coverImage"];
  };
  title: string;
  city: string;
  status: string;
  category: string;
  summary: string;
};

const buildHomeProjectPreview = (project: Project): HomeProjectPreview => ({
  slug: project.slug,
  href: `/progetti/${project.slug}`,
  images: {
    feature: project.homeMedia?.feature ?? project.coverImage,
    split: project.homeMedia?.split ?? project.coverImage,
    stack: project.homeMedia?.stack ?? project.coverImage,
    before: project.homeMedia?.before ?? project.coverImage,
    after: project.homeMedia?.after ?? project.coverImage
  },
  title: project.title,
  city: project.city,
  status: project.status,
  category: project.category,
  summary: project.summary
});

const fallbackProject = projects[0];
const transformationSourceProject =
  projects.find((candidate) => candidate.slug === "la-galleria") ?? fallbackProject;
const transformationProject = buildHomeProjectPreview(transformationSourceProject);

type HomeSelectedProjectItem = (typeof homeSelectedProjects.projects)[number] & {
  href: string | null;
};

const availableProjectSlugs = new Set(projects.map((project) => project.slug));
const selectedHomeProjects: HomeSelectedProjectItem[] =
  homeSelectedProjects.projects.map((project) => ({
    ...project,
    href: availableProjectSlugs.has(project.slug as Project["slug"])
      ? `/progetti/${project.slug}`
      : null
  }));

const getObjectPositionStyle = (
  image: { objectPosition?: string } | undefined
) => (image?.objectPosition ? { objectPosition: image.objectPosition } : undefined);

export default function HomePage() {
  return (
    <div className="home-ambient-background">
      <section className="overflow-hidden pb-12 pt-2 sm:pb-14 sm:pt-3">
        <Reveal>
          <div className="relative min-h-[82vh] overflow-hidden border-y border-line/70 sm:min-h-[86vh] lg:min-h-[88vh]">
            <Image
              src={homeHero.image.src}
              alt={homeHero.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[60%_center] md:object-[64%_center] lg:object-[68%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.72)_0%,rgba(12,12,12,0.58)_30%,rgba(12,12,12,0.34)_56%,rgba(12,12,12,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.16)_0%,rgba(12,12,12,0.18)_42%,rgba(12,12,12,0.52)_100%)]" />

            <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-14 sm:min-h-[86vh] sm:px-8 sm:py-16 lg:min-h-[88vh] lg:px-12 lg:py-18">
              <div className="max-w-[36rem] space-y-5 sm:max-w-[38rem] sm:space-y-6 lg:max-w-[40rem]">
                <h1 className="sr-only">{homeMetadata.h1}</h1>
                <p className="eyebrow text-sand/88">{homeHero.eyebrow}</p>
                <p
                  aria-hidden="true"
                  className="max-w-[40rem] font-serif text-[clamp(3rem,7.2vw,4.85rem)] leading-[0.98] text-sand text-balance lg:text-[clamp(4rem,4.85vw,5.35rem)]"
                >
                  <span className="block">{homeHero.title[0]}</span>
                  <span className="mt-1.5 block sm:mt-2">{homeHero.title[1]}</span>
                </p>
                <p className="max-w-2xl text-base leading-7 text-sand/82 sm:text-lg">
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
      </section>

      <section id="posizionamento" className="section-space pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="editorial-light-panel">
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

                  <div className="relative min-h-[24rem] overflow-hidden rounded-[32px] border border-black/10 shadow-[0_24px_60px_rgba(31,24,17,0.14)]">
                    <Image
                      src={homePositioning.image.src}
                      alt={homePositioning.image.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      style={getObjectPositionStyle(homePositioning.image)}
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
          <Reveal className="max-w-3xl space-y-4">
            <p className="eyebrow">{homeSelectedProjects.eyebrow}</p>
            <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
              {homeSelectedProjects.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {homeSelectedProjects.description}
            </p>
          </Reveal>

          <div className="mt-12 space-y-8 lg:space-y-10">
            {selectedHomeProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 90}>
                <article className="relative overflow-hidden rounded-[34px]">
                  <div className="relative aspect-[16/11] min-h-[24rem] sm:min-h-[28rem] md:aspect-[16/10] lg:aspect-[16/9] lg:min-h-[34rem]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      style={getObjectPositionStyle(project.image)}
                    />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-[58%] w-full max-w-[44rem] bg-[linear-gradient(180deg,rgba(8,7,6,0)_0%,rgba(8,7,6,0.14)_26%,rgba(8,7,6,0.86)_100%)] sm:max-w-[46rem]" />

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                      <div className="max-w-[32rem] space-y-3 sm:max-w-[34rem]">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-sand/72 sm:text-xs">
                          {project.eyebrow}
                        </p>
                        <h3 className="font-serif text-3xl text-sand sm:text-4xl">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-7 text-sand/82 sm:text-base">
                          {project.description}
                        </p>

                        {project.href ? (
                          <Link
                            href={project.href}
                            className="inline-flex items-center gap-3 pt-2 text-sm uppercase tracking-[0.18em] text-accent"
                          >
                            {homeSelectedProjects.projectCtaLabel}
                            <span aria-hidden="true">+</span>
                          </Link>
                        ) : (
                          <span
                            aria-disabled="true"
                            className="inline-flex items-center gap-3 pt-2 text-sm uppercase tracking-[0.18em] text-accent/78"
                          >
                            {homeSelectedProjects.projectCtaLabel}
                            <span aria-hidden="true">+</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="section-space pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-10 lg:space-y-12">
            <Reveal className="max-w-3xl space-y-4">
              <p className="eyebrow">{homeMethod.eyebrow}</p>
              <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                {homeMethod.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {homeMethod.description}
              </p>
            </Reveal>

            <ol className="grid gap-x-10 gap-y-0 border-t border-line/80 md:grid-cols-2 lg:grid-cols-3">
              {homeMethod.steps.map((step, index) => (
                <Reveal
                  key={step.index}
                  delay={index * 80}
                >
                  <li
                    className={[
                      "flex min-h-[12.5rem] flex-col gap-4 border-t border-line/80 py-6 sm:min-h-[13.5rem] sm:py-7",
                      index < 2 ? "md:border-t-0 md:pt-0" : "",
                      index < 3 ? "lg:border-t-0 lg:pt-0" : ""
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-accent/90">
                      {step.index}
                    </p>
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl text-sand sm:text-[2rem]">
                        {step.title}
                      </h3>
                      <p className="max-w-[18rem] text-sm leading-7 text-muted sm:text-base">
                        {step.text}
                      </p>
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
            <div className="space-y-10 lg:space-y-12">
              <div className="max-w-3xl space-y-4">
                <p className="eyebrow">{homeTransformationStory.eyebrow}</p>
                <h2 className="font-serif text-3xl leading-tight text-balance text-sand sm:text-4xl lg:text-5xl">
                  {homeTransformationStory.title}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                  {homeTransformationStory.description}
                </p>
              </div>

              <Link
                href={transformationProject.href}
                className="group block overflow-hidden rounded-[38px] border border-line"
              >
                <div className="relative aspect-[4/5] min-h-[30rem] sm:aspect-[16/10] lg:aspect-[16/8.6] lg:min-h-[38rem]">
                  <Image
                    src={transformationProject.images.feature.src}
                    alt={transformationProject.images.feature.alt}
                    fill
                    sizes="100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.015]"
                    style={getObjectPositionStyle(transformationProject.images.feature)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/56 via-black/20 to-black/8" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/74 via-black/18 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                    <div className="max-w-xl space-y-3">
                      <p className="text-xs uppercase tracking-[0.26em] text-accent">
                        {homeTransformationStory.resultSectionTitle}
                      </p>
                      <h3 className="font-serif text-3xl text-sand sm:text-4xl">
                        {homeTransformationStory.afterTitle}
                      </h3>
                      <p className="max-w-lg text-sm leading-7 text-sand/82 sm:text-base">
                        {homeTransformationStory.afterText}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-8">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                      {homeTransformationStory.beforeSectionTitle}
                    </p>
                    <h3 className="font-serif text-2xl text-sand sm:text-[2rem]">
                      {homeTransformationStory.beforeTitle}
                    </h3>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-line lg:aspect-[16/11]">
                    <Image
                      src={transformationProject.images.before.src}
                      alt={transformationProject.images.before.alt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                      style={getObjectPositionStyle(transformationProject.images.before)}
                    />
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                    {homeTransformationStory.beforeText}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                      {homeTransformationStory.comparisonTitle}
                    </p>
                    <h3 className="font-serif text-2xl text-sand sm:text-[2rem]">
                      {homeTransformationStory.resultSectionTitle}
                    </h3>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-line lg:aspect-[16/11]">
                    <Image
                      src={transformationProject.images.split.src}
                      alt={transformationProject.images.split.alt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                      style={getObjectPositionStyle(transformationProject.images.split)}
                    />
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                    {homeTransformationStory.processText}
                  </p>
                </div>
              </div>

              <div className="border-t border-line/80 pt-8">
                <div className="grid gap-8 lg:grid-cols-[0.48fr_1fr]">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                      {homeTransformationStory.changesTitle}
                    </p>
                    <h3 className="font-serif text-2xl text-sand sm:text-[2rem]">
                      Cosa rende il risultato più forte.
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {homeTransformationStory.changes.map((change) => (
                      <div
                        key={change.title}
                        className="space-y-3 border-t border-accent/20 pt-4"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-accent">
                          {change.title}
                        </p>
                        <p className="text-sm leading-7 text-sand/82 sm:text-base">
                          {change.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <Link href={transformationProject.href} className="gold-outline-btn">
                  {homeTransformationStory.cta.label}
                </Link>
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
              <div className="relative aspect-[16/10] min-h-[32rem] overflow-hidden rounded-[34px] border border-line">
                <Image
                  src={homeMatterAndLight.images[0].src}
                  alt={homeMatterAndLight.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  style={getObjectPositionStyle(homeMatterAndLight.images[0])}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent" />
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={80}>
                <div className="relative aspect-[5/4] min-h-[15rem] overflow-hidden rounded-[30px] border border-line">
                  <Image
                    src={homeMatterAndLight.images[1].src}
                    alt={homeMatterAndLight.images[1].alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                    style={getObjectPositionStyle(homeMatterAndLight.images[1])}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="relative aspect-[4/5] min-h-[15rem] overflow-hidden rounded-[28px] border border-line">
                  <Image
                    src={homeMatterAndLight.images[2].src}
                    alt={homeMatterAndLight.images[2].alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                    style={getObjectPositionStyle(homeMatterAndLight.images[2])}
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
            <div className="editorial-light-panel">
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

                <div className="relative min-h-[22rem] border-t border-black/10 lg:min-h-full lg:border-l lg:border-t-0">
                  <Image
                    src={homeFounder.image.src}
                    alt={homeFounder.image.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                    style={getObjectPositionStyle(homeFounder.image)}
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
    </div>
  );
}
