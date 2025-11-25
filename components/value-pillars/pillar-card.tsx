'use client'

import { ValuePillar } from '@/lib/types'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PillarCardProps {
  pillar: ValuePillar
  index: number
}

export function PillarCard({ pillar, index }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full border-border-subtle bg-bg-card/50 backdrop-blur-sm hover:border-border-accent hover:glow-effect-hover transition-all group cursor-pointer">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-text-primary mb-2">
            {pillar.title}
          </CardTitle>
          <CardDescription className="text-text-secondary text-base leading-relaxed">
            {pillar.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {pillar.techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-gradient-purple/20 to-gradient-blue/20 text-text-primary border border-border-subtle group-hover:border-border-accent transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


