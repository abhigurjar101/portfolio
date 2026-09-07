"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";
import OfferLetterModal from "@/components/ui/OfferLetterModal";

const navLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#080b0f]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="font-bold text-sm tracking-widest text-white/90 hover:text-[#818cf8] transition-colors uppercase flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
          <span>ABHI KUMAR GURJAR</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-[#94a3b8] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <OfferLetterModal />

          <a
            href={profile.resume}
            download
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase border border-[#6366f1]/40 text-[#818cf8] hover:bg-[#6366f1]/10 rounded-md transition-all duration-200"
          >
            <Download size={13} />
            CV
          </a>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#6366f1] text-white hover:bg-[#818cf8] rounded-md transition-all duration-200 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#94a3b8] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d1117]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-widest uppercase text-[#94a3b8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2.5 pt-2">
            <OfferLetterModal />
            <div className="flex gap-3">
              <a
                href={profile.resume}
                download
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-widest uppercase border border-[#6366f1]/40 text-[#818cf8] hover:bg-[#6366f1]/10 rounded-md transition-all"
              >
                <Download size={13} />
                CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-4 py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#6366f1] text-white hover:bg-[#818cf8] rounded-md transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
