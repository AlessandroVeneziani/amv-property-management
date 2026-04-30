"use client";

import { useState } from "react";

import type { Project, ProjectStatus } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

type ProjectExplorerProps = {
  projects: Project[];
  cities: string[];
  statuses: ProjectStatus[];
};

export function ProjectExplorer({
  projects,
  cities,
  statuses
}: ProjectExplorerProps) {
  const [selectedCity, setSelectedCity] = useState<string>("Tutte");
  const [selectedStatus, setSelectedStatus] = useState<string>("Tutti");

  const filteredProjects = projects.filter((project) => {
    const cityMatches = selectedCity === "Tutte" || project.city === selectedCity;
    const statusMatches =
      selectedStatus === "Tutti" || project.status === selectedStatus;

    return cityMatches && statusMatches;
  });

  return (
    <div className="space-y-10">
      <div className="grid gap-8 rounded-[30px] border border-line bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Filtri</p>
            <h2 className="mt-3 font-serif text-2xl text-sand">Selezione attiva</h2>
          </div>
          <p className="text-sm leading-6 text-muted">
            Una lettura per città e stato del progetto. Nessun rumore, solo gli
            immobili che restano coerenti con la visione AVM.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Città</p>
              <div className="flex flex-wrap gap-2">
                {["Tutte", ...cities].map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedCity === city
                        ? "border-accent bg-accent/10 text-sand"
                        : "border-line text-muted hover:border-accent/40 hover:text-sand"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Stato</p>
              <div className="flex flex-wrap gap-2">
                {["Tutti", ...statuses].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedStatus === status
                        ? "border-accent bg-accent/10 text-sand"
                        : "border-line text-muted hover:border-accent/40 hover:text-sand"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted">
            {filteredProjects.length} progetti visualizzati su {projects.length}.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <div key={project.slug} className={index % 3 === 0 ? "lg:col-span-2" : ""}>
            <ProjectCard project={project} tall={index % 3 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
