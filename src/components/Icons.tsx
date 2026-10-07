import React from "react";

export function GithubIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function JavaIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <path d="M4 19c3.5 1 12.5 1 16 0M6 21c2.5.7 9.5.7 12 0" strokeLinecap="round" />
      <path d="M10 2c-1.5 2-1 3.5 0 5 1.5 1.8 1.5 3-.5 4.5" strokeLinecap="round" />
      <path d="M14 2c-1.5 2-1 3.5 0 5 1.5 1.8 1.5 3-.5 4.5" strokeLinecap="round" />
      <path d="M6 14c1.5 1.5 4 2 6 2s4.5-.5 6-2c0 0-1 4-6 4s-6-4-6-4z" />
    </svg>
  );
}

export function SpringIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6c-3 2-4 5-3 8 1 3 4 4 6 3 3-1 4-4 3-7-1-2-3-3-6-4z" strokeLinecap="round" />
      <path d="M9 13c1.5-1 3.5-1 5 0" strokeLinecap="round" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round" />
      <path d="M7 8h6M10 8v8" strokeLinecap="round" />
      <path d="M14 14.5c.8.7 1.7 1 2.6.8.9-.2 1.4-.8 1.4-1.5 0-1.2-2.8-1-2.8-2.6 0-.8.6-1.5 1.5-1.7 1-.1 1.8.2 2.3.8" strokeLinecap="round" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      <path d="M12 9v12" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function RedisIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
      <path d="M4 10.5l8 4.5 8-4.5" />
      <path d="M4 15.5l8 4.5 8-4.5" />
    </svg>
  );
}

export function DockerIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <rect x="2" y="10" width="3" height="3" rx="0.5" />
      <rect x="6" y="10" width="3" height="3" rx="0.5" />
      <rect x="10" y="10" width="3" height="3" rx="0.5" />
      <rect x="6" y="6" width="3" height="3" rx="0.5" />
      <rect x="10" y="6" width="3" height="3" rx="0.5" />
      <path d="M1 12c.5 5 4 8 11 8s10-3 10-8c0-1.5-1-2.5-3-2.5-.5 0-1 .2-1.5.5C16.5 7.5 14 7 14 7H2" strokeLinecap="round" />
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="12" r="3" />
      <path d="M6 9v6" />
      <path d="M6 9a9 9 0 0 0 9 6" />
    </svg>
  );
}

export function RestApiIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 12h2M11 12h2M15 12h2" strokeLinecap="round" />
      <path d="M7 9h4M13 15h4" strokeLinecap="round" />
    </svg>
  );
}

export function MicroservicesIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="3" width="6" height="6" rx="1.5" />
      <rect x="3" y="15" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h6M6 9v6M18 9v6M9 18h6" strokeLinecap="round" />
    </svg>
  );
}
