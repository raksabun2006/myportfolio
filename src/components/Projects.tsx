"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { ArrowRight, Layers, Check } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                03 / Featured Engineering Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
                Featured Projects & Systems
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mt-2 leading-relaxed">
                Production-grade retail systems, collaborative cybersecurity platforms, and service
                marketplaces built with Java, Spring Boot, React, and relational persistence.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400">
                {displayedProjects.length} of {projects.length} systems
              </span>
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold text-zinc-900 transition-colors cursor-pointer"
              >
                {showAll ? "Show Featured Only" : "View All Projects"}
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Project Grid: Responsive 1-col on mobile, 2-col or large layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
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

        {/* View All Projects Action Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-zinc-950">
              Want to inspect complete architecture blueprints?
            </h4>
            <p className="text-xs text-zinc-600 mt-1">
              Every project includes interactive component nodes, API specifications, and database schema notes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedProject(displayedProjects[0])}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer shadow-xs"
            >
              <span>Explore Mart System Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
