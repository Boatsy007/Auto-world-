'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  vehicle: z.string().optional(),
  message: z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
})

type FormData = z.infer<typeof schema>

const services = [
  'Ceramic Coating',
  'Paint Protection Film (PPF)',
  'Paint Correction',
  'Interior Detailing',
  'Exterior Detailing',
  'Cut & Polish',
  'Full Detail Package',
  'Express Detail',
  'Other / Not Sure',
]

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '0468 336 447', href: 'tel:0468336447' },
  { icon: Mail, label: 'Email', value: 'info@autoworlddetailing.com.au', href: 'mailto:info@autoworlddetailing.com.au' },
  { icon: MapPin, label: 'Location', value: 'Upper Coomera, QLD 4209', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri 8am–5pm · Sat 8am–2pm', href: null },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at bottom right, rgba(255,107,0,0.08) 0%, transparent 65%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Book a Service</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-6 max-w-4xl">
            LET&apos;S TALK
            <br />
            <span className="text-[#FF6B00]">ABOUT YOUR CAR.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Ready to book or just have a question? Fill out the form and we&apos;ll be in touch within 24 hours. Or call us directly on 0468 336 447.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl text-white mb-8">SEND US A MESSAGE</h2>

              {submitted ? (
                <div className="flex flex-col items-start gap-5 py-12">
                  <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-white mb-2">MESSAGE RECEIVED!</h3>
                    <p className="text-[#8E8E93] text-sm leading-relaxed max-w-sm">
                      Thanks for getting in touch. We&apos;ll review your enquiry and get back to you within 24 hours.
                      <br /><br />
                      Need to speak with someone urgently? Call us on <a href="tel:0468336447" className="text-[#FF6B00]">0468 336 447</a>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#8E8E93] text-xs font-medium tracking-wide uppercase mb-2">Full Name *</label>
                      <input
                        {...register('name')}
                        placeholder="John Smith"
                        className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                      />
                      {errors.name && <p className="text-[#FF6B00] text-xs mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[#8E8E93] text-xs font-medium tracking-wide uppercase mb-2">Phone *</label>
                      <input
                        {...register('phone')}
                        placeholder="0400 000 000"
                        type="tel"
                        className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                      />
                      {errors.phone && <p className="text-[#FF6B00] text-xs mt-1.5">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#8E8E93] text-xs font-medium tracking-wide uppercase mb-2">Email *</label>
                    <input
                      {...register('email')}
                      placeholder="john@example.com"
                      type="email"
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    />
                    {errors.email && <p className="text-[#FF6B00] text-xs mt-1.5">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[#8E8E93] text-xs font-medium tracking-wide uppercase mb-2">Service Required *</label>
                    <select
                      {...register('service')}
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#1C1C1E]">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#1C1C1E]">{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-[#FF6B00] text-xs mt-1.5">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[#8E8E93] text-xs font-medium tracking-wide uppercase mb-2">Vehicle (Make & Model)</label>
                    <input
                      {...register('vehicle')}
                      placeholder="e.g. 2022 BMW M4 Competition"
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8E8E93] text-xs font-medium tracking-wide uppercase mb-2">Message *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your vehicle and what you're looking to achieve..."
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#FF6B00]/50 transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[#FF6B00] text-xs mt-1.5">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm py-4 rounded-full hover:bg-[#FF6B00]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-xl shadow-[#FF6B00]/20"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-white mb-8">GET IN TOUCH</h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-start gap-4 bg-[#1C1C1E] rounded-xl p-5 border border-white/5">
                        <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#FF6B00]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[#8E8E93] text-xs uppercase tracking-wide mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-white text-sm hover:text-[#FF6B00] transition-colors">{item.value}</a>
                          ) : (
                            <p className="text-white text-sm">{item.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <div>
                <h3 className="font-display text-2xl text-white mb-4">FIND US</h3>
                <div className="bg-[#1C1C1E] rounded-2xl border border-white/5 overflow-hidden h-64 flex flex-col items-center justify-center gap-3">
                  <MapPin className="w-8 h-8 text-[#FF6B00]" strokeWidth={1.5} />
                  <div className="text-center">
                    <p className="text-white text-sm font-medium">Upper Coomera, QLD 4209</p>
                    <p className="text-[#8E8E93] text-xs mt-1">Northern Gold Coast</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Upper+Coomera+QLD+4209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[#FF6B00] text-xs underline hover:no-underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Service area */}
              <div className="bg-[#1C1C1E] rounded-xl p-6 border border-white/5">
                <h3 className="text-white font-semibold text-sm mb-3">Service Area</h3>
                <div className="flex flex-wrap gap-2">
                  {['Upper Coomera', 'Coomera', 'Helensvale', 'Hope Island', 'Oxenford', 'Pimpama', 'Northern Gold Coast'].map((area) => (
                    <span key={area} className="text-[#8E8E93] text-xs bg-white/5 px-3 py-1.5 rounded-full">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
