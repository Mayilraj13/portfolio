import { motion } from 'framer-motion'
import { personalInfo, patent } from '../data/portfolioData'

const techBadges = [
  { label: 'React', border: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20' },
  { label: 'Node.js', border: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
  { label: 'MongoDB', border: 'border-green-500/30 text-green-400 bg-green-950/20' },
  { label: 'Express.js', border: 'border-gray-500/30 text-gray-300 bg-gray-900/40' },
  { label: 'Python', border: 'border-amber-500/30 text-amber-400 bg-amber-950/20' },
  { label: 'Django', border: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 overflow-hidden bg-[#0a0a0f]">
      {/* ── Background: Subtle Gradient Mesh & Dot Matrix ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Radial Ambient Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[10%] left-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/10 blur-[130px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-500/20 to-cyan-500/10 blur-[140px]" 
        />

        {/* Subtle Tech Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Soft bottom fade to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* ── LEFT: Hero Content ── */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex-1 text-center lg:text-left"
            >
              {/* Trust Signal Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
                {/* Patent Badge Chip (Major Differentiator) */}
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  onClick={() => scrollTo('about')}
                  className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-indigo-500/15 to-purple-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:border-amber-400/60 transition-colors"
                >
                  <span className="text-sm">🏆</span>
                  <span className="font-semibold text-white">Patent Published:</span>
                  <span className="text-amber-300/90 font-mono text-[11px] sm:text-xs">IriSafe</span>
                </motion.div>

                {/* Availability status */}
                <div className="inline-flex items-center gap-2 bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open to Full-Time SDE / AI Roles
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight font-['Space_Grotesk'] leading-[1.12]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Professional Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-400/90 mb-5 font-['Space_Grotesk'] tracking-wide">
                {personalInfo.title}
              </h2>

              {/* Value Proposition */}
              <p className="text-base sm:text-lg text-gray-300/90 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Co-inventor of a published Indian Patent, building{' '}
                <span className="text-white font-semibold">scalable full-stack web applications</span> and{' '}
                <span className="text-indigo-300 font-semibold">intelligent AI / IoT systems</span> — backed by 3 internships across Ibee Analytics, Hapus Infotech &amp; Biglearn.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                {techBadges.map(({ label, border }) => (
                  <span 
                    key={label} 
                    className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-200 hover:scale-105 ${border}`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                {/* Primary CTA: View Projects */}
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(99, 102, 241, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo('projects')}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.35)] cursor-pointer text-sm sm:text-base font-['Space_Grotesk']"
                >
                  <i className="ri-folder-open-line text-lg" />
                  <span>View Projects</span>
                </motion.button>

                {/* Secondary CTA: Download Resume */}
                <motion.a
                  whileHover={{ scale: 1.04, borderColor: 'rgba(99, 102, 241, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                  href={personalInfo.resume}
                  download="MAYILRAJ_R_Resume"
                  className="inline-flex items-center gap-2 bg-[#12121c]/80 hover:bg-[#191928] text-gray-200 hover:text-white border border-white/10 hover:border-indigo-500/50 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm sm:text-base font-['Space_Grotesk'] cursor-pointer backdrop-blur-md"
                >
                  <i className="ri-file-download-line text-lg text-indigo-400" />
                  <span>Download Resume</span>
                </motion.a>

                {/* Social Quick Links */}
                <div className="flex items-center gap-2 pl-2">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors shadow-sm"
                    aria-label="Send Email"
                    title={`Email: ${personalInfo.email}`}
                  >
                    <i className="ri-mail-line text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors shadow-sm"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <i className="ri-github-fill text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#12121c] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#0077b5] hover:border-indigo-500/50 transition-colors shadow-sm"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <i className="ri-linkedin-fill text-xl" />
                  </motion.a>
                </div>
              </div>

              {/* Scroll Down Indicator */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => scrollTo('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 hover:text-indigo-400 transition-colors font-medium group cursor-pointer"
                >
                  <i className="ri-arrow-down-line group-hover:translate-y-1 transition-transform" />
                  <span>Scroll to explore</span>
                </button>
              </div>
            </motion.div>

            {/* ── RIGHT: Profile Photo with Glowing Accent Frame ── */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="flex-shrink-0 flex justify-center"
            >
              <div className="relative group">
                {/* Glowing Outer Halo */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 opacity-40 blur-2xl group-hover:opacity-60 transition duration-500 animate-pulse" />
                
                {/* Outer Ring */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-b from-indigo-500/40 via-white/10 to-transparent shadow-[0_0_50px_rgba(99,102,241,0.25)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#12121c] border-2 border-white/10">
                    <img
                      src={personalInfo.photo}
                      alt={`${personalInfo.name} — AI Full-Stack Developer`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.parentElement.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center bg-indigo-950/40 text-indigo-400 text-5xl font-bold font-[\'Space_Grotesk\']">MR</div>'
                      }}
                    />
                  </div>
                </div>

                {/* Floating Experience Chip */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-2 -left-2 sm:bottom-2 sm:-left-4 bg-[#12121c]/95 border border-white/15 px-3.5 py-2 rounded-2xl backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.5)] flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <i className="ri-briefcase-4-line text-base"></i>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white font-['Space_Grotesk']">3 Internships</div>
                    <div className="text-[10px] text-gray-400">SDE &amp; Web Dev</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
