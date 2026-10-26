import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full pt-20 sm:pt-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
