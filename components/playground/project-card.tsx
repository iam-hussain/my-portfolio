'use client'

import { Project } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
  index: number
}

const statusColors = {
  Live: 'bg-green-500/20 dark:bg-green-500/30 text-green-600 dark:text-green-400 border-green-500/50 dark:border-green-400/60',
  WIP: 'bg-yellow-500/20 dark:bg-yellow-500/30 text-yellow-600 dark:text-yellow-400 border-yellow-500/50 dark:border-yellow-400/60',
  Prototype: 'bg-blue-500/20 dark:bg-blue-500/30 text-blue-600 dark:text-blue-400 border-blue-500/50 dark:border-blue-400/60',
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full border-border-subtle bg-bg-card/70 dark:bg-bg-card/80 backdrop-blur-md hover:border-border-accent hover:glow-effect-hover transition-all group shadow-sm hover:shadow-md">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-2">
            <CardTitle className="text-xl sm:text-2xl font-bold text-text-primary">
              {project.name}
            </CardTitle>
            <Badge className={`${statusColors[project.status]} text-xs sm:text-sm`}>
              {project.status}
            </Badge>
          </div>
          <CardDescription className="text-text-accent font-medium text-sm sm:text-base">
            {project.tagline}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            {project.description.map((desc, i) => (
              <li key={i} className="text-sm sm:text-base text-text-secondary flex items-start gap-2 leading-relaxed">
                <span className="text-gradient-purple mt-1.5 flex-shrink-0">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
          
          {project.links && (
            <div className="flex gap-3 mb-4">
              {project.links.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-accent hover:text-text-primary transition-colors"
                  aria-label={`Visit ${project.name} live site`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Site
                </Link>
              )}
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-accent hover:text-text-primary transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              )}
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-accent hover:text-text-primary transition-colors"
                  aria-label={`View ${project.name} demo`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Link>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-gradient-purple/20 to-gradient-blue/20 text-text-primary border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


