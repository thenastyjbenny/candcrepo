import { Hero } from '@/components/home/hero'
import { FeaturedMedia } from '@/components/home/featured-media'
import { ValueProps } from '@/components/home/value-props'
import { SelectedWork } from '@/components/home/selected-work'
import { LeadCapture } from '@/components/home/lead-capture'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMedia />
      <ValueProps />
      <SelectedWork />
      <LeadCapture />
    </>
  )
}