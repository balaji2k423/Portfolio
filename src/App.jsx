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
import SolaraChatbot from './components/SolaraChatbot'; // Import the chatbot component
import SiriGif from './assets/siri.gif';
import SolaraProfile from './assets/solora.png'; // Add your profile pic import (optional)
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
      
      {/* Solara Chatbot Component */}
      <SolaraChatbot 
        siriGif={SiriGif} 
        profilePic={SolaraProfile} // Optional: pass your profile picture
      />
    </div>
  );
}

export default App;