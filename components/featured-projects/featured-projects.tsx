'use client'

import { featuredProjects } from '@/lib/data/featured-projects'
import { FeaturedProjectCard } from './featured-project-card'

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="Featured projects"
    >
      <div className="max-w-7xl mx-auto px-0">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            Enterprise AI Platforms & Full-Stack Applications
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Enterprise AI platforms enabling secure LLM development, multi-agent orchestration, RAG
            pipelines, and fintech systems—deployed at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
