"use client";

import { experiences } from "@/data/experience";
import { Briefcase, MapPin, Calendar, CheckCircle2, Award, Terminal, Cpu } from "lucide-react";
import OfferLetterModal from "@/components/ui/OfferLetterModal";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Structured Career Trajectory</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text-accent">Experience</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm">
            A versatile track record uniting AI/ML engineering, robust backend system design, data warehousing, client relationship management, and organic growth.
          </p>
        </div>

        {/* Highlighted Dual Track Summary Banner */}
        <div className="max-w-4xl mx-auto mb-16 grid sm:grid-cols-2 gap-4">
          {/* Gen AI Track Card */}
          <div className="p-5 rounded-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/30 via-[#0d121c] to-[#0a0e17] shadow-xl flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-[#818cf8] shrink-0 mt-0.5">
              <Cpu size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold gradient-text-accent">2 Years</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold uppercase tracking-wider">
                  Gen AI & System Design
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mt-1">
                Gen AI & ML Engineer
              </h3>
              <p className="text-xs text-[#818cf8] mt-0.5 font-mono">
                Ayush Bhandari LLP · Jun 2024 – Jul 2026
              </p>
              <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">
                Architected production retrieval pipelines, FastAPI backend services, LangGraph agents, and high-reliability decision-support automation.
              </p>
            </div>
          </div>

          {/* Python Developer Track Card */}
          <div className="p-5 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-[#0d121c] to-[#0a0e17] shadow-xl flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <Terminal size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-emerald-400">1 Year</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold uppercase tracking-wider">
                  Python & Data Engineering
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mt-1">
                Python Developer & Data Analyst
              </h3>
              <p className="text-xs text-emerald-400 mt-0.5 font-mono">
                Sopta Farms · Apr 2023 – May 2024
              </p>
              <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">
                Engineered automated Python ETL pipelines, normalized multi-source SQL data models, and built ML-ready analytical datasets.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1]/60 via-[#6366f1]/20 to-transparent ml-5 md:ml-[130px]" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex gap-6 md:gap-10">
                {/* Period — desktop */}
                <div className="hidden md:flex w-28 shrink-0 justify-end pt-1">
                  <span className="text-xs font-mono text-[#818cf8] text-right leading-relaxed font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* Timeline Dot Icon */}
                <div className="relative flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#111827] border-2 border-[#6366f1]/60 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.35)]">
                    <Briefcase size={14} className="text-[#818cf8]" />
                  </div>
                </div>

                {/* Content card */}
                <div className="card-glass rounded-xl p-6 md:p-7 flex-1 border border-white/5 hover:border-[#6366f1]/40 transition-all duration-300 shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 font-semibold">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-[#818cf8] font-semibold text-xs sm:text-sm">{exp.company}</p>
                      <p className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1 font-medium">
                        <CheckCircle2 size={12} /> {exp.trackTag}
                      </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1">
                      <div className="md:hidden flex items-center gap-1.5 text-xs text-[#818cf8] font-mono">
                        <Calendar size={11} /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                        <MapPin size={11} /> {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-[#cbd5e1] text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet achievements from CV */}
                  <ul className="flex flex-col gap-2.5 mb-5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                        <span className="text-[#6366f1] mt-0.5 shrink-0 font-bold">▸</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-medium text-[#94a3b8] bg-[#080b0f] border border-white/5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification banner under experience */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-xs text-[#94a3b8]">
            Need official verification of these roles or client engagement documentation?
          </p>
          <OfferLetterModal />
        </div>
      </div>
    </section>
  );
}
