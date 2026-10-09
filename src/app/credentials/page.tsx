import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";

export const metadata: Metadata = {
  title: "Verified Credentials & Certifications",
  description:
    "Official software engineering and networking certifications earned by Bun Raksa from ISTAD, Cisco Networking Academy, and ETEC Center.",
  alternates: {
    canonical: "https://bunraksa.site/credentials",
  },
  openGraph: {
    title: "Verified Credentials & Certifications | Bun Raksa",
    description:
      "Official software engineering and networking certifications earned by Bun Raksa from ISTAD, Cisco Networking Academy, and ETEC Center.",
    url: "https://bunraksa.site/credentials",
  },
};

export default function CredentialsPage() {
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
        <div className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[140px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 relative z-10 animate-fade-in">
        <Credentials />
      </main>

      <Footer />
    </div>
  );
}
