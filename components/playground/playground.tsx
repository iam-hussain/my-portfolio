'use client'

import { projects } from '@/lib/data/projects'
import { ProjectCard } from './project-card'

export function Playground() {
  return (
    <section
      id="playground"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30"
      aria-label="Side projects section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Playground
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Side projects that showcase curiosity and personal initiative
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

