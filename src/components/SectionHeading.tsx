"use client";

import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, className, light }: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("text-center mb-12 md:mb-16", className)}>
      <h2
        className={cn(
          "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className={cn("w-16 h-[2px]", light ? "bg-white/40" : "bg-terra")} />
      </div>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-2xl mx-auto",
            light ? "text-white/70" : "text-charcoal-light"
          )}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
