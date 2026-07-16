import { personalInfo } from '../data/portfolioData'

const identityCards = [
  {
    id: 'background',
    icon: 'ri-user-3-line',
    iconBg: 'bg-[#2D5A87]/10',
    iconColor: 'text-[#2D5A87]',
    cardBg: 'bg-gradient-to-br from-blue-50 to-white',
    border: 'border-blue-100',
    title: 'Background',
    body: (
      <>
        Electronics &amp; Communication Engineering graduate who pivoted to full-stack
        development. Gained hands-on experience through <strong>3 internships</strong> —
        at <span className="text-[#2D5A87] font-semibold">Ibee Analytics</span> (SDE),{' '}
        <span className="text-[#2D5A87] font-semibold">Hapus Infotech</span> (Web Dev), and{' '}
        <span className="text-[#2D5A87] font-semibold">Biglearn</span> (IoT) — spanning
        embedded C to production React apps.
      </>
    ),
  },
  {
    id: 'interests',
    icon: 'ri-code-s-slash-line',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
    cardBg: 'bg-gradient-to-br from-purple-50 to-white',
    border: 'border-purple-100',
    title: 'Technical Interests',
    body: (
      <>
        Passionate about <strong>MERN stack development</strong>, building REST APIs,
        and connecting hardware to the web through IoT. Also deeply interested in{' '}
        <strong>Python/Django</strong> for backend automation and sensor data
        pipelines — bridging the physical and digital worlds.
      </>
    ),
  },
  {
    id: 'problems',
    icon: 'ri-brain-line',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
    cardBg: 'bg-gradient-to-br from-green-50 to-white',
    border: 'border-green-100',
    title: 'Problems I Enjoy Solving',
    body: (
      <>
        I enjoy turning messy, real-world problems into clean digital solutions — whether
        it's a <strong>gas leakage alert system</strong>, a{' '}
        <strong>student management platform</strong>, or an{' '}
        <strong>automated sanitizer dispenser</strong>. I focus on writing clean,
        maintainable code that others can build on.
      </>
    ),
  },
  {
    id: 'role',
    icon: 'ri-briefcase-4-line',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-600',
    cardBg: 'bg-gradient-to-br from-orange-50 to-white',
    border: 'border-orange-100',
    title: "Role I'm Seeking",
    body: (
      <>
        Looking for a <strong>Full-Stack Developer</strong> or{' '}
        <strong>MERN Stack Engineer</strong> role where I can contribute to meaningful
        products, grow with a strong engineering team, and apply my cross-domain
        experience — from web development to IoT and hardware integration.
      </>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">About Me</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full" />
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Who I am, what I do, and what I'm looking for
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* 4 identity cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {identityCards.map(({ id, icon, iconBg, iconColor, cardBg, border, title, body }) => (
              <div
                key={id}
                className={`${cardBg} rounded-2xl p-6 sm:p-7 border ${border} shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 flex items-center justify-center ${iconBg} rounded-xl`}>
                    <i className={`${icon} ${iconColor} ri-lg`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{body}</p>
              </div>
            ))}
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {personalInfo.stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#2D5A87] mb-1">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
