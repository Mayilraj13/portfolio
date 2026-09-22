import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll detection to highlight active section & header scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = ['about', 'skills', 'projects', 'certifications', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 110

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + window.pageYOffset
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection('about')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (e, sectionId) => {
    if (e && e.stopPropagation) e.stopPropagation()
    setActiveSection(sectionId)
    setMenuOpen(false)

    const el = document.getElementById(sectionId.toLowerCase())
    if (el) {
      const yOffset = -70
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] py-3 shadow-[0_8px_30px_rgba(0,0,0,0.6)]' 
          : 'bg-transparent py-4 sm:py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* Brand Logo in Circular Frame */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center focus:outline-none group cursor-pointer"
            aria-label="Mayilraj R - Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black border border-white/20 group-hover:border-indigo-500/60 transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] p-0.5 flex items-center justify-center">
              <img 
                src="/mr-logo.png" 
                alt="Mayilraj R Logo" 
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>

          {/* Frosted Glass Floating Navbar (Desktop & Tablet) */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-[#12121c]/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-1 relative">
              {navItems.map((item) => {
                const isActive = item.id.toLowerCase() === activeSection.toLowerCase()
                
                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleSectionClick(e, item.id)}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 rounded-full select-none cursor-pointer ${
                      isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {/* Sliding glowing active pill indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-indigo-500/30 to-purple-500/20 border border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.35)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Right Action / Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-indigo-600/15 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/25 hover:border-indigo-500/60 hover:text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.15)]"
            >
              <i className="ri-mail-send-line text-sm"></i>
              <span>Let's Talk</span>
            </a>

            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden w-10 h-10 rounded-xl bg-[#141422] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors" 
              aria-label="Toggle menu"
            >
              <i className={`ri-${menuOpen ? 'close-line' : 'menu-4-line'} text-xl`}></i>
            </button>
          </div>

        </div>
      </header>

      {/* Clean Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden rounded-2xl bg-[#0f0f18]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
          >
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = item.id.toLowerCase() === activeSection.toLowerCase()
                return (
                  <button 
                    key={item.id} 
                    onClick={(e) => handleSectionClick(e, item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold' 
                        : 'text-gray-300 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <i className="ri-arrow-right-s-line text-indigo-400"></i>}
                  </button>
                )
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-gray-400">{personalInfo.location}</span>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline"
              >
                {personalInfo.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
