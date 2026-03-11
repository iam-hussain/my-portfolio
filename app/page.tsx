import { Navigation } from '@/components/shared/navigation'
import { CanvasBackground } from '@/components/canvas/canvas-background'
import { ConstellationHero } from '@/components/canvas/constellation-hero'
import { OrbitNav } from '@/components/canvas/orbit-nav'
import { ScrollFlow } from '@/components/canvas/scroll-flow'
import { BelowFoldSections } from '@/components/home/below-fold-sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <CanvasBackground />

      <div className="relative z-10 w-full max-w-[100vw] overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[110] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-cyan focus:text-white focus:font-semibold focus:outline-none"
        >
          Skip to content
        </a>
        <Navigation />
        <OrbitNav />
        <ScrollFlow />
        <main id="main-content">
          <ConstellationHero />
          <BelowFoldSections />
        </main>
      </div>
    </div>
  )
}
