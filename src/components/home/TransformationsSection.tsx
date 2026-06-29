'use client'

import { motion } from 'framer-motion'
import { BeforeAfter } from '@/components/ui/BeforeAfter'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function TransformationsSection() {
  return (
    <section className="section-padding bg-graphite">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Real Results"
              headline="SEE THE TRANSFORMATION."
              subtext="Every vehicle that leaves our studio looks like it just rolled off the factory floor — or better. Drag the slider to witness the difference our paint correction and ceramic coating services make."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Paint Correction', sub: 'Swirls & scratches removed' },
                { label: 'Ceramic Coating', sub: 'Nano-ceramic applied' },
                { label: 'Interior Detail', sub: 'Deep cleaned throughout' },
                { label: 'Final Inspection', sub: 'Quality checked' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-charcoal rounded-xl p-4 border border-white/5"
                >
                  <p className="text-orange text-xs font-semibold tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-silver text-xs">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BeforeAfter beforeLabel="Before" afterLabel="After" />
            <p className="text-silver/40 text-xs text-center mt-4">
              Drag the slider to compare before &amp; after
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
