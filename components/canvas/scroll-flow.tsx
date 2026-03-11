'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const sectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

export function ScrollFlow() {
  const { scrollYProgress } = useScroll()
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [sectionPositions, setSectionPositions] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function calcPositions() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const positions = sectionIds.map((id) => {
        const el = document.getElementById(id)
        if (!el) return 0
        return Math.min(el.offsetTop / docHeight, 1)
      })
      setSectionPositions(positions)
    }

    calcPositions()
    window.addEventListener('resize', calcPositions, { passive: true })
    // Recalculate after dynamic content loads
    const timer = setTimeout(calcPositions, 2000)
    return () => {
      window.removeEventListener('resize', calcPositions)
      clearTimeout(timer)
    }
  }, [])

  if (sectionPositions.length === 0) return null

  return (
    <div
      ref={containerRef}
      className="fixed left-8 xl:left-12 top-0 bottom-0 z-[5] hidden lg:block pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="h-full w-4"
        viewBox="0 0 16 1000"
        preserveAspectRatio="none"
      >
        {/* Background track */}
        <line
          x1="8" y1="0" x2="8" y2="1000"
          stroke="var(--color-border-subtle)"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />

        {/* Animated progress line */}
        <motion.line
          x1="8" y1="0" x2="8" y2="1000"
          stroke="var(--color-accent-cyan)"
          strokeWidth="1"
          strokeOpacity="0.4"
          style={{ pathLength }}
        />

        {/* Section node dots */}
        {sectionPositions.map((pos, i) => (
          <circle
            key={sectionIds[i]}
            cx="8"
            cy={pos * 1000}
            r="2.5"
            fill="var(--color-bg-primary)"
            stroke="var(--color-accent-cyan)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        ))}
      </svg>
    </div>
  )
}
