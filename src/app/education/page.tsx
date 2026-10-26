import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education & Academic Background",
  description:
    "Explore Bun Raksa's academic background at the Royal University of Phnom Penh and technical training at ISTAD.",
  alternates: {
    canonical: "https://bunraksa.site/education",
  },
  openGraph: {
    title: "Education & Academic Background | Bun Raksa",
    description:
      "Explore Bun Raksa's academic background at the Royal University of Phnom Penh and technical training at ISTAD.",
    url: "https://bunraksa.site/education",
  },
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-[#00d9ff] selection:text-[#07090e] relative overflow-x-hidden transition-colors duration-300">
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
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[140px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 relative z-10 animate-fade-in">
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            ACADEMIC BACKGROUND
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
            Education &amp; Milestones
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            The academic foundation and practical training behind my software engineering work.
          </p>
        </div>

        <Education />
      </main>

      <Footer />
    </div>
  );
}
