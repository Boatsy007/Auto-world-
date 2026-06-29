"use client"

import {
  Gem,
  Film,
  Wrench,
  Sparkles,
  Droplets,
  Zap,
  Package,
  Clock,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/ui/ServiceCard'

const services = [
  {
    icon: Gem,
    title: 'Ceramic Coating',
    description:
      'Nano-ceramic protection bonded to your paintwork — hydrophobic, UV-resistant, and gloss-enhancing. Available in 1, 3, and 5-year warranty tiers.',
    href: '/services/ceramic-coating',
    price: '$799',
  },
  {
    icon: Film,
    title: 'Paint Protection Film',
    description:
      'Self-healing urethane film that absorbs rock chips, scratches, and road debris. The most complete physical protection available.',
    href: '/services/paint-protection-film',
    price: '$1,200',
  },
  {
    icon: Wrench,
    title: 'Paint Correction',
    description:
      'Machine polishing to remove swirl marks, scratches, and oxidation. We restore your paint to showroom — or better — condition.',
    href: '/services/paint-correction',
    price: '$299',
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description:
      'Deep clean, leather conditioning, carpet shampoo, odour elimination, and fabric protection. Your cabin, transformed.',
    href: '/services/interior-detailing',
    price: '$199',
  },
  {
    icon: Droplets,
    title: 'Exterior Detailing',
    description:
      'Full exterior wash, clay bar decontamination, polish, and premium wax or sealant application for a brilliant finish.',
    href: '/services/exterior-detailing',
    price: '$149',
  },
  {
    icon: Zap,
    title: 'Cut & Polish',
    description:
      'Restore paintwork clarity and remove oxidation. An essential treatment for ageing paint that needs new life.',
    href: '/services/cut-and-polish',
    price: '$249',
  },
  {
    icon: Package,
    title: 'Full Detail Package',
    description:
      'The complete inside and out transformation. Every surface addressed, every panel protected. Our most comprehensive service.',
    href: '/services',
    price: '$299',
  },
  {
    icon: Clock,
    title: 'Express Detail',
    description:
      'Maintenance wash, vacuum, and interior refresh for the vehicle that needs a quick but thorough reset.',
    href: '/services',
    price: '$149',
  },
]

export function ServicesSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <SectionHeader
          eyebrow="What We Do"
          headline="EVERY SERVICE. EVERY STANDARD."
          subtext="From protective coatings to deep cleans, each service is executed with the same obsessive attention to detail. No corners cut, no shortcuts taken."
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href + service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
