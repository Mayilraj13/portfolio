import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl text-center">
          {/* Initial Avatar — a clean MR monogram */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#2D5A87] to-[#4a8bc2] flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl sm:text-4xl font-bold">MR</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D5A87] mb-3 leading-tight">
            Hi, I'm {personalInfo.name}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#4A4A4A] font-medium mb-4">
            {personalInfo.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-3 leading-relaxed">{personalInfo.shortBio}</p>
          <p className="text-sm sm:text-base text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">{personalInfo.tagline}</p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {personalInfo.badges.map(b => (
              <span key={b} className="bg-[#2D5A87]/10 text-[#2D5A87] px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-[#2D5A87]/20">{b}</span>
            ))}
          </div>

          {/* CTA Buttons — stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center bg-[#2D5A87] text-white px-6 py-3 rounded-lg hover:bg-[#2D5A87]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base">
              <i className="ri-mail-line ri-lg mr-2"></i> Get In Touch
            </a>
            <a href={personalInfo.resume} download="MAYILRAJ_R_Resume"
              className="inline-flex items-center justify-center bg-white text-[#2D5A87] border-2 border-[#2D5A87] px-6 py-3 rounded-lg hover:bg-[#2D5A87] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base">
              <i className="ri-download-line ri-lg mr-2"></i> Download Resume
            </a>
            <a href={`${personalInfo.github}?tab=repositories`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-100 text-gray-700 border-2 border-gray-200 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base">
              <i className="ri-github-fill ri-lg mr-2"></i> View GitHub
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8 border-t border-gray-200">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300">
              <i className="ri-github-fill ri-lg"></i></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300">
              <i className="ri-linkedin-fill ri-lg"></i></a>
            <a href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-[#2D5A87] hover:text-white transition-all duration-300">
              <i className="ri-mail-fill ri-lg"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
