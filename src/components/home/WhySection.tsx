'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Award, CheckCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const pillars = [
  {
    icon: Zap,
    title: 'Obsessive Precision',
    description:
      "We don't rush. Every panel, every surface, every detail receives the same unwavering focus. When we say it's done, we mean it's perfect.",
  },
  {
    icon: Shield,
    title: 'Premium Products',
    description:
      'We use only top-tier coatings, films, and chemicals from globally recognised brands — products that perform as well as they cost.',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description:
      'Our team is trained and certified. We stay up to date with the latest techniques and products so your vehicle always gets the best.',
  },
  {
    icon: CheckCircle,
    title: 'Guaranteed Results',
    description:
      "If you're not satisfied, we'll make it right. Our work comes with a satisfaction guarantee — because we're confident in what we deliver.",
  },
]

export function WhySection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Why Choose Us"
          headline="THE GOLD COAST STANDARD."
          subtext="Auto World Detailing was built on a simple principle: do the job properly or don't do it at all. Here's what sets us apart from the rest."
          align="center"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="bg-graphite rounded-2xl p-7 border border-white/5 hover:border-orange/20 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors duration-300">
                    <Icon
                      className="w-6 h-6 text-orange"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-bebas text-2xl text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
