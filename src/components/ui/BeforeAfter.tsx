'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface BeforeAfterProps {
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfter({
  beforeLabel = 'Before',
  afterLabel = 'After',
  className,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPosition(pct)
    },
    []
  )

  const handleMouseDown = useCallback(() => setIsDragging(true), [])
  const handleMouseUp = useCallback(() => setIsDragging(false), [])
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      updatePosition(e.clientX)
    },
    [isDragging, updatePosition]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition]
  )

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseUp, handleMouseMove])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl cursor-ew-resize select-none',
        className
      )}
      onTouchMove={(e) => handleTouchMove(e.nativeEvent)}
    >
      {/* Before (dirty/dark) */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-graphite">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-3/4 h-1/2 rounded-xl bg-silver/10 border border-silver/20" />
        </div>
        <div className="absolute inset-0 bg-noise opacity-5" />
        {/* Simulated dirty car surface */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 rounded-full bg-black/30 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/5 rounded-full bg-black/40 blur-2xl" />
          <div className="absolute top-1/3 left-1/3 w-1/4 h-1/6 bg-white/3 blur-xl" />
        </div>
        <span className="absolute top-6 left-6 text-xs font-semibold tracking-[0.15em] uppercase text-silver/60 bg-black/40 px-3 py-1.5 rounded-full">
          {beforeLabel}
        </span>
      </div>

      {/* After (clean/bright) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-graphite via-charcoal to-black"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-2/5 h-1/4 rounded-full bg-white/5 blur-2xl" />
        </div>
        {/* Simulated glossy clean paint */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/4 bg-white/6 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent" />
        </div>
        <span className="absolute top-6 right-6 text-xs font-semibold tracking-[0.15em] uppercase text-orange bg-black/40 px-3 py-1.5 rounded-full">
          {afterLabel}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-ew-resize z-10"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-black"
        >
          <path
            d="M5 3L1 8L5 13M11 3L15 8L11 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
