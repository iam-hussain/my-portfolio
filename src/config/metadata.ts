import { siteConfig } from './site'

const baseUrl = siteConfig.links.website

export const metadataConfig = {
  title: {
    default:
      'Jakir Hussain — AI Platform Engineer | Multi-Agent Systems, LangChain, LangGraph, RAG',
    template: `%s | ${siteConfig.personal.fullName}`,
  },
  description:
    'Senior Full-Stack & AI Platform Engineer with 8+ years building enterprise AI platforms, multi-agent LLM systems, and production RAG pipelines. Specialized in LangChain, LangGraph, MCP orchestration, and scalable Node.js/TypeScript architectures across regulated fintech and global media.',
  keywords: [
    // Core AI identity
    'AI Platform Engineer',
    'AI Engineer Dubai',
    'LLM Engineer',
    'Multi Agent Systems Engineer',
    'Agentic AI Developer',
    // Specific AI technologies
    'LangChain Developer',
    'LangGraph Engineer',
    'RAG Pipeline Engineer',
    'MCP Model Context Protocol',
    'Vector Embeddings Engineer',
    'LLM Orchestration',
    'AI Guardrails',
    'Prompt Engineering',
    // Full-stack identity
    'Senior Full Stack Engineer',
    'Node.js AI Engineer',
    'TypeScript AI Developer',
    'Next.js Engineer',
    'GraphQL Engineer',
    'React Engineer',
    // Domain expertise
    'Enterprise AI Platform',
    'Fintech AI Engineer',
    'Production LLM Systems',
    'AI Copilot Developer',
    'Treasury AI Systems',
    // Infrastructure
    'Cloud Native Engineer',
    'Kubernetes Engineer',
    'AWS AI Infrastructure',
    'Microservices Architect',
    // Location + availability
    'Dubai Software Engineer',
    'Remote AI Engineer',
    'Senior Engineer Dubai',
    // LLM providers
    'OpenAI Integration',
    'Claude API Developer',
    'Multi LLM Routing',
    // Emerging
    'Retrieval Augmented Generation',
    'Vector Database Engineer',
    'AI Agent Framework',
  ],
  author: siteConfig.personal.fullName,
  openGraph: {
    title:
      'Jakir Hussain — AI Platform Engineer | Multi-Agent Systems, LangChain, RAG',
    description:
      'Senior Full-Stack & AI Platform Engineer building enterprise AI platforms, multi-agent LLM systems, and production RAG pipelines with LangChain, LangGraph, and MCP.',
    type: 'profile' as const,
    url: baseUrl,
    siteName: `${siteConfig.personal.fullName} — AI Platform Engineer`,
    images: [
      {
        url: `${baseUrl}/share.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.personal.fullName} — AI Platform Engineer | LangChain, LangGraph, RAG, Multi-Agent Systems`,
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title:
      'Jakir Hussain — AI Platform Engineer | Multi-Agent Systems, LangChain, RAG',
    description:
      'Building enterprise AI platforms, multi-agent LLM systems, and RAG pipelines at scale. 8+ years across fintech and media.',
    images: [`${baseUrl}/share.jpg`],
    creator: '@iamhussain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  canonical: baseUrl,
}
