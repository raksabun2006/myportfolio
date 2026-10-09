import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, Code2, ShieldCheck, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-[#00d9ff] selection:text-[#07090e] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Cyber Grid */}
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

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span>HTTP 404 · ENDPOINT UNRESOLVED</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-slate-900 dark:text-white font-mono mb-4">
          4<span className="text-[#00a6f4] dark:text-[#00d9ff]">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-zinc-200 mb-3">
          Route Not Found in Architecture
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed mb-8">
          The requested system node or document does not exist, has been migrated, or is temporarily unavailable.
        </p>

        {/* Quick Navigation Gateways */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017] text-xs font-mono font-medium hover:border-[#00a6f4] dark:hover:border-[#00d9ff] transition-all hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff]" />
            <span>Home</span>
          </Link>

          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017] text-xs font-mono font-medium hover:border-[#00a6f4] dark:hover:border-[#00d9ff] transition-all hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff]" />
            <span>Projects</span>
          </Link>

          <Link
            href="/credentials"
            className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017] text-xs font-mono font-medium hover:border-[#00a6f4] dark:hover:border-[#00d9ff] transition-all hover:-translate-y-0.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Credentials</span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017] text-xs font-mono font-medium hover:border-[#00a6f4] dark:hover:border-[#00d9ff] transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-amber-500" />
            <span>Contact</span>
          </Link>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00a6f4] dark:text-[#00d9ff] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage (bunraksa.site)</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
