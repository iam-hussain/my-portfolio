export interface PersonalInfo {
  name: string
  title: string
  oneLiner: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  github: string
  resumeUrl: string
}

export interface StatChip {
  label: string
  value: string
}

export interface ValuePillar {
  id: string
  title: string
  description: string
  techBadges: string[]
}

export interface ImpactMetric {
  id: string
  value: string
  label: string
  description: string
  context?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  techStack: string[]
  caseStudyId?: string
}

export interface CaseStudy {
  id: string
  title: string
  company: string
  context: string
  whatIDid: string[]
  impact: string[]
  techStack: string[]
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string[]
  status: 'Live' | 'WIP' | 'Prototype'
  links?: {
    live?: string
    github?: string
    demo?: string
  }
  techStack: string[]
}


