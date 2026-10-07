"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSphere from "@/components/TechSphere";
import Skills from "@/components/Skills";

export default function SkillsPage() {
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
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[150px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative z-10 animate-fade-in">
        <Skills />
      </main>

      <Footer />
    </div>
  );
}
