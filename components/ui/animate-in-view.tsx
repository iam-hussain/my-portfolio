'use client'

import { useInView } from 'react-intersection-observer'
import { type ReactNode } from 'react'

interface AnimateInViewProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimateInView({
  children,
  className = '',
  delay = 0,
}: AnimateInViewProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-80px 0px',
  })

  const delayClass = delay > 0 ? `animate-in-view-delay-${Math.min(delay, 5)}` : ''

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${inView ? 'in-view' : ''} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
