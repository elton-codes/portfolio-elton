import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Hero from '../Hero'
import Skills from '../Skills'
import Footer from '../Footer'

function App() {

  return (
    
      <div className='text-light font-sans'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    
  )
}

export default App
