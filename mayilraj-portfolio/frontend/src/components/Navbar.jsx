import { useState, useRef, useEffect } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
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
  const [expanded, setExpanded] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const containerRef = useRef(null)
  const hoverTimeoutRef = useRef(null)
  const clickedRef = useRef(false)

  // Spring animations for smooth pill motion
  const pillWidth = useSpring(160, { stiffness: 280, damping: 26, mass: 1 })
  const pillShift = useSpring(0, { stiffness: 280, damping: 26, mass: 1 })

  // Scroll detection to highlight active section & header scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let current = 'about'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) {
          current = s.getAttribute('id')
        }
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getExpandedWidth = () => {
    const screenW = typeof window !== 'undefined' ? window.innerWidth : 1200
    if (screenW < 640) return Math.min(screenW - 80, 360)
    if (screenW < 768) return 540
    if (screenW < 1024) return 660
    return 760
  }

  const handleMouseEnter = () => {
    if (clickedRef.current) return
    setHovering(true)
    setExpanded(true)
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    pillWidth.set(getExpandedWidth())
  }

  const handleMouseLeave = () => {
    clickedRef.current = false
    setHovering(false)
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setExpanded(false)
      pillWidth.set(160)
    }, 150)
  }

  const collapsePillImmediately = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setHovering(false)
    setExpanded(false)
    pillWidth.set(160)
  }

  const handleSectionClick = (e, sectionId) => {
    if (e && e.stopPropagation) e.stopPropagation()
    clickedRef.current = true
    setIsTransitioning(true)
    setActiveSection(sectionId)
    setMenuOpen(false)

    // Immediately collapse pill upon selection
    collapsePillImmediately()

    const el = document.getElementById(sectionId.toLowerCase())
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })

    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)

    // Reset clicked lock after timeout
    setTimeout(() => {
      clickedRef.current = false
    }, 600)
  }

  const activeItem = navItems.find(item => item.id.toLowerCase() === activeSection.toLowerCase()) || navItems[0]

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-3' : 'bg-white/80 backdrop-blur-sm py-3 sm:py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
          
          {/* Logo on the left side */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center focus:outline-none transition-transform hover:scale-105"
            aria-label="Home"
          >
            <img src="/logo.jpg" alt="MR Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full hover:opacity-90 transition-opacity" />
          </button>

          {/* 3D Adaptive Navigation Pill (Desktop & Tablet) */}
          <div className="hidden sm:flex flex-1 justify-center mx-4">
            <motion.nav
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (!expanded && !clickedRef.current) {
                  setHovering(true)
                  setExpanded(true)
                  pillWidth.set(getExpandedWidth())
                }
              }}
              className="relative rounded-full select-none cursor-pointer"
              style={{
                width: pillWidth,
                height: '54px',
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
                boxShadow: expanded
                  ? `
                    0 2px 4px rgba(0, 0, 0, 0.08),
                    0 6px 12px rgba(0, 0, 0, 0.12),
                    0 12px 24px rgba(0, 0, 0, 0.14),
                    0 24px 48px rgba(0, 0, 0, 0.10),
                    inset 0 2px 2px rgba(255, 255, 255, 0.8),
                    inset 0 -3px 8px rgba(0, 0, 0, 0.12),
                    inset 3px 3px 8px rgba(0, 0, 0, 0.10),
                    inset -3px 3px 8px rgba(0, 0, 0, 0.09),
                    inset 0 -1px 2px rgba(0, 0, 0, 0.08)
                  `
                  : isTransitioning
                  ? `
                    0 3px 6px rgba(0, 0, 0, 0.10),
                    0 8px 16px rgba(0, 0, 0, 0.08),
                    0 16px 32px rgba(0, 0, 0, 0.06),
                    0 1px 2px rgba(0, 0, 0, 0.10),
                    inset 0 2px 1px rgba(255, 255, 255, 0.85),
                    inset 0 -2px 6px rgba(0, 0, 0, 0.08),
                    inset 2px 2px 8px rgba(0, 0, 0, 0.06),
                    inset -2px 2px 8px rgba(0, 0, 0, 0.05),
                    inset 0 0 1px rgba(0, 0, 0, 0.12),
                    inset 0 0 20px rgba(255, 255, 255, 0.15)
                  `
                  : `
                    0 3px 6px rgba(0, 0, 0, 0.12),
                    0 8px 16px rgba(0, 0, 0, 0.10),
                    0 16px 32px rgba(0, 0, 0, 0.08),
                    0 1px 2px rgba(0, 0, 0, 0.12),
                    inset 0 2px 1px rgba(255, 255, 255, 0.7),
                    inset 0 -2px 6px rgba(0, 0, 0, 0.10),
                    inset 2px 2px 8px rgba(0, 0, 0, 0.08),
                    inset -2px 2px 8px rgba(0, 0, 0, 0.07),
                    inset 0 0 1px rgba(0, 0, 0, 0.15)
                  `,
                x: pillShift,
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease-out',
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
                  left: expanded ? '18%' : '15%',
                  top: '16%',
                  width: expanded ? '140px' : '60px',
                  height: '14px',
                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.35) 40%, rgba(255, 255, 255, 0.10) 70%, rgba(255, 255, 255, 0) 100%)',
                  filter: 'blur(4px)',
                  transform: 'rotate(-12deg)',
                  transition: 'all 0.3s ease',
                }}
              />
              
              {/* Secondary gloss accent - only show when expanded */}
              {expanded && (
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
              )}
              
              {/* Left edge illumination - only show when expanded */}
              {expanded && (
                <div 
                  className="absolute inset-y-0 left-0 rounded-l-full pointer-events-none"
                  style={{
                    width: '35%',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 40%, rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0) 100%)',
                  }}
                />
              )}
              
              {/* Right edge shadow - only show when expanded */}
              {expanded && (
                <div 
                  className="absolute inset-y-0 right-0 rounded-r-full pointer-events-none"
                  style={{
                    width: '35%',
                    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.02) 70%, rgba(0, 0, 0, 0) 100%)',
                  }}
                />
              )}
              
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

              {/* Navigation items container */}
              <div 
                ref={containerRef}
                className="relative z-10 h-full flex items-center justify-center px-4"
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", Poppins, sans-serif',
                }}
              >
                {/* Collapsed state - show active section with smooth text transitions */}
                {!expanded && (
                  <div className="flex items-center justify-center relative w-full h-full">
                    <AnimatePresence mode="wait">
                      {activeItem && (
                        <motion.span
                          key={activeItem.id}
                          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                          transition={{
                            duration: 0.25,
                            ease: [0.4, 0.0, 0.2, 1]
                          }}
                          style={{
                            fontSize: '15px',
                            fontWeight: 680,
                            color: '#1a1a1a',
                            letterSpacing: '0.45px',
                            whiteSpace: 'nowrap',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", Poppins, sans-serif',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            textShadow: `
                              0 1px 0 rgba(0, 0, 0, 0.35),
                              0 -1px 0 rgba(255, 255, 255, 0.8),
                              1px 1px 0 rgba(0, 0, 0, 0.18),
                              -1px 1px 0 rgba(0, 0, 0, 0.15)
                            `,
                          }}
                        >
                          {activeItem.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Expanded state - show all sections with stagger */}
                {expanded && (
                  <div className="flex items-center justify-between w-full px-2 overflow-x-auto no-scrollbar">
                    {navItems.map((item, index) => {
                      const isActive = item.id.toLowerCase() === activeSection.toLowerCase()
                      
                      return (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ 
                            delay: index * 0.03,
                            duration: 0.2,
                            ease: 'easeOut'
                          }}
                          onClick={(e) => handleSectionClick(e, item.id)}
                          className="relative cursor-pointer transition-all duration-200"
                          style={{
                            fontSize: isActive ? '14.5px' : '14px',
                            fontWeight: isActive ? 680 : 510,
                            color: isActive ? '#1a1a1a' : '#656565',
                            textDecoration: 'none',
                            letterSpacing: '0.35px',
                            background: 'transparent',
                            border: 'none',
                            padding: '8px 10px',
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
                              e.currentTarget.style.color = '#3a3a3a'
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
                        </motion.button>
                      )
                    })}
                  </div>
                )}
              </div>
            </motion.nav>
          </div>

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
            {navItems.map(item => (
              <button key={item.id} onClick={(e) => handleSectionClick(e, item.id)}
                className="text-left text-base sm:text-lg text-[#4A4A4A] hover:text-[#2D5A87] transition-colors py-3 border-b border-gray-100">
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto pb-10 text-center">
            <a href={`mailto:${personalInfo.email}`} className="text-[#2D5A87] font-medium underline">{personalInfo.email}</a>
          </div>
        </div>
      )}
    </>
  )
}
