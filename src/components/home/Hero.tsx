'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-start justify-center overflow-hidden">
      {/* Background gradient / texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-graphite" />
        {/* Orange glow bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, rgba(255,107,0,0.12) 0%, transparent 65%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(250,250,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="accent-line" />
            <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
              Gold Coast&apos;s Premier Detailing Studio
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="font-bebas text-[clamp(4rem,12vw,9rem)] leading-[0.9] text-white mb-8"
          >
            DETAILING
            <br />
            <span className="text-orange">WITHOUT</span>
            <br />
            COMPROMISE.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="text-silver text-base md:text-xl leading-relaxed max-w-xl mb-10"
          >
            From ceramic coating to full paint correction — we protect and
            restore your vehicle to concours condition. Trusted by Gold Coast
            car enthusiasts since day one.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-orange/90 active:scale-[0.98] transition-all shadow-xl shadow-orange/25"
            >
              Book a Detail
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-sm px-7 py-4 rounded-full hover:border-white/50 hover:bg-white/5 active:scale-[0.98] transition-all"
            >
              View Services
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            className="flex flex-wrap gap-x-8 gap-y-3 mt-14"
          >
            {[
              { label: '5.0 Stars', sub: '50+ Google Reviews' },
              { label: '500+ Vehicles', sub: 'Detailed & Protected' },
              { label: 'Gold Coast', sub: 'Upper Coomera Based' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  {item.label}
                </span>
                <span className="text-silver/60 text-xs">{item.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-silver/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-orange/60 to-transparent" />
      </motion.div>
    </section>
  )
}
