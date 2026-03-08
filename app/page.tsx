import { Navigation } from '@/components/shared/navigation'
import { SnapshotHero } from '@/components/snapshot/snapshot-hero'
import { TechStrip } from '@/components/tech-strip/tech-strip'
import { BelowFoldSections } from '@/components/home/below-fold-sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/50 pointer-events-none" />

      <div className="relative z-10">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[110] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent-cyan)] focus:text-white focus:font-semibold focus:outline-none"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">
          <SnapshotHero />
          <TechStrip />
          <BelowFoldSections />
        </main>
      </div>
    </div>
  )
}
