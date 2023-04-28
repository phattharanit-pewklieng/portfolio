// import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/container/Home/Home'
import About from './components/container/About/About'
import Skills from './components/container/Skills/Skills'
import Portfolio from './components/container/Portfolio/Portfolio'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
