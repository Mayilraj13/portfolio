import { projects } from '../data/portfolioData'

const tagColors = {
  'React & Chart.js': 'blue', 'Python / Flask': 'gray', 'Facebook Prophet (ML)': 'green', 'BeautifulSoup': 'purple',
  'Android Studio': 'green', 'Google Maps SDK': 'blue', 'Firebase': 'yellow', 'AI Threat Detection': 'purple',
  'Django': 'green', 'JavaScript': 'yellow', 'Bootstrap': 'purple', 'HTML/CSS': 'orange',
  'Arduino': 'teal', 'IoT': 'blue', 'L298N Driver': 'red', 'Robotics': 'indigo',
  'Embedded C': 'gray', 'MQ-2 Sensor': 'orange', 'Arduino Uno': 'teal', 'HC-SR04': 'purple',
  'Automation': 'green',
}
const tagColorMap = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  gray: 'bg-gray-50 text-gray-700 border-gray-200',
  green: 'bg-green-50 text-green-700 border-green-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
  teal: 'bg-teal-50 text-teal-700 border-teal-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
}

function ProjectCard({ project, index }) {
  return (
    <div className={`project-card bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 ${project.wide ? 'md:col-span-2 flex flex-col md:flex-row' : ''}`}>
      {/* Project Image */}
      <div className={`overflow-hidden relative ${project.wide ? 'h-56 sm:h-72 lg:h-auto md:w-2/5' : 'h-56 sm:h-64'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.dataset.fallback = 'true'
              e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
            }
          }}
        />
      </div>

      {/* Content */}
      <div className={`p-6 sm:p-8 flex flex-col justify-between ${project.wide ? 'md:w-3/5' : ''}`}>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#2D5A87] mb-3">{project.title}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
          {project.features && (
            <div className="mb-5">
              <ul className="list-disc list-inside text-gray-700 text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f, i) => <li key={i} className="text-sm">{f}</li>)}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${tagColorMap[tagColors[t]] || tagColorMap.gray}`}>{t}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center text-[#2D5A87] hover:text-[#2D5A87]/80 font-semibold group text-sm">
            <i className="ri-github-fill ri-lg mr-1 group-hover:scale-110 transition-transform"></i> View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Showcasing my work in web development and IoT solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
