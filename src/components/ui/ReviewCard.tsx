import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReviewCardProps {
  name: string
  location?: string
  rating: number
  review: string
  date?: string
  service?: string
  className?: string
}

export function ReviewCard({
  name,
  location,
  rating,
  review,
  date,
  service,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col h-full bg-graphite border border-white/5 rounded-2xl p-6 md:p-8',
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-4 h-4',
              i < rating ? 'text-orange fill-orange' : 'text-silver/30'
            )}
          />
        ))}
      </div>

      {/* Review text */}
      <blockquote className="text-white/80 text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{review}&rdquo;
      </blockquote>

      {/* Footer */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          {location && (
            <p className="text-silver text-xs mt-0.5">{location}</p>
          )}
        </div>
        <div className="text-right">
          {service && (
            <p className="text-orange text-xs font-medium">{service}</p>
          )}
          {date && <p className="text-silver/50 text-xs mt-0.5">{date}</p>}
        </div>
      </div>
    </div>
  )
}
