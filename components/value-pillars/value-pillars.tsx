'use client'

import { valuePillars } from '@/lib/data/value-pillars'
import { PillarCard } from './pillar-card'

export function ValuePillars() {
  return (
    <section
      id="value-pillars"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Value pillars section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Why Hire Me?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Four core strengths that drive my approach to building exceptional products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

