import { Navigation } from '@/components/shared/navigation'
import { SnapshotHero } from '@/components/snapshot/snapshot-hero'
import { ValuePillars } from '@/components/value-pillars/value-pillars'
import { ImpactGallery } from '@/components/impact-gallery/impact-gallery'
import { Storyline } from '@/components/storyline/storyline'
import { Playground } from '@/components/playground/playground'
import { ContactSection } from '@/components/contact/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
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
  )
}
