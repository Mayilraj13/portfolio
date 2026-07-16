import { skills } from '../data/portfolioData'

// ── Official logo map (Devicons CDN) ──────────────────────────────────────
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
  'Render':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg',
  'VS Code':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'Postman':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'NPM':            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'Canva':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
  'Android Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
  'Arduino IDE':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
}

// Section header left-border accent colour
const sectionAccent = {
  Frontend:                'border-blue-500',
  Backend:                 'border-green-500',
  Databases:               'border-indigo-500',
  'Programming Languages': 'border-yellow-500',
  'Cloud & DevOps':        'border-sky-500',
  Tools:                   'border-gray-400',
}

// ── Skill icon — official logo or fallback remixicon ──────────────────────
function SkillIcon({ item, size = 'lg' }) {
  const logo = logoMap[item.name]
  const dim = size === 'lg' ? 'w-8 h-8' : 'w-7 h-7'

  // Django & Flask logos are dark — give them a light bg so they're visible
  const needsBg = ['Django', 'Flask', 'Express.js', 'GitHub', 'Vercel'].includes(item.name)

  if (logo) {
    return (
      <img
        src={logo}
        alt={item.name}
        className={`${dim} object-contain ${needsBg ? 'p-0.5' : ''}`}
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
    )
  }
  // Fallback to remixicon
  return <i className={`ri-${item.icon} text-2xl text-gray-500`} />
}

// ── Skill card (horizontal: logo · name · sub) ────────────────────────────
function SkillCard({ item }) {
  const needsBg = ['Django', 'Flask', 'Express.js', 'GitHub', 'Vercel'].includes(item.name)
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg ${needsBg ? 'bg-gray-100' : 'bg-white'} border border-gray-100`}>
          <SkillIcon item={item} size="lg" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm sm:text-base font-bold text-gray-800 leading-tight">{item.name}</h4>
          {item.sub && <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>}
        </div>
      </div>
    </div>
  )
}

// ── Tool card (centered: logo · name) ────────────────────────────────────
function ToolCard({ item }) {
  const needsBg = ['Django', 'Flask', 'Express.js', 'GitHub', 'Vercel', 'AWS', 'Arduino IDE'].includes(item.name)
  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col items-center gap-2 text-center">
      <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${needsBg ? 'bg-gray-100' : 'bg-white'}`}>
        <SkillIcon item={item} size="sm" />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{item.name}</span>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Skills &amp; Technologies</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full" />
          <p className="text-sm sm:text-lg text-gray-500 max-w-xl mx-auto mt-4">
            Technologies I work with across the full stack
          </p>
        </div>

        {/* Skill groups */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skills.categories.map((cat) => {
            const accent = sectionAccent[cat.title] || 'border-gray-400'
            return (
              <div key={cat.title}>
                {/* Group header */}
                <div className={`flex items-center gap-3 mb-5 pl-4 border-l-4 ${accent}`}>
                  <i className={`ri-${cat.icon} text-[#2D5A87] text-xl`} />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{cat.title}</h3>
                  <span className="text-xs text-gray-400 font-medium">
                    {cat.items.length} skill{cat.items.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Cards grid */}
                {cat.small ? (
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {cat.items.map((item) => <ToolCard key={item.name} item={item} />)}
                  </div>
                ) : (
                  <div className={`grid gap-3 sm:gap-4 ${
                    cat.items.length === 3
                      ? 'grid-cols-1 sm:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                  }`}>
                    {cat.items.map((item) => <SkillCard key={item.name} item={item} />)}
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
