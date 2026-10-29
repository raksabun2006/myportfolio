"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Download, ExternalLink, Sun, Moon } from "lucide-react";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";
import { useLocale } from "@/context/LocaleContext";
import { localeLabels } from "@/i18n/config";
import CountryFlag from "@/components/CountryFlag";

interface NavLinkItem {
  label: "home" | "about" | "projects" | "certificates" | "contact";
  href: string;
  targetId: string;
}

const NAV_ITEMS: NavLinkItem[] = [
  { label: "home", href: "/", targetId: "home" },
  { label: "about", href: "/about", targetId: "about" },
  { label: "projects", href: "/projects", targetId: "projects" },
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
  const [activeSection, setActiveSection] = useState<string>("home");

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Derive active section for subpages without triggering effect set-state
  const currentSection =
    pathname === `/${locale}`
      ? activeSection
      : pathname.includes("projects")
      ? "projects"
      : pathname.includes("about")
      ? "about"
      : pathname.includes("skills")
      ? "skills"
      : pathname.includes("contact")
      ? "contact"
      : pathname.includes("certifications") || pathname.includes("credentials")
      ? "certifications"
      : pathname.includes("education")
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

  // Track active section via IntersectionObserver when on home page
  useEffect(() => {
    if (pathname !== `/${locale}`) return;

    const sectionIds = ["home", "about", "projects", "skills", "education", "certifications", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [locale, pathname]);

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

  const localizedPath = (href: string) => `/${locale}${href === "/" ? "" : href}`;
  const switchLocalePath = pathname.match(/^\/(en|kh)(?=\/|$)/)
    ? pathname.replace(/^\/(en|kh)/, `/${locale === "en" ? "kh" : "en"}`)
    : `/${locale === "en" ? "kh" : "en"}${pathname === "/" ? "" : pathname}`;

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
    () => {
      setMobileMenuOpen(false);
    }, []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/10 shadow-xs"
          : "bg-white/70 dark:bg-[#090d16]/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo & Name */}
          <Link
            href={localizedPath("/")}
            onClick={handleNavClick}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg py-1 px-1.5"
            aria-label="Bun Raksa — Return to Home"
          >
            <Image
              src="/profile.JPEG"
              alt="Bun Raksa"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover object-top shadow-xs transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white tracking-tight leading-none">
                Bun Raksa
              </span>
              <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 leading-none mt-1">
                {t("fullStackDeveloper")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-white/5 border border-zinc-200/70 dark:border-white/10 rounded-full px-2 py-1 shadow-2xs"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentSection === item.targetId;
              return (
                <Link
                  key={item.label}
                  href={localizedPath(item.href)}
                  onClick={handleNavClick}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? "bg-white dark:bg-white/15 text-blue-600 dark:text-blue-400 font-semibold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: GitHub, LinkedIn, CV, Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.linkedin.com/in/bun-raksa-computer-science"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.facebook.com/bun.raksa.intelcorei5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Facebook Profile"
              title="Facebook Profile"
            >
              <FacebookIcon className="w-4 h-4 fill-current" />
            </a>

            <div className="w-px h-4 bg-zinc-200 dark:bg-white/10 mx-1" aria-hidden="true" />

            <Link
              href={switchLocalePath}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={`${t("language")}: ${localeLabels[locale === "en" ? "kh" : "en"]}`}
              title={`${t("language")}: ${localeLabels[locale === "en" ? "kh" : "en"]}`}
            >
              <CountryFlag locale={locale} />
            </Link>

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
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

            {/* Resume / CV Download Link */}
            <a
              href="/cv.pdf"
              download="Bun-Raksa-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 text-xs font-semibold tracking-wide transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            <Link
              href={switchLocalePath}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={`${t("language")}: ${localeLabels[locale === "en" ? "kh" : "en"]}`}
              title={`${t("language")}: ${localeLabels[locale === "en" ? "kh" : "en"]}`}
            >
              <CountryFlag locale={locale} />
            </Link>

            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
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
              className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
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
          className="md:hidden fixed inset-0 top-16 sm:top-18 z-40 bg-black/40 backdrop-blur-xs animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="max-h-[calc(100dvh-4rem)] w-full overflow-y-auto bg-white px-5 py-5 shadow-xl animate-mobile-menu dark:bg-[#0c121e] sm:max-h-[calc(100dvh-4.5rem)]"
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
                    onClick={handleNavClick}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5"
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

            {/* Mobile Actions: GitHub, LinkedIn, CV */}
            <div className="pt-4 border-t border-zinc-100 dark:border-white/10 flex flex-col gap-3">
              <a
                href="/cv.pdf"
                download="Bun-Raksa-CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs tracking-wide shadow-xs active:scale-[0.99] transition-transform"
              >
                <Download className="w-4 h-4" />
                <span>{t("downloadCv")}</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-1">
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
