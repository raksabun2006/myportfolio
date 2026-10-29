import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Credentials from "@/components/Credentials";

export const metadata: Metadata = {
  title: "Verified Credentials & Certifications",
  description:
    "Official software engineering and networking certifications earned by Bun Raksa from ISTAD, Cisco Networking Academy, and ETEC Center.",
  alternates: {
    canonical: "https://bunraksa.site/credentials",
  },
  openGraph: {
    title: "Verified Credentials & Certifications | Bun Raksa",
    description:
      "Official software engineering and networking certifications earned by Bun Raksa from ISTAD, Cisco Networking Academy, and ETEC Center.",
    url: "https://bunraksa.site/credentials",
  },
};

export default function CredentialsPage() {
  return (
    <PageShell mainClassName="pt-24 sm:pt-28 md:pt-32 pb-20 animate-fade-in">
        <Credentials />
    </PageShell>
  );
}
