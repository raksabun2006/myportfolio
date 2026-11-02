"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let preferredLanguage = "en";
    try {
      const savedLanguage = localStorage.getItem("portfolio_locale");
      if (savedLanguage === "km" || savedLanguage === "kh") {
        preferredLanguage = "km";
      } else if (savedLanguage === "en") {
        preferredLanguage = "en";
      } else if (navigator.language.toLowerCase().startsWith("km")) {
        preferredLanguage = "km";
      }
    } catch {
      if (navigator.language.toLowerCase().startsWith("km")) {
        preferredLanguage = "km";
      }
    }

    router.replace(`/${preferredLanguage}`);
  }, [router]);

  return null;
}
