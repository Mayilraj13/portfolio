import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white" style={{ fontFamily: "'Pacifico', cursive" }}>{personalInfo.name}</a>
            <p className="text-gray-400 text-sm mt-1">{personalInfo.title}</p>
          </div>
          <div className="flex space-x-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-github-fill ri-xl"></i></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-linkedin-fill ri-xl"></i></a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-mail-fill ri-xl"></i></a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {year} {personalInfo.name}. All rights reserved.</p>
          <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-gray-400 hover:text-white transition-colors text-sm mt-4 md:mt-0">
            Back to Top <i className="ri-arrow-up-line ri-sm ml-1"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
