import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/portfolioData'

const getCompanyInitials = (name) => {
  if (!name) return ''
  const words = name.split(' ')
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(-1) // Closed by default, opens only when clicked

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <section id="experience" className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-[#0a0a0f] relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 block font-['Space_Grotesk']">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Space_Grotesk']">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Practical industry contributions across machine learning engineering, full-stack development, and embedded firmware.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 border-l-2 border-indigo-500/20 ml-3 sm:ml-auto">
          {experience.map((exp, i) => {
            const isExpanded = expandedIndex === i
            const initials = getCompanyInitials(exp.company)

            return (
              <div key={i} className="relative mb-12 sm:mb-16 last:mb-0">
                {/* Timeline Glowing Node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#12121c] border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                </div>

                {/* Experience Card */}
                <motion.div 
                  whileHover={{ y: -2 }}
                  onClick={() => toggleExpand(i)}
                  className="bg-[#12121c] rounded-2xl border border-white/10 hover:border-indigo-500/50 p-5 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(99,102,241,0.18)] cursor-pointer"
                >
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-4">
                      {/* Logo Badge */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#191928] border border-white/10 flex items-center justify-center font-extrabold text-indigo-400 text-lg sm:text-xl font-['Space_Grotesk'] flex-shrink-0 overflow-hidden shadow-inner">
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            className="w-full h-full object-contain p-1.5" 
                          />
                        ) : (
                          initials
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight font-['Space_Grotesk']">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-300 flex items-center gap-2 mt-1">
                          <span>{exp.company}</span>
                          <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                            {exp.type}
                          </span>
                        </h4>
                      </div>
                    </div>

                    {/* Metadata: Date & Location */}
                    <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs sm:text-sm text-gray-400 font-medium">
                      <div className="flex items-center gap-1.5 bg-[#181826] px-2.5 py-1 rounded-lg border border-white/[0.06]">
                        <i className="ri-calendar-event-line text-indigo-400"></i>
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <i className="ri-map-pin-2-line text-indigo-400"></i>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-4">
                    {exp.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                    {exp.tags.map((t, ti) => (
                      <span 
                        key={ti} 
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1a1a28] text-gray-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6 pt-5 border-t border-white/[0.08]"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Responsibilities */}
                          <div>
                            <h5 className="text-xs uppercase tracking-wider font-bold text-indigo-400 mb-3 flex items-center gap-1.5 font-['Space_Grotesk']">
                              <i className="ri-list-check text-sm"></i> Core Responsibilities
                            </h5>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, ri) => (
                                <li key={ri} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                                  <span className="text-indigo-400 mr-2 font-bold">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h5 className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-3 flex items-center gap-1.5 font-['Space_Grotesk']">
                              <i className="ri-checkbox-circle-line text-sm"></i> Key Engineering Deliverables
                            </h5>
                            <ul className="space-y-2">
                              {exp.achievements.map((ach, ai) => (
                                <li key={ai} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                                  <i className="ri-check-line text-emerald-400 mr-2 mt-0.5 flex-shrink-0 font-bold"></i>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Impact Metrics */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="mt-6 pt-4 border-t border-white/[0.06]">
                            <h5 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3 flex items-center gap-1.5 font-['Space_Grotesk']">
                              <i className="ri-bar-chart-box-line text-sm text-indigo-400"></i> Measured Results
                            </h5>
                            <div className="grid grid-cols-3 gap-3">
                              {exp.metrics.map((metric, mi) => (
                                <div 
                                  key={mi} 
                                  className="p-3.5 rounded-xl bg-[#181826] border border-white/[0.08] text-center"
                                >
                                  <span className="block text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
                                    {metric.value}
                                  </span>
                                  <span className="block text-[10px] sm:text-xs font-semibold text-gray-400 tracking-wider mt-0.5">
                                    {metric.label}
                                  </span>
                                </div>
                              ))}
                            </div>
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
                    <span>{isExpanded ? 'Collapse Details' : 'View Full Details & Metrics'}</span>
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
