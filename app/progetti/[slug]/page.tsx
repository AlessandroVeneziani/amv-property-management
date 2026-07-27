import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectTemplate } from "@/components/projects/project-template";
import {
  getProjectPageBySlug,
  getProjectPageNavigation,
  publishedProjectPages
} from "@/content/projects";
import { createMetadata } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return publishedProjectPages.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectPageBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Progetto non trovato | AVM Asset Direction",
      description: "Il progetto richiesto non è disponibile.",
      path: "/progetti"
    });
  }

  return createMetadata({
    title: `${project.title} | AVM Asset Direction`,
    description: project.description,
    path: `/progetti/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectPageBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getProjectPageNavigation(slug);

  return (
    <ProjectTemplate
      project={project}
      previousProject={previous}
      nextProject={next}
    />
  );
}
