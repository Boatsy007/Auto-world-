'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

const serviceLinks = [
  { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/services/paint-protection-film', label: 'Paint Protection Film' },
  { href: '/services/paint-correction', label: 'Paint Correction' },
  { href: '/services/interior-detailing', label: 'Interior Detailing' },
  { href: '/services/exterior-detailing', label: 'Exterior Detailing' },
  { href: '/services/cut-and-polish', label: 'Cut & Polish' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Auto World Detailing"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link text-sm font-medium',
                  pathname === link.href && 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0468336447"
              className="hidden md:flex items-center gap-2 text-silver hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-orange" strokeWidth={1.5} />
              <span>0468 336 447</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-orange text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-orange/90 active:scale-95 transition-all shadow-lg shadow-orange/20"
            >
              Book Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg flex flex-col"
          >
            <div className="container-custom pt-24 pb-12 flex flex-col h-full overflow-y-auto">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-3 text-3xl font-bebas tracking-wide transition-colors border-b border-white/5',
                        pathname === link.href
                          ? 'text-orange'
                          : 'text-white hover:text-orange'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8">
                <p className="text-silver/50 text-xs uppercase tracking-widest mb-4">
                  Services
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-silver hover:text-orange text-sm py-1.5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center bg-orange text-white font-semibold py-4 rounded-full text-base"
                >
                  Book a Detail
                </Link>
                <a
                  href="tel:0468336447"
                  className="w-full flex items-center justify-center gap-2 border border-white/15 text-white py-4 rounded-full text-base"
                >
                  <Phone className="w-4 h-4" />
                  0468 336 447
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
