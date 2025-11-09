import React from 'react';

const Logo: React.FC = () => {
  return (
    <a 
      href="#hero" 
      className="fixed top-6 left-6 z-50 group"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <img 
          src="/logo.png" 
          alt="SimplifAI" 
          className="h-8 w-auto"
        />
        <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          SimplifAI
        </span>
      </div>
    </a>
  );
};

export default Logo;