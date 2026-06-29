'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const reviews = [
  {
    name: 'James R.',
    rating: 5,
    text: "Honestly the best detailing I've experienced on the Gold Coast. Had my BMW M4 done with a full ceramic coating — the finish is absolutely flawless. These guys are obsessive about perfection and it shows.",
    date: '2 weeks ago',
  },
  {
    name: 'Sarah T.',
    rating: 5,
    text: "Booked in for a full interior detail on my SUV. The results were stunning — you'd think it just rolled off the showroom floor. Incredibly professional and the attention to detail is unmatched.",
    date: '1 month ago',
  },
  {
    name: 'Michael C.',
    rating: 5,
    text: 'Paint correction plus ceramic on my Porsche 911. The team took their time, communicated every step of the process and the result exceeded my expectations. Worth every dollar.',
    date: '3 weeks ago',
  },
  {
    name: 'Emma L.',
    rating: 5,
    text: "I've tried three other detailing shops before finding Auto World. There is simply no comparison. My car looks better than the day I bought it. This is my go-to from now on.",
    date: '2 months ago',
  },
  {
    name: 'Tom B.',
    rating: 5,
    text: 'Had PPF installed on the full front end of my new Mercedes. Meticulous work, perfect alignment, zero bubbles. You can tell these guys genuinely love what they do.',
    date: '1 week ago',
  },
  {
    name: 'Lisa M.',
    rating: 5,
    text: 'Brought in my daily driver for a maintenance detail and was blown away by the result. Reasonably priced for the quality delivered. Highly recommend to anyone who takes pride in their vehicle.',
    date: '6 weeks ago',
  },
]

export function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="What Our Clients Say"
            headline="GOLD COAST'S MOST TRUSTED DETAILER."
            subtext="Don't take our word for it — hear it from the Gold Coast car community."
          />
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#FF6B00]/50 hover:text-[#FF6B00] transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#FF6B00]/50 hover:text-[#FF6B00] transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Overall rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-[#FF6B00] fill-[#FF6B00]" />
            ))}
          </div>
          <span className="text-white font-semibold">5.0</span>
          <span className="text-[#8E8E93] text-sm">·</span>
          <span className="text-[#8E8E93] text-sm">54 Google reviews</span>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)] min-w-0"
              >
                <div className="flex flex-col h-full bg-[#1C1C1E] border border-white/5 rounded-2xl p-7 hover:border-[#FF6B00]/15 transition-colors duration-300">
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]"
                      />
                    ))}
                  </div>
                  <blockquote className="text-[#FAFAFA]/80 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {review.name}
                      </p>
                      <p className="text-[#8E8E93] text-xs mt-0.5">
                        Gold Coast, QLD
                      </p>
                    </div>
                    <p className="text-[#8E8E93]/60 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Auto+World+Detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8E8E93] hover:text-white text-sm transition-colors"
          >
            View All 54 Reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
