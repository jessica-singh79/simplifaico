import React from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { WhySimplifAISection } from './components/WhySimplifAISection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating logo */}
      <div className="fixed top-4 left-4 z-50 flex items-center bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 transition-transform group-hover:scale-110">
            <img
              src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/logo.png"
              alt="SimplifAI Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg font-heading font-bold text-gray-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent">
            SimplifAI
          </span>
        </a>
      </div>

      {/* Navbar always on top */}
      <NavBarDemo />

      {/* Hero Section — independent dark gradient */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* Light gradient background for rest of the page */}
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <About />
        <Services />
        <WhySimplifAISection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
