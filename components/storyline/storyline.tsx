'use client'

import { experiences } from '@/lib/data/experience'
import { TimelineNode } from './timeline-node'

export function Storyline() {
  return (
    <section
      id="work"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-36 md:scroll-mt-40"
      aria-label="Work section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold !text-black dark:!text-white mb-3 sm:mb-4">
            Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl !text-black dark:!text-white max-w-2xl mx-auto px-2 sm:px-0 font-medium">
            Professional experience and projects that showcase my expertise
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-purple via-gradient-blue to-gradient-pink" />
          
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
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

