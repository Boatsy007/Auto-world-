import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { ServicesSection } from '@/components/home/ServicesSection'
import { TransformationsSection } from '@/components/home/TransformationsSection'
import { WhySection } from '@/components/home/WhySection'
import { NumbersSection } from '@/components/home/NumbersSection'
import { ReviewsSection } from '@/components/home/ReviewsSection'
import { PackagesSection } from '@/components/home/PackagesSection'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { ProcessSection } from '@/components/home/ProcessSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <TransformationsSection />
      <WhySection />
      <NumbersSection />
      <ReviewsSection />
      <PackagesSection />
      <GalleryPreview />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
