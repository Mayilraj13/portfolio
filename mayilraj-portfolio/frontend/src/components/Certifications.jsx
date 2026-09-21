import { motion } from 'framer-motion'
import { certifications } from '../data/portfolioData'

const colorMap = {
  green:  { text: 'text-emerald-400', iconBg: 'bg-emerald-500/10 border-emerald-500/20', badge: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/20' },
  blue:   { text: 'text-cyan-400',    iconBg: 'bg-cyan-500/10 border-cyan-500/20',    badge: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/20' },
  yellow: { text: 'text-amber-400',   iconBg: 'bg-amber-500/10 border-amber-500/20',  badge: 'bg-amber-950/40 text-amber-300 border-amber-500/20' },
  purple: { text: 'text-purple-400',  iconBg: 'bg-purple-500/10 border-purple-500/20', badge: 'bg-purple-950/40 text-purple-300 border-purple-500/20' },
  orange: { text: 'text-orange-400',  iconBg: 'bg-orange-500/10 border-orange-500/20', badge: 'bg-orange-950/40 text-orange-300 border-orange-500/20' },
  indigo: { text: 'text-indigo-400',  iconBg: 'bg-indigo-500/10 border-indigo-500/20', badge: 'bg-indigo-950/40 text-indigo-300 border-indigo-500/20' },
  red:    { text: 'text-rose-400',    iconBg: 'bg-rose-500/10 border-rose-500/20',    badge: 'bg-rose-950/40 text-rose-300 border-rose-500/20' },
}

const getOrgInitials = (name) => {
  if (!name) return ''
  const words = name.split(' ')
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

function CertCard({ cert }) {
  const c = colorMap[cert.color] || colorMap.indigo
  const initials = getOrgInitials(cert.issuer)

  return (
    <motion.div 
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-[#12121c] rounded-2xl border border-white/10 hover:border-indigo-500/50 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(99,102,241,0.18)] flex flex-col justify-between h-full group"
    >
      <div>
        {/* Top Header Row with Logo Badge */}
        <div className="flex items-start gap-3.5 mb-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm ${c.iconBg} ${c.text} border flex-shrink-0 font-['Space_Grotesk'] shadow-inner`}>
            {initials}
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white leading-tight mb-1 font-['Space_Grotesk'] group-hover:text-indigo-300 transition-colors">
              {cert.title}
            </h4>
            <p className="text-xs text-gray-400 font-medium">{cert.issuer}</p>
          </div>
        </div>

        {/* Date & Credential ID */}
        <div className="flex flex-wrap gap-2 text-[11px] text-gray-400 font-medium mb-4">
          <span className="bg-[#181826] px-2.5 py-0.5 rounded-md border border-white/[0.06] flex items-center gap-1">
            <i className="ri-calendar-line text-indigo-400" /> {cert.date}
          </span>
          {cert.credentialId && (
            <span className="bg-[#181826] px-2.5 py-0.5 rounded-md border border-white/[0.06] font-mono text-[10px] text-gray-400">
              ID: {cert.credentialId}
            </span>
          )}
        </div>

        {/* Skills Covered (Badges) */}
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-2 font-['Space_Grotesk']">
            Key Competencies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((skill, si) => (
              <span 
                key={si} 
                className="text-[10px] bg-[#1a1a28] text-gray-300 px-2 py-0.5 rounded-md border border-white/[0.06] font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Verify Action Button */}
      <div className="mt-4 pt-3 border-t border-white/[0.06]">
        <a 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 transition-all cursor-pointer font-['Space_Grotesk']"
        >
          <span>Verify Credential</span>
          <i className="ri-external-link-line text-xs" />
        </a>
      </div>
    </motion.div>
  )
}

function CertSection({ title, icon, color, items }) {
  if (!items || items.length === 0) return null
  const c = colorMap[color] || colorMap.indigo

  return (
    <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
      <div className="flex items-center mb-6">
        <div className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center ${c.iconBg} border rounded-xl mr-3 ${c.text}`}>
          <i className={`ri-${icon} text-lg`}></i>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {items.map((cert, i) => (
          <CertCard key={i} cert={cert} />
        ))}
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-[#0a0a0f] relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 block font-['Space_Grotesk']">
            Credentials &amp; Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Space_Grotesk']">
            Professional Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Verified industry credentials spanning Full-Stack Web, AI/ML, Cloud Infrastructure, and Embedded Systems.
          </p>
        </div>

        <CertSection title="Programming &amp; Algorithms" icon="code-s-slash-line" color="blue" items={certifications.programming} />
        <CertSection title="Full-Stack Web Development" icon="stack-line" color="green" items={certifications.webDevelopment} />
        <CertSection title="Cloud Infrastructure &amp; Security" icon="cloud-line" color="indigo" items={certifications.cloud} />
        <CertSection title="Artificial Intelligence &amp; Deep Learning" icon="robot-line" color="purple" items={certifications.artificialIntelligence} />
        <CertSection title="Data Science &amp; Analytics" icon="database-2-line" color="blue" items={certifications.dataScience} />
        <CertSection title="Embedded Systems &amp; IoT" icon="wifi-line" color="orange" items={certifications.embeddedSystems} />

      </div>
    </section>
  )
}
