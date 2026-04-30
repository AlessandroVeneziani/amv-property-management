import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  tall?: boolean;
};

export function ProjectCard({ project, tall = false }: ProjectCardProps) {
  return (
    <Link
      href={`/progetti/${project.slug}`}
      className="group block h-full overflow-hidden rounded-[28px] border border-line bg-white/[0.03] shadow-glow transition duration-500 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className={`relative ${tall ? "min-h-[26rem]" : "min-h-[22rem]"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={tall ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 32vw, 100vw"}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted">
            <span>{project.city}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>{project.status}</span>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-sand">{project.title}</h3>
            {project.valueStory ? (
              <div className="max-w-xl space-y-1 text-sm leading-5 text-sand/75">
                <p>
                  <span className="text-sand">Prima:</span> {project.valueStory.before}
                </p>
                <p>
                  <span className="text-sand">Dopo:</span> {project.valueStory.after}
                </p>
                <p>
                  <span className="text-sand">Valore:</span> {project.valueStory.value}
                </p>
              </div>
            ) : (
              <p className="max-w-xl text-sm leading-6 text-sand/75">{project.summary}</p>
            )}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent transition group-hover:gap-3">
            Vai al progetto
            <span aria-hidden="true">+</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
