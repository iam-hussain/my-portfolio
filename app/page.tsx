import { Navigation } from '@/components/shared/navigation'
import { SnapshotHero } from '@/components/snapshot/snapshot-hero'
import { ValuePillars } from '@/components/value-pillars/value-pillars'
import { ImpactGallery } from '@/components/impact-gallery/impact-gallery'
import { Storyline } from '@/components/storyline/storyline'
import { Playground } from '@/components/playground/playground'
import { ContactSection } from '@/components/contact/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Illustration - Full Width/Cover */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg-light.svg')] dark:bg-[url('/hero-bg-dark.svg')]"
      />
      
      {/* Global Gradient Overlay - Theme-aware */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/40 via-background/20 to-transparent dark:from-background/90 dark:via-background/50 dark:to-transparent" />
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <SnapshotHero />
          <ValuePillars />
          <ImpactGallery />
          <Storyline />
          <Playground />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
