'use client'

import { Card, CardContent } from '@/components/ui/card'
import { AnimateInView } from '@/components/ui/animate-in-view'

const highlightCards = [
  {
    id: 'experience',
    value: '8+',
    label: 'Years Experience',
    description: 'Building production systems across fintech and media',
  },
  {
    id: 'ai-platforms',
    value: 'Enterprise',
    label: 'AI Platforms',
    description: 'Multi-agent orchestration, RAG, MCP-based integrations',
  },
  {
    id: 'fintech-media',
    value: 'Fintech + Media',
    label: 'Systems',
    description: 'Open Finance, treasury copilots, personalization, real-time apps',
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
        <AnimateInView className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            AI Platform Engineering & Full-Stack Development
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Jakir Hussain is a Senior Full-Stack and AI Platform Engineer with over eight years of
            experience building cloud-native systems and AI-powered applications. His work focuses on
            enterprise AI platforms, agent-based architectures, retrieval-augmented generation
            pipelines, and scalable backend systems built with Node.js and TypeScript.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {highlightCards.map((card, index) => (
            <AnimateInView key={card.id} delay={index + 1}>
              <Card className="h-full rounded-2xl border-border-subtle bg-bg-card/80 backdrop-blur-sm hover:border-accent-cyan/30 transition-colors">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-cyan mb-1">
                    {card.value}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-foreground mb-2">{card.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
