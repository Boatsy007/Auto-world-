'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  mode?: 'words' | 'chars'
  delay?: number
  stagger?: number
}

export function AnimatedText({
  text,
  className,
  mode = 'words',
  delay = 0,
  stagger = 0.04,
}: AnimatedTextProps) {
  const items = mode === 'words' ? text.split(' ') : text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay * i,
      },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      className={cn('inline-flex flex-wrap gap-x-2', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {item}
          {mode === 'words' && index < items.length - 1 ? '' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}
