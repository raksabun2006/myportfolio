import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-150 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs">
              <Image
                src="/logo.png"
                alt="Bun Raksa Logo"
                width={22}
                height={22}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                Bun Raksa
              </h3>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                Backend / Full-Stack Developer • Phnom Penh, Cambodia
              </p>
            </div>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:raksabun2006@gmail.com"
              className="hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <Link
              href="#home"
              className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
          <p>© 2026 Bun Raksa. All rights reserved.</p>
          <p className="font-mono text-[11px] mt-2 sm:mt-0">
            Engineered with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
