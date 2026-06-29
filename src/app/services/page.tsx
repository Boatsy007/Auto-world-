import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Gem, Film, Wrench, Sparkles, Droplets, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Detailing Services Gold Coast | Auto World Detailing',
  description:
    'Professional car detailing services on the Gold Coast: ceramic coating, paint protection film, paint correction, interior detailing, exterior detailing, and cut & polish. Upper Coomera based.',
  alternates: { canonical: 'https://autoworlddetailing.com.au/services' },
}

const services = [
  {
    icon: Gem,
    name: 'Ceramic Coating',
    description:
      'Nano-ceramic protection that bonds permanently to your paintwork for unbeatable hydrophobic performance, UV resistance, and deep gloss. Available with 1, 3 or 5-year warranties.',
    href: '/services/ceramic-coating',
    price: 'From $799',
  },
  {
    icon: Film,
    name: 'Paint Protection Film',
    description:
      'Self-healing urethane film that physically shields your paint from stone chips, scratches, and road debris. The most complete paint protection available on the market.',
    href: '/services/paint-protection-film',
    price: 'From $1,200',
  },
  {
    icon: Wrench,
    name: 'Paint Correction',
    description:
      'Multi-stage machine polishing to eliminate swirl marks, deep scratches, oxidation, and water spot etching. We restore your paint to a mirror-like, show-car finish.',
    href: '/services/paint-correction',
    price: 'From $299',
  },
  {
    icon: Sparkles,
    name: 'Interior Detailing',
    description:
      'Complete interior transformation: leather cleaning and conditioning, carpet shampoo, fabric protection, glass polishing, and odour elimination.',
    href: '/services/interior-detailing',
    price: 'From $199',
  },
  {
    icon: Droplets,
    name: 'Exterior Detailing',
    description:
      'Full exterior decontamination, clay bar treatment, machine polish, and premium paint sealant application for a brilliantly clean, protected finish.',
    href: '/services/exterior-detailing',
    price: 'From $149',
  },
  {
    icon: Zap,
    name: 'Cut & Polish',
    description:
      'Restore dull, faded, or oxidised paintwork to a rich, glossy finish. Essential for vehicles that have lost their showroom shine to the elements.',
    href: '/services/cut-and-polish',
    price: 'From $249',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[400px]"
            style={{
              background:
                'radial-gradient(ellipse at bottom right, rgba(255,107,0,0.08) 0%, transparent 65%)',
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            EVERY SERVICE.
            <br />
            <span className="text-[#FF6B00]">EVERY STANDARD.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            From ceramic coatings to full interior transformations — every service
            is performed with the same obsessive precision. We don&apos;t cut corners
            and we don&apos;t compromise on results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col bg-[#1C1C1E] border border-white/5 rounded-2xl p-8 hover:border-[#FF6B00]/25 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF6B00]/5 to-transparent" />
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#FF6B00]" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-[#8E8E93] bg-white/5 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl text-white mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    {service.name}
                  </h2>

                  <p className="text-[#8E8E93] text-sm leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#FF6B00] text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1C1C1E]">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            NOT SURE WHICH SERVICE?
          </h2>
          <p className="text-[#8E8E93] text-base mb-8 max-w-lg mx-auto">
            Call us or send a message and we&apos;ll recommend the perfect service
            for your vehicle and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0468336447"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-8 py-4 rounded-full hover:border-white/40 transition-all"
            >
              Call 0468 336 447
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
