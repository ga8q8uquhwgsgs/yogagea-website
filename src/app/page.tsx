"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { lezioni } from "@/data/lezioni";
import { insegnanti } from "@/data/insegnanti";
import { contatti, sedi, orariImages } from "@/data/siteData";

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ========== HERO ========== */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80"
            alt="Yoga pratica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="text-cream-dark/80 text-sm tracking-[0.3em] uppercase">
              Yogagea a.s.d. · Piacenza
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold max-w-5xl leading-tight"
          >
            Un corpo flessibile
            <br />
            <span className="text-sage-light">+ una mente flessibile</span>
            <br />= benessere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-cream-dark/80 max-w-xl"
          >
            Inizia o continua a praticare con noi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/lezioni"
              className="bg-terra text-white px-8 py-4 rounded-full font-medium hover:bg-terra-dark transition-all duration-300 hover:shadow-xl hover:shadow-terra/20 flex items-center gap-2"
            >
              Scopri i Corsi <ArrowRight size={18} />
            </Link>
            <Link
              href="/iscrizione"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Iscrizione Online
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={28} className="text-white/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== ORARI ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Orari" subtitle="yogagea a.s.d." />

          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-charcoal-light leading-relaxed">
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
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orariImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src={img}
                    alt={`Orari YogaGea ${i + 1}`}
                    width={980}
                    height={1225}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LEZIONI ========== */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Lezioni" subtitle="Scopri tutte le nostre discipline" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {lezioni.map((lezione, i) => (
              <ScrollReveal key={lezione.slug} delay={i * 0.05}>
                <Link href={`/lezioni/${lezione.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={lezione.immagine}
                        alt={lezione.nome}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                      <span className="absolute bottom-3 left-4 text-white text-xs tracking-widest uppercase bg-terra/80 px-3 py-1 rounded-full">
                        {lezione.categoria}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-charcoal group-hover:text-terra transition-colors">
                        {lezione.nome}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal-light line-clamp-3 leading-relaxed">
                        {lezione.descrizione}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm text-terra font-medium group-hover:gap-2 transition-all">
                        Scopri di più <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INSEGNANTI ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Insegnanti" subtitle="Professionisti qualificati con anni di esperienza" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
            {insegnanti.map((ins, i) => (
              <ScrollReveal key={ins.slug} delay={i * 0.05}>
                <Link href={`/insegnanti/${ins.slug}`}>
                  <div className="group text-center">
                    <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 ring-2 ring-transparent group-hover:ring-terra">
                      <Image
                        src={ins.foto}
                        alt={ins.nome}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal group-hover:text-terra transition-colors">
                      {ins.nome}
                    </h3>
                    {ins.qualifica && (
                      <p className="text-xs text-charcoal-light mt-1">{ins.qualifica}</p>
                    )}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/insegnanti"
              className="inline-flex items-center gap-2 text-terra font-medium hover:gap-3 transition-all"
            >
              Scopri tutti gli insegnanti <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== MINDFULNESS ========== */}
      <section className="py-20 md:py-28 bg-sage/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-charcoal">
              Mindfulness
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-[2px] bg-sage" />
            </div>
            <p className="mt-8 text-xl text-charcoal-light max-w-2xl mx-auto">
              Per attività dedicate alla Mindfulness visita il sito
            </p>
            <a
              href={contatti.mindfulness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-sage text-white px-8 py-4 rounded-full font-medium hover:bg-sage/80 transition-all duration-300 hover:shadow-lg"
            >
              robimorisi.it <ExternalLink size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== CONTATTI ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Contatti" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                <h3 className="font-heading text-2xl font-semibold text-charcoal mb-8">
                  Dove Siamo
                </h3>
              </ScrollReveal>
              <div className="space-y-6">
                {sedi.map((sede, i) => (
                  <ScrollReveal key={sede.nome} delay={i * 0.1}>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <MapPin className="text-terra shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-charcoal">{sede.nome}</h4>
                        <p className="text-sm text-charcoal-light mt-1">{sede.indirizzo}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.2} className="mt-8">
                <h3 className="font-heading text-2xl font-semibold text-charcoal mb-6">
                  Per Info
                </h3>
                <div className="space-y-4">
                  <a href={`tel:${contatti.telefono}`} className="flex items-center gap-3 text-charcoal-light hover:text-terra transition-colors">
                    <Phone size={18} />
                    <span>{contatti.telefonoDisplay}</span>
                  </a>
                  <a href={`mailto:${contatti.email}`} className="flex items-center gap-3 text-charcoal-light hover:text-terra transition-colors">
                    <Mail size={18} />
                    <span>{contatti.email}</span>
                  </a>
                </div>

                <div className="flex gap-4 mt-6">
                  <a href={contatti.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-terra hover:text-white transition-all text-charcoal-light">
                    <Facebook size={18} />
                  </a>
                  <a href={contatti.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-terra hover:text-white transition-all text-charcoal-light">
                    <Instagram size={18} />
                  </a>
                  <a href={contatti.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-terra hover:text-white transition-all text-charcoal-light">
                    <Youtube size={18} />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-semibold text-charcoal mb-6">
                  Scrivici
                </h3>
                <p className="text-sm text-charcoal-light mb-6">
                  Oppure usa il seguente modulo
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-cream/50 focus:outline-none focus:border-terra focus:ring-1 focus:ring-terra/20 transition-all text-sm" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-cream/50 focus:outline-none focus:border-terra focus:ring-1 focus:ring-terra/20 transition-all text-sm" />
                  </div>
                  <textarea placeholder="Messaggio" rows={5} className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-cream/50 focus:outline-none focus:border-terra focus:ring-1 focus:ring-terra/20 transition-all text-sm resize-none" />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-terra" />
                    <span className="text-xs text-charcoal-light">
                      Acconsento al trattamento dei miei dati personali secondo l&apos;
                      <Link href="/privacy-policy" className="text-terra hover:underline">
                        Informativa sulla privacy
                      </Link>.
                    </span>
                  </label>
                  <button type="submit" className="w-full bg-terra text-white py-3 rounded-full font-medium hover:bg-terra-dark transition-all duration-300 hover:shadow-lg">
                    Invia
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== CTA ISCRIZIONE ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80"
          alt="Yoga al tramonto"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
              Inizia il tuo percorso
            </h2>
            <p className="mt-6 text-lg text-cream-dark/80 max-w-2xl mx-auto">
              Unisciti a YogaGea e scopri il benessere che nasce dalla pratica. Corpo, mente e spirito in armonia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iscrizione" className="bg-terra text-white px-10 py-4 rounded-full font-medium hover:bg-terra-dark transition-all duration-300 hover:shadow-xl hover:shadow-terra/30 text-lg">
                Iscrizione Online
              </Link>
              <Link href="/chi-siamo" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-lg">
                Chi Siamo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
