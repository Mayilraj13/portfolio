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
    <div className="flex gap-2.5 text-left">
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-md mt-0.5 border border-indigo-200/70">
        <i className={`ri-${icon} text-xs`} />
      </div>
      <div>
        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">{label}</span>
        <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-indigo-300 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex flex-col"
    >
      {/* Media Banner - Show pictures in full without clipping */}
      <div className="relative w-full aspect-[16/10] bg-white overflow-hidden border-b border-neutral-200 flex items-center justify-center p-2.5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.dataset.fallback = 'true'
              e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
            }
          }}
        />

        {/* GitHub Quick Link in Image Top Right */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 hover:bg-indigo-600 text-neutral-700 hover:text-white border border-neutral-200 backdrop-blur-md flex items-center justify-center transition-colors shadow-sm"
          >
            <i className="ri-github-fill text-base" />
          </a>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1.5 leading-snug font-['Plus_Jakarta_Sans'] group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-neutral-600 mb-3 leading-relaxed line-clamp-2">
          {project.summary || project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags?.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white text-neutral-700 border border-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Key Features */}
        {project.features && (
          <div className="mb-4 pt-3 border-t border-neutral-200">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 font-['Plus_Jakarta_Sans']">
              Key Capabilities
            </p>
            <ul className="space-y-1">
              {project.features.slice(0, 2).map((f, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-neutral-700">
                  <i className="ri-check-line text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expandable Engineering Details */}
        {(project.why || project.problem || project.challenge) && (
          <div className="mb-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer py-0.5 font-['Plus_Jakarta_Sans']"
            >
              <i className={`ri-${expanded ? 'subtract' : 'add'}-circle-line text-sm`} />
              <span>{expanded ? 'Hide Details' : 'View Engineering Notes'}</span>
              <i className={`ri-arrow-${expanded ? 'up' : 'down'}-s-line text-xs`} />
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white rounded-xl p-3.5 mt-2 space-y-2.5 border border-neutral-200 overflow-hidden"
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
        <div className="mt-auto pt-3 border-t border-neutral-200 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-indigo-600 text-white transition-all cursor-pointer font-['Plus_Jakarta_Sans']"
          >
            <i className="ri-github-fill text-sm" />
            <span>Code</span>
          </a>

          <span className="text-[10px] text-neutral-500 font-mono">
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
    <section id="projects" className="py-12 sm:py-16 bg-white text-neutral-900 relative scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight font-['Plus_Jakarta_Sans']">
            Engineered Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
            Production-grade full-stack architectures, real-time AI pipelines, and embedded control systems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none font-['Plus_Jakarta_Sans'] ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-[0_6px_18px_rgba(79,70,229,0.28)] border border-indigo-600'
                      : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
