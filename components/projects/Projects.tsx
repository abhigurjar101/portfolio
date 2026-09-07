"use client";

import { useState } from "react";
import { projects, ProjectCategory, Project } from "@/data/projects";
import { ExternalLink, Star, ChevronDown, ChevronUp, Sparkles, Zap, Play, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";
import ProjectTestModal from "./ProjectTestModal";

const ALL_CATEGORIES: ProjectCategory[] = [
  "ALL",
  "AGENTIC AI",
  "ADVANCED",
  "GEN AI",
  "RAG",
  "ADVANCED RAG",
  "KNOWLEDGE GRAPH",
  "SQL",
  "AWS",
  "HEALTHCARE",
  "COMPUTER VISION",
  "LLM",
  "AI AGENTS",
  "ML",
  "NLP",
  "BACKEND",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("ALL");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [testingProject, setTestingProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Production-grade AI systems, RAG pipelines, and ML applications built from scratch. Click any project to test interactively in-browser.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 text-[10px] font-semibold tracking-widest uppercase rounded-full border transition-all duration-200 cursor-pointer",
                activeCategory === cat
                  ? "bg-[#6366f1] border-[#6366f1] text-white shadow-[0_0_14px_rgba(99,102,241,0.5)]"
                  : "border-[#6366f1]/20 text-[#94a3b8] hover:border-[#6366f1]/50 hover:text-white bg-transparent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filtered.map((project) => {
            const isNemiOrBots = project.id === "nemi" || project.id === "n8n-desktop-bots";
            const isPurpleGold = project.glowTheme === "purple-gold";
            const glowClass = isPurpleGold ? "card-glow-purple-gold" : "card-glow-silver-purple";

            return (
              <div
                key={project.id}
                className={cn(
                  "group relative rounded-2xl flex flex-col h-full transition-all duration-300",
                  glowClass
                )}
              >
                {/* Inner Card Body */}
                <div className="bg-[#090d18]/95 backdrop-blur-xl rounded-[15px] p-6 flex flex-col justify-between h-full relative overflow-hidden border border-white/5">
                  {/* Subtle Ambient Breathing Radial Glow */}
                  <div
                    className={cn(
                      "ambient-glow absolute -top-20 -right-20 w-48 h-48 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-all duration-500",
                      isPurpleGold
                        ? "bg-gradient-to-br from-purple-500/20 via-amber-500/15 to-transparent"
                        : "bg-gradient-to-br from-slate-300/15 via-purple-500/15 to-transparent"
                    )}
                  />

                  {/* Top Section */}
                  <div>
                    {/* Badges & Star Header */}
                    <div className="flex items-start justify-between gap-2 min-h-[36px] mb-3">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {project.badges?.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className={cn(
                              "inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase rounded-full border",
                              badge === "PRODUCTION"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.2)]"
                                : badge === "AGENTIC AI"
                                ? "bg-purple-500/15 text-purple-300 border-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.2)]"
                                : badge === "ADVANCED"
                                ? "bg-amber-500/15 text-amber-300 border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.2)]"
                                : badge === "INTERMEDIATE"
                                ? "bg-slate-500/15 text-slate-300 border-slate-400/30 shadow-[0_0_8px_rgba(203,213,225,0.15)]"
                                : "bg-[#6366f1]/10 text-[#818cf8] border-[#6366f1]/20"
                            )}
                          >
                            {badge === "PRODUCTION" && (
                              <span className="relative flex h-1.5 w-1.5 mr-0.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                              </span>
                            )}
                            {badge === "AGENTIC AI" && <Sparkles size={9} className="text-purple-400" />}
                            {badge === "ADVANCED" && <Zap size={9} className="text-amber-400" />}
                            {badge}
                          </span>
                        ))}

                        {/* Primary Category Tag */}
                        <span className="px-2 py-0.5 text-[9px] font-semibold tracking-widest uppercase bg-white/5 text-[#94a3b8] rounded-full border border-white/10">
                          {project.categories[0]}
                        </span>
                      </div>

                      {project.featured && (
                        <Star size={14} className="text-amber-400 shrink-0 mt-0.5" fill="currentColor" />
                      )}
                    </div>

                    {/* Title & Description with Symmetrical Fixed Heights */}
                    <div className="mb-4">
                      <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#a5b4fc] transition-colors h-[3rem] flex items-center line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed h-[4.5rem] line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Interactive In-Browser Runner CTA Button */}
                    <button
                      type="button"
                      onClick={() => setTestingProject(project)}
                      className={cn(
                        "w-full py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer mb-4 shrink-0",
                        isPurpleGold
                          ? "bg-gradient-to-r from-purple-600/25 to-amber-600/25 hover:from-purple-600/40 hover:to-amber-600/40 text-purple-200 border border-purple-500/40 hover:border-amber-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                          : "bg-gradient-to-r from-slate-600/20 to-purple-600/20 hover:from-slate-600/30 hover:to-purple-600/30 text-slate-200 border border-slate-400/30 hover:border-purple-400 hover:text-white shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                      )}
                    >
                      {isNemiOrBots ? (
                        <>
                          <Layers size={13} className="text-amber-400" />
                          ⚡ Top-Tier Spec & Architecture
                        </>
                      ) : (
                        <>
                          <Play size={12} className="text-emerald-400" />
                          ⚡ Test In-Browser
                        </>
                      )}
                    </button>

                    {/* Expanded details */}
                    {expanded === project.id && (
                      <div className="pt-3 border-t border-white/5 mb-4 animate-in fade-in duration-200">
                        <h4 className="text-[11px] font-semibold text-[#818cf8] mb-2 tracking-wider uppercase">Production Highlights</h4>
                        <ul className="flex flex-col gap-1.5">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                              <span className="text-[#6366f1] mt-0.5 shrink-0">→</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Bottom Section Pinned with mt-auto */}
                  <div className="mt-auto">
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                      {project.tech.slice(0, 5).map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-mono text-[#94a3b8] bg-white/5 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2 py-0.5 text-[9px] font-mono text-[#64748b]">+{project.tech.length - 5}</span>
                      )}
                    </div>

                    {/* Card footer links */}
                    <div className="mt-3 pt-3 flex items-center justify-between border-t border-white/5">
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-white transition-colors"
                            aria-label="GitHub"
                          >
                            <GithubIcon size={14} /> Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-white transition-colors"
                            aria-label="Demo"
                          >
                            <ExternalLink size={14} /> Demo
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                        className="flex items-center gap-1 text-[10px] text-[#64748b] hover:text-[#818cf8] transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5"
                      >
                        {expanded === project.id ? <><ChevronUp size={12} /> Less</> : <><ChevronDown size={12} /> Details</>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/abhigurjar101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#6366f1]/40 text-[#818cf8] rounded-xl hover:bg-[#6366f1]/10 text-sm font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <GithubIcon size={16} />
            View All 22 Repositories on GitHub
          </a>
        </div>
      </div>

      {/* In-Browser Project Testing Modal */}
      {testingProject && (
        <ProjectTestModal
          project={testingProject}
          onClose={() => setTestingProject(null)}
        />
      )}
    </section>
  );
}

