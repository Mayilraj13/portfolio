import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#07070b] border-t border-white/[0.06] text-white py-5 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Brand */}
          <div className="text-center sm:text-left flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-black border border-white/15 overflow-hidden p-0.5 flex items-center justify-center shadow-inner">
              <img src="/mr-logo.png" alt="Mayilraj R Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-base font-bold text-white hover:text-indigo-400 transition-colors font-['Plus_Jakarta_Sans']"
              >
                {personalInfo.name}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-base"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-indigo-500/50 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-base"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
              aria-label="Email via Gmail"
            >
              <i className="ri-mail-fill text-base"></i>
            </motion.a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] mt-4 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer group font-['Plus_Jakarta_Sans']"
          >
            <span>Back to Top</span>
            <i className="ri-arrow-up-line group-hover:-translate-y-0.5 transition-transform"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}
