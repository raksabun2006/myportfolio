import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProgressPageClient from "@/components/ProgressPageClient";

export const metadata: Metadata = {
  title: "My Progress | Continuous Learning & Technical Growth",
  description:
    "Explore Bun Raksa's continuous learning progress, skill roadmaps in Flutter, Android, and Microservices Architecture, and learning milestones.",
  alternates: {
    canonical: "https://bunraksa.site/progress",
  },
  openGraph: {
    title: "My Progress | Bun Raksa — Software Engineer",
    description:
      "Explore Bun Raksa's continuous learning progress, skill roadmaps in Flutter, Android, and Microservices Architecture, and learning milestones.",
    url: "https://bunraksa.site/progress",
  },
};

export default function ProgressPage() {
  return (
    <PageShell mainClassName="pt-24 sm:pt-28 md:pt-32 pb-20 animate-fade-in">
      <ProgressPageClient />
    </PageShell>
  );
}

