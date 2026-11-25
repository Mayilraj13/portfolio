import { motion } from 'framer-motion'
import { personalInfo, patent } from '../data/portfolioData'

const numberedValues = [
  {
    number: '01',
    title: 'Background & Track Record',
    summary: (
      <>
        Software Engineering student specializing in full-stack development and applied AI, with{' '}
        <span className="font-semibold text-neutral-900">3 industry internships</span> at{' '}
        <span className="font-semibold text-indigo-600">Ibee Analytics</span> (SDE Intern),{' '}
        <span className="font-semibold text-indigo-600">Hapus Infotech</span> (Web Developer Intern), and{' '}
        <span className="font-semibold text-indigo-600">Biglearn</span> (IoT Intern).
      </>
    ),
  },
  {
    number: '02',
    title: 'Technical Focus',
    summary: (
      <>
        Focused on <span className="font-semibold text-neutral-900">AI-augmented full-stack engineering</span> — designing scalable REST APIs, reactive client interfaces, computer vision pipelines, and production-ready ML integrations.
      </>
    ),
  },
  {
    number: '03',
    title: 'Problems I Enjoy Solving',
    summary: (
      <>
        Turning complex algorithmic challenges into tangible products — from our{' '}
        <span className="font-semibold text-amber-700">IriSafe Patent</span> (AI biometric safety wearable) to real-time sign language recognition with{' '}
        <span className="font-semibold text-neutral-900">Gestura</span>.
      </>
    ),
  },
  {
    number: '04',
    title: 'What I Am Looking For',
    summary: (
      <>
        Seeking a <span className="font-semibold text-neutral-900">Software Developer</span> or{' '}
        <span className="font-semibold text-indigo-600">AI Full-Stack Engineer</span> role to architect high-impact software, collaborate with forward-thinking teams, and ship reliable systems from day one.
      </>
    ),
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-14 bg-white text-neutral-900 relative overflow-hidden scroll-mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Top Split: Editorial Quote (Left) + Numbered Values (Right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Eyebrow, Quote, Attribution & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-5 lg:sticky lg:top-24"
            >
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-indigo-600 font-bold mb-4 font-['Plus_Jakarta_Sans']">
                About Me
              </span>

              <blockquote className="text-2xl sm:text-3xl lg:text-[2.15rem] leading-[1.3] text-neutral-900 font-['Playfair_Display'] italic font-semibold mb-6">
                &ldquo;I build software where applied AI, full-stack engineering, and real-world hardware converge — turning complex research into products people can rely on.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pb-8 border-b border-neutral-200">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 bg-neutral-100 shrink-0">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900 font-['Plus_Jakarta_Sans']">
                    {personalInfo.name}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {personalInfo.title}
                  </div>
                </div>
              </div>

              {/* Compact Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {personalInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500 font-medium mt-0.5 font-['Plus_Jakarta_Sans']">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Numbered Values (01 - 04) */}
            <div className="lg:col-span-7 divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {numberedValues.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group"
                >
                  <span className="text-sm font-mono font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200/70 px-3 py-1 rounded-full shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Featured Patent Highlight (Light Editorial Card) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-12 rounded-3xl bg-neutral-50 border border-neutral-200 p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold font-['Plus_Jakarta_Sans']">
                <span>🏆</span>
                <span>Indian Patent Published • Govt. of India</span>
              </div>
              <span className="text-xs text-indigo-700 font-mono bg-indigo-50 px-3 py-1 rounded-md border border-indigo-200">
                App No: {patent.applicationNumber}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 leading-snug mb-3 font-['Plus_Jakarta_Sans']">
              {patent.title}
            </h3>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              {patent.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200 mb-6 text-xs sm:text-sm">
              <div>
                <span className="block text-neutral-400 text-[11px] uppercase tracking-wider font-semibold font-['Plus_Jakarta_Sans']">
                  Publication Date
                </span>
                <span className="font-semibold text-neutral-900">{patent.publicationDate}</span>
                <span className="block text-[11px] text-neutral-500">(No. {patent.publicationNumber})</span>
              </div>
              <div>
                <span className="block text-neutral-400 text-[11px] uppercase tracking-wider font-semibold font-['Plus_Jakarta_Sans']">
                  Filing Date
                </span>
                <span className="font-semibold text-neutral-900">{patent.filingDate}</span>
              </div>
              <div>
                <span className="block text-neutral-400 text-[11px] uppercase tracking-wider font-semibold font-['Plus_Jakarta_Sans']">
                  Field of Invention
                </span>
                <span className="font-semibold text-amber-700">{patent.field}</span>
              </div>
              <div>
                <span className="block text-neutral-400 text-[11px] uppercase tracking-wider font-semibold font-['Plus_Jakarta_Sans']">
                  Authority
                </span>
                <span className="font-semibold text-neutral-900 truncate block">IP India (Govt. of India)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-neutral-200 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <i className="ri-team-line text-indigo-600 text-base" />
                <span>
                  <strong className="text-neutral-900 font-semibold">Inventors:</strong> Dr. R. Jayamala,{' '}
                  <span className="text-amber-700 font-bold underline underline-offset-2">Mayilraj R</span>, Aishwarya K. S
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Iris Biometrics', 'AI Threat Intelligence', 'Blockchain Security'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] font-medium font-['Plus_Jakarta_Sans']"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
