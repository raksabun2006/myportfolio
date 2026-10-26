import type { Locale } from "@/i18n/config";

export default function CountryFlag({ locale }: { locale: Locale }) {
  if (locale === "kh") {
    return (
      <svg
        viewBox="0 0 30 20"
        className="h-4 w-6 overflow-hidden rounded-sm shadow-xs"
        role="img"
        aria-label="Cambodia"
      >
        <rect width="30" height="20" fill="#032ea1" />
        <rect y="3" width="30" height="14" fill="#e00025" />
        <path d="M8 14V8h2V6h10v2h2v6h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4H8Z" fill="#fff" />
        <path d="M10 6h10v2H10z" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 30 20"
      className="h-4 w-6 overflow-hidden rounded-sm shadow-xs"
      role="img"
      aria-label="United Kingdom"
    >
      <rect width="30" height="20" fill="#012169" />
      <path d="m0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="m0 0 30 20M30 0 0 20" stroke="#c8102e" strokeWidth="2" />
      <path d="M13 0h4v20h-4zM0 8h30v4H0z" fill="#fff" />
      <path d="M14 0h2v20h-2zM0 9h30v2H0z" fill="#c8102e" />
    </svg>
  );
}
