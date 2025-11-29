'use client'

import { Experience } from '@/lib/types'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
import { caseStudies } from '@/lib/data/case-studies'

interface TimelineNodeProps {
  experience: Experience
  index: number
}

export function TimelineNode({ experience, index }: TimelineNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isEven = index % 2 === 0
  
  const caseStudy = experience.caseStudyId
    ? caseStudies.find((cs) => cs.id === experience.caseStudyId) ?? null
    : null

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
      style={{ maxWidth: '100%', overflowX: 'hidden' }}
    >
      {/* Timeline Line */}
      <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-gradient-purple border-2 border-bg-primary glow-effect" />
        {index < 5 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-gradient-purple to-gradient-blue mt-2" />
        )}
      </div>

      {/* Content Card */}
      <Card className="flex-1 border-border-subtle bg-bg-card/70 dark:bg-bg-card/80 backdrop-blur-md hover:border-border-accent hover:glow-effect-hover transition-all shadow-sm hover:shadow-md">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <CardTitle className="text-xl sm:text-2xl font-bold !text-black dark:!text-white mb-1">
                {experience.company}
              </CardTitle>
              <p className="text-base sm:text-lg !text-blue-600 dark:!text-blue-400 font-semibold">{experience.role}</p>
              <p className="text-xs sm:text-sm !text-black dark:!text-white mt-1">
                {experience.period} · {experience.location}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            {experience.bullets.slice(0, isExpanded ? experience.bullets.length : 3).map((bullet, i) => (
              <li key={i} className="text-sm sm:text-base !text-black dark:!text-white flex items-start gap-2 leading-relaxed">
                <span className="text-gradient-purple mt-1.5 flex-shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {experience.bullets.length > 3 && (
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="!text-blue-600 dark:!text-blue-400 hover:!text-black dark:hover:!text-white"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </Button>
          )}
          {caseStudy && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-border-accent hover:bg-bg-card !text-black dark:!text-white hidden sm:inline-flex w-full sm:w-auto"
                >
                  View Case Study
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[92vw] max-w-[26rem] sm:max-w-xl rounded-xl bg-bg-card border-border-subtle">
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl font-bold !text-black dark:!text-white">
                    {caseStudy.title}
                  </DialogTitle>
                  <DialogDescription className="!text-black dark:!text-white text-base sm:text-lg">
                    {caseStudy.company}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4 text-sm sm:text-base">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold !text-black dark:!text-white mb-2">Context</h3>
                    <p className="!text-black dark:!text-white leading-relaxed">{caseStudy.context}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold !text-black dark:!text-white mb-2">What I Did</h3>
                    <ul className="space-y-2">
                      {caseStudy.whatIDid.map((item, i) => (
                        <li key={i} className="!text-black dark:!text-white flex items-start gap-2">
                          <span className="text-gradient-purple mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold !text-black dark:!text-white mb-2">Impact</h3>
                    <ul className="space-y-2">
                      {caseStudy.impact.map((item, i) => (
                        <li key={i} className="!text-black dark:!text-white flex items-start gap-2">
                          <span className="text-gradient-blue mt-1.5 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold !text-black dark:!text-white mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-border-accent !text-black dark:!text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <DialogFooter className="flex justify-end mt-4 sm:mt-6">
                  <DialogClose asChild>
                    <Button variant="outline" size="sm" className="!text-black dark:!text-white">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-gradient-purple/20 to-gradient-blue/20 !text-black dark:!text-white border border-border-subtle"
              >
                {tech}
              </span>
            ))}
            {experience.techStack.length > 6 && (
              <span className="px-2 py-1 rounded text-xs font-medium !text-black dark:!text-white">
                +{experience.techStack.length - 6} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


