'use client'

import { techStripItems } from '@/lib/data/tech-strip'

export function TechStrip() {
  return (
    <section
      className="relative py-6 overflow-x-auto border-y border-border-subtle bg-bg-secondary/30 scrollbar-theme"
      aria-label="Technologies"
    >
      <div className="flex gap-4 px-4 justify-center flex-wrap min-w-max">
        {techStripItems.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-lg border border-border-subtle bg-bg-card/60 backdrop-blur-sm font-mono text-sm font-medium text-foreground/90 whitespace-nowrap hover:border-[var(--accent-cyan)]/40 hover:text-foreground transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
