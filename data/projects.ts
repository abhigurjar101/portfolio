export type ProjectCategory =
  | "ALL"
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

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  categories: ProjectCategory[];
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  highlights: string[];
  language: string;
}

export const projects: Project[] = [
  {
    id: "nemi",
    title: "Nemi — Local GraphRAG System",
    description:
      "Built a fully local GraphRAG application using Ollama for on-device LLM inference, Neo4j knowledge graph modeling, and relationship-aware retrieval that decisively outperforms vector-only RAG.",
    longDescription:
      "Nemi is a cutting-edge local GraphRAG system utilizing Ollama for on-device LLM inference, requiring no external API calls and keeping sensitive data 100% on-machine. Modeled document entities and relationships as a knowledge graph in Neo4j, enabling relationship-aware retrieval that decisively outperforms standard vector-only RAG on complex multi-hop queries. Designed the complete ingestion pipeline to extract entities/relations and combined graph traversal with local LLM generation for verifiable, context-grounded answers.",
    categories: ["GEN AI", "ADVANCED RAG", "KNOWLEDGE GRAPH", "RAG", "LLM"],
    tech: ["Neo4j", "Ollama", "Python", "GraphRAG", "Cypher", "Vector Embeddings", "Electron", "React"],
    github: "https://github.com/abhigurjar101/nemi",
    featured: true,
    language: "Python / TypeScript",
    highlights: [
      "Built a fully local GraphRAG application using Ollama for on-device LLM inference, zero external API cost & zero data leakage",
      "Modeled document entities and relationships as a knowledge graph in Neo4j for relationship-aware retrieval",
      "Superior accuracy on multi-hop queries compared to standard vector-only RAG",
      "Combined graph traversal with local LLM generation for context-grounded answers",
    ],
  },
  {
    id: "sql-production-analytics",
    title: "SQL Production Analytics Engine & Star-Schema Warehouse",
    description:
      "Enterprise Star-Schema dimensional warehouse with RFM customer segmentation, 7-day rolling window functions, month-over-month cohort retention, and market basket analysis.",
    longDescription:
      "Engineered an industry-grade Star-Schema Data Warehouse (dim_customers, dim_products, dim_channels, fact_orders, fact_order_items) with optimized indexing for sub-second analytical execution. Built 5 production SQL query modules including RFM segmentation with dynamic tier labeling, rolling moving average window frames, cohort retention rate calculations, and market basket self-joins for product bundling.",
    categories: ["SQL", "BACKEND"],
    tech: ["SQL", "PostgreSQL", "SQLite", "DuckDB", "Star Schema", "Window Functions", "CTEs", "Cohort Analysis"],
    github: "https://github.com/abhigurjar101/sql-production-analytics-engine",
    featured: true,
    language: "SQL / Python",
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
    categories: ["AWS", "GEN AI", "RAG", "BACKEND"],
    tech: ["AWS Lambda", "Amazon Bedrock", "Amazon S3", "DynamoDB", "AWS SAM", "API Gateway", "Python", "Boto3"],
    github: "https://github.com/abhigurjar101/aws-serverless-ai-pipeline",
    featured: true,
    language: "Python / YAML",
    highlights: [
      "Event-driven architecture triggered automatically by S3 ObjectCreated events for zero idle cost ($0/mo when idle)",
      "Automated semantic document chunking and vector embedding generation via Amazon Bedrock Titan",
      "Amazon DynamoDB On-Demand audit table storing processing status, chunk counts, and cryptographic hashes",
      "Low-latency REST API Gateway endpoint delivering grounded citations and hallucination-free answers",
    ],
  },
  {
    id: "intelligent-doc-rag",
    title: "Intelligent Document Question-Answering System (RAG)",
    description:
      "Enterprise Retrieval-Augmented Generation (RAG) system with semantic, context-aware responses, scalable document ingestion, and hybrid vector indexing.",
    longDescription:
      "Engineered an enterprise-grade Retrieval-Augmented Generation (RAG) system using Python, LangChain, Hugging Face models, FAISS, and Qdrant. Developed robust ingestion pipelines capable of parsing heterogeneous documents, generating high-dimensional embeddings, and performing sub-second semantic retrieval with context-aware response synthesis.",
    categories: ["GEN AI", "RAG", "LLM", "BACKEND"],
    tech: ["Python", "LangChain", "Hugging Face", "FAISS", "Qdrant", "Vector Search", "FastAPI"],
    github: "https://github.com/abhigurjar101/intelligent-document-rag-system",
    featured: true,
    language: "Python",
    highlights: [
      "Built a Retrieval-Augmented Generation (RAG) system for enterprise document search with semantic, context-aware responses",
      "Designed scalable document ingestion and high-dimensional embedding pipelines",
      "Benchmarked FAISS and Qdrant vector databases for ultra-low latency retrieval",
      "Integrated Hugging Face transformer embeddings for precise domain-specific matching",
    ],
  },
  {
    id: "advanced-nlp-engine",
    title: "Advanced NLP Semantic Engine (GraphRAG & Reranker)",
    description:
      "Production NLP engine implementing dynamic sentence boundary semantic chunking, GraphRAG Subject-Predicate-Object relation triplet extraction, and neural cross-encoder precision reranking.",
    longDescription:
      "Engineered an advanced Natural Language Processing system solving common enterprise retrieval failures. Implemented dynamic cosine distance semantic chunking that detects thematic shifts to prevent split sentences, automated Subject-Predicate-Object (SPO) triplet extraction for GraphRAG knowledge graphs, and a two-stage Cross-Encoder combining BM25 lexical alignment with cross-attention token alignment.",
    categories: ["NLP", "ADVANCED RAG", "KNOWLEDGE GRAPH", "GEN AI"],
    tech: ["Python", "NLP", "GraphRAG", "Cross-Encoder", "Semantic Chunking", "Transformers", "BM25"],
    github: "https://github.com/abhigurjar101/advanced-nlp-semantic-engine",
    featured: true,
    language: "Python",
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
    categories: ["HEALTHCARE", "BACKEND", "SQL"],
    tech: ["Python", "SQLite", "Healthcare Analytics", "Clinical Data", "OOP", "RBAC", "KPI Dashboards"],
    github: "https://github.com/abhigurjar101/enterprise-healthcare-management-system",
    featured: true,
    language: "Python / SQL",
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
    categories: ["COMPUTER VISION", "ML"],
    tech: ["PyTorch", "MobileNetV2", "Computer Vision", "OpenCV", "Pillow", "Transfer Learning", "Edge AI"],
    github: "https://github.com/abhigurjar101/industrial-surface-defect-detection",
    featured: true,
    language: "Python",
    highlights: [
      "Transfer learning pipeline adapting MobileNetV2 for real-time industrial manufacturing quality assurance",
      "Classifies 6 critical steel surface defect categories: crazing, inclusion, patches, pits, scale, scratches",
      "Lightweight model footprint (<15 MB) optimized for real-time edge deployment on NVIDIA Jetson and IPCs",
      "Automated MES integration severity classification (CRITICAL vs. MEDIUM) for robotic coil rejection",
    ],
  },
  {
    id: "ai-data-assistant",
    title: "AI Data Analyst Assistant & Natural Language SQL Studio",
    description:
      "Interactive data science companion that turns natural language queries into DuckDB SQL, runs automated EDA with IQR outlier detection, and trains predictive AutoML models.",
    longDescription:
      "An intelligent, multi-engine data analytics web platform built with Streamlit, DuckDB, Scikit-learn, and 5 pluggable LLM backends (Groq, Google Gemini, Ollama, OpenAI). Automates data cleaning, SQL query generation, predictive AutoML modeling with feature importance, and one-click HTML executive report generation.",
    categories: ["GEN AI", "LLM", "ML", "SQL", "BACKEND"],
    tech: ["Python", "Streamlit", "DuckDB", "Groq", "Ollama", "Gemini", "Scikit-learn"],
    github: "https://github.com/abhigurjar101/AI-DATA-ASSISTANT",
    featured: true,
    language: "Python",
    highlights: [
      "Natural language to high-performance DuckDB SQL conversion",
      "Supports 5 LLM engines including 100% offline local Ollama execution",
      "Predictive AutoML engine with Random Forest and feature importance ranking",
      "One-click exportable executive briefing dashboards",
    ],
  },
  {
    id: "ai-youtube-analytics",
    title: "AI-Powered YouTube Analytics Platform",
    description:
      "Analytics platform to predict CTR, engagement, and audience growth with automated keyword generation, title optimization, and NLP metadata recommendations.",
    longDescription:
      "Engineered an AI-powered analytics platform utilizing Python, Streamlit, OpenAI API, and Pandas to predict Click-Through Rate (CTR), viewer engagement, and audience growth trajectory. Automated video title generation, SEO tags, and metadata recommendations using NLP pipelines, delivering interactive real-time dashboards for actionable business insights.",
    categories: ["GEN AI", "LLM", "NLP", "ML"],
    tech: ["Python", "Streamlit", "OpenAI API", "NLP", "Pandas", "Plotly"],
    github: "https://github.com/abhigurjar101/youtube-automation-os",
    featured: true,
    language: "Python",
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
    categories: ["ML", "BACKEND"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "RFM Segmentation", "Jupyter", "Plotly"],
    github: "https://github.com/abhigurjar101/E-COMMERCE-PROJECT-",
    featured: false,
    language: "Python / Jupyter",
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
    categories: ["ML", "BACKEND"],
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "SMOTE"],
    github: "https://github.com/abhigurjar101/Fraud-Detection",
    featured: false,
    language: "Python",
    highlights: [
      "XGBoost gradient boosting classifier tuned for high recall and low false discovery rate",
      "Handled extreme class imbalance in financial transaction streams using SMOTE and threshold tuning",
      "Feature engineering and preprocessing on financial telemetry for sub-second inference",
    ],
  },
  {
    id: "ai-classroom-teaching-agent",
    title: "AI Classroom & Socratic Teaching Agent (Local Llama 3)",
    description:
      "Autonomous Socratic AI tutoring and classroom telemetry system built with LangChain, Local Ollama (Llama 3), and Streamlit.",
    longDescription:
      "Engineered an intelligent dual-portal education platform featuring a Socratic AI Tutor (Student Portal) and a real-time comprehension telemetry dashboard (Teacher Dashboard). Built with LangChain and on-device Ollama (Llama 3) to eliminate cloud API costs and protect student privacy while guiding learners step-by-step through complex concepts.",
    categories: ["AI AGENTS", "GEN AI", "LLM"],
    tech: ["LangChain", "Ollama", "Llama 3", "Streamlit", "Python", "Conversational Memory", "Telemetry"],
    github: "https://github.com/abhigurjar101/ai-classroom-teaching-agent",
    featured: true,
    language: "Python",
    highlights: [
      "Socratic conversational AI tutor guiding students step-by-step rather than outputting raw answers",
      "Real-time Teacher Analytics dashboard tracking comprehension milestones and confusion hotspots",
      "100% private, on-device execution using Local Ollama Llama 3 with zero API expenses",
      "LangChain multi-turn memory buffering maintaining pedagogical context across long sessions",
    ],
  },
  {
    id: "nlp-text-classification",
    title: "NLP Sentiment & Summarization Microservice (FastAPI)",
    description:
      "High-throughput, containerized NLP microservice built with FastAPI, Hugging Face Transformers, Pydantic, and Docker for real-time text summarization and multi-class ticket categorization.",
    longDescription:
      "Developed a production-grade NLP microservice using FastAPI, Pydantic, and Hugging Face Transformers. Implemented singleton model caching to eliminate cold-start latency, serving sub-50ms REST API endpoints for automated text summarization, multi-class sentiment analysis, and business category routing (Billing, Support, Product).",
    categories: ["NLP", "BACKEND", "ML"],
    tech: ["FastAPI", "Python", "Transformers", "Pydantic", "Docker", "Uvicorn", "NLP"],
    github: "https://github.com/abhigurjar101/nlp-sentiment-classification-fastapi",
    featured: false,
    language: "Python",
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
    categories: ["ML", "BACKEND"],
    tech: ["Python", "Parquet", "PyArrow", "Scikit-learn", "Pandas", "NumPy", "Regression"],
    github: "https://github.com/abhigurjar101/nyc-taxi-fare-prediction",
    featured: false,
    language: "Python",
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
    categories: ["ML", "BACKEND"],
    tech: ["Python", "Scikit-learn", "Pandas", "Collaborative Filtering", "Cosine Similarity", "Hybrid Ensemble"],
    github: "https://github.com/abhigurjar101/hybrid-ai-recommendation-engine",
    featured: false,
    language: "Python",
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
    categories: ["BACKEND", "SQL"],
    tech: ["Snowflake", "SQL", "Python", "ETL Pipelines", "Data Warehousing", "Data Modeling"],
    github: "https://github.com/abhigurjar101/snowflake",
    featured: false,
    language: "SQL / Python",
    highlights: [
      "Architected enterprise Snowflake warehouse schema for multi-source data ingestion",
      "Automated ETL pipeline tasks and data quality validation checks",
      "Optimized query execution time and credit consumption with efficient clustering",
    ],
  },
  {
    id: "youtube-ultimate-uix",
    title: "YouTube Ultimate UIX & Audience Intelligence",
    description:
      "Comprehensive video analytics and AI-driven growth suite utilizing LLM semantic extraction, engagement metrics, and automated creative suggestions.",
    longDescription:
      "Advanced iteration of the YouTube automation suite built with Python and Streamlit. Employs deep telemetry analysis on subscriber velocity, retention drop-offs, and competitor benchmarks to deliver AI-synthesized publishing strategies and automated metadata optimization.",
    categories: ["GEN AI", "NLP", "ML"],
    tech: ["Python", "Streamlit", "NLP", "OpenAI API", "Pandas", "Data Analytics"],
    github: "https://github.com/abhigurjar101/Youtube-Ultimate-UIX",
    featured: false,
    language: "Python",
    highlights: [
      "Advanced content creator intelligence dashboard tracking retention and engagement trends",
      "NLP-driven competitor benchmarking and title/thumbnail optimization",
      "Automated generation of video descriptions, chapters, and SEO keyword tags",
    ],
  },
];
