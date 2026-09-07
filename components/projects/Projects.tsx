"use client";

import { useState } from "react";
import { projects, ProjectCategory } from "@/data/projects";
import { ExternalLink, Star, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

const ALL_CATEGORIES: ProjectCategory[] = [
  "ALL", "GEN AI", "RAG", "ADVANCED RAG", "KNOWLEDGE GRAPH", "COMPUTER VISION", "LLM", "AI AGENTS", "ML", "NLP", "BACKEND"
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("ALL");
  const [expanded, setExpanded] = useState<string | null>(null);

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
            Production-grade AI systems, RAG pipelines, and ML applications built from scratch.
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
                "px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase rounded-full border transition-all duration-200 cursor-pointer",
                activeCategory === cat
                  ? "bg-[#6366f1] border-[#6366f1] text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                  : "border-[#6366f1]/20 text-[#94a3b8] hover:border-[#6366f1]/50 hover:text-white bg-transparent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card-glass rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]"
            >
              {/* Card header */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 text-[9px] font-semibold tracking-widest uppercase bg-[#6366f1]/10 text-[#818cf8] rounded-full border border-[#6366f1]/20"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {project.featured && (
                    <Star size={14} className="text-amber-400 shrink-0" fill="currentColor" />
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Expanded details */}
                {expanded === project.id && (
                  <div className="pt-2 border-t border-white/5">
                    <h4 className="text-xs font-semibold text-[#818cf8] mb-2 tracking-wider uppercase">Highlights</h4>
                    <ul className="flex flex-col gap-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                          <span className="text-[#6366f1] mt-0.5">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[9px] text-[#475569] bg-white/3 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 text-[9px] text-[#475569]">+{project.tech.length - 5}</span>
                  )}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 pb-5 flex items-center justify-between border-t border-white/5 pt-4">
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
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/abhigurjar101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#6366f1]/30 text-[#818cf8] rounded-md hover:bg-[#6366f1]/10 text-sm font-medium transition-all"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
