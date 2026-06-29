import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const serviceLinks = [
  { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/services/paint-protection-film', label: 'Paint Protection Film' },
  { href: '/services/paint-correction', label: 'Paint Correction' },
  { href: '/services/interior-detailing', label: 'Interior Detailing' },
  { href: '/services/exterior-detailing', label: 'Exterior Detailing' },
  { href: '/services/cut-and-polish', label: 'Cut & Polish' },
]

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/packages', label: 'Packages & Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/locations/gold-coast', label: 'Gold Coast' },
]

export function Footer() {
  return (
    <footer className="bg-graphite border-t border-white/5">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Auto World Detailing"
                width={150}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-silver text-sm leading-relaxed mb-6 max-w-xs">
              Gold Coast&apos;s premier automotive detailing studio. We treat every vehicle
              with the obsessive precision it deserves.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/autoworlddetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-orange hover:border-orange/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bebas text-xl tracking-wide text-white mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver text-sm hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-xl tracking-wide text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver text-sm hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bebas text-xl tracking-wide text-white mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0468336447"
                  className="flex items-start gap-3 text-silver hover:text-white transition-colors group"
                >
                  <Phone
                    className="w-4 h-4 text-orange mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm">0468 336 447</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@autoworlddetailing.com.au"
                  className="flex items-start gap-3 text-silver hover:text-white transition-colors group"
                >
                  <Mail
                    className="w-4 h-4 text-orange mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm break-all">
                    info@autoworlddetailing.com.au
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-silver">
                  <MapPin
                    className="w-4 h-4 text-orange mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <div className="text-sm">
                    <p>Upper Coomera, QLD 4209</p>
                    <p className="text-silver/60 text-xs mt-1">
                      Servicing Northern Gold Coast
                    </p>
                  </div>
                </div>
              </li>
              <li className="pt-2">
                <p className="text-silver/60 text-xs">
                  Mon–Fri: 8:00am – 5:00pm
                  <br />
                  Sat: 8:00am – 2:00pm
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver/50 text-xs">
            © {new Date().getFullYear()} Auto World Detailing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/sitemap.xml"
              className="text-silver/50 text-xs hover:text-silver transition-colors"
            >
              Sitemap
            </Link>
            <span className="text-silver/50 text-xs">
              Upper Coomera, Gold Coast, QLD
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
