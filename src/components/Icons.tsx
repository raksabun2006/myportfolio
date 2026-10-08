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

export function TwitterIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function JavaIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4.5 19.5c3.5 1 11.5 1 15 0" />
      <path d="M6.5 21.5c2.5.6 8.5.6 11 0" />
      <path d="M9.5 2.5c-1.2 1.8-.8 3.2.2 4.5 1.2 1.6 1.2 2.8-.5 4.2" />
      <path d="M14 2c-1.2 1.8-.8 3.2.2 4.5 1.2 1.6 1.2 2.8-.5 4.2" />
      <path d="M5 14c.8 1.6 3.5 2.5 7 2.5s6.2-.9 7-2.5c0 0-.8 4-7 4s-7-4-7-4z" />
      <path d="M17.5 14c1.8-.5 3-1.5 3-2.8 0-1.4-1.2-2.2-2.8-2.2" />
    </svg>
  );
}

export function SpringIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 2.8L3.8 7.5v9l8.2 4.7 8.2-4.7v-9L12 2.8z" />
      <path d="M12 7c-2.8 1.8-4.2 4.5-3 7.5 1 2.5 3.5 3.5 5.5 2.8 2.8-1 3.8-3.8 2.8-6.5-1-2-2.8-3-5.3-3.8z" />
      <path d="M9.5 13.5c1.8-.8 3.5-.6 4.8.4" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M6.8 9h5.4M9.5 9v7" />
      <path d="M14.2 15c.8.8 1.7 1 2.7.8.9-.2 1.4-.7 1.4-1.4 0-1.2-2.7-1-2.7-2.6 0-.8.6-1.4 1.5-1.6.9-.1 1.7.2 2.2.8" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
      <path d="M9.5 13.5c-.8 1.2-1.5 2.8-1.5 4.2 0 1.2.6 1.8 1.5 1.8 1.2 0 1.8-1.4 2-2.8" />
      <path d="M14.5 13.5c.8 1.2 1.5 2.8 1.5 4.2 0 1.2-.6 1.8-1.5 1.8-1.2 0-1.8-1.4-2-2.8" />
    </svg>
  );
}

export function RedisIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 3l8 4.2-8 4.2-8-4.2L12 3z" />
      <path d="M4 11.4l8 4.2 8-4.2" />
      <path d="M4 16.2l8 4.2 8-4.2" />
      <path d="M12 11.4v8.8" strokeDasharray="1.5 1.5" />
    </svg>
  );
}

export function DockerIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2.5" y="9.5" width="3" height="3" rx="0.5" />
      <rect x="6.5" y="9.5" width="3" height="3" rx="0.5" />
      <rect x="10.5" y="9.5" width="3" height="3" rx="0.5" />
      <rect x="6.5" y="5.5" width="3" height="3" rx="0.5" />
      <rect x="10.5" y="5.5" width="3" height="3" rx="0.5" />
      <rect x="14.5" y="9.5" width="3" height="3" rx="0.5" />
      <path d="M1.5 13.5c.5 4.5 4.5 7.5 11 7.5 7.5 0 10-3.5 10-7.5 0-1.5-.8-2.2-2.2-2.2-.6 0-1.2.2-1.8.6C17 9.5 14.5 9 14.5 9H1.5v4.5z" />
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="11" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M6 13a5 5 0 0 0 5-5" />
      <path d="M11 8h4.5" />
    </svg>
  );
}

export function RestApiIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M7 9l2.5 3L7 15" />
      <path d="M13 15h4" />
      <circle cx="15.5" cy="9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MicroservicesIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.5" />
      <rect x="15.5" y="2.5" width="6" height="6" rx="1.5" />
      <rect x="2.5" y="15.5" width="6" height="6" rx="1.5" />
      <rect x="15.5" y="15.5" width="6" height="6" rx="1.5" />
      <path d="M8.5 5.5h7" strokeDasharray="1.5 1.5" />
      <path d="M5.5 8.5v7" strokeDasharray="1.5 1.5" />
      <path d="M18.5 8.5v7" strokeDasharray="1.5 1.5" />
      <path d="M8.5 18.5h7" strokeDasharray="1.5 1.5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <circle cx="12" cy="12" r="10" fill="#000000" />
      <path d="M9.5 8v8M14.5 16l-5.2-7.5" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14.5 8v5" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function PythonIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path
        fill="#38bdf8"
        d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v1.4h3v.4H6.5S4 4.8 4 8c0 3.1 1.5 3 1.5 3h.9v-1.5c0-1.7 1.4-1.7 1.4-1.7h3.8c1.6 0 1.6-1.5 1.6-1.5V3.3S14.3 2 11.9 2zm-1.4 1.1a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z"
      />
      <path
        fill="#facc15"
        d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-1.4h-3v-.4h5.5s2.5.3 2.5-2.9c0-3.1-1.5-3-1.5-3h-.9v1.5c0 1.7-1.4 1.7-1.4 1.7h-3.8c-1.6 0-1.6 1.5-1.6 1.5v3.1s-.1 1.3 2.3 1.3zm1.4-1.1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z"
      />
    </svg>
  );
}

export function JupyterIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="2.2" fill="#f97316" />
      <path d="M4 10.5c1.8-3.5 5.5-5.5 9.5-5 2.5.3 4.5 1.5 6 3" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 13.5c-1.8 3.5-5.5 5.5-9.5 5-2.5-.3-4.5-1.5-6-3" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="6" cy="7" r="1.2" fill="#71717a" />
      <circle cx="18" cy="17" r="1.2" fill="#71717a" />
    </svg>
  );
}

export function PandasIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <rect x="5" y="4" width="2.5" height="16" rx="1.2" fill="#1e1b4b" stroke="#e0e7ff" strokeWidth="0.5" />
      <rect x="9.5" y="6" width="2.5" height="12" rx="1.2" fill="#ef4444" />
      <rect x="14" y="8" width="2.5" height="10" rx="1.2" fill="#facc15" />
      <rect x="18.5" y="5" width="2.5" height="14" rx="1.2" fill="#3b82f6" />
    </svg>
  );
}

export function HuggingFaceIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="9.5" fill="#facc15" />
      <circle cx="8.5" cy="10.5" r="1.3" fill="#18181b" />
      <circle cx="15.5" cy="10.5" r="1.3" fill="#18181b" />
      <path d="M8.5 14.5c1 1.5 2.2 2.2 3.5 2.2s2.5-.7 3.5-2.2" stroke="#18181b" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3.5 12c.5-1.8 2-3 3-2.5" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M20.5 12c-.5-1.8-2-3-3-2.5" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ScikitLearnIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="9" cy="12" r="5.5" fill="#f97316" />
      <circle cx="15" cy="12" r="5.5" fill="#0284c7" fillOpacity="0.85" />
      <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
    </svg>
  );
}

export function LangChainIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M9 17H7A5 5 0 0 1 7 7h2" stroke="#00d9ff" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" stroke="#22c55e" />
      <line x1="8" y1="12" x2="16" y2="12" stroke="#38bdf8" />
    </svg>
  );
}

export function PowerBiIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect x="4" y="11" width="3.5" height="9" rx="1" fill="#f59e0b" />
      <rect x="10.25" y="7" width="3.5" height="13" rx="1" fill="#eab308" />
      <rect x="16.5" y="3.5" width="3.5" height="16.5" rx="1" fill="#ca8a04" />
    </svg>
  );
}

export function PlotlyIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="5" cy="16" r="2" fill="#3b82f6" />
      <circle cx="10" cy="10" r="2" fill="#8b5cf6" />
      <circle cx="15" cy="14" r="2" fill="#6366f1" />
      <circle cx="20" cy="7" r="2" fill="#06b6d4" />
      <path d="M5 16l5-6 5 4 5-7" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MongoDbIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12 2C10.5 4.5 7 8 7 13.5c0 4 2.5 7.5 5 8.5 2.5-1 5-4.5 5-8.5 0-5.5-3.5-9-5-11.5z"
        fill="#22c55e"
      />
      <path d="M12 3v17" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function SupabaseIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path
        d="M13.2 2.5L3.8 14.2c-.5.6 0 1.5.8 1.5h7.1v5.8c0 .8 1.1 1.2 1.6.6l9.4-11.7c.5-.6 0-1.5-.8-1.5h-7.1V3.1c0-.8-1.1-1.2-1.6-.6z"
        fill="#3ecf8e"
      />
    </svg>
  );
}

export function XgBoostIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 17l6-6-6-6" />
      <path d="M12 19h8" />
      <circle cx="18" cy="7" r="2.5" fill="#38bdf8" />
    </svg>
  );
}

export function FastApiIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="9.5" fill="#059669" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5" />
      <path d="M13 4l-5 8h4.5l-1.5 8 7-10h-5l1-6z" fill="#10b981" />
    </svg>
  );
}

export function NumPyIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" fill="#0284c7" fillOpacity="0.3" />
      <path d="M12 2v9l8 4.5" />
      <path d="M12 11l-8-4.5" />
      <circle cx="12" cy="11" r="1.5" fill="#ffffff" />
    </svg>
  );
}

export function PhpIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="6" stroke="#818cf8" />
      <path d="M8 10v4M8 10h2a1.5 1.5 0 0 1 0 3H8" stroke="#818cf8" strokeWidth="1.8" />
      <path d="M12 10v4M12 12h2" stroke="#818cf8" strokeWidth="1.8" />
      <path d="M16 10v4M16 10h2a1.5 1.5 0 0 1 0 3h-2" stroke="#818cf8" strokeWidth="1.8" />
    </svg>
  );
}

export function LaravelIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path
        fill="#ef4444"
        d="M12 2.5l7.5 4.3v8.6L12 19.8l-7.5-4.4V6.8L12 2.5zm0 2.3L6.5 8.3v6.4L12 17.5l5.5-2.8V8.3L12 4.8z"
      />
      <path fill="#ef4444" d="M12 7.2l3.8 2.2v4.4L12 16l-3.8-2.2V9.4L12 7.2z" />
    </svg>
  );
}

export function MySqlIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 16c2-4 6-9 12-7 3 1 4 4 4 7 0 2-3 3-8 2" stroke="#00758f" strokeWidth="1.8" />
      <path d="M12 12c-2 0-3 2-3 4" stroke="#f29111" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="1" fill="#00758f" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path
        d="M6 12c1.5-3 3.5-4 6-3 2 .8 2.8 2 4.5 2 2.5 0 4-1.5 5.5-4.5-1.5 3-3.5 4-6 3-2-.8-2.8-2-4.5-2-2.5 0-4 1.5-5.5 4.5z"
        fill="#38bdf8"
        stroke="#38bdf8"
      />
      <path
        d="M2 17c1.5-3 3.5-4 6-3 2 .8 2.8 2 4.5 2 2.5 0 4-1.5 5.5-4.5-1.5 3-3.5 4-6 3-2-.8-2.8-2-4.5-2-2.5 0-4 1.5-5.5 4.5z"
        fill="#0284c7"
        stroke="#0284c7"
      />
    </svg>
  );
}

export function SunIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function MoonIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

