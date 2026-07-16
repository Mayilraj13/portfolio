import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const handleSubmit = async (e) => {
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

    setStatus('Sending...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('✅ Message sent successfully!')
        setForm({ name: '', email: '', company: '', subject: '', message: '' })
      } else {
        const data = await res.json()
        setStatus(`❌ ${data.error || 'Failed to send message'}`)
      }
    } catch {
      // Mailto Fallback
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'N/A'}\n\n${form.message}`)
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`
      setStatus('✅ Email client opened successfully!')
    }
  }

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Let's Build Something Amazing Together</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I am actively open to Full-Stack Developer opportunities, freelance projects, and technical collaborations. 
            Feel free to send a message or connect directly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 sm:p-10 transition-all duration-300">
              <h3 className="text-lg sm:text-2xl font-bold text-[#2D5A87] mb-6 sm:mb-8 flex items-center gap-2">
                <i className="ri-mail-send-line text-xl"></i> Have an Opportunity?
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-2.5 sm:py-3 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none text-sm`}
                      placeholder="Your Name" 
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-2.5 sm:py-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none text-sm`}
                      placeholder="you@example.com" 
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input 
                      type="text" 
                      name="company" 
                      id="company" 
                      value={form.company} 
                      onChange={handleChange} 
                      className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none text-sm"
                      placeholder="Your Organization" 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      value={form.subject} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-2.5 sm:py-3 bg-gray-50 border ${errors.subject ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none text-sm`}
                      placeholder="Project Inquiry / Job Offer" 
                    />
                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="4" 
                    value={form.message} 
                    onChange={handleChange} 
                    className={`w-full px-4 py-2.5 sm:py-3 bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none resize-none text-sm`}
                    placeholder="Describe the opportunity or collaboration details..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#2D5A87] text-white font-bold py-3 sm:py-4 rounded-xl shadow-md hover:bg-[#2D5A87]/95 hover:shadow-lg transition-all duration-300 flex items-center justify-center group text-sm sm:text-base cursor-pointer"
                >
                  <span>Send Message</span>
                  <i className="ri-send-plane-fill ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                </button>
                {status && (
                  <p className={`text-xs sm:text-sm text-center mt-3 font-semibold ${status.includes('✅') ? 'text-green-600' : status.includes('❌') ? 'text-red-600' : 'text-gray-500 animate-pulse'}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>

            {/* Availability & Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Availability Panel */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-[#2D5A87] mb-4 flex items-center gap-2">
                  <i className="ri-calendar-check-line text-lg"></i> Availability Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-green-50/50 border border-green-100 rounded-xl">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-green-800">
                      Open to Full-Time Opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50/50 border border-green-100 rounded-xl">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-green-800">
                      Available for Freelance Projects
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50/50 border border-green-100 rounded-xl">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-green-800">
                      Open to Remote Work / Relocation
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Info Card */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#2D5A87] mb-4 flex items-center gap-2">
                    <i className="ri-contacts-book-line text-lg"></i> Direct Coordinates
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: 'mail-line', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                      { icon: 'phone-line', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                      { icon: 'map-pin-2-line', label: 'Location', value: personalInfo.location, href: null }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2D5A87]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2D5A87] group-hover:text-white transition-all duration-300 flex-shrink-0">
                          <i className={`ri-${item.icon} text-sm sm:text-base`}></i>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#2D5A87] transition-colors break-all">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-xs sm:text-sm font-semibold text-gray-700 break-all">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Action Link Icons */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <h4 className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2.5">Connect Socially</h4>
                  <div className="flex gap-2.5">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-100 text-gray-600 rounded-xl hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:scale-110 transition-all duration-300 cursor-pointer"
                      title="LinkedIn"
                    >
                      <i className="ri-linkedin-fill text-lg"></i>
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-100 text-gray-600 rounded-xl hover:bg-black hover:text-white hover:border-black hover:scale-110 transition-all duration-300 cursor-pointer"
                      title="GitHub"
                    >
                      <i className="ri-github-fill text-lg"></i>
                    </a>
                    <a href={`mailto:${personalInfo.email}`}
                      className="w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-100 text-gray-600 rounded-xl hover:bg-[#2D5A87] hover:text-white hover:border-[#2D5A87] hover:scale-110 transition-all duration-300 cursor-pointer"
                      title="Send Email"
                    >
                      <i className="ri-mail-fill text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Action Banner (Download Resume CTA) */}
              <div className="bg-gradient-to-r from-[#2D5A87] to-[#1E3F66] rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between text-white gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold">Download Resume</h4>
                  <p className="text-white/80 text-[11px] sm:text-xs mt-0.5">Get a copy of my professional profile.</p>
                </div>
                <a 
                  href={personalInfo.resume} 
                  download 
                  className="bg-white text-[#2D5A87] font-extrabold px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-1.5 flex-shrink-0 text-xs sm:text-sm cursor-pointer"
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
