import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsPreview from "@/components/SkillsPreview";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="site-shell selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full pt-20 sm:pt-24">
        <Hero />
        <Projects />
        <SkillsPreview />
      </main>
      <Footer />
    </div>
  );
}
