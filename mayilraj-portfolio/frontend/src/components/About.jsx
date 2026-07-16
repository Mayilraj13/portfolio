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
        Software Engineering student specializing in full-stack development with a strong
        foundation in web technologies. Gained hands-on experience through{' '}
        <strong>3 internships</strong> — at{' '}
        <span className="text-[#2D5A87] font-semibold">Ibee Analytics</span> (SDE Intern),{' '}
        <span className="text-[#2D5A87] font-semibold">Hapus Infotech</span> (Web Developer
        Intern), building real production applications from ground up.
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
        Passionate about <strong>AI-powered full-stack development</strong> — building
        REST APIs, React frontends, and integrating machine learning models into
        production apps. Deeply interested in <strong>Python/Django</strong>,{' '}
        <strong>data-driven applications</strong>, and using AI tools to automate and
        enhance software solutions.
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
        I enjoy turning complex requirements into clean, working software — whether it's a{' '}
        <strong>Predictive Marketing Dashboard</strong> with ML forecasting, a{' '}
        <strong>women's safety navigation app</strong>, or a{' '}
        <strong>student management platform</strong>. I focus on writing maintainable code
        that scales and delivers real user value.
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
        Looking for a <strong>Software Developer</strong> or{' '}
        <strong>AI Full-Stack Engineer</strong> role where I can build meaningful products,
        work with modern AI/ML tooling, and grow alongside a strong engineering team —
        contributing from day one with my MERN stack and Python background.
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
