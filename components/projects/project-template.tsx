import type { ProjectPageSection, ProjectPageTemplate } from "@/content/projects";
import { Reveal } from "@/components/reveal";

import {
  ProjectBeforeAfter,
  ProjectEditorialSection,
  ProjectFinalCta,
  ProjectFocusBlock,
  ProjectFullWidthMedia,
  ProjectGallery,
  ProjectRenderSequence,
  ProjectOutcomeSection
} from "./project-sections";
import {
  ProjectImmersiveHero,
  ProjectIntroductionPanel,
  ProjectNarrativeOverview,
  ProjectNavigation,
  ProjectSummaryCard
} from "./project-shell";

type ProjectTemplateProps = {
  project: ProjectPageTemplate;
  previousProject: ProjectPageTemplate | null;
  nextProject: ProjectPageTemplate | null;
};

const renderableSections = (sections: ProjectPageSection[]) =>
  sections.filter((section) => {
    switch (section.type) {
      case "editorial":
        return section.paragraphs.length > 0;
      case "full-width-media":
        return Boolean(section.image?.src);
      case "focus":
        return section.items.length > 0;
      case "gallery":
        return section.images.length > 0;
      case "render-sequence":
        return section.items.length > 0;
      case "before-after":
        return Boolean(section.before?.src && section.after?.src);
      case "outcome":
        return section.paragraphs.length > 0;
      default:
        return false;
    }
  });

const buildNarrativeEntries = (project: ProjectPageTemplate) => {
  const narrative = project.narrative;

  if (!narrative) {
    return [];
  }

  return [
    narrative.introduction?.length
      ? { label: "Introduzione", paragraphs: narrative.introduction }
      : null,
    narrative.startingPoint?.length
      ? { label: "Punto di partenza", paragraphs: narrative.startingPoint }
      : null,
    narrative.objective?.length
      ? { label: "Obiettivo", paragraphs: narrative.objective }
      : null,
    narrative.designDirection?.length
      ? { label: "Direzione progettuale", paragraphs: narrative.designDirection }
      : null
  ].filter(Boolean) as Array<{
    label: string;
    paragraphs: string[];
  }>;
};

function ProjectSectionRenderer({ section }: { section: ProjectPageSection }) {
  switch (section.type) {
    case "editorial":
      return <ProjectEditorialSection {...section} />;
    case "full-width-media":
      return <ProjectFullWidthMedia {...section} />;
    case "focus":
      return <ProjectFocusBlock {...section} />;
    case "gallery":
      return <ProjectGallery {...section} />;
    case "render-sequence":
      return <ProjectRenderSequence {...section} />;
    case "before-after":
      return <ProjectBeforeAfter {...section} />;
    case "outcome":
      return <ProjectOutcomeSection {...section} />;
    default:
      return null;
  }
}

export function ProjectTemplate({
  project,
  previousProject,
  nextProject
}: ProjectTemplateProps) {
  const sections = renderableSections(project.sections);
  const allNarrativeEntries = buildNarrativeEntries(project);
  const usesAnchoredIntroductionPanel =
    project.overviewLayout === "anchored-introduction-panel";
  const introductionEntry = usesAnchoredIntroductionPanel
    ? allNarrativeEntries.find((entry) => entry.label === "Introduzione") ?? null
    : null;
  const narrativeEntries = usesAnchoredIntroductionPanel
    ? allNarrativeEntries.filter((entry) => entry.label !== "Introduzione")
    : allNarrativeEntries;
  const overviewSectionClass = project.compactOverview
    ? "section-space pt-8 sm:pt-10"
    : "section-space pt-10";
  const overviewGridClass = project.compactOverview
    ? "mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.82fr_1.18fr]"
    : "mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.82fr_1.18fr]";

  return (
    <div className="pb-16">
      <ProjectImmersiveHero
        stageBadge={project.stageBadge}
        hero={project.hero}
        facts={project.summaryCard?.items ?? []}
      />

      {project.summaryCard || introductionEntry || narrativeEntries.length ? (
        <section className={overviewSectionClass}>
          {usesAnchoredIntroductionPanel ? (
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-x-8">
                {project.summaryCard ? (
                  <Reveal>
                    <div className="relative z-10 max-w-[37rem]">
                      <ProjectSummaryCard summaryCard={project.summaryCard} />
                    </div>
                  </Reveal>
                ) : null}

                <div className="hidden lg:block" />

                {introductionEntry ? (
                  <Reveal delay={70}>
                    <div
                      className={`${
                        project.summaryCard
                          ? "lg:col-span-2 lg:-mt-10 lg:pl-[14%]"
                          : "lg:col-span-2"
                      }`}
                    >
                      <ProjectIntroductionPanel entry={introductionEntry} />
                    </div>
                  </Reveal>
                ) : null}

                {narrativeEntries.length ? (
                  <Reveal delay={110}>
                    <div
                      className={`${
                        project.summaryCard || introductionEntry
                          ? "lg:col-span-2 lg:pl-[14%]"
                          : "lg:col-span-2"
                      }`}
                    >
                      <ProjectNarrativeOverview entries={narrativeEntries} />
                    </div>
                  </Reveal>
                ) : null}
              </div>
            </div>
          ) : (
            <div className={overviewGridClass}>
              {project.summaryCard ? (
                <Reveal>
                  <ProjectSummaryCard summaryCard={project.summaryCard} />
                </Reveal>
              ) : null}

              {narrativeEntries.length ? (
                <Reveal delay={70}>
                  <ProjectNarrativeOverview entries={narrativeEntries} />
                </Reveal>
              ) : null}
            </div>
          )}
        </section>
      ) : null}

      {sections.length ? (
        <section className="section-space pt-0">
          <div className="mx-auto max-w-7xl space-y-20 px-6 sm:space-y-24">
            {sections.map((section, index) => (
              <Reveal key={section.id} delay={index * 60}>
                <ProjectSectionRenderer section={section} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {project.finalCta ? (
        <section className="section-space pt-4">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <ProjectFinalCta {...project.finalCta} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <ProjectNavigation
              previousProject={previousProject}
              nextProject={nextProject}
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
