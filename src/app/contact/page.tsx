import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Engineering Inquiries",
  description:
    "Get in touch with Bun Raksa for Java Spring Boot backend engineering, full-stack development roles, internships, or collaboration in Phnom Penh, Cambodia.",
  alternates: {
    canonical: "https://bunraksa.site/contact",
  },
  openGraph: {
    title: "Contact Bun Raksa | Hire Backend & Full-Stack Developer",
    description:
      "Get in touch with Bun Raksa for Java Spring Boot backend engineering, full-stack development roles, internships, or collaboration in Phnom Penh, Cambodia.",
    url: "https://bunraksa.site/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell mainClassName="pt-24 sm:pt-28 md:pt-32 pb-20 animate-fade-in">
        <Contact isStandalone />
    </PageShell>
  );
}
