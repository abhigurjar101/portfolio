export type ProjectCategory =
  | "ALL"
  | "GEN AI"
  | "RAG"
  | "ADVANCED RAG"
  | "KNOWLEDGE GRAPH"
  | "LLM"
  | "AI AGENTS"
  | "ML"
  | "NLP"
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
    title: "Nemi — GraphRAG System",
    description:
      "Built a fully local GraphRAG application using Ollama for on-device LLM inference, Neo4j knowledge graph modeling, and relationship-aware retrieval that outperforms vector-only RAG.",
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
    id: "intelligent-doc-rag",
    title: "Intelligent Document Question-Answering System (RAG)",
    description:
      "Enterprise Retrieval-Augmented Generation (RAG) system with semantic, context-aware responses, scalable document ingestion, and hybrid vector indexing.",
    longDescription:
      "Engineered an enterprise-grade Retrieval-Augmented Generation (RAG) system using Python, LangChain, Hugging Face models, FAISS, and Qdrant. Developed robust ingestion pipelines capable of parsing heterogeneous documents, generating high-dimensional embeddings, and performing sub-second semantic retrieval with context-aware response synthesis.",
    categories: ["GEN AI", "RAG", "LLM", "BACKEND"],
    tech: ["Python", "LangChain", "Hugging Face", "FAISS", "Qdrant", "Vector Search", "FastAPI"],
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
    id: "ai-data-assistant",
    title: "AI Data Assistant & AutoML Studio",
    description:
      "Interactive data science companion that turns natural language queries into DuckDB SQL, runs automated EDA with IQR outlier detection, and trains AutoML models.",
    longDescription:
      "An intelligent, multi-engine data analytics web platform built with Streamlit, DuckDB, Scikit-learn, and 5 pluggable LLM backends (Groq, Google Gemini, Ollama, OpenAI). Automates data cleaning, SQL query generation, predictive AutoML modeling with feature importance, and one-click HTML executive report generation.",
    categories: ["GEN AI", "LLM", "ML", "BACKEND"],
    tech: ["Python", "Streamlit", "DuckDB", "Groq", "Ollama", "Gemini", "Scikit-learn"],
    github: "https://github.com/abhigurjar101/AI-DATA-ASSISTANT",
    featured: false,
    language: "Python",
    highlights: [
      "Natural language to high-performance DuckDB SQL conversion",
      "Supports 5 LLM engines including 100% offline local Ollama execution",
      "Predictive AutoML engine with Random Forest and feature importance ranking",
      "One-click exportable executive briefing dashboards",
    ],
  },
  {
    id: "nlp-text-classification",
    title: "NLP Text Classification & Sentiment Pipeline",
    description:
      "High-throughput NLP pipelines for sentiment analysis and multi-class text categorization using TF-IDF, NLTK, and transformer-based architectures.",
    longDescription:
      "Developed robust NLP pipelines using NLTK, Scikit-learn, and Hugging Face Transformers for sentiment classification and automated document tagging. Evaluated models with rigorous precision, recall, F1-score, and stratified k-fold cross-validation.",
    categories: ["NLP", "ML"],
    tech: ["Python", "NLTK", "Transformers", "Scikit-learn", "TF-IDF", "Pandas"],
    featured: false,
    language: "Python",
    highlights: [
      "Built NLP pipelines for sentiment analysis and text classification using TF-IDF and transformers",
      "Extensive evaluation across precision, recall, F1-score, and cross-validation",
      "Custom text preprocessing, tokenization, and stop-word filtering routines",
    ],
  },
  {
    id: "nyc-taxi-fare",
    title: "NYC Taxi Fare Prediction System",
    description:
      "Regression machine learning system predicting urban transit fares with custom geospatial feature engineering and hyperparameter optimization.",
    longDescription:
      "Developed high-accuracy regression models using Scikit-learn, Pandas, and NumPy to predict NYC taxi fares. Applied advanced geospatial feature engineering, outlier elimination, and grid search hyperparameter tuning to minimize RMSE across millions of trip records.",
    categories: ["ML"],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Regression", "Feature Engineering"],
    featured: false,
    language: "Python",
    highlights: [
      "Developed regression models (Scikit-learn, Pandas, NumPy) to predict taxi fares",
      "Applied feature engineering and hyperparameter tuning to optimize model accuracy",
      "Conducted exploratory data analysis and evaluated models using standard ML metrics",
    ],
  },
  {
    id: "ai-recommendation-system",
    title: "AI Recommendation System",
    description:
      "Personalized hybrid recommendation engine combining collaborative and content-based filtering with vector similarity to maximize user engagement.",
    longDescription:
      "Built personalized recommendation models using Python, Scikit-learn, and Pandas. Combined collaborative filtering matrix factorization with content-based metadata similarity to solve the cold-start problem and drive user engagement.",
    categories: ["ML", "BACKEND"],
    tech: ["Python", "Scikit-learn", "Pandas", "Collaborative Filtering", "Cosine Similarity"],
    featured: false,
    language: "Python",
    highlights: [
      "Built personalized recommendation models combining collaborative and content-based filtering",
      "Enhanced recommendation quality through feature engineering and similarity analysis",
      "Optimized query performance for real-time recommendation scoring",
    ],
  },
  {
    id: "fraud-detection",
    title: "Financial Fraud Detection System",
    description:
      "Real-time fraud classification pipeline built with XGBoost, handling severe class imbalance with custom probability thresholding and SHAP explainability.",
    longDescription:
      "Production ML model for financial fraud detection utilizing XGBoost. Engineered to address extreme data imbalance through SMOTE and cost-sensitive learning, providing low false-positive rates and real-time inference latency.",
    categories: ["ML", "BACKEND"],
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/abhigurjar101/Fraud-Detection",
    featured: false,
    language: "Python",
    highlights: [
      "XGBoost gradient boosting classifier tuned for high recall and low false discovery rate",
      "Handled extreme class imbalance in transaction streams",
      "Feature engineering and preprocessing on financial telemetry",
    ],
  },
];
