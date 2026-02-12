import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { insegnanti } from "@/data/insegnanti";

export const metadata: Metadata = {
  title: "Insegnanti",
  description: "Conosci gli insegnanti qualificati di YogaGea a.s.d. a Piacenza: professionisti con anni di esperienza nello yoga, pilates e meditazione.",
};

export default function InsegnantiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1573590330530-7ed5765e8a63?w=1920&q=80"
          alt="I nostri insegnanti"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/70" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-semibold">
              I Nostri Insegnanti
            </h1>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-[2px] bg-white/40" />
            </div>
            <p className="mt-6 text-lg text-cream-dark/80 max-w-xl mx-auto">
              {insegnanti.length} professionisti qualificati al tuo servizio
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insegnanti.map((ins, i) => (
              <ScrollReveal key={ins.slug} delay={i * 0.05}>
                <Link href={`/insegnanti/${ins.slug}`} className="h-full">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative h-72 overflow-hidden flex-shrink-0">
                      <Image
                        src={ins.fotoBio}
                        alt={ins.nome}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="font-heading text-2xl font-semibold text-charcoal group-hover:text-terra transition-colors">
                        {ins.nome}
                      </h2>
                      {ins.qualifica && (
                        <p className="text-sm text-terra mt-1">{ins.qualifica}</p>
                      )}
                      <p className="mt-3 text-sm text-charcoal-light line-clamp-3 leading-relaxed flex-grow">
                        {ins.bio}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm text-terra font-medium group-hover:gap-2 transition-all">
                        Leggi la bio <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
