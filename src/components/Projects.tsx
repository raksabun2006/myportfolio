"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Projects() {
  const { t, locale } = useLocale();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const coreProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/80 px-4 py-12 dark:border-white/10 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Section Header */}
      <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 block mb-2">
            {t("featuredProjects")}
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {t("projectsTitle")}
          </h2>
          <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
            {t("projectsDescription")}
          </p>
        </div>

        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 sm:self-auto"
        >
          {t("viewAllProjects")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Projects Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
      <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {coreProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            priority={index === 0}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Modal Dialog for Architecture Deep Dive */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
