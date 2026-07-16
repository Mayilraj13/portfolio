import { useState } from 'react'
import { projects } from '../data/portfolioData'

// ── Tag colour map ─────────────────────────────────────────────────────────
const tagColorMap = {
  // Gestura tags
  MediaPipe:   'bg-green-50 text-green-700 border-green-200',
  TensorFlow:  'bg-orange-50 text-orange-700 border-orange-200',
  'Whisper ASR': 'bg-gray-50 text-gray-700 border-gray-200',
  NLP:         'bg-violet-50 text-violet-700 border-violet-200',
  OpenCV:      'bg-blue-50 text-blue-700 border-blue-200',

  React:       'bg-blue-50 text-blue-700 border-blue-200',
  'Chart.js':  'bg-blue-50 text-blue-700 border-blue-200',
  Python:      'bg-yellow-50 text-yellow-700 border-yellow-200',
  Flask:       'bg-gray-50 text-gray-700 border-gray-200',
  Django:      'bg-green-50 text-green-700 border-green-200',
  'Prophet (ML)': 'bg-purple-50 text-purple-700 border-purple-200',
  BeautifulSoup: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Android Studio': 'bg-green-50 text-green-700 border-green-200',
  Java:        'bg-orange-50 text-orange-700 border-orange-200',
  'Google Maps SDK': 'bg-blue-50 text-blue-700 border-blue-200',
  Firebase:    'bg-yellow-50 text-yellow-700 border-yellow-200',
  'AI Threat Detection': 'bg-rose-50 text-rose-700 border-rose-200',
  JavaScript:  'bg-yellow-50 text-yellow-700 border-yellow-200',
  Bootstrap:   'bg-purple-50 text-purple-700 border-purple-200',
  SQLite:      'bg-blue-50 text-blue-700 border-blue-200',
  Arduino:     'bg-teal-50 text-teal-700 border-teal-200',
  'Embedded C':'bg-gray-50 text-gray-700 border-gray-200',
  'HC-SR04':   'bg-cyan-50 text-cyan-700 border-cyan-200',
  'L298N Driver': 'bg-red-50 text-red-700 border-red-200',
  Robotics:    'bg-indigo-50 text-indigo-700 border-indigo-200',
  'MQ-2 Sensor': 'bg-orange-50 text-orange-700 border-orange-200',
  'Safety Systems': 'bg-red-50 text-red-700 border-red-200',
  'Arduino Uno': 'bg-teal-50 text-teal-700 border-teal-200',
  Automation:  'bg-green-50 text-green-700 border-green-200',
}
const defaultTag = 'bg-gray-100 text-gray-700 border-gray-200'

// ── Engineering detail row ─────────────────────────────────────────────────
function DetailRow({ icon, label, text }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-[#2D5A87]/10 rounded-lg mt-0.5">
        <i className={`ri-${icon} text-[#2D5A87] text-sm`} />
      </div>
      <div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</span>
        <p className="text-sm text-gray-700 mt-0.5 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

// ── Project card ───────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col">

      {/* Cover image */}
      <div className="relative h-52 sm:h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.dataset.fallback = 'true'
              e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
            }
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Main content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">

        {/* Title + summary */}
        <h3 className="text-lg sm:text-xl font-bold text-[#2D5A87] mb-1 leading-tight">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-3 leading-relaxed">{project.summary || project.description}</p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${tagColorMap[t] || defaultTag}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Key features */}
        {project.features && (
          <div className="mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Key Features</p>
            <ul className="space-y-1">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <i className="ri-check-line text-[#2D5A87] mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Engineering details — collapsible */}
        {(project.why || project.problem) && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-semibold text-[#2D5A87] hover:text-[#2D5A87]/80 transition-colors mb-3 group"
            >
              <i className={`ri-${expanded ? 'subtract' : 'add'}-circle-line transition-transform`} />
              {expanded ? 'Hide' : 'Show'} Engineering Details
              <i className={`ri-arrow-${expanded ? 'up' : 'down'}-s-line text-xs ml-auto group-hover:translate-y-0.5 transition-transform`} />
            </button>

            {expanded && (
              <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-3 border border-gray-100 animate-in">
                {project.why      && <DetailRow icon="question-line"    label="Why I built it"         text={project.why} />}
                {project.problem  && <DetailRow icon="error-warning-line" label="Problem it solves"    text={project.problem} />}
                {project.challenge&& <DetailRow icon="flashlight-line"  label="Biggest challenge"      text={project.challenge} />}
                {project.learned  && <DetailRow icon="lightbulb-line"   label="What I learned"         text={project.learned} />}
                {project.improve  && <DetailRow icon="refresh-line"     label="If I rebuilt it"        text={project.improve} />}
              </div>
            )}
          </>
        )}

        {/* Action links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            <i className="ri-github-fill" /> GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A87] text-white text-sm font-semibold rounded-lg hover:bg-[#2D5A87]/90 transition-colors"
            >
              <i className="ri-external-link-line" /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed">
              <i className="ri-eye-off-line" /> No Live Demo
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main section ───────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D5A87] mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-[#2D5A87] mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Real products I've built — click <strong>Engineering Details</strong> on any card to see my thinking process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

      </div>
    </section>
  )
}
