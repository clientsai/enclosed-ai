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
    sm: { icon: "w-8 h-8", text: "text-xl" },
    md: { icon: "w-10 h-10", text: "text-2xl" },
    lg: { icon: "w-12 h-12", text: "text-3xl" },
  };
  const LogoContent = () => (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Minimalist geometric logo - inspired by Apple's simplicity */}
      <div className={cn("relative", sizes[size].icon)}>
        {/* Outer ring with gradient */}
        <div  />
        {/* Main shape */}
        <div >
          <div >
            {/* Inner icon - envelope with AI dot */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
            >
              {/* Envelope */}
              <path
                d="M3 8L12 14L21 8M3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V8M3 8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* AI dot */}
              <circle
                cx="18"
                cy="6"
                r="2"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
      {showText && (
        <span
          className={cn(
            "font-semibold tracking-tight gradient-text",
            sizes[size].text
          )}
        >
          Enclosed.AI
        </span>
      )}
    </div>
  );
  if (linkToHome) {
    return (
      <Link href="/" >
        <LogoContent />
      </Link>
    );
  }
  return <LogoContent />;
}