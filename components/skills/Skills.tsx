"use client";

import { skillGroups, SkillTier } from "@/data/skills";
import { Brain, Network, Code2, Cpu, Server, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Network: <Network size={18} />,
  Brain: <Brain size={18} />,
  Code2: <Code2 size={18} />,
  Cpu: <Cpu size={18} />,
  Server: <Server size={18} />,
};

const tierStyles: Record<SkillTier, { label: string; badge: string; bar: string }> = {
  advanced: {
    label: "Advanced",
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    bar: "bg-gradient-to-r from-indigo-500 to-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]",
  },
  proficient: {
    label: "Proficient",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    bar: "bg-gradient-to-r from-cyan-500 to-teal-400",
  },
  intermediate: {
    label: "Working Knowledge",
    badge: "bg-slate-500/15 text-slate-300 border-slate-500/25",
    bar: "bg-gradient-to-r from-slate-500 to-slate-400",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Realistic Technical & Business Evaluation</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills <span className="gradient-text-accent">Matrix</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm">
            An honest and grounded self-evaluation across AI engineering, data analytics, backend systems, growth marketing, and client solutions.
          </p>

          {/* Proficiency Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
              <span>Daily Driver / Core Strength (82%–88%)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Proficient / Production (74%–81%)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-[11px] text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Working Knowledge / Exploring (60%–73%)</span>
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-glass rounded-xl p-6 flex flex-col justify-between hover:border-[#6366f1]/35 transition-all duration-300 shadow-md"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/25 flex items-center justify-center text-[#818cf8]">
                    {iconMap[group.icon] ?? <Sparkles size={16} />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{group.category}</h3>
                  </div>
                </div>
                <p className="text-[11px] text-[#94a3b8] mb-5 leading-snug">
                  {group.description}
                </p>

                {/* Skill Bars */}
                <div className="flex flex-col gap-3.5">
                  {group.skills.map((skill) => {
                    const style = tierStyles[skill.tier];
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-[#cbd5e1] font-medium">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded border font-semibold ${style.badge}`}
                            >
                              {skill.tierLabel}
                            </span>
                            <span className="text-xs font-mono text-[#64748b]">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="h-1.5 bg-[#0b0f17] rounded-full overflow-hidden border border-white/5">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${style.bar}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology tags row */}
        <div className="mt-16">
          <p className="text-center section-label mb-6">Complete Technology Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "Neo4j", "GraphRAG", "Cypher", "Python", "LangChain", "LangGraph",
              "Ollama", "FAISS", "Qdrant", "FastAPI", "Pandas", "Scikit-learn",
              "Docker", "AWS (Working Knowledge)", "NLTK (Foundations)",
              "PyTorch", "Airflow", "Power BI", "SQL", "Streamlit", "Electron", "React"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-[#94a3b8] bg-[#0c1017] border border-white/5 rounded-md hover:border-[#6366f1]/30 hover:text-white transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
