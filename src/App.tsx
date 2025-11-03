import React, { useState, useEffect } from 'react';
import { AuroraBackground } from './components/ui/aurora-background';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { WhySimplifAISection } from './components/WhySimplifAISection';
import SimplifAILanding from './components/SimplifAILanding';
import MiniTestimonials from './components/MiniTestimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      <div className="fixed top-4 left-4 z-50 flex items-center bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 transition-transform group-hover:scale-110">
            <img
              src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/logo.png"
              alt="SimplifAI Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg font-heading font-bold text-gray-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:bg-clip-text group-hover:text-transparent">
            SimplifAI
          </span>
        </a>
      </div>
      
      <NavBarDemo />
      <AuroraBackground className="min-h-screen" showRadialGradient={false}>
        <Hero />
      </AuroraBackground>
      <About />
      <Services />
      <WhySimplifAISection />
      <Footer />
    </div>
  );
}

export default App;