import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ['AI Developer', 'Data Scientist', 'Full-Stack Dev', 'DevOps Engineer', 'Android Dev'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-16 overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-20">{/* SVG background stays */}</div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            {/* Tech Icons Row */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center neon-glow-cyan animate-bounce-slow">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                    alt="React" 
                    className="w-7 h-7" 
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center neon-glow-blue animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" 
                    alt="Flutter" 
                    className="w-7 h-7" 
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center neon-glow-purple animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" 
                    alt="Go" 
                    className="w-7 h-7" 
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Welcome To My</span>
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 neon-text-gradient">
              Portfolio Website
            </h2>
            
            {/* Typing Effect */}
            <div className="text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-cyan-400 font-semibold">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating intelligent systems and innovative solutions. 
              Combining AI expertise with full-stack development to build the future.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToPortfolio}
                className="neon-btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              {/* Removed Download CV button */}
            </div>
          </div>
          
          {/* Right Side 3D Model */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-[500px] h-[500px] relative overflow-hidden">
                <iframe
                  src="https://my.spline.design/genkubgreetingrobot-FyXNHIaz2TkqksipOJdLxofl/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  title="3D Greeting Robot"
                  loading="lazy"
                  style={{ background: 'transparent', border: 'none' }}
                />
                {/* Watermark cover remains */}
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 via-gray-900/95 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none">
                  <div className="w-full h-full bg-gray-900" style={{
                    borderTopLeftRadius: '100%',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 100% 0)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
