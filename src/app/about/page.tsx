import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Auto World Detailing | Gold Coast Car Detailing Studio',
  description:
    'Learn about Auto World Detailing — Gold Coast\'s premier automotive detailing studio based in Upper Coomera. Our story, our values, and our obsession with perfection.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/about' },
}

const values = [
  { icon: Zap, title: 'Obsessive Precision', description: 'We don\'t move on until it\'s perfect. Every panel, every surface, every detail receives the same relentless focus.' },
  { icon: Shield, title: 'Premium Products Only', description: 'We use globally recognised professional-grade coatings, films, and chemicals — products that actually deliver what they promise.' },
  { icon: Award, title: 'Certified & Trained', description: 'Our technicians are trained and certified in the latest correction, coating, and protection techniques.' },
  { icon: CheckCircle, title: 'Guaranteed Satisfaction', description: 'If you\'re not completely satisfied, we\'ll make it right. Simple as that.' },
]

const stats = [
  { value: '500+', label: 'Vehicles Detailed' },
  { value: '54', label: 'Five-Star Reviews' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[700px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at bottom left, rgba(255,107,0,0.09) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">About Us</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            CRAFTED WITH
            <br />
            <span className="text-[#FF6B00]">OBSESSION.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Auto World Detailing was built on a single conviction: every vehicle deserves to be treated with the same obsessive attention to detail. We&apos;re not just a car wash — we&apos;re a detailing studio.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="accent-line" />
                <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Our Story</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-8">BUILT IN UPPER COOMERA. TRUSTED ACROSS THE GOLD COAST.</h2>
              <div className="space-y-5 text-[#8E8E93] text-sm leading-relaxed">
                <p>Auto World Detailing was founded in Upper Coomera with one goal: to bring genuine professional-grade detailing services to Northern Gold Coast vehicle owners who were tired of mediocre results.</p>
                <p>What started as a passion for cars quickly grew into a fully equipped, purpose-built detailing studio. Today, we serve hundreds of clients across Upper Coomera, Coomera, Helensvale, Hope Island, Oxenford, and Pimpama — and we&apos;re still growing.</p>
                <p>Our approach has never changed: every vehicle gets a thorough pre-assessment, every process is followed to the letter, and every car leaves our studio only when we&apos;re genuinely satisfied with the result.</p>
                <p>We&apos;re not chasing volume. We&apos;re chasing perfection — one vehicle at a time.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 text-center">
                  <div className="font-display text-6xl text-[#FF6B00] mb-2">{stat.value}</div>
                  <p className="text-[#8E8E93] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="accent-line" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">THE AUTO WORLD STANDARD.</h2>
            <p className="text-[#8E8E93] text-base max-w-xl mx-auto">Four non-negotiable principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-[#1C1C1E] rounded-2xl p-7 border border-white/5 hover:border-[#FF6B00]/20 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#FF6B00]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">{value.title}</h3>
                  <p className="text-[#8E8E93] text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#1C1C1E]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">OUR TEAM.</h2>
            <p className="text-[#8E8E93] text-base max-w-xl mx-auto">Passionate professionals who treat your car the way you treat it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Lead Detailer', role: 'Ceramic Coating & Paint Correction Specialist', years: '5+ years experience' },
              { name: 'Senior Technician', role: 'PPF Installation & Exterior Detailing', years: '4+ years experience' },
              { name: 'Interior Specialist', role: 'Interior Restoration & Deep Clean', years: '3+ years experience' },
            ].map((member) => (
              <div key={member.name} className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 text-center">
                <div className="w-20 h-20 rounded-full bg-[#2C2C2E] border-2 border-[#FF6B00]/20 mx-auto mb-5 flex items-center justify-center">
                  <span className="font-display text-2xl text-[#FF6B00]">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-display text-xl text-white mb-1">{member.name}</h3>
                <p className="text-[#FF6B00] text-xs font-medium mb-2">{member.role}</p>
                <p className="text-[#8E8E93] text-xs">{member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">LET US SHOW YOU WHAT WE CAN DO.</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Book a detail with the Gold Coast team that genuinely cares about your car.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
              Book a Detail <ArrowRight className="w-4 h-4" />
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
