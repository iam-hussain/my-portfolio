import { siteConfig } from '@/src/config/site'
import { featuredProjects } from '@/lib/data/featured-projects'

const baseUrl = siteConfig.links.website

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: siteConfig.personal.fullName,
    givenName: siteConfig.personal.shortName,
    familyName: 'Hussain',
    jobTitle: siteConfig.personal.role,
    description:
      'Senior Full-Stack & AI Platform Engineer with 8+ years of experience building enterprise AI platforms, multi-agent LLM systems, RAG pipelines, and scalable cloud-native applications across fintech and media.',
    url: baseUrl,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    image: `${baseUrl}/opengraph-image`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
    knowsLanguage: ['en', 'ta', 'hi'],
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.contact.calendly,
    ],
    knowsAbout: [
      'AI Platform Engineering',
      'Multi-Agent LLM Systems',
      'LangChain',
      'LangGraph',
      'Model Context Protocol (MCP)',
      'Retrieval-Augmented Generation (RAG)',
      'Vector Embeddings',
      'Vector Databases',
      'LLM Orchestration',
      'Agentic AI',
      'AI Guardrails',
      'Prompt Engineering',
      'Node.js',
      'TypeScript',
      'GraphQL',
      'Next.js',
      'React',
      'Cloud Architecture',
      'Microservices',
      'Kubernetes',
      'AWS',
      'Docker',
      'Terraform',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'B.E. in Mechanical Engineering',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'Arunai Engineering College',
        },
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Synechron Technologies LLC',
      url: 'https://www.synechron.com',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Arunai Engineering College',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Kumaran Polytechnic College',
      },
    ],
  }
}

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/#profilepage`,
    name: `${siteConfig.personal.fullName} — AI Platform Engineer Portfolio`,
    description:
      'Portfolio showcasing enterprise AI platforms, multi-agent systems, RAG pipelines, and production LLM applications built with LangChain, LangGraph, Node.js, and TypeScript.',
    url: baseUrl,
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntity: { '@id': `${baseUrl}/#person` },
    breadcrumb: { '@id': `${baseUrl}/#breadcrumb` },
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: `${siteConfig.personal.fullName} — AI Platform Engineer`,
    description:
      'Portfolio of Jakir Hussain, Senior Full-Stack & AI Platform Engineer specializing in LangChain, LangGraph, RAG, multi-agent systems, and enterprise AI platforms.',
    url: baseUrl,
    inLanguage: 'en-US',
    author: { '@id': `${baseUrl}/#person` },
    publisher: { '@id': `${baseUrl}/#person` },
    copyrightYear: 2024,
  }
}

export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${baseUrl}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${baseUrl}/#about`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: `${baseUrl}/#projects`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Experience',
        item: `${baseUrl}/#experience`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Skills',
        item: `${baseUrl}/#skills`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: `${baseUrl}/#contact`,
      },
    ],
  }
}

export function getCreativeWorkSchemas() {
  return featuredProjects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork' as const,
    name: project.title,
    description: project.summary,
    url: `${baseUrl}/#projects`,
    author: { '@id': `${baseUrl}/#person` },
    keywords: project.techStack.join(', '),
    about: project.highlights,
    abstract: project.impact,
    datePublished: '2024-01-01',
    inLanguage: 'en-US',
  }))
}

export function getOccupationalExperienceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Professional Experience',
    description: 'Work experience of Jakir Hussain across AI platform engineering, full-stack development, and cloud-native systems.',
    url: `${baseUrl}/#experience`,
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Role',
          roleName: 'Lead — Technology',
          startDate: '2024-12',
          memberOf: {
            '@type': 'Organization',
            name: 'Synechron Technologies LLC (Client: Emirates NBD)',
            location: 'Dubai, UAE',
          },
          description: 'Leading architecture of enterprise AI platform with multi-agent orchestration, shared AI SDKs, and governance guardrails for regulated banking.',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Role',
          roleName: 'Software Engineer II',
          startDate: '2021-06',
          endDate: '2024-11',
          memberOf: {
            '@type': 'Organization',
            name: 'Condé Nast Technology Lab',
            location: 'Bangalore, India',
          },
          description: 'Built AI-driven personalization platform for The New Yorker, increasing engagement by 27%. Full-stack React/Next.js with GraphQL and Kubernetes.',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Role',
          roleName: 'Software Developer',
          startDate: '2020-02',
          endDate: '2021-06',
          memberOf: {
            '@type': 'Organization',
            name: 'HTC Global Services',
            location: 'Chennai, India',
          },
          description: 'Microservice APIs for education platform serving 50K+ students. Serverless pipelines with AWS Lambda improving processing by 60%.',
        },
      },
    ],
  }
}

export function getStructuredDataGraph() {
  const person = getPersonSchema()
  const profilePage = getProfilePageSchema()
  const webSite = getWebSiteSchema()
  const breadcrumb = getBreadcrumbSchema()
  const experience = getOccupationalExperienceSchema()
  const projects = getCreativeWorkSchemas()

  // Remove @context from individual schemas — the graph provides it
  const stripContext = <T extends Record<string, unknown>>(obj: T) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { '@context': _context, ...rest } = obj
    return rest
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      stripContext(person),
      stripContext(profilePage),
      stripContext(webSite),
      stripContext(breadcrumb),
      stripContext(experience),
      ...projects.map(stripContext),
    ],
  }
}

/** @deprecated Use getStructuredDataGraph() for consolidated @graph output */
export function getAllStructuredData() {
  return [getStructuredDataGraph()]
}
