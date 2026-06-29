import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0A0A0A]">
      {/* Orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,107,0,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="accent-line mx-auto" style={{ display: 'inline-block' }} />
        </div>
        <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase block mb-6">
          Ready When You Are
        </span>

        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-white mb-6 max-w-4xl mx-auto">
          READY TO TRANSFORM
          <br />
          YOUR VEHICLE?
        </h2>

        <p className="text-[#8E8E93] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join hundreds of Gold Coast car owners who trust Auto World Detailing
          with their most prized possession.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 active:scale-[0.98] transition-all shadow-xl shadow-[#FF6B00]/25"
          >
            Book a Detail
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:0468336447"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-sm px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 active:scale-[0.98] transition-all"
          >
            <Phone className="w-4 h-4" />
            Call 0468 336 447
          </a>
        </div>

        {/* Address reminder */}
        <p className="mt-10 text-[#8E8E93]/50 text-xs">
          Upper Coomera, Gold Coast QLD · Mon–Fri 8am–5pm · Sat 8am–2pm
        </p>
      </div>
    </section>
  )
}
