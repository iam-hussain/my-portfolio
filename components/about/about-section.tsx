'use client'

import { SectionReveal } from '@/components/canvas/section-reveal'

const highlightCards = [
  {
    id: 'experience',
    value: '8+',
    label: 'Years Building',
    description: 'Production systems shipped across banking, media, and e-commerce',
    color: 'text-accent-cyan',
  },
  {
    id: 'ai-platforms',
    value: '3',
    label: 'AI Platforms Delivered',
    description: 'Enterprise copilots, agent frameworks, and RAG systems in regulated fintech',
    color: 'text-state-success',
  },
  {
    id: 'impact',
    value: '+27%',
    label: 'Engagement Lift',
    description: 'Personalization platform impact at The New Yorker (Cond\u00e9 Nast)',
    color: 'text-state-progress',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="About section"
    >
      <div className="max-w-5xl mx-auto px-0">
        <SectionReveal className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            I care about building systems that actually ship &mdash; not just prototypes, but production
            platforms that teams rely on daily. Most of my work sits at the intersection of AI and
            backend engineering: designing agent architectures, wiring up LLM pipelines, and making
            sure they hold up under real-world constraints like compliance, scale, and latency.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {highlightCards.map((card, index) => (
            <SectionReveal key={card.id} delay={index + 1}>
              <div className="h-full glass-panel p-4 sm:p-5 md:p-6 hover:border-accent-cyan/30 transition-all duration-300 group">
                <p className={`font-mono text-2xl sm:text-3xl md:text-4xl font-bold ${card.color} mb-1.5 tracking-tight`}>
                  {card.value}
                </p>
                <p className="text-sm sm:text-base font-semibold text-foreground mb-2">{card.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
