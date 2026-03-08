'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

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
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-36 md:scroll-mt-40"
      aria-label="About section"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            AI Platform Engineering & Full-Stack Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Jakir Hussain is a Senior Full-Stack and AI Platform Engineer with over eight years of
            experience building cloud-native systems and AI-powered applications. His work focuses on
            enterprise AI platforms, agent-based architectures, retrieval-augmented generation
            pipelines, and scalable backend systems built with Node.js and TypeScript.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full rounded-2xl border-border-subtle bg-bg-card/80 backdrop-blur-sm hover:border-accent-cyan/30 transition-colors">
                <CardContent className="p-6">
                  <p className="text-2xl md:text-3xl font-bold text-accent-cyan mb-1">
                    {card.value}
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-2">{card.label}</p>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
