import { personalInfo } from '../data/portfolioData'

const techBadges = [
  { label: 'React',      bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200' },
  { label: 'Node.js',   bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200' },
  { label: 'MongoDB',   bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200' },
  { label: 'Express.js',bg: 'bg-gray-100',  text: 'text-gray-700',   border: 'border-gray-200' },
  { label: 'Python',    bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
  { label: 'Django',    bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  { label: 'AI / ML',   bg: 'bg-rose-50',   text: 'text-rose-700',   border: 'border-rose-200' },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

            {/* ── LEFT: Text ── */}
            <div className="flex-1 text-center md:text-left">

              {/* Availability tag */}
              <div className="inline-flex items-center gap-2 bg-[#2D5A87]/10 text-[#2D5A87] px-4 py-1.5 rounded-full text-sm font-semibold mb-5 border border-[#2D5A87]/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to Full-Time SDE / AI Roles
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                Hi, I'm <span className="text-[#2D5A87]">{personalInfo.name}</span>
              </h1>

              {/* Professional title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-[#4A4A4A] mb-5">
                {personalInfo.title}
              </h2>

              {/* Value proposition — 2-3 lines, no long paragraphs */}
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
                I build <span className="font-semibold text-gray-800">scalable full-stack web apps</span> and{' '}
                <span className="font-semibold text-gray-800">smart IoT systems</span> — with 3 internships
                across Ibee Analytics, Hapus Infotech &amp; Biglearn, delivering real products from
                embedded C to production React.
              </p>

              {/* Color-coded tech badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                {techBadges.map(({ label, bg, text, border }) => (
                  <span key={label} className={`${bg} ${text} px-3 py-1 rounded-full text-xs font-semibold border ${border}`}>
                    {label}
                  </span>
                ))}
              </div>

              {/* CTA buttons: Contact · Resume · GitHub · LinkedIn */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 bg-[#2D5A87] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2D5A87]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="ri-mail-line" /> Contact Me
                </button>
                <a
                  href={personalInfo.resume}
                  download="MAYILRAJ_R_Resume"
                  className="inline-flex items-center gap-2 bg-white text-[#2D5A87] border-2 border-[#2D5A87] px-6 py-3 rounded-lg font-semibold hover:bg-[#2D5A87] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="ri-file-download-line" /> Resume
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="ri-github-fill" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#005f8e] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="ri-linkedin-fill" /> LinkedIn
                </a>
              </div>

              {/* Scroll hint */}
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#2D5A87] transition-colors"
              >
                <i className="ri-arrow-down-line animate-bounce" /> Scroll to explore
              </button>
            </div>

            {/* ── RIGHT: Profile photo ── */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D5A87]/30 to-blue-300/40 blur-xl scale-110" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={personalInfo.photo}
                    alt={`${personalInfo.name} — MERN Stack Developer`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center bg-[#2D5A87]/10 text-[#2D5A87] text-5xl font-bold">MR</div>'
                    }}
                  />
                </div>
                {/* Available badge */}
                <div className="absolute bottom-3 right-3 bg-white rounded-full px-3 py-1 shadow-lg flex items-center gap-1.5 text-xs font-semibold text-gray-700 border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-green-500" /> Available
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
