import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CredentialDetailClient from "@/components/CredentialDetailClient";
import { credentialsData } from "@/data/credentials";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return credentialsData.map((cred) => ({
    id: cred.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const credential = credentialsData.find((c) => c.id === id);

  if (!credential) {
    return {
      title: "Credential Not Found | Bun Raksa",
      description: "The requested credential could not be found.",
    };
  }

  return {
    title: `${credential.title} | Bun Raksa Credentials`,
    description: credential.description,
    openGraph: {
      title: `${credential.title} - Verified Credential`,
      description: credential.description,
      images: [
        {
          url: credential.image,
          alt: credential.title,
        },
      ],
    },
  };
}

export default async function CredentialDetailPage({ params }: PageProps) {
  const { id } = await params;
  const currentIndex = credentialsData.findIndex((c) => c.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const credential = credentialsData[currentIndex];
  const prevCredential = currentIndex > 0 ? credentialsData[currentIndex - 1] : undefined;
  const nextCredential =
    currentIndex < credentialsData.length - 1 ? credentialsData[currentIndex + 1] : undefined;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-[#00d9ff] selection:text-[#07090e] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Engineering Atmosphere Grid */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00a6f4 1px, transparent 1px),
              linear-gradient(to bottom, #00a6f4 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[140px]" />
        <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#8b5cf6]/[0.04] dark:bg-[#a78bfa]/[0.03] blur-[140px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 relative z-10 animate-fade-in">
        <CredentialDetailClient
          credential={credential}
          prevCredential={prevCredential}
          nextCredential={nextCredential}
        />
      </main>

      <Footer />
    </div>
  );
}
