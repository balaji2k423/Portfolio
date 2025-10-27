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
   const API_KEY = "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";
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
        apiKey={API_KEY}
        siriGif={SiriGif} 
        profilePic={SolaraProfile} // Optional: pass your profile picture
      />
    </div>
  );
}

export default App;