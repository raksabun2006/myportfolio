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
        <g fill="#fff" stroke="#111827" strokeWidth=".42" strokeLinejoin="round">
          <path d="M5.1 14.1h19.8v.8H5.1z" />
          <path d="M5.8 13.2h18.4v.9H5.8zM6.5 12.25h17v.95h-17zM7.2 11.35h15.6v.9H7.2z" />
          <path d="M8.25 11.35V8.25h1.4v3.1M20.35 11.35V8.25h1.4v3.1M13.55 11.35V6.8h2.9v4.55" />
          <path d="M7.65 8.25h2.6l-.45-1.05h-1.7zM19.75 8.25h2.6l-.45-1.05h-1.7zM12.9 6.8h4.2l-.55-1.15h-3.1z" />
          <path d="M8.2 7.2 8.9 5.5l.7 1.7M20.3 7.2 21 5.5l.7 1.7M13.45 5.65 15 2.2l1.55 3.45" />
          <path d="M14.45 2.8 15 1.8l.55 1M14.15 4.1h1.7M13.8 4.8h2.4" />
          <path d="M9.6 8.25v2.25M20.4 8.25v2.25M15 6.8v4.55M6.95 14.1v-1.85M23.05 14.1v-1.85" />
          <path d="M11 8.25h1.7v3.1H11zM17.3 8.25H19v3.1h-1.7z" />
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
