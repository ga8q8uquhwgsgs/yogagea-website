import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import OrariScheduleTabs from "@/components/OrariScheduleTabs";
import { contatti } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Orari",
  description: "Consulta gli orari delle lezioni di YogaGea a.s.d. a Piacenza per l'anno 2025/2026.",
};

export default function OrariPage() {
  return (
    <>
      <PageHero
        title="Orari"
        subtitle="Programmazione settimanale YogaGea a.s.d."
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
        compact
      />

      <OrariScheduleTabs />

      <section className="section-space bg-cream">
        <div className="site-container max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold text-charcoal mb-4">yogagea a.s.d.</h2>
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

      {/* CTA */}
      <section className="section-space bg-cream-dark/30">
        <div className="site-container max-w-4xl text-center">
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
