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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24">
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
