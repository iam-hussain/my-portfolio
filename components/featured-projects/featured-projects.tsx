'use client'

import { featuredProjects } from '@/lib/data/featured-projects'
import { FeaturedProjectCard } from './featured-project-card'

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-36 md:scroll-mt-40"
      aria-label="Featured projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Enterprise AI Platforms & Full-Stack Applications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise AI platforms enabling secure LLM development, multi-agent orchestration, RAG
            pipelines, and fintech systems—deployed at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
