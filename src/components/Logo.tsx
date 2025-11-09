import React from 'react';

const Logo: React.FC = () => {
  return (
    <a 
      href="#hero" 
      className="absolute top-6 left-6 z-40 group"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
        <img 
          src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/logo.png"
          alt="SimplifAI" 
          className="h-7 w-auto"
        />
        <span className="text-lg font-semibold text-primary font-body">
          SimplifAI
        </span>
      </div>
    </a>
  );
};

export default Logo;