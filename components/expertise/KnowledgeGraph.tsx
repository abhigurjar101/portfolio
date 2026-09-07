"use client";

import { useEffect, useRef } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  primary: boolean;
}

interface Edge {
  source: string;
  target: string;
}

const NODES: Omit<Node, "vx" | "vy">[] = [
  { id: "rag", label: "RAG", x: 0.5, y: 0.5, r: 28, color: "#6366f1", primary: true },
  { id: "adv-rag", label: "Advanced RAG", x: 0.3, y: 0.25, r: 22, color: "#818cf8", primary: true },
  { id: "llm", label: "LLMs", x: 0.7, y: 0.25, r: 22, color: "#818cf8", primary: true },
  { id: "kg", label: "Knowledge\nGraphs", x: 0.2, y: 0.6, r: 20, color: "#a78bfa", primary: false },
  { id: "agents", label: "AI Agents", x: 0.8, y: 0.6, r: 20, color: "#a78bfa", primary: false },
  { id: "backend", label: "Backend", x: 0.5, y: 0.8, r: 18, color: "#7c3aed", primary: false },
  { id: "ml", label: "ML", x: 0.2, y: 0.85, r: 16, color: "#7c3aed", primary: false },
  { id: "aws", label: "AWS Cloud", x: 0.8, y: 0.85, r: 16, color: "#7c3aed", primary: false },
  { id: "nlp", label: "NLP", x: 0.1, y: 0.4, r: 14, color: "#6366f1", primary: false },
  { id: "cv", label: "CV", x: 0.9, y: 0.4, r: 14, color: "#6366f1", primary: false },
  { id: "python", label: "Python", x: 0.5, y: 0.15, r: 18, color: "#818cf8", primary: false },
];

const EDGES: Edge[] = [
  { source: "rag", target: "adv-rag" },
  { source: "rag", target: "llm" },
  { source: "rag", target: "kg" },
  { source: "rag", target: "agents" },
  { source: "rag", target: "backend" },
  { source: "adv-rag", target: "nlp" },
  { source: "adv-rag", target: "python" },
  { source: "llm", target: "agents" },
  { source: "llm", target: "python" },
  { source: "llm", target: "cv" },
  { source: "kg", target: "ml" },
  { source: "agents", target: "aws" },
  { source: "backend", target: "aws" },
  { source: "backend", target: "ml" },
  { source: "python", target: "backend" },
];

export default function KnowledgeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Build live nodes
    const nodes: Node[] = NODES.map((n) => ({
      ...n,
      x: n.x * canvas.width,
      y: n.y * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

    let raf: number;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Reposition if resized
      nodes.forEach((n) => {
        n.x = Math.max(n.r + 5, Math.min(canvas.width - n.r - 5, n.x));
        n.y = Math.max(n.r + 5, Math.min(canvas.height - n.r - 5, n.y));
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < n.r + 5 || n.x > canvas.width - n.r - 5) n.vx *= -1;
        if (n.y < n.r + 5 || n.y > canvas.height - n.r - 5) n.vy *= -1;
      });

      // Draw edges
      EDGES.forEach((e) => {
        const s = nodeMap[e.source];
        const t = nodeMap[e.target];
        if (!s || !t) return;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.strokeStyle = "rgba(99,102,241,0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((n) => {
        // Glow for primary
        if (n.primary) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 10, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(n.x, n.y, n.r, n.x, n.y, n.r + 12);
          grad.addColorStop(0, "rgba(99,102,241,0.2)");
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color + "22";
        ctx.strokeStyle = n.color + "88";
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        // Label
        ctx.fillStyle = "#f1f5f9";
        ctx.font = `${n.r > 20 ? "11" : "9"}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const lines = n.label.split("\n");
        const lineH = n.r > 20 ? 13 : 11;
        lines.forEach((line, i) => {
          ctx.fillText(line, n.x, n.y + (i - (lines.length - 1) / 2) * lineH);
        });
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="section-label mb-4">Expertise Map</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Knowledge <span className="gradient-text-accent">Graph</span>
          </h2>
          <p className="text-[#94a3b8] max-w-md mx-auto text-sm leading-relaxed">
            A live visualization of how my skills interconnect across the Gen AI domain.
          </p>
        </div>

        <div className="card-glass rounded-2xl overflow-hidden border border-[#6366f1]/15" style={{ height: "420px" }}>
          <canvas ref={canvasRef} className="w-full h-full" aria-label="Interactive knowledge graph showing AI skill connections" />
        </div>
      </div>
    </section>
  );
}
