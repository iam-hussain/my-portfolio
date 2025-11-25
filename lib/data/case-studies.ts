import { CaseStudy } from '@/lib/types'

export const caseStudies: CaseStudy[] = [
  {
    id: 'open-finance',
    title: 'Emirates NBD Open Finance Platform',
    company: 'Syncechron Technologies LLC',
    context: 'Led backend and API architecture for Emirates NBD\'s Open Finance Platform, developed under the UAE Central Bank\'s "Compete and Comply" Open Banking framework. The platform enables secure, consent-based financial data exchange between licensed financial institutions (LFIs) and third-party providers (TPPs).',
    whatIDid: [
      'Architected and deployed Node.js / TypeScript microservices for secure financial data exchange',
      'Designed and integrated REST and GraphQL APIs with React/Next.js dashboards',
      'Implemented 3Scale API Gateway for secure API management',
      'Automated CI/CD pipelines with Jenkins + OpenShift',
      'Collaborated directly with UAE Central Bank regulators for compliance',
      'Partnered with AI teams to prototype predictive consent analytics and anomaly detection dashboards',
    ],
    impact: [
      'Cut release time by 40% with automated CI/CD pipelines',
      'Delivered first production-ready release for regulated fintech ecosystem',
      'Ensured full compliance with Open Banking standards and data governance',
      'Enabled secure data interoperability between financial institutions',
    ],
    techStack: ['Express.js', 'TypeScript', 'GraphQL', 'React.js', 'Material UI', 'MongoDB', 'OpenShift', '3Scale', 'Cucumber.js', 'Playwright'],
  },
  {
    id: 'caption-contest',
    title: 'The New Yorker Caption Contest AI Personalization',
    company: 'Conde Nast Technology Lab',
    context: 'Engineered a full-stack AI personalization platform for The New Yorker Caption Contest, integrating ML-driven recommendation models with dynamic React rendering. The platform personalizes content based on real-time prediction data to boost user engagement.',
    whatIDid: [
      'Developed adaptive React/Next.js layouts connected to personalization APIs',
      'Integrated ML-driven recommendation models with dynamic React rendering',
      'Designed and automated Kubernetes Cronjobs for large-scale Instagram caption ingestion',
      'Transformed predictive analytics into interactive, data-driven UI components',
      'Led POC and rollout of server-driven UI components',
      'Built end-to-end analytics pipelines (Snowplow + GraphQL)',
    ],
    impact: [
      'Boosted user engagement by 27%',
      'Improved session duration significantly',
      'Cut redundant layout logic by 40% across devices and user segments',
      'Achieved continuous content synchronization with low-latency discovery',
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'Styled Components', 'Storybook', 'Prisma', 'MongoDB', 'MySQL', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'Vitest'],
  },
  {
    id: 'name-drop',
    title: 'Name Drop Quiz App',
    company: 'Conde Nast Technology Lab',
    context: 'Built "Name Drop" quiz app from Figma prototypes, creating a gamified experience that drives audience engagement. Integrated backend logic, animation-based UX, and performance profiling for a responsive, interactive experience.',
    whatIDid: [
      'Built quiz app from Figma prototypes',
      'Integrated backend logic with React frontend',
      'Implemented animation-based UX with Framer Motion',
      'Conducted performance profiling and optimization',
      'Created responsive, gamified user experience',
    ],
    impact: [
      'Delivered engaging quiz experience for audience',
      'Improved user interaction through gamification',
      'Optimized performance for smooth animations',
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Framer Motion', 'GraphQL', 'Node.js'],
  },
]


