import { SkillCluster } from '@/lib/types'

export const skillClusters: SkillCluster[] = [
  {
    id: 'ai-llm',
    title: 'AI Engineering',
    primary: ['LangChain', 'LangGraph', 'RAG Pipelines', 'Multi Agent Systems', 'MCP', 'LLM Orchestration'],
    skills: [
      'Prompt Engineering',
      'Agentic AI',
      'Vector Databases',
      'Vector Embeddings',
      'LLM Function Calling',
      'OpenAI',
      'Claude',
      'AI Guardrails',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    primary: ['Node.js', 'TypeScript', 'GraphQL', 'REST APIs'],
    skills: [
      'Bun',
      'Express.js',
      'Hapi',
      'Apollo GraphQL',
      'GraphQL Modules',
      'Prisma ORM',
      'Sequelize ORM',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    primary: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    skills: [
      'Redux Toolkit',
      'React Query',
      'Framer Motion',
    ],
  },
  {
    id: 'data',
    title: 'Data / Search',
    primary: ['MongoDB', 'Redis', 'PostgreSQL'],
    skills: [
      'MySQL',
      'DynamoDB',
      'Elasticsearch',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Infrastructure',
    primary: ['AWS', 'Docker', 'Kubernetes'],
    skills: [
      'Lambda',
      'Podman',
      'OpenShift',
      'Terraform',
      'GitHub Actions',
      'Jenkins',
      'Serverless Architectures',
    ],
  },
  {
    id: 'practices',
    title: 'Engineering Practices',
    primary: ['System Design', 'Microservices', 'CI/CD Automation'],
    skills: [
      'Software Architecture',
      'Distributed Systems',
      'Performance Engineering',
      'Secure Development',
      'Accessibility',
    ],
  },
]
