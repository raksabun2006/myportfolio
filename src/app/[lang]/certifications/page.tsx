import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";

export { default } from "@/app/certifications/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const isKhmer = lang === "kh";
  return {
    title: isKhmer ? "វិញ្ញាបនបត្រ" : "Certifications",
    description: isKhmer
      ? "មើលវិញ្ញាបនបត្រដែលបានបញ្ជាក់របស់ ប៊ុន រ៉ាក់សា ផ្នែកវិស្វកម្មកម្មវិធី បណ្តាញ និង Full-Stack។"
      : "View Bun Raksa's verified software engineering, networking, and full-stack certifications.",
    alternates: {
      canonical: `/${lang}/certifications`,
      languages: {
        en: "/en/certifications",
        km: "/kh/certifications",
      },
    },
    openGraph: {
      title: isKhmer ? "វិញ្ញាបនបត្រ | ប៊ុន រ៉ាក់សា" : "Certifications | Bun Raksa",
      locale: isKhmer ? "km_KH" : "en_US",
    },
  };
}
