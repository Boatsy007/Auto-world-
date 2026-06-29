import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Detailing Upper Coomera | Auto World Detailing',
  description:
    'Auto World Detailing is Upper Coomera\'s premier car detailing studio. Ceramic coating, PPF, paint correction, and full detailing services. Book today.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/locations/upper-coomera' },
}

export default function UpperCoomeraPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Upper Coomera</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            UPPER COOMERA&apos;S
            <br />
            <span className="text-[#FF6B00]">DETAILING STUDIO.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Auto World Detailing is proudly based in Upper Coomera, QLD 4209 — bringing professional-grade car detailing to your local community and across all of Northern Gold Coast.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">YOUR LOCAL DETAILING EXPERTS.</h2>
          <div className="space-y-4 text-[#8E8E93] text-sm leading-relaxed">
            <p>Upper Coomera is home to some of the Gold Coast&apos;s most passionate car owners — and Auto World Detailing is their detailing studio of choice. From the brand-new daily driver to the weekend sports car, we treat every vehicle that comes through our doors with the same obsessive level of care.</p>
            <p>Our purpose-built studio in Upper Coomera provides the controlled environment, specialist lighting, and professional-grade equipment needed to achieve consistently exceptional results. When you bring your vehicle to us, you&apos;re in a different league to a drive-through car wash.</p>
            <p>Book your service today and experience the Auto World Detailing standard for yourself.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-4">BOOK YOUR DETAIL.</h2>
          <p className="text-[#8E8E93] mb-8">Upper Coomera, QLD 4209 · Mon–Fri 8am–5pm · Sat 8am–2pm</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:0468336447" className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-8 py-4 rounded-full hover:border-white/40 transition-all">
              Call 0468 336 447
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
