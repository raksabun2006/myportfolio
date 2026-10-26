import type { Locale } from "@/i18n/config";

export default function CountryFlag({ locale }: { locale: Locale }) {
  if (locale === "kh") {
    return (
      <svg
        viewBox="0 0 30 20"
        className="h-[18px] w-[26px] overflow-hidden rounded-[3px] border border-zinc-300/60 dark:border-white/20 shadow-2xs"
        aria-hidden="true"
      >
        <rect width="30" height="20" fill="#032ea1" />
        <rect y="5" width="30" height="10" fill="#e00025" />
        <g fill="#fff">
          <path d="M5.25 14.15v-.9h1.1v-3.1h1.05V8.6h1.05V7.45h1.05V6.35h1.3v-.8h1.3v.8h1.25v1.1h1.15v-1.1h1.25v-.8h1.3v.8h1.3v1.1h1.05v1.15h1.05v1.55h1.05v3.1h1.1v.9H5.25Z" />
          <path d="M4.6 14.15h20.8v.8H4.6z" />
          <path d="M7.1 12.85h1.15v-2.7h1.05v2.7h1.25V9.5h1.05v3.35h1.25V8.2h1.05v4.65h1.25V9.5h1.05v3.35h1.25v-2.7h1.05v2.7h1.15v.55H7.1z" fill="#e00025" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 30 20"
      className="h-[18px] w-[26px] overflow-hidden rounded-[3px] border border-zinc-300/60 dark:border-white/20 shadow-2xs"
      aria-hidden="true"
    >
      <rect width="30" height="20" fill="#012169" />
      <path d="m0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="m0 0 30 20M30 0 0 20" stroke="#c8102e" strokeWidth="2" />
      <path d="M13 0h4v20h-4zM0 8h30v4H0z" fill="#fff" />
      <path d="M14 0h2v20h-2zM0 9h30v2H0z" fill="#c8102e" />
    </svg>
  );
}
