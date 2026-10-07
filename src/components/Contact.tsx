"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            08 / Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-1">
            Let&apos;s Build Something
          </h2>
          <p className="text-base text-zinc-600 max-w-2xl mt-3 leading-relaxed">
            I&apos;m interested in backend, full-stack, and software engineering opportunities.
            If you have a project, opportunity, or idea you&apos;d like to discuss, feel free to reach out.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:raksabun2006@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 hover:border-zinc-300 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-mono uppercase text-zinc-400">Email</span>
                    <span className="text-sm font-medium text-zinc-950 truncate">
                      raksabun2006@gmail.com
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-zinc-900 transition-colors" />
                </a>

                <a
                  href="https://github.com/raksabun2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 hover:border-zinc-300 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-800">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-mono uppercase text-zinc-400">GitHub</span>
                    <span className="text-sm font-medium text-zinc-950 truncate">
                      github.com/raksabun2006
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-zinc-900 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 hover:border-zinc-300 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-800">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-mono uppercase text-zinc-400">LinkedIn</span>
                    <span className="text-sm font-medium text-zinc-950 truncate">
                      Bun Raksa
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-zinc-900 transition-colors" />
                </a>
              </div>

              <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                <span className="font-mono text-zinc-700 font-medium">Response Time:</span> Usually
                within 24 hours. Located in Phnom Penh (UTC+7).
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mx-auto text-zinc-950">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950">Message Sent Successfully</h4>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto">
                    Thank you for reaching out. I will review your message and reply as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-semibold transition-colors mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe or Technical Recruiter"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, project, or role opportunities..."
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-950 focus:bg-white transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-medium transition-colors shadow-xs disabled:opacity-70"
                  >
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
