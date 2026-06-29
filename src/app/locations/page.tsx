import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Detailing Locations | Auto World Detailing Gold Coast',
  description:
    'Auto World Detailing is based in Upper Coomera, Gold Coast. We service Upper Coomera, Coomera, Helensvale, Hope Island, Oxenford, Pimpama and surrounding areas.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/locations' },
}

const locations = [
  { name: 'Gold Coast', sub: 'Full service area overview', href: '/locations/gold-coast' },
  { name: 'Upper Coomera', sub: 'Our home base - Northern Gold Coast', href: '/locations/upper-coomera' },
  { name: 'Helensvale', sub: 'Servicing Helensvale & surrounding areas', href: '/locations/gold-coast' },
  { name: 'Hope Island', sub: 'Premium detailing for Hope Island residents', href: '/locations/gold-coast' },
  { name: 'Coomera', sub: 'Full detailing services in Coomera', href: '/locations/gold-coast' },
  { name: 'Oxenford', sub: 'Professional car detailing in Oxenford', href: '/locations/gold-coast' },
]

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Service Areas</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-4">
            WHERE WE
            <br />
            <span className="text-[#FF6B00]">SERVICE.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Based in Upper Coomera, we service vehicles across the entire Northern Gold Coast region.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <Link key={location.name} href={location.href}
                className="group flex items-start gap-4 bg-[#1C1C1E] border border-white/5 rounded-2xl p-6 hover:border-[#FF6B00]/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF6B00]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl text-white mb-1 group-hover:text-[#FF6B00] transition-colors">{location.name}</h2>
                  <p className="text-[#8E8E93] text-sm">{location.sub}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
