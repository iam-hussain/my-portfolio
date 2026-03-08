import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'ai-agent-framework',
    name: 'AI Agent Orchestration Framework',
    tagline: 'Production-inspired multi-agent orchestration—LangGraph, MCP tools, RAG pipelines',
    description: [
      'Multi-agent orchestration with LangGraph workflow control, retries, and failure isolation',
      'MCP-based tool integration for secure API and system access',
      'RAG pipelines with vector embeddings for context-aware responses',
      'Redis session memory and multi-LLM routing (OpenAI, Claude) with fallback strategies',
    ],
    status: 'WIP',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['Node.js', 'TypeScript', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'Redis', 'OpenAI'],
    isAi: true,
  },
  {
    id: 'ai-caption-ranker',
    name: 'AI Caption Ranker (New Yorker Prototype)',
    tagline: 'ML-powered personalization—prediction-driven ranking and engagement analytics',
    description: [
      'Prediction visualization UI for caption quality scoring and model outputs',
      'Engagement insights dashboard with behavioral analytics and A/B metrics',
      'End-to-end data pipeline: Snowplow → GraphQL → real-time UI updates',
      'Personalization engine driving 27% engagement lift in production prototype',
    ],
    status: 'Prototype',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['React', 'Next.js', 'GraphQL', 'Prisma', 'Databricks'],
    isAi: true,
  },
  {
    id: 'open-finance-toolkit',
    name: 'Open Finance Developer Toolkit',
    tagline: 'Regulatory fintech utilities from Emirates NBD Open Banking—under UAE Central Bank Compete & Comply framework',
    description: [
      'Consent flow components for secure user authorization',
      'Token security helpers and mock regulatory sandbox environment',
      'Fraud-anomaly dashboard simulation with real-time monitoring',
      'Complete developer toolkit for Open Banking integrations',
    ],
    status: 'Live',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['TypeScript', 'Node.js', 'GraphQL', 'React', '3Scale', 'OpenShift'],
  },
  {
    id: 'namedrop-quiz',
    name: 'NameDrop Quiz Engine',
    tagline: 'Gamified quiz engine based on Condé Nast Name Drop quiz work',
    description: [
      'Animated transitions and smooth UI interactions with Framer Motion',
      'Advanced scoring logic with weighted question difficulty',
      'Adaptive difficulty system that adjusts based on user performance',
      'Leaderboard support with real-time ranking updates',
    ],
    status: 'Live',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['React', 'Framer Motion', 'Node.js', 'MongoDB'],
  },
  {
    id: 'web3-wallet-playground',
    name: 'Web3 Wallet Interaction Playground',
    tagline: 'Based on Origin Protocol experience with MetaMask integration',
    description: [
      'MetaMask connector with seamless wallet authentication flow',
      'Contract event visualizer for on-chain transaction monitoring',
      'Simulated on-chain transactions for ERC20 and ERC721 tokens',
      'Interactive playground for testing Web3 interactions',
    ],
    status: 'WIP',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['React', 'Web3.js', 'GraphQL', 'Solidity'],
  },
  {
    id: 'realtime-analytics-dashboard',
    name: 'Real-Time Analytics Dashboard Kit',
    tagline: 'Inspired by Kubernetes CronJobs and real-time ingest pipelines',
    description: [
      'WebSocket simulator for live data streaming and connection management',
      'Latency charts with D3.js visualizations and performance metrics',
      'Throughput metrics dashboard with real-time monitoring',
      'Anomaly detector with automated alerting system',
    ],
    status: 'WIP',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['Node.js', 'WebSocket', 'Redis', 'React', 'D3.js'],
  },
]
