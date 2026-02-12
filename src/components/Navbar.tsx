"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { contatti } from "@/data/siteData";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/lezioni", label: "Lezioni" },
  { href: "/insegnanti", label: "Insegnanti" },
  { href: "/orari", label: "Orari" },
  { href: "/iscrizione", label: "Iscrizione" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-charcoal/70 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className={cn(
                "font-heading text-2xl md:text-3xl font-semibold tracking-wide transition-colors",
                isScrolled ? "text-terra group-hover:text-terra-dark" : "text-white group-hover:text-cream-dark"
              )}>
                YOGAGEA
              </span>
              <span className={cn(
                "hidden sm:block text-xs tracking-widest uppercase transition-colors",
                isScrolled ? "text-charcoal-light" : "text-white/60"
              )}>
                a.s.d.
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm tracking-wide transition-all duration-300 rounded-lg",
                    isScrolled
                      ? pathname === link.href
                        ? "text-terra font-medium bg-terra/10"
                        : "text-charcoal-light hover:text-terra hover:bg-terra/10"
                      : pathname === link.href
                        ? "text-white font-medium bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Social + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a
                  href={contatti.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={cn("p-2 transition-colors", isScrolled ? "text-charcoal-light hover:text-terra" : "text-white/70 hover:text-white")}
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={contatti.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={cn("p-2 transition-colors", isScrolled ? "text-charcoal-light hover:text-terra" : "text-white/70 hover:text-white")}
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={contatti.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={cn("p-2 transition-colors", isScrolled ? "text-charcoal-light hover:text-terra" : "text-white/70 hover:text-white")}
                >
                  <Youtube size={16} />
                </a>
              </div>
              <Link
                href="/iscrizione"
                className="bg-terra text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-terra-dark transition-all duration-300 hover:shadow-lg hover:shadow-terra/20"
              >
                Iscriviti
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn("lg:hidden p-2 transition-colors z-50", isScrolled ? "text-charcoal hover:text-terra" : "text-white hover:text-white/70")}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-2xl font-heading tracking-wide py-3 px-6 rounded-xl transition-all",
                      pathname === link.href
                        ? "text-terra bg-terra/10"
                        : "text-charcoal hover:text-terra"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex gap-6 mt-8"
              >
                <a href={contatti.social.facebook} target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-terra transition-colors">
                  <Facebook size={22} />
                </a>
                <a href={contatti.social.instagram} target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-terra transition-colors">
                  <Instagram size={22} />
                </a>
                <a href={contatti.social.youtube} target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-terra transition-colors">
                  <Youtube size={22} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link
                  href="/iscrizione"
                  className="bg-terra text-white px-8 py-3 rounded-full font-medium hover:bg-terra-dark transition-all"
                >
                  Iscriviti Online
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
