"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { Button, IconButton } from "./ui";
interface NavigationProps {
  variant?: "landing" | "app";
  user?: any;
  transparent?: boolean;
}
export default function Navigation({
  variant = "landing",
  user = null,
  transparent = false
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const landingLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const appLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/campaigns", label: "Campaigns" },
    { href: "/templates", label: "Templates" },
    { href: "/api-keys", label: "API" },
    { href: "/billing", label: "Billing" },
  ];
  const links = variant === "app" ? appLinks : landingLinks;
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !transparent
          ? "bg-black/80 backdrop-blur-2xl border-b border-gray-800/50 shadow-2xl"
          : "bg-transparent",
        "h-16"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="sm" showText={true} />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive(link.href)
                    ? "text-white bg-gray-800/50"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {variant === "landing" ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  href="/auth/login"
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href="/auth/signup"
                >
                  Get Started →
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                {user && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-semibold text-gray-300 border border-gray-700">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-400">
                      {user.email}
                    </span>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  href="/auth/login"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <IconButton
              variant="ghost"
              size="default"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-gray-800 animate-slide-down">
          <div className="px-6 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive(link.href)
                    ? "text-white bg-gray-800/50"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-800 space-y-2">
              {variant === "landing" ? (
                <>
                  <Button
                    variant="ghost"
                    size="default"
                    href="/auth/login"
                    fullWidth
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    size="default"
                    href="/auth/signup"
                    fullWidth
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started →
                  </Button>
                </>
              ) : (
                <>
                  {user && (
                    <div className="flex items-center gap-3 px-4 py-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-semibold text-gray-300 border border-gray-700">
                        {user.email?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm text-gray-400">
                        {user.email}
                      </span>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="default"
                    href="/auth/login"
                    fullWidth
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Out
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}