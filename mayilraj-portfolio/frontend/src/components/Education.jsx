import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Education</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="flex sm:w-1/6 justify-center items-start mb-3 sm:mb-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#2D5A87]/10 rounded-full">
                    <i className={`ri-${edu.icon} ri-xl sm:ri-2x text-[#2D5A87]`}></i>
                  </div>
                </div>
                <div className="sm:w-5/6 text-center sm:text-left">
                  <h3 className="text-base sm:text-xl font-bold text-[#2D5A87] mb-1">{edu.degree}</h3>
                  <h4 className="text-sm sm:text-lg font-medium text-[#4A4A4A] mb-1 sm:mb-2">{edu.school}</h4>
                  <div className="flex items-center justify-center sm:justify-start text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                    <i className="ri-calendar-line mr-1"></i>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-3">{edu.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                    {edu.tags.map((t, ti) => (
                      <span key={ti} className="bg-[#2D5A87]/10 text-[#2D5A87] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
