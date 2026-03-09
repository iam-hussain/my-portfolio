'use client'

import { memo } from 'react'
import { Experience } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimateInView } from '@/components/ui/animate-in-view'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
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

function CaseStudyContent({ caseStudy }: { caseStudy: (typeof caseStudies)[number] }) {
  return (
    <div className="space-y-6 mt-4 text-sm sm:text-base">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Context</h3>
        <p className="text-muted-foreground leading-relaxed">{caseStudy.context}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">What I Did</h3>
        <ul className="space-y-2">
          {caseStudy.whatIDid.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-2">
              <span className="text-[var(--accent-cyan)] mt-1.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Impact</h3>
        <ul className="space-y-2">
          {caseStudy.impact.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-2">
              <span className="text-[var(--accent-cyan)] mt-1.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {caseStudy.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-border-subtle text-foreground font-mono text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineNodeInner({ experience, index }: TimelineNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const hasMultipleCaseStudies = experience.caseStudyIds && experience.caseStudyIds.length > 1
  const caseStudyIds = experience.caseStudyIds ?? (experience.caseStudyId ? [experience.caseStudyId] : [])
  const studies = caseStudyIds
    .map((id) => caseStudies.find((cs) => cs.id === id))
    .filter((cs): cs is (typeof caseStudies)[number] => cs != null)

  const primaryCaseStudy = experience.caseStudyId
    ? caseStudies.find((cs) => cs.id === experience.caseStudyId) ?? studies[0] ?? null
    : studies[0] ?? null

  return (
    <AnimateInView
      delay={index}
      className="flex flex-col md:flex-row gap-4 md:gap-8 items-start max-w-full overflow-x-hidden"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-[var(--accent-cyan)] border-2 border-bg-primary shadow-[0_0_12px_var(--accent-cyan)]" />
        {index < 3 && (
          <div className="w-0.5 flex-1 min-h-[40px] bg-gradient-to-b from-[var(--accent-cyan)] to-[var(--accent-violet)] opacity-40 mt-2" />
        )}
      </div>

      {/* Content Card */}
      <Card className="flex-1 rounded-2xl border-border-subtle bg-bg-card/80 backdrop-blur-md hover:border-[var(--accent-cyan)]/40 transition-all shadow-sm hover:shadow-xl">
        <CardHeader className="p-4 sm:p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-1">
                {experience.company}
              </CardTitle>
              <p className="text-sm sm:text-base text-[var(--accent-cyan)] font-semibold">{experience.role}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {experience.period} · {experience.location}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
          <ul className="space-y-2 mb-4">
            {experience.bullets.slice(0, isExpanded ? experience.bullets.length : 3).map((bullet, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span className="text-[var(--accent-cyan)] mt-1.5 flex-shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {experience.bullets.length > 3 && (
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[var(--accent-cyan)] hover:text-foreground"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </Button>
          )}
          {studies.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-border-subtle hover:border-[var(--accent-cyan)]/50 text-foreground hidden sm:inline-flex w-full sm:w-auto"
                >
                  {hasMultipleCaseStudies ? 'View Case Studies' : 'View Case Study'}
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100vw-2rem)] max-w-[26rem] sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-bg-secondary border-border-subtle">
                {hasMultipleCaseStudies ? (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        Case Studies
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground text-base">
                        {experience.company}
                      </DialogDescription>
                    </DialogHeader>
                    <Accordion type="single" collapsible className="mt-4">
                      {studies.map((study) => (
                        <AccordionItem key={study.id} value={study.id} className="border-border-subtle">
                          <AccordionTrigger className="text-foreground hover:no-underline">
                            {study.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <CaseStudyContent caseStudy={study} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                        <DialogFooter className="flex justify-end mt-4 sm:mt-6">
                        <DialogClose asChild>
                          <Button variant="outline" size="sm" className="text-foreground">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                  </>
                ) : (
                  primaryCaseStudy && (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-foreground">
                          {primaryCaseStudy.title}
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground text-base">
                          {primaryCaseStudy.company}
                        </DialogDescription>
                      </DialogHeader>
                      <CaseStudyContent caseStudy={primaryCaseStudy} />
                      <DialogFooter className="flex justify-end mt-4 sm:mt-6">
                        <DialogClose asChild>
                          <Button variant="outline" size="sm" className="text-foreground">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </>
                  )
                )}
              </DialogContent>
            </Dialog>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-lg text-xs font-mono font-medium bg-bg-secondary text-foreground/90 border border-border-subtle"
              >
                {tech}
              </span>
            ))}
            {experience.techStack.length > 6 && (
              <span className="px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                +{experience.techStack.length - 6} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </AnimateInView>
  )
}

export const TimelineNode = memo(TimelineNodeInner)
