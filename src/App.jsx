import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NeonBackground from './components/NeonBackground';
import ScrollIndicator from './components/ScrollIndicator';
import SiriGif from './assets/siri.gif';  // <-- Import your Siri gif here
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App overflow-x-hidden relative">
      <NeonBackground />
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

      {/* Siri GIF fixed at bottom-right */}
      <div className="fixed bottom-10 right-10 z-50">
  <img 
    src={SiriGif}   // <-- using imported GIF
    alt="Siri Assistant"
    className="w-32 h-32 object-contain"  // increased from w-20 h-20 to w-32 h-32
  />
</div>
    </div>
  );
}

export default App;
