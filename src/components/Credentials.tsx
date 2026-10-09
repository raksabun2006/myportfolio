"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { credentialsData } from "@/data/credentials";

export default function Credentials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentCert = credentialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? credentialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === credentialsData.length - 1 ? 0 : prev + 1));
  };

  const handleCopyId = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="credentials"
      className="pt-2 sm:pt-4 pb-12 sm:pb-16 relative selection:bg-[#00d9ff] selection:text-[#07090e]"
    >
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.2em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-1">
              ACHIEVEMENTS
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Verified Credentials &amp; Certifications
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-zinc-400 mt-2">
              {credentialsData.length} certificates · click to view full details
            </p>
          </div>

          {/* Index Counter (e.g. 01 / 04) */}
          <div className="text-sm font-mono text-slate-500 dark:text-zinc-400 shrink-0 select-none pb-1">
            <span className="text-slate-900 dark:text-white font-semibold">0{currentIndex + 1}</span>
            <span className="text-slate-400 dark:text-zinc-600 mx-1">/</span>
            <span>0{credentialsData.length}</span>
          </div>
        </div>

        {/* Featured Credential Horizontal Bento Card */}
        <div
          key={currentCert.id}
          className="relative rounded-3xl bg-white/90 dark:bg-[#0c1017]/95 border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 animate-fade-in"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Certificate Sheet (Links directly to detail page) */}
            <div className="lg:col-span-6 w-full flex items-center justify-center">
              <Link
                href={`/credentials/${currentCert.id}`}
                className="group/sheet relative w-full aspect-[1.414/1] max-w-lg bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/20 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:border-cyan-400/50 hover:shadow-[0_16px_40px_rgba(0,217,255,0.18)] block"
                title={`View ${currentCert.title} Details`}
              >
                {/* Certificate Inner Image */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200/80">
                  <Image
                    src={currentCert.image}
                    alt={currentCert.title}
                    fill
                    unoptimized
                    priority
                    className="object-contain object-center transition-transform duration-500 group-hover/sheet:scale-[1.03]"
                  />
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover/sheet:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-2xl">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 font-mono text-xs font-bold shadow-xl">
                    <span>View Page Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-500" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Column: Detailed Credential Information */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentCert.tags.slice(0, 5).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1 rounded-full text-xs font-sans text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {currentCert.tags.length > 5 && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-500 dark:text-zinc-400 bg-slate-100/60 dark:bg-white/5">
                      +{currentCert.tags.length - 5} more
                    </span>
                  )}
                </div>

                {/* Title (Clickable link to detail page) */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-3 font-sans">
                  <Link
                    href={`/credentials/${currentCert.id}`}
                    className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    {currentCert.title}
                  </Link>
                </h3>

                {/* Issuer & Date */}
                <div className="text-sm sm:text-base font-normal mb-5 flex flex-wrap items-center gap-1.5">
                  <span className={`italic font-medium ${currentCert.issuerHighlightColor}`}>
                    {currentCert.issuerHighlight}
                  </span>
                  <span className="text-slate-400 dark:text-zinc-500 mx-1">—</span>
                  <span className="text-slate-500 dark:text-zinc-400 font-mono text-sm">
                    {currentCert.issueDate}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-slate-600 dark:text-zinc-300 leading-relaxed mb-8">
                  {currentCert.description}
                </p>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Credential ID with Copy Action */}
                {currentCert.credentialId ? (
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-zinc-400">
                    <Shield className="w-4 h-4 text-slate-500 dark:text-zinc-500 shrink-0" />
                    <span className="truncate max-w-[200px] select-all text-slate-800 dark:text-zinc-300">
                      {currentCert.credentialId}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyId(currentCert.credentialId!)}
                      title="Copy Credential ID"
                      className="p-1 rounded hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === currentCert.credentialId ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-zinc-400">
                    <Shield className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>Verified Academic Credential</span>
                  </div>
                )}

                {/* Primary CTA: View Page Detail */}
                <Link
                  href={`/credentials/${currentCert.id}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-2xs cursor-pointer shrink-0"
                >
                  <span>View Page Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Navigation Controls */}
        <div className="flex items-center justify-between mt-6 px-1">
          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {credentialsData.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to certificate ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-8 bg-[#00a6f4] dark:bg-[#00d9ff] shadow-[0_0_10px_#00d9ff]"
                    : "w-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous certificate"
              className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm dark:shadow-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next certificate"
              className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm dark:shadow-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Compact Quick Switcher Strip below main card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {credentialsData.map((cert, index) => {
            const isSelected = currentIndex === index;
            return (
              <button
                key={cert.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-cyan-500/50 bg-white dark:bg-[#0c1017] shadow-sm dark:shadow-md ring-1 ring-cyan-500/30"
                    : "border-slate-200/80 dark:border-white/8 bg-slate-50/60 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1 text-slate-400 dark:text-zinc-500">
                  <span>0{index + 1}</span>
                  <span className="uppercase text-[9px] px-1.5 py-0.2 rounded bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-zinc-300">
                    {cert.category}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white truncate group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors">
                  {cert.title}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate mt-0.5 font-sans">
                  {cert.issuerHighlight}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
