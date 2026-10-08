"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, ArrowUpRight, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

const FAQS = [
  {
    q: "What is your primary engineering stack?",
    a: "My core engine is Java & Spring Boot  for microservices, REST APIs, and enterprise business logic, paired with PostgreSQL and Redis. On the frontend, I build responsive client portals with React, Next.js, and TypeScript.",
  },
  {
    q: "What roles are you looking for?",
    a: "I am actively seeking Full-Stack and Backend Engineering roles — both full-time positions and high-impact contract opportunities, locally in Cambodia or remotely worldwide.",
  },
  {
    q: "How can we collaborate on a project?",
    a: "Send me a message using the form below or email me directly at raksabun2006@gmail.com. I usually respond within 24 hours.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] mb-2 font-semibold">
            05 / REACH OUT · CONNECT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Send a Message
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Interested in backend, microservices, or full-stack software engineering opportunities.
            Feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1018]/90 p-6 shadow-sm dark:shadow-xl space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
                Direct Channels
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:raksabun2006@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.02] hover:bg-[#00a6f4]/10 dark:hover:bg-[#00d9ff]/10 hover:border-[#00a6f4]/40 dark:hover:border-[#00d9ff]/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00a6f4] dark:text-[#00d9ff]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-zinc-500">Email</span>
                    <span className="text-xs font-medium text-slate-900 dark:text-white truncate">
                      raksabun2006@gmail.com
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-zinc-500 ml-auto group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors" />
                </a>

                <a
                  href="https://github.com/raksabun2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.02] hover:bg-[#00a6f4]/10 dark:hover:bg-[#00d9ff]/10 hover:border-[#00a6f4]/40 dark:hover:border-[#00d9ff]/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00a6f4] dark:text-[#00d9ff]">
                    <GithubIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-zinc-500">GitHub</span>
                    <span className="text-xs font-medium text-slate-900 dark:text-white truncate">
                      github.com/raksabun2006
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-zinc-500 ml-auto group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.02] hover:bg-[#00a6f4]/10 dark:hover:bg-[#00d9ff]/10 hover:border-[#00a6f4]/40 dark:hover:border-[#00d9ff]/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00a6f4] dark:text-[#00d9ff]">
                    <LinkedinIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-zinc-500">LinkedIn</span>
                    <span className="text-xs font-medium text-slate-900 dark:text-white truncate">
                      Bun Raksa
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-zinc-500 ml-auto group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors" />
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/8 text-xs font-mono text-slate-500 dark:text-zinc-400">
                <span className="text-[#00a6f4] dark:text-[#00d9ff] font-semibold">Response Time:</span> Usually within 24 hours. Phnom Penh (UTC+7).
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1018]/90 p-6 sm:p-8 shadow-sm dark:shadow-xl relative overflow-hidden">
              {submitted ? (
                <div className="py-12 text-center space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#00a6f4]/15 dark:bg-[#00d9ff]/15 border border-[#00a6f4]/30 dark:border-[#00d9ff]/30 flex items-center justify-center mx-auto text-[#00a6f4] dark:text-[#00d9ff]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Transmitted</h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out. I will review your message and reply as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex px-5 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white text-xs font-semibold transition-colors mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Technical Recruiter or Engineering Manager"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-[#00a6f4] dark:focus:border-[#00d9ff]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="engineer@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-[#00a6f4] dark:focus:border-[#00d9ff]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, team requirements, or software challenge..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-[#00a6f4] dark:focus:border-[#00d9ff]/50 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-[#00d9ff]/15 dark:hover:bg-[#00d9ff]/25 border border-slate-900 dark:border-[#00d9ff]/35 text-white dark:text-[#00d9ff] font-semibold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? "Transmitting..." : "Send Message"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pt-6">
          <div className="text-xs font-mono tracking-[0.25em] uppercase text-slate-400 dark:text-zinc-500 mb-4 font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="space-y-2.5">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/80 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 dark:text-zinc-400 transition-transform duration-200 shrink-0 ${openFaq === i ? "rotate-180 text-[#00a6f4] dark:text-[#00d9ff]" : ""
                      }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
