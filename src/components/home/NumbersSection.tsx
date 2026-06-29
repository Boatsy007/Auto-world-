'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  {
    end: 500,
    suffix: '+',
    label: 'Vehicles Detailed',
    sub: 'And counting',
  },
  {
    end: 50,
    suffix: '+',
    label: 'Google Reviews',
    sub: '5.0 Star Average',
  },
  {
    end: 5,
    suffix: ' YRS',
    label: 'In Business',
    sub: 'Gold Coast trusted',
  },
  {
    end: 100,
    suffix: '%',
    label: 'Satisfaction Rate',
    sub: 'Guaranteed',
  },
]

export function NumbersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="section-padding bg-graphite border-y border-white/5"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-bebas text-6xl md:text-7xl lg:text-8xl text-orange leading-none mb-2">
                {inView ? (
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={2}
                    enableScrollSpy={false}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-white font-semibold text-sm md:text-base">
                {stat.label}
              </p>
              <p className="text-silver/60 text-xs mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
