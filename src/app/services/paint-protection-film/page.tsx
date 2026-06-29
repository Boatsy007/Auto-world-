import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Shield, Zap, RefreshCcw, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paint Protection Film Gold Coast | Auto World Detailing',
  description:
    'Professional PPF installation in Upper Coomera, Gold Coast. Self-healing paint protection film guards against stone chips, scratches, and road debris. Get a quote today.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/services/paint-protection-film' },
}

const benefits = [
  { icon: Shield, title: 'Stone Chip Protection', description: 'Absorbs the impact of stones and road debris that would otherwise chip your paint.' },
  { icon: RefreshCcw, title: 'Self-Healing Technology', description: 'Light scratches and swirl marks disappear with heat — from sunlight or warm water.' },
  { icon: Eye, title: 'Optically Clear', description: 'Premium PPF is virtually invisible, preserving your vehicle\'s original appearance.' },
  { icon: Zap, title: 'Impact Resistance', description: 'Urethane construction absorbs energy and protects against physical damage.' },
]

const packages = [
  {
    name: 'Front Essentials',
    price: 'From $1,200',
    features: ['Full bonnet', 'Front bumper', 'Side mirrors', 'Headlights'],
  },
  {
    name: 'Full Front',
    price: 'From $2,200',
    popular: true,
    features: ['Full bonnet', 'Front bumper', 'Front guards', 'A-pillars', 'Side mirrors', 'Headlights'],
  },
  {
    name: 'Full Vehicle',
    price: 'POA',
    features: ['All exterior panels', 'Full bonnet & roof', 'All doors', 'Rear bumper', 'Boot lid', 'Complete protection'],
  },
]

const faqs = [
  { q: 'How long does PPF last?', a: 'Quality paint protection film typically lasts 7–10 years with proper care. It will not yellow, crack, or peel under normal conditions, and comes with a manufacturer warranty.' },
  { q: 'Can PPF be removed?', a: 'Yes — professional-grade PPF can be removed cleanly without damaging the underlying paint, as long as it is removed by a trained installer.' },
  { q: 'Can I apply ceramic coating over PPF?', a: 'Absolutely. In fact, we recommend it. Applying ceramic coating over PPF adds hydrophobic properties and makes the film significantly easier to clean and maintain.' },
]

export default function PaintProtectionFilmPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at bottom right, rgba(255,107,0,0.08) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="text-[#8E8E93] text-xs hover:text-white transition-colors">Services</Link>
            <span className="text-[#8E8E93]/40 text-xs">/</span>
            <span className="text-[#FF6B00] text-xs">Paint Protection Film</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">PPF Gold Coast</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            PAINT PROTECTION
            <br />
            <span className="text-[#FF6B00]">FILM GOLD COAST</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            The ultimate physical barrier for your paintwork. Self-healing urethane film protects your vehicle from stone chips, scratches, and road debris — invisibly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/25">
              Get a Quote <ArrowRight className="w-4 h-4" />
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
                <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">What is PPF?</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6">INVISIBLE ARMOUR FOR YOUR PAINT.</h2>
              <div className="space-y-4 text-[#8E8E93] text-sm leading-relaxed">
                <p>Paint Protection Film is a high-performance thermoplastic urethane film applied to the exterior of your vehicle. It acts as a physical barrier, absorbing impacts from stones, road debris, and minor abrasions that would otherwise damage your paintwork.</p>
                <p>Modern PPF features self-healing technology — when exposed to heat (sunlight or warm water), the film&apos;s surface recovers from light scratches and swirl marks automatically.</p>
                <p>Our installers are trained to achieve precise, bubble-free application with seamless panel coverage. Every film is cut using precision templates to ensure a factory-perfect fit.</p>
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
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">PPF PACKAGES</h2>
            <p className="text-[#8E8E93] text-base max-w-xl mx-auto">Choose your level of coverage. All packages use premium self-healing film.</p>
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
                  Get a Quote
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
          <h2 className="font-display text-5xl text-white mb-4">PROTECT YOUR INVESTMENT TODAY.</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Get a tailored PPF quote for your vehicle. We&apos;ll cover exactly what you need, nothing more.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
