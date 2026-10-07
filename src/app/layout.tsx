import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bun Raksa | Backend / Full-Stack Developer",
  description:
    "Portfolio of Bun Raksa, a Backend / Full-Stack Developer specializing in Java, Spring Boot, PostgreSQL, React, Microservices, and DevOps.",
  keywords: [
    "Bun Raksa",
    "Backend Developer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "React",
    "Microservices",
    "DevOps",
    "Phnom Penh Cambodia",
  ],
  authors: [{ name: "Bun Raksa", url: "https://github.com/raksabun2006" }],
  creator: "Bun Raksa",
  metadataBase: new URL("https://bunraksa.dev"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Bun Raksa | Backend / Full-Stack Developer",
    description:
      "Portfolio of Bun Raksa, a Backend / Full-Stack Developer specializing in Java, Spring Boot, PostgreSQL, React, Microservices, and DevOps.",
    url: "https://bunraksa.dev",
    siteName: "Bun Raksa Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/mart-system.png",
        width: 1200,
        height: 630,
        alt: "Bun Raksa - Backend / Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bun Raksa | Backend / Full-Stack Developer",
    description:
      "Portfolio of Bun Raksa, a Backend / Full-Stack Developer specializing in Java, Spring Boot, PostgreSQL, React, Microservices, and DevOps.",
    images: ["/projects/mart-system.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-zinc-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
