import { skills } from '../data/portfolioData'

const colorMap = {
  green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', iconBg: 'bg-green-500/10' },
  gray: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', iconBg: 'bg-gray-500/10' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', iconBg: 'bg-blue-500/10' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', iconBg: 'bg-orange-500/10' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200', iconBg: 'bg-yellow-500/10' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', iconBg: 'bg-purple-500/10' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200', iconBg: 'bg-teal-500/10' },
  red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200', iconBg: 'bg-red-500/10' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200', iconBg: 'bg-indigo-500/10' },
}

function SkillCardLarge({ item, colors }) {
  return (
    <div className="skill-card bg-gradient-to-br from-white via-white to-gray-50 p-5 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center ${colors.iconBg} rounded-2xl mb-3 sm:mb-4`}>
          <i className={`ri-${item.icon} ri-2x sm:ri-3x ${colors.text}`}></i>
        </div>
        <h4 className="text-base sm:text-xl font-bold mb-1">{item.name}</h4>
        {item.sub && <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{item.sub}</p>}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="h-2 rounded-full bg-gradient-to-r from-[#2D5A87] to-[#4a8bc2]" style={{ width: `${item.level}%` }}></div>
        </div>
      </div>
    </div>
  )
}

function SkillCardSmall({ item, colors }) {
  return (
    <div className="skill-card bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:-translate-y-1">
      <i className={`ri-${item.icon} ri-2x sm:ri-3x ${colors.text} mb-2 sm:mb-3`}></i>
      <h4 className="text-sm sm:text-base font-bold">{item.name}</h4>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Skills & Technologies</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#2D5A87] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4">Technologies I work with across the full stack and beyond</p>
        </div>

        {skills.categories.map((cat, ci) => (
          <div key={ci} className={`${ci < skills.categories.length - 1 ? 'mb-12 sm:mb-16' : ''} max-w-6xl mx-auto`}>
            <h3 className="text-lg sm:text-2xl font-bold text-[#4A4A4A] mb-4 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
              <i className={`ri-${cat.icon} text-[#2D5A87] text-xl sm:text-2xl`}></i> {cat.title}
            </h3>
            <div className={`grid gap-3 sm:gap-6 ${cat.small ? 'grid-cols-3 sm:grid-cols-6' : cat.items.length <= 4 ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 sm:grid-cols-4'}`}>
              {cat.items.map((item, ii) => {
                const colors = colorMap[item.color] || colorMap.blue
                return cat.small
                  ? <SkillCardSmall key={ii} item={item} colors={colors} />
                  : <SkillCardLarge key={ii} item={item} colors={colors} />
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
