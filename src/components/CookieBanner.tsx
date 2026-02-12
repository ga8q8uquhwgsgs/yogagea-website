"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("yogagea-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("yogagea-cookie-consent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("yogagea-cookie-consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl border border-cream-dark/30 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <Cookie className="text-terra shrink-0 mt-1" size={24} />
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
              Gestione dei cookie
            </h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Usiamo cookie tecnici e di terze parti per migliorare la tua navigazione nel
              nostro sito web e per ottenere dati statistici anonimizzati. Consulta la nostra{" "}
              <Link href="/privacy-policy" className="text-terra hover:underline">
                Privacy e Cookie Policy
              </Link>{" "}
              per maggiori informazioni.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={handleAccept}
                className="bg-terra text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-terra-dark transition-all"
              >
                Accetta
              </button>
              <button
                onClick={handleReject}
                className="border border-charcoal/20 text-charcoal px-6 py-2.5 rounded-full text-sm font-medium hover:bg-cream-dark transition-all"
              >
                Rifiuta
              </button>
            </div>
          </div>
          <button
            onClick={handleReject}
            className="text-charcoal-light hover:text-charcoal transition-colors"
            aria-label="Chiudi"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
