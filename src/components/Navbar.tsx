"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink, Sun, Moon } from "lucide-react";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";
import { useLocale } from "@/context/LocaleContext";
import { localeLabels } from "@/i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface NavLinkItem {
  label: "home" | "about" | "projects" | "skills" | "progress" | "certificates" | "contact";
  href: string;
  targetId: string;
}

const NAV_ITEMS: NavLinkItem[] = [
  { label: "home", href: "/", targetId: "home" },
  { label: "about", href: "/about", targetId: "about" },
  { label: "projects", href: "/projects", targetId: "projects" },
  { label: "skills", href: "/skills", targetId: "skills" },
  { label: "progress", href: "/progress", targetId: "progress" },
  { label: "certificates", href: "/certifications", targetId: "certifications" },
  { label: "contact", href: "/contact", targetId: "contact" },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();
  const { locale, t } = useLocale();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Derive active section based on current page router pathname
  const currentSection =
    pathname.includes("/projects")
      ? "projects"
      : pathname.includes("/about")
      ? "about"
      : pathname.includes("/skills")
      ? "skills"
      : pathname.includes("/progress")
      ? "progress"
      : pathname.includes("/contact")
      ? "contact"
      : pathname.includes("/certifications") || pathname.includes("/credentials")
      ? "certifications"
      : pathname.includes("/education")
      ? "education"
      : "home";

  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const localizedPath = useCallback(
    (href: string) => `/${locale}${href === "/" ? "" : href}`,
    [locale]
  );

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setMobileMenuOpen(false);

      const targetUrl = localizedPath(href);
      // If clicking the current page's nav link, smoothly scroll to top
      if (pathname === targetUrl) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [localizedPath, pathname]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/10 shadow-xs"
          : "bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-sm border-b border-zinc-200/40 dark:border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[85px]">
          {/* Brand Logo & Name */}
          <Link
            href={localizedPath("/")}
            onClick={(e) => handleNavClick(e, "/")}
            className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl py-1 px-1.5 transition-all shrink-0"
            aria-label="Bun Raksa — Return to Home"
          >
            <div className="relative">
              <Image
                src="/profile.JPEG"
                alt="Bun Raksa"
                width={96}
                height={96}
                quality={100}
                sizes="40px"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover object-top ring-2 ring-zinc-200/80 dark:ring-white/10 shadow-xs transition-transform duration-200 group-hover:scale-105"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#090d16]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                Bun Raksa
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 leading-none mt-1 whitespace-nowrap">
                {t("fullStackDeveloper")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Routes: /about, /projects, /skills, /certifications, /contact) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 bg-zinc-100/90 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/10 rounded-full px-2 py-1 shadow-2xs backdrop-blur-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentSection === item.targetId;

              return (
                <Link
                  key={item.label}
                  href={localizedPath(item.href)}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-[13px] font-medium whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 select-none ${
                    isActive
                      ? "bg-white dark:bg-white/15 text-blue-600 dark:text-blue-400 font-semibold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: GitHub, LinkedIn, Facebook, Locale Switcher, Theme Toggle */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 shrink-0">
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.linkedin.com/in/bun-raksa-computer-science"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.facebook.com/bun.raksa.intelcorei5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Facebook Profile"
              title="Facebook Profile"
            >
              <FacebookIcon className="w-4 h-4 fill-current" />
            </a>

            <div className="w-px h-4 bg-zinc-200 dark:bg-white/10 mx-1" aria-hidden="true" />

            {/* Flag-only Language Switcher (Click to toggle EN / KM) */}
            <LanguageSwitcher />

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                title={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-theme-icon" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700 animate-theme-icon" />
                )}
              </button>
            )}

          </div>

          {/* Mobile Right Controls: Language Switcher + Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-1.5">
            <LanguageSwitcher />

            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-theme-icon" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700 animate-theme-icon" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-0 top-[85px] z-40 bg-black/40 backdrop-blur-xs animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="max-h-[calc(100dvh-85px)] w-full overflow-y-auto bg-white px-5 py-5 shadow-xl animate-mobile-menu dark:bg-[#0c121e]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav Links */}
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentSection === item.targetId;

                return (
                  <Link
                    key={item.label}
                    href={localizedPath(item.href)}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 font-medium"
                    }`}
                  >
                    <span>{t(item.label)}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Language Selector in Drawer */}
            <div className="pt-3 pb-1 border-t border-zinc-100 dark:border-white/5 mt-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2 px-1">
                {t("language")}
              </span>
              <LanguageSwitcher variant="drawer" onLanguageChange={() => setMobileMenuOpen(false)} />
            </div>

            {/* Mobile Actions: Social Links */}
            <div className="pt-3">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/raksabun2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <span className="text-zinc-300 dark:text-zinc-700">·</span>

                <a
                  href="https://www.linkedin.com/in/bun-raksa-computer-science"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  <LinkedinIcon className="w-4 h-4 fill-current" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <span className="text-zinc-300 dark:text-zinc-700">·</span>

                <a
                  href="https://www.facebook.com/bun.raksa.intelcorei5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
