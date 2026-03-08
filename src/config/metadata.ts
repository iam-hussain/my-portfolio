import { siteConfig } from './site'

const baseUrl = siteConfig.links.website

export const metadataConfig = {
  title: {
    default:
      'Jakir Hussain — AI Platform Engineer | LangChain, LangGraph, RAG Systems',
    template: `%s | ${siteConfig.personal.fullName}`,
  },
  description:
    'Senior Full-Stack & AI Platform Engineer with 8+ years of experience building enterprise AI platforms, multi-agent systems, and scalable cloud-native applications using Node.js, TypeScript, React, LangChain, LangGraph, and Retrieval-Augmented Generation (RAG).',
  keywords: [
    'AI Engineer',
    'LangChain Developer',
    'LangGraph Engineer',
    'Node.js AI Engineer',
    'Full Stack AI Engineer',
    'RAG Engineer',
    'Multi Agent Systems',
    'AI Platform Architect',
    'Next.js Engineer',
    'LLM Application Developer',
    'AI Systems Engineer',
    'MCP',
    'Retrieval Augmented Generation',
    'Vector Databases',
    'Agentic AI',
    'TypeScript',
    'GraphQL',
    'React',
    'AWS',
    'Cloud-Native',
    'Microservices',
    'Fintech',
    'Dubai',
    'Remote Engineer',
  ],
  author: siteConfig.personal.fullName,
  openGraph: {
    title:
      'Jakir Hussain — AI Platform Engineer | LangChain, LangGraph, RAG Systems',
    description:
      'Senior Full-Stack & AI Platform Engineer with 8+ years building enterprise AI platforms, multi-agent systems, and scalable cloud-native applications.',
    type: 'website',
    url: baseUrl,
    siteName: `${siteConfig.personal.fullName} Portfolio`,
    images: [
      {
        url: `${baseUrl}/share.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.personal.fullName} - ${siteConfig.personal.role} | LangChain, LangGraph, RAG, Node.js, Next.js`,
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Jakir Hussain — AI Platform Engineer | LangChain, LangGraph, RAG Systems',
    description:
      'Senior Full-Stack & AI Platform Engineer with 8+ years building enterprise AI platforms, multi-agent systems, and RAG pipelines.',
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
