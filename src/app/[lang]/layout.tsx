import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/context/LocaleContext";
import { isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: "/en",
      km: "/kh",
    },
  },
};

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
