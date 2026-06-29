import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Detailing Gold Coast | Auto World Detailing',
  description:
    'Premium car detailing on the Gold Coast. Auto World Detailing is based in Upper Coomera and services all of Northern Gold Coast. Book online today.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/locations/gold-coast' },
}

export default function GoldCoastPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Gold Coast</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            CAR DETAILING
            <br />
            <span className="text-[#FF6B00]">GOLD COAST</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Gold Coast&apos;s premier automotive detailing studio. We&apos;re based in Upper Coomera and service the entire Northern Gold Coast region — delivering premium detailing, ceramic coatings, and paint protection to vehicle owners across the coast.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">GOLD COAST&apos;S MOST TRUSTED DETAILER.</h2>
              <div className="space-y-4 text-[#8E8E93] text-sm leading-relaxed">
                <p>Auto World Detailing has been serving Gold Coast vehicle owners from our Upper Coomera studio. We&apos;ve built a reputation as the Gold Coast&apos;s go-to detailing studio for ceramic coatings, PPF, paint correction, and full detail services.</p>
                <p>Whether you&apos;re from Helensvale, Hope Island, Oxenford, Coomera, or anywhere in the Northern Gold Coast, we&apos;re conveniently located and ready to transform your vehicle.</p>
                <p>Our 5.0-star Google rating and 50+ verified reviews speak for themselves. We don&apos;t just clean cars — we elevate them.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Upper Coomera', 'Coomera', 'Helensvale', 'Hope Island', 'Oxenford', 'Pimpama', 'Ormeau', 'Yatala'].map((area) => (
                <div key={area} className="flex items-center gap-3 bg-[#0A0A0A] rounded-xl p-4 border border-white/5">
                  <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-4">BOOK YOUR GOLD COAST DETAIL.</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Get in touch and book your vehicle in for a service at our Upper Coomera studio.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-8 py-4 rounded-full hover:border-white/40 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
