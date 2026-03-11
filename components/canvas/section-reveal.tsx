'use client'

import { useInView } from 'react-intersection-observer'
import { type ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-60px 0px',
  })

  return (
    <div
      ref={ref}
      className={`section-reveal ${inView ? 'revealed' : ''} ${className}`.trim()}
      style={delay > 0 ? { transitionDelay: `${delay * 0.1}s` } : undefined}
    >
      {children}
    </div>
  )
}
