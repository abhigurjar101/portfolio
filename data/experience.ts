export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  trackTag: string;
  location: string;
  type: "Full-Time" | "Leadership" | "Contract";
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Sr Gen AI & ML Engineer & Trainer",
    company: "Uncodemy",
    period: "Jul 2026 – Present",
    trackTag: "Current Appointment · Corporate AI Training",
    location: "New Delhi, India",
    type: "Full-Time",
    description:
      "Delivering advanced Generative AI and Data Science training programs for corporate batches, covering production LLMs, RAG pipelines, prompt engineering, and end-to-end ML workflows.",
    achievements: [
      "Designed and taught a dedicated RAG and Knowledge Graph curriculum, training corporate learners on vector retrieval, graph-based retrieval architectures, and when to apply each in production systems.",
      "Mentored corporate engineering teams on real-world AI/ML project implementation, model deployment, and industry best practices.",
      "Delivered advanced Generative AI and Data Science training programs for corporate batches, covering LLMs, RAG pipelines, prompt engineering, and end-to-end ML workflows.",
      "Collaborated with corporate clients to customize training content aligned with organizational upskilling goals.",
    ],
    tech: ["GraphRAG", "Knowledge Graphs", "Neo4j", "RAG", "LLMs", "Vector DBs", "Prompt Engineering", "Python"],
  },
  {
    id: "exp-2",
    role: "GenAI & Machine Learning Engineer",
    company: "Ayush Bhandari LLP",
    period: "Jun 2024 – Jul 2026",
    trackTag: "2 Years Experience · Gen AI Engineer Track",
    location: "India",
    type: "Full-Time",
    description:
      "Architected and deployed production RAG solutions, incorporating graph and vector retrieval techniques using LLMs, Python, prompt engineering, and REST APIs to automate enterprise workflows.",
    achievements: [
      "Architected and deployed production RAG solutions, incorporating graph and vector retrieval techniques, using LLMs, Python, prompt engineering, and REST APIs to automate business workflows.",
      "Built decision-support tools that improved operational efficiency and enabled faster, data-driven business decisions.",
      "Partnered with cross-functional stakeholders to translate business requirements into scalable AI-powered automation pipelines.",
    ],
    tech: ["Python", "RAG", "Graph Retrieval", "LLMs", "REST APIs", "Prompt Engineering", "FastAPI", "Vector Search"],
  },
  {
    id: "exp-3",
    role: "Python Developer",
    company: "Sopta Farms",
    period: "Apr 2023 – May 2024",
    trackTag: "1 Year Experience · Python Developer Track",
    location: "India",
    type: "Full-Time",
    description:
      "Engineered scalable Python-based ETL pipelines to automate data processing workflows across multiple distributed data sources.",
    achievements: [
      "Engineered scalable Python-based ETL pipelines to automate data processing workflows across multiple data sources.",
      "Optimized data engineering processes to deliver high-quality, analysis-ready datasets for machine learning and predictive analytics use cases.",
      "Implemented automated validation and transformation steps to guarantee data integrity across downstream ML models.",
    ],
    tech: ["Python", "ETL Pipelines", "Data Warehousing", "Data Cleaning", "Pandas", "SQL", "Feature Engineering"],
  },
  {
    id: "exp-4",
    role: "Founder",
    company: "TeckLearn",
    period: "3 months (Initiative)",
    trackTag: "Early Initiative · Automation",
    location: "India",
    type: "Leadership",
    description:
      "Founded TeckLearn at age 19, building it into an agile initiative focused on AI and business automation.",
    achievements: [
      "Founded TeckLearn at age 19, building it into an initiative focused on AI and business automation.",
      "Led cross-functional collaboration to automate manual processes and improve operational efficiency using Python and APIs.",
      "Directed development of AI-driven solutions for business automation initiatives.",
    ],
    tech: ["Python", "APIs", "AI Automation", "Process Engineering", "Leadership"],
  },
];
