/* Premium Component Kit - Minimal and Luxurious */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* === SECTION PRIMITIVES === */

export const Section = ({
  children,
  className = "",
  as: Component = "section" as any,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}) => (
  <Component
    className={cn(
      "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      "py-16 md:py-20 lg:py-24",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Split = ({
  children,
  reverse = false,
  className = "",
  alignItems = "center",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  alignItems?: "start" | "center" | "end";
}) => (
  <div
    className={cn(
      "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
      alignItems === "start" && "items-start",
      alignItems === "center" && "items-center",
      alignItems === "end" && "items-end",
      reverse && "lg:flex-row-reverse",
      className
    )}
  >
    {children}
  </div>
);

export const Grid = ({
  children,
  columns = 3,
  className = "",
}: {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}) => (
  <div
    className={cn(
      "grid gap-8",
      columns === 2 && "grid-cols-1 md:grid-cols-2",
      columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      className
    )}
  >
    {children}
  </div>
);

export const Stack = ({
  children,
  gap = 4,
  className = "",
}: {
  children: React.ReactNode;
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  className?: string;
}) => {
  const gapClasses = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
  };

  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)}>
      {children}
    </div>
  );
};

export const Cluster = ({
  children,
  gap = 3,
  className = "",
  justify = "start",
}: {
  children: React.ReactNode;
  gap?: 1 | 2 | 3 | 4 | 5;
  justify?: "start" | "center" | "end" | "between";
  className?: string;
}) => {
  const gapClasses = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        gapClasses[gap],
        justify === "center" && "justify-center",
        justify === "end" && "justify-end",
        justify === "between" && "justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

/* === TYPOGRAPHY === */

export const Eyebrow = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "inline-flex items-center px-3 py-1.5",
      "bg-gray-100 text-gray-700",
      "rounded-full text-xs font-semibold",
      "uppercase tracking-wider",
      className
    )}
  >
    {children}
  </div>
);

export const Headline = ({
  level = 1,
  children,
  className = "",
  balance = true,
}: {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  balance?: boolean;
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClasses = {
    1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold",
    2: "text-3xl sm:text-4xl lg:text-5xl font-bold",
    3: "text-2xl sm:text-3xl lg:text-4xl font-bold",
    4: "text-xl sm:text-2xl lg:text-3xl font-semibold",
  };

  return (
    <Component
      className={cn(
        sizeClasses[level],
        "text-gray-900 leading-tight tracking-tight",
        balance && "text-balance",
        className
      )}
    >
      {children}
    </Component>
  );
};

export const Subhead = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "text-lg sm:text-xl text-gray-600 leading-relaxed",
      className
    )}
  >
    {children}
  </p>
);

export const Lead = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "text-lg sm:text-xl text-gray-900 leading-relaxed font-medium",
      className
    )}
  >
    {children}
  </p>
);

export const Prose = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "prose prose-gray max-w-none prose-lg",
      "prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight",
      "prose-p:text-gray-700 prose-p:leading-relaxed",
      "prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline",
      "prose-strong:font-semibold prose-strong:text-gray-900",
      "prose-code:text-blue-600 prose-code:bg-gray-100",
      "prose-code:px-1 prose-code:py-0.5 prose-code:rounded",
      "prose-pre:bg-gray-900 prose-pre:text-gray-100",
      "prose-blockquote:border-l-blue-600 prose-blockquote:text-gray-700",
      "prose-ul:list-disc prose-ol:list-decimal",
      className
    )}
  >
    {children}
  </div>
);

/* === UI COMPONENTS === */

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  as: Component = "button" as any,
  ...props
}: {
  variant?: "primary" | "ghost" | "soft";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}) => {
  const variantClasses = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md",
    ghost:
      "border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400",
    soft: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center",
        "font-semibold rounded-lg",
        "transition-all duration-200 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Card = ({
  children,
  className = "",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) => (
  <article
    className={cn(
      "bg-white rounded-xl border border-gray-200 overflow-hidden",
      hover &&
        "transition-all duration-200 ease-in-out hover:shadow-lg hover:border-gray-300 hover:-translate-y-1",
      className
    )}
  >
    {children}
  </article>
);

export const Badge = ({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  className?: string;
}) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5",
        "rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export const Callout = ({
  intent = "info",
  children,
  className = "",
}: {
  intent?: "info" | "success" | "warning" | "neutral";
  children: React.ReactNode;
  className?: string;
}) => {
  const intentClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    success: "bg-green-50 border-green-200 text-green-900",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
    neutral: "bg-gray-50 border-gray-200 text-gray-900",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-lg border-l-4",
        intentClasses[intent],
        className
      )}
    >
      {children}
    </div>
  );
};

export const Stat = ({
  value,
  label,
  delta,
  className = "",
}: {
  value: string | number;
  label: string;
  delta?: string;
  className?: string;
}) => (
  <div className={cn("text-center", className)}>
    <div className="text-3xl sm:text-4xl font-bold text-gray-900">
      {value}
    </div>
    <div className="text-sm text-gray-600 mt-1">
      {label}
    </div>
    {delta && (
      <div className="text-xs text-green-600 mt-2">
        {delta}
      </div>
    )}
  </div>
);

export const Testimonial = ({
  quote,
  author,
  role,
  company,
  avatar,
  className = "",
}: {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  className?: string;
}) => (
  <figure
    className={cn(
      "bg-white p-6 rounded-xl border border-gray-200",
      className
    )}
  >
    <blockquote className="mb-4">
      <p className="text-lg text-gray-900 leading-relaxed">
        "{quote}"
      </p>
    </blockquote>
    <figcaption className="flex items-center gap-3">
      {avatar && (
        <Image
          src={avatar}
          alt={author}
          width={48}
          height={48}
          className="rounded-full"
        />
      )}
      <div>
        <div className="font-semibold text-gray-900">
          {author}
        </div>
        {(role || company) && (
          <div className="text-sm text-gray-600">
            {role}
            {role && company && ", "}
            {company}
          </div>
        )}
      </div>
    </figcaption>
  </figure>
);

/* === MEDIA === */

export const Figure = ({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) => (
  <figure className={cn("space-y-2", className)}>
    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        loading={priority ? "eager" : "lazy"}
        priority={priority}
      />
    </div>
    {caption && (
      <figcaption className="text-sm text-gray-500 text-center">
        {caption}
      </figcaption>
    )}
  </figure>
);

/* === NAVIGATION === */

export const Tabs = ({
  items,
  defaultActive = 0,
  className = "",
}: {
  items: { label: string; content: React.ReactNode }[];
  defaultActive?: number;
  className?: string;
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultActive);

  return (
    <div className={cn("space-y-4", className)}>
      <div
        role="tablist"
        className="flex gap-1 border-b border-gray-200"
      >
        {items.map((item, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-base font-medium",
              "border-b-2 transition-colors duration-150",
              activeTab === index
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{items[activeTab]?.content}</div>
    </div>
  );
};

export const Accordion = ({
  items,
  className = "",
}: {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
}) => (
  <div className={cn("divide-y divide-gray-200", className)}>
    {items.map((item, index) => (
      <details key={index} className="group">
        <summary className="flex cursor-pointer items-center justify-between py-4 font-medium text-gray-900 hover:text-blue-600 transition-colors">
          {item.title}
          <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </summary>
        <div className="pb-4 text-gray-600">
          {item.content}
        </div>
      </details>
    ))}
  </div>
);

export const Steps = ({
  items,
  className = "",
}: {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
}) => (
  <ol className={cn("space-y-6", className)}>
    {items.map((item, index) => (
      <li key={index} className="flex gap-4">
        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white font-bold">
          {index + 1}
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-semibold text-base text-gray-900 mb-2">
            {item.title}
          </h3>
          <div className="text-gray-600">
            {item.content}
          </div>
        </div>
      </li>
    ))}
  </ol>
);

export const Timeline = ({
  items,
  className = "",
}: {
  items: { date: string; title: string; content: React.ReactNode }[];
  className?: string;
}) => (
  <div className={cn("space-y-6", className)}>
    {items.map((item, index) => (
      <div key={index} className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="h-3 w-3 rounded-full bg-gray-900" />
          {index < items.length - 1 && (
            <div className="flex-1 w-0.5 bg-gray-200 mt-2" />
          )}
        </div>
        <div className="flex-1 pb-6">
          <time className="text-sm text-gray-500">
            {item.date}
          </time>
          <h3 className="font-semibold text-gray-900 mt-1 mb-2">
            {item.title}
          </h3>
          <div className="text-gray-600">
            {item.content}
          </div>
        </div>
      </div>
    ))}
  </div>
);