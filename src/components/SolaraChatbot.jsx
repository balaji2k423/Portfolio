import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, Maximize2, Bot, Sparkles, MessageCircle } from 'lucide-react';

const SolaraChatbot = ({ siriGif, profilePic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const synth = useRef(window.speechSynthesis);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const speak = (text) => {
    if (synth.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = synth.current.getVoices().find(voice => 
        voice.name.includes('Samantha') || 
        voice.name.includes('Karen') || 
        voice.name.includes('Female') ||
        voice.gender === 'female'
      ) || synth.current.getVoices()[0];
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      synth.current.speak(utterance);
    }
  };

  const handleGifClick = () => {
    setIsOpen(true);
    const greeting = "Hi! I'm Solara, your AI assistant. How can I help you today?";
    setMessages([{
      id: 1,
      text: greeting,
      sender: 'bot',
      timestamp: new Date()
    }]);
    setTimeout(() => speak(greeting), 500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setMessages([]);
  };

  const generateBotResponse = (userMessage) => {
    const responses = [
      "I'm here to help! What would you like to know?",
      "That's an interesting question. Let me assist you with that.",
      "I'd be happy to help you with that. Could you provide more details?",
      "Great question! I'm processing that for you.",
      "I understand what you're asking. Here's what I can tell you...",
      "Thanks for reaching out! I'm here to assist you.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      speak(botResponse);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Siri GIF Trigger - ONLY visible when chatbot is NOT open */}
      {!isOpen && (
        <div 
          className="fixed bottom-8 right-8 z-50 cursor-pointer group"
          onClick={handleGifClick}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 blur-2xl scale-110 animate-pulse"></div>
            
            <div className="relative transform group-hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none">
              <img
                src={siriGif}
                alt="Chat with Solara"
                className="w-32 h-32 object-contain drop-shadow-2xl rounded-full"
              />
              
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                <MessageCircle size={12} />
              </div>
            </div>

            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-gray-900/95 backdrop-blur-lg text-white px-4 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap shadow-2xl border border-white/10">
                <div className="flex items-center space-x-2">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span>Chat with Solara AI</span>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900/95"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Window - ONLY visible when open */}
      {isOpen && (
        <div className={`fixed right-4 z-50 transition-all duration-700 ease-out ${
          isMinimized ? 'bottom-4 w-[350px] h-24' : 'bottom-4 w-[350px] h-[60vh] max-h-[600px]'
        }`}>
          
          {/* Main chatbot container with fixed structure */}
          <div className="h-full flex flex-col bg-white rounded-3xl shadow-2xl border-2 border-indigo-100 overflow-hidden">
            
            {/* FIXED Header Section - No scroll, always visible */}
            <div className="flex-shrink-0 px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-b-2 border-indigo-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1 min-w-0">
                  {/* Profile Picture */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/60 shadow-2xl bg-white">
                      {profilePic ? (
                        <img
                          src={profilePic}
                          alt="Solara AI Assistant"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="text-white" size={28} />
                        </div>
                      )}
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-3 border-white shadow-xl flex items-center justify-center">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                  
                  {/* Bot Name and Status */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-1">
                      <h1 className="text-white font-black text-2xl tracking-wider drop-shadow-lg whitespace-nowrap">
                        SOLARA
                      </h1>
                      
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg flex-shrink-0"></div>
                      <p className="text-white/95 text-sm font-semibold drop-shadow-lg truncate">
                        Intelligent Assistant • Online Now
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Control buttons - Always visible */}
                <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white/90 hover:text-white hover:bg-white/20 transition-all p-3 rounded-xl duration-200 hover:scale-110 shadow-lg flex-shrink-0"
                  >
                    {isMinimized ? (
                      <Maximize2 size={20} className="drop-shadow-lg" />
                    ) : (
                      <Minimize2 size={20} className="drop-shadow-lg" />
                    )}
                  </button>
                  <button
                    onClick={handleClose}
                    className="text-white/90 hover:text-white hover:bg-red-500/40 transition-all p-3 rounded-xl duration-200 hover:scale-110 shadow-lg flex-shrink-0"
                  >
                    <X size={20} className="drop-shadow-lg" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat content - only visible when not minimized */}
            {!isMinimized && (
              <>
                {/* SCROLLABLE Messages area with animated nebula background */}
                <div 
                  className="flex-1 p-4 relative overflow-y-auto"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {/* Animated Nebula Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
                    
                    {/* Nebula Cloud 1 */}
                    <div 
                      className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-pulse"
                      style={{
                        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
                        animation: 'float1 20s ease-in-out infinite'
                      }}
                    ></div>
                    
                    {/* Nebula Cloud 2 */}
                    <div 
                      className="absolute w-80 h-80 rounded-full opacity-20 blur-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
                        top: '60%',
                        right: '-20%',
                        animation: 'float2 25s ease-in-out infinite reverse'
                      }}
                    ></div>
                    
                    {/* Nebula Cloud 3 */}
                    <div 
                      className="absolute w-72 h-72 rounded-full opacity-25 blur-xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)',
                        bottom: '20%',
                        left: '-10%',
                        animation: 'float3 30s ease-in-out infinite'
                      }}
                    ></div>
                    
                    {/* Moving stars/particles */}
                    <div className="absolute inset-0">
                      <div 
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                        style={{
                          top: '20%',
                          left: '30%',
                          animation: 'twinkle 3s ease-in-out infinite'
                        }}
                      ></div>
                      <div 
                        className="absolute w-0.5 h-0.5 bg-indigo-300 rounded-full opacity-40"
                        style={{
                          top: '70%',
                          right: '25%',
                          animation: 'twinkle 4s ease-in-out infinite 1s'
                        }}
                      ></div>
                      <div 
                        className="absolute w-1.5 h-1.5 bg-purple-200 rounded-full opacity-50"
                        style={{
                          top: '45%',
                          left: '80%',
                          animation: 'twinkle 2.5s ease-in-out infinite 2s'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* CSS Animations */}
                  <style dangerouslySetInnerHTML={{
                    __html: `
                      .flex-1::-webkit-scrollbar {
                        display: none;
                      }
                      
                      @keyframes float1 {
                        0%, 100% { 
                          transform: translate(-20%, -20%) rotate(0deg);
                          opacity: 0.3;
                        }
                        33% { 
                          transform: translate(10%, -30%) rotate(120deg);
                          opacity: 0.2;
                        }
                        66% { 
                          transform: translate(-30%, 10%) rotate(240deg);
                          opacity: 0.4;
                        }
                      }
                      
                      @keyframes float2 {
                        0%, 100% { 
                          transform: translate(20%, 20%) scale(1);
                          opacity: 0.2;
                        }
                        50% { 
                          transform: translate(-10%, -15%) scale(1.1);
                          opacity: 0.3;
                        }
                      }
                      
                      @keyframes float3 {
                        0%, 100% { 
                          transform: translate(0%, 0%) rotate(0deg) scale(1);
                          opacity: 0.25;
                        }
                        25% { 
                          transform: translate(15%, -20%) rotate(90deg) scale(0.9);
                          opacity: 0.15;
                        }
                        50% { 
                          transform: translate(-10%, -10%) rotate(180deg) scale(1.1);
                          opacity: 0.35;
                        }
                        75% { 
                          transform: translate(20%, 15%) rotate(270deg) scale(0.95);
                          opacity: 0.2;
                        }
                      }
                      
                      @keyframes twinkle {
                        0%, 100% { 
                          opacity: 0.6;
                          transform: scale(1);
                        }
                        50% { 
                          opacity: 1;
                          transform: scale(1.5);
                        }
                      }
                    `
                  }} />
                  
                  {/* Messages content with relative positioning */}
                  <div className="relative z-10 space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="w-full">
                        {message.sender === 'bot' ? (
                          /* Bot Message */
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-200 shadow-lg bg-white">
                              {profilePic ? (
                                <img src={profilePic} alt="Solara" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                                  <Bot className="text-white" size={16} />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 max-w-[250px]">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-bold text-indigo-700">Solara</span>
                                <span className="text-xs text-gray-500">
                                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                              </div>
                              <div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-100 rounded-2xl rounded-tl-md px-4 py-3 shadow-lg">
                                <p className="text-gray-800 text-sm leading-relaxed font-medium break-words">
                                  {message.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* User Message */
                          <div className="flex items-start justify-end space-x-3 mb-4">
                            <div className="flex-1 flex flex-col items-end max-w-[250px]">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-xs text-gray-500">
                                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                <span className="text-sm font-bold text-purple-700">You</span>
                              </div>
                              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl rounded-tr-md px-4 py-3 shadow-lg">
                                <p className="text-white text-sm leading-relaxed font-medium break-words">
                                  {message.text}
                                </p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg border-2 border-white">
                              <span className="text-white font-bold text-sm">U</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-200 shadow-lg bg-white">
                          {profilePic ? (
                            <img src={profilePic} alt="Solara" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                              <Bot className="text-white" size={16} />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 max-w-[250px]">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-bold text-indigo-700">Solara</span>
                            <span className="text-xs text-green-600 font-medium">is typing...</span>
                          </div>
                          <div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-100 rounded-2xl rounded-tl-md px-4 py-3 shadow-lg w-20">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </div>

                {/* FIXED Input area - No scroll, always visible */}
                <div className="flex-shrink-0 p-4 bg-white border-t-2 border-indigo-100">
                  <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                      <textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message to Solara..."
                        rows="1"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-indigo-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-400 text-gray-800 placeholder-gray-500 font-medium transition-all duration-300 resize-none"
                        style={{ 
                          minHeight: '48px', 
                          maxHeight: '120px',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className="flex-shrink-0 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SolaraChatbot;