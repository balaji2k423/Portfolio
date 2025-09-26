import React, { useState } from "react";
import FusionLogo from "../assets/fusion.png";

const Skills = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBallClick = () => {
    setIsAnimating(true);
    // Add greeting message
    setMessages([{ type: 'bot', text: 'Hi! How can I help you?' }]);
    setIsChatOpen(true);
    
    // Reset animation after a short delay
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
      
      // Simple bot responses
      setTimeout(() => {
        const responses = [
          "Thanks for your message! I'm a demo chatbot for this portfolio.",
          "That's interesting! Feel free to explore the skills section.",
          "I can help you learn more about the technical skills showcased here.",
          "Great question! This is a demonstration of interactive UI elements.",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { type: 'bot', text: randomResponse }]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const skillCategories = [
    {
      title: "Backend & Data",
      color: "blue",
      skills: [
        { name: "Python", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Go", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "PostgreSQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Java", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "SQL / MySQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
    },
    {
      title: "Frontend & Mobile",
      color: "cyan",
      skills: [
        { name: "React", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "React Native", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", level: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "purple",
      skills: [
        { name: "Docker", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Nginx", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
        { name: "Git", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" },
        { name: "Jenkins", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      ],
    },
    {
      title: "AI & Embedded Systems",
      color: "indigo",
      skills: [
        { name: "TensorFlow", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "YOLO (Object Detection)", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Arduino", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
        { name: "IoT Systems", level: 83, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
        { name: "CAD Design", level: 70, icon: FusionLogo },
        { name: "Jupyter / NLP", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 relative" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          
          
          
          
        </div>

        {/* Chatbot Modal - Bottom Left */}
        {isChatOpen && (
          <div className="fixed bottom-4 left-4 z-50">
            <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-cyan-400/30">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded-full relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(circle at center, #000 0%, #1a1a2e 40%, #16213e 100%)',
                      boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
                    }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `
                          radial-gradient(ellipse at 30% 50%, rgba(0, 255, 255, 0.6) 0%, transparent 50%),
                          radial-gradient(ellipse at 70% 30%, rgba(255, 0, 128, 0.5) 0%, transparent 40%)
                        `,
                        animation: 'siriWaves 2s ease-in-out infinite'
                      }}
                    />
                  </div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors w-6 h-6 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'bg-gray-700/80 text-gray-200 border border-gray-600'
                      }`}
                      style={{
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input Area */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-800/80 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-sm border border-gray-600"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Grid - Centered with margin for 3D models */}
        <div className="mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-10">
            {skillCategories.map((category, i) => (
              <div
                key={category.title}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/50"
                data-aos="fade-up"
                data-aos-delay={i * 200}
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center text-center bg-gray-800/60 p-4 rounded-xl hover:bg-gray-700/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-cyan-400/30"
                      data-aos="zoom-in"
                      data-aos-delay={idx * 60}
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-200 shadow-lg mb-3 hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain"
                          style={{ 
                            filter: skill.name === 'GitHub' ? 'invert(1)' : 'none' 
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-200 mb-2">
                        {skill.name}
                      </span>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full bg-gray-700/80 h-2 rounded-full overflow-hidden">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'fillProgress 2s ease-out forwards',
                            animationDelay: `${idx * 100}ms`
                          }}
                        ></div>
                      </div>
                      
                      <span className="text-xs text-cyan-400 font-semibold mt-1">
                        {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements for Visual Enhancement */}
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-80 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <style jsx>{`
        @keyframes fillProgress {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }

        @keyframes siriGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 255, 255, 0.6), inset 0 0 30px rgba(0, 0, 0, 0.6);
          }
        }

        @keyframes siriPulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 60px rgba(0, 255, 255, 0.8), 0 0 100px rgba(255, 0, 128, 0.4);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          }
        }

        @keyframes siriWaves {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: rotate(180deg) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.6;
          }
        }

        @keyframes siriRing {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        /* Custom scrollbar for better integration */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.8);
        }

        /* Enhanced glow effects */
        .bg-gray-900\/80:hover {
          box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.15);
        }

        /* Responsive adjustments for siri ball */
        @media (max-width: 768px) {
          .absolute.top-0.right-0 {
            right: 0;
            width: 48px;
            height: 48px;
          }
        }
        
        @media (max-width: 1024px) {
          .absolute.top-0.right-0 {
            right: 5px;
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;