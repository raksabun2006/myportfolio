"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  X,
  Maximize2,
  FileText,
  ArrowRight,
} from "lucide-react";
import { credentialsData, CredentialItem } from "@/data/credentials";
import { useLocale } from "@/context/LocaleContext";

export default function Credentials() {
  const { t } = useLocale();
  const [selectedCert, setSelectedCert] = useState<CredentialItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 block mb-2">
            {t("certificates")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t("verifiedCertifications")}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            {t("credentialsDescription")}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{credentialsData.length} {t("certificates")}</span>
        </div>
      </div>

      {/* 4 Certificates Grid (1 col on mobile, 2 col on tablet/desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch">
        {credentialsData.map((cert) => (
          <article
            key={cert.id}
            className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c121e] overflow-hidden shadow-2xs hover:shadow-md hover:border-zinc-300 dark:hover:border-white/25 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Certificate Image Frame */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative w-full aspect-[1.414/1] bg-zinc-100 dark:bg-zinc-900 overflow-hidden cursor-pointer border-b border-zinc-200/80 dark:border-white/10 group/img"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2.5 sm:p-3 transition-transform duration-300 group-hover/img:scale-[1.02]"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-medium backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to Expand</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border border-zinc-200/90 dark:border-white/15 text-[10px] font-mono font-semibold text-blue-600 dark:text-blue-400 shadow-2xs">
                  {cert.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6">
                {/* Issuer & Authority */}
                <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                  <span className="truncate">{cert.issuerHighlight}</span>
                </div>

                <h3
                  onClick={() => setSelectedCert(cert)}
                  className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer leading-snug"
                >
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {cert.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono border border-zinc-200/80 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {cert.tags.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-zinc-500">
                      +{cert.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* Credential ID / Date Row */}
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{t("issued")}: {cert.issueDate}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5">
                      <span className="truncate max-w-[130px] sm:max-w-[160px] text-[11px]">
                        {t("credentialId")}: {cert.credentialId}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleCopyId(e, cert.credentialId!)}
                        className="p-1 rounded hover:bg-zinc-200/70 dark:hover:bg-white/10 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                        title="Copy Credential ID"
                      >
                        {copiedId === cert.credentialId ? (
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-5 sm:px-6 py-3.5 bg-zinc-50/70 dark:bg-white/[0.02] border-t border-zinc-100 dark:border-white/8 flex items-center justify-between gap-3 text-xs">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{t("inspectCertificate")}</span>
              </button>

              <div className="flex items-center gap-2">
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </a>
                )}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t("verifyCredential")}</span>
                  </a>
                )}
                <Link
                  href={`/credentials/${cert.id}`}
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  <span>{t("syllabus")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-[#0c121e] rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between bg-zinc-50 dark:bg-white/[0.02]">
              <div>
                <span className="text-[11px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold block">
                  {selectedCert.authority}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white leading-tight">
                  {selectedCert.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={t("closeCertificate")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image Preview */}
            <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center">
              <div className="relative w-full aspect-[1.414/1] max-w-3xl rounded-xl overflow-hidden border border-zinc-200 dark:border-white/15 shadow-md bg-zinc-50 dark:bg-zinc-900">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Description & Metadata below image */}
              <div className="w-full max-w-3xl mt-5 space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                <p className="leading-relaxed">{selectedCert.description}</p>

                {/* Highlights List */}
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 space-y-1.5">
                  <span className="font-semibold text-zinc-900 dark:text-white block font-mono text-xs">
                    {t("curriculumHighlights")}:
                  </span>
                  {selectedCert.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02] flex items-center justify-between">
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t("openRawImage")}</span>
              </a>

              <Link
                href={`/credentials/${selectedCert.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all"
              >
                <span>{t("viewFullCredential")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
