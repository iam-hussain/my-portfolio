'use client'

import { valuePillars } from '@/lib/data/value-pillars'
import { PillarCard } from './pillar-card'

export function ValuePillars() {
  return (
    <section
      id="what-i-do"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="What I Do section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold !text-black dark:!text-white mb-3 sm:mb-4">
            What I Do
          </h2>
          <p className="text-base sm:text-lg md:text-xl !text-black dark:!text-white max-w-2xl mx-auto px-2 sm:px-0 font-medium">
            Core engineering strengths shaped by real-world experience building AI-powered products, cloud-native platforms, and high-scale API systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {valuePillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

