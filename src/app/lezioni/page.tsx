import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { lezioni } from "@/data/lezioni";

export const metadata: Metadata = {
  title: "Lezioni",
  description: "Scopri tutte le lezioni di yoga, pilates, meditazione e qi gong offerte da YogaGea a Piacenza.",
};

export default function LezioniPage() {
  return (
    <>
      <PageHero
        title="Le Nostre Lezioni"
        subtitle={`${lezioni.length} discipline per il tuo benessere psicofisico`}
        image="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&q=80"
      />

      {/* Grid lezioni */}
      <section className="section-space bg-cream">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {lezioni.map((lezione, i) => (
              <ScrollReveal key={lezione.slug} delay={i * 0.04}>
                <Link href={`/lezioni/${lezione.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={lezione.immagine}
                        alt={lezione.nome}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                      <span className="absolute bottom-3 left-4 text-white text-xs tracking-widest uppercase bg-terra/80 px-3 py-1 rounded-full">
                        {lezione.categoria}
                      </span>
                    </div>
                    <div className="p-6">
                      <h2 className="font-heading text-2xl font-semibold text-charcoal group-hover:text-terra transition-colors">
                        {lezione.nome}
                      </h2>
                      <p className="mt-3 text-sm text-charcoal-light line-clamp-4 leading-relaxed">
                        {lezione.descrizione}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm text-terra font-medium group-hover:gap-2 transition-all">
                        Leggi di più <ArrowRight size={14} />
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
