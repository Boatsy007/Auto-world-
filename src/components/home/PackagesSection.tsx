'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const packages = [
  {
    name: 'Express Detail',
    price: '$149',
    duration: '2–3 hrs',
    popular: false,
    features: [
      'Exterior hand wash',
      'Wheel clean',
      'Window clean',
      'Interior vacuum',
      'Dashboard wipe-down',
      'Air freshener',
    ],
  },
  {
    name: 'Full Detail',
    price: '$299',
    duration: '5–6 hrs',
    popular: true,
    features: [
      'Everything in Express',
      'Clay bar treatment',
      'Machine polish',
      'Leather conditioning',
      'Carpet shampoo',
      'Engine bay clean',
      'Tyre dressing',
    ],
  },
  {
    name: 'Ultimate Detail',
    price: 'From $599',
    duration: 'Full day',
    popular: false,
    features: [
      'Everything in Full Detail',
      'Paint correction',
      'Ceramic coating prep',
      'Interior deep clean',
      'Ozone treatment',
      'Paint sealant',
      '12-month protection',
    ],
  },
]

export function PackagesSection() {
  return (
    <section className="section-padding bg-[#1C1C1E]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Pricing"
          headline="CLEAR. SIMPLE. TRANSPARENT."
          subtext="No hidden fees. No surprises. Just exceptional results at honest prices."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                'relative flex flex-col rounded-2xl p-8 border transition-all duration-300',
                pkg.popular
                  ? 'bg-[#0A0A0A] border-[#FF6B00] shadow-xl shadow-[#FF6B00]/10 scale-[1.02]'
                  : 'bg-[#0A0A0A]/60 border-white/10 hover:border-white/20'
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-[#FF6B00] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="text-[#8E8E93] text-sm">{pkg.duration}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl text-white">
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        'w-4 h-4 mt-0.5 flex-shrink-0',
                        pkg.popular ? 'text-[#FF6B00]' : 'text-[#8E8E93]'
                      )}
                      strokeWidth={2.5}
                    />
                    <span className="text-[#8E8E93] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  'w-full text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-200',
                  pkg.popular
                    ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 shadow-lg shadow-[#FF6B00]/20'
                    : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                )}
              >
                Book This Package
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#8E8E93] text-sm mt-10">
          Need a custom quote?{' '}
          <Link href="/contact" className="text-[#FF6B00] hover:underline">
            Get in touch
          </Link>{' '}
          and we&apos;ll tailor a package to your vehicle.
        </p>
      </div>
    </section>
  )
}
