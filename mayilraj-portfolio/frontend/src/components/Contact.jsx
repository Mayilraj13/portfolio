import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('✅ Message sent successfully!')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await res.json()
        setStatus(`❌ ${data.error || 'Failed to send'}`)
      }
    } catch {
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${body}`
      setStatus('✅ Email client opened!')
    }
  }

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Get In Touch</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-5 sm:p-10 transition-all duration-300">
              <h3 className="text-lg sm:text-2xl font-bold text-[#2D5A87] mb-6 sm:mb-8 flex items-center">
                <i className="ri-mail-send-line mr-2 sm:mr-3 text-[#2D5A87]"></i> Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Full Name</label>
                    <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none text-sm"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Email</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none text-sm"
                      placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Subject</label>
                  <input type="text" name="subject" id="subject" value={form.subject} onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none text-sm"
                    placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Message</label>
                  <textarea name="message" id="message" rows="4" value={form.message} onChange={handleChange} required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent transition-all outline-none resize-none text-sm"
                    placeholder="Tell me about your project or opportunity..."></textarea>
                </div>
                <button type="submit"
                  className="w-full bg-[#2D5A87] text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg hover:bg-[#2D5A87]/90 hover:shadow-xl transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                  <span>Send Message</span>
                  <i className="ri-send-plane-fill ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                </button>
                {status && <p className={`text-xs sm:text-sm text-center mt-2 ${status.includes('✅') ? 'text-green-600' : status.includes('❌') ? 'text-red-600' : 'text-gray-400'}`}>{status}</p>}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-5 sm:p-10 transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-[#2D5A87] mb-6 sm:mb-8 flex items-center">
                  <i className="ri-user-voice-line mr-2 sm:mr-3 text-[#2D5A87]"></i> Contact Information
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { icon: 'mail-line', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: 'phone-line', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                    { icon: 'map-pin-line', label: 'Location', value: personalInfo.location },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2D5A87]/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#2D5A87] group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <i className={`ri-${item.icon} ri-lg sm:ri-xl`}></i>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href
                          ? <a href={item.href} className="text-sm sm:text-lg text-gray-800 font-medium hover:text-[#2D5A87] transition-colors break-all">{item.value}</a>
                          : <p className="text-sm sm:text-lg text-gray-800 font-medium">{item.value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Connect Socially</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-50 text-gray-600 rounded-xl hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300">
                      <i className="ri-linkedin-fill ri-lg sm:ri-xl"></i></a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-50 text-gray-600 rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all duration-300">
                      <i className="ri-github-fill ri-lg sm:ri-xl"></i></a>
                    <a href={`mailto:${personalInfo.email}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-50 text-gray-600 rounded-xl hover:bg-[#2D5A87] hover:text-white hover:scale-110 transition-all duration-300">
                      <i className="ri-mail-fill ri-lg sm:ri-xl"></i></a>
                  </div>
                </div>
              </div>

              {/* Resume CTA */}
              <div className="bg-gradient-to-r from-[#2D5A87] to-blue-700 rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between text-white gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <h4 className="text-base sm:text-xl font-bold mb-1">Ready to explore my work?</h4>
                  <p className="text-white/80 text-sm">Get a copy of my professional resume.</p>
                </div>
                <a href={personalInfo.resume} download
                  className="bg-white text-[#2D5A87] font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 flex-shrink-0 text-sm sm:text-base">
                  <i className="ri-download-2-line"></i> <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
