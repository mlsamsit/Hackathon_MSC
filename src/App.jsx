import './App.css'

// Component imports
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Team from './components/team'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Sponsors />
      <Team />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
