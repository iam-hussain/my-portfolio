'use client'

import { Experience } from '@/lib/types'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface TimelineNodeProps {
  experience: Experience
  index: number
  onCaseStudyClick?: (caseStudyId: string) => void
}

export function TimelineNode({ experience, index, onCaseStudyClick }: TimelineNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Line */}
      <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-gradient-purple border-2 border-bg-primary glow-effect" />
        {index < 5 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-gradient-purple to-gradient-blue mt-2" />
        )}
      </div>

      {/* Content Card */}
      <Card className="flex-1 border-border-subtle bg-bg-card/50 backdrop-blur-sm hover:border-border-accent hover:glow-effect-hover transition-all">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <CardTitle className="text-2xl font-bold text-text-primary mb-1">
                {experience.company}
              </CardTitle>
              <p className="text-lg text-text-accent font-semibold">{experience.role}</p>
              <p className="text-sm text-text-secondary mt-1">
                {experience.period} · {experience.location}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            {experience.bullets.slice(0, isExpanded ? experience.bullets.length : 3).map((bullet, i) => (
              <li key={i} className="text-text-secondary flex items-start gap-2">
                <span className="text-gradient-purple mt-1.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {experience.bullets.length > 3 && (
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-text-accent hover:text-text-primary"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </Button>
          )}
          {experience.caseStudyId && onCaseStudyClick && (
            <Button
              variant="outline"
              onClick={() => onCaseStudyClick(experience.caseStudyId!)}
              className="mt-4 border-border-accent hover:bg-bg-card"
            >
              View Case Study
            </Button>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-gradient-purple/20 to-gradient-blue/20 text-text-primary border border-border-subtle"
              >
                {tech}
              </span>
            ))}
            {experience.techStack.length > 6 && (
              <span className="px-2 py-1 rounded text-xs font-medium text-text-muted">
                +{experience.techStack.length - 6} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


