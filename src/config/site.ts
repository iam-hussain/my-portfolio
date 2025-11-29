export const siteConfig = {
  personal: {
    fullName: 'Jakir Hussain',
    shortName: 'Jakir',
    role: 'Senior Full-Stack Engineer — Product-Focused & Performance-Driven',
    location: 'Dubai — GMT+4',
    headline: 'I build modern, high-performance digital experiences by combining strong UI engineering, production-grade backend development, and cloud-native architectures.',
    heroTechLine: 'Node.js · React · TypeScript · GraphQL · AWS',
    openToRoles: 'Senior Frontend / Senior Full-Stack roles — Dubai / Remote worldwide.',
  },
  contact: {
    email: 'itsjakirhussain@gmail.com',
    phone: '+971 58 559 1060',
    whatsappLink: 'https://wa.me/971585591060',
    calendly: 'https://calendly.com/iamhussain',
  },
  links: {
    resumeUrl: '/jakir_full_stack_resume.pdf',
    linkedin: 'https://linkedin.com/in/jakirhussain18',
    github: 'https://github.com/jakirhussain18',
    website: 'https://iam-hussain.site',
  },
  ctaLabels: {
    primaryHero: 'Explore My Work',
    secondaryHero: 'Open Resume',
    contactEmail: 'Email Me',
    contactWhatsApp: 'WhatsApp',
    contactDownloadResume: 'Download Resume',
    contactBookCall: 'Book a Call',
  },
  navigation: {
    main: [
      { label: 'Home', href: '#home' },
      { label: 'What I Do', href: '#what-i-do' },
      { label: 'Work', href: '#work' },
      { label: 'Highlights', href: '#highlights' },
      { label: 'Playground', href: '#playground' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  socialIcons: [
    { type: 'github', href: 'https://github.com/jakirhussain18' },
    { type: 'linkedin', href: 'https://linkedin.com/in/jakirhussain18' },
    { type: 'email', href: 'mailto:itsjakirhussain@gmail.com' },
    { type: 'whatsapp', href: 'https://wa.me/971585591060' },
    { type: 'calendly', href: 'https://calendly.com/iamhussain' },
  ],
} as const

export type SiteConfig = typeof siteConfig

