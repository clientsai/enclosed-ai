/*
 * Jony Ive-Inspired Component Library
 * Minimal, purposeful, and beautifully crafted
 * Each component serves a single purpose with absolute clarity
 */
"use client";
import React, { ReactNode, ElementType, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, FormHTMLAttributes, useState, useEffect } from "react";
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
    <div className={cn("w-full mx-auto px-6 md:px-8 lg:px-12", sizes[size], className)} {...props}>
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
  <section className={cn("section w-full", className)} {...props}>
    {children}
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
        "flex w-full",
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
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  color?: "primary" | "secondary" | "muted" | "accent" | "success" | "warning" | "error";
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
} & HTMLAttributes<HTMLParagraphElement>) => {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl"
  };
  const colors = {
    primary: "text-white",
    secondary: "text-gray-300",
    muted: "text-gray-500",
    accent: "text-blue-500",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400"
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
  iconPosition = "left",
  fullWidth = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline" | "link";
  size?: "sm" | "default" | "lg";
  as?: ElementType;
  href?: string;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const Component = href ? Link : as;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline: "border-2 border-gray-700 hover:bg-gray-800 text-white",
    link: "text-blue-500 hover:text-blue-400 underline-offset-4 hover:underline"
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
        fullWidth && "w-full",
        className
      )}
      disabled={loading || props.disabled}
      {...buttonProps}
    >
      {loading ? (
        <div className="spinner w-4 h-4" />
      ) : icon && iconPosition === "left" ? (
        <span className="inline-flex">{icon}</span>
      ) : null}
      {children}
      {!loading && icon && iconPosition === "right" ? (
        <span className="inline-flex">{icon}</span>
      ) : null}
    </Component>
  );
};
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
  label?: string;
  error?: string;
  helper?: string;
  prefix?: any;
  suffix?: any;
}
export const Input = ({
  className,
  label,
  error,
  helper,
  prefix,
  suffix,
  ...props
}: InputProps) => (
  <div className="space-y-2">
    {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
    <div className="relative">
      {prefix && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {prefix}
        </div>
      )}
      <input
        className={cn(
          "input",
          error && "border-red-500 focus:border-red-500",
          prefix && "pl-10",
          suffix && "pr-10",
          className
        )}
        {...props}
      />
      {suffix && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          {suffix}
        </div>
      )}
    </div>
    {(error || helper) && (
      <Text size="sm" color={error ? "error" : "muted"} className="mt-1">
        {error || helper}
      </Text>
    )}
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
  <div className="space-y-2">
    {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
    <textarea
      className={cn(
        "input min-h-[120px] resize-none",
        error && "border-red-500",
        className
      )}
      {...props}
    />
    {error && <Text size="sm" color="error" className="mt-1">{error}</Text>}
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
  <div className="space-y-2">
    {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
    <select
      className={cn(
        "input appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDJMNiA3TDExIDIiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-[right_1rem_center] bg-no-repeat",
        error && "border-red-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
    {error && <Text size="sm" color="error" className="mt-1">{error}</Text>}
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
  pulse = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "success" | "warning" | "error";
  pulse?: boolean;
} & HTMLAttributes<HTMLSpanElement>) => {
  const variants = {
    default: "badge",
    accent: "badge-accent",
    success: "bg-green-500 bg-opacity-20 text-green-400 border-green-500/30",
    warning: "bg-yellow-500 bg-opacity-20 text-yellow-400 border-yellow-500/30",
    error: "bg-red-500 bg-opacity-20 text-red-400 border-red-500/30"
  };
  return (
    <span className={cn(variants[variant], pulse && "animate-pulse-glow", className)} {...props}>
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
  icon,
  dismissible = false,
  onDismiss,
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "info" | "success" | "warning" | "error";
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
} & HTMLAttributes<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(true);

  const variants = {
    info: "bg-blue-500 bg-opacity-10 border-blue-500/30 text-blue-400",
    success: "bg-green-500 bg-opacity-10 border-green-500/30 text-green-400",
    warning: "bg-yellow-500 bg-opacity-10 border-yellow-500/30 text-yellow-400",
    error: "bg-red-500 bg-opacity-10 border-red-500/30 text-red-400"
  };

  const icons = {
    info: "ℹ️",
    success: "✓",
    warning: "⚠️",
    error: "✕"
  };

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <div
      className={cn(
        "p-4 rounded-lg border flex items-start gap-3 animate-fade-in",
        variants[variant],
        className
      )}
      {...props}
    >
      {(icon || icons[variant]) && (
        <span className="flex-shrink-0">{icon || icons[variant]}</span>
      )}
      <div className="flex-1">{children}</div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
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
    href={href as any}
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
  label?: any;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) => (
  <div className="flex items-start gap-3">
    <input
      type="checkbox"
      className={cn(
        "w-4 h-4 rounded border border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-2",
        error && "border-red-500",
        className
      )}
      {...props}
    />
    {label && <label className="text-sm font-medium text-gray-300">{label}</label>}
    {error && <Text size="sm" color="error" className="mt-1">{error}</Text>}
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
    accent: "bg-blue-500",
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

/* === ADDITIONAL PREMIUM COMPONENTS === */

export const ProgressBar = ({
  value = 0,
  max = 100,
  className,
  variant = "default",
  animated = true,
  ...props
}: {
  value?: number;
  max?: number;
  className?: string;
  variant?: "default" | "accent" | "success" | "warning" | "error";
  animated?: boolean;
} & HTMLAttributes<HTMLDivElement>) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const variants = {
    default: "bg-gray-600",
    accent: "bg-gradient-to-r from-blue-500 to-cyan-500",
    success: "bg-gradient-to-r from-green-500 to-emerald-500",
    warning: "bg-gradient-to-r from-yellow-500 to-amber-500",
    error: "bg-gradient-to-r from-red-500 to-pink-500"
  };

  return (
    <div className={cn("w-full h-2 bg-gray-800 rounded-full overflow-hidden", className)} {...props}>
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500 ease-out",
          variants[variant],
          animated && "shimmer"
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export const Tabs = ({
  children,
  defaultValue,
  className,
  onChange,
  ...props
}: {
  children: ReactNode;
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>) => {
  const [activeTab, setActiveTab] = useState(defaultValue || "");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div className={cn("tabs", className)} data-active={activeTab} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            activeTab,
            onTabChange: handleTabChange
          });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({
  children,
  className,
  activeTab,
  onTabChange,
  ...props
}: {
  children: ReactNode;
  className?: string;
  activeTab?: string;
  onTabChange?: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex gap-2 p-1 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800", className)} {...props}>
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          activeTab,
          onTabChange
        });
      }
      return child;
    })}
  </div>
);

export const TabsTrigger = ({
  children,
  value,
  className,
  activeTab,
  onTabChange,
  ...props
}: {
  children: ReactNode;
  value: string;
  className?: string;
  activeTab?: string;
  onTabChange?: (value: string) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const isActive = activeTab === value;

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all",
        isActive
          ? "bg-gray-800 text-white shadow-lg"
          : "text-gray-400 hover:text-white hover:bg-gray-800/50",
        className
      )}
      onClick={() => onTabChange?.(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({
  children,
  value,
  className,
  activeTab,
  ...props
}: {
  children: ReactNode;
  value: string;
  className?: string;
  activeTab?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  if (activeTab !== value) return null;

  return (
    <div className={cn("animate-fade-in mt-4", className)} {...props}>
      {children}
    </div>
  );
};

export const Avatar = ({
  src,
  alt = "Avatar",
  size = "default",
  className,
  fallback,
  ...props
}: {
  src?: string;
  alt?: string;
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
  fallback?: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    default: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg"
  };

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-semibold text-gray-300 border border-gray-700",
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        fallback || alt.charAt(0).toUpperCase()
      )}
    </div>
  );
};

export const Tooltip = ({
  children,
  content,
  className,
  position = "top",
  ...props
}: {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
} & HTMLAttributes<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

  return (
    <div
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-3 py-2 text-sm bg-gray-900 text-white rounded-lg shadow-xl whitespace-nowrap animate-fade-in",
            positions[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  className,
  label,
  ...props
}: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
} & HTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    className={cn(
      "relative inline-flex items-center gap-3",
      disabled && "opacity-50 cursor-not-allowed",
      className
    )}
    onClick={() => onChange?.(!checked)}
    {...props}
  >
    <div
      className={cn(
        "relative w-11 h-6 rounded-full transition-colors duration-200",
        checked ? "bg-blue-500" : "bg-gray-700"
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-200",
          checked && "translate-x-5"
        )}
      />
    </div>
    {label && <span className="text-sm font-medium">{label}</span>}
  </button>
);

export const Modal = ({
  children,
  open = false,
  onClose,
  className,
  ...props
}: {
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 animate-fade-in" {...props}>
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative h-full flex items-center justify-center p-4">
        <div
          className={cn(
            "relative max-w-lg w-full bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 p-6 animate-slide-up",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const Skeleton = ({
  className,
  variant = "default",
  ...props
}: {
  className?: string;
  variant?: "default" | "text" | "avatar" | "button";
} & HTMLAttributes<HTMLDivElement>) => {
  const variants = {
    default: "h-4 w-full",
    text: "h-4 w-3/4",
    avatar: "w-10 h-10 rounded-full",
    button: "h-10 w-24 rounded-full"
  };

  return (
    <div
      className={cn(
        "skeleton",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export const IconButton = ({
  children,
  className,
  variant = "ghost",
  size = "default",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "ghost" | "solid" | "outline";
  size?: "sm" | "default" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const sizes = {
    sm: "p-1.5",
    default: "p-2",
    lg: "p-3"
  };

  const variants = {
    ghost: "hover:bg-gray-800 text-gray-400 hover:text-white",
    solid: "bg-gray-800 hover:bg-gray-700 text-white",
    outline: "border border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white"
  };

  return (
    <button
      className={cn(
        "rounded-lg transition-all",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const DataTable = ({
  headers,
  data,
  className,
  ...props
}: {
  headers: string[];
  data: any[][];
  className?: string;
} & HTMLAttributes<HTMLTableElement>) => (
  <div className="w-full overflow-x-auto rounded-lg border border-gray-800">
    <table className={cn("w-full", className)} {...props}>
      <thead className="bg-gray-900/50 border-b border-gray-800">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-gray-800/30 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="px-6 py-4 text-sm text-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Breadcrumbs = ({
  items,
  className,
  separator = "/",
  ...props
}: {
  items: { label: string; href?: string }[];
  className?: string;
  separator?: ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <nav className={cn("flex items-center gap-2 text-sm", className)} {...props}>
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {item.href ? (
          <Link href={item.href as any} className="text-gray-400 hover:text-white transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-white font-medium">{item.label}</span>
        )}
        {i < items.length - 1 && (
          <span className="text-gray-600">{separator}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export const Metric = ({
  value,
  label,
  change,
  className,
  ...props
}: {
  value: string | number;
  label: string;
  change?: { value: number; type: "increase" | "decrease" };
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-2", className)} {...props}>
    <p className="text-sm font-medium text-gray-400">{label}</p>
    <div className="flex items-baseline gap-2">
      <p className="text-3xl font-bold text-white">{value}</p>
      {change && (
        <span
          className={cn(
            "text-sm font-medium px-2 py-0.5 rounded-full",
            change.type === "increase"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          )}
        >
          {change.type === "increase" ? "↑" : "↓"} {Math.abs(change.value)}%
        </span>
      )}
    </div>
  </div>
);
