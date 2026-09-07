export type ProjectCategory =
  | "ALL"
  | "AGENTIC AI"
  | "ADVANCED"
  | "GEN AI"
  | "RAG"
  | "ADVANCED RAG"
  | "KNOWLEDGE GRAPH"
  | "COMPUTER VISION"
  | "LLM"
  | "AI AGENTS"
  | "ML"
  | "NLP"
  | "SQL"
  | "AWS"
  | "HEALTHCARE"
  | "BACKEND";

export interface HumanExplanation {
  simpleConcept: string;
  realWorldProblem: string;
  howItWorks: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  humanExplanation: HumanExplanation;
  categories: ProjectCategory[];
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  highlights: string[];
  language: string;
  badges?: string[];
  themeColor?: "indigo" | "purple" | "cyan" | "emerald" | "amber" | "rose";
  glowTheme: "purple-gold" | "silver-purple";
}

export const projects: Project[] = [
  {
    id: "nemi",
    title: "Nemi — Local GraphRAG System",
    description:
      "Built a fully local GraphRAG application using Ollama for on-device LLM inference, Neo4j knowledge graph modeling, and relationship-aware retrieval that decisively outperforms vector-only RAG.",
    longDescription:
      "Nemi is a cutting-edge local GraphRAG system utilizing Ollama for on-device LLM inference, requiring no external API calls and keeping sensitive data 100% on-machine. Modeled document entities and relationships as a knowledge graph in Neo4j, enabling relationship-aware retrieval that decisively outperforms standard vector-only RAG on complex multi-hop queries. Designed the complete ingestion pipeline to extract entities/relations and combined graph traversal with local LLM generation for verifiable, context-grounded answers.",
    humanExplanation: {
      simpleConcept: "Think of regular AI search like looking up keywords in an index, while Nemi connects the dots like a detective board of clues, entities, and relationships — running completely on your laptop without sending a single byte to the internet.",
      realWorldProblem: "Standard vector RAG fails when an answer requires connecting two separate facts across multiple documents. Plus, sending private company data to cloud AI APIs risks confidential data leaks.",
      howItWorks: "1) Scans documents on your device. 2) Extracts people, concepts, and relationships into Neo4j. 3) Traverses relationship paths (Multi-Hop) when you ask complex questions. 4) Synthesizes grounded answers using local Ollama (Llama 3).",
    },
    categories: ["AGENTIC AI", "ADVANCED", "GEN AI", "ADVANCED RAG", "KNOWLEDGE GRAPH", "RAG", "LLM"],
    tech: ["Neo4j", "Ollama", "Python", "GraphRAG", "Cypher", "Vector Embeddings", "Electron", "React"],
    github: "https://github.com/abhigurjar101/nemi",
    featured: true,
    language: "Python / TypeScript",
    badges: ["PRODUCTION", "AGENTIC AI", "ADVANCED"],
    glowTheme: "purple-gold",
    themeColor: "purple",
    highlights: [
      "Built a fully local GraphRAG application using Ollama for on-device LLM inference, zero external API cost & zero data leakage",
      "Modeled document entities and relationships as a knowledge graph in Neo4j for relationship-aware retrieval",
      "Superior accuracy on multi-hop queries compared to standard vector-only RAG",
      "Combined graph traversal with local LLM generation for context-grounded answers",
    ],
  },
  {
    id: "n8n-desktop-bots",
    title: "n8n Desktop Bots — 9 Autonomous AI Agents (NVIDIA Nemotron)",
    description:
      "Production multi-agent desktop automation system orchestrating 9 specialized AI agents powered by NVIDIA Nemotron 3 Ultra 550B, Qdrant vector database, and 10,000+ n8n workflow integrations.",
    longDescription:
      "Architected an enterprise-level multi-agent desktop automation control center built on 10,000+ n8n community workflow patterns. Orchestrates 9 autonomous AI agents (Coding Assistant, Document RAG, System Design, High Thinking, Automated Testing, Advanced Hybrid RAG, Cloud Deployment, AI/ML Pipeline, and n8n Cluster Manager). Powered by NVIDIA Nemotron 3 Ultra 550B with Qdrant vector embeddings, Docker orchestration, and a real-time FastAPI telemetry control center.",
    humanExplanation: {
      simpleConcept: "Imagine having a team of 9 elite specialist AI assistants (a coder, a tester, an architect, a cloud engineer, etc.) working together on your desktop to plan, build, and deploy entire automated workflows without human babysitting.",
      realWorldProblem: "Single AI chatbots get overwhelmed when asked to complete multi-step company workflows (e.g. testing code, configuring databases, creating cloud deployments).",
      howItWorks: "1) Dispatching a task to the coordinator bot. 2) Breaking down goals into sub-tasks via Nemotron 550B. 3) Specialized bots execute their domain tasks in parallel via n8n workflows. 4) Validates results and outputs telemetry logs.",
    },
    categories: ["AGENTIC AI", "ADVANCED", "GEN AI", "AI AGENTS"],
    tech: ["NVIDIA Nemotron", "n8n Workflows", "Qdrant", "FastAPI", "Docker", "Python", "Autonomous Agents"],
    github: "https://github.com/abhigurjar101/n8n-desktop-bots-automation",
    featured: true,
    language: "Python / TypeScript",
    badges: ["PRODUCTION", "AGENTIC AI", "ADVANCED"],
    glowTheme: "purple-gold",
    themeColor: "indigo",
    highlights: [
      "Orchestrates 9 autonomous production AI bots across Coding, System Design, Testing, Cloud K8s, and ML Pipelines",
      "Powered by NVIDIA Nemotron 3 Ultra 550B reasoning model with Qdrant hybrid vector embeddings",
      "Built on 10,000+ curated n8n automation workflows with webhook triggers and real-time execution DAGs",
      "Includes full web control center dashboard (FastAPI) and CLI runner for sub-second agent delegation",
    ],
  },
  {
    id: "ai-classroom-teaching-agent",
    title: "AI Classroom & Socratic Teaching Agent (Local Llama 3)",
    description:
      "Autonomous Socratic AI tutoring and classroom telemetry system built with LangChain, Local Ollama (Llama 3), and Streamlit.",
    longDescription:
      "Engineered an intelligent dual-portal education platform featuring a Socratic AI Tutor (Student Portal) and a real-time comprehension telemetry dashboard (Teacher Dashboard). Built with LangChain and on-device Ollama (Llama 3) to eliminate cloud API costs and protect student privacy while guiding learners step-by-step through complex concepts.",
    humanExplanation: {
      simpleConcept: "Unlike typical AI that just hands students answers, this chatbot acts like an expert Socrates professor — asking thought-provoking questions, giving intuitive clues, and checking if you genuinely understand.",
      realWorldProblem: "Students using ChatGPT copy-paste direct homework answers without understanding the underlying math or logic, leading to poor exam retention.",
      howItWorks: "1) Student asks a question. 2) AI classifies student misconception. 3) Guides student with pedagogical analogies. 4) Real-time Teacher Dashboard visualizes comprehension hotspots.",
    },
    categories: ["AI AGENTS", "GEN AI", "LLM", "AGENTIC AI"],
    tech: ["LangChain", "Ollama", "Llama 3", "Streamlit", "Python", "Conversational Memory", "Telemetry"],
    github: "https://github.com/abhigurjar101/ai-classroom-teaching-agent",
    featured: true,
    language: "Python",
    badges: ["PRODUCTION", "AGENTIC AI", "ADVANCED"],
    glowTheme: "purple-gold",
    themeColor: "purple",
    highlights: [
      "Socratic conversational AI tutor guiding students step-by-step rather than outputting raw answers",
      "Real-time Teacher Analytics dashboard tracking comprehension milestones and confusion hotspots",
      "100% private, on-device execution using Local Ollama Llama 3 with zero API expenses",
      "LangChain multi-turn memory buffering maintaining pedagogical context across long sessions",
    ],
  },
  {
    id: "ai-data-assistant",
    title: "AI Data Analyst Assistant & Natural Language SQL Studio",
    description:
      "Interactive data science companion that turns natural language queries into DuckDB SQL, runs automated EDA with IQR outlier detection, and trains predictive AutoML models.",
    longDescription:
      "An intelligent, multi-engine data analytics web platform built with Streamlit, DuckDB, Scikit-learn, and 5 pluggable LLM backends (Groq, Google Gemini, Ollama, OpenAI). Automates data cleaning, SQL query generation, predictive AutoML modeling with feature importance, and one-click HTML executive report generation.",
    humanExplanation: {
      simpleConcept: "Type any business question in plain English ('Show me top 5 states by profit margin in Q3'), and the AI instantly writes the SQL query, runs it against millions of rows in milliseconds, and charts the insights.",
      realWorldProblem: "Non-technical business managers wait weeks for busy data teams to write SQL queries and build dashboards for basic reporting.",
      howItWorks: "1) Ingests raw CSV/Parquet. 2) Analyzes column schemas. 3) Generates verified DuckDB SQL. 4) Generates automated machine learning models to forecast future trends.",
    },
    categories: ["GEN AI", "LLM", "ML", "SQL", "BACKEND"],
    tech: ["Python", "Streamlit", "DuckDB", "Groq", "Ollama", "Gemini", "Scikit-learn"],
    github: "https://github.com/abhigurjar101/AI-DATA-ASSISTANT",
    featured: true,
    language: "Python",
    badges: ["PRODUCTION", "AI CHATBOT", "ADVANCED"],
    glowTheme: "purple-gold",
    themeColor: "cyan",
    highlights: [
      "Natural language to high-performance DuckDB SQL conversion",
      "Supports 5 LLM engines including 100% offline local Ollama execution",
      "Predictive AutoML engine with Random Forest and feature importance ranking",
      "One-click exportable executive briefing dashboards",
    ],
  },
  {
    id: "sql-production-analytics",
    title: "SQL Production Analytics Engine & Star-Schema Warehouse",
    description:
      "Enterprise Star-Schema dimensional warehouse with RFM customer segmentation, 7-day rolling window functions, month-over-month cohort retention, and market basket analysis.",
    longDescription:
      "Engineered an industry-grade Star-Schema Data Warehouse (dim_customers, dim_products, dim_channels, fact_orders, fact_order_items) with optimized indexing for sub-second analytical execution. Built 5 production SQL query modules including RFM segmentation with dynamic tier labeling, rolling moving average window frames, cohort retention rate calculations, and market basket self-joins for product bundling.",
    humanExplanation: {
      simpleConcept: "A high-performance enterprise data warehouse that groups millions of customer purchases into actionable business intelligence — discovering who your best customers are, who is about to leave, and what items sell together.",
      realWorldProblem: "Massive transactional databases slow down and crash when business analysts run heavy reporting queries across millions of order records.",
      howItWorks: "1) Normalizes data into clean Dimensions and Facts (Star Schema). 2) Executes complex Common Table Expressions (CTEs) for customer RFM tiers. 3) Uses SQL window functions for moving averages and cohort retention in under 15ms.",
    },
    categories: ["SQL", "BACKEND"],
    tech: ["SQL", "PostgreSQL", "SQLite", "DuckDB", "Star Schema", "Window Functions", "CTEs", "Cohort Analysis"],
    github: "https://github.com/abhigurjar101/sql-production-analytics-engine",
    featured: true,
    language: "SQL / Python",
    badges: ["INTERMEDIATE", "ADVANCED", "DATA WAREHOUSE"],
    glowTheme: "silver-purple",
    themeColor: "cyan",
    highlights: [
      "Designed full Star-Schema warehouse with indexed foreign keys for sub-second analytical execution",
      "Engineered RFM customer segmentation CTEs classifying customers into High-LTV, Loyal, and At-Risk tiers",
      "Implemented 7-day and 30-day rolling moving averages using ROWS BETWEEN and LAG() window functions",
      "Computed Month-over-Month customer cohort retention matrices and market basket cross-selling affinities",
    ],
  },
  {
    id: "aws-serverless-pipeline",
    title: "AWS Serverless Document Intelligence & Bedrock RAG",
    description:
      "Zero-server event-driven knowledge pipeline on AWS utilizing S3 triggers, Lambda processors, DynamoDB audit ledger, API Gateway, and Amazon Bedrock Foundation Models.",
    longDescription:
      "Architected a production-ready serverless AI pipeline defined entirely as Infrastructure-as-Code via AWS SAM. Triggered by S3 object uploads, Lambda functions perform intelligent semantic chunking and embedding generation via Amazon Bedrock Titan, storing audit metadata in DynamoDB. User queries routed through Amazon API Gateway retrieve grounded context and invoke Bedrock (Claude 3.5 Sonnet) with sub-10ms citation responses.",
    humanExplanation: {
      simpleConcept: "An intelligent cloud pipeline where you drop any PDF contract into an Amazon S3 storage folder, and seconds later you can ask questions via API and get accurate, cited answers — costing $0 when nobody is using it.",
      realWorldProblem: "Running always-on AI servers in the cloud costs thousands of dollars per month in idle server fees and requires continuous DevOps patching.",
      howItWorks: "1) Document uploaded to S3. 2) S3 trigger fires AWS Lambda instantly. 3) Bedrock generates vector embeddings and stores status in DynamoDB. 4) Claude 3.5 answers queries with exact paragraph citations.",
    },
    categories: ["AWS", "GEN AI", "RAG", "BACKEND"],
    tech: ["AWS Lambda", "Amazon Bedrock", "Amazon S3", "DynamoDB", "AWS SAM", "API Gateway", "Python", "Boto3"],
    github: "https://github.com/abhigurjar101/aws-serverless-ai-pipeline",
    featured: true,
    language: "Python / YAML",
    badges: ["ADVANCED", "SERVERLESS AI", "PRODUCTION"],
    glowTheme: "silver-purple",
    themeColor: "amber",
    highlights: [
      "Event-driven architecture triggered automatically by S3 ObjectCreated events for zero idle cost ($0/mo when idle)",
      "Automated semantic document chunking and vector embedding generation via Amazon Bedrock Titan",
      "Amazon DynamoDB On-Demand audit table storing processing status, chunk counts, and cryptographic hashes",
      "Low-latency REST API Gateway endpoint delivering grounded citations and hallucination-free answers",
    ],
  },
  {
    id: "advanced-nlp-engine",
    title: "Advanced NLP Semantic Engine (GraphRAG & Reranker)",
    description:
      "Production NLP engine implementing dynamic sentence boundary semantic chunking, GraphRAG Subject-Predicate-Object relation triplet extraction, and neural cross-encoder precision reranking.",
    longDescription:
      "Engineered an advanced Natural Language Processing system solving common enterprise retrieval failures. Implemented dynamic cosine distance semantic chunking that detects thematic shifts to prevent split sentences, automated Subject-Predicate-Object (SPO) triplet extraction for GraphRAG knowledge graphs, and a two-stage Cross-Encoder combining BM25 lexical alignment with cross-attention token alignment.",
    humanExplanation: {
      simpleConcept: "A smart text-processing brain that chops long documents into natural, topic-based paragraphs (instead of blindly splitting mid-sentence), maps out who did what to whom, and re-ranks search results with pinpoint accuracy.",
      realWorldProblem: "Basic AI search splits text arbitrarily into 500-token pieces, cutting sentences in half and losing critical context, causing hallucinated search results.",
      howItWorks: "1) Evaluates sentence-to-sentence cosine similarity. 2) Splits text only where topic shifts occur. 3) Extracts Subject-Verb-Object triples. 4) Neural Cross-Encoder scores results against user queries.",
    },
    categories: ["NLP", "ADVANCED RAG", "KNOWLEDGE GRAPH", "GEN AI"],
    tech: ["Python", "NLP", "GraphRAG", "Cross-Encoder", "Semantic Chunking", "Transformers", "BM25"],
    github: "https://github.com/abhigurjar101/advanced-nlp-semantic-engine",
    featured: true,
    language: "Python",
    badges: ["ADVANCED", "GRAPHRAG", "CROSS-ENCODER"],
    glowTheme: "silver-purple",
    themeColor: "indigo",
    highlights: [
      "Dynamic semantic chunking with sentence boundary cosine distance detection to eliminate arbitrary token cuts",
      "Automated Knowledge Graph SPO relation extraction constructing entity-relation triples for GraphRAG",
      "Neural Cross-Encoder reranker combining BM25 lexical scoring and cross-attention alignment to boost top-1 retrieval",
      "Lightweight, zero-dependency execution runnable across CPU and edge environments in milliseconds",
    ],
  },
  {
    id: "healthcare-management",
    title: "Enterprise Healthcare Management & Hospital Analytics",
    description:
      "Comprehensive 20-module clinical operating system and healthcare analytics engine covering RBAC auth, doctor schedules, patient admission, pharmacy inventory, and clinical KPI dashboards.",
    longDescription:
      "Developed a full-scale healthcare management and clinical analytics architecture spanning 20 modular services. Features object-oriented User role hierarchies (RBAC), simulated OTP verification, patient registration with Aadhaar validation, doctor appointment conflict prevention, bed allocation, lab test dispatch, surgical theatre tracking, and an automated clinical KPI dashboard backed by SQLite.",
    humanExplanation: {
      simpleConcept: "A complete operating system for modern hospitals that admits patients, assigns beds, prevents doctors from being double-booked, tracks pharmacy stock, and calculates clinical hospital KPIs in real time.",
      realWorldProblem: "Hospitals struggle with messy administrative software where doctor schedule conflicts lead to patient wait times, bed shortages, and lost revenue.",
      howItWorks: "1) RBAC role security ensures doctors, nurses, and admins only see what they need. 2) Schedule collision checker verifies availability. 3) ACID relational database updates beds, pharmacy, and calculates Average Length of Stay.",
    },
    categories: ["HEALTHCARE", "BACKEND", "SQL"],
    tech: ["Python", "SQLite", "Healthcare Analytics", "Clinical Data", "OOP", "RBAC", "KPI Dashboards"],
    github: "https://github.com/abhigurjar101/enterprise-healthcare-management-system",
    featured: true,
    language: "Python / SQL",
    badges: ["INTERMEDIATE", "ADVANCED", "CLINICAL OPS"],
    glowTheme: "silver-purple",
    themeColor: "emerald",
    highlights: [
      "Modular 20-service hospital operating architecture covering clinical, administrative, and pharmacy workflows",
      "ACID-compliant SQLite relational database with 18 normalized tables, audit logs, and foreign key constraints",
      "Doctor schedule parser with JSON availability calendars and appointment collision prevention",
      "Executive clinical KPI analytics dashboard computing bed occupancy, department revenue, and claims status",
    ],
  },
  {
    id: "industrial-defect-detector",
    title: "Industrial Surface Defect Classifier (Edge Vision)",
    description:
      "Automated optical inspection system using MobileNetV2 Transfer Learning and texture roughness profiling to detect and classify 6 industrial steel surface defects in real time.",
    longDescription:
      "Engineered an industrial edge computer vision quality inspection pipeline trained on real manufacturing steel surfaces (NEU-DET). Combines deep convolutional transfer learning (MobileNetV2) with surface texture roughness and intensity profiling, classifying crazing, inclusion, patches, pitted surfaces, rolled-in scale, and scratches with sub-15ms inference latency.",
    humanExplanation: {
      simpleConcept: "A high-speed optical inspection eye for steel factories that spots microscopic surface cracks, inclusions, and scratches on speeding steel rolls, instantly triggering robotic reject levers before defective steel ships to buyers.",
      realWorldProblem: "Human inspection on high-speed factory conveyor belts is slow, prone to eye fatigue, and misses tiny micro-cracks that cause catastrophic structural failures in bridges and cars.",
      howItWorks: "1) High-speed camera captures metal surface. 2) Lightweight MobileNetV2 deep learning model classifies defects in 12ms. 3) Measures surface roughness ($R_a$). 4) Sends automated reject signal to factory robotics.",
    },
    categories: ["COMPUTER VISION", "ML"],
    tech: ["PyTorch", "MobileNetV2", "Computer Vision", "OpenCV", "Pillow", "Transfer Learning", "Edge AI"],
    github: "https://github.com/abhigurjar101/industrial-surface-defect-detection",
    featured: true,
    language: "Python",
    badges: ["ADVANCED", "EDGE AI", "COMPUTER VISION"],
    glowTheme: "silver-purple",
    themeColor: "rose",
    highlights: [
      "Transfer learning pipeline adapting MobileNetV2 for real-time industrial manufacturing quality assurance",
      "Classifies 6 critical steel surface defect categories: crazing, inclusion, patches, pits, scale, scratches",
      "Lightweight model footprint (<15 MB) optimized for real-time edge deployment on NVIDIA Jetson and IPCs",
      "Automated MES integration severity classification (CRITICAL vs. MEDIUM) for robotic coil rejection",
    ],
  },
  {
    id: "intelligent-doc-rag",
    title: "Intelligent Document Question-Answering System (RAG)",
    description:
      "Enterprise Retrieval-Augmented Generation (RAG) system with semantic, context-aware responses, scalable document ingestion, and hybrid vector indexing.",
    longDescription:
      "Engineered an enterprise-grade Retrieval-Augmented Generation (RAG) system using Python, LangChain, Hugging Face models, FAISS, and Qdrant. Developed robust ingestion pipelines capable of parsing heterogeneous documents, generating high-dimensional embeddings, and performing sub-second semantic retrieval with context-aware response synthesis.",
    humanExplanation: {
      simpleConcept: "An enterprise document assistant that searches through hundreds of complex legal agreements and enterprise manuals to answer exact questions with clause citations in less than a second.",
      realWorldProblem: "Legal and compliance officers spend hours manually Ctrl+F searching through 80-page contracts to verify liability clauses and termination policies.",
      howItWorks: "1) Ingests legal documents into high-dimensional vectors. 2) FAISS indexes chunks. 3) Cosine similarity pinpoints exact paragraphs. 4) Synthesizes verified answers with direct clause citations.",
    },
    categories: ["GEN AI", "RAG", "LLM", "BACKEND"],
    tech: ["Python", "LangChain", "Hugging Face", "FAISS", "Qdrant", "Vector Search", "FastAPI"],
    github: "https://github.com/abhigurjar101/intelligent-document-rag-system",
    featured: true,
    language: "Python",
    badges: ["ADVANCED", "ENTERPRISE RAG", "PRODUCTION"],
    glowTheme: "silver-purple",
    themeColor: "purple",
    highlights: [
      "Built a Retrieval-Augmented Generation (RAG) system for enterprise document search with semantic, context-aware responses",
      "Designed scalable document ingestion and high-dimensional embedding pipelines",
      "Benchmarked FAISS and Qdrant vector databases for ultra-low latency retrieval",
      "Integrated Hugging Face transformer embeddings for precise domain-specific matching",
    ],
  },
  {
    id: "nlp-sentiment-classification-fastapi",
    title: "NLP Sentiment & Summarization Microservice (FastAPI)",
    description:
      "High-throughput, containerized NLP microservice built with FastAPI, Hugging Face Transformers, Pydantic, and Docker for real-time text summarization and multi-class ticket categorization.",
    longDescription:
      "Developed a production-grade NLP microservice using FastAPI, Pydantic, and Hugging Face Transformers. Implemented singleton model caching to eliminate cold-start latency, serving sub-50ms REST API endpoints for automated text summarization, multi-class sentiment analysis, and business category routing (Billing, Support, Product).",
    humanExplanation: {
      simpleConcept: "A high-speed web API that reads customer support tickets in under 20 milliseconds, determines if the customer is furious or happy, summarizes the issue, and automatically forwards it to the right department.",
      realWorldProblem: "Customer support teams receive thousands of daily tickets; manual sorting takes hours and delays critical escalations for angry VIP clients.",
      howItWorks: "1) Client submits ticket text to REST endpoint. 2) Singleton Hugging Face model runs inference without reloading weights. 3) Pydantic validates output. 4) Returns structured JSON with sentiment score, category, and urgency.",
    },
    categories: ["NLP", "BACKEND", "ML"],
    tech: ["FastAPI", "Python", "Transformers", "Pydantic", "Docker", "Uvicorn", "NLP"],
    github: "https://github.com/abhigurjar101/nlp-sentiment-classification-fastapi",
    featured: false,
    language: "Python",
    badges: ["INTERMEDIATE", "FASTAPI", "DOCKER"],
    glowTheme: "silver-purple",
    themeColor: "indigo",
    highlights: [
      "Containerized FastAPI REST API delivering sub-50ms text summarization and sentiment analysis",
      "Singleton pipeline architecture preventing memory leaks and cold-start latency spikes",
      "Automatic ticket routing into Billing & Pricing, Product Engineering, or Support categories",
      "Production-ready Docker container with interactive OpenAPI Swagger UI at /docs",
    ],
  },
  {
    id: "nyc-taxi-fare",
    title: "NYC Taxi Fare Prediction & Operations Optimization",
    description:
      "Big Data exploratory analytics and predictive regression system evaluating 1.89 Million NYC Yellow Taxi trips across 12 monthly Parquet files.",
    longDescription:
      "Developed high-accuracy regression models using Scikit-learn, Pandas, PyArrow, and NumPy to predict NYC taxi fares. Conducted large-scale exploratory data analysis on 1.89 Million records, modeling non-linear traffic drag, JFK airport flat rates, congestion surcharges, and tip distributions.",
    humanExplanation: {
      simpleConcept: "Analyzed 1.89 million real New York City taxi trips to build an ML model that predicts the exact fare before you step in, taking into account distance, rush hour congestion, and airport fees.",
      realWorldProblem: "Riders hate unexpected surge pricing and unpredictable taxi meters, while dispatch fleets need reliable fare estimations to balance driver compensation.",
      howItWorks: "1) Ingests 1.89M rows from Parquet partitions via PyArrow. 2) Extracts features (pickup hour, day of week, congestion zones). 3) Trains regression models with cross-validation. 4) Computes instant fare subtotals with tip suggestions.",
    },
    categories: ["ML", "BACKEND"],
    tech: ["Python", "Parquet", "PyArrow", "Scikit-learn", "Pandas", "NumPy", "Regression"],
    github: "https://github.com/abhigurjar101/nyc-taxi-fare-prediction",
    featured: false,
    language: "Python",
    badges: ["INTERMEDIATE", "BIG DATA", "PARQUET"],
    glowTheme: "silver-purple",
    themeColor: "amber",
    highlights: [
      "Processed 1.89 Million taxi trip records across 12 monthly Parquet partitions",
      "Modeled peak commute hours, congestion surcharges, and airport flat-rate pricing dynamics",
      "Built instant fare estimation engine predicting trip subtotals, TLC surcharges, and tip recommendations",
    ],
  },
  {
    id: "ai-recommendation-system",
    title: "Hybrid AI Recommendation Engine (Collaborative & Content)",
    description:
      "Personalized hybrid recommendation engine combining collaborative matrix factorization with content-based metadata similarity to solve the Cold-Start problem.",
    longDescription:
      "Built a personalized recommendation engine using Python and Scikit-learn. Combines User-Item cosine matrix factorization with item tag profile similarity via a dynamic alpha weighting parameter, ensuring brand-new users receive high-relevance suggestions even with zero historical ratings.",
    humanExplanation: {
      simpleConcept: "A recommendation algorithm like Netflix or Spotify that suggests items based on what similar users loved, but seamlessly falls back to product content tags so brand-new users get great recommendations from minute one.",
      realWorldProblem: "The dreaded 'Cold-Start Problem': standard collaborative filtering fails completely when a brand new user registers because they have no historical ratings.",
      howItWorks: "1) Decomposes user-item interaction matrices. 2) Calculates TF-IDF metadata similarity on product tags. 3) Blends both scores via dynamic weighting alpha. 4) Serves sub-second personalized recommendations.",
    },
    categories: ["ML", "BACKEND"],
    tech: ["Python", "Scikit-learn", "Pandas", "Collaborative Filtering", "Cosine Similarity", "Hybrid Ensemble"],
    github: "https://github.com/abhigurjar101/hybrid-ai-recommendation-engine",
    featured: false,
    language: "Python",
    badges: ["INTERMEDIATE", "ADVANCED", "COLD START"],
    glowTheme: "silver-purple",
    themeColor: "purple",
    highlights: [
      "Hybrid ensemble architecture blending Collaborative Filtering with Content-Based tag similarity",
      "Solves the Cold-Start problem by automatically falling back to content matching for new users",
      "Sub-second ranking across item catalogs with transparent confidence score breakdowns",
    ],
  },
  {
    id: "snowflake-etl",
    title: "Snowflake Cloud Data Warehouse & Scalable ETL Pipelines",
    description:
      "High-throughput cloud data warehousing architecture on Snowflake using SQL, Python, and automated staging tables for enterprise BI and predictive ML.",
    longDescription:
      "Engineered automated data pipelines and analytical staging layers using Snowflake and Python. Designed star and snowflake schema data models, automated micro-partitioning, and streaming data ingest to power real-time dashboards and predictive downstream machine learning pipelines.",
    humanExplanation: {
      simpleConcept: "An enterprise cloud pipeline that automatically streams hundreds of thousands of sales events into Snowflake, partitions the data for high-speed queries, and keeps company dashboards fresh 24/7.",
      realWorldProblem: "Traditional on-premise warehouses become slow bottlenecks as data grows into billions of rows, costing millions in maintenance and server upgrades.",
      howItWorks: "1) Automates S3 external stages. 2) Snowpipe ingests micro-batches into raw landing tables. 3) Transforms data into modeled star schemas. 4) Materialized views deliver queries 14x faster while minimizing credit cost.",
    },
    categories: ["BACKEND", "SQL"],
    tech: ["Snowflake", "SQL", "Python", "ETL Pipelines", "Data Warehousing", "Data Modeling"],
    github: "https://github.com/abhigurjar101/snowflake",
    featured: false,
    language: "SQL / Python",
    badges: ["INTERMEDIATE", "CLOUD WAREHOUSE", "ETL"],
    glowTheme: "silver-purple",
    themeColor: "cyan",
    highlights: [
      "Architected enterprise Snowflake warehouse schema for multi-source data ingestion",
      "Automated ETL pipeline tasks and data quality validation checks",
      "Optimized query execution time and credit consumption with efficient clustering",
    ],
  },
  {
    id: "ai-youtube-analytics",
    title: "AI-Powered YouTube Analytics Platform",
    description:
      "Analytics platform to predict CTR, engagement, and audience growth with automated keyword generation, title optimization, and NLP metadata recommendations.",
    longDescription:
      "Engineered an AI-powered analytics platform utilizing Python, Streamlit, OpenAI API, and Pandas to predict Click-Through Rate (CTR), viewer engagement, and audience growth trajectory. Automated video title generation, SEO tags, and metadata recommendations using NLP pipelines, delivering interactive real-time dashboards for actionable business insights.",
    humanExplanation: {
      simpleConcept: "A growth companion for content creators that scans video ideas, predicts how likely people are to click on them (CTR), and rewrites titles and SEO tags to maximize viral reach.",
      realWorldProblem: "Creators waste days producing high-quality videos that flop simply because the title and thumbnail fail to trigger the recommendation algorithm.",
      howItWorks: "1) Ingests video concept & channel history. 2) Evaluates linguistic hook patterns and emotional triggers. 3) Predicts CTR benchmark percentage. 4) Outputs 3 optimized title variants with high-ranking keywords.",
    },
    categories: ["GEN AI", "LLM", "NLP", "ML"],
    tech: ["Python", "Streamlit", "OpenAI API", "NLP", "Pandas", "Plotly"],
    github: "https://github.com/abhigurjar101/youtube-automation-os",
    featured: true,
    language: "Python",
    badges: ["INTERMEDIATE", "GROWTH AI", "NLP"],
    glowTheme: "silver-purple",
    themeColor: "rose",
    highlights: [
      "Built an AI-powered analytics platform to predict CTR, engagement, and audience growth",
      "Automated keyword generation, title optimization, and metadata recommendations using NLP",
      "Delivered real-time interactive dashboards for business insights and content creators",
      "Leveraged OpenAI API with structured output parsers for predictable marketing telemetry",
    ],
  },
  {
    id: "e-commerce-analytics",
    title: "E-Commerce Analytics & Customer Intelligence Engine",
    description:
      "End-to-end e-commerce analytics platform analyzing sales velocity, customer LTV, churn prediction, product returns, and multi-channel marketing attribution.",
    longDescription:
      "Developed a comprehensive e-commerce analytics pipeline utilizing real-world enterprise datasets from Amazon and multi-brand platforms. Engineered data cleaning, feature engineering, and statistical modeling pipelines across sales, customer demographics, orders, returns, and inventory fulfillment. Built customer churn prediction and RFM (Recency, Frequency, Monetary) segmentation models to drive repeat revenue.",
    humanExplanation: {
      simpleConcept: "A complete retail analytics suite that analyzes orders, customer lifetime value (LTV), and return rates to identify which marketing channels actually make money.",
      realWorldProblem: "E-commerce stores spend millions acquiring customers, but have blind spots regarding churn risk and which products cause profit-eating returns.",
      howItWorks: "1) Cleans messy multi-brand CSV transaction records. 2) Groups customers by Recency, Frequency, and Monetary score. 3) Builds predictive churn models. 4) Pinpoints high-return items to protect profit margins.",
    },
    categories: ["ML", "BACKEND"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "RFM Segmentation", "Jupyter", "Plotly"],
    github: "https://github.com/abhigurjar101/E-COMMERCE-PROJECT-",
    featured: false,
    language: "Python / Jupyter",
    badges: ["INTERMEDIATE", "RFM SEGMENTATION", "LTV"],
    glowTheme: "silver-purple",
    themeColor: "emerald",
    highlights: [
      "End-to-end data transformation pipeline covering sales, product returns, orders, and shipping logistics",
      "Implemented RFM customer segmentation and churn risk modeling to optimize retention marketing",
      "Delivered executive financial reporting analyzing net revenue, margin trends, and product velocity",
    ],
  },
  {
    id: "fraud-detection",
    title: "Financial Fraud Detection System",
    description:
      "Real-time fraud classification pipeline built with XGBoost, handling severe class imbalance with custom probability thresholding and SMOTE techniques.",
    longDescription:
      "Production ML model for financial fraud detection utilizing XGBoost. Engineered to address extreme data imbalance through SMOTE and cost-sensitive learning, providing low false-positive rates and real-time inference latency.",
    humanExplanation: {
      simpleConcept: "A real-time financial security shield that evaluates credit card transactions in milliseconds and blocks fraudulent charges without annoying legitimate shoppers.",
      realWorldProblem: "Financial fraud is like finding a needle in a haystack (only 0.1% of transactions are fraudulent). Basic ML models either miss fraud entirely or falsely block innocent cardholders.",
      howItWorks: "1) Implements SMOTE oversampling to train on rare fraud patterns. 2) Computes behavioral anomaly signals (time delta, unusual IP, abnormal amount). 3) XGBoost calculates risk probability in 14ms. 4) Auto-blocks suspicious charges.",
    },
    categories: ["ML", "BACKEND"],
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "SMOTE"],
    github: "https://github.com/abhigurjar101/Fraud-Detection",
    featured: false,
    language: "Python",
    badges: ["INTERMEDIATE", "ADVANCED", "FINTECH"],
    glowTheme: "silver-purple",
    themeColor: "rose",
    highlights: [
      "XGBoost gradient boosting classifier tuned for high recall and low false discovery rate",
      "Handled extreme class imbalance in financial transaction streams using SMOTE and threshold tuning",
      "Feature engineering and preprocessing on financial telemetry for sub-second inference",
    ],
  },
  {
    id: "youtube-ultimate-uix",
    title: "YouTube Ultimate UIX & Audience Intelligence",
    description:
      "Comprehensive video analytics and AI-driven growth suite utilizing LLM semantic extraction, engagement metrics, and automated creative suggestions.",
    longDescription:
      "Advanced iteration of the YouTube automation suite built with Python and Streamlit. Employs deep telemetry analysis on subscriber velocity, retention drop-offs, and competitor benchmarks to deliver AI-synthesized publishing strategies and automated metadata optimization.",
    humanExplanation: {
      simpleConcept: "An audience retention diagnostic lab that pins the exact second viewers lose interest in a video, telling creators precisely how to restructure their storytelling to keep viewers watching to the end.",
      realWorldProblem: "Creators don't understand why viewers click away after 30 seconds, losing algorithmic recommendation momentum and ad revenue.",
      howItWorks: "1) Analyzes second-by-second viewer retention curves. 2) Pinpoints hook drop-off anomalies. 3) Synthesizes editing recommendations. 4) Benchmarks retention metrics against top category competitors.",
    },
    categories: ["GEN AI", "NLP", "ML"],
    tech: ["Python", "Streamlit", "NLP", "OpenAI API", "Pandas", "Data Analytics"],
    github: "https://github.com/abhigurjar101/Youtube-Ultimate-UIX",
    featured: false,
    language: "Python",
    badges: ["INTERMEDIATE", "AUDIENCE TELEMETRY"],
    glowTheme: "silver-purple",
    themeColor: "rose",
    highlights: [
      "Advanced content creator intelligence dashboard tracking retention and engagement trends",
      "NLP-driven competitor benchmarking and title/thumbnail optimization",
      "Automated generation of video descriptions, chapters, and SEO keyword tags",
    ],
  },
];
