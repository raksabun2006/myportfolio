import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans selection:bg-zinc-950 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 01. Hero Section with Interactive System Terminal & Metrics */}
        <Hero />

        {/* 02. Engineering Stack & Core Tooling */}
        <Skills />

        {/* 03. Featured Projects (Mart System, DevSolve, Khmer Service Marketplace) */}
        <Projects />

        {/* 04. Engineering Philosophy & About Me */}
        <About />

        {/* 05. Education & Experience Timeline (ISTAD & RUPP) */}
        <Experience />

        {/* 06. GitHub & Open Source Activity */}
        <GitHubSection />

        {/* 07. Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
