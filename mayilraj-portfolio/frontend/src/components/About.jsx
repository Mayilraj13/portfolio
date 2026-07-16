import { personalInfo, about } from '../data/portfolioData'

export default function About() {
  const renderText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-[#2D5A87]">$1</span>')
  }

  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">About Me</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-[#4A4A4A] mb-4 sm:mb-6">{about.heading}</h3>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: renderText(p) }} />
            ))}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {personalInfo.stats.map((s, i) => (
                <div key={i} className="text-center p-3 sm:p-4 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2D5A87] mb-1">{s.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
