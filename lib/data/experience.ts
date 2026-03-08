import { Experience } from '@/lib/types'

export const experiences: Experience[] = [
  {
    id: 'emirates-nbd',
    company: 'Synechron Technologies LLC (Client: Emirates NBD)',
    role: 'Lead - Technology',
    period: 'DEC 2024 - Current',
    location: 'Dubai, UAE',
    bullets: [
      'Leading architecture and rollout of Emirates NBD\'s enterprise AI platform to standardize development of secure, production-grade LLM applications and accelerate AI adoption across engineering teams.',
      'Architecting centralized AI development platform with multi-agent orchestration frameworks using Node.js, TypeScript, LangChain, and LangGraph—enabling teams to build scalable AI workflows with standardized tooling and governance.',
      'Building shared AI SDKs and MCP-based tool infrastructure for secure integration with internal enterprise systems and Calypso treasury APIs.',
      'Architected and delivered Treasury AI Copilot—a multi-agent LLM system with LangGraph orchestration, RAG pipelines, and Redis session memory for real-time treasury insights in regulated banking.',
      'Implementing enterprise AI governance and guardrails including prompt safety, authorization controls, data masking, and compliance validation aligned with banking regulations.',
      'Owned backend architecture for Open Finance Platform under UAE Central Bank "Compete & Comply" framework—Node.js/TypeScript microservices, REST/GraphQL APIs, 3Scale API Gateway, Jenkins + OpenShift CI/CD reducing release cycles by 40%.',
    ],
    techStack: ['Node.js', 'TypeScript', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'Vector Embeddings', 'OpenAI', 'Claude', 'LLaMA', 'Redis', 'Calypso', 'Express.js', 'GraphQL', 'React.js', 'MongoDB', 'OpenShift', '3Scale'],
    caseStudyId: 'enterprise-ai-platform',
    caseStudyIds: ['enterprise-ai-platform', 'treasury-copilot', 'open-finance'],
  },
  {
    id: 'conde-nast',
    company: 'Condé Nast Technology Lab',
    role: 'Software Engineer II',
    period: 'JUNE 2021 - NOV 2024',
    location: 'Bangalore, Karnataka, India',
    bullets: [
      'Engineered a full-stack AI personalization platform for The New Yorker Caption Contest, integrating ML-driven recommendation models with dynamic React rendering based on realtime prediction data.',
      'Developed adaptive React/Next.js layouts connected to personalization APIs, boosting user engagement by 27% and improving session duration.',
      'Designed and automated Kubernetes Cronjobs for large-scale Instagram caption ingestion, achieving continuous content synchronization and low-latency discovery.',
      'Collaborated with ML and backend teams to transform predictive analytics into interactive, data-driven UI components and scalable GraphQL endpoints.',
      'Led the POC and rollout of server-driven UI components, cutting redundant layout logic by 40% across devices and user segments.',
      'Built "Name Drop" quiz app from Figma prototypes, integrating backend logic, animation-based UX, and performance profiling for a responsive, gamified experience.',
      'Enhanced homepage accessibility and engagement by integrating audio-article playback and adaptive media handling.',
      'Optimized newsletter subscription modules and toggled logic, improving recurring user signups by 18%.',
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'Styled Components', 'Storybook', 'Prisma', 'MongoDB', 'MySQL', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'Hapi', 'Express', 'Datadog', 'Serverless Framework', 'Fastly CDN', 'Databricks', 'Vitest'],
    caseStudyId: 'caption-contest',
  },
  {
    id: 'htc',
    company: 'HTC Global Services',
    role: 'Software Developer',
    period: 'FEB 2020 - JUNE 2021',
    location: 'Chennai, Tamil Nadu, India',
    bullets: [
      'Built microservice APIs for Manipal University\'s online platform serving 50K students.',
      'Implemented serverless ingestion pipelines (AWS Lambda, SQS, DynamoDB) to process Salesforce data 60% faster.',
      'Added Elasticsearch search and async event processing for real-time analytics.',
      'Deployed Dockerized Node.js apps to AWS EC2 and improved CI/CD reliability 30%.',
      'Collaborated with front-end teams to integrate React components with Node APIs.',
    ],
    techStack: ['Node.js', 'Express.js', 'TypeScript', 'Sequelize', 'DynamoDB', 'Elasticsearch', 'AWS Lambda', 'SQS', 'Docker'],
  },
  {
    id: 'develop-script',
    company: 'Develop Script LLC',
    role: 'Node JS Developer',
    period: 'DEC 2018 - JAN 2020',
    location: 'Chennai, Tamil Nadu, India',
    bullets: [
      'Engineered real-time auction APIs with Node.js / Express and WebSocket communication via Socket.IO.',
      'Managed Redis Pub/Sub for instant bidding synchronization across users.',
      'Integrated payment gateways, logistics, and notification services to create complete ecommerce workflows.',
      'Built React interfaces for admin and bidding modules with real-time updates.',
    ],
    techStack: ['Node.js', 'Express.js', 'React.js', 'Socket.IO', 'Redis', 'AWS RDS', 'MySQL'],
  },
  {
    id: 'selsun',
    company: 'Selsun Technologies',
    role: 'Software Trainee',
    period: 'DEC 2017 - NOV 2018',
    location: 'Chennai, Tamil Nadu, India',
    bullets: [
      'Enhanced OpenCV-based image-processing algorithms for industrial vision equipment.',
      'Assisted in computer-vision deployments and performance testing under tight deadlines.',
    ],
    techStack: ['C++', 'Python', 'OpenCV'],
  },
  {
    id: 'origin-protocol',
    company: 'Origin Protocol',
    role: 'Web3 Frontend Engineer (Freelance)',
    period: 'DEC 2020 - FEB 2021',
    location: 'San Francisco, California, US',
    bullets: [
      'Worked on functional enhancements for a decentralized application (dApp) on the Ethereum blockchain.',
      'Integrated Web3.js with MetaMask for seamless wallet connectivity and on-chain transaction flow.',
      'Collaborated with backend engineers to extend GraphQL APIs and improve blockchain event handling.',
    ],
    techStack: ['TypeScript', 'Express.js', 'Lerna.js', 'GraphQL', 'Solidity', 'Styled Components', 'Web3.js', 'Python Flask', 'Mocha', 'Chai'],
  },
]

const TIMELINE_IDS = ['emirates-nbd', 'conde-nast', 'htc', 'develop-script'] as const

export const timelineExperiences: Experience[] = experiences.filter((e) =>
  TIMELINE_IDS.includes(e.id as (typeof TIMELINE_IDS)[number])
)
