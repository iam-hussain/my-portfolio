'use client'

import { featuredProjects } from '@/lib/data/featured-projects'
import { FeaturedProjectCard } from './featured-project-card'
import { SectionReveal } from '@/components/canvas/section-reveal'

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="Featured projects"
    >
      <div className="max-w-7xl mx-auto px-0">
        <SectionReveal className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            AI platforms, multi-agent systems, and production LLM applications &mdash; shipped across regulated fintech and global media
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {featuredProjects.map((project, index) => (
            <SectionReveal key={project.id} delay={index + 1}>
              <FeaturedProjectCard project={project} index={index} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
