"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  linkToHome?: boolean;
  className?: string;
}

export default function Logo({
  size = "md",
  showText = true,
  linkToHome = true,
  className = "",
}: LogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg font-semibold" },
    md: { icon: "w-10 h-10", text: "text-xl font-semibold" },
    lg: { icon: "w-12 h-12", text: "text-2xl font-bold" },
  };

  const LogoContent = () => (
    <div className={cn("flex items-center gap-3 group", className)}>
      {/* Premium minimalist logo with glass morphism */}
      <div className={cn("relative", sizes[size].icon)}>
        {/* Gradient glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

        {/* Glass container */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 to-transparent" />

          {/* Premium icon design */}
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              className="w-[60%] h-[60%]"
              viewBox="0 0 24 24"
              fill="none"
            >
              {/* Envelope with subtle gradient */}
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Main envelope path */}
              <path
                d="M3 8L12 14L21 8M3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V8M3 8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8"
                stroke="url(#logoGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:filter group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.5)] transition-all duration-300"
              />

              {/* AI indicator with pulse animation */}
              <circle
                cx="18"
                cy="6"
                r="2"
                fill="url(#logoGradient)"
                className="animate-pulse-glow"
              />

              {/* Inner AI symbol */}
              <circle
                cx="18"
                cy="6"
                r="1"
                fill="white"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent",
              sizes[size].text,
              "group-hover:from-white group-hover:to-gray-100 transition-all duration-300"
            )}
          >
            Enclosed
          </span>
          {size !== "sm" && (
            <span className="text-xs text-gray-500 font-medium tracking-widest uppercase -mt-1">
              AI Platform
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        href="/"
        className="inline-flex transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
      >
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}