import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="page-shell">
      <Nav />
      <div className="page">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </div>
      <div className="page">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
