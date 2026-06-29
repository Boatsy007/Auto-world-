import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles, Sun, Star, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cut and Polish Gold Coast | Auto World Detailing',
  description:
    'Professional cut and polish service in Upper Coomera, Gold Coast. Restore oxidised, faded paint to a rich, glossy finish. Book online today.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/services/cut-and-polish' },
}

const benefits = [
  { icon: Sun, title: 'Oxidation Removal', description: 'Removes the dull, chalky layer of oxidised paint to reveal the fresh, glossy paint beneath.' },
  { icon: Star, title: 'Clarity Restoration', description: 'Returns depth and clarity to paint that has lost its shine through weathering and UV exposure.' },
  { icon: Sparkles, title: 'Gloss Enhancement', description: 'A finishing polish leaves the surface with dramatically improved gloss and reflectivity.' },
  { icon: Zap, title: 'Cost-Effective', description: 'Dramatically improves paint appearance at a fraction of the cost of a full paint correction service.' },
]

const packages = [
  {
    name: 'Basic Cut & Polish',
    price: 'From $249',
    popular: false,
    features: ['Single cutting compound', 'Finishing polish', 'Light oxidation removal', 'Swirl mark reduction', 'Spray sealant finish'],
  },
  {
    name: 'Full Cut & Polish',
    price: 'From $399',
    popular: true,
    features: ['Heavy cut compound', 'Two-stage polish', 'Full oxidation removal', 'Swirl mark removal', 'Premium wax or sealant', 'Wheel clean included'],
  },
  {
    name: 'Restoration Polish',
    price: 'From $599',
    popular: false,
    features: ['Multi-stage cutting', 'Full defect correction', 'Deep scratch treatment', 'Show-car level finish', 'Ceramic sealant', 'Trim restoration'],
  },
]

const faqs = [
  { q: 'What is the difference between cut and polish and paint correction?', a: 'A cut and polish is a single-stage process best suited for moderately defected or oxidised paint. Paint correction involves multiple stages and is used for more heavily defected paint to achieve a near-perfect result. We will assess your paint and recommend the right service.' },
  { q: 'How long does a cut and polish last?', a: 'The results of a cut and polish can be maintained for 6-12 months with proper care. Applying a protective coating such as a sealant or ceramic coating after the service significantly extends the results.' },
  { q: 'Is cut and polish suitable for all cars?', a: 'Yes - cut and polish is suitable for all paint types and colours. It is particularly effective on older vehicles with faded or oxidised paint, and on dark-coloured vehicles where swirl marks are most visible.' },
  { q: 'Can I wax my car after a cut and polish?', a: 'Yes - applying wax or sealant after a cut and polish is highly recommended. It seals the paint, protects the work done, and extends the brilliant finish for months.' },
]

export default function CutAndPolishPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at bottom right, rgba(255,107,0,0.09) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="text-[#8E8E93] text-xs hover:text-white transition-colors">Services</Link>
            <span className="text-[#8E8E93]/40 text-xs">/</span>
            <span className="text-[#FF6B00] text-xs">Cut & Polish</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Cut and Polish Gold Coast</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            CUT AND POLISH
            <br />
            <span className="text-[#FF6B00]">GOLD COAST</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Restore dull, faded, or oxidised paintwork to a rich, glossy finish. Our cut and polish service brings ageing paint back to life at an exceptional standard.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/25">
              Book Cut & Polish <ArrowRight className="w-4 h-4" />
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
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6">FRESH PAINT. EXISTING CAR.</h2>
              <div className="space-y-4 text-[#8E8E93] text-sm leading-relaxed">
                <p>Years of Queensland sun, rain, and road use take a visible toll on your vehicle paint. Oxidation creates a dull, chalky appearance that makes even a well-maintained car look tired and neglected.</p>
                <p>Our cut and polish service uses professional-grade cutting compounds and finishing polishes to remove that oxidised layer and reveal the vibrant, glossy paint beneath. The transformation is often dramatic - customers are regularly amazed at how much better their vehicles look.</p>
                <p>Cut and polish is also an excellent stepping stone before applying ceramic coating or paint protection film, ensuring the surface is clean, clear, and in optimal condition for protection.</p>
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
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">CUT & POLISH PACKAGES</h2>
            <p className="text-[#8E8E93] text-base max-w-xl mx-auto">We tailor the process to your paint condition. All packages include a full wash and decontamination.</p>
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
          <h2 className="font-display text-5xl text-white mb-4">BRING YOUR PAINT BACK TO LIFE.</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Book a cut and polish and see the dramatic difference in your vehicle paint today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
            Book Cut & Polish <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
