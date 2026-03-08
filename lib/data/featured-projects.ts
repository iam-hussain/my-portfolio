import { FeaturedProject } from '@/lib/types'

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'enterprise-ai-platform',
    title: 'Enterprise AI Platform — Emirates NBD',
    summary:
      'Enterprise platform enabling secure development and deployment of LLM applications across engineering teams with shared AI SDKs, multi-agent orchestration, and governance guardrails.',
    highlights: [
      'Centralized AI development platform',
      'Reusable multi-agent orchestration frameworks',
      'Shared AI SDKs',
      'MCP-based secure integrations',
      'Governance, guardrails, authorization controls, data masking, compliance validation',
    ],
    techStack: [
      'Node.js',
      'TypeScript',
      'LangChain',
      'LangGraph',
      'Redis',
      'MCP',
      'RAG',
    ],
    impact:
      'Accelerated internal AI development with reusable agent frameworks adopted across multiple engineering teams. Standardized AI tooling and governance for regulated fintech.',
    caseStudyId: 'enterprise-ai-platform',
  },
  {
    id: 'treasury-copilot',
    title: 'Treasury AI Copilot',
    summary:
      'Architected and delivered an AI assistant for real-time treasury insights and operational decision support in a regulated banking environment.',
    highlights: [
      'Multi-agent LLM system',
      'Deterministic orchestration',
      'Auditable response validation',
      'LangGraph workflow control',
      'RAG pipelines',
      'Secure Calypso API integration via MCP',
      'Redis session memory',
      'Multi-LLM routing',
    ],
    techStack: ['LangGraph', 'MCP', 'RAG', 'Redis', 'OpenAI', 'Claude', 'LLaMA'],
    impact:
      'Delivered production AI assistant for regulated treasury operations. Enabled secure, auditable AI responses with context-aware treasury insights.',
    caseStudyId: 'treasury-copilot',
  },
  {
    id: 'open-finance-platform',
    title: 'Open Finance Platform',
    summary:
      'Owned backend architecture and API development for a regulated Open Finance platform under the UAE Central Bank "Compete & Comply" Open Banking framework.',
    highlights: [
      'Secure consent-driven financial data exchange',
      'Microservices using Node.js and TypeScript',
      'REST and GraphQL APIs',
      'React dashboards',
      'API gateway integration',
      'CI/CD automation',
      'Compliance-focused delivery',
    ],
    techStack: [
      'Node.js',
      'GraphQL',
      'Express',
      'Apollo',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'OpenShift',
      'Jenkins',
    ],
    impact:
      'Cut release time by 40% with automated CI/CD. Delivered first production-ready release for regulated fintech ecosystem.',
    caseStudyId: 'open-finance',
  },
  {
    id: 'new-yorker-personalization',
    title: 'The New Yorker — Personalization & Content Platforms',
    summary:
      'Built a full-stack AI-driven personalization platform integrating ML recommendations with React and Next.js editorial products.',
    highlights: [
      'Increased engagement by 27%',
      'Scalable React and Next.js apps',
      'GraphQL-backed content systems',
      'Kubernetes CronJobs for content ingestion',
      'Server-driven UI architecture',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Prisma',
      'MongoDB',
      'Kubernetes',
      'Terraform',
      'AWS',
    ],
    impact: 'Boosted user engagement by 27%. Cut redundant layout logic by 40% across devices.',
    caseStudyId: 'caption-contest',
  },
]
