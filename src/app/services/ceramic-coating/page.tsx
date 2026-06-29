import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Shield, Droplets, Sun, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ceramic Coating Gold Coast | Auto World Detailing',
  description:
    'Professional ceramic coating services in Upper Coomera, Gold Coast. Nano-ceramic paint protection with 1, 3 & 5-year warranty options. Hydrophobic, UV-resistant, and gloss-enhancing.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/services/ceramic-coating' },
}

const benefits = [
  { icon: Droplets, title: 'Hydrophobic Repellency', description: 'Water beads and sheets off instantly, taking dirt and contaminants with it.' },
  { icon: Sun, title: 'UV & Oxidation Protection', description: 'Shields paint from harmful UV rays that cause fading and oxidation over time.' },
  { icon: Shield, title: 'Chemical Resistance', description: 'Resists bird droppings, tree sap, acid rain, and harsh cleaning chemicals.' },
  { icon: Sparkles, title: 'Enhanced Gloss', description: 'Deepens colour and adds a candy-like, mirror gloss finish that turns heads.' },
]

const packages = [
  {
    name: 'Essential Coat',
    warranty: '1 Year',
    price: '$799',
    features: ['Single-layer ceramic application', 'Pre-application decontamination', 'Spray sealant top coat', '1-year warranty'],
  },
  {
    name: 'Pro Coat',
    warranty: '3 Years',
    price: '$1,299',
    popular: true,
    features: ['Multi-layer ceramic application', 'Light paint correction', 'Wheel ceramic coating', 'Glass coating', '3-year warranty'],
  },
  {
    name: 'Elite Coat',
    warranty: '5 Years',
    price: '$1,999',
    features: ['Full paint correction', 'Premium ceramic layers', 'Full glass treatment', 'Wheel & caliper coating', 'Interior coating', '5-year warranty'],
  },
]

const faqs = [
  { q: 'How long does ceramic coating last?', a: 'Depending on the package chosen, our ceramic coatings are backed by 1, 3, or 5-year warranties. With proper maintenance, many coatings last significantly longer than the warranty period.' },
  { q: 'Can ceramic coating be applied to any colour?', a: 'Yes — ceramic coating works on all paint colours and dramatically enhances both dark and light finishes. It\'s particularly striking on deep blacks, navy blues, and metallic silvers.' },
  { q: 'How do I maintain a ceramic coated vehicle?', a: 'Use a pH-neutral shampoo, rinse-aid in your final wash rinse, and a ceramic spray topper every 3–6 months. Avoid automatic car washes with brushes.' },
]

export default function CeramicCoatingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[700px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at bottom left, rgba(255,107,0,0.1) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="text-[#8E8E93] text-xs hover:text-white transition-colors">Services</Link>
            <span className="text-[#8E8E93]/40 text-xs">/</span>
            <span className="text-[#FF6B00] text-xs">Ceramic Coating</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Gold Coast Ceramic Coating</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            CERAMIC COATING
            <br />
            <span className="text-[#FF6B00]">GOLD COAST</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            The gold standard of paint protection. Our professional-grade ceramic coatings create a permanent bond
            with your paintwork — delivering years of hydrophobic protection, UV resistance, and show-car gloss.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/25">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:0468336447"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-7 py-4 rounded-full hover:border-white/40 transition-all">
              Call 0468 336 447
            </a>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="accent-line" />
                <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">What is Ceramic Coating?</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6">THE SCIENCE OF PROTECTION.</h2>
              <div className="space-y-4 text-[#8E8E93] text-sm leading-relaxed">
                <p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle&apos;s factory paint, forming a permanent, transparent protective layer. Unlike traditional wax or sealants that sit on top of the paint and wear away, ceramic coating becomes part of your car&apos;s surface.</p>
                <p>The result is a self-cleaning, hydrophobic surface that repels water, dirt, and contaminants while dramatically enhancing gloss depth and colour clarity.</p>
                <p>All our ceramic coating applications are performed in our controlled studio environment in Upper Coomera, ensuring perfect bonding conditions and a flawless result every time.</p>
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

      {/* Packages */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="accent-line" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">CERAMIC COATING PACKAGES</h2>
            <p className="text-[#8E8E93] text-base max-w-xl mx-auto">Choose the level of protection that suits your vehicle and lifestyle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`flex flex-col rounded-2xl p-8 border ${pkg.popular ? 'border-[#FF6B00] bg-[#1C1C1E] shadow-xl shadow-[#FF6B00]/10 scale-[1.02] relative' : 'border-white/8 bg-[#1C1C1E]'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-white mb-1">{pkg.name}</h3>
                  <span className="text-xs text-[#8E8E93] bg-white/5 px-3 py-1 rounded-full">{pkg.warranty} Warranty</span>
                </div>
                <div className="font-display text-4xl text-white mb-8">{pkg.price}</div>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-[#FF6B00]' : 'text-[#8E8E93]'}`} strokeWidth={2.5} />
                      <span className="text-[#8E8E93] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full text-center py-3.5 rounded-full text-sm font-semibold transition-all ${pkg.popular ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 shadow-lg shadow-[#FF6B00]/20' : 'border border-white/20 text-white hover:border-white/40'}`}>
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Related Services */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container-custom">
          <h2 className="font-display text-3xl text-white mb-8">RELATED SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Paint Protection Film', href: '/services/paint-protection-film', desc: 'Physical barrier against chips and scratches.' },
              { name: 'Paint Correction', href: '/services/paint-correction', desc: 'Remove defects before ceramic application.' },
              { name: 'Exterior Detailing', href: '/services/exterior-detailing', desc: 'Complete exterior preparation and protection.' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group flex items-center justify-between border border-white/8 rounded-xl p-5 hover:border-[#FF6B00]/30 transition-colors">
                <div>
                  <p className="text-white font-medium text-sm group-hover:text-[#FF6B00] transition-colors">{s.name}</p>
                  <p className="text-[#8E8E93] text-xs mt-1">{s.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1C1C1E]">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-4">READY TO COAT YOUR VEHICLE?</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Book a consultation and we&apos;ll recommend the right ceramic package for your vehicle.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
