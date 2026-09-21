import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolioData'

const filterCategories = ['All', 'AI & ML', 'Full-Stack', 'IoT & Embedded']

function categorizeProject(p) {
  const allText = (p.title + ' ' + (p.tags || []).join(' ') + ' ' + (p.summary || '')).toLowerCase()
  const cats = ['All']
  if (allText.includes('ai') || allText.includes('ml') || allText.includes('whisper') || allText.includes('mediapipe') || allText.includes('yolo') || allText.includes('detection')) {
    cats.push('AI & ML')
  }
  if (allText.includes('react') || allText.includes('django') || allText.includes('flask') || allText.includes('full-stack') || allText.includes('web') || allText.includes('node')) {
    cats.push('Full-Stack')
  }
  if (allText.includes('iot') || allText.includes('embedded') || allText.includes('arduino') || allText.includes('esp32') || allText.includes('sensor') || allText.includes('c/c++')) {
    cats.push('IoT & Embedded')
  }
  return cats
}

function DetailRow({ icon, label, text }) {
  return (
    <div className="flex gap-3 text-left">
      <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-indigo-500/15 text-indigo-400 rounded-lg mt-0.5 border border-indigo-500/20">
        <i className={`ri-${icon} text-sm`} />
      </div>
      <div>
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider font-['Space_Grotesk']">{label}</span>
        <p className="text-xs sm:text-sm text-gray-300 mt-0.5 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function ProjectCard({ project, isFeatured = false }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`group rounded-2xl bg-[#12121c] border border-white/10 hover:border-indigo-500/50 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)] flex flex-col ${
        isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Media Banner */}
      <div className={`relative overflow-hidden ${isFeatured ? 'h-64 sm:h-72' : 'h-52 sm:h-56'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.dataset.fallback = 'true'
              e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12121c] via-[#12121c]/40 to-transparent" />

        {/* Featured / Hero Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-semibold backdrop-blur-md shadow-lg font-['Space_Grotesk']">
            <span>⭐ Featured Build</span>
          </div>
        )}

        {/* GitHub Quick Link in Image Top Right */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#0a0a0f]/80 hover:bg-indigo-600 text-gray-300 hover:text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-colors shadow-md"
          >
            <i className="ri-github-fill text-lg" />
          </a>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight font-['Space_Grotesk'] group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
          {project.summary || project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags?.map((t) => (
            <span 
              key={t} 
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1a1a28] text-gray-300 border border-white/[0.08]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Key Features */}
        {project.features && (
          <div className="mb-5 pt-4 border-t border-white/[0.06]">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 font-['Space_Grotesk']">
              Key Capabilities
            </p>
            <ul className="space-y-1.5">
              {project.features.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <i className="ri-check-line text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expandable Engineering Details */}
        {(project.why || project.problem || project.challenge) && (
          <div className="mb-5">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer py-1 font-['Space_Grotesk']"
            >
              <i className={`ri-${expanded ? 'subtract' : 'add'}-circle-line text-base`} />
              <span>{expanded ? 'Hide Engineering Deep-Dive' : 'View Engineering Process'}</span>
              <i className={`ri-arrow-${expanded ? 'up' : 'down'}-s-line`} />
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-[#181826] rounded-xl p-4 mt-3 space-y-3 border border-white/10 overflow-hidden"
                >
                  {project.why && <DetailRow icon="question-line" label="Why I Built It" text={project.why} />}
                  {project.problem && <DetailRow icon="error-warning-line" label="Problem Solved" text={project.problem} />}
                  {project.challenge && <DetailRow icon="flashlight-line" label="Engineering Hurdle" text={project.challenge} />}
                  {project.learned && <DetailRow icon="lightbulb-line" label="Key Takeaway" text={project.learned} />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#1a1a28] hover:bg-indigo-600 text-white border border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer font-['Space_Grotesk']"
          >
            <i className="ri-github-fill text-base" />
            <span>Source Code</span>
          </a>

          <span className="text-[11px] text-gray-500 font-mono">
            {project.tags?.[0] || 'Software'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects
    return projects.filter((p) => categorizeProject(p).includes(selectedFilter))
  }, [selectedFilter])

  return (
    <section id="projects" className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-[#0a0a0f] relative scroll-mt-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 block font-['Space_Grotesk']">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Space_Grotesk']">
            Engineered Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Production-grade full-stack architectures, real-time AI pipelines, and embedded control systems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none font-['Space_Grotesk'] ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-indigo-400/50'
                      : 'bg-[#141422] text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((p, idx) => {
            // Feature Gestura as first card
            const isHero = p.title.toLowerCase().includes('gestura') || idx === 0
            return (
              <ProjectCard 
                key={p.title} 
                project={p} 
                isFeatured={isHero && selectedFilter === 'All'} 
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}
