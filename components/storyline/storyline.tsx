'use client'

import { timelineExperiences } from '@/lib/data/experience'
import { TimelineNode } from './timeline-node'
import { SectionReveal } from '@/components/canvas/section-reveal'

export function Storyline() {
  return (
    <section
      id="experience"
      className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="Experience section"
    >
      <div className="max-w-4xl mx-auto px-0">
        <SectionReveal className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            Where I&apos;ve Worked
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From early-stage startups to enterprise banking and global media &mdash; building systems that scale
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px">
            <div className="h-full w-full bg-gradient-to-b from-accent-cyan/40 via-accent-violet/30 to-transparent" />
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {timelineExperiences.map((experience, index) => (
              <SectionReveal key={experience.id} delay={index + 1}>
                <TimelineNode experience={experience} index={index} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
