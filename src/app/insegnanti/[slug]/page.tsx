import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";
import { insegnanti } from "@/data/insegnanti";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return insegnanti.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const ins = insegnanti.find((i) => i.slug === slug);
    if (!ins) return { title: "Insegnante non trovato" };
    return {
      title: ins.nome,
      description: ins.bio.slice(0, 160),
    };
  });
}

export default async function InsegnanteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ins = insegnanti.find((i) => i.slug === slug);
  if (!ins) notFound();

  return (
    <>
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/insegnanti"
              className="inline-flex items-center gap-2 text-terra hover:text-terra-dark transition-colors mb-10"
            >
              <ArrowLeft size={18} /> Torna agli Insegnanti
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <ScrollReveal className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={ins.fotoBio}
                  alt={ins.nome}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Bio */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h1 className="font-heading text-4xl md:text-5xl font-semibold text-charcoal">
                  {ins.nome}
                </h1>
                {ins.qualifica && (
                  <p className="text-terra font-medium mt-2 text-lg">{ins.qualifica}</p>
                )}
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-8 h-[2px] w-16 bg-terra" />
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mt-8 text-charcoal-light leading-relaxed text-lg whitespace-pre-line">
                  {ins.bio}
                </p>
              </ScrollReveal>

              {/* Links */}
              {(ins.instagram || ins.sito) && (
                <ScrollReveal delay={0.2} className="mt-8">
                  <div className="flex flex-wrap gap-4">
                    {ins.instagram?.map((url) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-charcoal/5 hover:bg-terra hover:text-white text-charcoal-light px-5 py-2.5 rounded-full transition-all text-sm"
                      >
                        <Instagram size={16} /> Instagram
                      </a>
                    ))}
                    {ins.sito && (
                      <a
                        href={ins.sito}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-charcoal/5 hover:bg-terra hover:text-white text-charcoal-light px-5 py-2.5 rounded-full transition-all text-sm"
                      >
                        <ExternalLink size={16} /> {ins.sito.replace(/https?:\/\//, "").replace(/\/$/, "")}
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
