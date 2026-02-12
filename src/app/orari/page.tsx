import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { contatti, orariImages } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Orari",
  description: "Consulta gli orari delle lezioni di YogaGea a.s.d. a Piacenza per l'anno 2025/2026.",
};

export default function OrariPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
          alt="Orari delle lezioni"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/70" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-semibold">
              Orari
            </h1>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-[2px] bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold text-charcoal mb-4">
              yogagea a.s.d.
            </h2>
            <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Per partecipare alle classi in sala è obbligatorio, secondo normativa CONI,
              presentare un certificato medico di sana e robusta costituzione per attività
              sportiva non agonistica con ECG a riposo.
            </p>
            <p className="mt-4 text-charcoal-light">
              Per diventare nostro socio iscriviti tramite il nostro modulo di{" "}
              <Link href="/iscrizione" className="text-terra font-medium hover:underline">
                Iscrizione Online
              </Link>{" "}
              oppure contattaci tramite il nostro indirizzo mail{" "}
              <a href={`mailto:${contatti.email}`} className="text-terra font-medium hover:underline">
                {contatti.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-charcoal-light/70">
              Per info contatta il {contatti.telefonoDisplay} o seguici su Instagram:{" "}
              <a
                href={contatti.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terra hover:underline"
              >
                yogagea_asd
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Orari Images */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Orari 2025/2026" subtitle="Clicca sulle immagini per ingrandire" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {orariImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a href={img} target="_blank" rel="noopener noreferrer">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white p-2">
                    <Image
                      src={img}
                      alt={`Orari YogaGea ${i + 1}`}
                      width={980}
                      height={1225}
                      className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Vuoi unirti a noi?
            </h2>
            <Link
              href="/iscrizione"
              className="inline-block bg-terra text-white px-10 py-4 rounded-full font-medium hover:bg-terra-dark transition-all duration-300 hover:shadow-lg text-lg"
            >
              Iscrizione Online
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
