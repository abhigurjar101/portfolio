"use client";

import { coreExpertise } from "@/data/skills";
import { Network, Database, Cpu, Brain, Layers, Code2, Server, Cloud, FlaskConical, Bot } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "GraphRAG": <Network size={20} />,
  "RAG & Vector Search": <Database size={20} />,
  "Local LLMs": <Brain size={20} />,
  "Agentic AI": <Bot size={20} />,
  "Neo4j & Ontologies": <Network size={20} />,
  "Python Engineering": <Code2 size={20} />,
  "Machine Learning": <Cpu size={20} />,
  "NLP & Vision": <FlaskConical size={20} />,
  "Data Engineering": <Server size={20} />,
  "AWS & Cloud": <Cloud size={20} />,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-28 relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Production Competencies</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core <span className="gradient-text-accent">Specializations</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Engineered around production Knowledge Graphs (Neo4j), on-device LLMs (Ollama), multi-hop GraphRAG pipelines, and corporate AI architecture training.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {coreExpertise.map((item, i) => (
            <div
              key={item.label}
              className="card-glass rounded-xl p-5 flex flex-col gap-3 group cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1]/40"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#818cf8] group-hover:bg-[#6366f1]/20 group-hover:text-white transition-colors">
                {iconMap[item.label] ?? <Brain size={20} />}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1 leading-snug">{item.label}</h3>
                <p className="text-[11px] text-[#94a3b8] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row reflecting actual CV background */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#111827]/40 border border-white/5">
          {[
            { value: "2 Years", label: "Gen AI & ML Engineer" },
            { value: "1 Year", label: "Python Developer" },
            { value: "3+ Years", label: "Total Engineering Exp" },
            { value: "100%", label: "Context-Grounded Answers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-accent mb-1">{stat.value}</div>
              <div className="text-[11px] text-[#94a3b8] tracking-wider uppercase font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
