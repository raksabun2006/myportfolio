"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { Layers } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Projects() {
  const { t } = useLocale();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Core 3 featured projects specified in prompt
  const coreProjects = projects.filter((p) => p.featured);
  const displayedProjects = showAll ? projects : coreProjects;

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 block mb-2">
            {t("featuredProjects")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t("projectsTitle")}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            {t("projectsDescription")}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{displayedProjects.length} {t("verifiedKnowledge")}</span>
        </div>
      </div>

      {/* Projects Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            priority={index === 0}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Show more/less toggle if more projects exist */}
      {projects.length > coreProjects.length && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-white/5 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>{showAll ? `${t("showCore")} (3)` : `${t("viewMore")} (+${projects.length - coreProjects.length})`}</span>
          </button>
        </div>
      )}

      {/* Modal Dialog for Architecture Deep Dive */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
