import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bun Raksa | Full-Stack Developer",
  description:
    "Explore Bun Raksa's developer portfolio featuring full-stack web applications, React, Spring Boot, REST APIs, and PostgreSQL projects.",
  alternates: {
    canonical: "https://bunraksa.site",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 dark:bg-[#090d16] dark:text-zinc-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden transition-colors duration-200">
      {/* Subtle Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)
            `,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Very subtle ambient gradient top center */}
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-blue-500/[0.04] dark:bg-blue-400/[0.03] blur-[140px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full relative z-10 pt-20 sm:pt-24 space-y-4">
        {/* 01. Hero Section */}
        <Hero />

        {/* 02. About Me */}
        <About />

        {/* 03. Featured Projects */}
        <Projects />

        {/* 04. Technical Skills */}
        <Skills />

        {/* 05. Education */}
        <Education />

        {/* 06. Verified Certifications */}
        <Credentials />

        {/* 07. Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
