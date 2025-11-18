import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import ContactForm from './components/ContactForm'

function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <img src="/flame-icon.svg" alt="logo" className="w-6 h-6" />
            <span>Signal SEO</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-blue-100">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
          <button onClick={scrollToContact} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Get plan</button>
        </div>
      </header>

      <main>
        <Hero onCtaClick={scrollToContact} />
        <Services />
        <CaseStudies />
        <ContactForm />
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-blue-200/80">
          <p>© {new Date().getFullYear()} Signal SEO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
