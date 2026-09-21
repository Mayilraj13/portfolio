import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
      const scrollPosition = window.scrollY + 160

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
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-3' : 'bg-white/80 backdrop-blur-sm py-3 sm:py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
          
          {/* Logo on the left side */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center focus:outline-none transition-transform hover:scale-105"
            aria-label="Home"
          >
            <img src="/logo.jpg" alt="MR Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full hover:opacity-90 transition-opacity" />
          </button>

          {/* 3D Permanent Full-Size Navigation Pill (Desktop & Tablet) */}
          <div className="hidden sm:flex flex-1 justify-center mx-2 md:mx-4">
            <nav
              className="relative rounded-full select-none w-full max-w-[760px] h-[54px] flex items-center justify-between"
              style={{
                background: `
                  linear-gradient(135deg, 
                    #fcfcfd 0%, 
                    #f8f8fa 15%, 
                    #f3f4f6 30%, 
                    #eeeff2 45%, 
                    #e9eaed 60%, 
                    #e4e5e8 75%, 
                    #dee0e3 90%, 
                    #e2e3e6 100%
                  )
                `,
                boxShadow: `
                  0 2px 4px rgba(0, 0, 0, 0.08),
                  0 6px 12px rgba(0, 0, 0, 0.12),
                  0 12px 24px rgba(0, 0, 0, 0.14),
                  0 24px 48px rgba(0, 0, 0, 0.10),
                  inset 0 2px 2px rgba(255, 255, 255, 0.8),
                  inset 0 -3px 8px rgba(0, 0, 0, 0.12),
                  inset 3px 3px 8px rgba(0, 0, 0, 0.10),
                  inset -3px 3px 8px rgba(0, 0, 0, 0.09),
                  inset 0 -1px 2px rgba(0, 0, 0, 0.08)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Primary top edge ridge - ultra bright */}
              <div 
                className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 5%, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 1) 85%, rgba(255, 255, 255, 0.95) 95%, rgba(255, 255, 255, 0) 100%)',
                  filter: 'blur(0.3px)',
                }}
              />
              
              {/* Top hemisphere light catch */}
              <div 
                className="absolute inset-x-0 top-0 rounded-full pointer-events-none"
                style={{
                  height: '55%',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.10) 60%, rgba(255, 255, 255, 0) 100%)',
                }}
              />
              
              {/* Directional light - top left */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.20) 20%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0) 65%)',
                }}
              />
              
              {/* Premium gloss reflection - main */}
              <div 
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: '18%',
                  top: '16%',
                  width: '140px',
                  height: '14px',
                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.35) 40%, rgba(255, 255, 255, 0.10) 70%, rgba(255, 255, 255, 0) 100%)',
                  filter: 'blur(4px)',
                  transform: 'rotate(-12deg)',
                }}
              />
              
              {/* Secondary gloss accent */}
              <div 
                className="absolute rounded-full pointer-events-none"
                style={{
                  right: '22%',
                  top: '20%',
                  width: '80px',
                  height: '10px',
                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.15) 60%, rgba(255, 255, 255, 0) 100%)',
                  filter: 'blur(3px)',
                  transform: 'rotate(8deg)',
                }}
              />
              
              {/* Left edge illumination */}
              <div 
                className="absolute inset-y-0 left-0 rounded-l-full pointer-events-none"
                style={{
                  width: '35%',
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 40%, rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0) 100%)',
                }}
              />
              
              {/* Right edge shadow */}
              <div 
                className="absolute inset-y-0 right-0 rounded-r-full pointer-events-none"
                style={{
                  width: '35%',
                  background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.02) 70%, rgba(0, 0, 0, 0) 100%)',
                }}
              />
              
              {/* Bottom curvature - deep shadow */}
              <div 
                className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
                style={{
                  height: '50%',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.08) 25%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0) 100%)',
                }}
              />

              {/* Bottom edge contact shadow */}
              <div 
                className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none"
                style={{
                  height: '20%',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0) 100%)',
                  filter: 'blur(2px)',
                }}
              />

              {/* Inner diffuse glow */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.22)',
                  opacity: 0.7,
                }}
              />
              
              {/* Micro edge definition */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 0.5px rgba(0, 0, 0, 0.10)',
                }}
              />

              {/* Navigation items - Always full size showing all sections */}
              <div 
                className="relative z-10 w-full h-full flex items-center justify-between px-3 sm:px-4 md:px-6"
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", Poppins, sans-serif',
                }}
              >
                {navItems.map((item) => {
                  const isActive = item.id.toLowerCase() === activeSection.toLowerCase()
                  
                  return (
                    <button
                      key={item.id}
                      onClick={(e) => handleSectionClick(e, item.id)}
                      className="relative cursor-pointer transition-all duration-200 select-none"
                      style={{
                        fontSize: isActive ? '14.5px' : '14px',
                        fontWeight: isActive ? 680 : 510,
                        color: isActive ? '#1a1a1a' : '#656565',
                        textDecoration: 'none',
                        letterSpacing: '0.35px',
                        background: 'transparent',
                        border: 'none',
                        padding: '8px 8px',
                        outline: 'none',
                        whiteSpace: 'nowrap',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", Poppins, sans-serif',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        transform: isActive ? 'translateY(-1.5px)' : 'translateY(0)',
                        textShadow: isActive 
                          ? `
                            0 1px 0 rgba(0, 0, 0, 0.35),
                            0 -1px 0 rgba(255, 255, 255, 0.8),
                            1px 1px 0 rgba(0, 0, 0, 0.18),
                            -1px 1px 0 rgba(0, 0, 0, 0.15)
                          `
                          : `
                            0 1px 0 rgba(0, 0, 0, 0.22),
                            0 -1px 0 rgba(255, 255, 255, 0.65),
                            1px 1px 0 rgba(0, 0, 0, 0.12),
                            -1px 1px 0 rgba(0, 0, 0, 0.10)
                          `,
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#222222'
                          e.currentTarget.style.transform = 'translateY(-0.5px)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#656565'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </nav>
          </div>

          {/* Symmetrical placeholder for logo width to maintain perfect centering on desktop */}
          <div className="hidden sm:block w-10 sm:w-12 h-10 sm:h-12" aria-hidden="true" />

          {/* Mobile hamburger menu toggle */}
          <button 
            onClick={() => setMenuOpen(true)} 
            className="sm:hidden w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#2D5A87] transition-colors" 
            aria-label="Open menu"
          >
            <i className="ri-menu-line ri-lg"></i>
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col pt-20 px-4 sm:px-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#2D5A87] transition-colors" aria-label="Close menu">
            <i className="ri-close-line ri-lg"></i>
          </button>
          <nav className="flex flex-col space-y-2">
            {navItems.map(item => {
              const isActive = item.id.toLowerCase() === activeSection.toLowerCase()
              return (
                <button 
                  key={item.id} 
                  onClick={(e) => handleSectionClick(e, item.id)}
                  className={`text-left text-base sm:text-lg transition-colors py-3 border-b border-gray-100 font-medium ${isActive ? 'text-[#2D5A87] font-semibold' : 'text-[#4A4A4A] hover:text-[#2D5A87]'}`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>
          <div className="mt-auto pb-10 text-center">
            <a href={`mailto:${personalInfo.email}`} className="text-[#2D5A87] font-medium underline">{personalInfo.email}</a>
          </div>
        </div>
      )}
    </>
  )
}
