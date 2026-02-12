'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

/* ─── Accordion item ─── */
function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-cream-dark/60">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-cormorant text-xl text-charcoal group-hover:text-terra transition-colors">
          {title}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-terra" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-charcoal-light leading-relaxed space-y-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-cormorant text-4xl md:text-6xl mb-4">
              Privacy &amp; Cookie Policy
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-white/70 text-lg">
              Informativa ai sensi del Reg. UE 2016/679 (GDPR) e normativa italiana vigente
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-sm border border-cream-dark/60 p-6 md:p-10">
              <div className="mb-8">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  La presente informativa è resa ai sensi dell&apos;art. 13 del Regolamento
                  (UE) 2016/679 (&quot;GDPR&quot;) a tutti coloro che interagiscono con il sito web
                  di YogaGea ASD, accessibile all&apos;indirizzo{' '}
                  <a href="https://www.yogagea.com" className="text-terra underline">
                    www.yogagea.com
                  </a>.
                </p>
              </div>

              {/* Accordion sections */}
              <AccordionItem title="1. Titolare del trattamento" defaultOpen>
                <p>
                  Il Titolare del trattamento è <strong>YogaGea ASD</strong>, con sede legale
                  in Via Montegrappa 4/c, 29121 Piacenza (PC).
                </p>
                <p>
                  Codice Fiscale: 91096550338<br />
                  P. IVA: 01913060335
                </p>
                <p>
                  Per qualsiasi richiesta relativa al trattamento dei dati personali, è
                  possibile contattare il Titolare al seguente indirizzo email:{' '}
                  <a href="mailto:robi.morisi@gmail.com" className="text-terra underline">
                    robi.morisi@gmail.com
                  </a>
                </p>
              </AccordionItem>

              <AccordionItem title="2. Dati personali raccolti">
                <p>Il sito può raccogliere le seguenti categorie di dati personali:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Dati identificativi:</strong> nome, cognome, codice fiscale, data
                    e luogo di nascita, indirizzo di residenza
                  </li>
                  <li>
                    <strong>Dati di contatto:</strong> indirizzo email, numero di telefono
                  </li>
                  <li>
                    <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser,
                    sistema operativo, pagine visitate, orari di accesso
                  </li>
                  <li>
                    <strong>Dati forniti volontariamente:</strong> informazioni inserite nei
                    moduli di contatto e iscrizione
                  </li>
                </ul>
              </AccordionItem>

              <AccordionItem title="3. Finalità e base giuridica del trattamento">
                <p>I dati personali sono trattati per le seguenti finalità:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Gestione dell&apos;iscrizione e del tesseramento</strong> (base giuridica:
                    esecuzione di un contratto, art. 6.1.b GDPR)
                  </li>
                  <li>
                    <strong>Organizzazione delle attività sportive</strong> (base giuridica:
                    esecuzione di un contratto e interesse legittimo, art. 6.1.b e 6.1.f GDPR)
                  </li>
                  <li>
                    <strong>Adempimento di obblighi legali</strong> (base giuridica: obbligo
                    legale, art. 6.1.c GDPR)
                  </li>
                  <li>
                    <strong>Invio di comunicazioni informative</strong> sulle attività
                    dell&apos;associazione (base giuridica: consenso, art. 6.1.a GDPR)
                  </li>
                  <li>
                    <strong>Gestione del sito web e miglioramento dei servizi</strong> (base
                    giuridica: interesse legittimo, art. 6.1.f GDPR)
                  </li>
                </ul>
              </AccordionItem>

              <AccordionItem title="4. Destinatari dei dati">
                <p>I dati personali potranno essere comunicati a:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>ASI – Associazioni Sportive e Sociali Italiane</strong>, per il
                    tesseramento e la copertura assicurativa
                  </li>
                  <li>
                    <strong>CONI</strong> e altri enti sportivi competenti, per gli
                    adempimenti previsti dalla normativa sportiva
                  </li>
                  <li>
                    <strong>Autorità pubbliche</strong>, quando richiesto dalla legge
                  </li>
                  <li>
                    <strong>Fornitori di servizi</strong> che trattano dati per conto del
                    Titolare (es. hosting, email marketing), nominati responsabili del
                    trattamento ai sensi dell&apos;art. 28 GDPR
                  </li>
                </ul>
                <p>
                  I dati non saranno trasferiti a paesi terzi al di fuori dell&apos;Unione
                  Europea, salvo nei casi espressamente previsti dalla normativa applicabile
                  e con le garanzie adeguate.
                </p>
              </AccordionItem>

              <AccordionItem title="5. Conservazione dei dati">
                <p>
                  I dati personali saranno conservati per il tempo strettamente necessario
                  al perseguimento delle finalità per cui sono stati raccolti, e in particolare:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Dati di iscrizione e tesseramento:</strong> per tutta la durata
                    del rapporto associativo e per i 10 anni successivi alla cessazione, ai
                    fini fiscali e contabili
                  </li>
                  <li>
                    <strong>Dati di navigazione:</strong> per un massimo di 12 mesi dalla
                    raccolta
                  </li>
                  <li>
                    <strong>Dati per comunicazioni informative:</strong> fino alla revoca
                    del consenso
                  </li>
                </ul>
              </AccordionItem>

              <AccordionItem title="6. Diritti dell'interessato">
                <p>
                  In qualità di interessato, Lei ha il diritto di:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Accesso</strong> (art. 15 GDPR): ottenere conferma dell&apos;esistenza
                    di un trattamento e accedere ai propri dati
                  </li>
                  <li>
                    <strong>Rettifica</strong> (art. 16 GDPR): ottenere la correzione dei
                    dati inesatti
                  </li>
                  <li>
                    <strong>Cancellazione</strong> (art. 17 GDPR): ottenere la cancellazione
                    dei dati, nei casi previsti
                  </li>
                  <li>
                    <strong>Limitazione</strong> (art. 18 GDPR): ottenere la limitazione del
                    trattamento
                  </li>
                  <li>
                    <strong>Portabilità</strong> (art. 20 GDPR): ricevere i dati in formato
                    strutturato e trasmetterli ad altro titolare
                  </li>
                  <li>
                    <strong>Opposizione</strong> (art. 21 GDPR): opporsi al trattamento per
                    motivi legittimi
                  </li>
                  <li>
                    <strong>Revoca del consenso</strong> (art. 7 GDPR): revocare il consenso
                    in qualsiasi momento, senza pregiudicare la liceità del trattamento basato
                    sul consenso prestato prima della revoca
                  </li>
                </ul>
                <p>
                  Per esercitare i propri diritti, l&apos;interessato può inviare una richiesta
                  scritta a{' '}
                  <a href="mailto:robi.morisi@gmail.com" className="text-terra underline">
                    robi.morisi@gmail.com
                  </a>
                  .
                </p>
                <p>
                  L&apos;interessato ha inoltre il diritto di proporre reclamo all&apos;Autorità
                  Garante per la protezione dei dati personali (
                  <a
                    href="https://www.garanteprivacy.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terra underline"
                  >
                    www.garanteprivacy.it
                  </a>
                  ).
                </p>
              </AccordionItem>

              <AccordionItem title="7. Cookie Policy">
                <p>
                  Il sito utilizza cookie e tecnologie simili per garantire il corretto
                  funzionamento e migliorare l&apos;esperienza di navigazione.
                </p>

                <p className="font-medium text-charcoal mt-4 mb-2">Cookie tecnici</p>
                <p>
                  Sono necessari per il funzionamento del sito e non richiedono il consenso
                  dell&apos;utente. Includono cookie di sessione, di navigazione e funzionali
                  (es. preferenze lingua, accettazione cookie banner).
                </p>

                <p className="font-medium text-charcoal mt-4 mb-2">Cookie analitici</p>
                <p>
                  Utilizzati per raccogliere informazioni aggregate sull&apos;utilizzo del sito
                  (es. Google Analytics). Questi cookie raccolgono dati in forma anonima e
                  aggregata e sono utilizzati esclusivamente per migliorare il funzionamento
                  del sito.
                </p>

                <p className="font-medium text-charcoal mt-4 mb-2">Cookie di terze parti</p>
                <p>
                  Il sito potrebbe incorporare contenuti di terze parti (es. video YouTube,
                  mappe Google, widget social) che possono installare propri cookie. Il Titolare
                  non ha controllo sui cookie installati da terze parti. Per maggiori
                  informazioni, si prega di consultare le rispettive informative:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                  <li>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terra underline"
                    >
                      Google Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/privacy/policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terra underline"
                    >
                      Meta (Facebook/Instagram) Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terra underline"
                    >
                      YouTube Privacy Policy
                    </a>
                  </li>
                </ul>

                <p className="font-medium text-charcoal mt-4 mb-2">Gestione dei cookie</p>
                <p>
                  L&apos;utente può gestire le preferenze relative ai cookie attraverso il
                  banner visualizzato al primo accesso al sito, oppure attraverso le
                  impostazioni del proprio browser. La disattivazione dei cookie tecnici
                  potrebbe compromettere il corretto funzionamento del sito.
                </p>
              </AccordionItem>

              <AccordionItem title="8. Sicurezza dei dati">
                <p>
                  Il Titolare adotta misure tecniche e organizzative adeguate per garantire
                  un livello di sicurezza appropriato al rischio, ai sensi dell&apos;art. 32 del
                  GDPR, al fine di proteggere i dati personali da trattamenti non autorizzati
                  o illeciti e dalla perdita, distruzione o danno accidentale.
                </p>
              </AccordionItem>

              <AccordionItem title="9. Modifiche alla presente informativa">
                <p>
                  Il Titolare si riserva il diritto di modificare la presente informativa in
                  qualsiasi momento, dandone pubblicazione sul sito. Le modifiche saranno
                  efficaci dalla data di pubblicazione. Si invita pertanto l&apos;utente a
                  consultare periodicamente la presente pagina.
                </p>
                <p className="mt-3">
                  <strong>Ultimo aggiornamento:</strong> Gennaio 2025
                </p>
              </AccordionItem>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-cream-dark/60 text-center">
                <p className="text-xs text-charcoal-light">
                  YogaGea ASD — C.F. 91096550338 — P. IVA 01913060335<br />
                  Via Montegrappa 4/c, 29121 Piacenza (PC)<br />
                  <a href="mailto:robi.morisi@gmail.com" className="text-terra underline">
                    robi.morisi@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
