"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Approach", href: "#about" },
  { name: "Education", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
        scrolled
          ? "border-b border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
          : "border-b border-zinc-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Left: Custom Code Logo & Title */}
        <Link
          href="#home"
          onClick={() => setActiveSection("Home")}
          className="flex items-center gap-3 group focus:outline-hidden rounded-md"
        >
          <div className="relative w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-150 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-zinc-300 transition-all shadow-2xs">
            <Image
              src="/logo.png"
              alt="Bun Raksa Logo"
              width={26}
              height={26}
              className="object-contain"
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-zinc-950 text-base tracking-tight leading-tight">
              Bun Raksa
            </span>
            <span className="text-[11px] font-mono text-zinc-500 tracking-normal uppercase">
              Backend / Full-Stack
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links with clean underline active style */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-zinc-650 hover:text-blue-600"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions & Pill Button (Mart System style) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/raksabun2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Primary Pill Button matching the screenshot's Register style */}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (BORDERLESS LIST DROPDOWN) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-5 pt-2 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.name
                    ? "text-blue-600 font-semibold bg-blue-50/60"
                    : "text-zinc-700 hover:text-blue-600 hover:bg-zinc-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/raksabun2006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-100 rounded-full"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-100 rounded-full"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-full shadow-xs"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
