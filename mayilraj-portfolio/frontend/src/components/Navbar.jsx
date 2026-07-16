import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

const navItems = ['About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id')
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl sm:text-2xl font-bold text-[#2D5A87] hover:text-[#2D5A87]/80 transition-colors"
            style={{ fontFamily: "'Pacifico', cursive" }}>
            Mayilraj
          </button>
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className={`transition-colors text-xs lg:text-sm font-medium ${active === item.toLowerCase() ? 'text-[#2D5A87] font-semibold' : 'text-[#4A4A4A] hover:text-[#2D5A87]'}`}>
                {item}
              </button>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(true)} className="md:hidden w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#2D5A87] transition-colors" aria-label="Open menu">
            <i className="ri-menu-line ri-lg"></i>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col pt-20 px-4 sm:px-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#2D5A87] transition-colors" aria-label="Close menu">
            <i className="ri-close-line ri-lg"></i>
          </button>
          <nav className="flex flex-col space-y-2">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className="text-left text-base sm:text-lg text-[#4A4A4A] hover:text-[#2D5A87] transition-colors py-3 border-b border-gray-100">
                {item}
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
