import { certifications } from '../data/portfolioData'

const colorMap = {
  green: { text: 'text-green-700', iconBg: 'bg-green-500/10', headerBg: 'bg-green-100', headerText: 'text-green-700' },
  blue: { text: 'text-blue-700', iconBg: 'bg-blue-500/10', headerBg: 'bg-blue-100', headerText: 'text-blue-700' },
  yellow: { text: 'text-yellow-700', iconBg: 'bg-yellow-500/10', headerBg: 'bg-yellow-100', headerText: 'text-yellow-700' },
  purple: { text: 'text-purple-700', iconBg: 'bg-purple-500/10', headerBg: 'bg-purple-100', headerText: 'text-purple-700' },
  orange: { text: 'text-orange-700', iconBg: 'bg-orange-500/10', headerBg: 'bg-orange-100', headerText: 'text-orange-700' },
  indigo: { text: 'text-indigo-700', iconBg: 'bg-indigo-500/10', headerBg: 'bg-indigo-100', headerText: 'text-indigo-700' },
  red: { text: 'text-red-700', iconBg: 'bg-red-500/10', headerBg: 'bg-red-100', headerText: 'text-red-700' },
}

function CertCard({ cert }) {
  const c = colorMap[cert.color] || colorMap.blue
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start mb-3 sm:mb-4">
        <div className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center ${c.iconBg} rounded-xl mr-3 sm:mr-4 flex-shrink-0`}>
          <i className={`ri-${cert.icon} ri-xl sm:ri-2x ${c.text}`}></i>
        </div>
        <div>
          <h4 className="text-base sm:text-xl font-bold text-[#2D5A87] leading-tight">{cert.title}</h4>
        </div>
      </div>
      {cert.date && <p className="text-xs sm:text-sm text-gray-500 mb-2">{cert.date}</p>}
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{cert.description}</p>
      {cert.highlights && (
        <ul className="space-y-1 sm:space-y-2 text-gray-700 mb-4">
          {cert.highlights.map((h, i) => (
            <li key={i} className="flex items-start text-sm"><i className={`ri-check-line ${c.text} mr-2 mt-0.5 flex-shrink-0`}></i><span>{h}</span></li>
          ))}
        </ul>
      )}
      <a href={cert.link} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center text-[#2D5A87] hover:text-[#2D5A87]/80 font-semibold group text-sm sm:text-base">
        View Certificate <i className="ri-arrow-right-line ri-lg ml-2 group-hover:translate-x-1 transition-transform"></i>
      </a>
    </div>
  )
}

function CertSection({ title, icon, color, items, cols }) {
  const c = colorMap[color] || colorMap.blue
  return (
    <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
      <div className="flex items-center mb-4 sm:mb-8">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${c.headerBg} rounded-lg mr-2 sm:mr-3`}>
          <i className={`ri-${icon} ri-lg sm:ri-xl ${c.headerText}`}></i>
        </div>
        <h3 className="text-lg sm:text-2xl font-bold text-[#4A4A4A]">{title}</h3>
      </div>
      <div className={`${cols === 3 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid grid-cols-1 lg:grid-cols-2'} gap-4 sm:gap-6`}>
        {items.map((cert, i) => <CertCard key={i} cert={cert} />)}
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Professional Certifications</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">Continuous learning through simulations, hackathons, and professional development</p>
        </div>

        <CertSection title="Cybersecurity Job Simulations" icon="shield-check-line" color="green" items={certifications.cybersecurity} />
        <CertSection title="Hackathons & Events" icon="trophy-line" color="yellow" items={certifications.hackathons} />

        <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
          <div className="flex items-center mb-4 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-orange-100 rounded-lg mr-2 sm:mr-3">
              <i className="ri-government-line ri-lg sm:ri-xl text-orange-700"></i>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#4A4A4A]">Government Programs</h3>
          </div>
          {certifications.government.map((cert, i) => <CertCard key={i} cert={cert} />)}
        </div>

        <CertSection title="Technical Courses & Skill Development" icon="book-open-line" color="indigo" items={certifications.courses} cols={3} />
      </div>
    </section>
  )
}
