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

// Function to generate company/organization initials for placeholder logo
const getOrgInitials = (name) => {
  if (!name) return ''
  const words = name.split(' ')
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

function CertCard({ cert }) {
  const c = colorMap[cert.color] || colorMap.blue
  const initials = getOrgInitials(cert.issuer)
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
      <div>
        {/* Top Header Row with Logo Badge */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-extrabold text-sm ${c.iconBg} ${c.text} border border-gray-50 flex-shrink-0`}>
            {initials}
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#2D5A87] leading-tight mb-0.5">{cert.title}</h4>
            <p className="text-xs text-gray-500 font-semibold">{cert.issuer}</p>
          </div>
        </div>

        {/* Date & Credential ID */}
        <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs text-gray-500 font-medium mb-3">
          <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
            Issued: {cert.date}
          </span>
          {cert.credentialId && (
            <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-100 font-mono">
              ID: {cert.credentialId}
            </span>
          )}
        </div>

        {/* Skills Covered (Badges) */}
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider font-bold text-[#2D5A87] mb-1.5">Skills Covered</p>
          <div className="flex flex-wrap gap-1">
            {cert.skills.map((skill, si) => (
              <span key={si} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded border border-gray-100 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* View Action Button */}
      <div className="mt-2 pt-3 border-t border-gray-50">
        <a 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full text-center py-2 px-3 rounded-lg text-xs font-bold bg-[#2D5A87] text-white hover:bg-[#2D5A87]/95 transition-colors cursor-pointer"
        >
          View Certificate
        </a>
      </div>
    </div>
  )
}

function CertSection({ title, icon, color, items }) {
  if (!items || items.length === 0) return null
  const c = colorMap[color] || colorMap.blue
  return (
    <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
      <div className="flex items-center mb-4 sm:mb-8">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${c.headerBg} rounded-lg mr-2 sm:mr-3`}>
          <i className={`ri-${icon} ri-lg sm:ri-xl ${c.headerText}`}></i>
        </div>
        <h3 className="text-lg sm:text-2xl font-bold text-[#4A4A4A]">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto flex flex-col gap-1">
            <span>Continuous learning and professional credentials</span>
            <span className="text-xs sm:text-sm text-gray-400">Classified by technology category and domain expertise</span>
          </p>
        </div>

        <CertSection title="Programming" icon="code-s-slash-line" color="blue" items={certifications.programming} />
        <CertSection title="Web Development" icon="stack-line" color="green" items={certifications.webDevelopment} />
        <CertSection title="Cloud & Security" icon="cloud-line" color="indigo" items={certifications.cloud} />
        <CertSection title="Artificial Intelligence" icon="robot-line" color="purple" items={certifications.artificialIntelligence} />
        <CertSection title="Data Science" icon="database-2-line" color="blue" items={certifications.dataScience} />
        <CertSection title="Embedded Systems & IoT" icon="wifi-line" color="orange" items={certifications.embeddedSystems} />
      </div>
    </section>
  )
}
