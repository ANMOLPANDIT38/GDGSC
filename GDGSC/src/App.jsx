import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar';
import Home from './components/Home'
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Faculty from './components/faculty';


function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <Background/>
        <Home/>
        <AboutSection />
        <Events/>
        <Faculty/>
        <Gallery/>
        <FAQ/>
        <Footer/>
      </div>  
    </>
  )
}

export default App
