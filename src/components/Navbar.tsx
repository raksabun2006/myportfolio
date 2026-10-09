"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, X } from "lucide-react";
import { SunIcon, MoonIcon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";

const NAV_ITEMS = [
  { name: "Projects", href: "/projects" },
  { name: "Certificate", href: "/credentials", match: ["/credentials", "/certificate"] },
  { name: "Skills", href: "/skills", match: ["/skills", "/forge"] },
  { name: "About", href: "/about", match: ["/about", "/persona"] },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Passive scroll listener for navbar background state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure smooth scroll to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isItemActive = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.match) {
      return item.match.some((m) => pathname === m || pathname.startsWith(m + "/"));
    }
    return pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    match?: string[]
  ) => {
    setMobileMenuOpen(false);
    const isCurrent =
      pathname === href || (match && match.some((m) => pathname === m || pathname.startsWith(m + "/")));

    if (isCurrent) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Subtle top gradient blur mask so scrolled content doesn't abruptly clip above the floating capsule */}
      <div
        className="fixed top-0 inset-x-0 h-16 sm:h-20 pointer-events-none z-40 bg-gradient-to-b from-[#f8fafc]/90 via-[#f8fafc]/40 to-transparent dark:from-[#080d19]/90 dark:via-[#080d19]/40 dark:to-transparent backdrop-blur-[2px]"
        aria-hidden="true"
      />

      <div className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <nav
          className={`flex items-center justify-between rounded-[22px] sm:rounded-[24px] px-5 sm:px-7 md:px-8 transition-all duration-300 ease-out h-[64px] sm:h-[72px] ${
            scrolled
              ? "bg-[#0b1222]/96 dark:bg-[#080d18]/95 shadow-[0_12px_36px_rgba(0,0,0,0.28)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
              : "bg-[#0f172a]/92 dark:bg-[#0b101d]/90 shadow-[0_8px_30px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_34px_rgba(0,0,0,0.45)]"
          } border border-slate-700/50 dark:border-white/[0.08] backdrop-blur-xl`}
          aria-label="Main Navigation"
        >
        {/* Left: Brand Identity */}
        <Link
          href="/"
          onClick={handleBrandClick}
          className="flex items-center gap-2.5 group select-none py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-lg transition-transform duration-200 active:scale-95"
          aria-label="bunraksa.site homepage"
        >
          <Home className="w-[18px] h-[18px] text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 shrink-0" />
          <span className="font-sans font-semibold text-[15px] sm:text-base tracking-tight text-slate-100 group-hover:text-white transition-colors duration-200">
            bunraksa<span className="text-cyan-400 font-semibold">.site</span>
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);

            return (
              <div key={item.name} className="relative flex items-center justify-center">
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.match)}
                  className={`relative text-sm font-medium transition-all duration-200 py-1.5 px-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 ${
                    active
                      ? "text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.name}

                  {/* Smooth scaling and fading cyan active underline */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.7)] transition-all duration-300 ease-out origin-center ${
                      active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 pointer-events-none"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right: Theme Mode Switcher */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={mounted && theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border border-slate-700/60 dark:border-white/10 bg-slate-800/60 hover:bg-slate-800/90 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-slate-200 hover:text-white cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 shadow-xs active:scale-95"
          >
            {mounted && theme === "light" ? (
              <>
                <SunIcon className="w-3.5 h-3.5 text-amber-400 transition-transform duration-200 group-hover:rotate-45" />
                <span className="text-[12px] font-medium text-slate-200 tracking-wide">Light</span>
              </>
            ) : (
              <>
                <MoonIcon className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-200 group-hover:-rotate-12" />
                <span className="text-[12px] font-medium text-slate-200 tracking-wide">Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger & Theme Toggle Controls */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 cursor-pointer active:scale-95"
            aria-label={mounted && theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {mounted && theme === "light" ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-cyan-400" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 cursor-pointer active:scale-95"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-2 p-3.5 rounded-[20px] border border-slate-700/60 dark:border-white/10 bg-[#0f172a]/95 dark:bg-[#0b101d]/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-1.5 animate-fade-in"
          style={{
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.match)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors duration-200 ${
                  active
                    ? "bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span>{item.name}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />}
              </Link>
            );
          })}

          <div className="pt-2.5 mt-1 border-t border-slate-700/50 dark:border-white/10 flex items-center justify-between px-2">
            <span className="text-xs font-mono text-slate-400">Appearance</span>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/15 text-xs font-medium text-slate-200 border border-slate-700/60 dark:border-white/10 cursor-pointer transition-colors active:scale-95"
            >
              {mounted && theme === "light" ? (
                <>
                  <SunIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  </>
  );
}
