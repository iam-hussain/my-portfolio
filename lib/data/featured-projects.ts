import { FeaturedProject } from '@/lib/types'

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'enterprise-ai-platform',
    title: 'Enterprise AI Platform',
    summary:
      'Leading architecture of Emirates NBD\'s centralized AI platform — standardizing how engineering teams build, deploy, and govern production LLM applications across the bank.',
    highlights: [
      'Centralized AI dev platform with multi-agent orchestration frameworks',
      'Shared AI SDKs and MCP-based tool infrastructure for secure enterprise integrations',
      'Enterprise guardrails: prompt safety, data masking, compliance validation',
      'Reusable agent frameworks adopted across treasury, analytics, and operations teams',
    ],
    techStack: ['LangChain', 'LangGraph', 'MCP', 'RAG', 'Node.js', 'TypeScript', 'Redis'],
    impact:
      'Accelerated AI adoption across multiple engineering teams with standardized governance for regulated fintech.',
    caseStudyId: 'enterprise-ai-platform',
  },
  {
    id: 'treasury-copilot',
    title: 'Treasury AI Copilot',
    summary:
      'Architected a multi-agent AI assistant for real-time treasury insights within Emirates NBD\'s regulated banking environment — deterministic orchestration with auditable responses.',
    highlights: [
      'Multi-agent LLM system with LangGraph orchestration, retries, and failure isolation',
      'RAG pipelines with vector embeddings for context-aware, sensitivity-filtered responses',
      'MCP tools for secure Calypso API invocation — treasury data retrieval and workflows',
      'Multi-LLM routing (OpenAI, Claude, LLaMA) with dynamic fallback strategies',
      'Redis session memory for low-latency conversational context',
    ],
    techStack: ['LangGraph', 'MCP', 'RAG', 'Redis', 'OpenAI', 'Claude', 'LLaMA'],
    impact:
      'Production AI assistant for regulated treasury operations with secure, auditable responses.',
    caseStudyId: 'treasury-copilot',
  },
  {
    id: 'new-yorker-personalization',
    title: 'AI Personalization Engine — The New Yorker',
    summary:
      'Built a full-stack AI-driven personalization platform at Condé Nast — integrating ML recommendation models with React/Next.js to dynamically personalize editorial content in real time.',
    highlights: [
      'ML-driven recommendation engine boosting user engagement by 27%',
      'Adaptive layouts connected to personalization APIs with server-driven UI architecture',
      'Kubernetes CronJobs for automated large-scale content ingestion and synchronization',
      'Server-driven UI components reducing redundant layout logic by 40% across devices',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Prisma', 'MongoDB', 'Kubernetes', 'AWS'],
    impact: '+27% engagement lift. -40% redundant UI logic across devices.',
    caseStudyId: 'caption-contest',
  },
  {
    id: 'open-finance-platform',
    title: 'Open Finance Platform — Emirates NBD',
    summary:
      'Owned backend architecture for Emirates NBD\'s Open Finance Platform under the UAE Central Bank framework — Node.js microservices enabling secure financial data exchange.',
    highlights: [
      'Node.js/TypeScript microservices with REST and GraphQL APIs',
      '3Scale API Gateway integration for regulated financial data exchange',
      'Automated CI/CD pipelines (Jenkins + OpenShift) cutting release cycles by 40%',
      'Direct collaboration with UAE Central Bank regulators for compliance',
    ],
    techStack: ['Node.js', 'GraphQL', 'Express', 'MongoDB', 'Docker', 'Kubernetes', 'OpenShift'],
    impact: '-40% release time. First production-ready release for regulated fintech ecosystem.',
    caseStudyId: 'open-finance',
  },
]
