"use client";

import { profile } from "@/data/profile";
import { GraduationCap, Award, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import OfferLetterModal from "@/components/ui/OfferLetterModal";

export default function Credentials() {
  return (
    <section id="credentials" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Verification & Credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="gradient-text-accent">Certifications</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed text-sm">
            Formal technical credentials, specialized AI qualifications, and enterprise career documentation.
          </p>
        </div>

        {/* Verification banner with Offer Letter Trigger */}
        <div className="rounded-2xl p-6 sm:p-8 mb-12 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-[#0d1117] to-indigo-950/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-white">Employment & Offer Letters</h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold uppercase tracking-wider">
                  Verified
                </span>
              </div>
              <p className="text-sm text-[#cbd5e1] max-w-xl leading-relaxed">
                Direct access to verify corporate appointment from <span className="text-white font-semibold">Techeon IT Services</span> (AI Engineer), alongside engagements at <span className="text-white font-semibold">Uncodemy</span> (Sr Gen AI & ML Engineer & Trainer) and <span className="text-white font-semibold">Ayush Bhandari LLP</span>.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <OfferLetterModal />
          </div>
        </div>

        {/* Two-column layout: Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
              <GraduationCap size={20} className="text-[#818cf8]" />
              <h3 className="text-lg font-bold text-white tracking-wide">Education</h3>
            </div>

            <div className="flex flex-col gap-4">
              {profile.education.map((item, idx) => (
                <div
                  key={idx}
                  className="card-glass rounded-xl p-5 border border-white/5 hover:border-[#6366f1]/30 transition-all duration-300 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-bold text-white leading-snug">{item.degree}</h4>
                    <span className="text-[11px] font-mono text-[#818cf8] shrink-0 bg-[#6366f1]/10 px-2 py-0.5 rounded border border-[#6366f1]/20">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#94a3b8]">{item.institution}</p>
                  <p className="text-xs text-[#475569] leading-relaxed mt-1">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
              <Award size={20} className="text-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-wide">Certifications</h3>
            </div>

            <div className="flex flex-col gap-4">
              {profile.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="card-glass rounded-xl p-5 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                    <p className="text-xs text-[#818cf8] mt-0.5">{cert.issuer}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-[#475569] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
