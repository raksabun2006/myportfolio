import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProjectsClient from "@/components/ProjectsClient";
import { projects } from "@/data/projects";
import LocalizedText from "@/components/LocalizedText";

export const metadata: Metadata = {
  title: "Projects & Software Architecture",
  description:
    "Explore backend and full-stack software engineering projects by Bun Raksa, including Mart System POS, Khmer Service Marketplace, DevSolve, and EduCoreKH with Spring Boot, PostgreSQL, and React.",
  alternates: {
    canonical: "https://bunraksa.site/projects",
  },
  openGraph: {
    title: "Projects & Software Architecture | Bun Raksa",
    description:
      "Explore backend and full-stack software engineering projects by Bun Raksa, including Mart System POS, Khmer Service Marketplace, DevSolve, and EduCoreKH with Spring Boot, PostgreSQL, and React.",
    url: "https://bunraksa.site/projects",
    images: [
      {
        url: "/projects/mart-system.png",
        width: 1200,
        height: 630,
        alt: "Mart System POS & Software Architecture - Bun Raksa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Software Architecture | Bun Raksa",
    description:
      "Explore backend and full-stack software engineering projects by Bun Raksa, including Mart System POS, Khmer Service Marketplace, DevSolve, and EduCoreKH.",
    images: ["/projects/mart-system.png"],
  },
};

export default function ProjectsPage() {
  return (
    <PageShell mainClassName="pt-24 sm:pt-28 md:pt-32 pb-20 animate-fade-in">
        {/* Page Header */}
        <div className="text-center sm:text-left mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            <LocalizedText translationKey="featuredProjects" />
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            <LocalizedText translationKey="featuredProjects" /> <span className="sr-only">— Software Architecture &amp; Full-Stack Systems by Bun Raksa</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            Production-grade systems, distributed microservices, and modern web applications built with Java, Spring Boot, React, and PostgreSQL.
          </p>
        </div>

        <ProjectsClient projects={projects} />
    </PageShell>
  );
}
