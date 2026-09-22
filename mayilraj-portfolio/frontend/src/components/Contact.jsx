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
    
    // Form Validation
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

    // Build Formatted WhatsApp Message
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

    // Fire background backup dispatch to backend if available
    fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {})

    // Open WhatsApp directly
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
    <section id="contact" className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-[#0a0a0f] relative overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 block font-['Space_Grotesk']">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Space_Grotesk']">
            Let's Build Something Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Open to full-time engineering roles, high-impact AI/web projects, and technical collaborations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-[#12121c] rounded-3xl border border-white/10 hover:border-indigo-500/40 p-6 sm:p-10 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-['Space_Grotesk'] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-base">
                  <i className="ri-mail-send-line" />
                </div>
                <span>Send a Direct Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5 font-['Space_Grotesk']">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 bg-[#181826] border ${errors.name ? 'border-rose-500' : 'border-white/10'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-white placeholder-gray-500`}
                      placeholder="Your Name" 
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5 font-['Space_Grotesk']">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 bg-[#181826] border ${errors.email ? 'border-rose-500' : 'border-white/10'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-white placeholder-gray-500`}
                      placeholder="you@example.com" 
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-gray-300 mb-1.5 font-['Space_Grotesk']">
                      Company / Org <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="text" 
                      name="company" 
                      id="company" 
                      value={form.company} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 bg-[#181826] border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-white placeholder-gray-500"
                      placeholder="Your Organization" 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 mb-1.5 font-['Space_Grotesk']">
                      Subject *
                    </label>
                    <input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      value={form.subject} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 bg-[#181826] border ${errors.subject ? 'border-rose-500' : 'border-white/10'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm text-white placeholder-gray-500`}
                      placeholder="Opportunity / Project" 
                    />
                    {errors.subject && <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5 font-['Space_Grotesk']">
                    Message *
                  </label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="4" 
                    value={form.message} 
                    onChange={handleChange} 
                    className={`w-full px-4 py-3 bg-[#181826] border ${errors.message ? 'border-rose-500' : 'border-white/10'} rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none text-sm text-white placeholder-gray-500`}
                    placeholder="Describe the opportunity or project details..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all flex items-center justify-center group text-sm sm:text-base cursor-pointer font-['Space_Grotesk']"
                >
                  <span>Transmit Message</span>
                  <i className="ri-send-plane-fill ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"></i>
                </motion.button>

                {/* Animated Toast Status */}
                <AnimatePresence>
                  {status && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`p-3.5 rounded-xl border text-center text-xs sm:text-sm font-medium ${
                        isError 
                          ? 'bg-rose-950/40 border-rose-500/30 text-rose-300' 
                          : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                      }`}
                    >
                      {status}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Availability & Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Availability Panel */}
              <div className="bg-[#12121c] rounded-3xl border border-white/10 p-6 sm:p-7 shadow-md">
                <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2 font-['Space_Grotesk']">
                  <i className="ri-calendar-check-line text-indigo-400"></i> Availability Status
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-xl">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-300 font-['Space_Grotesk']">
                      Open to Full-Time SDE &amp; AI Roles
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#181826] border border-white/[0.06] rounded-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-300">
                      Available for Technical Collaborations
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#181826] border border-white/[0.06] rounded-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-300">
                      Open to Remote / Relocation
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Info Card */}
              <div className="bg-[#12121c] rounded-3xl border border-white/10 p-6 sm:p-7 shadow-md flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2 font-['Space_Grotesk']">
                    <i className="ri-contacts-book-line text-indigo-400"></i> Direct Coordinates
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: 'phone-line', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                      { icon: 'mail-line', label: 'Email', value: personalInfo.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}` },
                      { icon: 'map-pin-2-line', label: 'Location', value: personalInfo.location, href: null }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-9 h-9 bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                          <i className={`ri-${item.icon} text-base`}></i>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-0.5 font-['Space_Grotesk']">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors break-all">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-xs sm:text-sm font-medium text-gray-300 break-all">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Quick Links */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <h4 className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-2.5 font-['Space_Grotesk']">
                    Connect Profiles
                  </h4>
                  <div className="flex gap-2.5">
                    <motion.a 
                      whileHover={{ scale: 1.08, y: -2 }}
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[#181826] border border-white/10 text-gray-300 rounded-xl hover:bg-[#0077b5] hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <i className="ri-linkedin-fill text-lg"></i>
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.08, y: -2 }}
                      href={personalInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[#181826] border border-white/10 text-gray-300 rounded-xl hover:bg-white hover:text-black transition-colors"
                      title="GitHub"
                    >
                      <i className="ri-github-fill text-lg"></i>
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.08, y: -2 }}
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[#181826] border border-white/10 text-gray-300 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors"
                      title="Send Email via Gmail"
                    >
                      <i className="ri-mail-fill text-lg"></i>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Download Resume Action Banner */}
              <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/30 to-[#12121c] border border-indigo-500/30 rounded-3xl p-5 shadow-lg flex items-center justify-between text-white gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-['Space_Grotesk']">Official Resume</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Updated comprehensive engineering CV.</p>
                </div>
                <a 
                  href={personalInfo.resume} 
                  download 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center gap-1.5 flex-shrink-0 text-xs sm:text-sm cursor-pointer font-['Space_Grotesk']"
                >
                  <i className="ri-download-2-line"></i>
                  <span>Download</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
