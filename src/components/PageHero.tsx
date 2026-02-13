import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  compact?: boolean;
  imageClassName?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  compact = false,
  imageClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        compact ? "h-[40vh] min-h-[300px] md:h-[44vh] md:min-h-[340px]" : "h-[48vh] min-h-[360px] md:h-[52vh] md:min-h-[420px]"
      )}
    >
      <Image src={image} alt={title} fill className={cn("object-cover", imageClassName)} priority />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/55 to-charcoal/80" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/35 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-10 text-center sm:px-6 md:pb-14 lg:px-8">
        <div className="w-full">
          <h1 className="font-heading text-4xl font-semibold text-white md:text-6xl lg:text-7xl">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-sm text-cream-dark/85 md:mt-5 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}