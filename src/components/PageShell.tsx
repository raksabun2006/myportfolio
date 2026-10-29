import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageShellProps {
  children: React.ReactNode;
  mainClassName?: string;
}

export default function PageShell({
  children,
  mainClassName = "pt-24 sm:pt-28 md:pt-32 pb-20",
}: PageShellProps) {
  return (
    <div className="site-shell">
      <Navbar />
      <main className={`site-main ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
}
