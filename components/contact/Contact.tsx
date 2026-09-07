"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Mail, Send, Download, MapPin, Phone, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import OfferLetterModal from "@/components/ui/OfferLetterModal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Emulate sending
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("done");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Direct Engagement</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Build <span className="gradient-text-accent">Production AI</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed text-sm">
            Available for Senior Gen AI roles, corporate technical training, and GraphRAG architecture consulting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Details & Verifications */}
          <div className="flex flex-col gap-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                  Open for Opportunities
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{profile.name}</h3>
              <p className="text-[#818cf8] font-medium text-sm mb-3">{profile.title}</p>
              <p className="text-[#94a3b8] leading-relaxed text-sm">
                Specialized in deploying local and cloud-native RAG & GraphRAG architectures (Neo4j, Ollama, LangGraph, Qdrant). Let&apos;s discuss how I can lead or accelerate your GenAI initiatives.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-[#cbd5e1] hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-[#818cf8] group-hover:border-[#6366f1]/40 transition-colors">
                  <Mail size={15} />
                </div>
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-sm text-[#cbd5e1] hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                  <Phone size={15} />
                </div>
                <span>{profile.phone}</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#cbd5e1] hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-[#818cf8] group-hover:border-[#6366f1]/40 transition-colors">
                  <GithubIcon size={15} />
                </div>
                <span>github.com/abhigurjar101</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#cbd5e1] hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-[#818cf8] group-hover:border-[#6366f1]/40 transition-colors">
                  <LinkedinIcon size={15} />
                </div>
                <span>linkedin.com/in/abhi-gurjar-b13067203</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-[#64748b]">
                  <MapPin size={15} />
                </div>
                <span>{profile.location}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.resume}
                download
                className="flex items-center gap-2 px-5 py-2.5 border border-[#6366f1]/40 text-[#818cf8] rounded-md hover:bg-[#6366f1]/10 text-xs font-semibold tracking-wide transition-all"
              >
                <Download size={14} />
                Download CV (PDF)
              </a>

              <OfferLetterModal />
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card-glass rounded-xl p-8 flex flex-col gap-5 border border-white/5">
            <div>
              <label className="block text-xs text-[#94a3b8] mb-1.5 tracking-wider uppercase font-medium">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Alex Mercer"
                className="w-full bg-[#080b0f] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#94a3b8] mb-1.5 tracking-wider uppercase font-medium">Work Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full bg-[#080b0f] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#94a3b8] mb-1.5 tracking-wider uppercase font-medium">Project Scope / Inquiry</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Discussing GraphRAG deployment, enterprise training, or senior engineering roles..."
                className="w-full bg-[#080b0f] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#6366f1] text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-[#818cf8] disabled:opacity-60 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-pointer"
            >
              {status === "idle" && <><Send size={14} /> Send Inquiry</>}
              {status === "sending" && <><span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> Transmitting...</>}
              {status === "done" && <>✓ Inquiry Sent Successfully</>}
            </button>

            {status === "done" && (
              <p className="text-xs text-emerald-400 text-center font-medium">
                Thank you! I will respond promptly to your inquiry.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-white/5 text-center px-6">
        <p className="text-xs text-[#475569]">
          © {new Date().getFullYear()} {profile.name} · {profile.title} · Production GraphRAG & AI Systems
        </p>
      </div>
    </section>
  );
}
