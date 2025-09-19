/*
 * Jony Ive-Inspired Component Library
 * Minimal, purposeful, and beautifully crafted
 * Each component serves a single purpose with absolute clarity
 */
"use client";
import React, { ReactNode, ElementType, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, FormHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
type HeadingProps = {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
} & HTMLAttributes<HTMLHeadingElement>;
/* === LAYOUT COMPONENTS === */
export const Container = ({
  children,
  className,
  size = "default",
  ...props
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "default" | "lg" | "xl" | "full";
} & HTMLAttributes<HTMLDivElement>) => {
  const sizes = {
    sm: "max-w-3xl",
    default: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };
  return (
    <div className={cn("container mx-auto px-6 md:px-8", sizes[size], className)} {...props}>
      {children}
    </div>
  );
};
export const Section = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) => (
  <section className={cn("section", className)} {...props}>
    <Container>{children}</Container>
  </section>
);
export const Grid = ({
  children,
  className,
  cols = 1,
  gap = 6,
  ...props
}: {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 2 | 4 | 6 | 8;
} & HTMLAttributes<HTMLDivElement>) => {
  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
  };
  const gapClass = {
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8"
  };
  return (
    <div className={cn("grid", colsClass[cols], gapClass[gap], className)} {...props}>
      {children}
    </div>
  );
};
export const Flex = ({
  children,
  className,
  direction = "row",
  align = "start",
  justify = "start",
  gap = 4,
  wrap = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  direction?: "row" | "col";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: 0 | 2 | 4 | 6 | 8;
  wrap?: boolean;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex",
        direction === "col" && "flex-col",
        {
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
          "justify-start": justify === "start",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-between": justify === "between",
          "justify-around": justify === "around",
          "justify-evenly": justify === "evenly",
        },
        gap > 0 && `gap-${gap}`,
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
/* === TYPOGRAPHY === */
export const H1 = ({
  children,
  className,
  gradient = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
} & HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      "hero-title",
      gradient && "gradient-text",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);
export const H2 = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("text-4xl md:text-5xl font-semibold", className)} {...props}>
    {children}
  </h2>
);
export const H3 = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl md:text-3xl font-semibold", className)} {...props}>
    {children}
  </h3>
);
export const H4 = ({ children, className = "", gradient = false, ...props }: HeadingProps) => (
  <h4
    className={cn(
      "text-lg md:text-xl font-medium tracking-tight",
      gradient && "gradient-text-accent",
      className
    )}
    {...props}
  >
    {children}
  </h4>
);
export const Text = ({
  children,
  className,
  size = "base",
  color = "secondary",
  weight = "regular",
  ...props
}: {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  color?: "primary" | "secondary" | "muted" | "accent";
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
} & HTMLAttributes<HTMLParagraphElement>) => {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl"
  };
  const colors = {
    primary: "text-white",
    secondary: "text-gray-300",
    muted: "text-gray-500",
    accent: "text-[]"
  };
  const weights = {
    light: "font-light",
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  };
  return (
    <p
      className={cn(
        sizes[size],
        colors[color],
        weights[weight],
        "leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
/* === INTERACTIVE COMPONENTS === */
export const Button = ({
  children,
  className,
  variant = "primary",
  size = "default",
  as = "button",
  href,
  loading = false,
  icon,
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "default" | "lg";
  as?: ElementType;
  href?: string;
  loading?: boolean;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const Component = href ? Link : as;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    danger: "bg-[] hover:bg-red-600 text-white"
  };
  const sizes = {
    sm: "btn-sm",
    default: "btn",
    lg: "btn-lg"
  };
  const buttonProps = href ? { href } : props;
  return (
    <Component
      className={cn(
        sizes[size],
        variants[variant],
        loading && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={loading || props.disabled}
      {...buttonProps}
    >
      {loading ? (
        <div  />
      ) : icon ? (
        <span >{icon}</span>
      ) : null}
      {children}
    </Component>
  );
};
export const Input = ({
  className,
  label,
  error,
  ...props
}: {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) => (
  <div >
    {label && <label >{label}</label>}
    <input
      className={cn(
        "input",
        error && "border-[]",
        className
      )}
      {...props}
    />
    {error && <Text size="sm" color="muted" >{error}</Text>}
  </div>
);
export const Textarea = ({
  className,
  label,
  error,
  ...props
}: {
  label?: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <div >
    {label && <label >{label}</label>}
    <textarea
      className={cn(
        "input min-h-[120px] resize-none",
        error && "border-[]",
        className
      )}
      {...props}
    />
    {error && <Text size="sm" color="muted" >{error}</Text>}
  </div>
);
export const Select = ({
  className,
  label,
  error,
  children,
  ...props
}: {
  label?: string;
  error?: string;
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>) => (
  <div >
    {label && <label >{label}</label>}
    <select
      className={cn(
        "input appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDJMNiA3TDExIDIiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-[right_1rem_center] bg-no-repeat",
        error && "border-[]",
        className
      )}
      {...props}
    >
      {children}
    </select>
    {error && <Text size="sm" color="muted" >{error}</Text>}
  </div>
);
/* === DISPLAY COMPONENTS === */
export const Card = ({
  children,
  className,
  glass = false,
  hover = true,
  padding = true,
  ...props
}: {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  padding?: boolean;
} & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      glass ? "card-glass" : "card",
      hover && "hover-lift",
      !padding && "!p-0",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
export const Badge = ({
  children,
  className,
  variant = "default",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "success" | "warning" | "error";
} & HTMLAttributes<HTMLSpanElement>) => {
  const variants = {
    default: "badge",
    accent: "badge-accent",
    success: "bg-[] bg-opacity-20 text-[] border-[]",
    warning: "bg-[] bg-opacity-20 text-[] border-[]",
    error: "bg-[] bg-opacity-20 text-[] border-[]"
  };
  return (
    <span className={cn(variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
export const Divider = ({
  className,
  orientation = "horizontal",
  ...props
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
} & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      orientation === "horizontal"
        ? "w-full h-px bg-gray-800"
        : "w-px h-full bg-gray-800",
      className
    )}
    {...props}
  />
);
/* === FEEDBACK COMPONENTS === */
export const Spinner = ({
  className,
  size = "default",
  ...props
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
} & HTMLAttributes<HTMLDivElement>) => {
  const sizes = {
    sm: "w-4 h-4",
    default: "w-8 h-8",
    lg: "w-12 h-12"
  };
  return (
    <div className={cn("spinner", sizes[size], className)} {...props} />
  );
};
export const Alert = ({
  children,
  className,
  variant = "info",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "info" | "success" | "warning" | "error";
} & HTMLAttributes<HTMLDivElement>) => {
  const variants = {
    info: "bg-[] bg-opacity-10 border-[] text-[]",
    success: "bg-[] bg-opacity-10 border-[] text-[]",
    warning: "bg-[] bg-opacity-10 border-[] text-[]",
    error: "bg-[] bg-opacity-10 border-[] text-[]"
  };
  return (
    <div
      className={cn(
        "p-4 rounded-lg border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
/* === NAVIGATION === */
export const Nav = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) => (
  <nav className={cn("nav glass-dark border-b border-gray-900", className)} {...props}>
    <Container>
      <Flex align="center" justify="between">
        {children}
      </Flex>
    </Container>
  </nav>
);
export const NavLink = ({
  children,
  className,
  active = false,
  href,
  ...props
}: {
  children: ReactNode;
  className?: string;
  active?: boolean;
  href: string;
} & HTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={href}
    className={cn(
      "nav-link",
      active && "active",
      className
    )}
    {...props}
  >
    {children}
  </Link>
);
/* === FORM === */
export const Form = ({
  children,
  className,
  onSubmit,
  ...props
}: {
  children: ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
} & FormHTMLAttributes<HTMLFormElement>) => (
  <form
    className={cn("space-y-6", className)}
    onSubmit={onSubmit}
    {...props}
  >
    {children}
  </form>
);
export const FormGroup = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-2", className)} {...props}>
    {children}
  </div>
);
export const Checkbox = ({
  className,
  label,
  error,
  ...props
}: {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) => (
  <div >
    <input
      type="checkbox"
      className={cn(
        "w-4 h-4 rounded border border-gray-700 bg-gray-800 text-[] focus:ring-[] focus:ring-2",
        error && "border-[]",
        className
      )}
      {...props}
    />
    {label && <label >{label}</label>}
    {error && <Text size="sm" color="muted" >{error}</Text>}
  </div>
);
/* === SPECIAL EFFECTS === */
export const GlowOrb = ({
  className,
  color = "accent",
  size = "default",
  ...props
}: {
  className?: string;
  color?: "accent" | "white" | "purple";
  size?: "sm" | "default" | "lg";
} & HTMLAttributes<HTMLDivElement>) => {
  const colors = {
    accent: "bg-[]",
    white: "bg-white",
    purple: "bg-purple-500"
  };
  const sizes = {
    sm: "w-32 h-32",
    default: "w-64 h-64",
    lg: "w-96 h-96"
  };
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-20 animate-pulse-glow",
        colors[color],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
export const Noise = ({
  className,
  opacity = 0.02,
  ...props
}: {
  className?: string;
  opacity?: number;
} & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("fixed inset-0 pointer-events-none z-50", className)}
    style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' filter='url(%23noise)' /%3E%3C/svg%3E")`
    }}
    {...props}
  />
);