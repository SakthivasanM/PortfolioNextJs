import React from "react";

interface MsvLogoProps {
  size?: number;
  className?: string;
  showGlow?: boolean;
}

export default function MsvLogo({
  size = 36,
  className = "",
  showGlow = true,
}: MsvLogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-xl flex-shrink-0 group-hover:scale-105 transition-all duration-300 ${className}`}
    >
      {/* Ambient micro-glow */}
      {showGlow && (
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-xl blur-sm opacity-60 group-hover:opacity-90 transition-opacity -z-10" />
      )}

      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-primary/25"
      >
        <defs>
          {/* Base radiant badge gradient */}
          <linearGradient id="msvBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="48%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Border glass highlight gradient */}
          <linearGradient id="msvBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
          </linearGradient>

          {/* Text fill gradient */}
          <linearGradient id="msvTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>

          {/* Cyan accent glow */}
          <radialGradient id="msvCyanAura" cx="80%" cy="15%" r="70%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Squircle Background Frame */}
        <rect width="40" height="40" rx="11" fill="url(#msvBgGrad)" />

        {/* Ambient top-right light pool */}
        <rect width="40" height="40" rx="11" fill="url(#msvCyanAura)" />

        {/* Crisp Border Highlight */}
        <rect
          x="0.75"
          y="0.75"
          width="38.5"
          height="38.5"
          rx="10.25"
          stroke="url(#msvBorderGrad)"
          strokeWidth="1.2"
        />

        {/* Subtle glass reflection highlight on upper curve */}
        <path
          d="M 6 12 C 14 6, 26 6, 34 12"
          stroke="#ffffff"
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />

        {/* Monogram MSV Typography */}
        <text
          x="20"
          y="25.5"
          textAnchor="middle"
          fill="url(#msvTextGrad)"
          fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif"
          fontWeight="900"
          fontSize="13"
          letterSpacing="-0.5px"
          style={{
            filter: "drop-shadow(0 1.5px 2px rgba(15, 23, 42, 0.45))",
          }}
        >
          MSV
        </text>

        {/* Micro Tech Dot Accent (Cyan) */}
        <circle cx="33" cy="24" r="1.3" fill="#38bdf8" />
      </svg>
    </div>
  );
}
