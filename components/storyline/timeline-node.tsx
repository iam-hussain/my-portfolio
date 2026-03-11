'use client'

import { memo, useState } from 'react'
import { Experience } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronDown, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { caseStudies } from '@/lib/data/case-studies'

interface TimelineNodeProps {
  experience: Experience
  index: number
}

function TimelineNodeInner({ experience, index }: TimelineNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showCaseStudy, setShowCaseStudy] = useState(false)

  const hasMultipleCaseStudies = experience.caseStudyIds && experience.caseStudyIds.length > 1
  const caseStudyIds = experience.caseStudyIds ?? (experience.caseStudyId ? [experience.caseStudyId] : [])
  const studies = caseStudyIds
    .map((id) => caseStudies.find((cs) => cs.id === id))
    .filter((cs): cs is (typeof caseStudies)[number] => cs != null)

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start max-w-full overflow-x-hidden">
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0">
        <div className="w-3.5 h-3.5 rounded-full bg-accent-cyan border-2 border-bg-primary shadow-[0_0_10px_var(--color-accent-cyan)]" />
        {index < 3 && (
          <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-accent-cyan/30 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 glass-panel overflow-hidden hover:border-accent-cyan/30 transition-all duration-300 group">
        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5 group-hover:text-accent-cyan transition-colors">
                {experience.company}
              </h3>
              <p className="text-sm text-accent-cyan font-semibold">{experience.role}</p>
              <p className="text-xs font-mono text-muted-foreground/70 mt-1">
                {experience.period} &middot; {experience.location}
              </p>
            </div>
          </div>

          <ul className="space-y-1.5 mb-3">
            {experience.bullets.slice(0, isExpanded ? experience.bullets.length : 3).map((bullet, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span className="text-accent-cyan mt-1 flex-shrink-0 text-xs">&bull;</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {experience.bullets.length > 3 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-accent-cyan hover:text-foreground h-8 px-3 text-xs"
              >
                {isExpanded ? 'Less' : 'More'}
                <ChevronRight className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </Button>
            )}
            {studies.length > 0 && (
              <button
                onClick={() => setShowCaseStudy(!showCaseStudy)}
                className="inline-flex items-center gap-1 text-xs font-medium text-accent-cyan hover:text-foreground transition-colors"
                aria-expanded={showCaseStudy}
              >
                {showCaseStudy ? 'Close' : hasMultipleCaseStudies ? 'Case Studies' : 'Case Study'}
                {showCaseStudy ? <X className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {experience.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-border-subtle bg-bg-secondary/60 text-foreground/70"
              >
                {tech}
              </span>
            ))}
            {experience.techStack.length > 6 && (
              <span className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground/60">
                +{experience.techStack.length - 6}
              </span>
            )}
          </div>
        </div>

        {/* In-canvas case study expansion */}
        <AnimatePresence>
          {showCaseStudy && studies.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-border-subtle/50 p-4 sm:p-5 md:p-6 bg-bg-secondary/20">
                {hasMultipleCaseStudies ? (
                  <Accordion type="single" collapsible>
                    {studies.map((study) => (
                      <AccordionItem key={study.id} value={study.id} className="border-border-subtle/50">
                        <AccordionTrigger className="text-foreground text-sm hover:no-underline">
                          {study.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <CaseStudyInline caseStudy={study} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <CaseStudyInline caseStudy={studies[0]} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function CaseStudyInline({ caseStudy }: { caseStudy: (typeof caseStudies)[number] }) {
  return (
    <div className="space-y-4 text-sm">
      <div>
        <h4 className="text-xs font-mono font-semibold text-accent-cyan uppercase tracking-wider mb-1.5">Context</h4>
        <p className="text-muted-foreground leading-relaxed">{caseStudy.context}</p>
      </div>
      <div>
        <h4 className="text-xs font-mono font-semibold text-accent-cyan uppercase tracking-wider mb-1.5">What I Did</h4>
        <ul className="space-y-1">
          {caseStudy.whatIDid.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-2">
              <span className="text-accent-cyan flex-shrink-0 mt-0.5 text-xs">&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-mono font-semibold text-state-success uppercase tracking-wider mb-1.5">Impact</h4>
        <ul className="space-y-1">
          {caseStudy.impact.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-2">
              <span className="text-state-success flex-shrink-0 mt-0.5">&check;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-mono font-semibold text-foreground/50 uppercase tracking-wider mb-1.5">Stack</h4>
        <div className="flex flex-wrap gap-1.5">
          {caseStudy.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-md font-mono text-[11px] border border-border-subtle bg-bg-secondary/60 text-foreground/60">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const TimelineNode = memo(TimelineNodeInner)
