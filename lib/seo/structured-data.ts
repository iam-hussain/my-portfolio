import { siteConfig } from '@/src/config/site'
import { featuredProjects } from '@/lib/data/featured-projects'

const baseUrl = siteConfig.links.website

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.personal.fullName,
    givenName: siteConfig.personal.shortName,
    jobTitle: siteConfig.personal.role,
    description:
      'Senior Full-Stack & AI Platform Engineer with 8+ years of experience building enterprise AI platforms, multi-agent systems, and scalable cloud-native applications.',
    url: baseUrl,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.personal.location,
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.contact.calendly,
    ],
    knowsAbout: [
      'AI Engineering',
      'LangChain',
      'LangGraph',
      'Multi Agent Systems',
      'Retrieval Augmented Generation',
      'Node.js',
      'TypeScript',
      'GraphQL',
      'Next.js',
      'Cloud Architecture',
      'Vector Databases',
      'LLM Orchestration',
      'RAG Pipelines',
      'MCP',
      'Microservices',
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.personal.fullName} Portfolio`,
    description:
      'Portfolio of Jakir Hussain, Senior Full-Stack & AI Platform Engineer specializing in LangChain, LangGraph, RAG, and enterprise AI systems.',
    url: baseUrl,
    author: {
      '@type': 'Person',
      name: siteConfig.personal.fullName,
      url: baseUrl,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/#projects`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${siteConfig.personal.fullName} — AI Platform Engineer Portfolio`,
    description:
      'Portfolio showcasing enterprise AI platforms, multi-agent systems, RAG pipelines, and full-stack applications built with LangChain, LangGraph, Node.js, and TypeScript.',
    url: baseUrl,
    isPartOf: {
      '@type': 'WebSite',
      url: baseUrl,
    },
    about: {
      '@type': 'Person',
      name: siteConfig.personal.fullName,
    },
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.personal.fullName,
      jobTitle: siteConfig.personal.role,
    },
  }
}

export function getCreativeWorkSchemas() {
  return featuredProjects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork' as const,
    name: project.title,
    description: project.summary,
    author: {
      '@type': 'Person',
      name: siteConfig.personal.fullName,
    },
    keywords: project.techStack.join(', '),
    about: project.highlights,
  }))
}

export function getSoftwareSourceCodeSchemas() {
  return featuredProjects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode' as const,
    name: project.title,
    description: project.summary,
    programmingLanguage: project.techStack,
    author: {
      '@type': 'Person',
      name: siteConfig.personal.fullName,
    },
  }))
}

export function getAllStructuredData() {
  return [
    getPersonSchema(),
    getWebSiteSchema(),
    getWebPageSchema(),
    ...getCreativeWorkSchemas(),
    ...getSoftwareSourceCodeSchemas(),
  ]
}
