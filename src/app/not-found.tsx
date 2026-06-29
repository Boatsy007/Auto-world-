import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="container-custom text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          404 — Page Not Found
        </p>
        <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.9] text-white mb-6">
          LOST?
        </h1>
        <p className="text-[#8E8E93] text-base md:text-xl max-w-md mx-auto mb-10">
          This page doesn&apos;t exist. Let&apos;s get you back on the road.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#FF6B00]/90 transition-all shadow-xl shadow-[#FF6B00]/25"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
