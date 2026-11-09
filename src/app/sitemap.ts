import { MetadataRoute } from "next";
import { credentialsData } from "@/data/credentials";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bunraksa.site";
  const currentDate = new Date().toISOString();
  const localizedRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/skills", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/progress", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/education", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/credentials", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/certifications", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    localizedRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  );

  const credentialRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    credentialsData.map((cred) => ({
      url: `${baseUrl}/${locale}/credentials/${cred.id}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...credentialRoutes];
}
