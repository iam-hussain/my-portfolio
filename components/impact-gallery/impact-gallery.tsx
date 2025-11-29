'use client'

import { impactMetrics } from '@/lib/data/impact-metrics'
import { ImpactTile } from './impact-tile'

export function ImpactGallery() {
  return (
    <section
      id="highlights"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-36 md:scroll-mt-40"
      aria-label="Highlights section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold !text-black dark:!text-white mb-3 sm:mb-4">
            Highlights
          </h2>
          <p className="text-base sm:text-lg md:text-xl !text-black dark:!text-white max-w-2xl mx-auto px-2 sm:px-0 font-medium">
            Key engineering achievements and measurable business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactMetrics.map((metric, index) => (
            <ImpactTile key={metric.id} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

