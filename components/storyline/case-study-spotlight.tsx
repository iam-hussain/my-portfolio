'use client'

import { CaseStudy } from '@/lib/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

interface CaseStudySpotlightProps {
  caseStudy: CaseStudy | null
  isOpen: boolean
  onClose: () => void
}

export function CaseStudySpotlight({ caseStudy, isOpen, onClose }: CaseStudySpotlightProps) {
  if (!caseStudy) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-bg-card border-border-subtle">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-text-primary">
            {caseStudy.title}
          </DialogTitle>
          <DialogDescription className="text-text-secondary text-lg">
            {caseStudy.company}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Context</h3>
            <p className="text-text-secondary leading-relaxed">{caseStudy.context}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">What I Did</h3>
            <ul className="space-y-2">
              {caseStudy.whatIDid.map((item, i) => (
                <li key={i} className="text-text-secondary flex items-start gap-2">
                  <span className="text-gradient-purple mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Impact</h3>
            <ul className="space-y-2">
              {caseStudy.impact.map((item, i) => (
                <li key={i} className="text-text-secondary flex items-start gap-2">
                  <span className="text-gradient-blue mt-1.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-border-accent text-text-primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

