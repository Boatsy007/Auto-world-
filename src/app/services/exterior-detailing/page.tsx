import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Droplets, Shield, Sparkles, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Exterior Detailing Gold Coast | Auto World Detailing',
  description:
    'Professional exterior car detailing in Upper Coomera, Gold Coast. Full wash, clay bar decontamination, machine polish, and paint sealant. Book online.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/services/exterior-detailing' },
}

const benefits = [
  { icon: Droplets, title: 'Full Decontamination', description: 'Iron fallout, tar, and bonded contamination removed with chemical and mechanical processes.' },
  { icon: Sparkles, title: 'Machine Polish', description: 'Light machine polish enhances gloss and removes minor surface haze for a brilliant finish.' },
  { icon: Shield, title: 'Paint Protection', description: 'Premium wax or synthetic sealant applied to protect the paint and extend the detail result.' },
  { icon: Zap, title: 'Wheel & Tyre', description: 'Wheels cleaned inside and out, brakes blown out, tyres dressed to a perfect satin finish.' },
]

const packages = [
  {
    name: 'Wash & Wax',
    price: 'From $149',
    popular: false,
    features: ['Two-bucket hand wash', 'Wheel clean', 'Window clean', 'Tyre dressing', 'Spray wax finish'],
  },
  {
    name: 'Exterior Detail',
    price: 'From $249',
    popular: true,
    features: ['Full decontamination wash', 'Iron fallout removal', 'Clay bar treatment', 'Light machine polish', 'Paint sealant', 'Engine bay dressing'],
  },
  {
    name: 'Premium Exterior',
    price: 'From $399',
    popular: false,
    features: ['Everything in Exterior Detail', 'Single-stage paint correction', 'Premium carnauba wax', 'Glass coating', 'Trim restoration', 'Wheel sealant'],
  },
]

const faqs = [
  { q: 'What is clay bar treatment?', a: 'Clay bar treatment removes bonded contamination from the paint surface that washing alone cannot remove — things like industrial fallout, brake dust, and overspray. The result is a perfectly smooth surface, ready for polishing and protection.' },
  { q: 'How often should I get an exterior detail?', a: 'Most vehicles benefit from a professional exterior detail every 6-12 months. With ceramic coating applied, you can often extend this to once a year as the coating repels contamination.' },
  { q: 'What is the difference between wax and sealant?', a: 'Carnauba wax is a natural product that provides a warm, deep gloss with around 3 months of protection. Synthetic paint sealant provides 6-12 months of protection with a cleaner, sharper look. Both have their merits - we will advise which suits your vehicle.' },
]

export default function ExteriorDetailingPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at top left, rgba(255,107,0,0.08) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="text-[#8E8E93] text-xs hover:text-white transition-colors">Services</Link>
            <span className="text-[#8E8E93]/40 text-xs">/</span>
            <span className="text-[#FF6B00] text-xs">Exterior Detailing</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Exterior Detailing Gold Coast</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            EXTERIOR DETAILING
            <br />
            <span className="text-[#FF6B00]">GOLD COAST</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            A thorough exterior treatment that goes far beyond a standard wash. Decontamination, clay bar, machine polish, and premium protection.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/25">
              Book Exterior Detail <ArrowRight className="w-4 h-4" />
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
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6">EVERY PANEL. EVERY SURFACE.</h2>
              <div className="space-y-4 text-[#8E8E93] text-sm leading-relaxed">
                <p>A professional exterior detail is far more than a car wash. We start with a pre-wash to lift heavy soiling, follow with a two-bucket hand wash using pH-neutral shampoo, then move into chemical and mechanical decontamination to remove bonded contamination.</p>
                <p>Clay bar treatment follows to achieve a perfectly smooth surface, before machine polish enhances the paint clarity and gloss. The treatment is finished with a premium wax or synthetic sealant to protect all the work done.</p>
                <p>Wheels, wheel arches, glass, and trim all receive individual attention — the result is a vehicle that shines from every angle.</p>
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
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">EXTERIOR PACKAGES</h2>
            <p className="text-[#8E8E93] text-base max-w-xl mx-auto">Choose the right level of exterior treatment for your vehicle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`flex flex-col rounded-2xl p-8 border relative ${pkg.popular ? 'border-[#FF6B00] bg-[#1C1C1E] shadow-xl shadow-[#FF6B00]/10 scale-[1.02]' : 'border-white/8 bg-[#1C1C1E]'}`}>
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
          <h2 className="font-display text-5xl text-white mb-4">MAKE IT SHINE AGAIN.</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Book an exterior detail and experience the difference a professional treatment makes.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
            Book Exterior Detail <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
