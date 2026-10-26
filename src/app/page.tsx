"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let preferredLanguage = "en";
    try {
      const savedLanguage = localStorage.getItem("portfolio_locale");
      if (savedLanguage === "en" || savedLanguage === "kh") {
        preferredLanguage = savedLanguage;
      } else if (navigator.language.toLowerCase().startsWith("km")) {
        preferredLanguage = "kh";
      }
    } catch {
      if (navigator.language.toLowerCase().startsWith("km")) {
        preferredLanguage = "kh";
      }
    }

    router.replace(`/${preferredLanguage}`);
  }, [router]);

  return null;
}
