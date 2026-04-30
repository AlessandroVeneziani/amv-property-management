import { PageHero } from "@/components/page-hero";
import { ProjectExplorer } from "@/components/project-explorer";
import { Reveal } from "@/components/reveal";
import { projectCities, projects, projectStatuses } from "@/content/projects";
import { createMetadata } from "@/content/site";

export const metadata = createMetadata({
  title: "Progetti | AMV Asset Direction",
  description:
    "Portfolio di residenze e appartamenti seguiti attraverso gestione, valorizzazione e direzione estetica.",
  path: "/progetti"
});

export default function ProjectsPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Portfolio"
        title="Una selezione di immobili seguiti con una regia precisa."
        description="Ogni progetto riflette un metodo che tiene insieme gestione immobiliare, qualità spaziale e posizionamento. Il filtro non serve a navigare di più, ma a leggere meglio."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Progetti", value: String(projects.length) },
            { label: "Città", value: String(projectCities.length) },
            { label: "Stati", value: String(projectStatuses.length) }
          ].map((item) => (
            <div key={item.label} className="rounded-[24px] border border-line bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.label}</p>
              <p className="mt-2 font-serif text-3xl text-sand">{item.value}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <ProjectExplorer
              projects={projects}
              cities={projectCities}
              statuses={projectStatuses}
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
