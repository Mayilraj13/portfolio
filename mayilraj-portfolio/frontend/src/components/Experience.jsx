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

const colorGlowMap = {
  purple: 'from-purple-50 via-indigo-50/60 to-neutral-50',
  green: 'from-emerald-50 via-teal-50/60 to-neutral-50',
  orange: 'from-amber-50 via-orange-50/60 to-neutral-50',
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const current = experience[activeIndex] || experience[0]

  const handleSelectExperience = (idx) => {
    setActiveIndex(idx)
    setIsExpanded(false)
  }

  return (
    <section id="experience" className="py-12 sm:py-16 bg-white text-neutral-900 relative scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight font-['Plus_Jakarta_Sans']">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Practical industry contributions across machine learning engineering, full-stack development, and embedded firmware.
          </p>
        </div>

        {/* Gallery Layout: Featured Visual + Thumbnail Picker (Left) & Details (Right) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left Column: Featured Showcase & Thumbnail Picker */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.05)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.company}-${current.role}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className={`relative p-6 sm:p-8 bg-gradient-to-br ${colorGlowMap[current.color] || colorGlowMap.purple}`}
                >
                  {/* Top Metadata Bar */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-indigo-700 border border-neutral-200">
                      0{activeIndex + 1} / 0{experience.length}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {current.type}
                    </span>
                  </div>

                  {/* Featured Company Visual / Logo */}
                  <div className="flex items-center justify-center py-6 sm:py-8">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white border border-neutral-200 flex items-center justify-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] overflow-hidden p-4">
                      {current.logo ? (
                        <img
                          src={current.logo}
                          alt={`${current.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-['Plus_Jakarta_Sans']">
                          {getCompanyInitials(current.company)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Featured Caption */}
                  <div className="text-center mt-2 mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans']">
                      {current.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      {current.period} · {current.location}
                    </p>
                  </div>

                  {/* Measured Results Strip */}
                  {current.metrics && current.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-neutral-200">
                      {current.metrics.map((metric, mi) => (
                        <div
                          key={mi}
                          className="p-2.5 rounded-xl bg-white border border-neutral-200 text-center"
                        >
                          <span className="block text-base sm:text-lg font-extrabold text-neutral-900 font-['Plus_Jakarta_Sans']">
                            {metric.value}
                          </span>
                          <span className="block text-[10px] text-neutral-500 leading-tight mt-0.5">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Picker */}
            <div className="grid grid-cols-5 gap-2.5">
              {experience.map((item, idx) => {
                const isSelected = idx === activeIndex
                return (
                  <button
                    key={`${item.company}-${item.role}`}
                    onClick={() => handleSelectExperience(idx)}
                    title={`${item.company} — ${item.role}`}
                    className={`group relative aspect-square rounded-2xl p-2 flex flex-col items-center justify-center border transition-all cursor-pointer overflow-hidden ${
                      isSelected
                        ? 'bg-white border-indigo-600 ring-2 ring-indigo-500/30 scale-[1.03] shadow-sm'
                        : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300 opacity-75 hover:opacity-100'
                    }`}
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                      />
                    ) : (
                      <span className="text-xs sm:text-sm font-bold text-indigo-600 font-['Plus_Jakarta_Sans']">
                        {getCompanyInitials(item.company)}
                      </span>
                    )}
                    <span className="mt-1 text-[9px] text-neutral-600 truncate w-full text-center font-medium">
                      {item.company.split(' ')[0]}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Selected Experience Summary & Expandable Details */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.04)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`details-${current.company}-${current.role}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 pb-5 border-b border-neutral-200">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 font-['Plus_Jakarta_Sans']">
                      {current.role}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-indigo-600 mt-1">
                      {current.company}
                    </p>
                  </div>
                  <div className="text-xs text-neutral-600 flex flex-col sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-neutral-200">
                      <i className="ri-calendar-event-line text-indigo-600" />
                      {current.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <i className="ri-map-pin-2-line text-indigo-600" />
                      {current.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mt-5">
                  {current.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pb-5 border-b border-neutral-200">
                  {current.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-white text-neutral-700 border border-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand Toggle (>) */}
                <button
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer font-['Plus_Jakarta_Sans']"
                >
                  <span
                    className={`w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-sm transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 bg-indigo-50 border-indigo-200' : ''
                    }`}
                  >
                    &gt;
                  </span>
                  <span>{isExpanded ? 'Hide Details' : 'View Responsibilities & Deliverables'}</span>
                </button>

                {/* Collapsible Responsibilities & Deliverables */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 pt-5 border-t border-neutral-200">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-bold text-indigo-600 mb-3 flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
                            <i className="ri-list-check text-sm" />
                            Core Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {current.responsibilities.map((resp, ri) => (
                              <li key={ri} className="flex items-start text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                <span className="text-indigo-600 mr-2 font-bold">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-600 mb-3 flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
                            <i className="ri-checkbox-circle-line text-sm" />
                            Key Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {current.achievements.map((ach, ai) => (
                              <li key={ai} className="flex items-start text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                <i className="ri-check-line text-emerald-600 mr-2 mt-0.5 flex-shrink-0 font-bold" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
