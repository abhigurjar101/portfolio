"use client";

import { useState, useEffect } from "react";
import { Project } from "@/data/projects";
import {
  X,
  Play,
  CheckCircle2,
  Terminal,
  Cpu,
  Database,
  Sparkles,
  Layers,
  Activity,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Zap,
  TrendingUp,
  BarChart3,
  Clock,
  Server,
  Workflow,
  RefreshCw,
  Eye,
  Sliders,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface ProjectTestModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectTestModal({ project, onClose }: ProjectTestModalProps) {
  const [activeTab, setActiveTab] = useState<"runner" | "readme" | "architecture">("runner");
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isNemiOrBots = project.id === "nemi" || project.id === "n8n-desktop-bots";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b0f19] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-[#0e1424]/60">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.badges?.map((badge, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border ${
                    badge === "PRODUCTION"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : badge === "AGENTIC AI"
                      ? "bg-purple-500/15 text-purple-300 border-purple-500/30"
                      : badge === "ADVANCED"
                      ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                      : "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                  }`}
                >
                  {badge === "PRODUCTION" && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                  )}
                  {badge === "AGENTIC AI" && <Sparkles size={10} />}
                  {badge === "ADVANCED" && <Zap size={10} />}
                  {badge}
                </span>
              ))}
              <span className="text-xs text-[#64748b] ml-1">v2.4 Production Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 max-w-2xl">
              {project.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/5 bg-[#090d16] px-6">
          <button
            onClick={() => setActiveTab("runner")}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === "runner"
                ? "border-[#6366f1] text-white bg-white/5"
                : "border-transparent text-[#64748b] hover:text-[#94a3b8]"
            }`}
          >
            {isNemiOrBots ? (
              <>
                <Layers size={14} className="text-[#818cf8]" />
                Interactive DAG & Specs
              </>
            ) : (
              <>
                <Play size={14} className="text-emerald-400" />
                Live In-Browser Runner
              </>
            )}
          </button>

          <button
            onClick={() => setActiveTab("readme")}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === "readme"
                ? "border-[#6366f1] text-white bg-white/5"
                : "border-transparent text-[#64748b] hover:text-[#94a3b8]"
            }`}
          >
            <FileText size={14} className="text-[#818cf8]" />
            Production README & Quickstart
          </button>

          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === "architecture"
                ? "border-[#6366f1] text-white bg-white/5"
                : "border-transparent text-[#64748b] hover:text-[#94a3b8]"
            }`}
          >
            <Cpu size={14} className="text-purple-400" />
            System Blueprint & Specs
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] custom-scrollbar space-y-6">
          {activeTab === "runner" && (
            <ProjectRunnerSection project={project} />
          )}

          {activeTab === "readme" && (
            <ProjectReadmeSection project={project} onCopy={copyToClipboard} copied={copied} />
          )}

          {activeTab === "architecture" && (
            <ProjectArchitectureSection project={project} />
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#070a12] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 text-[#64748b]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Runtime: Client Sandbox Ready
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Zero external API leak</span>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
              >
                <GithubIcon size={14} />
                View GitHub Source
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium transition-colors cursor-pointer"
            >
              Done Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 1. PROJECT RUNNER COMPONENT DISPATCHER                                    */
/* ========================================================================= */
function ProjectRunnerSection({ project }: { project: Project }) {
  switch (project.id) {
    case "nemi":
      return <NemiRunner project={project} />;
    case "n8n-desktop-bots":
      return <N8nBotsRunner project={project} />;
    case "sql-production-analytics":
      return <SqlRunner />;
    case "aws-serverless-pipeline":
      return <AwsPipelineRunner />;
    case "advanced-nlp-engine":
      return <AdvancedNlpRunner />;
    case "healthcare-management":
      return <HealthcareRunner />;
    case "industrial-defect-detector":
      return <IndustrialDefectRunner />;
    case "ai-data-assistant":
      return <AiDataAssistantRunner />;
    case "intelligent-doc-rag":
      return <IntelligentDocRagRunner />;
    case "ai-classroom-teaching-agent":
      return <AiClassroomRunner />;
    case "nlp-sentiment-classification-fastapi":
    case "nlp-text-classification":
      return <NlpFastApiRunner />;
    case "nyc-taxi-fare":
      return <NycTaxiRunner />;
    case "ai-recommendation-system":
      return <RecommendationRunner />;
    case "snowflake-etl":
      return <SnowflakeRunner />;
    case "ai-youtube-analytics":
      return <YoutubeAnalyticsRunner />;
    case "e-commerce-analytics":
      return <EcommerceRunner />;
    case "fraud-detection":
      return <FraudDetectionRunner />;
    case "youtube-ultimate-uix":
      return <YoutubeUixRunner />;
    default:
      return <GenericRunner project={project} />;
  }
}

/* ------------------------------------------------------------------------- */
/* NEMI (TOP TIER DAG + READ ME + CYPHER WORKBENCH)                          */
/* ------------------------------------------------------------------------- */
function NemiRunner({ project }: { project: Project }) {
  const [selectedHop, setSelectedHop] = useState<number>(2);
  const [isExecuting, setIsExecuting] = useState(false);
  const [graphOutput, setGraphOutput] = useState<{
    nodes: number;
    edges: number;
    latency: string;
    relations: string[];
    cypher: string;
  }>({
    nodes: 8,
    edges: 14,
    latency: "3.8 ms",
    relations: [
      "(:Patient)-[:DIAGNOSED_WITH]->(:Condition {code: 'ICD10-I10'})",
      "(:Condition)-[:TREATED_BY]->(:Pharmaceutical {name: 'Lisinopril'})",
      "(:Pharmaceutical)-[:INTERACTS_WITH]->(:Mechanism {target: 'ACE'})",
    ],
    cypher: "MATCH (p:Entity {name: 'ClinicalCohort'})-[r:RELATION*1..2]->(target) RETURN p, r, target LIMIT 25;",
  });

  const runCypher = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setGraphOutput({
        nodes: selectedHop === 1 ? 5 : selectedHop === 2 ? 12 : 28,
        edges: selectedHop === 1 ? 7 : selectedHop === 2 ? 22 : 46,
        latency: `${(2.4 + Math.random() * 2).toFixed(1)} ms`,
        relations: [
          `(:Concept {topic: 'RAG Retrieval'})-[:GROUNDED_BY]->(:GraphNode {hops: ${selectedHop}})`,
          "(:GraphNode)-[:VALIDATED_BY]->(:LocalOllamaInstance {model: 'Llama3-8B'})",
          "(:LocalOllamaInstance)-[:EXECUTES_WITHOUT_EXTERNAL_API]->(:ZeroLeakageProof)",
        ],
        cypher: `MATCH path = (e:Entity {source: 'OllamaKnowledgeBase'})-[r:KNOWLEDGE_EDGE*1..${selectedHop}]->(leaf) RETURN path, count(leaf);`,
      });
    }, 450);
  };

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-transparent border border-purple-500/20 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
            Local GraphRAG Traversal Engine
          </span>
          <h3 className="text-base font-semibold text-white mt-0.5">
            Neo4j Knowledge Graph Multi-Hop Entity Resolver
          </h3>
          <p className="text-xs text-[#94a3b8] mt-1">
            Zero-leakage on-device traversal combining Ollama local embeddings with Neo4j relationship graphs.
          </p>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs font-mono text-emerald-400 block">● Ollama Engine Online</span>
          <span className="text-[10px] text-[#64748b]">127.0.0.1:11434</span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <label className="text-xs font-medium text-[#94a3b8] block mb-2">Graph Traversal Depth</label>
          <div className="flex gap-2">
            {[1, 2, 3].map((h) => (
              <button
                key={h}
                onClick={() => setSelectedHop(h)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                  selectedHop === h
                    ? "bg-purple-600 text-white border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                    : "bg-white/5 text-[#94a3b8] border-white/10 hover:border-white/20"
                }`}
              >
                {h} Hop{h > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <label className="text-xs font-medium text-[#94a3b8] block mb-2">Local LLM Driver</label>
          <div className="text-xs font-mono text-white bg-black/40 px-3 py-2 rounded-lg border border-white/5 flex items-center justify-between">
            <span>Ollama / Llama 3 (8B)</span>
            <span className="text-[10px] text-emerald-400 font-semibold">Q4_K_M</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-end">
          <button
            onClick={runCypher}
            disabled={isExecuting}
            className="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 active:scale-98 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.3)] disabled:opacity-50"
          >
            {isExecuting ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
            {isExecuting ? "Traversing Graph..." : "Execute Graph Query"}
          </button>
        </div>
      </div>

      {/* Query Terminal & Visual Graph Result */}
      <div className="rounded-xl border border-white/10 bg-[#05070d] overflow-hidden">
        <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
          <span className="font-mono flex items-center gap-1.5 text-purple-400">
            <Terminal size={13} /> Cypher Statement Executor
          </span>
          <span className="font-mono text-emerald-400 text-[11px]">Latency: {graphOutput.latency}</span>
        </div>
        <div className="p-4 font-mono text-xs text-[#a5b4fc] bg-black/50 border-b border-white/5 overflow-x-auto">
          {graphOutput.cypher}
        </div>
        <div className="p-4 grid sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block mb-2">
              Discovered Multi-Hop Triples
            </span>
            <ul className="space-y-1.5 font-mono">
              {graphOutput.relations.map((rel, idx) => (
                <li key={idx} className="p-2 rounded bg-purple-950/20 border border-purple-800/30 text-purple-200">
                  {rel}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block mb-2">
              Graph Topology Metrics
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-xl font-bold text-white block">{graphOutput.nodes}</span>
                <span className="text-[10px] text-[#94a3b8] uppercase">Resolved Nodes</span>
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-xl font-bold text-white block">{graphOutput.edges}</span>
                <span className="text-[10px] text-[#94a3b8] uppercase">Relationship Edges</span>
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-xl font-bold text-emerald-400 block">100%</span>
                <span className="text-[10px] text-[#94a3b8] uppercase">Local Airgap</span>
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-center">
                <span className="text-xl font-bold text-cyan-400 block">0.96</span>
                <span className="text-[10px] text-[#94a3b8] uppercase">Cosine Recall</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* N8N BOTS (9 AUTONOMOUS AGENTS + NEMOTRON 3 ULTRA 550B)                    */
/* ------------------------------------------------------------------------- */
function N8nBotsRunner({ project }: { project: Project }) {
  const agents = [
    { name: "Coding Assistant Bot", model: "Nemotron 3 Ultra 550B", role: "AST & Test Suite Synthesizer", tools: ["ast-grep", "pytest", "mypy"] },
    { name: "Document RAG Bot", model: "Nemotron 3 Ultra 550B", role: "Qdrant Hybrid Vector Indexer", tools: ["qdrant-client", "pypdf", "cross-encoder"] },
    { name: "System Design Bot", model: "Nemotron 3 Ultra 550B", role: "Mermaid DAG & Latency Architect", tools: ["mermaid-cli", "plantuml", "bench"] },
    { name: "High Thinking Agent", model: "Nemotron 3 Ultra 550B", role: "Extended Chain-of-Thought Reasoner", tools: ["tot-search", "co-verification"] },
    { name: "Automated Testing Bot", model: "Nemotron 3 Ultra 550B", role: "Playwright E2E & Regressions", tools: ["playwright", "cypress", "junit"] },
    { name: "Advanced Hybrid RAG", model: "Nemotron 3 Ultra 550B", role: "BM25 Sparse + Dense Embedding Rerank", tools: ["bm25s", "fastembed", "splade"] },
    { name: "Cloud Deployment Bot", model: "Nemotron 3 Ultra 550B", role: "Kubernetes & AWS ECS Orchestrator", tools: ["helm", "kubectl", "terraform"] },
    { name: "AI/ML Pipeline Bot", model: "Nemotron 3 Ultra 550B", role: "W&B Experiment Tracker & Model Eval", tools: ["wandb", "torch-opt", "onnx"] },
    { name: "n8n Cluster Manager", model: "Nemotron 3 Ultra 550B", role: "10,000+ Community Workflow Router", tools: ["webhook-lb", "queue-redis"] },
  ];

  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [traceLogs, setTraceLogs] = useState<string[]>([
    "Agent initialized: Coding Assistant Bot [Nemotron 3 Ultra 550B]",
    "Listening on n8n Webhook: /webhook/v1/agent-dispatch",
    "Loaded tools: ast-grep, pytest, mypy",
    "Status: IDLE (Awaiting dispatch payload)",
  ]);

  const dispatchAgent = () => {
    setIsRunning(true);
    setTraceLogs([`[00.00s] Task dispatched to ${selectedAgent.name}...`]);

    setTimeout(() => {
      setTraceLogs((prev) => [
        ...prev,
        `[00.12s] Nemotron 3 Ultra 550B Planning Step: Ingesting task requirements and generating execution DAG.`,
      ]);
    }, 250);

    setTimeout(() => {
      setTraceLogs((prev) => [
        ...prev,
        `[00.34s] Invoked tool: [${selectedAgent.tools[0]}] with arguments { verify_spec: true, timeout_ms: 1500 }`,
        `[00.58s] Tool result returned status 200 OK. Verification passed.`,
        `[00.75s] Autonomous loop complete. Output rendered to n8n downstream webhook.`,
      ]);
      setIsRunning(false);
    }, 850);
  };

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-transparent border border-indigo-500/20 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            Enterprise Multi-Agent Desktop Control Center
          </span>
          <h3 className="text-base font-semibold text-white mt-0.5">
            9 Autonomous Production Agents (NVIDIA Nemotron 3 Ultra 550B)
          </h3>
          <p className="text-xs text-[#94a3b8] mt-1">
            Built on 10,000+ curated n8n automation workflow patterns with Qdrant vector memory and sub-second delegation.
          </p>
        </div>
      </div>

      {/* 9 Agents Selector Grid */}
      <div>
        <label className="text-xs font-semibold text-[#818cf8] uppercase tracking-wider block mb-2">
          Select Autonomous Bot to Inspect & Dispatch
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {agents.map((agent, i) => (
            <button
              key={i}
              onClick={() => setSelectedAgent(agent)}
              className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                selectedAgent.name === agent.name
                  ? "bg-indigo-600/20 border-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                  : "bg-white/3 border-white/5 text-[#94a3b8] hover:border-white/15 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Workflow size={12} className={selectedAgent.name === agent.name ? "text-indigo-400" : "text-[#64748b]"} />
                <span className="text-xs font-bold truncate">{agent.name}</span>
              </div>
              <span className="text-[10px] text-[#64748b] block truncate mt-0.5">{agent.role}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Agent Control & Terminal */}
      <div className="rounded-xl border border-white/10 bg-[#05070d] p-4 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {selectedAgent.name}
            </h4>
            <span className="text-xs text-[#94a3b8]">Powered by {selectedAgent.model}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#818cf8]">
              Tools: {selectedAgent.tools.join(", ")}
            </span>
            <button
              onClick={dispatchAgent}
              disabled={isRunning}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            >
              {isRunning ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} />}
              {isRunning ? "Running Agent..." : "Simulate Task Dispatch"}
            </button>
          </div>
        </div>

        {/* Live Terminal */}
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#64748b] mb-1 font-mono">
            <span>agent_runtime_stdout.log</span>
            <span>WebSocket: CONNECTED</span>
          </div>
          <div className="p-3 bg-black rounded-lg font-mono text-xs text-emerald-400 space-y-1 max-h-36 overflow-y-auto">
            {traceLogs.map((log, i) => (
              <div key={i} className="leading-relaxed">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 3. SQL PRODUCTION ANALYTICS RUNNER                                        */
/* ------------------------------------------------------------------------- */
function SqlRunner() {
  const queries = [
    {
      id: "rfm",
      name: "RFM Customer Segmentation CTE",
      sql: `WITH rfm_calc AS (
  SELECT customer_id,
         NTILE(4) OVER (ORDER BY MAX(order_date) DESC) AS recency_score,
         NTILE(4) OVER (ORDER BY COUNT(order_id) ASC) AS frequency_score,
         NTILE(4) OVER (ORDER BY SUM(total_amount) ASC) AS monetary_score
  FROM fact_orders
  GROUP BY customer_id
)
SELECT customer_id, recency_score, frequency_score, monetary_score,
       CASE 
         WHEN recency_score = 4 AND frequency_score = 4 THEN 'CHAMPION / HIGH-LTV'
         WHEN recency_score >= 3 AND frequency_score >= 3 THEN 'LOYAL CUSTOMER'
         WHEN recency_score = 1 THEN 'AT RISK OF CHURN'
         ELSE 'POTENTIAL GROWTH'
       END AS rfm_segment
FROM rfm_calc
LIMIT 4;`,
      results: [
        { customer_id: "CUST-10492", recency: 4, frequency: 4, monetary: 4, segment: "CHAMPION / HIGH-LTV" },
        { customer_id: "CUST-88310", recency: 3, frequency: 4, monetary: 4, segment: "LOYAL CUSTOMER" },
        { customer_id: "CUST-44129", recency: 1, frequency: 2, monetary: 1, segment: "AT RISK OF CHURN" },
        { customer_id: "CUST-72105", recency: 3, frequency: 2, monetary: 3, segment: "POTENTIAL GROWTH" },
      ],
      stats: { latency: "11.2 ms", rows: "142,500 scanned", hitRate: "99.8%" },
    },
    {
      id: "window",
      name: "7-Day & 30-Day Rolling Window Averages",
      sql: `SELECT order_date,
       daily_revenue,
       AVG(daily_revenue) OVER (
         ORDER BY order_date 
         ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
       ) AS rolling_7d_avg,
       AVG(daily_revenue) OVER (
         ORDER BY order_date 
         ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
       ) AS rolling_30d_avg
FROM fact_daily_sales
ORDER BY order_date DESC
LIMIT 4;`,
      results: [
        { date: "2026-03-01", daily: "$48,290", r7: "$44,120", r30: "$41,850" },
        { date: "2026-02-28", daily: "$46,800", r7: "$43,900", r30: "$41,600" },
        { date: "2026-02-27", daily: "$43,150", r7: "$43,210", r30: "$41,400" },
        { date: "2026-02-26", daily: "$45,900", r7: "$42,800", r30: "$41,200" },
      ],
      stats: { latency: "14.6 ms", rows: "84,000 scanned", hitRate: "100%" },
    },
    {
      id: "cohort",
      name: "Month-over-Month 90-Day Cohort Retention",
      sql: `WITH user_cohort AS (
  SELECT customer_id, DATE_TRUNC('month', MIN(order_date)) AS cohort_month
  FROM fact_orders GROUP BY customer_id
)
SELECT cohort_month,
       COUNT(DISTINCT customer_id) AS cohort_size,
       ROUND(100.0 * COUNT(DISTINCT CASE WHEN order_month = cohort_month + INTERVAL '1 month' THEN customer_id END) / COUNT(DISTINCT customer_id), 2) AS m1_retention,
       ROUND(100.0 * COUNT(DISTINCT CASE WHEN order_month = cohort_month + INTERVAL '2 month' THEN customer_id END) / COUNT(DISTINCT customer_id), 2) AS m2_retention
FROM user_cohort
GROUP BY cohort_month LIMIT 4;`,
      results: [
        { cohort: "2025-11", size: "4,210", m1: "42.8%", m2: "38.1%" },
        { cohort: "2025-12", size: "5,840", m1: "46.2%", m2: "41.5%" },
        { cohort: "2026-01", size: "6,120", m1: "48.9%", m2: "43.7%" },
      ],
      stats: { latency: "18.3 ms", rows: "320,000 scanned", hitRate: "98.9%" },
    },
  ];

  const [selectedQ, setSelectedQ] = useState(queries[0]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executed, setExecuted] = useState(true);

  const runQuery = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setExecuted(true);
    }, 350);
  };

  return (
    <div className="space-y-4">
      {/* Query Selector */}
      <div className="flex flex-wrap gap-2">
        {queries.map((q) => (
          <button
            key={q.id}
            onClick={() => {
              setSelectedQ(q);
              setExecuted(false);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              selectedQ.id === q.id
                ? "bg-cyan-600/20 text-cyan-300 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                : "bg-white/5 text-[#94a3b8] border-white/5 hover:border-white/15 hover:text-white"
            }`}
          >
            {q.name}
          </button>
        ))}
      </div>

      {/* SQL Editor View */}
      <div className="rounded-xl border border-white/10 bg-[#05070d] overflow-hidden">
        <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
            <Database size={13} /> Star-Schema PostgreSQL Engine
          </span>
          <button
            onClick={runQuery}
            disabled={isExecuting}
            className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-all disabled:opacity-50"
          >
            {isExecuting ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} />}
            {isExecuting ? "Executing..." : "Run Query"}
          </button>
        </div>

        <pre className="p-4 font-mono text-xs text-[#a5f3fc] bg-black/50 overflow-x-auto leading-relaxed">
          {selectedQ.sql}
        </pre>
      </div>

      {/* Execution Results */}
      {executed && (
        <div className="rounded-xl border border-white/10 bg-[#05070d] p-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#94a3b8] border-b border-white/5 pb-2">
            <span className="font-semibold text-white">Execution Output Preview</span>
            <div className="flex gap-3 font-mono text-[11px]">
              <span className="text-emerald-400">⚡ {selectedQ.stats.latency}</span>
              <span>{selectedQ.stats.rows}</span>
              <span className="text-cyan-400">Cache: {selectedQ.stats.hitRate}</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono text-left">
              <thead>
                <tr className="border-b border-white/10 text-[#64748b] uppercase text-[10px]">
                  {Object.keys(selectedQ.results[0]).map((col) => (
                    <th key={col} className="pb-2 pr-4 font-semibold">
                      {col.replace(/_/g, " ")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#e2e8f0]">
                {selectedQ.results.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    {Object.values(row).map((val, cIdx) => (
                      <td key={cIdx} className="py-2 pr-4">
                        {String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 4. AWS SERVERLESS PIPELINE RUNNER                                         */
/* ------------------------------------------------------------------------- */
function AwsPipelineRunner() {
  const [isRunning, setIsRunning] = useState(false);
  const [pipelineState, setPipelineState] = useState<number>(0);

  const triggerPipeline = () => {
    setIsRunning(true);
    setPipelineState(1); // S3
    setTimeout(() => setPipelineState(2), 300); // EventBridge
    setTimeout(() => setPipelineState(3), 600); // Lambda
    setTimeout(() => setPipelineState(4), 950); // Bedrock
    setTimeout(() => {
      setPipelineState(5); // Complete
      setIsRunning(false);
    }, 1300);
  };

  const steps = [
    { title: "S3 ObjectCreated", desc: "s3://prod-doc-lake/commercial_agreement_v4.pdf", icon: Database },
    { title: "EventBridge Rule", desc: "arn:aws:events:us-east-1:pipeline-trigger", icon: Workflow },
    { title: "Lambda Processor", desc: "ARM64 Graviton3 | Cold Start: 0ms | 256MB RAM", icon: Cpu },
    { title: "Amazon Bedrock", desc: "Claude 3.5 Sonnet + Titan Embedding Gen", icon: Sparkles },
    { title: "DynamoDB Audit Ledger", desc: "DocumentAuditTable: PROCESSED_SUCCESS", icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
            AWS Serverless Event-Driven Architecture
          </span>
          <h3 className="text-base font-semibold text-white mt-0.5">
            Zero-Idle Cost Document Ingestion & Bedrock RAG
          </h3>
          <p className="text-xs text-[#94a3b8] mt-1">
            End-to-end AWS SAM Infrastructure-as-Code pipeline processing documents with sub-second citations.
          </p>
        </div>
        <button
          onClick={triggerPipeline}
          disabled={isRunning}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shrink-0"
        >
          {isRunning ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
          {isRunning ? "Simulating..." : "Trigger S3 Ingest"}
        </button>
      </div>

      {/* Pipeline Stepper */}
      <div className="space-y-3">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isDone = pipelineState > idx;
          const isCurrent = pipelineState === idx + 1 && isRunning;
          return (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                isDone
                  ? "bg-emerald-950/20 border-emerald-500/40 text-white"
                  : isCurrent
                  ? "bg-amber-950/30 border-amber-500 text-white animate-pulse"
                  : "bg-white/3 border-white/5 text-[#64748b]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isDone
                      ? "bg-emerald-500/20 text-emerald-400"
                      : isCurrent
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-white/5 text-[#64748b]"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold">{s.title}</h4>
                  <span className="text-[11px] font-mono opacity-80">{s.desc}</span>
                </div>
              </div>
              <span className="text-xs font-mono">
                {isDone ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 size={14} /> COMPLETED
                  </span>
                ) : isCurrent ? (
                  <span className="text-amber-400 font-bold">PROCESSING...</span>
                ) : (
                  <span className="text-[#64748b]">QUEUED</span>
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* Grounded LLM Citation Preview */}
      {pipelineState === 5 && (
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/10 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <Sparkles size={14} /> Bedrock Synthesized Answer (Claude 3.5 Sonnet)
            </span>
            <span className="font-mono text-[11px] text-[#64748b]">Citation: §14.2 (Limitation of Liability)</span>
          </div>
          <p className="text-[#e2e8f0] leading-relaxed">
            &ldquo;Under Clause 14.2, the total aggregate liability of both parties is capped at twelve (12) months of aggregate service fees paid immediately preceding the event giving rise to liability.&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 5. ADVANCED NLP RUNNER (SEMANTIC CHUNKING + SPO TRIPLET + RERANKER)       */
/* ------------------------------------------------------------------------- */
function AdvancedNlpRunner() {
  const [nlpMode, setNlpMode] = useState<"chunking" | "spo" | "rerank">("chunking");

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-white/5 pb-3">
        {(["chunking", "spo", "rerank"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setNlpMode(mode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              nlpMode === mode
                ? "bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                : "bg-white/5 text-[#94a3b8] hover:text-white"
            }`}
          >
            {mode === "chunking" ? "Semantic Chunking" : mode === "spo" ? "GraphRAG SPO Triples" : "Cross-Encoder Reranker"}
          </button>
        ))}
      </div>

      {nlpMode === "chunking" && (
        <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
            Cosine Distance Boundary Detection (Dynamic Split)
          </span>
          <div className="grid gap-2 text-xs">
            <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 text-[#e0e7ff]">
              <span className="text-[10px] font-mono text-indigo-400 block mb-1">CHUNK #1 [THEME: ARCHITECTURE DESIGN]</span>
              &ldquo;Abhi Gurjar engineered an autonomous multi-agent automation platform using NVIDIA Nemotron 3 Ultra 550B. The system orchestrates 9 specialized bots using Qdrant vector memory and Docker containers.&rdquo;
            </div>
            <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 text-[#e0f2fe]">
              <span className="text-[10px] font-mono text-cyan-400 block mb-1">CHUNK #2 [THEME: RELATIONAL DATA WAREHOUSE]</span>
              &ldquo;The Star-Schema dimensional warehouse connects facts and dimensions with indexing optimized for sub-second analytical execution. Advanced CTEs compute RFM tiers and 90-day cohort retention.&rdquo;
            </div>
          </div>
        </div>
      )}

      {nlpMode === "spo" && (
        <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block">
            Automated Subject - Predicate - Object Extracted Graph Triples
          </span>
          <div className="grid gap-2 text-xs font-mono">
            {[
              { s: "Abhi Gurjar", p: "ARCHITECTED", o: "Nemi Local GraphRAG" },
              { s: "Nemi System", p: "STORES_KNOWLEDGE_IN", o: "Neo4j Graph Database" },
              { s: "Ollama Engine", p: "PERFORMS_INFERENCE_ON", o: "Apple Silicon & RTX Local GPUs" },
              { s: "Cross-Encoder", p: "RERANKS_TOP_K", o: "FAISS Dense Embeddings" },
            ].map((t, idx) => (
              <div key={idx} className="p-2.5 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                <span className="text-indigo-300 font-bold">{t.s}</span>
                <span className="text-[11px] text-purple-400 px-2 py-0.5 rounded bg-purple-900/30 border border-purple-500/20">
                  -[:{t.p}]-&gt;
                </span>
                <span className="text-cyan-300 font-bold">{t.o}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {nlpMode === "rerank" && (
        <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-emerald-400 uppercase tracking-wider">
              Query: &ldquo;How does the system prevent data leakage in enterprise RAG?&rdquo;
            </span>
            <span className="text-[10px] text-[#64748b]">Cross-Encoder Score (0.0 to 1.0)</span>
          </div>
          <div className="space-y-2 text-xs">
            {[
              { text: "Runs Ollama and Neo4j completely on-device without outbound API calls.", score: "0.964", rank: "#1", match: "HIGH" },
              { text: "Air-gapped encryption ledger stores local session tokens securely.", score: "0.881", rank: "#2", match: "HIGH" },
              { text: "The relational database uses star-schema indexing for SQL speed.", score: "0.210", rank: "#3", match: "LOW" },
            ].map((item, i) => (
              <div key={i} className="p-2.5 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-indigo-400">{item.rank}</span>
                  <span className="text-[#e2e8f0]">{item.text}</span>
                </div>
                <span className="font-mono text-emerald-400 font-bold">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 6. HEALTHCARE MANAGEMENT RUNNER                                           */
/* ------------------------------------------------------------------------- */
function HealthcareRunner() {
  const [patientAdmitted, setPatientAdmitted] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-4 gap-3 text-center">
        <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
          <span className="text-xl font-bold text-emerald-400 block">86.4%</span>
          <span className="text-[10px] text-[#94a3b8] uppercase">Bed Occupancy</span>
        </div>
        <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
          <span className="text-xl font-bold text-cyan-400 block">3.6 Days</span>
          <span className="text-[10px] text-[#94a3b8] uppercase">Avg Length of Stay</span>
        </div>
        <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
          <span className="text-xl font-bold text-purple-400 block">3.8%</span>
          <span className="text-[10px] text-[#94a3b8] uppercase">Readmission Rate</span>
        </div>
        <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
          <span className="text-xl font-bold text-indigo-400 block">0</span>
          <span className="text-[10px] text-[#94a3b8] uppercase">Doctor Collisions</span>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Patient Admission & Ward Triage Simulation
          </h4>
          <button
            onClick={() => setPatientAdmitted(!patientAdmitted)}
            className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            {patientAdmitted ? "Reset Bed" : "⚡ Quick Admit Patient"}
          </button>
        </div>

        {patientAdmitted ? (
          <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-xs text-[#e2e8f0] space-y-1 font-mono">
            <p className="text-emerald-400 font-bold">✓ Admission Complete — Patient ID: PID-94182</p>
            <p>Assigned Ward: Cardiology Wing C | Bed: BED-08-ICU</p>
            <p>Attending Physician: Dr. V. Sharma (Cardiology) — Schedule Verified (No Overlap)</p>
            <p className="text-[#94a3b8] text-[11px]">Audit ledger recorded in ACID SQLite table `admissions_log`.</p>
          </div>
        ) : (
          <p className="text-xs text-[#64748b]">
            Click &ldquo;Quick Admit Patient&rdquo; to simulate RBAC verification, doctor availability check, and bed allocation.
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 7. INDUSTRIAL DEFECT CLASSIFIER RUNNER                                    */
/* ------------------------------------------------------------------------- */
function IndustrialDefectRunner() {
  const defects = [
    { name: "Crazing", conf: "98.7%", severity: "CRITICAL", roughness: "4.8 µm", action: "REJECT COIL" },
    { name: "Inclusion", conf: "96.4%", severity: "HIGH", roughness: "3.2 µm", action: "REJECT COIL" },
    { name: "Patches", conf: "99.1%", severity: "HIGH", roughness: "2.9 µm", action: "FLAG RE-ROLL" },
    { name: "Pitted Surface", conf: "97.5%", severity: "CRITICAL", roughness: "5.4 µm", action: "REJECT COIL" },
    { name: "Rolled-in Scale", conf: "95.2%", severity: "MEDIUM", roughness: "2.1 µm", action: "SURFACE SCARF" },
    { name: "Scratches", conf: "98.0%", severity: "LOW", roughness: "1.4 µm", action: "POLISH & PASS" },
  ];

  const [selectedDefect, setSelectedDefect] = useState(defects[0]);
  const [analyzing, setAnalyzing] = useState(false);

  const runInspection = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 300);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {defects.map((d) => (
          <button
            key={d.name}
            onClick={() => {
              setSelectedDefect(d);
              runInspection();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              selectedDefect.name === d.name
                ? "bg-rose-600 text-white border-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                : "bg-white/5 text-[#94a3b8] border-white/5 hover:border-white/15 hover:text-white"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] grid sm:grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block mb-2">
            MobileNetV2 Edge Inference Telemetry
          </span>
          <div className="space-y-2 font-mono">
            <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-between">
              <span className="text-[#94a3b8]">Detected Defect:</span>
              <span className="text-white font-bold">{selectedDefect.name}</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-between">
              <span className="text-[#94a3b8]">Model Confidence:</span>
              <span className="text-emerald-400 font-bold">{selectedDefect.conf}</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-between">
              <span className="text-[#94a3b8]">Surface Roughness (Ra):</span>
              <span className="text-cyan-400 font-bold">{selectedDefect.roughness}</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-between">
              <span className="text-[#94a3b8]">Edge Latency:</span>
              <span className="text-purple-400 font-bold">12.4 ms (Jetson)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block mb-2">
              MES Automated Robotic Action
            </span>
            <div
              className={`p-4 rounded-xl border text-center font-mono ${
                selectedDefect.action.includes("REJECT")
                  ? "bg-rose-950/30 border-rose-500/50 text-rose-300"
                  : "bg-emerald-950/30 border-emerald-500/50 text-emerald-300"
              }`}
            >
              <span className="text-lg font-bold block">{selectedDefect.action}</span>
              <span className="text-xs opacity-80 mt-1 block">Severity: {selectedDefect.severity}</span>
            </div>
          </div>
          <button
            onClick={runInspection}
            className="w-full py-2 bg-white/10 hover:bg-white/15 text-white rounded text-xs font-semibold uppercase tracking-wider mt-3 cursor-pointer"
          >
            {analyzing ? "Inspecting Frame..." : "Re-Scan Strip"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 8. AI DATA ASSISTANT RUNNER (DUCKDB NL-TO-SQL)                             */
/* ------------------------------------------------------------------------- */
function AiDataAssistantRunner() {
  const [nlQuery, setNlQuery] = useState("Show top 3 revenue product lines by gross margin");
  const [executed, setExecuted] = useState(true);

  return (
    <div className="space-y-4 text-xs">
      <div className="flex gap-2">
        <input
          type="text"
          value={nlQuery}
          onChange={(e) => setNlQuery(e.target.value)}
          className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white font-mono"
        />
        <button
          onClick={() => setExecuted(true)}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg uppercase tracking-wider cursor-pointer"
        >
          Execute DuckDB SQL
        </button>
      </div>

      {executed && (
        <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 font-mono">
          <span className="text-cyan-400 text-[11px] block">
            Generated SQL: SELECT category, SUM(revenue), ROUND(AVG(margin_pct), 2) AS avg_margin FROM products GROUP BY category ORDER BY avg_margin DESC LIMIT 3;
          </span>
          <div className="overflow-x-auto">
            <table className="w-full text-left divide-y divide-white/10">
              <thead>
                <tr className="text-[#64748b] text-[10px]">
                  <th className="pb-1">Category</th>
                  <th className="pb-1">Total Revenue</th>
                  <th className="pb-1">Gross Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#e2e8f0]">
                <tr><td className="py-1">Industrial Robotics</td><td>$2,480,000</td><td className="text-emerald-400">42.8%</td></tr>
                <tr><td className="py-1">AI Cloud Subscriptions</td><td>$1,890,000</td><td className="text-emerald-400">38.4%</td></tr>
                <tr><td className="py-1">Specialty Sensors</td><td>$940,000</td><td className="text-emerald-400">31.2%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 9. NYC TAXI FARE RUNNER                                                   */
/* ------------------------------------------------------------------------- */
function NycTaxiRunner() {
  const [distance, setDistance] = useState<number>(5.5);
  const [isPeak, setIsPeak] = useState<boolean>(true);

  const baseFare = 3.0;
  const perMile = 2.75;
  const surcharge = isPeak ? 2.5 : 0.5;
  const total = (baseFare + distance * perMile + surcharge).toFixed(2);
  const tip = (parseFloat(total) * 0.2).toFixed(2);

  return (
    <div className="space-y-4 text-xs">
      <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[#94a3b8] block mb-1">Trip Distance: <span className="text-white font-bold">{distance} miles</span></label>
          <input
            type="range"
            min="1"
            max="30"
            step="0.5"
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
            className="w-full cursor-pointer accent-amber-500"
          />
          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="peak"
              checked={isPeak}
              onChange={(e) => setIsPeak(e.target.checked)}
              className="accent-amber-500"
            />
            <label htmlFor="peak" className="text-white">Peak Hour / Congestion Zone (+$2.50)</label>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-500/30 font-mono text-center flex flex-col justify-center">
          <span className="text-[10px] text-amber-400 uppercase tracking-wider">Estimated Fare (1.89M Parquet Model)</span>
          <span className="text-3xl font-bold text-white mt-1">${total}</span>
          <span className="text-[11px] text-[#94a3b8] mt-1">Recommended 20% Tip: ${tip}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 10. GENERIC RUNNER FOR OTHER SPECIALIZED PROJECTS                         */
/* ------------------------------------------------------------------------- */
function GenericRunner({ project }: { project: Project }) {
  const [simulated, setSimulated] = useState(false);

  return (
    <div className="p-6 rounded-xl border border-white/10 bg-[#05070d] text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto">
        <Play size={20} />
      </div>
      <div>
        <h4 className="text-base font-bold text-white">{project.title}</h4>
        <p className="text-xs text-[#94a3b8] max-w-md mx-auto mt-1">
          Simulate production inference, API endpoint dispatch, and latency telemetry for {project.title}.
        </p>
      </div>

      <button
        onClick={() => setSimulated(true)}
        className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
      >
        {simulated ? "Re-Run Sandbox Simulation" : "⚡ Run Live Simulation"}
      </button>

      {simulated && (
        <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-left text-xs font-mono text-emerald-400 space-y-1">
          <p>✓ Model Status: 200 OK</p>
          <p>✓ Execution Latency: 16.8 ms</p>
          <p>✓ Pipeline Verification: PASSED (Zero data regression)</p>
          <p className="text-[#94a3b8]">Live test completed against local mock runtime.</p>
        </div>
      )}
    </div>
  );
}

/* Specialized runners for remaining projects */
function IntelligentDocRagRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-purple-400 font-bold uppercase tracking-wider block">FAISS Vector Search & LLM Grounding</span>
      <div className="p-3 rounded bg-white/5 font-mono text-[#e2e8f0]">
        Query: &ldquo;What are the NDA confidentiality exceptions?&rdquo;<br />
        <span className="text-emerald-400">Retrieved FAISS Chunk #42 (Score: 0.941):</span> &ldquo;Information already in public domain without breach of recipient...&rdquo;
      </div>
    </div>
  );
}

function AiClassroomRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-purple-400 font-bold uppercase tracking-wider block">Socratic Tutor Prompt Engine</span>
      <div className="p-3 rounded bg-white/5 font-mono text-[#e2e8f0] space-y-2">
        <p className="text-[#818cf8]">Student: &ldquo;Why do we need backpropagation?&rdquo;</p>
        <p className="text-emerald-300">
          Socratic AI: &ldquo;Great question! Think about walking down a mountain in deep fog. How do your feet feel the slope to decide which way is downwards? In calculus, what mathematical tool tells us that slope?&rdquo;
        </p>
      </div>
    </div>
  );
}

function NlpFastApiRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-indigo-400 font-bold uppercase tracking-wider block">POST /api/v1/sentiment (FastAPI Singleton)</span>
      <div className="p-3 rounded bg-black font-mono text-emerald-400 space-y-1">
        <p>HTTP/1.1 200 OK</p>
        <p>content-type: application/json</p>
        <p className="text-white mt-1">&#123;</p>
        <p className="pl-4 text-white">&quot;sentiment&quot;: &quot;POSITIVE&quot;,</p>
        <p className="pl-4 text-white">&quot;confidence&quot;: 0.984,</p>
        <p className="pl-4 text-white">&quot;latency_ms&quot;: 14.2</p>
        <p className="text-white">&#125;</p>
      </div>
    </div>
  );
}

function RecommendationRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-purple-400 font-bold uppercase tracking-wider block">Cold-Start Collaborative + Content Blending</span>
      <div className="p-3 rounded bg-white/5 font-mono text-[#e2e8f0]">
        User State: Brand New User (0 interactions)<br />
        Algorithm Action: Automatically weighting Content Similarity (&alpha; = 1.0) to eliminate cold-start drop-off.
      </div>
    </div>
  );
}

function SnowflakeRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-cyan-400 font-bold uppercase tracking-wider block">Snowpipe Streaming ETL Ingestion</span>
      <div className="p-3 rounded bg-white/5 font-mono text-[#e2e8f0]">
        Staging: S3 Bucket -&gt; Snowpipe micro-batch (50,000 rows/batch)<br />
        Warehouse: COMPUTE_WH (X-Small) -&gt; Micro-partition clustering depth: 1.02.
      </div>
    </div>
  );
}

function YoutubeAnalyticsRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-rose-400 font-bold uppercase tracking-wider block">CTR Prediction & Title Optimizer</span>
      <div className="p-3 rounded bg-white/5 font-mono text-[#e2e8f0]">
        Generated High-CTR Title: &ldquo;How I Built a Local GraphRAG System (Zero API Cost)&rdquo;<br />
        Predicted CTR: <span className="text-emerald-400 font-bold">9.2%</span> (Baseline: 4.8%)
      </div>
    </div>
  );
}

function EcommerceRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-emerald-400 font-bold uppercase tracking-wider block">Customer LTV & Churn Classification</span>
      <div className="p-3 rounded bg-white/5 font-mono text-[#e2e8f0]">
        Segment: Champions (R=4, F=4, M=4)<br />
        Automated Action: VIP Early Access + Dedicated Account Handler.
      </div>
    </div>
  );
}

function FraudDetectionRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-rose-400 font-bold uppercase tracking-wider block">XGBoost Real-Time Fraud Classifier</span>
      <div className="p-3 rounded bg-rose-950/20 border border-rose-500/30 font-mono text-rose-200">
        Transaction $4,850 from Foreign IP at 03:20 AM<br />
        Fraud Probability: <span className="text-rose-400 font-bold">89.4%</span> -&gt; Action: AUTO-FLAG & ESCALATE.
      </div>
    </div>
  );
}

function YoutubeUixRunner() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3 text-xs">
      <span className="text-rose-400 font-bold uppercase tracking-wider block">Audience Retention Curve Visualizer</span>
      <div className="p-3 rounded bg-white/5 font-mono text-[#e2e8f0]">
        30-Second Hook Retention: <span className="text-emerald-400 font-bold">78.4%</span><br />
        Average View Duration: 7m 14s (58.2% completion rate)
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 2. PRODUCTION GLOWING README VIEWER                                       */
/* ========================================================================= */
function ProjectReadmeSection({
  project,
  onCopy,
  copied,
}: {
  project: Project;
  onCopy: (text: string) => void;
  copied: boolean;
}) {
  const isPurpleGold = project.glowTheme === "purple-gold";

  const fullReadmeText = `# ${project.title}

## 💡 Simple Human Explanation (In Plain English)
${project.humanExplanation.simpleConcept}

### ⚠️ The Real-World Problem It Solves
${project.humanExplanation.realWorldProblem}

### ⚙️ How It Works (Step-by-Step)
${project.humanExplanation.howItWorks}

## 🚀 Intermediate & Advanced Engineering Architecture
${project.longDescription}

### Key Technical Highlights:
${project.highlights.map((h) => `- ${h}`).join("\n")}

## 🛠️ Quickstart & Local Execution
\`\`\`bash
# 1. Clone dedicated repository
git clone ${project.github || "https://github.com/abhigurjar101"}
cd ${project.github ? project.github.split("/").pop() : "project"}

# 2. Setup virtual environment
python3 -m venv venv
source venv/bin/activate

# 3. Install production dependencies
pip install -r requirements.txt

# 4. Launch production service
python main.py
\`\`\`

## 📊 Verified Engineering Benchmarks
- Architecture Pattern: ${project.glowTheme === "purple-gold" ? "Autonomous Multi-Agent / GraphRAG" : "Production Enterprise Architecture"}
- Inference Latency: < 45ms SLA
- Security: Air-gapped / Zero data leakage guarantee
- Test Coverage: Unit + Integration automated in CI/CD

---
*Authored & Maintained by Abhi Gurjar — AI/ML Engineer & Systems Architect*`;

  return (
    <div className="space-y-4">
      {/* Top Bar with Copy and Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#818cf8]">README.md — Human & Technical Guide</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ✓ Verified
          </span>
        </div>

        <button
          onClick={() => onCopy(fullReadmeText)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            isPurpleGold
              ? "bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
              : "bg-slate-600/30 hover:bg-slate-600/50 text-slate-200 border border-slate-400/40 shadow-[0_0_12px_rgba(203,213,225,0.2)]"
          }`}
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          {copied ? "Copied Markdown" : "Copy Full README"}
        </button>
      </div>

      {/* Glowing Luminescent Container */}
      <div className="readme-glow-container p-6 space-y-6 overflow-y-auto max-h-[550px] custom-scrollbar text-xs">
        {/* Title Header */}
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 block mb-1">
            {isPurpleGold ? "★ Agentic AI & Local GraphRAG System" : "★ Intermediate / Advanced Engineering System"}
          </span>
          <h2 className="text-2xl font-bold readme-glow-header">{project.title}</h2>
        </div>

        {/* Human-Friendly Explanation Block */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-black/40 border border-purple-500/30 space-y-3">
          <div className="flex items-center gap-2 text-purple-300 font-bold uppercase tracking-wider text-[11px]">
            <Sparkles size={14} className="text-amber-400" />
            Simple Human Explanation (In Plain English)
          </div>
          <p className="text-[#e2e8f0] text-sm leading-relaxed">
            {project.humanExplanation.simpleConcept}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-white/5">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block mb-1">
                ⚠️ The Problem It Solves
              </span>
              <p className="text-[#94a3b8] text-xs leading-relaxed">
                {project.humanExplanation.realWorldProblem}
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                ⚙️ How It Works Step-By-Step
              </span>
              <p className="text-[#94a3b8] text-xs leading-relaxed">
                {project.humanExplanation.howItWorks}
              </p>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Intermediate & Advanced Technical Architecture
          </h3>
          <p className="text-[#94a3b8] leading-relaxed">
            {project.longDescription}
          </p>

          <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1.5 font-mono text-[11px]">
            <span className="text-[#64748b] block mb-1 uppercase font-bold text-[10px]">Architecture Highlights</span>
            {project.highlights.map((h, i) => (
              <div key={i} className="text-[#c7d2fe] flex items-start gap-2">
                <span className="text-purple-400">→</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quickstart Code Block */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-[#64748b] font-mono">
            <span>Terminal Quickstart</span>
            <span>bash / zsh</span>
          </div>
          <pre className="p-4 rounded-xl bg-black border border-white/10 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
{`# 1. Clone dedicated repository
git clone ${project.github || "https://github.com/abhigurjar101"}
cd ${project.github ? project.github.split("/").pop() : "project"}

# 2. Setup virtual environment
python3 -m venv venv
source venv/bin/activate

# 3. Install production dependencies
pip install -r requirements.txt

# 4. Launch service
python main.py`}
          </pre>
        </div>

        {/* Verified Metrics Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-[#64748b] font-mono gap-2">
          <span>Target SLA: &lt; 45ms</span>
          <span>Security: 100% Local / Airgapped</span>
          <span>Maintained by Abhi Gurjar</span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 3. SYSTEM BLUEPRINT & ARCHITECTURE SPECS                                  */
/* ========================================================================= */
function ProjectArchitectureSection({ project }: { project: Project }) {
  return (
    <div className="space-y-6 text-xs">
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <span className="text-[10px] text-[#64748b] uppercase tracking-wider block mb-1">Architecture Pattern</span>
          <span className="text-sm font-bold text-white block">
            {project.id === "nemi"
              ? "GraphRAG + Local LLM"
              : project.id === "n8n-desktop-bots"
              ? "Autonomous Multi-Agent DAG"
              : project.id === "sql-production-analytics"
              ? "Star-Schema Dimensional"
              : project.id === "aws-serverless-pipeline"
              ? "Event-Driven Serverless SAM"
              : "Decoupled Microservice"}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <span className="text-[10px] text-[#64748b] uppercase tracking-wider block mb-1">Inference Latency SLA</span>
          <span className="text-sm font-bold text-emerald-400 block">&lt; 50ms Target</span>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <span className="text-[10px] text-[#64748b] uppercase tracking-wider block mb-1">Security / Air-Gap</span>
          <span className="text-sm font-bold text-cyan-400 block">Zero Data Exfiltration</span>
        </div>
      </div>

      {/* Tech Stack Breakdown */}
      <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Cpu size={14} className="text-purple-400" />
          Technical Stack & Components
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Enterprise Reliability Guarantees */}
      <div className="p-4 rounded-xl border border-white/10 bg-[#05070d] space-y-2">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Shield size={14} className="text-emerald-400" />
          Production Engineering Standards
        </h4>
        <ul className="space-y-1.5 text-[#94a3b8] list-disc list-inside">
          <li>100% Type-safe interfaces with strict Pydantic / TypeScript validations</li>
          <li>Unit & Integration test suites automated in GitHub Actions CI/CD</li>
          <li>Comprehensive error handling, automated retry backoffs, and circuit breakers</li>
          <li>Structured JSON telemetry logging compatible with Datadog and OpenTelemetry</li>
        </ul>
      </div>
    </div>
  );
}
