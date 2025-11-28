import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'open-finance-toolkit',
    name: 'Open Finance Developer Toolkit',
    tagline: 'Platform-inspired set of fintech utilities from Emirates NBD Open Banking work',
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
    id: 'ai-caption-ranker',
    name: 'AI Caption Ranker (New Yorker Prototype)',
    tagline: 'ML-powered caption ranking interface with engagement insights',
    description: [
      'Prediction visualization UI for caption quality scoring',
      'Engagement insights dashboard with behavioral analytics',
      'Snowplow→GraphQL→UI flow simulation for data pipeline',
      'Real-time ranking updates based on ML model predictions',
    ],
    status: 'Prototype',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['React', 'Next.js', 'GraphQL', 'Prisma', 'Databricks'],
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
  {
    id: 'ai-agent-framework',
    name: 'AI Agent Framework (LangChain)',
    tagline: 'Full AI agent architecture for automation and custom tasks',
    description: [
      'Prompt engineering module with template management system',
      'Tools & chains builder for complex agent workflows',
      'Memory system with conversation context and state management',
      'Custom task automation with extensible plugin architecture',
    ],
    status: 'WIP',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI API'],
  },
]


