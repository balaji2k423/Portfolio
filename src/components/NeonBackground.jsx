import React from 'react';

const NeonBackground = () => {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated neon grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-pulse 4s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      {/* Floating neon orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow neon-glow-cyan"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-medium neon-glow-purple" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float-fast neon-glow-blue" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow neon-glow-indigo" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Neon circuit lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NeonBackground;