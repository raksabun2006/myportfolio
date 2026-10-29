import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Skills from "@/components/Skills";
import LocalizedText from "@/components/LocalizedText";

export const metadata: Metadata = {
  title: "Skills & Technical Stack",
  description:
    "Technical competencies of Bun Raksa: Java 21, Spring Boot, React, Next.js, PostgreSQL, Docker, Redis, REST APIs, and microservices architecture.",
  alternates: {
    canonical: "https://bunraksa.site/skills",
  },
  openGraph: {
    title: "Skills & Technical Stack | Bun Raksa",
    description:
      "Technical competencies of Bun Raksa: Java 21, Spring Boot, React, Next.js, PostgreSQL, Docker, Redis, REST APIs, and microservices architecture.",
    url: "https://bunraksa.site/skills",
  },
};

export default function SkillsPage() {
  return (
    <PageShell mainClassName="pt-24 sm:pt-28 md:pt-32 pb-20 animate-fade-in">
        {/* Page Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            <LocalizedText translationKey="technicalArchitecture" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
            <LocalizedText translationKey="technicalSkills" /> <span className="sr-only">— Java, Spring Boot, React &amp; PostgreSQL Backend Engineering</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            <LocalizedText translationKey="skillsDescription" />
          </p>
        </div>

        <Skills />
    </PageShell>
  );
}
