'use client'

import { memo } from 'react'
import { FeaturedProject } from '@/lib/types'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/ui/animate-in-view'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { caseStudies } from '@/lib/data/case-studies'

interface FeaturedProjectCardProps {
  project: FeaturedProject
  index: number
}

function CaseStudyDialogContent({ caseStudyId }: { caseStudyId: string }) {
  const caseStudy = caseStudies.find((cs) => cs.id === caseStudyId)
  if (!caseStudy) return null

  return (
    <div className="space-y-6 text-sm">
      <div>
        <h4 className="font-semibold text-foreground mb-2">Context</h4>
        <p className="text-muted-foreground leading-relaxed">{caseStudy.context}</p>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">What I Did</h4>
        <ul className="space-y-2">
          {caseStudy.whatIDid.map((item, i) => (
            <li key={i} className="text-muted-foreground flex gap-2">
              <span className="text-accent-cyan flex-shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">Impact</h4>
        <ul className="space-y-2">
          {caseStudy.impact.map((item, i) => (
            <li key={i} className="text-muted-foreground flex gap-2">
              <span className="text-accent-cyan flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {caseStudy.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded font-mono text-xs border border-border-subtle bg-bg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeaturedProjectCardInner({ project, index }: FeaturedProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimateInView delay={index}>
      <Card className="h-full rounded-2xl border-border-subtle bg-bg-card/80 backdrop-blur-sm overflow-hidden group hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader>
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.impact && (
            <p className="text-sm text-foreground/90 font-medium">{project.impact}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-lg font-mono text-xs border border-border-subtle bg-bg-secondary/80 text-foreground/90"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.caseStudyId && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border-subtle text-foreground hover:border-accent-cyan/50 hover:text-accent-cyan"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-bg-secondary border-border-subtle">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                <CaseStudyDialogContent caseStudyId={project.caseStudyId} />
              </DialogContent>
            </Dialog>
          )}
        </CardContent>
      </Card>
    </AnimateInView>
  )
}

export const FeaturedProjectCard = memo(FeaturedProjectCardInner)
