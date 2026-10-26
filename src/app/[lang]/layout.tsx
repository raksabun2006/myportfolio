import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/context/LocaleContext";
import { isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isKhmer = lang === "kh";

  return {
    title: isKhmer
      ? "ប៊ុន រ៉ាក់សា | អ្នកអភិវឌ្ឍ Full-Stack"
      : "Bun Raksa | Full-Stack Developer",
    description: isKhmer
      ? "ស្វែងយល់ពីផលប័ត្ររបស់ ប៊ុន រ៉ាក់សា ដែលបង្ហាញគម្រោង Web Application, React, Spring Boot, REST API និង PostgreSQL។"
      : "Explore Bun Raksa's developer portfolio featuring full-stack web applications, React, Spring Boot, REST APIs, and PostgreSQL projects.",
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        km: "/kh",
      },
    },
    openGraph: {
      locale: isKhmer ? "km_KH" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <LocaleProvider locale={lang}>{children}</LocaleProvider>;
}
