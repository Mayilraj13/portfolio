import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const API_BASE = import.meta.env.VITE_API_URL || 'https://mayilraj-portfolio-backend.onrender.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [isError, setIsError] = useState(false)
  const [errors, setErrors] = useState({})

  // Pre-warm the Render backend container (handles Render free tier spin-down)
  useEffect(() => {
    fetch(`${API_BASE}/api/health`).catch(() => {})
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formErrors = {}
    if (!form.name.trim()) formErrors.name = 'Full Name is required'
    if (!form.email.trim()) {
      formErrors.email = 'Email Address is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = 'Please enter a valid email address'
    }
    if (!form.subject.trim()) formErrors.subject = 'Subject is required'
    if (!form.message.trim()) formErrors.message = 'Message cannot be empty'

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    const targetPhone = '917397532574'
    const whatsappMessage = [
      '🚀 *New Portfolio Inquiry — Mayilraj R*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${form.name.trim()}`,
      `📧 *Email:* ${form.email.trim()}`,
      form.company.trim() ? `🏢 *Company / Org:* ${form.company.trim()}` : null,
      `📌 *Subject:* ${form.subject.trim()}`,
      '━━━━━━━━━━━━━━━━━━━━━',
      '💬 *Message:*',
      form.message.trim(),
      '━━━━━━━━━━━━━━━━━━━━━',
      '✨ *Sent via Mayilraj Portfolio*'
    ].filter(Boolean).join('\n')

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappMessage)}`

    fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {})

    try {
      const newTab = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        window.location.href = whatsappUrl
      }
      setStatus('Opening WhatsApp... Your message has been prepared for +91 7397532574!')
      setIsError(false)
      setForm({ name: '', email: '', company: '', subject: '', message: '' })
    } catch {
      window.location.href = whatsappUrl
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white text-neutral-900 relative overflow-hidden scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-xl mx-auto">

          {/* Serif Italic Headline & Subtitle */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] italic font-semibold text-neutral-900 mb-4 tracking-tight leading-tight">
              Let&apos;s build something together
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
              Open to full-time SDE &amp; AI roles, high-impact web/ML projects, and technical collaborations.
            </p>
          </div>

          {/* Narrow Form Card */}
          <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 mb-1.5 font-['Plus_Jakarta_Sans']">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-rose-500' : 'border-neutral-200'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-neutral-900 placeholder-neutral-400`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1.5 font-['Plus_Jakarta_Sans']">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-rose-500' : 'border-neutral-200'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-neutral-900 placeholder-neutral-400`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-neutral-700 mb-1.5 font-['Plus_Jakarta_Sans']">
                    Company <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-neutral-900 placeholder-neutral-400"
                    placeholder="Organization"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 mb-1.5 font-['Plus_Jakarta_Sans']">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.subject ? 'border-rose-500' : 'border-neutral-200'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-neutral-900 placeholder-neutral-400`}
                    placeholder="Opportunity / Project"
                  />
                  {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 mb-1.5 font-['Plus_Jakarta_Sans']">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-rose-500' : 'border-neutral-200'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none text-sm text-neutral-900 placeholder-neutral-400`}
                  placeholder="Tell me about the role or project..."
                />
                {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                type="submit"
                className="w-full bg-neutral-900 hover:bg-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all flex items-center justify-center group text-sm sm:text-base cursor-pointer font-['Plus_Jakarta_Sans']"
              >
                <span>Send Message</span>
                <i className="ri-send-plane-fill ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-3.5 rounded-xl border text-center text-xs sm:text-sm font-medium ${
                      isError
                        ? 'bg-rose-50 border-rose-200 text-rose-700'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Compact Direct Links & Resume Row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-neutral-600">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <i className="ri-mail-line text-indigo-600" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <i className="ri-phone-line text-indigo-600" />
              <span>{personalInfo.phone}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <i className="ri-linkedin-fill text-indigo-600" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <i className="ri-github-fill text-indigo-600" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              <i className="ri-download-2-line" />
              <span>Resume</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
