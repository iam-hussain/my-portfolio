'use client'

import { memo } from 'react'
import { FeaturedProject } from '@/lib/types'

interface FeaturedProjectCardProps {
  project: FeaturedProject
  index: number
}

function extractMetric(impact?: string): { stat: string; rest: string } | null {
  if (!impact) return null
  const match = impact.match(/(\+?\-?\d+%?)/)
  if (!match) return null
  return { stat: match[1], rest: impact.replace(match[1], '').replace(/^\s*\.?\s*/, '').trim() }
}

function FeaturedProjectCardInner({ project }: FeaturedProjectCardProps) {
  const metric = extractMetric(project.impact)

  return (
    <div className="h-full glass-panel overflow-hidden group hover:border-accent-cyan/30 transition-all duration-300 flex flex-col">
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        {/* Title + metric */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent-cyan transition-colors leading-snug">
            {project.title}
          </h3>
          {metric && (
            <span className="shrink-0 px-2.5 py-1 rounded-lg bg-state-success/10 border border-state-success/20 text-state-success font-mono font-bold text-sm tabular-nums">
              {metric.stat}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Key highlights — always visible */}
        <ul className="space-y-1.5 mb-4 flex-1">
          {project.highlights.slice(0, 4).map((item, i) => (
            <li
              key={i}
              className="text-[13px] text-foreground/75 flex items-start gap-2 leading-relaxed"
            >
              <span className="text-accent-cyan flex-shrink-0 mt-0.5 text-[10px]">&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Impact line */}
        {project.impact && (
          <p className="text-xs font-mono text-state-success/80 mb-4 leading-relaxed">
            {project.impact}
          </p>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md font-mono text-[11px] border border-border-subtle bg-bg-secondary/60 text-foreground/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const FeaturedProjectCard = memo(FeaturedProjectCardInner)
