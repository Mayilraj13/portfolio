import { motion } from 'framer-motion'
import { personalInfo, patent } from '../data/portfolioData'

const identityCards = [
  {
    id: 'background',
    icon: 'ri-user-3-line',
    iconColor: 'text-indigo-400',
    title: 'Background & Track Record',
    body: (
      <>
        Software Engineering student specializing in full-stack development and applied AI. Built real-world production systems through{' '}
        <span className="text-white font-semibold">3 industry internships</span> at{' '}
        <span className="text-indigo-300 font-semibold">Ibee Analytics</span> (SDE Intern),{' '}
        <span className="text-indigo-300 font-semibold">Hapus Infotech</span> (Web Developer Intern), and{' '}
        <span className="text-indigo-300 font-semibold">Biglearn</span> (IoT Intern).
      </>
    ),
  },
  {
    id: 'interests',
    icon: 'ri-code-s-slash-line',
    iconColor: 'text-purple-400',
    title: 'Technical Focus',
    body: (
      <>
        Passionate about <span className="text-white font-semibold">AI-augmented full-stack engineering</span> and intelligent systems — designing scalable REST APIs, reactive client frontends, computer vision pipelines, and integrating ML models into production.
      </>
    ),
  },
  {
    id: 'problems',
    icon: 'ri-brain-line',
    iconColor: 'text-emerald-400',
    title: 'Problems I Enjoy Solving',
    body: (
      <>
        Transforming complex algorithmic requirements into patented innovations and tangible products — from our{' '}
        <span className="text-amber-300 font-semibold">IriSafe Patent</span> (AI biometric safety wearable) to real-time sign language recognition with <span className="text-white font-semibold">Gestura</span>.
      </>
    ),
  },
  {
    id: 'role',
    icon: 'ri-briefcase-4-line',
    iconColor: 'text-cyan-400',
    title: 'What I Am Looking For',
    body: (
      <>
        Seeking a <span className="text-white font-semibold">Software Developer</span> or{' '}
        <span className="text-indigo-300 font-semibold">AI Full-Stack Engineer</span> role where I can architect high-impact software, work with forward-thinking engineering teams, and deliver immediate value from day one.
      </>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-[#0a0a0f] relative overflow-hidden scroll-mt-20">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 block font-['Space_Grotesk']">
            Engineering Profile
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Innovator, full-stack engineer, and patent co-inventor dedicated to building high-leverage software.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-10">

          {/* ── FEATURED PATENT CARD ── */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121220] via-[#16162a] to-[#12121c] text-white p-6 sm:p-9 shadow-[0_16px_40px_rgba(0,0,0,0.6)] border border-amber-500/30"
          >
            {/* Ambient Corner Highlights */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Patent Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm font-['Space_Grotesk']">
                  <span className="text-base">🏆</span>
                  <span>Indian Patent Published • Govt. of India</span>
                </div>
                <span className="text-xs text-indigo-300 font-mono bg-indigo-950/50 px-3 py-1 rounded-md border border-indigo-500/30">
                  App No: {patent.applicationNumber}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3 font-['Space_Grotesk']">
                {patent.title}
              </h3>

              {/* Brief Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {patent.description}
              </p>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl bg-[#0a0a0f]/60 backdrop-blur-md border border-white/10 mb-6 text-xs sm:text-sm">
                <div>
                  <span className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold font-['Space_Grotesk']">Publication Date</span>
                  <span className="font-semibold text-white">{patent.publicationDate}</span>
                  <span className="block text-[11px] text-gray-400">(No. {patent.publicationNumber})</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold font-['Space_Grotesk']">Filing Date</span>
                  <span className="font-semibold text-white">{patent.filingDate}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold font-['Space_Grotesk']">Field of Invention</span>
                  <span className="font-semibold text-amber-300">{patent.field}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold font-['Space_Grotesk']">Authority</span>
                  <span className="font-semibold text-white truncate block">IP India (Govt. of India)</span>
                </div>
              </div>

              {/* Inventors & Tech Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/[0.08] text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <i className="ri-team-line text-indigo-400 text-base" />
                  <span className="text-gray-300">
                    <strong className="text-white font-semibold">Inventors:</strong> Dr. R. Jayamala, <span className="text-amber-300 font-bold underline underline-offset-2">Mayilraj R</span>, Aishwarya K. S
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Iris Biometrics', 'AI Threat Intelligence', 'Blockchain Security'].map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-medium font-['Space_Grotesk']">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Identity Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {identityCards.map(({ id, icon, iconColor, title, body }) => (
              <motion.div
                key={id}
                whileHover={{ y: -3 }}
                className="bg-[#12121c] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-indigo-500/50 shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 flex items-center justify-center bg-indigo-500/15 border border-indigo-500/20 rounded-xl">
                      <i className={`${icon} ${iconColor} text-lg`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">{title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {personalInfo.stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.03 }}
                className="text-center p-5 rounded-2xl bg-[#12121c] border border-white/10 hover:border-indigo-500/40 shadow-sm transition-all"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-['Space_Grotesk'] mb-1">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium font-['Space_Grotesk']">{s.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
