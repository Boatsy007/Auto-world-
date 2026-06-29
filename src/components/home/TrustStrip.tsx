import { Star, Shield, Award, MapPin } from 'lucide-react'

const trustItems = [
  {
    icon: Star,
    value: '5.0',
    label: 'Google Rating',
    sub: '50+ Verified Reviews',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Satisfaction Guarantee',
    sub: 'On Every Job',
  },
  {
    icon: Award,
    value: 'Certified',
    label: 'Professionals',
    sub: 'Trained Technicians',
  },
  {
    icon: MapPin,
    value: 'Gold Coast',
    label: 'Based & Operated',
    sub: 'Upper Coomera, QLD',
  },
]

export function TrustStrip() {
  return (
    <section className="bg-graphite border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 py-8 px-4 md:px-6 ${
                  i < trustItems.length - 1
                    ? 'border-r border-white/5 last:border-0'
                    : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-orange" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">
                    {item.value}
                  </p>
                  <p className="text-silver/70 text-xs">{item.label}</p>
                  <p className="text-silver/40 text-xs hidden md:block">
                    {item.sub}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
