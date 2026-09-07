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
    category: "GraphRAG & Knowledge Graphs",
    icon: "Network",
    description: "Core specialization in relationship-grounded retrieval & graph reasoning",
    skills: [
      { name: "GraphRAG Architecture", level: 94, tier: "advanced", tierLabel: "Advanced" },
      { name: "Neo4j & Cypher", level: 92, tier: "advanced", tierLabel: "Advanced" },
      { name: "Ontology & Schema Design", level: 85, tier: "advanced", tierLabel: "Advanced" },
      { name: "Semantic Search & Vector-Graph Hybrid", level: 90, tier: "advanced", tierLabel: "Advanced" },
      { name: "GraphQL & Graph Databases", level: 68, tier: "intermediate", tierLabel: "Intermediate" },
    ],
  },
  {
    category: "GenAI & LLM Systems",
    icon: "Brain",
    description: "Production pipelines, local inference & multi-agent orchestration",
    skills: [
      { name: "LangChain & LangGraph", level: 92, tier: "advanced", tierLabel: "Advanced" },
      { name: "Ollama (Local LLM Deployment)", level: 90, tier: "advanced", tierLabel: "Advanced" },
      { name: "Vector Databases (FAISS, Qdrant)", level: 90, tier: "advanced", tierLabel: "Advanced" },
      { name: "Prompt Engineering & Evaluation", level: 92, tier: "advanced", tierLabel: "Advanced" },
      { name: "Agentic AI & Tool Calling", level: 84, tier: "proficient", tierLabel: "Proficient" },
      { name: "Hugging Face Ecosystem", level: 74, tier: "proficient", tierLabel: "Proficient" },
    ],
  },
  {
    category: "Core Languages & Backend",
    icon: "Code2",
    description: "High-performance Python engineering & data processing pipelines",
    skills: [
      { name: "Python (Advanced Engineering)", level: 95, tier: "advanced", tierLabel: "Advanced" },
      { name: "FastAPI & REST APIs", level: 88, tier: "advanced", tierLabel: "Advanced" },
      { name: "SQL & Relational Databases", level: 80, tier: "proficient", tierLabel: "Proficient" },
      { name: "Scikit-learn, Pandas, NumPy", level: 88, tier: "advanced", tierLabel: "Advanced" },
      { name: "Microservices & Docker", level: 72, tier: "proficient", tierLabel: "Proficient" },
    ],
  },
  {
    category: "AI / ML & Modeling",
    icon: "Cpu",
    description: "Statistical ML, predictive modeling & applied NLP",
    skills: [
      { name: "Natural Language Processing (NLP)", level: 78, tier: "proficient", tierLabel: "Proficient" },
      { name: "Predictive Analytics & Regression", level: 76, tier: "proficient", tierLabel: "Proficient" },
      { name: "NLTK & Text Preprocessing", level: 60, tier: "intermediate", tierLabel: "Intermediate" },
      { name: "PyTorch & TensorFlow (Basics)", level: 62, tier: "intermediate", tierLabel: "Intermediate" },
      { name: "Computer Vision & OpenCV", level: 52, tier: "intermediate", tierLabel: "Working Knowledge" },
    ],
  },
  {
    category: "Cloud, Data & DevOps",
    icon: "Server",
    description: "Cloud infrastructure, ETL automation & business intelligence",
    skills: [
      { name: "ETL & Data Processing Pipelines", level: 86, tier: "advanced", tierLabel: "Advanced" },
      { name: "Data Warehousing & Cleaning", level: 78, tier: "proficient", tierLabel: "Proficient" },
      { name: "AWS (EC2, S3, IAM, Cloud Basics)", level: 58, tier: "intermediate", tierLabel: "Working Knowledge" },
      { name: "Apache Airflow Orchestration", level: 55, tier: "intermediate", tierLabel: "Working Knowledge" },
      { name: "Power BI & Visualization", level: 56, tier: "intermediate", tierLabel: "Working Knowledge" },
    ],
  },
];

export const coreExpertise = [
  { label: "GraphRAG", description: "Knowledge Graph–powered retrieval with Neo4j" },
  { label: "RAG & Vector Search", description: "FAISS, Qdrant & hybrid dense-sparse retrieval" },
  { label: "Local LLMs", description: "Ollama on-device inference & zero external API reliance" },
  { label: "Python Engineering", description: "Production backends, REST APIs & data pipelines" },
  { label: "LangGraph Agents", description: "Autonomous stateful multi-agent workflows" },
  { label: "Neo4j & Cypher", description: "Graph traversal, semantic modeling & entity resolution" },
  { label: "Machine Learning", description: "Scikit-learn, XGBoost & predictive model pipelines" },
  { label: "ETL Architecture", description: "Automated data ingestion & high-volume transformations" },
  { label: "NLP Solutions", description: "Transformers, sentiment analysis & semantic indexing" },
  { label: "Cloud & AWS", description: "Working knowledge of cloud-native deployment patterns" },
];
