'use client'

import { timelineExperiences } from '@/lib/data/experience'
import { TimelineNode } from './timeline-node'

export function Storyline() {
  return (
    <section
      id="experience"
      className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="Experience section"
    >
      <div className="max-w-4xl mx-auto px-0">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            Enterprise AI Platforms & Full-Stack Experience
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            AI platform engineering, multi-agent systems, RAG pipelines, fintech, and high-scale
            media systems
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-cyan)] opacity-60" />
          
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {timelineExperiences.map((experience, index) => (
              <TimelineNode
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

