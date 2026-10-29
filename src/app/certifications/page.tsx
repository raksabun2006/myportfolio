import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Credentials from "@/components/Credentials";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "View Bun Raksa's verified software engineering, networking, and full-stack certifications.",
  alternates: {
    canonical: "https://bunraksa.site/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <PageShell mainClassName="pt-24 sm:pt-28 md:pt-32 pb-20 animate-fade-in">
      <Credentials />
    </PageShell>
  );
}
