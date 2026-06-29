import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Packages & Pricing | Auto World Detailing Gold Coast',
  description:
    'Transparent pricing for all Auto World Detailing services. Express Detail from $149, Full Detail from $299, ceramic coating from $799. Gold Coast car detailing.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/packages' },
}

const mainPackages = [
  {
    name: 'Express Detail',
    price: '$149',
    duration: '2-3 hrs',
    popular: false,
    description: 'Perfect maintenance service for keeping your vehicle looking its best between full details.',
    includes: ['Hand wash & rinse', 'Wheel & tyre clean', 'Interior vacuum', 'Dash & console wipe', 'Window clean inside & out', 'Tyre dressing', 'Air freshener'],
  },
  {
    name: 'Full Detail',
    price: '$299',
    duration: '5-7 hrs',
    popular: true,
    description: 'Our most popular service. A complete inside-and-out transformation for any vehicle.',
    includes: ['Everything in Express', 'Clay bar decontamination', 'Machine polish', 'Paint sealant', 'Full interior deep clean', 'Leather conditioning', 'Carpet shampoo', 'Engine bay clean'],
  },
  {
    name: 'Ultimate Detail',
    price: 'From $599',
    duration: 'Full day',
    popular: false,
    description: 'For the enthusiast who demands the very best. Paint correction and ceramic protection included.',
    includes: ['Everything in Full Detail', 'Two-stage paint correction', 'Ceramic coating application', 'Ozone odour treatment', 'Headlight restoration', 'Trim restoration', '12-month warranty'],
  },
]

const protectionPackages = [
  { name: 'Ceramic Coating - 1yr', price: '$799', href: '/services/ceramic-coating' },
  { name: 'Ceramic Coating - 3yr', price: '$1,299', href: '/services/ceramic-coating' },
  { name: 'Ceramic Coating - 5yr', price: '$1,999', href: '/services/ceramic-coating' },
  { name: 'PPF - Full Front', price: 'From $1,200', href: '/services/paint-protection-film' },
  { name: 'PPF - 3/4 Coverage', price: 'From $2,200', href: '/services/paint-protection-film' },
  { name: 'PPF - Full Body', price: 'From $3,500', href: '/services/paint-protection-film' },
]

const correctionPackages = [
  { name: 'Enhancement Polish', price: 'From $299', href: '/services/paint-correction' },
  { name: 'Two-Stage Correction', price: 'From $499', href: '/services/paint-correction' },
  { name: 'Full Correction', price: 'From $899', href: '/services/paint-correction' },
  { name: 'Basic Cut & Polish', price: 'From $249', href: '/services/cut-and-polish' },
  { name: 'Full Cut & Polish', price: 'From $399', href: '/services/cut-and-polish' },
]

export default function PackagesPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Pricing</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-4">
            PACKAGES &amp;
            <br />
            <span className="text-[#FF6B00]">PRICING.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Transparent, honest pricing. No hidden fees, no surprises. Prices vary by vehicle size and condition.
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-white mb-8">DETAILING PACKAGES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {mainPackages.map((pkg) => (
              <div key={pkg.name} className={`flex flex-col rounded-2xl p-8 border relative ${pkg.popular ? 'border-[#FF6B00] bg-[#1C1C1E] shadow-xl shadow-[#FF6B00]/10 scale-[1.01]' : 'border-white/8 bg-[#1C1C1E]'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</div>
                )}
                <h3 className="font-display text-2xl text-white mb-1">{pkg.name}</h3>
                <p className="text-[#8E8E93] text-xs mb-4">{pkg.duration}</p>
                <div className="font-display text-4xl text-white mb-4">{pkg.price}<span className="text-lg text-[#8E8E93] ml-1">from</span></div>
                <p className="text-[#8E8E93] text-sm leading-relaxed mb-6">{pkg.description}</p>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-[#FF6B00]' : 'text-[#8E8E93]'}`} strokeWidth={2.5} />
                      <span className="text-[#8E8E93] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full text-center py-3.5 rounded-full text-sm font-semibold transition-all ${pkg.popular ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90' : 'border border-white/20 text-white hover:border-white/40'}`}>
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Pricing */}
      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl text-white mb-6">PROTECTION SERVICES</h2>
              <div className="space-y-3">
                {protectionPackages.map((pkg) => (
                  <Link key={pkg.name} href={pkg.href} className="flex items-center justify-between bg-[#0A0A0A] rounded-xl px-5 py-4 border border-white/5 hover:border-[#FF6B00]/20 transition-colors group">
                    <span className="text-white text-sm group-hover:text-[#FF6B00] transition-colors">{pkg.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FF6B00] font-semibold text-sm">{pkg.price}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8E8E93] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-white mb-6">CORRECTION SERVICES</h2>
              <div className="space-y-3">
                {correctionPackages.map((pkg) => (
                  <Link key={pkg.name} href={pkg.href} className="flex items-center justify-between bg-[#0A0A0A] rounded-xl px-5 py-4 border border-white/5 hover:border-[#FF6B00]/20 transition-colors group">
                    <span className="text-white text-sm group-hover:text-[#FF6B00] transition-colors">{pkg.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FF6B00] font-semibold text-sm">{pkg.price}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8E8E93] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#8E8E93]/50 text-xs mt-8 text-center">All prices are indicative. Final pricing depends on vehicle size, type, and condition. Contact us for an exact quote.</p>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-4">CUSTOM PACKAGE NEEDED?</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">We can build a tailored detailing and protection package for any vehicle and budget.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
            Get a Custom Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
