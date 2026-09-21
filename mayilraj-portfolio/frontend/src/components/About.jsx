import { personalInfo, patent } from '../data/portfolioData'

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
        foundation in web technologies and AI innovation. Gained hands-on experience through{' '}
        <strong>3 internships</strong> — at{' '}
        <span className="text-[#2D5A87] font-semibold">Ibee Analytics</span> (SDE Intern),{' '}
        <span className="text-[#2D5A87] font-semibold">Hapus Infotech</span> (Web Developer
        Intern), and <span className="text-[#2D5A87] font-semibold">Biglearn</span> (IoT Intern), building real production applications from ground up.
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
        Passionate about <strong>AI-powered full-stack development &amp; wearable tech</strong> — building
        REST APIs, React frontends, AI threat intelligence pipelines, and integrating ML models into
        production apps. Deeply interested in <strong>Python/Django</strong>,{' '}
        <strong>biometric AI security</strong>, and <strong>blockchain evidence systems</strong>.
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
        I enjoy turning complex ideas into patented innovations and working software — whether it's our{' '}
        <strong>IriSafe Patent</strong> (AI biometric safety wearable), a{' '}
        <strong>Predictive Marketing Dashboard</strong> with ML forecasting, or a{' '}
        <strong>real-time sign language framework (Gestura)</strong>.
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
        contributing from day one with my MERN stack, Python, and R&amp;D background.
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
            Who I am, my patented innovations, and what I build
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* ── FEATURED PATENT CARD ── */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#1A365D] to-[#2D5A87] text-white p-6 sm:p-8 shadow-xl border border-blue-400/20">
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Patent Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
                  <i className="ri-award-fill text-amber-400 text-base" />
                  <span>Indian Patent Published • Govt. of India</span>
                </div>
                <span className="text-xs text-blue-200/80 font-mono bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  App No: {patent.applicationNumber}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
                {patent.title}
              </h3>

              {/* Brief Description */}
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-6">
                {patent.description}
              </p>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-6 text-xs sm:text-sm">
                <div>
                  <span className="block text-blue-300 text-[11px] uppercase tracking-wider font-semibold">Publication Date</span>
                  <span className="font-semibold text-white">{patent.publicationDate}</span>
                  <span className="block text-[11px] text-blue-200/70">(No. {patent.publicationNumber})</span>
                </div>
                <div>
                  <span className="block text-blue-300 text-[11px] uppercase tracking-wider font-semibold">Filing Date</span>
                  <span className="font-semibold text-white">{patent.filingDate}</span>
                </div>
                <div>
                  <span className="block text-blue-300 text-[11px] uppercase tracking-wider font-semibold">Field of Invention</span>
                  <span className="font-semibold text-white">{patent.field}</span>
                </div>
                <div>
                  <span className="block text-blue-300 text-[11px] uppercase tracking-wider font-semibold">Authority</span>
                  <span className="font-semibold text-white truncate block">Intellectual Property India</span>
                </div>
              </div>

              {/* Inventors & Tech Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <i className="ri-team-line text-blue-300 text-base" />
                  <span className="text-blue-200">
                    <strong className="text-white font-semibold">Inventors:</strong> Dr. R. Jayamala, <span className="text-amber-300 font-bold underline underline-offset-2">Mayilraj R</span>, Aishwarya K. S
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Iris Biometrics', 'AI Threat Intelligence', 'Blockchain Security'].map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/20 text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
                className="text-center p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors"
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

