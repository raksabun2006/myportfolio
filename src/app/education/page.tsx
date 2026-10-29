import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Education from "@/components/Education";
import LocalizedText from "@/components/LocalizedText";

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
    <PageShell mainClassName="pt-24 sm:pt-28 md:pt-32 pb-20 animate-fade-in">
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            <LocalizedText translationKey="academicTraining" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
            <LocalizedText translationKey="educationMilestones" />
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            <LocalizedText translationKey="educationDescription" />
          </p>
        </div>

        <Education />
    </PageShell>
  );
}
