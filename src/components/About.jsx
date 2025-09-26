// src/components/About.jsx
import React, { useState, useEffect } from 'react';
import profileImage from '../assets/profile.jpg';


const About = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [showResume, setShowResume] = useState(false);
  
  const nameInLanguages = [
    { name: "BALAJI", language: "English" },
    { name: "బాలాజీ", language: "Telugu" },
    { name: "பாலாஜி", language: "Tamil" },
    { name: "बालाजी", language: "Hindi" },
    { name: "ಬಾಲಾಜಿ", language: "Kannada" },
    { name: "ബാലാജി", language: "Malayalam" },
    { name: "BALAJI", language: "German" },
    { name: "BALAJI", language: "French" },
    { name: "バラジ", language: "Japanese" }
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies Mastered' },
    { number: '15+', label: 'Technologies Mastered' }
    
  ];

  // Rolling text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % nameInLanguages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [nameInLanguages.length]);

  // Handle body scroll when modal opens/closes
  useEffect(() => {
    if (showResume) {
      document.body.classList.add('modal-open');
      // Prevent auto-scroll by maintaining current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.classList.remove('modal-open');
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [showResume]);

  const handleResumeDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/BALAJI_RESUME.pdf'; // Update this with your actual resume file path
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'BALAJI_P_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSocialClick = (type) => {
    const links = {
      email: 'mailto:balaji.ponnusamy23@gmail.com',
      linkedin: 'https://www.linkedin.com/in/balaji2307',
      github: 'https://github.com/balaji2k423',
      twitter: 'https://twitter.com/your-twitter-handle' // Add your Twitter handle
    };
    
    window.open(links[type], '_blank');
  };

  const ResumeModal = () => (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        showResume ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setShowResume(false)}
      style={{ overflow: 'hidden' }}
    >
      <div className="flex items-start justify-center min-h-screen p-4 pt-8">
        <div 
          className={`bg-gray-900 rounded-2xl p-6 w-full max-w-4xl neon-card transform transition-transform duration-300 ${
            showResume ? 'scale-100' : 'scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ 
            maxHeight: '80vh',
            overflowY: 'scroll',
            scrollBehavior: 'smooth'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold neon-text-gradient">Resume</h2>
            <div className="flex gap-4">
              <button
                onClick={handleResumeDownload}
                className="neon-btn-primary flex items-center gap-2 px-4 py-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </button>
              <button
                onClick={() => setShowResume(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Resume Content */}
          <div className="space-y-6 text-gray-300">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold neon-text-gradient mb-2">BALAJI P</h1>
              <p className="text-xl text-purple-300 mb-2">Developer</p>
              <p className="text-lg text-cyan-400 mb-4">B.Tech ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</p>
              <div className="text-sm space-y-1">
                <p>+91 8526305847</p>
                <p>balaji.ponnusamy23@gmail.com</p>
                <p>Samalapuram, Tiruppur-641668</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold neon-text-cyan mb-3">Summary</h3>
                  <div className="neon-card-small p-4">
                    <p className="text-sm leading-relaxed">
                      Dedicated and innovative Web Developer and Cross-Platform App Developer with a strong track 
                      record in building dynamic applications and integrating AI solutions. Skilled in leveraging 
                      Django, modern frontend technologies, and cross-platform frameworks to tackle complex challenges 
                      and optimize user experience.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold neon-text-cyan mb-3">Education</h3>
                  <div className="space-y-3">
                    <div className="neon-card-small p-4">
                      <h4 className="font-semibold text-white">Bachelor of Technology</h4>
                      <p className="text-sm text-purple-300">Artificial Intelligence and Data Science</p>
                      <p className="text-sm text-cyan-400">Bannari Amman Institute of Technology</p>
                      <p className="text-xs">2022 - 2026 | CGPA: 7.0</p>
                    </div>
                    <div className="neon-card-small p-4">
                      <h4 className="font-semibold text-white">Higher Secondary School</h4>
                      <p className="text-sm text-purple-300">Literacy Mission Matric Hr Sec School</p>
                      <p className="text-xs">2020 - 2022 | 83.4%</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold neon-text-cyan mb-3">Key Achievements</h3>
                  <div className="space-y-3">
                    <div className="neon-card-small p-4">
                      <h4 className="font-semibold text-white text-sm">Robocon 2024 Finalist</h4>
                      <p className="text-xs text-purple-300">New Delhi | 13/07/2024</p>
                      <p className="text-xs">Led Robocon 2024 team, developed color-sorting robot using Raspberry Pi 5 and object detection.</p>
                    </div>
                    <div className="neon-card-small p-4">
                      <h4 className="font-semibold text-white text-sm">Smart India Hackathon 2024 Finalist</h4>
                      <p className="text-xs text-purple-300">Coimbatore | 13/12/2024</p>
                      <p className="text-xs">Built Rasa-based multilingual ticket bot with Django, PostgreSQL, QR generation, and performance monitoring admin panel.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold neon-text-cyan mb-3">Skills</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
                      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
                      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
                    ].map((skill, index) => (
                      <div key={index} className="neon-card-small p-3 text-xs text-center flex flex-col items-center hover:scale-105 transition-transform duration-200">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-8 h-8 mb-2 filter brightness-90"
                          style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                        />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Skills without specific icons */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {['Object Detection', 'IoT', 'CAD Design', 'Embedded Programming'].map((skill, index) => (
                      <div key={index} className="neon-card-small p-2 text-xs text-center flex items-center justify-center">
                        <span className="text-2xl mr-2">⚡</span>
                        <span className="text-white">{skill}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold neon-text-cyan mb-3">Projects</h3>
                  <div className="space-y-3">
                    <div className="neon-card-small p-3">
                      <h4 className="font-semibold text-white text-sm">WanderLink</h4>
                      <p className="text-xs text-purple-300 mb-1">Cross-platform Travel Application</p>
                      <p className="text-xs">A cross-platform application designed to enhance travel experiences by integrating AI-powered recommendations, seamless navigation, and real-time updates.</p>
                    </div>
                    <div className="neon-card-small p-3">
                      <h4 className="font-semibold text-white text-sm">Online Chat Bot Ticketing System</h4>
                      <p className="text-xs text-purple-300 mb-1">Multilingual AI Chatbot</p>
                      <p className="text-xs">Built a Rasa-based multilingual chatbot integrated with Django for ticket processing. Enabled ticket requests, payments, and ticket generation with text and speech support.</p>
                    </div>
                    <div className="neon-card-small p-3">
                      <h4 className="font-semibold text-white text-sm">Food Ordering Website</h4>
                      <p className="text-xs text-purple-300 mb-1">Full-stack Web Application</p>
                      <p className="text-xs">Built a food ordering platform with login, cart, Razorpay checkout, and order assignment to agents. Enabled real-time order tracking and notifications.</p>
                    </div>
                    <div className="neon-card-small p-3">
                      <h4 className="font-semibold text-white text-sm">AI PDF Extractor</h4>
                      <p className="text-xs text-purple-300 mb-1">AI-powered Document Processing</p>
                      <p className="text-xs">Developed a custom AI model for extracting structured and unstructured text from PDF documents using NLP techniques and deep learning frameworks.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold neon-text-cyan mb-3">Core Strengths</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Quick Learner', 'Analytical Thinking', 'Team Work'].map((strength, index) => (
                      <div key={index} className="neon-card-small p-2 text-xs">
                        {strength}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold neon-text-cyan mb-3">Languages</h3>
                  <div className="neon-card-small p-3">
                    <p className="text-sm">English, Tamil (Native)</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="neon-text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  Hello, I'm{" "}
                  <span className="neon-text-cyan inline-block min-w-[200px] text-left">
                    <span 
                      key={currentLanguage}
                      className="animate-pulse"
                      style={{
                        animation: 'fadeInUp 0.5s ease-out forwards',
                      }}
                    >
                      {nameInLanguages[currentLanguage].name}
                    </span>
                  </span>
                </h3>
                <p className="text-lg text-purple-300 mb-2 font-semibold">
                  AI Developer & Full-Stack Engineer
                </p>
                <p className="text-md text-cyan-400 mb-4 font-medium">
                  B.Tech ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate developer specializing in artificial intelligence and full-stack development. 
                With expertise spanning machine learning, web development, mobile apps, and DevOps, I create 
                innovative solutions that bridge the gap between cutting-edge AI and practical applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                My journey includes notable achievements like being a Robocon 2024 finalist and Smart India 
                Hackathon 2024 finalist. I've built comprehensive projects from AI chatbots to cross-platform 
                applications, always focusing on user experience and innovative problem-solving.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="neon-btn-primary">
                  Let's Connect
                </button>
                <button 
                  className="neon-btn-secondary"
                  onClick={() => setShowResume(true)}
                >
                  View Resume
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <div 
                  className="w-12 h-12 rounded-full neon-card flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => handleSocialClick('email')}
                  title="Email: balaji.ponnusamy23@gmail.com"
                >
                  <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                
                <div 
                  className="w-12 h-12 rounded-full neon-card flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => handleSocialClick('linkedin')}
                  title="LinkedIn: linkedin.com/in/balaji2307"
                >
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </div>
                
                <div 
                  className="w-12 h-12 rounded-full neon-card flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => handleSocialClick('github')}
                  title="GitHub: github.com/balaji2k423"
                >
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                
                <div 
                  className="w-12 h-12 rounded-full neon-card flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => handleSocialClick('twitter')}
                  title="Twitter Profile"
                >
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
  <div className="relative">
    <div className="w-80 h-80 rounded-2xl overflow-hidden neon-card p-1">
  <div className="w-full h-full rounded-2xl relative overflow-hidden">
    
    {/* Full cover image */}
    <img
      src={profileImage}
      alt="Profile"
      className="w-full h-full object-cover"
    />

    {/* Optional overlay for better text visibility or styling */}
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-purple-500/10 rounded-2xl"></div>
  </div>
</div>

    {/* Floating tech icons instead of emojis */}
    <div className="absolute -top-6 -right-6 neon-card-small animate-float-medium">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="w-8 h-8"
      />
    </div>
    <div className="absolute -bottom-6 -left-6 neon-card-small animate-float-slow">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="w-8 h-8"
      />
    </div>
  </div>
</div>

        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center neon-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl lg:text-4xl font-bold neon-text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        /* Genie Animation */
        .modal-genie-in {
          animation: genieIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          transform-origin: bottom center;
        }
        
        .modal-genie-out {
          animation: genieOut 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
          transform-origin: bottom center;
        }

        @keyframes genieIn {
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3) translateY(100px);
            transform-origin: 50% 100%;
          }
          10% {
            opacity: 0.3;
            transform: scale3d(0.4, 0.4, 0.4) translateY(80px);
          }
          30% {
            opacity: 0.6;
            transform: scale3d(0.6, 0.6, 0.6) translateY(40px);
          }
          50% {
            opacity: 0.8;
            transform: scale3d(0.8, 0.8, 0.8) translateY(10px);
          }
          70% {
            opacity: 0.95;
            transform: scale3d(1.05, 1.05, 1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1) translateY(0px);
          }
        }

        @keyframes genieOut {
          0% {
            opacity: 1;
            transform: scale3d(1, 1, 1) translateY(0px);
            transform-origin: 50% 100%;
          }
          20% {
            opacity: 0.9;
            transform: scale3d(0.95, 0.95, 0.95) translateY(10px);
          }
          50% {
            opacity: 0.6;
            transform: scale3d(0.7, 0.7, 0.7) translateY(40px);
          }
          80% {
            opacity: 0.3;
            transform: scale3d(0.4, 0.4, 0.4) translateY(80px);
          }
          100% {
            opacity: 0;
            transform: scale3d(0.1, 0.1, 0.1) translateY(120px);
          }
        }

        /* Prevent body scroll when modal is open */
        body.modal-open {
          overflow: hidden;
        }

        /* Custom scrollbar for the modal */
        .modal-genie-in::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-genie-in::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        .modal-genie-in::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.6);
          border-radius: 4px;
        }
        
        .modal-genie-in::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </section>
  );
};

export default About;