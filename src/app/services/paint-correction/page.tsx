import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Search, Layers, Zap, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paint Correction Gold Coast | Auto World Detailing',
  description:
    'Professional paint correction services in Upper Coomera, Gold Coast. Remove swirl marks, scratches, oxidation, and water spots with our machine polishing service.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/services/paint-correction' },
}

const benefits = [
  { icon: Search, title: 'Swirl Mark Removal', description: 'Eliminate the fine circular scratches caused by incorrect washing and drying techniques.' },
  { icon: Layers, title: 'Scratch Removal', description: 'Remove light to moderate paint scratches, leaving a flawless clear coat behind.' },
  { icon: Zap, title: 'Oxidation Removal', description: 'Restore faded, chalky paintwork to its original depth and richness of colour.' },
  { icon: Star, title: 'Mirror Gloss Finish', description: 'The corrected paint reflects light uniformly, producing a stunning mirror-like finish.' },
]

const packages = [
  { name: 'Enhancement Polish', price: 'From $299', popular: false, features: ['Single-stage polish', 'Removes light swirls', 'Enhances gloss', 'Paint protection sealant', 'Suitable for lightly defected paint'] },
  { name: 'Paint Correction', price: 'From $499', popular: true, features: ['Multi-stage correction', 'Removes moderate defects', 'Swirls & light scratches', 'Pre-ceramic coating prep', 'Suitable for most vehicles'] },
  { name: 'Full Correction', price: 'From $899', popular: false, features: ['Compounding & polishing', 'Heavy defect removal', 'Deep scratch treatment', 'Show-car finish', 'Ideal for neglected paint'] },
]

const faqs = [
  { q: 'What defects can paint correction fix?', a: 'Paint correction can remove swirl marks, light to moderate scratches, water spot etching, oxidation, and bird dropping stains. Deep scratches that penetrate through the clear coat to the base coat require touch-up paint rather than polishing.' },
  { q: 'Will paint correction thin my clear coat?', a: 'Any polishing removes a small amount of clear coat material. We use paint depth gauges throughout the process to ensure we never remove more than necessary, and we will always advise you if your vehicle has insufficient clear coat for correction.' },
  { q: 'Should I apply ceramic coating after paint correction?', a: 'Absolutely — paint correction and ceramic coating are the perfect combination. Correction brings the paint to its best possible condition, and ceramic coating then locks in that perfection for years.' },
]

export default function PaintCorrectionPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at top right, rgba(255,107,0,0.07) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="text-[#8E8E93] text-xs hover:text-white transition-colors">Services</Link>
            <span className="text-[#8E8E93]/40 text-xs">/</span>
            <span className="text-[#FF6B00] text-xs">Paint Correction</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Paint Correction Gold Coast</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            PAINT CORRECTION
            <br />
            <span className="text-[#FF6B00]">GOLD COAST</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Turn back the clock on your paintwork. Our multi-stage machine polishing process removes swirl marks, scratches, and oxidation to reveal a deeper, cleaner, show-car finish.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/25">
              Book Paint Correction <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:0468336447" className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-7 py-4 rounded-full hover:border-white/40 transition-all">
              Call 0468 336 447
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="accent-line" />
                <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">The Process</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6">DEFECTS OUT. PERFECTION IN.</h2>
              <div className="space-y-4 text-[#8E8E93] text-sm leading-relaxed">
                <p>Paint correction is the art and science of restoring automotive paintwork through machine polishing. Using professional dual-action and rotary polishers, we work through a sequence of compounds and polishes to progressively remove paint defects.</p>
                <p>The result is a surface where light reflects uniformly rather than scattering off swirls and scratches — producing the deep, glassy finish that makes a car truly stand out.</p>
                <p>Every paint correction job begins with a thorough inspection under specialist lighting, and paint depth measurements to plan the safest, most effective correction approach.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="bg-[#0A0A0A] rounded-xl p-5 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#FF6B00]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">{benefit.title}</h3>
                    <p className="text-[#8E8E93] text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">CORRECTION PACKAGES</h2>
            <p className="text-[#8E8E93] text-base max-w-xl mx-auto">We assess every vehicle individually — pricing reflects paint condition and vehicle size.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`flex flex-col rounded-2xl p-8 border ${pkg.popular ? 'border-[#FF6B00] bg-[#1C1C1E] shadow-xl shadow-[#FF6B00]/10 scale-[1.02] relative' : 'border-white/8 bg-[#1C1C1E]'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</div>
                )}
                <h3 className="font-display text-2xl text-white mb-3">{pkg.name}</h3>
                <div className="font-display text-3xl text-white mb-8">{pkg.price}</div>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-[#FF6B00]' : 'text-[#8E8E93]'}`} strokeWidth={2.5} />
                      <span className="text-[#8E8E93] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full text-center py-3.5 rounded-full text-sm font-semibold transition-all ${pkg.popular ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90' : 'border border-white/20 text-white hover:border-white/40'}`}>
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10 text-center">COMMON QUESTIONS</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-white/8 rounded-xl p-6">
                <h3 className="text-white font-semibold text-sm mb-3">{faq.q}</h3>
                <p className="text-[#8E8E93] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-4">BRING BACK THE BRILLIANCE.</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Book a paint correction assessment and we&apos;ll tell you exactly what&apos;s achievable.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
            Book an Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
