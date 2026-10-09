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

import Script from "next/script";
import { ThemeProvider } from "@/context/ThemeContext";
import { PersonJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://bunraksa.site"),
  title: {
    default: "Bun Raksa | Backend & Full-Stack Developer in Cambodia",
    template: "%s | Bun Raksa",
  },
  description:
    "Explore Bun Raksa's developer portfolio featuring Java, Spring Boot, React, REST APIs, PostgreSQL, and full-stack projects. Based in Phnom Penh, Cambodia.",
  keywords: [
    "Bun Raksa",
    "Bun Raksa developer",
    "Bun Raksa portfolio",
    "Backend Developer Cambodia",
    "Junior Backend Developer Phnom Penh",
    "Java Spring Boot Developer Cambodia",
    "Full-Stack Developer Cambodia",
    "React and Spring Boot Developer",
    "Java Backend Developer Portfolio",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "React",
    "Next.js",
    "Microservices",
    "REST APIs",
    "Docker",
    "Phnom Penh Cambodia",
    "ប៊ុន រក្សា",
  ],
  authors: [{ name: "Bun Raksa", url: "https://github.com/raksabun2006" }],
  creator: "Bun Raksa",
  publisher: "Bun Raksa",
  alternates: {
    canonical: "https://bunraksa.site",
  },
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
    title: "Bun Raksa | Backend & Full-Stack Developer in Cambodia",
    description:
      "Explore Bun Raksa's developer portfolio featuring Java, Spring Boot, React, REST APIs, PostgreSQL, and full-stack projects. Based in Phnom Penh, Cambodia.",
    url: "https://bunraksa.site",
    siteName: "Bun Raksa Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/mart-system.png",
        width: 1200,
        height: 630,
        alt: "Bun Raksa - Backend & Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bun Raksa | Backend & Full-Stack Developer in Cambodia",
    description:
      "Explore Bun Raksa's developer portfolio featuring Java, Spring Boot, React, REST APIs, PostgreSQL, and full-stack projects. Based in Phnom Penh, Cambodia.",
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

const themeInitScript = `
  try {
    var theme = localStorage.getItem('portfolio_theme');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <PersonJsonLd />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
