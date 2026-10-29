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
    <div className="site-shell selection:bg-blue-600 selection:text-white overflow-x-hidden">
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
