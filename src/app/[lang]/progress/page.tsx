import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";

export { default } from "@/app/progress/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const isKhmer = lang === "km";
  return {
    title: isKhmer ? "វឌ្ឍនភាពរបស់ខ្ញុំ" : "My Progress",
    description: isKhmer
      ? "ស្វែងយល់ពីវឌ្ឍនភាពនៃការរៀនសូត្រជាបន្តបន្ទាប់ ផែនទីផ្លូវបច្ចេកវិទ្យា Flutter, Android និង Microservices របស់ ប៊ុន រ៉ាក់សា។"
      : "Explore Bun Raksa's continuous learning progress, skill roadmaps in Flutter, Android, and Microservices Architecture, and learning milestones.",
    alternates: {
      canonical: `/${lang}/progress`,
      languages: {
        en: "/en/progress",
        km: "/km/progress",
      },
    },
    openGraph: {
      title: isKhmer ? "វឌ្ឍនភាពរបស់ខ្ញុំ | ប៊ុន រ៉ាក់សា" : "My Progress | Bun Raksa",
      locale: isKhmer ? "km_KH" : "en_US",
    },
  };
}

