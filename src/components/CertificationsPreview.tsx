"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import { credentialsData } from "@/data/credentials";
import { useLocale } from "@/context/LocaleContext";

export default function CertificationsPreview() {
  const { t, locale } = useLocale();
  const featuredCredentials = credentialsData.slice(0, 3);

  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl border-t border-zinc-200/80 px-4 py-14 dark:border-white/10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="mb-2 block text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {t("certificates")}
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            {t("verifiedCertifications")}
          </h2>
        </div>
        <Link
          href={`/${locale}/certifications`}
          className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {t("viewAllCertifications")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {featuredCredentials.map((credential) => (
          <article
            key={credential.id}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-white/10 dark:bg-[#0d1522] dark:hover:border-white/20"
          >
            <div className="relative aspect-[1.414/1] bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={credential.image}
                alt={credential.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span className="truncate">{credential.issuerHighlight}</span>
              </div>
              <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-zinc-900 dark:text-white">
                {credential.title}
              </h3>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>{credential.issueDate}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
