import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#07070b] border-t border-white/[0.06] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Title */}
          <div className="text-center md:text-left flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black border border-white/15 overflow-hidden p-0.5 flex items-center justify-center shadow-inner">
              <img src="/mr-logo.png" alt="Mayilraj R Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-lg font-bold text-white hover:text-indigo-400 transition-colors font-['Space_Grotesk']"
              >
                {personalInfo.name}
              </a>
              <p className="text-gray-400 text-xs">{personalInfo.title}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-lg"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-indigo-500/50 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-lg"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
              aria-label="Email via Gmail"
            >
              <i className="ri-mail-fill text-lg"></i>
            </motion.a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
          <p className="text-gray-500 text-[11px]">
            Designed &amp; Engineered with React 19, Vite, Tailwind CSS &amp; Framer Motion
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer group font-['Space_Grotesk']"
          >
            <span>Back to Top</span>
            <i className="ri-arrow-up-line group-hover:-translate-y-0.5 transition-transform"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}
