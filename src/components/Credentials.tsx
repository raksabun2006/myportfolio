"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Shield,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Copy,
  Check,
  Eye,
  X,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { credentialsData, CredentialItem } from "@/data/credentials";

export default function Credentials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <section
      id="credentials"
      className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative selection:bg-[#00d9ff] selection:text-[#07090e]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header (Matching ayushcmd.me) */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.2em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-1">
              ACHIEVEMENTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              My Credentials
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-zinc-400 mt-2">
              {credentialsData.length} certificates · scroll to explore
            </p>
          </div>

          {/* Index Counter (e.g. 01 / 04) */}
          <div className="text-sm font-mono text-slate-500 dark:text-zinc-400 shrink-0 select-none pb-1">
            <span className="text-slate-900 dark:text-white font-semibold">0{currentIndex + 1}</span>
            <span className="text-slate-400 dark:text-zinc-600 mx-1">/</span>
            <span>0{credentialsData.length}</span>
          </div>
        </div>

        {/* Featured Credential Horizontal Bento Card (Supports Dark & Light Mode) */}
        <div
          key={currentCert.id}
          className="relative rounded-3xl bg-white/90 dark:bg-[#0c1017]/95 border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 animate-fade-in"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Realistic Certificate Sheet Presentation */}
            <div className="lg:col-span-6 w-full flex items-center justify-center">
              <div
                onClick={() => setIsModalOpen(true)}
                className="group/sheet relative w-full aspect-[1.414/1] max-w-lg bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/20 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_16px_40px_rgba(0,217,255,0.18)]"
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

                {/* Hover Quick Zoom Overlay */}
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] opacity-0 group-hover/sheet:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-2xl">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 font-mono text-xs font-bold shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-[#00a6f4] dark:text-[#00d9ff]" />
                    <span>Click to Expand</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Credential Information */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentCert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1 rounded-full text-xs font-sans text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-3 font-sans">
                  {currentCert.title}
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

              {/* Bottom Action & Verification Bar */}
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

                {/* Green/Cyan Rounded-Full Verify Certificate CTA Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium transition-all shadow-[0_0_16px_rgba(16,185,129,0.12)] hover:shadow-[0_0_24px_rgba(16,185,129,0.25)] shrink-0 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Navigation Controls (High Contrast for Both Themes) */}
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

        {/* Mini Preview Strip (Clickable thumbnails to quickly switch with high contrast) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
          {credentialsData.map((cert, index) => {
            const isSelected = currentIndex === index;
            return (
              <button
                key={cert.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`group p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-[#00a6f4] dark:border-[#00d9ff]/50 bg-[#00a6f4]/10 dark:bg-[#00d9ff]/10 shadow-md dark:shadow-[0_0_20px_rgba(0,217,255,0.12)]"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/20 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 text-[10px] font-mono">
                  <span className="text-slate-400 dark:text-zinc-500 font-bold">0{index + 1}</span>
                  <span className={isSelected ? "text-[#00a6f4] dark:text-[#00d9ff] font-semibold" : "text-slate-500 dark:text-zinc-400"}>
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

      {/* Fullscreen Certificate Inspection Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0c1018] shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.75), 0 0 50px rgba(0, 217, 255, 0.15)",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#07090e]/80">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {currentCert.title}
                </h4>
                <p className="text-xs font-mono text-slate-500 dark:text-zinc-400 mt-0.5">
                  {currentCert.issuerName}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={currentCert.pdfUrl || currentCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#00a6f4] dark:hover:border-[#00d9ff]/40 text-xs font-mono text-slate-800 dark:text-zinc-200 transition-colors"
                >
                  <span>Open Full PDF / Image</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00a6f4] dark:text-[#00d9ff]" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewer */}
            <div className="relative flex-1 p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-100 dark:bg-black/70 min-h-[360px]">
              <div className="relative w-full max-w-3xl aspect-[1.414/1] rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-white">
                <Image
                  src={currentCert.image}
                  alt={currentCert.title}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#07090e]/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span className="text-slate-800 dark:text-zinc-200">Official Authenticated Record</span>
                <span className="text-slate-400 dark:text-zinc-600">•</span>
                <span>{currentCert.issueDate}</span>
              </div>

              {currentCert.credentialId && (
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-zinc-400">ID:</span>
                  <span className="text-slate-800 dark:text-zinc-200 select-all font-mono">
                    {currentCert.credentialId}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
