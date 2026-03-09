import { techStripItems } from '@/lib/data/tech-strip'

export function TechStrip() {
  return (
    <section
      className="relative py-4 sm:py-5 md:py-6 overflow-x-auto border-y border-border-subtle bg-bg-secondary/30 scrollbar-theme"
      aria-label="Technologies"
    >
      <div className="flex gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 justify-center flex-wrap min-w-0 max-w-7xl mx-auto">
        {techStripItems.map((tech) => (
          <span
            key={tech}
            className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-border-subtle bg-bg-card/60 backdrop-blur-sm font-mono text-xs sm:text-sm font-medium text-foreground/90 whitespace-nowrap hover:border-[var(--accent-cyan)]/40 hover:text-foreground transition-colors min-h-[40px] sm:min-h-[44px] flex items-center"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
