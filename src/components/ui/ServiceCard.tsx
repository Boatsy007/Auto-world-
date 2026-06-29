'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  price?: string
  index?: number
  className?: string
}

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  price,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={href}
        className={cn(
          'group flex flex-col h-full bg-graphite border border-white/5 rounded-2xl p-6 md:p-8 hover:border-orange/30 hover:bg-charcoal transition-all duration-300 relative overflow-hidden',
          className
        )}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange/5 to-transparent" />
        </div>

        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-orange" strokeWidth={1.5} />
          </div>
          {price && (
            <span className="text-xs text-silver bg-white/5 px-3 py-1 rounded-full">
              From {price}
            </span>
          )}
        </div>

        <h3 className="font-bebas text-2xl md:text-3xl text-white mb-3 group-hover:text-orange transition-colors duration-300">
          {title}
        </h3>

        <p className="text-silver text-sm leading-relaxed flex-1 mb-6">
          {description}
        </p>

        <div className="flex items-center gap-2 text-orange text-sm font-medium">
          <span>Learn more</span>
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            strokeWidth={2}
          />
        </div>
      </Link>
    </motion.div>
  )
}
