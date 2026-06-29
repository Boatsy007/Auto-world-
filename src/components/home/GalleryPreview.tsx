'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Eye } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const galleryItems = [
  { label: 'Ceramic Coating', span: 'row-span-2', bg: 'from-[#1C1C1E] to-[#0A0A0A]' },
  { label: 'Paint Correction', span: '', bg: 'from-[#2C2C2E] to-[#1C1C1E]' },
  { label: 'Interior Detail', span: '', bg: 'from-[#1A1A1C] to-[#2C2C2E]' },
  { label: 'PPF Install', span: '', bg: 'from-[#222224] to-[#0A0A0A]' },
  { label: 'Exterior Detail', span: 'col-span-2', bg: 'from-[#2C2C2E] to-[#1C1C1E]' },
]

export function GalleryPreview() {
  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Work"
            headline="OUR WORK SPEAKS FOR ITSELF."
            subtext="A glimpse into the transformations we deliver every day."
          />
          <Link
            href="/gallery"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-full hover:border-[#FF6B00]/40 hover:text-[#FF6B00] transition-all"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-3 h-[500px] md:h-[600px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br ${item.bg} ${item.span}`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mb-3">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-xs font-medium tracking-wide">
                  View
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[#8E8E93] text-xs font-medium tracking-wide uppercase">
                  {item.label}
                </span>
              </div>

              {/* Orange accent */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#FF6B00]/60" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#8E8E93] text-sm mb-4">
            Follow us on Instagram for daily transformations
          </p>
          <a
            href="https://instagram.com/autoworlddetailing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FF6B00] text-sm hover:underline"
          >
            @autoworlddetailing
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
