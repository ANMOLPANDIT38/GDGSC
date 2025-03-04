import './App.css'
import Background from './components/Background'
import TeamSection from './components/TeamSection'
import Navbar from './components/Navbar';
import Home from './components/Home'
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';
import Events from './components/Events';

function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <Background/>
        <Home/>
        <AboutSection />
        <Events/>
        <TeamSection/>
        <Gallery/>
      </div>  
    </>
  )
}

export default App
