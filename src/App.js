import './App.css';
import { useEffect } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    document.title = 'Solodko Viacheslav';
    AOS.init();
  }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500 overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
