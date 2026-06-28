import { ProjectType } from "@/@types";

export const PROJECTS: ProjectType[] = [
  {
    id: "1",
    title: "DebugLens - Error Root-Cause Analyzer",
    description:
      "Paste a stack trace or error log, it reads your codebase (local repo or GitHub URL), traces the call chain to the root cause via AST-based code tracing (Tree-sitter), searches StackOverflow/GitHub Issues for similar problems, and suggests a fix with exact file + line reference. Features LLM reasoning chains and multi-source search agents.",
    project_type: "ai/ml",
    tags: ["Python", "LangChain", "FastAPI", "Streamlit", "Tree-sitter", "GitHub API"],
    project_github_url: "https://github.com/darsigangothri06/debuglens",
    project_live_url: "https://debuglens-ui.onrender.com",
    is_private: false,
  },
  {
    id: "2",
    title: "DocMind - RAG Knowledge Assistant",
    description:
      "Retrieval-Augmented Generation system for conversational Q&A over custom document collections. Features document chunking & embedding pipeline, vector similarity search with MMR reranking (ChromaDB), context-aware LLM responses with source citations, and an evaluation pipeline scoring faithfulness, relevance, and recall.",
    project_type: "ai/ml",
    tags: ["Python", "LangChain", "ChromaDB", "FastAPI", "Streamlit", "OpenAI"],
    project_github_url: "https://github.com/darsigangothri06/docmind",
    project_live_url: "https://docmind-ui-yltt.onrender.com",
    is_private: false,
  },
  {
    id: "3",
    title: "ResearchCrew - Multi-Agent Research System",
    description:
      "Give it a topic, 4 specialized agents (Planner, Searcher, Analyst, Synthesizer) autonomously research the web and produce structured reports with citations. Features LangGraph state machine orchestration, tool-calling agents, and WebSocket streaming showing each agent's reasoning in real-time.",
    project_type: "ai/ml",
    tags: ["Python", "LangGraph", "LangChain", "MCP", "FastAPI", "Streamlit"],
    project_github_url: "https://github.com/darsigangothri06/researchcrew",
    project_live_url: "https://researchcrew-ui.onrender.com",
    is_private: false,
  },
  {
    id: "4",
    title: "QuickBite - Food Delivery App",
    description:
      "Full-featured Zomato-style food ordering app built with Flutter. Features restaurant discovery with category filters, menu item customization (sizes, toppings), cart with promo codes, live order tracking (6-stage pipeline), offline-first sync with retry daemon, favorites, address/payment management, and Material 3 theming.",
    project_type: "mobile apps",
    tags: ["Flutter", "Riverpod", "Hive", "GoRouter", "Freezed", "Material 3"],
    project_github_url: "https://github.com/darsigangothri06/quickbite",
    project_live_url: "",
    is_private: false,
  },
  {
    id: "5",
    title: "Bryt Tutor.ai (Production App)",
    description:
      "AI-powered EdTech mobile app serving 1,000+ DAU across 120+ schools. Built with Flutter + Riverpod, featuring Brainie AI tutoring agent (LLM-powered Socratic hints, voice interaction), offline-first sync with Hive DB, Parent Corner module with GraphQL, and PostHog analytics.",
    project_type: "mobile apps",
    tags: ["Flutter", "Riverpod", "Django", "Firebase", "GraphQL", "PostHog"],
    project_github_url: "",
    project_live_url: "",
    is_private: true,
  },
  {
    id: "6",
    title: "Advertisement Analyzer",
    description:
      "Web application enabling advertisement owners to collect statistics and analyze customer facial expressions via computer vision. Built during Microsoft Engage 2022 mentorship program.",
    project_type: "web apps",
    tags: ["Python", "Django", "OpenCV", "HTML", "CSS", "JS"],
    project_github_url: "https://github.com/darsigangothri06/advanalyzer.git",
    project_live_url: "",
    is_private: true,
  },
];
