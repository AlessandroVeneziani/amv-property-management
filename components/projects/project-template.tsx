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
  const narrativeEntries = buildNarrativeEntries(project);

  return (
    <div className="pb-16">
      <ProjectImmersiveHero
        stageBadge={project.stageBadge}
        hero={project.hero}
        facts={project.summaryCard?.items ?? []}
      />

      {project.summaryCard || narrativeEntries.length ? (
        <section className="section-space pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.82fr_1.18fr]">
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
