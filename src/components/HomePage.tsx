"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CertificationsPreview from "@/components/CertificationsPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  // Handle initial hash routing (e.g. /en#projects or /en#about)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="site-shell selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full pt-20 sm:pt-24">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Featured Projects */}
        <Projects />

        {/* 4. Technical Skills */}
        <Skills />

        {/* 5. Certifications */}
        <CertificationsPreview />

        {/* 6. Contact */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
