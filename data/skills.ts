export type SkillTier = "advanced" | "proficient" | "intermediate";

export interface SkillItem {
  name: string;
  level: number;
  tier: SkillTier;
  tierLabel: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI, ML & Modern Retrieval",
    icon: "Brain",
    description: "Applied machine learning, practical LLMs & modern retrieval exploration",
    skills: [
      { name: "Python for AI/ML (Daily Driver)", level: 88, tier: "advanced", tierLabel: "Daily Driver" },
      { name: "GraphRAG & Neo4j (Passionate Explorer)", level: 82, tier: "proficient", tierLabel: "Proficient" },
      { name: "Vector RAG & Search (FAISS, Qdrant)", level: 84, tier: "advanced", tierLabel: "Advanced" },
      { name: "Local LLMs & Ollama Deployments", level: 80, tier: "proficient", tierLabel: "Proficient" },
      { name: "Applied Machine Learning (Scikit-learn)", level: 78, tier: "proficient", tierLabel: "Proficient" },
      { name: "Prompt Engineering & Context Design", level: 82, tier: "proficient", tierLabel: "Proficient" },
      { name: "Computer Vision & OpenCV (Prototypes)", level: 64, tier: "intermediate", tierLabel: "Working Knowledge" },
    ],
  },
  {
    category: "Data Analytics & Warehousing",
    icon: "Database",
    description: "Star-schema models, SQL queries & business intelligence pipelines",
    skills: [
      { name: "SQL & Complex Analytical Queries", level: 85, tier: "advanced", tierLabel: "Advanced" },
      { name: "Pandas & Data Wrangling", level: 86, tier: "advanced", tierLabel: "Advanced" },
      { name: "Star-Schema Warehouse Design", level: 80, tier: "proficient", tierLabel: "Proficient" },
      { name: "DuckDB & In-Memory Analytics", level: 82, tier: "proficient", tierLabel: "Proficient" },
      { name: "RFM Segmentation & Cohort Analysis", level: 82, tier: "proficient", tierLabel: "Proficient" },
      { name: "Exploratory Data Analysis (EDA)", level: 80, tier: "proficient", tierLabel: "Proficient" },
    ],
  },
  {
    category: "Backend & System Design",
    icon: "Code2",
    description: "Modular software architecture, REST APIs & decoupled services",
    skills: [
      { name: "FastAPI & RESTful Microservices", level: 82, tier: "proficient", tierLabel: "Proficient" },
      { name: "System Design & Technical Scoping", level: 78, tier: "proficient", tierLabel: "Proficient" },
      { name: "Relational Database Design (ACID SQLite/PostgreSQL)", level: 80, tier: "proficient", tierLabel: "Proficient" },
      { name: "Docker & Containerized Services", level: 72, tier: "proficient", tierLabel: "Proficient" },
      { name: "AWS Cloud Services (S3, Lambda, IAM basics)", level: 68, tier: "intermediate", tierLabel: "Working Knowledge" },
    ],
  },
  {
    category: "Marketing, SEO & Growth Analytics",
    icon: "Network",
    description: "Audience growth, CTR telemetry, keyword ranking & conversion modeling",
    skills: [
      { name: "YouTube Analytics & Telemetry Modeling", level: 84, tier: "advanced", tierLabel: "Advanced" },
      { name: "SEO Keyword Strategy & Search Optimization", level: 80, tier: "proficient", tierLabel: "Proficient" },
      { name: "Click-Through Rate (CTR) Prediction", level: 82, tier: "proficient", tierLabel: "Proficient" },
      { name: "Audience Retention & Funnel Drop-off Analysis", level: 80, tier: "proficient", tierLabel: "Proficient" },
      { name: "Digital Growth & Content Experimentation", level: 82, tier: "proficient", tierLabel: "Proficient" },
    ],
  },
  {
    category: "Client Relationships & Solutions",
    icon: "Server",
    description: "Stakeholder collaboration, enterprise training & business alignment",
    skills: [
      { name: "Corporate Client Upskilling & Training", level: 86, tier: "advanced", tierLabel: "Advanced" },
      { name: "Client Relationship Management (CRM)", level: 84, tier: "advanced", tierLabel: "Advanced" },
      { name: "Translating Business Needs to Architecture", level: 85, tier: "advanced", tierLabel: "Advanced" },
      { name: "Cross-Functional Project Leadership", level: 80, tier: "proficient", tierLabel: "Proficient" },
      { name: "Technical Documentation & Mentorship", level: 84, tier: "advanced", tierLabel: "Advanced" },
    ],
  },
];

export const coreExpertise = [
  { label: "AI & ML Engineering", description: "Predictive models, NLP pipelines & practical LLMs" },
  { label: "Data Analytics & SQL", description: "Star-schema warehouses, RFM analysis & cohort modeling" },
  { label: "GraphRAG & RAG (Enthusiast)", description: "Passionate about exploring knowledge graphs & local search" },
  { label: "Full Stack Python", description: "FastAPI REST microservices, modular OOP & ETL workflows" },
  { label: "Growth Marketing & SEO", description: "CTR prediction, YouTube analytics & search optimization" },
  { label: "Client Solutions & System Design", description: "Scoping client requirements into reliable technical systems" },
  { label: "Corporate AI Mentorship", description: "Training engineering batches on real-world AI implementation" },
  { label: "Local LLM Deployments", description: "Private on-device inference using Ollama & local models" },
];
