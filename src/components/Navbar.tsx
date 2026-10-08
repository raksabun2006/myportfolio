"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, X, Bot } from "lucide-react";
import { SunIcon, MoonIcon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";

const NAV_ITEMS = [
  { name: "Projects", href: "/projects" },
  { name: "Certificate", href: "/credentials", match: ["/credentials", "/certificate"] },
  { name: "Skills", href: "/skills", match: ["/skills", "/forge"] },
  { name: "About", href: "/about", match: ["/about", "/persona"] },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isItemActive = (item: typeof NAV_ITEMS[0]) => {
    if (item.match) {
      return item.match.some((m) => pathname === m || pathname.startsWith(m + "/"));
    }
    return pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-4xl">
      <nav
        className="flex items-center justify-between rounded-2xl px-5 sm:px-6 transition-all duration-300"
        style={{
          height: "58px",
          background: scrolled ? "rgba(22, 28, 40, 0.96)" : "rgba(30, 38, 52, 0.92)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          backdropFilter: "blur(24px) saturate(190%)",
          WebkitBackdropFilter: "blur(24px) saturate(190%)",
          boxShadow: "0 10px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        }}
        aria-label="Main Navigation"
      >
        {/* Left: Brand Identity (Clean Home icon + Script logo, NO border, exact Image 2) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-opacity hover:opacity-85 select-none"
        >
          <Home className="w-4 h-4 text-[#00d9ff] transition-transform group-hover:scale-110" />
          <span
            className="font-sans italic font-bold text-sm tracking-tight text-[#00d9ff]"
            style={{
              textShadow: "0 0 12px rgba(0, 217, 255, 0.45)",
            }}
          >
            bunraksa.site
          </span>
        </Link>

        {/* Center: Route Navigation Links (Clean typography & active pill, Image 2 style) */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);

            return (
              <div key={item.name} className="relative flex flex-col items-center">
                <Link
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs tracking-wide transition-all ${
                    active
                      ? "border border-white/40 bg-white/10 text-white font-medium shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent font-normal"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Hanging Cyan Glowing Indicator Dot directly below active item */}
                {active && (
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center w-3 h-2 rounded-b-md bg-[#161c28] border-b border-x border-white/30"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] shadow-[0_0_8px_#00d9ff]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Bot Status & LIGHT / DARK Mode Switcher Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <div
            title="System Active"
            className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <Bot className="w-4 h-4" />
          </div>

          <div className="h-4 w-[1px] bg-white/15" />

          {/* Theme Pill Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className={`group inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider transition-all shadow-xs cursor-pointer ${
              mounted && theme === "light"
                ? "bg-slate-200/95 hover:bg-white text-slate-800 border border-white/50 shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
            }`}
          >
            {mounted && theme === "light" ? (
              <>
                <SunIcon className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[11px] text-slate-800">LIGHT</span>
              </>
            ) : (
              <>
                <MoonIcon className="w-3.5 h-3.5 text-[#00d9ff]" />
                <span className="text-[11px] text-zinc-100">DARK</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "light" ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-[#00d9ff]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 rounded-xl text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00a6f4] dark:text-[#00d9ff]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-2 p-3.5 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-[#161c26]/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-1.5"
          style={{
            boxShadow:
              theme === "light"
                ? "0 16px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)"
                : "0 16px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${active
                    ? "bg-[#00a6f4]/15 dark:bg-[#00d9ff]/15 text-[#00a6f4] dark:text-[#00d9ff] font-semibold border border-[#00a6f4]/30 dark:border-[#00d9ff]/30"
                    : "text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
              >
                <span>{item.name}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00a6f4] dark:bg-[#00d9ff]" />}
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">Theme</span>
            <button
              type="button"
              onClick={toggleTheme}
              className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-[11px] font-mono text-slate-800 dark:text-white flex items-center gap-1.5 border border-slate-200 dark:border-white/10"
            >
              {mounted && theme === "light" ? <SunIcon className="w-3 h-3 text-amber-500" /> : <MoonIcon className="w-3 h-3 text-[#00d9ff]" />}
              <span>{(mounted ? theme : "DARK").toUpperCase()}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
