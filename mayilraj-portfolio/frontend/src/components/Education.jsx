import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education } from '../data/portfolioData'

const colorMap = {
  blue: {
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    ring: 'text-indigo-400',
    node: 'border-indigo-500 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]',
  },
  green: {
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    ring: 'text-emerald-400',
    node: 'border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]',
  },
  orange: {
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    ring: 'text-amber-400',
    node: 'border-amber-500 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]',
  },
}

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState(-1) // Closed by default, opens only when clicked

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <section id="education" className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-[#0a0a0f] relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 block font-['Space_Grotesk']">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Space_Grotesk']">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Formal engineering foundations, specialized coursework, and distinction awards.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 border-l-2 border-indigo-500/20 ml-3 sm:ml-auto">
          {education.map((edu, i) => {
            const c = colorMap[edu.color] || colorMap.blue
            const isExpanded = expandedIndex === i
            const isBTech = edu.degree.includes('Bachelor')

            return (
              <div key={i} className="relative mb-12 sm:mb-16 last:mb-0">
                {/* Timeline Node */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#12121c] border-2 ${c.node} flex items-center justify-center`}>
                  <i className={`ri-${edu.icon} text-sm sm:text-base`}></i>
                </div>

                {/* Card Container */}
                <motion.div 
                  whileHover={{ y: -2 }}
                  onClick={() => toggleExpand(i)}
                  className={`bg-[#12121c] rounded-2xl border ${
                    isBTech ? 'border-indigo-500/40 shadow-[0_8px_30px_rgba(99,102,241,0.15)]' : 'border-white/10'
                  } hover:border-indigo-500/60 p-5 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(99,102,241,0.18)] cursor-pointer`}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight font-['Space_Grotesk']">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm sm:text-base font-semibold text-indigo-300 mt-1">
                        {edu.specialization}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">
                        {edu.school}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {edu.university}
                      </p>
                    </div>

                    {/* CGPA Badge & Progress Ring / Tag */}
                    <div className="flex sm:flex-col items-start sm:items-end gap-2.5 flex-shrink-0">
                      <span className="text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-medium bg-[#191928] text-gray-300 border border-white/[0.06] flex items-center gap-1.5 font-['Space_Grotesk']">
                        <i className="ri-calendar-line text-indigo-400"></i> {edu.period}
                      </span>
                      
                      {/* Styled CGPA Score Badge */}
                      <div className={`px-3 py-1.5 rounded-xl border font-bold flex items-center gap-2 ${c.badge} font-['Space_Grotesk'] shadow-sm`}>
                        <i className="ri-award-line text-sm"></i>
                        <span className="text-xs sm:text-sm">{edu.score.label}: {edu.score.value}</span>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-5 pt-4 border-t border-white/[0.06]"
                      >
                        {/* Coursework Skill Badges */}
                        <div>
                          <h5 className="text-[11px] uppercase tracking-wider font-bold text-indigo-400 mb-2.5 font-['Space_Grotesk']">
                            Relevant Coursework
                          </h5>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {edu.coursework.map((course, ci) => (
                              <span 
                                key={ci} 
                                className="bg-[#181826] text-gray-300 border border-white/[0.06] px-2.5 py-1 rounded-lg text-xs font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Academic Highlights */}
                        <div className="mt-5">
                          <h5 className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 mb-2.5 font-['Space_Grotesk']">
                            Academic Highlights
                          </h5>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, hi) => (
                              <li key={hi} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                                <i className="ri-check-line text-emerald-400 mr-2 mt-0.5 flex-shrink-0 font-bold"></i>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Project Box */}
                        {edu.project && (
                          <div className="mt-5 p-4 rounded-xl bg-[#181826] border border-white/[0.08]">
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-gray-400 font-['Space_Grotesk']">
                                <i className="ri-folder-line text-indigo-400"></i> Major Academic Project
                              </span>
                              {edu.project.github && (
                                <a
                                  href={edu.project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <i className="ri-github-fill text-sm"></i> GitHub
                                </a>
                              )}
                            </div>
                            <h6 className="text-xs sm:text-sm font-bold text-white mb-1 font-['Space_Grotesk']">
                              {edu.project.title}
                            </h6>
                            <p className="text-xs sm:text-sm text-gray-400 leading-normal">
                              {edu.project.description}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleExpand(i); }}
                    className="w-full text-center mt-4 text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 font-semibold flex items-center justify-center gap-1 cursor-pointer pt-3 border-t border-white/[0.04] font-['Space_Grotesk']"
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'View Coursework & Highlights'}</span>
                    <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line text-base`}></i>
                  </button>
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
