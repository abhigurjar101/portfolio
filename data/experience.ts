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
    role: "Sr Gen AI & ML Engineer & Corporate Trainer",
    company: "Uncodemy",
    period: "Jul 2026 – Present",
    trackTag: "Corporate AI Solutions · Client Relationships",
    location: "New Delhi, India",
    type: "Full-Time",
    description:
      "Delivering enterprise-grade Generative AI, Data Science, and Machine Learning training programs for corporate engineering teams and executives, bridging technical architecture with business outcomes.",
    achievements: [
      "Cultivated high-trust client relationships with enterprise leadership, tailoring curriculum architectures to match specific corporate upskilling roadmaps and business KPIs.",
      "Taught practical RAG, local LLMs, and retrieval architectures (including Knowledge Graph exploration), guiding 100+ engineers through production implementation.",
      "Mentored corporate development cohorts through system design, REST API integration, evaluation frameworks, and cloud deployment best practices.",
      "Maintained exceptional client satisfaction through empathetic communication, clear technical storytelling, and responsive stakeholder management.",
    ],
    tech: ["Client Solutions", "System Design", "Enterprise AI", "RAG Pipelines", "Knowledge Graphs", "Python", "Curriculum Architecture"],
  },
  {
    id: "exp-2",
    role: "GenAI & Machine Learning Engineer",
    company: "Ayush Bhandari LLP",
    period: "Jun 2024 – Jul 2026",
    trackTag: "System Design & Production ML (2 Years)",
    location: "India",
    type: "Full-Time",
    description:
      "Architected and deployed scalable AI retrieval systems, high-throughput REST backends, and automated decision-support pipelines to solve high-impact enterprise operational bottlenecks.",
    achievements: [
      "Designed robust backend system architectures using FastAPI, PostgreSQL, and vector stores, ensuring high availability, fault tolerance, and sub-second query latency.",
      "Engineered production RAG workflows and explored graph-augmented retrieval patterns to enhance context grounding and eliminate hallucinations across enterprise documents.",
      "Collaborated closely with cross-functional leadership and business stakeholders to translate ambiguous user requirements into actionable system design specifications.",
      "Built automated operational analytics pipelines and decision-support dashboards that measurably streamlined daily business workflows.",
    ],
    tech: ["System Design", "Python", "FastAPI", "RAG", "PostgreSQL", "Vector Search", "REST APIs", "Prompt Engineering"],
  },
  {
    id: "exp-3",
    role: "Python Developer & Data Analyst",
    company: "Sopta Farms",
    period: "Apr 2023 – May 2024",
    trackTag: "Data Analytics & ETL Engineering (1 Year)",
    location: "India",
    type: "Full-Time",
    description:
      "Engineered scalable Python ETL pipelines, normalized relational data warehouses, and automated analytical reporting dashboards across distributed data sources.",
    achievements: [
      "Constructed automated data pipelines extracting, transforming, and loading structured and unstructured datasets across multi-source operational databases.",
      "Designed normalized SQL schemas and Star-Schema analytical models, optimizing query execution speed and ensuring pristine data integrity.",
      "Authored automated validation scripts and exploratory data analysis (EDA) workflows to deliver reliable, analysis-ready datasets for predictive modeling.",
      "Partnered with operational teams to translate business questions into actionable SQL queries and executive KPI metrics.",
    ],
    tech: ["Python", "SQL", "ETL Pipelines", "Data Warehousing", "Pandas", "Relational Modeling", "Analytics Engineering"],
  },
  {
    id: "exp-4",
    role: "Founder & Growth Strategist",
    company: "TeckLearn",
    period: "3 months (Initiative at 19)",
    trackTag: "Marketing, SEO & Early Initiative",
    location: "India",
    type: "Leadership",
    description:
      "Founded TeckLearn at age 19 as an educational and business automation initiative, leading full-lifecycle organic marketing, SEO, and client acquisition from zero to traction.",
    achievements: [
      "Architected organic growth and search engine optimization (SEO) strategies, optimizing metadata, keyword clustering, and site architecture to build early inbound traction.",
      "Analyzed click-through rates (CTR), landing page conversion funnels, and retention analytics to continuously refine content and maximize user engagement.",
      "Handled end-to-end client relationships, scoping requirements, designing automated workflows, and delivering customized digital solutions.",
      "Demonstrated early entrepreneurial grit, leadership, and a rapid ability to master new marketing and engineering technologies independently.",
    ],
    tech: ["SEO Strategy", "Marketing Analytics", "Client Acquisition", "Growth Funnels", "Python", "Automation", "Leadership"],
  },
];
