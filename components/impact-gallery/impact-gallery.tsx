'use client'

import { impactMetrics } from '@/lib/data/impact-metrics'
import { ImpactTile } from './impact-tile'

export function ImpactGallery() {
  return (
    <section
      id="impact-gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30"
      aria-label="Highlights section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Highlights
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Key engineering achievements and measurable business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <ImpactTile key={metric.id} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

