import { experience } from '../data/portfolioData'

const colorMap = {
  green: { text: 'text-green-700', iconBg: 'bg-green-500/10', tag: 'bg-green-50 text-green-700 border-green-200' },
  blue: { text: 'text-blue-700', iconBg: 'bg-blue-500/10', tag: 'bg-blue-50 text-blue-700 border-blue-200' },
  purple: { text: 'text-purple-700', iconBg: 'bg-purple-500/10', tag: 'bg-purple-50 text-purple-700 border-purple-200' },
  orange: { text: 'text-orange-700', iconBg: 'bg-orange-500/10', tag: 'bg-orange-50 text-orange-700 border-orange-200' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Professional Experience</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">My professional journey and industry exposure</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {experience.map((exp, i) => {
            const c = colorMap[exp.color] || colorMap.blue
            return (
              <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center ${c.iconBg} rounded-xl mr-3 sm:mr-4 flex-shrink-0`}>
                    <i className={`ri-${exp.icon} ri-xl sm:ri-2x ${c.text}`}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-bold text-[#2D5A87] mb-0.5 leading-tight">{exp.role}</h3>
                    <h4 className="text-sm sm:text-lg font-medium text-[#4A4A4A]">{exp.company}</h4>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  <i className="ri-calendar-line mr-1 sm:mr-2 flex-shrink-0"></i>
                  <span>{exp.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.tags.map((t, ti) => (
                    <span key={ti} className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium border ${c.tag}`}>{t}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
