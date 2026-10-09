import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-[#00d9ff] selection:text-[#07090e] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Cyber Blueprint Grid */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00a6f4 1px, transparent 1px),
              linear-gradient(to bottom, #00a6f4 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[150px]" />
        <div className="absolute top-[35%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/[0.04] dark:bg-[#a78bfa]/[0.03] blur-[150px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 relative z-10 animate-fade-in">
        {/* Page Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            TECHNICAL ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
            Skills &amp; Technologies <span className="sr-only">— Java, Spring Boot, React &amp; PostgreSQL Backend Engineering</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            Production-tested backend systems, distributed architectures, resilient relational schemas, and modern full-stack development tooling.
          </p>
        </div>

        <Skills />
      </main>

      <Footer />
    </div>
  );
}
