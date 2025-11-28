'use client'

import { ImpactMetric } from '@/lib/types'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

interface ImpactTileProps {
  metric: ImpactMetric
  index: number
}

export function ImpactTile({ metric, index }: ImpactTileProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full border-border-subtle bg-bg-card/50 backdrop-blur-sm hover:border-border-accent hover:glow-effect-hover transition-all cursor-pointer group overflow-hidden relative">
        <div className={`absolute inset-0 gradient-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        <CardContent className="p-5 sm:p-6 md:p-8 relative z-10">
          <div className="mb-3 sm:mb-4">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gradient-purple to-gradient-blue bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {metric.value}
            </motion.div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-text-primary mb-2">
            {metric.label}
          </h3>
          <p className="text-sm sm:text-base text-text-secondary mb-3 leading-relaxed">
            {metric.description}
          </p>
          {metric.context && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? 'auto' : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-sm text-text-muted overflow-hidden"
            >
              {metric.context}
            </motion.p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}


