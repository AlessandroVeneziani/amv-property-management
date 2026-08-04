import Link from "next/link";

import type { ProjectPageFact, ProjectPageTemplate } from "@/content/projects";
import { SectionHeading } from "@/components/section-heading";

import { ProjectResponsiveImage } from "./project-responsive-image";

type ProjectImmersiveHeroProps = {
  stageBadge?: ProjectPageTemplate["stageBadge"];
  hero: ProjectPageTemplate["hero"];
  facts?: ProjectPageFact[];
};

type NarrativeEntry = {
  label: string;
  paragraphs: string[];
};

type ProjectSummaryCardProps = {
  summaryCard: NonNullable<ProjectPageTemplate["summaryCard"]>;
};

type ProjectNarrativeOverviewProps = {
  entries: NarrativeEntry[];
};

type ProjectNavigationProps = {
  previousProject: ProjectPageTemplate | null;
  nextProject: ProjectPageTemplate | null;
};

export function ProjectImmersiveHero({
  stageBadge,
  hero,
  facts = []
}: ProjectImmersiveHeroProps) {
  const isPhotographicHero = hero.variant === "photographic";

  return (
    <section
      className={`overflow-hidden ${
        isPhotographicHero
          ? "border-b border-line/70 pb-10 pt-3 sm:pb-12 sm:pt-4"
          : "border-y border-line/70 pb-12 pt-2 sm:pb-14 sm:pt-3"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          isPhotographicHero
            ? "mx-auto min-h-[58vh] max-w-7xl rounded-[34px] border border-line/80 shadow-glow sm:min-h-[64vh] lg:min-h-[72vh]"
            : "min-h-[66vh] sm:min-h-[72vh] lg:min-h-[82vh]"
        }`}
      >
        {hero.image ? (
          <ProjectResponsiveImage
            image={hero.image}
            priority
            sizes="100vw"
            className={isPhotographicHero ? "object-cover brightness-[1.06]" : "object-cover"}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,167,94,0.18),transparent_28%),linear-gradient(180deg,rgba(15,14,12,0.98),rgba(15,14,12,0.92))]" />
        )}

        <div
          className={`absolute inset-0 ${
            isPhotographicHero
              ? "bg-[linear-gradient(90deg,rgba(10,10,10,0.48)_0%,rgba(10,10,10,0.36)_30%,rgba(10,10,10,0.18)_58%,rgba(10,10,10,0.08)_100%)]"
              : "bg-[linear-gradient(90deg,rgba(10,10,10,0.82)_0%,rgba(10,10,10,0.72)_32%,rgba(10,10,10,0.34)_62%,rgba(10,10,10,0.14)_100%)]"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isPhotographicHero
              ? "bg-[linear-gradient(180deg,rgba(10,10,10,0.16)_0%,rgba(10,10,10,0.22)_52%,rgba(10,10,10,0.46)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.22)_44%,rgba(10,10,10,0.64)_100%)]"
          }`}
        />

        <div
          className={`relative mx-auto flex items-end px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 ${
            isPhotographicHero
              ? "min-h-[58vh] sm:min-h-[64vh] lg:min-h-[72vh]"
              : "min-h-[66vh] sm:min-h-[72vh] lg:min-h-[82vh]"
          }`}
        >
          <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-[42rem] space-y-5 sm:space-y-6">
              {stageBadge ? (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/35 bg-[rgba(53,40,19,0.34)] px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-accent shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-md sm:text-[11px]">
                  <span>{stageBadge.label}</span>
                  {stageBadge.note ? (
                    <>
                      <span className="text-sand/48">·</span>
                      <span className="tracking-[0.18em] text-sand/60">
                        {stageBadge.note}
                      </span>
                    </>
                  ) : null}
                </div>
              ) : null}
              <p className="eyebrow text-sand/88">{hero.eyebrow}</p>
              <h1
                className={`max-w-[16ch] font-serif text-[clamp(3rem,7vw,5.6rem)] leading-[0.96] text-balance text-sand ${
                  hero.titleClassName ?? ""
                }`}
              >
                {hero.title}
              </h1>
              <p
                className={`max-w-2xl text-base leading-7 text-sand/82 sm:text-lg ${
                  hero.descriptionClassName ?? ""
                }`}
              >
                {hero.description}
              </p>
            </div>

            {facts.length ? (
              <div className="grid gap-3 self-end sm:grid-cols-2">
                {facts.slice(0, 4).map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[24px] border border-white/10 bg-black/18 p-4 backdrop-blur-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-sand/54">
                      {fact.label}
                    </p>
                    <p className="mt-2 font-serif text-xl text-sand sm:text-2xl">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectSummaryCard({ summaryCard }: ProjectSummaryCardProps) {
  const isSmokyBronze = summaryCard.variant === "smoky-bronze";

  return (
    <div
      className={`px-6 py-7 sm:px-8 sm:py-9 ${
        isSmokyBronze ? "editorial-dark-panel" : "editorial-light-panel"
      }`}
    >
      <div className="space-y-6">
        <SectionHeading
          eyebrow={summaryCard.eyebrow}
          title={summaryCard.title ?? "Scheda sintetica"}
          titleClassName={summaryCard.titleClassName}
        />

        <div
          className={`grid gap-5 text-sm sm:grid-cols-2 ${
            isSmokyBronze ? "text-sand/82" : "text-ink/78"
          }`}
        >
          {summaryCard.items.map((item) => (
            <div
              key={item.label}
              className={`space-y-2 pt-4 ${
                isSmokyBronze ? "border-t border-white/10" : "border-t border-black/10"
              }`}
            >
              <p
                className={`text-[11px] uppercase tracking-[0.22em] ${
                  isSmokyBronze ? "text-[#c8a160]" : "text-[#8f7430]"
                }`}
              >
                {item.label}
              </p>
              <p
                className={`font-serif text-xl leading-snug ${
                  isSmokyBronze ? "text-[#f3e7d4]" : "text-ink"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectNarrativeOverview({
  entries
}: ProjectNarrativeOverviewProps) {
  return (
    <div className="space-y-7">
      {entries.map((entry, index) => (
        <div
          key={entry.label}
          className={index === 0 ? "space-y-3" : "space-y-3 border-t border-line pt-7"}
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent/92">
            {entry.label}
          </p>
          <div className="space-y-3 text-base leading-7 text-muted sm:text-lg">
            {entry.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectNavigation({
  previousProject,
  nextProject
}: ProjectNavigationProps) {
  if (!previousProject && !nextProject) {
    return null;
  }

  const links = [
    previousProject
      ? {
          project: previousProject,
          label: "Progetto precedente",
          align: "text-left items-start"
        }
      : null,
    nextProject
      ? {
          project: nextProject,
          label: "Progetto successivo",
          align: "text-left lg:text-right lg:items-end"
        }
      : null
  ].filter(Boolean) as Array<{
    project: ProjectPageTemplate;
    label: string;
    align: string;
  }>;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {links.map(({ project, label, align }) => (
        <Link
          key={`${label}-${project.slug}`}
          href={`/progetti/${project.slug}`}
          className={`group flex min-h-[12rem] flex-col justify-between rounded-[30px] border border-line bg-white/[0.03] p-6 shadow-glow transition duration-500 hover:-translate-y-1 hover:border-accent/40 ${align}`}
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent/85">{label}</p>
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sand/55">
              {project.place.toUpperCase()} · {project.category.toUpperCase()}
            </p>
            <h3 className="font-serif text-3xl text-sand">{project.title}</h3>
            <p className="text-sm uppercase tracking-[0.16em] text-sand/72 transition group-hover:text-accent">
              Apri il progetto
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
