"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Award,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Download,
  Building2,
  Clock,
  Code2,
} from "lucide-react";
import { CredentialItem } from "@/data/credentials";

interface CredentialDetailClientProps {
  credential: CredentialItem;
  prevCredential?: CredentialItem;
  nextCredential?: CredentialItem;
}

export default function CredentialDetailClient({
  credential,
  prevCredential,
  nextCredential,
}: CredentialDetailClientProps) {
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyId = () => {
    if (!credential.credentialId) return;
    navigator.clipboard.writeText(credential.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="space-y-12 animate-fade-in">
      {/* 01. Breadcrumb & Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-300 dark:text-zinc-600">/</span>
          <Link href="/credentials" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Credentials
          </Link>
          <span className="text-slate-300 dark:text-zinc-600">/</span>
          <span className="text-slate-900 dark:text-zinc-200 truncate max-w-[200px] sm:max-w-xs font-semibold">
            {credential.title}
          </span>
        </div>

        <Link
          href="/credentials"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors w-fit group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Credentials</span>
        </Link>
      </div>

      {/* 02. Header Section */}
      <div className="space-y-4">
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active &amp; Verified Credential</span>
          </span>

          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10">
            {credential.category}
          </span>

          <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-500 dark:text-zinc-400 bg-slate-100/60 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5">
            {credential.credentialType}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-[1.1]">
          {credential.title}
        </h1>

        {/* Subtitle & Metadata Row */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-600 dark:text-zinc-400 pt-1">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
            <span className="font-medium text-slate-800 dark:text-zinc-200">
              {credential.issuerName}
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-zinc-400">
            <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 shrink-0" />
            <span>Issued: {credential.issueDate}</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 shrink-0" />
            <span>{credential.duration}</span>
          </div>
        </div>
      </div>

      {/* 03. Main Presentation Grid: Certificate Sheet & Verification Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: High-Resolution Certificate Presentation */}
        <div className="lg:col-span-7 space-y-4">
          <a
            href={credential.pdfUrl || credential.verifyUrl || credential.image}
            target="_blank"
            rel="noopener noreferrer"
            className="group/sheet relative w-full aspect-[1.414/1] bg-white rounded-3xl p-3 sm:p-4 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-slate-200 dark:border-white/15 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] block"
            title="Open Original Certificate in New Tab"
          >
            {/* Inner Certificate Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10">
              <Image
                src={credential.image}
                alt={credential.title}
                fill
                priority
                unoptimized
                className="object-contain object-center transition-transform duration-500 group-hover/sheet:scale-[1.02]"
              />
            </div>

            {/* Subtle Hover Indicator */}
            <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px] opacity-0 group-hover/sheet:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-mono text-xs font-bold shadow-2xl">
                <span>Open Original File</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-500" />
              </span>
            </div>
          </a>

          {/* Action Row below certificate sheet */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-1 text-xs font-mono">
            <span className="text-slate-500 dark:text-zinc-500">
              Format: {credential.pdfUrl ? "Official Vector PDF & Image" : "High-Res Image"}
            </span>

            <div className="flex items-center gap-2">
              <a
                href={credential.pdfUrl || credential.verifyUrl || credential.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open in Tab</span>
              </a>

              <a
                href={credential.verifyUrl || credential.image}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Verification Metadata Card & Overview */}
        <div className="lg:col-span-5 space-y-6">
          {/* Bento Verification Details Box */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0c1017]/95 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
              <Award className="w-4 h-4" />
              <span>Authentication Summary</span>
            </div>

            {/* Credential ID field */}
            {credential.credentialId && (
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/8 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 uppercase block">
                  Credential Identifier
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-100 select-all truncate">
                    {credential.credentialId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyId}
                    title="Copy Credential ID"
                    className="p-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-300 hover:text-cyan-500 transition-colors cursor-pointer shrink-0"
                    aria-label="Copy credential ID"
                  >
                    {copiedId ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Authority Detail */}
            <div className="space-y-1 text-xs">
              <span className="text-slate-400 dark:text-zinc-500 font-mono uppercase text-[10.5px]">
                Accreditation Authority
              </span>
              <p className="font-medium text-slate-800 dark:text-zinc-200">
                {credential.authority}
              </p>
            </div>

            {/* Program Track */}
            <div className="space-y-1 text-xs">
              <span className="text-slate-400 dark:text-zinc-500 font-mono uppercase text-[10.5px]">
                Program Track
              </span>
              <p className="font-medium text-slate-800 dark:text-zinc-200">
                {credential.category} Engineering Discipline
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <a
                href={credential.pdfUrl || credential.verifyUrl || credential.image}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verify Official Certificate</span>
              </a>
            </div>
          </div>

          {/* Description Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0c1017]/95 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Overview &amp; Scope
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              {credential.description}
            </p>
          </div>
        </div>
      </div>

      {/* 04. Key Highlights & Validated Competencies */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Highlights Checklist */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1017]/95 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl space-y-5">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Core Technical Accomplishments
            </h3>
          </div>

          <div className="space-y-3">
            {credential.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                  ✓
                </span>
                <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Skills & Tech Stack Chips */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1017]/95 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl space-y-5">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Validated Technologies
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {credential.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-zinc-200 border border-slate-200/80 dark:border-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 05. Comprehensive Curriculum & Technical Modules */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400 font-semibold block mb-1">
            SYLLABUS &amp; MASTERY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Curriculum &amp; Course Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {credential.curriculum.map((module) => (
            <div
              key={module.moduleNumber}
              className="p-6 rounded-3xl bg-white dark:bg-[#0c1017]/90 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-500 dark:text-cyan-400">
                  MODULE {module.moduleNumber}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {module.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {module.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5">
                {module.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[10.5px] font-mono text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 06. Practical Capstone Project Spotlight */}
      {credential.capstoneProject && (
        <div className="p-7 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-white via-white to-slate-50 dark:from-[#0c1017] dark:via-[#0c1017] dark:to-[#0f1728] shadow-sm dark:shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold">
                Associated Capstone Project
              </span>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 w-fit">
              {credential.capstoneProject.role}
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {credential.capstoneProject.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 mt-2 leading-relaxed max-w-3xl">
              {credential.capstoneProject.description}
            </p>
          </div>

          <div className="pt-3 flex flex-wrap gap-2">
            {credential.capstoneProject.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 07. Prev / Next Navigation Footer */}
      <div className="pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevCredential ? (
          <Link
            href={`/credentials/${prevCredential.id}`}
            className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/60 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:-translate-x-0.5 transition-transform">
              <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-zinc-400" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-zinc-500 block">
                Previous Credential
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 truncate block group-hover:text-cyan-500 transition-colors">
                {prevCredential.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextCredential ? (
          <Link
            href={`/credentials/${nextCredential.id}`}
            className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/60 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group flex items-center justify-end text-right gap-3 sm:col-start-2"
          >
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-zinc-500 block">
                Next Credential
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 truncate block group-hover:text-cyan-500 transition-colors">
                {nextCredential.title}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
              <ChevronRight className="w-4 h-4 text-slate-600 dark:text-zinc-400" />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
