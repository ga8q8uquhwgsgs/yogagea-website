"use client";

import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  light,
  align = "center",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left", className)}>
      <h2
        className={cn(
          "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-4 flex", align === "center" ? "justify-center" : "justify-start")}>
        <div className={cn("w-16 h-[2px]", light ? "bg-white/40" : "bg-terra")} />
      </div>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-charcoal-light"
          )}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
