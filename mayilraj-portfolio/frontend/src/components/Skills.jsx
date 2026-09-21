import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const logoMap = {
  'React.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'HTML5':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS3':           'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'JavaScript':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Tailwind CSS':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  'Node.js':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Express.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'Django':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  'Flask':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'MongoDB':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'MySQL':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'PostgreSQL':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Python':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Java':           'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'C':              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'Git':            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'AWS':            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'Vercel':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
  'Render':         'https://cdn.simpleicons.org/render',
  'VS Code':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'Postman':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'NPM':            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'Canva':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
  'Android Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
  'Arduino IDE':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
}

const sectionAccent = {
  Frontend:                'border-cyan-500 text-cyan-400',
  Backend:                 'border-emerald-500 text-emerald-400',
  Databases:               'border-indigo-500 text-indigo-400',
  'Programming Languages': 'border-amber-500 text-amber-400',
  'Cloud & DevOps':        'border-purple-500 text-purple-400',
  Tools:                   'border-gray-500 text-gray-400',
}

function SkillIcon({ item, size = 'lg' }) {
  const [hasError, setHasError] = useState(false)
  const logo = logoMap[item.name]
  const dim = size === 'lg' ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-6 h-6'

  if (logo && !hasError) {
    return (
      <img
        src={logo}
        alt={item.name}
        className={`${dim} object-contain`}
        onError={() => setHasError(true)}
      />
    )
  }
  return <i className={`ri-${item.icon} text-xl text-indigo-400`} />
}

function SkillCard({ item }) {
  return (
    <motion.div 
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-[#12121c] rounded-2xl p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(99,102,241,0.15)] flex items-center gap-3.5 group cursor-default"
    >
      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a28] border border-white/[0.08] group-hover:border-indigo-500/30 transition-colors p-2">
        <SkillIcon item={item} size="lg" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight font-['Space_Grotesk']">
          {item.name}
        </h4>
        {item.sub && <p className="text-xs text-gray-400 mt-0.5 truncate">{item.sub}</p>}
      </div>
    </motion.div>
  )
}

function ToolCard({ item }) {
  return (
    <motion.div 
      whileHover={{ y: -3, scale: 1.05 }}
      className="bg-[#12121c] rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_6px_20px_rgba(99,102,241,0.15)] flex flex-col items-center gap-2 text-center group cursor-default"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a28] border border-white/[0.08] group-hover:border-indigo-500/30 transition-colors p-2">
        <SkillIcon item={item} size="sm" />
      </div>
      <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors leading-tight font-['Space_Grotesk']">
        {item.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-[#0a0a0f] relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 block font-['Space_Grotesk']">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-['Space_Grotesk']">
            Skills &amp; Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Tools, languages, and frameworks leveraged across frontend, backend, AI models, and IoT prototypes.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skills.categories.map((cat) => {
            const accentClass = sectionAccent[cat.title] || 'border-indigo-500 text-indigo-400'
            return (
              <div key={cat.title}>
                {/* Group Header */}
                <div className={`flex items-center gap-3 mb-5 pl-3.5 border-l-4 ${accentClass.split(' ')[0]}`}>
                  <i className={`ri-${cat.icon} text-lg ${accentClass.split(' ')[1]}`} />
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    ({cat.items.length})
                  </span>
                </div>

                {/* Cards Grid */}
                {cat.small ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
                    {cat.items.map((item) => (
                      <ToolCard key={item.name} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className={`grid gap-3 sm:gap-4 ${
                    cat.items.length === 3
                      ? 'grid-cols-1 sm:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                  }`}>
                    {cat.items.map((item) => (
                      <SkillCard key={item.name} item={item} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
