import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact & Engineering Inquiries",
  description:
    "Get in touch with Bun Raksa for Java Spring Boot backend engineering, full-stack development roles, internships, or collaboration in Phnom Penh, Cambodia.",
  alternates: {
    canonical: "https://bunraksa.site/contact",
  },
  openGraph: {
    title: "Contact Bun Raksa | Hire Backend & Full-Stack Developer",
    description:
      "Get in touch with Bun Raksa for Java Spring Boot backend engineering, full-stack development roles, internships, or collaboration in Phnom Penh, Cambodia.",
    url: "https://bunraksa.site/contact",
  },
};

export default function ContactPage() {
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

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 relative z-10 animate-fade-in">
        <Contact isStandalone />
      </main>

      <Footer />
    </div>
  );
}
