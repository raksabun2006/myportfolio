"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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
      <main className="flex-1 w-full pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Hero Section */}
        <Hero />

        {/* Featured Projects Preview */}
        <Projects />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
