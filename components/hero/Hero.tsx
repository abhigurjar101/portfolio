"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { Mail, ArrowDown, Sparkles, MapPin, Phone, ShieldCheck, Download, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import OfferLetterModal from "@/components/ui/OfferLetterModal";
import Image from "next/image";

const roles = [
  "AI & Machine Learning Engineer",
  "Data Analyst & Analytics Engineer",
  "Full Stack & Backend Python Developer",
  "Marketing & SEO Growth Strategist",
  "Client Solutions Architect & System Designer",
  "IIIT-Bangalore & LJMU (UK) in AI & ML",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Particle network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = 55;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.5)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 125)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        aria-hidden="true"
      />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6 lg:col-span-7 order-2 lg:order-1">
          {/* Status badge & Academic Tagline Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-300">
                Available for Senior Roles & Consulting
              </span>
            </div>

            {/* Academic Credential Tagline Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[11px] font-medium text-[#c7d2fe]">
              <GraduationCap size={13} className="text-[#818cf8]" />
              <span>IIIT-Bangalore · LJMU (UK)</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
              <MapPin size={13} className="text-[#818cf8]" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Main headline & Minimalist Tagline */}
          <div>
            <p className="section-label mb-2 tracking-[0.25em]">{profile.roleHeadline}</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight">
              <span className="text-white">{profile.name}</span>
              <br />
              <span className="gradient-text">Engineering AI, Data</span>
              <br />
              <span className="gradient-text-accent">& Scalable Systems.</span>
            </h1>

            {/* Small Tagline in Minimalist Format */}
            <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-mono text-[#a5b4fc] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{profile.tagline}</span>
            </div>
          </div>

          {/* Typewriter */}
          <div className="flex items-center gap-3 h-8 bg-[#111827]/60 border border-white/5 px-4 py-2 rounded-lg w-fit">
            <Sparkles size={15} className="text-[#6366f1] shrink-0" />
            <span className="text-[#cbd5e1] font-mono text-xs sm:text-sm">
              {displayed}
              <span className="animate-pulse text-[#6366f1]">|</span>
            </span>
          </div>

          {/* Tag pills from balanced multi-disciplinary skillsets */}
          <div className="flex flex-wrap gap-2">
            {[
              "AI & Machine Learning",
              "Data Analytics & SQL",
              "Python Backend",
              "Marketing Analytics & SEO",
              "Client Solutions & System Design",
              "GraphRAG & Knowledge Graphs",
              "AWS Cloud",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-medium tracking-wide bg-[#111827] border border-[#6366f1]/20 text-[#cbd5e1] rounded-full hover:border-[#6366f1]/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Explicit Experience Tracks (2 Yrs Gen AI + 1 Yr Python Developer) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl border border-white/10 bg-[#0d121c]/90 backdrop-blur-md shadow-lg">
            <div className="flex flex-col p-2 rounded-lg bg-indigo-950/20 border border-indigo-500/20">
              <span className="text-lg sm:text-xl font-bold gradient-text-accent">2 Years</span>
              <span className="text-xs font-semibold text-white mt-0.5">Gen AI & ML Engineer</span>
              <span className="text-[10px] text-[#94a3b8] mt-0.5 leading-tight">Retrieval Pipelines, Ollama, LangGraph</span>
            </div>
            <div className="flex flex-col p-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
              <span className="text-lg sm:text-xl font-bold text-emerald-400">1 Year</span>
              <span className="text-xs font-semibold text-white mt-0.5">Python & Data Developer</span>
              <span className="text-[10px] text-[#94a3b8] mt-0.5 leading-tight">ETL Pipelines, SQL Warehousing, APIs</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col p-2 rounded-lg bg-white/3 border border-white/5 justify-center">
              <span className="text-lg sm:text-xl font-bold text-slate-200">3+ Years</span>
              <span className="text-xs font-semibold text-white mt-0.5">Total Engineering</span>
              <span className="text-[10px] text-[#94a3b8] mt-0.5 leading-tight">Combined Hands-on Production Systems</span>
            </div>
          </div>

          {/* Professional CV Summary */}
          <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed max-w-2xl">
            {profile.subheadline}
          </p>

          {/* Featured 5 Designations & Capabilities Grid */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={13} className="text-[#a5b4fc]" />
              <span className="text-[11px] font-semibold text-[#a5b4fc] tracking-wider uppercase font-mono">
                Target Roles & Versatile Designations
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {profile.designations.map((d) => {
                const colorClasses =
                  d.color === "purple"
                    ? "from-purple-950/30 to-indigo-950/20 border-purple-500/25"
                    : d.color === "cyan"
                    ? "from-cyan-950/30 to-blue-950/20 border-cyan-500/25"
                    : d.color === "indigo"
                    ? "from-indigo-950/30 to-slate-900/40 border-indigo-500/25"
                    : d.color === "rose"
                    ? "from-rose-950/30 to-amber-950/20 border-rose-500/25"
                    : "from-emerald-950/30 to-teal-950/20 border-emerald-500/25";

                return (
                  <div
                    key={d.title}
                    className={`p-2.5 rounded-lg border bg-gradient-to-br ${colorClasses} backdrop-blur-sm transition-all hover:border-white/20`}
                  >
                    <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/40 text-white/90 inline-block mb-1">
                      {d.badge}
                    </span>
                    <h4 className="text-xs font-bold text-white leading-snug">{d.title}</h4>
                    <p className="text-[11px] text-[#94a3b8] mt-1 leading-snug">{d.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row with Offer Letter Modal */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-[#6366f1] text-white text-xs sm:text-sm font-semibold tracking-wide rounded-md hover:bg-[#818cf8] transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
            >
              Explore Production Projects
            </a>

            <a
              href={profile.resume}
              download
              className="flex items-center gap-1.5 px-4 py-2.5 border border-[#6366f1]/40 text-[#818cf8] text-xs sm:text-sm font-semibold tracking-wide rounded-md hover:bg-[#6366f1]/10 transition-all duration-200"
            >
              <Download size={14} />
              Download CV
            </a>

            <OfferLetterModal />
          </div>

          {/* Social & Contact info links */}
          <div className="flex items-center gap-5 pt-2 border-t border-white/5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">{profile.phone}</span>
            </a>
          </div>
        </div>

        {/* Dynamic Profile visual with interactive ring */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <div className="relative">
            {/* Outer animated rotating energy rings */}
            <div
              className="absolute -inset-4 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, #6366f1 30%, transparent 50%, #818cf8 80%, transparent 100%)",
                animation: "spin 9s linear infinite",
                opacity: 0.55,
              }}
            />
            <div
              className="absolute -inset-2 rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg, transparent 0%, #10b981 25%, transparent 50%, #6366f1 75%, transparent 100%)",
                animation: "spin 13s linear infinite reverse",
                opacity: 0.35,
              }}
            />

            {/* Photo container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#6366f1]/50 bg-[#0d1117] shadow-[0_0_60px_rgba(99,102,241,0.35)]">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge: AI & ML Systems */}
            <div className="absolute -bottom-3 -left-6 px-3.5 py-1.5 rounded-lg bg-[#111827] border border-indigo-500/40 shadow-xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
              <span className="text-xs font-bold text-[#818cf8] tracking-wider">AI & ML Engineer</span>
            </div>

            {/* Floating badge: Data & Systems */}
            <div className="absolute -top-3 -right-4 px-3.5 py-1.5 rounded-lg bg-[#111827] border border-emerald-500/40 shadow-xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 tracking-wider">Data & Systems</span>
            </div>

            {/* Floating badge: Client Solutions & Growth */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden sm:flex px-3 py-1.5 rounded-lg bg-[#111827]/95 border border-purple-500/30 shadow-xl items-center gap-1.5">
              <ShieldCheck size={13} className="text-purple-400" />
              <span className="text-[11px] font-semibold text-purple-300">Solutions & Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#expertise"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#475569] hover:text-[#94a3b8] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={13} className="animate-bounce" />
      </a>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
