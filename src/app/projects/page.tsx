import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsClient from "@/components/ProjectsClient";
import { projects } from "@/data/projects";

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-[#00d9ff] selection:text-[#07090e] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00a6f4 1px, transparent 1px),
              linear-gradient(to bottom, #00a6f4 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[140px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 relative z-10 animate-fade-in">
        {/* Page Header */}
        <div className="text-center sm:text-left mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Selected Works <span className="sr-only">— Software Architecture &amp; Full-Stack Systems by Bun Raksa</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            Production-grade systems, distributed microservices, and modern web applications built with Java, Spring Boot, React, and PostgreSQL.
          </p>
        </div>

        <ProjectsClient projects={projects} />
      </main>

      <Footer />
    </div>
  );
}
