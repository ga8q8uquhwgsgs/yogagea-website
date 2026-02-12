'use client';

import Link from 'next/link';

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder="Nome e Cognome"
          className="w-full px-4 py-3.5 rounded-xl border border-cream-dark/50 bg-cream/30 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/10 transition-all text-sm"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3.5 rounded-xl border border-cream-dark/50 bg-cream/30 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/10 transition-all text-sm"
        />
      </div>
      <div>
        <textarea
          placeholder="Il tuo messaggio..."
          rows={6}
          className="w-full px-4 py-3.5 rounded-xl border border-cream-dark/50 bg-cream/30 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/10 transition-all text-sm resize-none"
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 accent-terra" />
        <span className="text-xs text-charcoal-light leading-relaxed">
          Acconsento al trattamento dei miei dati personali secondo l&apos;
          <Link href="/privacy-policy" className="text-terra hover:underline">
            Informativa sulla privacy
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        className="w-full bg-terra text-white py-3.5 rounded-full font-medium hover:bg-terra-dark transition-all duration-300 hover:shadow-lg text-base"
      >
        Invia Messaggio
      </button>
    </form>
  );
}
