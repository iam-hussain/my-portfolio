export const siteConfig = {
  personal: {
    fullName: 'Jakir Hussain',
    shortName: 'Jakir',
    role: 'Senior Full-Stack & AI Platform Engineer',
    roleTitle: 'Senior Full-Stack & AI Platform Engineer',
    roleTagline: 'Node.js | Agentic AI | Cloud-Native Systems',
    location: 'Dubai — GMT+4',
    headline: '8+ years building production AI systems and cloud-native platforms. Specialized in multi-agent LLM architectures, LangChain/LangGraph orchestration, MCP-based tool integrations, and RAG pipelines—deployed at scale across fintech and media.',
    heroTechLine: 'Node.js · LangChain · TypeScript · React · GraphQL · AWS',
    openToRoles: 'Senior AI Platform / Full-Stack roles — Dubai / Remote worldwide.',
  },
  contact: {
    email: 'itsjakirhussain@gmail.com',
    phone: '+971 55 141 9969',
    whatsappLink: 'https://wa.me/971551419969',
    calendly: 'https://calendly.com/iamhussain',
  },
  links: {
    resumeUrl: '/jakir_hussain-ai-engineer.pdf',
    linkedin: 'https://linkedin.com/in/iam-hussain',
    github: 'https://github.com/iam-hussain',
    website: 'https://iam-hussain.site',
  },
  ctaLabels: {
    primaryHero: 'View Projects',
    secondaryHero: 'Contact Me',
    tertiaryHero: 'Resume',
    contactEmail: 'Email Me',
    contactWhatsApp: 'WhatsApp',
    contactDownloadResume: 'Download Resume',
    contactBookCall: 'Book a Call',
  },
  hero: {
    headline: 'Senior Full-Stack & AI Platform Engineer',
    subheadline: 'Enterprise LLM Systems · Multi-Agent AI · RAG Pipelines',
    supportingText:
      '8+ years building production AI systems and cloud-native platforms across fintech and media. Specialized in Node.js, TypeScript, React, GraphQL—multi-agent LLM architectures, LangChain/LangGraph orchestration, MCP-based tools, RAG pipelines, and scalable cloud infrastructure.',
  },
  contactCta: {
    headline: "Let's Build Something Interesting",
    subtext:
      'Open to senior engineering, AI platform, and full-stack opportunities, consulting, and product collaborations.',
  },
  navigation: {
    home: '#home',
    main: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  socialIcons: [
    { type: 'github', href: 'https://github.com/iam-hussain' },
    { type: 'linkedin', href: 'https://linkedin.com/in/iam-hussain' },
    { type: 'email', href: 'mailto:itsjakirhussain@gmail.com' },
    { type: 'whatsapp', href: 'https://wa.me/971551419969' },
    { type: 'calendly', href: 'https://calendly.com/iamhussain' },
  ],
} as const

export type SiteConfig = typeof siteConfig
