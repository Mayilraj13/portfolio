import { useState } from 'react'
import { experience } from '../data/portfolioData'

const colorMap = {
  green: {
    text: 'text-green-700',
    iconBg: 'bg-green-500/10',
    tag: 'bg-green-50 text-green-700 border-green-200',
    badge: 'bg-green-100 text-green-800',
    metricBg: 'bg-green-50 border-green-100',
    accent: 'border-green-500'
  },
  blue: {
    text: 'text-blue-700',
    iconBg: 'bg-blue-500/10',
    tag: 'bg-blue-50 text-blue-700 border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
    metricBg: 'bg-blue-50 border-blue-100',
    accent: 'border-blue-500'
  },
  purple: {
    text: 'text-purple-700',
    iconBg: 'bg-purple-500/10',
    tag: 'bg-purple-50 text-purple-700 border-purple-200',
    badge: 'bg-purple-100 text-purple-800',
    metricBg: 'bg-purple-50 border-purple-100',
    accent: 'border-purple-500'
  },
  orange: {
    text: 'text-orange-700',
    iconBg: 'bg-orange-500/10',
    tag: 'bg-orange-50 text-orange-700 border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
    metricBg: 'bg-orange-50 border-orange-100',
    accent: 'border-orange-500'
  },
}

// Function to generate company initials for placeholder logo
const getCompanyInitials = (name) => {
  if (!name) return ''
  const words = name.split(' ')
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(-1) // All closed by default

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <section id="experience" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Professional Experience</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey, internships, and measurable achievements in industry environments.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {experience.map((exp, i) => {
            const c = colorMap[exp.color] || colorMap.blue
            const isExpanded = expandedIndex === i
            const initials = getCompanyInitials(exp.company)

            return (
              <div 
                key={i} 
                onClick={() => toggleExpand(i)}
                className={`bg-white rounded-2xl shadow-md hover:shadow-xl border-l-4 ${c.accent} border border-gray-100 p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    {/* Stylized Logo Badge */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-extrabold text-lg sm:text-2xl shadow-sm ${exp.logo ? 'bg-white border-gray-200' : `${c.iconBg} ${c.text}`} border flex-shrink-0 overflow-hidden`}>
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className={`w-full h-full ${exp.company.includes('Apollo') ? 'object-contain p-2' : exp.company.includes('Hapus') ? 'object-contain p-0.5' : 'object-cover'}`} 
                        />
                      ) : (
                        initials
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-[#2D5A87] leading-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm sm:text-lg font-semibold text-gray-700 flex items-center gap-2 mt-0.5">
                        {exp.company}
                        <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold ${c.badge}`}>
                          {exp.type}
                        </span>
                      </h4>
                    </div>
                  </div>
                  
                  {/* Meta Details: Duration & Location */}
                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 sm:gap-1 text-gray-500 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 font-medium">
                      <i className="ri-calendar-event-line text-[#2D5A87]"></i>
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <i className="ri-map-pin-2-line text-[#2D5A87]"></i>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Short Summary Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                  {exp.description}
                </p>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                  {exp.tags.map((t, ti) => (
                    <span 
                      key={ti} 
                      className={`px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold border ${c.tag} transition-transform duration-200 hover:scale-105`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Collapsible Section for Responsibilities, Achievements, and Metrics */}
                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6 pt-4 border-t border-dashed border-gray-200' : 'max-h-0 opacity-0'}`}>
                  
                  {/* Two-Column Grid: Responsibilities & Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div>
                      <h5 className="text-xs uppercase tracking-wider font-bold text-[#2D5A87] mb-3 flex items-center gap-1">
                        <i className="ri-list-check"></i> Core Responsibilities
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        {exp.responsibilities.map((resp, ri) => (
                          <li key={ri} className="flex items-start text-xs sm:text-sm leading-relaxed">
                            <span className="text-[#2D5A87] mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-xs uppercase tracking-wider font-bold text-[#2D5A87] mb-3 flex items-center gap-1">
                        <i className="ri-checkbox-circle-line"></i> Key Achievements
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        {exp.achievements.map((ach, ai) => (
                          <li key={ai} className="flex items-start text-xs sm:text-sm leading-relaxed">
                            <i className="ri-check-line text-green-600 mr-2 mt-0.5 flex-shrink-0 font-bold"></i>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Impact Metrics Grid */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="mt-6">
                      <h5 className="text-xs uppercase tracking-wider font-bold text-[#2D5A87] mb-3 flex items-center gap-1">
                        <i className="ri-bar-chart-box-line"></i> Measurable Business Impact
                      </h5>
                      <div className="grid grid-cols-3 gap-3">
                        {exp.metrics.map((metric, mi) => (
                          <div 
                            key={mi} 
                            className={`p-3 rounded-xl border text-center transition-all duration-300 hover:shadow-sm ${c.metricBg}`}
                          >
                            <span className="block text-lg sm:text-2xl font-extrabold text-[#2D5A87] tracking-tight">
                              {metric.value}
                            </span>
                            <span className="block text-[9px] sm:text-2xs uppercase font-bold text-gray-500 tracking-wider mt-0.5 leading-none">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Expand / Collapse Button Toggle */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleExpand(i); }}
                  className="w-full text-center mt-4 text-xs sm:text-sm text-[#2D5A87] hover:text-[#2D5A87]/80 font-bold flex items-center justify-center gap-1 cursor-pointer pt-2 border-t border-gray-50"
                >
                  <span>{isExpanded ? 'Collapse Details' : 'View Full Details & Metrics'}</span>
                  <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line text-base`}></i>
                </button>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
