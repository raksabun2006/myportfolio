"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";

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

      <main className="flex-1 w-full pt-16 sm:pt-20 relative z-10 animate-fade-in">
        <Credentials />
      </main>

      <Footer />
    </div>
  );
}
