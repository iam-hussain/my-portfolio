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
      <Card className="h-full border-border-subtle bg-bg-card/70 dark:bg-bg-card/80 backdrop-blur-md hover:border-border-accent hover:glow-effect-hover transition-all group cursor-pointer shadow-sm hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold !text-black dark:!text-white mb-2">
            {pillar.title}
          </CardTitle>
          <CardDescription className="!text-black dark:!text-white text-sm sm:text-base leading-relaxed">
            {pillar.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {pillar.techBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-gradient-purple/20 to-gradient-blue/20 !text-black dark:!text-white border border-border-subtle group-hover:border-border-accent transition-colors"
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


