'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subtext?: string
  align?: 'left' | 'center'
  className?: string
  headlineClassName?: string
}

export function SectionHeader({
  eyebrow,
  headline,
  subtext,
  align = 'left',
  className,
  headlineClassName,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'flex items-center gap-3 mb-4',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="accent-line" />
          <span className="text-orange text-xs font-semibold tracking-[0.2em] uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'font-bebas text-5xl md:text-6xl lg:text-7xl leading-none text-white',
          headlineClassName
        )}
      >
        {headline}
      </h2>
      {subtext && (
        <p className="mt-6 text-silver text-base md:text-lg leading-relaxed max-w-2xl">
          {subtext}
        </p>
      )}
    </motion.div>
  )
}
