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
  { id: "ai-ml", label: "AI & ML\nEngineer", x: 0.5, y: 0.45, r: 26, color: "#6366f1", primary: true },
  { id: "data", label: "Data\nAnalytics", x: 0.3, y: 0.28, r: 22, color: "#06b6d4", primary: true },
  { id: "backend", label: "Python\nBackend", x: 0.7, y: 0.28, r: 22, color: "#10b981", primary: true },
  { id: "marketing", label: "Marketing\n& SEO", x: 0.22, y: 0.65, r: 20, color: "#f59e0b", primary: false },
  { id: "solutions", label: "System Design\n& Solutions", x: 0.78, y: 0.65, r: 20, color: "#d946ef", primary: false },
  { id: "graphrag", label: "GraphRAG\n(Exploring)", x: 0.38, y: 0.82, r: 18, color: "#818cf8", primary: false },
  { id: "rag", label: "RAG\nPipelines", x: 0.5, y: 0.18, r: 18, color: "#818cf8", primary: false },
  { id: "llm", label: "Local LLMs\n(Ollama)", x: 0.62, y: 0.82, r: 18, color: "#a855f7", primary: false },
  { id: "sql", label: "SQL Data\nWarehouse", x: 0.12, y: 0.42, r: 16, color: "#06b6d4", primary: false },
  { id: "aws", label: "AWS\nCloud", x: 0.88, y: 0.42, r: 16, color: "#10b981", primary: false },
];

const EDGES: Edge[] = [
  { source: "ai-ml", target: "data" },
  { source: "ai-ml", target: "backend" },
  { source: "ai-ml", target: "graphrag" },
  { source: "ai-ml", target: "rag" },
  { source: "ai-ml", target: "llm" },
  { source: "data", target: "sql" },
  { source: "data", target: "marketing" },
  { source: "backend", target: "aws" },
  { source: "backend", target: "solutions" },
  { source: "solutions", target: "ai-ml" },
  { source: "marketing", target: "data" },
  { source: "graphrag", target: "rag" },
  { source: "llm", target: "graphrag" },
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
            A live dynamic map showing how AI/ML engineering, data analytics, backend services, and growth strategy interconnect.
          </p>
        </div>

        <div className="card-glass rounded-2xl overflow-hidden border border-[#6366f1]/15" style={{ height: "420px" }}>
          <canvas ref={canvasRef} className="w-full h-full" aria-label="Interactive knowledge graph showing AI skill connections" />
        </div>
      </div>
    </section>
  );
}
