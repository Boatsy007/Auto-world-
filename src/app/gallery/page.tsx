'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const categories = ['All', 'Ceramic Coating', 'Paint Correction', 'Interior', 'Exterior', 'PPF']

const galleryItems = [
  { id: 1, category: 'Ceramic Coating', label: 'BMW M4 — Full Ceramic Coating', bg: 'from-[#1C1C1E] to-[#0A0A0A]', size: 'large' },
  { id: 2, category: 'Paint Correction', label: 'Porsche 911 — Paint Correction', bg: 'from-[#2C2C2E] to-[#1C1C1E]', size: 'normal' },
  { id: 3, category: 'Interior', label: 'Range Rover — Interior Detail', bg: 'from-[#222224] to-[#2C2C2E]', size: 'normal' },
  { id: 4, category: 'PPF', label: 'Mercedes C63 — Front PPF', bg: 'from-[#1A1A1C] to-[#0A0A0A]', size: 'normal' },
  { id: 5, category: 'Exterior', label: 'Toyota Land Cruiser — Exterior Detail', bg: 'from-[#2C2C2E] to-[#1C1C1E]', size: 'large' },
  { id: 6, category: 'Ceramic Coating', label: 'Audi RS6 — 3-Year Ceramic', bg: 'from-[#1C1C1E] to-[#222224]', size: 'normal' },
  { id: 7, category: 'Paint Correction', label: 'Ferrari 488 — Full Correction', bg: 'from-[#0A0A0A] to-[#1C1C1E]', size: 'normal' },
  { id: 8, category: 'Interior', label: 'Lamborghini Urus — Leather Restoration', bg: 'from-[#2C2C2E] to-[#0A0A0A]', size: 'normal' },
  { id: 9, category: 'Exterior', label: 'Nissan GT-R — Full Exterior Detail', bg: 'from-[#1C1C1E] to-[#2C2C2E]', size: 'normal' },
  { id: 10, category: 'PPF', label: 'McLaren 720S — Full Front PPF', bg: 'from-[#222224] to-[#1A1A1C]', size: 'large' },
  { id: 11, category: 'Ceramic Coating', label: 'Tesla Model S — 5-Year Ceramic', bg: 'from-[#1A1A1C] to-[#2C2C2E]', size: 'normal' },
  { id: 12, category: 'Paint Correction', label: 'Ford Mustang — Enhancement Polish', bg: 'from-[#2C2C2E] to-[#222224]', size: 'normal' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at top right, rgba(255,107,0,0.07) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Our Work</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            OUR WORK
            <br />
            <span className="text-[#FF6B00]">SPEAKS FOR ITSELF.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Real results from real vehicles. Every transformation in our gallery was achieved right here in our Upper Coomera studio.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF6B00] text-white'
                    : 'border border-white/15 text-[#8E8E93] hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <AnimatePresence mode="popLayout">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  <div
                    className={`group relative rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br ${item.bg} ${item.size === 'large' ? 'h-80' : 'h-56'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center mb-2">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-[#FF6B00] text-xs font-medium">{item.category}</span>
                      <p className="text-white text-sm font-medium mt-0.5">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8E8E93]">No items found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#1C1C1E]">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">SEE MORE ON INSTAGRAM.</h2>
          <p className="text-[#8E8E93] mb-8 max-w-md mx-auto">Follow us for daily transformations and behind-the-scenes content.</p>
          <a href="https://instagram.com/autoworlddetailing" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/20">
            @autoworlddetailing
          </a>
        </div>
      </section>
    </>
  )
}
