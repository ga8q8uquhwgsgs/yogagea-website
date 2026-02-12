import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { contatti, legal, sedi } from "@/data/siteData";
import { MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description: "Scopri la storia, lo scopo e le attività di YogaGea a.s.d., associazione sportiva dilettantistica dedicata allo yoga a Piacenza.",
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&q=80"
          alt="Chi siamo - YogaGea"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/70" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-semibold">
              Chi Siamo
            </h1>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-[2px] bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Cosa si fa */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-8">
              Cosa si fa a yogagea a.s.d.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none text-charcoal-light leading-relaxed space-y-4">
              <p>
                Yogagea è un&apos;associazione sportiva dilettantistica il cui scopo è la
                divulgazione della ginnastica per tutti e delle attività con o senza sovraccarichi e
                resistenze finalizzate alla salute e al fitness dell&apos;individuo e al suo benessere
                psicofisico attraverso la metodologia dello Yoga.
              </p>
              <p>
                Lo spirito associativo permea Yogagea a.s.d. che offre ai propri associati (tessera ASI) attività gratuite durante
                tutto l&apos;anno (lezioni per principianti, lezioni di hatha yoga, conferenze,
                lezioni all&apos;aperto nel periodo estivo, lezioni teoriche, laboratori condotti da
                insegnanti di scuole diverse, incontri settimanali di meditazione).
              </p>
              <p>
                Movimento, crescita ed entusiasmo caratterizzano Yogagea a.s.d. Qui la pratica è improntata
                sulla persona, sul lavoro fisico, sul dettaglio anatomico. A Yogagea è difficile
                annoiarsi: dalla ginnastica per tutti utilizzando la metodologia dell&apos;hatha yoga
                allo yoga fluido, dallo studio sul respiro alla meditazione.
              </p>
              <p>
                I nostri insegnanti sono tutti qualificati e capaci di dare colore alle lezioni grazie alle loro
                diverse modalità di insegnamento. Tutti condividono lo stesso fine: dare al
                praticante gli strumenti per conoscere sé stesso, nel corpo e nella mente. Portiamo a
                Piacenza insegnanti di fama nazionale e internazionale grazie a laboratori
                puntuali: crediamo nello scambio e nell&apos;apertura divulgativa!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quando nasce */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-8">
              Quando nasce l&apos;attività dell&apos;associazione
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-charcoal-light leading-relaxed text-lg">
              Le lezioni di Yogagea asd hanno l&apos;intento di offrire una pratica sportiva
              durante tutto l&apos;anno, utile all&apos;attività dei soci. L&apos;Associazione Sportiva
              Dilettantistica Yogagea è affiliata alla ASI n.EMI-PC0176 e registrata presso il
              CONI n. 277215.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Scopo */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-8">
              Qual è lo scopo di yogagea a.s.d.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none text-charcoal-light leading-relaxed space-y-4">
              <p>
                L&apos;associazione ha come scopo principale la pratica, lo studio, lo sviluppo e la
                divulgazione della ginnastica per tutti e dell&apos;attività di fitness grazie allo
                strumento delle discipline affini allo yoga (ginnastica per tutti e attività
                sportiva finalizzata alla salute e al fitness dell&apos;individuo) atte al benessere
                psicofisico della persona e non ha scopi di lucro.
              </p>
              <p>
                Lo yoga, come &quot;ginnastica&quot; sia fisica che &quot;mentale&quot;, è rivolto a coloro che intendano prendersi cura di corpo e
                spirito e la sua crescente diffusione deriva dai risultati effettivi ottenuti a
                partire dalla prima lezione. Riconoscere e usare correttamente il proprio corpo,
                riappropriarsi del proprio respiro, imparare a fermarsi e riposare la mente,
                sono capacità che alleniamo durante la pratica per poi poterle usare all&apos;occorrenza
                anche fuori dalla sala.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12">
            <div className="bg-sage/10 rounded-2xl p-8">
              <p className="text-sm text-charcoal-light mb-4">
                Per restare sempre aggiornati sulla vita sociale ci si può iscrivere alla
                newsletter inviando una mail a{" "}
                <a href={`mailto:${contatti.email}`} className="text-terra hover:underline">
                  {contatti.email}
                </a>
              </p>
              <p className="text-xs text-charcoal-light/60">
                *i dati sono trattati nel rispetto della normativa vigente in materia di privacy
                come da Reg UE 679/2016 in vigore dal 25 Maggio 2018*
              </p>
              <p className="text-xs text-charcoal-light/60 mt-4">
                {legal.codeConi}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Le Nostre Sedi */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Le Nostre Sedi" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sedi.map((sede, i) => (
              <ScrollReveal key={sede.nome} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow">
                  <MapPin className="text-terra mx-auto mb-4" size={32} />
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    {sede.nome}
                  </h3>
                  <p className="text-charcoal-light text-sm">{sede.indirizzo}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
