import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'quick-dine',
    name: 'Quick-Dine POS SaaS',
    tagline: 'Point of Sale SaaS platform for restaurants',
    description: [
      'Built a comprehensive POS system for restaurant management',
      'Features include order management, inventory tracking, and analytics',
      'Real-time synchronization across multiple devices',
    ],
    status: 'Live',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
  {
    id: 'soclif',
    name: 'Soclif Influencer Hub',
    tagline: 'Platform connecting brands with influencers',
    description: [
      'Created influencer discovery and collaboration platform',
      'Integrated payment processing and contract management',
      'Built analytics dashboard for campaign tracking',
    ],
    status: 'WIP',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['React', 'GraphQL', 'MongoDB', 'AWS'],
  },
  {
    id: 'blockchain-dashboard',
    name: 'Real-time Blockchain Transaction Dashboard',
    tagline: 'Live transaction monitoring and analytics',
    description: [
      'Real-time blockchain transaction monitoring',
      'Analytics and visualization of on-chain data',
      'Web3 integration with multiple blockchain networks',
    ],
    status: 'Prototype',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['React', 'Web3.js', 'Ethereum', 'TypeScript'],
  },
  {
    id: 'ai-agents',
    name: 'AI Agents / Prompt Systems',
    tagline: 'Custom AI agent framework with LangChain',
    description: [
      'Built custom AI agent framework using LangChain',
      'Integrated OpenAI API for intelligent responses',
      'Created prompt engineering system for optimized outputs',
    ],
    status: 'WIP',
    links: {
      github: 'https://github.com/iam-hussain',
    },
    techStack: ['Python', 'LangChain', 'OpenAI API', 'FastAPI'],
  },
]


