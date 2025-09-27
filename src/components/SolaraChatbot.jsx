import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, Maximize2, Bot, Sparkles, MessageCircle } from 'lucide-react';

const SolaraChatbot = ({ siriGif, profilePic, backgroundImage, apiKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const synth = useRef(window.speechSynthesis);

  // Common Q&A pairs (only for basic greetings and simple responses)
  const commonQuestions = {
    "hello": "Hello! I'm Solara, your AI assistant. How can I help you today?",
    "hi": "Hi there! I'm here to assist you with any questions you might have.",
    "hey": "Hey! Great to see you here. What can I help you with?",
    "bye": "Goodbye! It was nice chatting with you. Feel free to come back anytime!",
    "goodbye": "Goodbye! Have a wonderful day and don't hesitate to reach out if you need anything.",
    "thanks": "You're welcome! Happy to help anytime.",
    "thank you": "You're very welcome! I'm glad I could help. Is there anything else you'd like to know?"
  };

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

  // Check for common questions first (exact matches only)
  const checkCommonQuestions = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    // Check for exact matches only - no partial matching for questions
    if (commonQuestions[message]) {
      return commonQuestions[message];
    }
    
    // Only check for very specific greeting patterns
    if (message === 'hi' || message === 'hello' || message === 'hey') {
      return commonQuestions[message];
    }
    
    // Return null for everything else to trigger API call
    return null;
  };

  // Fallback responses for when API fails
  const fallbackResponses = [
    "That's an interesting question! Let me think about that for a moment.",
    "I understand what you're asking. Based on my knowledge, I'd say that's something worth exploring further.",
    "Great question! While I don't have all the details right now, I can tell you that this topic is quite fascinating.",
    "I appreciate you asking that. From what I know, there are several ways to approach this.",
    "That's a thoughtful question. I'd be happy to help you explore this topic further.",
    "Interesting point! This is definitely something that many people wonder about.",
    "I can see why you'd ask that. It's a topic that has many different perspectives.",
    "That's a great question to consider. There are usually multiple factors at play with something like this."
  ];

  // DeepSeek API call function
  const callAIAPI = async (userMessage) => {
    console.log('Calling DeepSeek API for message:', userMessage);
    
    try {
      // Use the API key passed as prop
      const API_KEY = apiKey || "sk-c13bc6c43ea24abb8fa51e0f2fa51376"; // Replace with your actual DeepSeek API key
      
      if (!apiKey) {
        console.warn('No API key provided as prop');
        return "Please provide your DeepSeek API key to enable AI responses.";
      }

      console.log('Making request to DeepSeek API...');

      const response = await fetch('https://api.deepseek.com/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat', // DeepSeek's chat model
          messages: [
            {
              role: 'system',
              content: 'You are Solara, a helpful AI assistant. Provide concise, friendly, and helpful responses. Keep your answers informative but not too long.'
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 200,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });

      console.log('DeepSeek API Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('DeepSeek API Error:', errorText);
        
        if (response.status === 401) {
          return "Authentication failed. Please check your DeepSeek API key.";
        } else if (response.status === 429) {
          return "Rate limit reached. Please try again in a moment.";
        } else if (response.status === 400) {
          return "Invalid request. Please try rephrasing your question.";
        } else {
          return `DeepSeek API error (${response.status}). Please try again later.`;
        }
      }

      const data = await response.json();
      console.log('DeepSeek API response received successfully');
      
      const aiResponse = data.choices?.[0]?.message?.content;
      if (!aiResponse) {
        console.error('No response content in DeepSeek API response');
        return "I received an empty response. Please try asking your question again.";
      }

      return aiResponse.trim();
      
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        return "Network error. Please check your internet connection and try again.";
      }
      
      // Return a contextual fallback response
      if (userMessage.toLowerCase().includes('what') || userMessage.toLowerCase().includes('how') || userMessage.toLowerCase().includes('why')) {
        return `That's a thoughtful question about "${userMessage}". I'm having some technical difficulties right now, but I'd be happy to help you explore this topic once I'm back online.`;
      }
      
      return `I understand you're asking about "${userMessage}". I'm experiencing some technical issues right now, but I'd love to help you with this topic!`;
    }
  };

  const generateBotResponse = async (userMessage) => {
    // Check for basic greetings first
    const commonResponse = checkCommonQuestions(userMessage);
    if (commonResponse) {
      return commonResponse;
    }
    
    // For all other messages, call DeepSeek API
    return await callAIAPI(userMessage);
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
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      const botResponse = await generateBotResponse(currentMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setTimeout(() => speak(botResponse), 300);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
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
                {/* Messages area with custom background image */}
                <div 
                  className="flex-1 p-4 relative overflow-y-auto"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : `url('/images/your-default-background.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
                  
                  {/* Hide scrollbar */}
                  <style dangerouslySetInnerHTML={{
                    __html: `
                      .flex-1::-webkit-scrollbar {
                        display: none;
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