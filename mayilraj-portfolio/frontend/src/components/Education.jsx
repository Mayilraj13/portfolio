import { useState } from 'react'
import { education } from '../data/portfolioData'

const colorMap = {
  blue: {
    text: 'text-blue-700',
    iconBg: 'bg-blue-500/10',
    tag: 'bg-blue-50 text-blue-700 border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
    accent: 'border-blue-500',
    markerBg: 'bg-blue-50'
  },
  green: {
    text: 'text-green-700',
    iconBg: 'bg-green-500/10',
    tag: 'bg-green-50 text-green-700 border-green-200',
    badge: 'bg-green-100 text-green-800',
    accent: 'border-green-500',
    markerBg: 'bg-green-50'
  },
  orange: {
    text: 'text-orange-700',
    iconBg: 'bg-orange-500/10',
    tag: 'bg-orange-50 text-orange-700 border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
    accent: 'border-orange-500',
    markerBg: 'bg-orange-50'
  }
}

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState(-1) // All closed by default

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <section id="education" className="py-14 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Education</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            My academic foundation, specializations, and relevant coursework.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto border-l-2 border-gray-200 pl-6 sm:pl-10 ml-4 sm:ml-auto">
          {education.map((edu, i) => {
            const c = colorMap[edu.color] || colorMap.blue
            const isBTech = edu.degree.includes('Bachelor')
            const isExpanded = expandedIndex === i

            return (
              <div key={i} className="relative mb-12 sm:mb-16 last:mb-0">
                {/* Timeline Circle Node with Icon */}
                <span className={`absolute -left-[45px] sm:-left-[61px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-gray-50 flex items-center justify-center shadow-md ${c.markerBg} ${c.text}`}>
                  <i className={`ri-${edu.icon} text-lg sm:text-xl`}></i>
                </span>

                {/* Card Container */}
                <div 
                  onClick={() => toggleExpand(i)}
                  className={`bg-white rounded-2xl shadow-md hover:shadow-xl border-l-4 ${c.accent} ${isBTech ? 'border-2 border-[#2D5A87]' : 'border border-gray-100'} p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                >
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-gray-100">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-[#2D5A87] leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm sm:text-lg font-semibold text-gray-700 mt-0.5">
                        {edu.specialization}
                      </h4>
                      <p className="text-sm font-medium text-[#4A4A4A] mt-1.5 leading-snug">
                        {edu.school}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">
                        {edu.university}
                      </p>
                    </div>

                    {/* Score & Duration Badges */}
                    <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1.5 mt-2 sm:mt-0">
                      <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-extrabold bg-gray-100 text-gray-700 flex items-center gap-1">
                        <i className="ri-calendar-line"></i> {edu.period}
                      </span>
                      <span className={`text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-extrabold ${c.badge} flex items-center gap-1`}>
                        <i className="ri-book-open-line"></i> {edu.score.label}: {edu.score.value}
                      </span>
                    </div>
                  </div>

                  {/* Collapsible Content Section */}
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[800px] opacity-100 mt-5 pt-4 border-t border-dashed border-gray-200' : 'max-h-0 opacity-0'}`}>
                    
                    {/* Coursework Skill Badges */}
                    <div>
                      <h5 className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#2D5A87] mb-2">
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {edu.coursework.map((course, ci) => (
                          <span 
                            key={ci} 
                            className="bg-gray-50 text-gray-600 border border-gray-100 px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold hover:border-gray-300 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Academic Highlights */}
                    <div className="mt-5">
                      <h5 className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#2D5A87] mb-2.5">
                        Academic Highlights
                      </h5>
                      <ul className="space-y-2 text-gray-600">
                        {edu.highlights.map((highlight, hi) => (
                          <li key={hi} className="flex items-start text-xs sm:text-sm leading-relaxed">
                            <i className="ri-check-line text-green-600 mr-2 mt-0.5 flex-shrink-0 font-bold"></i>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Major Project Box (Optional) */}
                    {edu.project && (
                      <div className="mt-5 p-4 bg-gray-50 border border-gray-100 rounded-xl">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-2xs uppercase tracking-wider font-bold text-gray-400">
                            <i className="ri-folder-line text-[#2D5A87]"></i> Major Project
                          </span>
                          {edu.project.github && (
                            <a
                              href={edu.project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-[#2D5A87] hover:text-[#2D5A87]/80 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="ri-github-fill text-xs sm:text-sm"></i> GitHub
                            </a>
                          )}
                        </div>
                        <h6 className="text-xs sm:text-sm font-bold text-[#2D5A87] mb-1">
                          {edu.project.title}
                        </h6>
                        <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                          {edu.project.description}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Expand / Collapse Button Toggle */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleExpand(i); }}
                    className="w-full text-center mt-4 text-xs sm:text-sm text-[#2D5A87] hover:text-[#2D5A87]/80 font-bold flex items-center justify-center gap-1 cursor-pointer pt-2 border-t border-gray-50"
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'View Coursework & Highlights'}</span>
                    <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line text-base`}></i>
                  </button>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
