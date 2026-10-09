import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bunraksa.site/sitemap.xml",
    host: "https://bunraksa.site",
  };
}
