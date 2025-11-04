import React from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { WhySimplifAISection } from './components/WhySimplifAISection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Static Logo in top-left (fixed) */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
        <a href="/" className="flex items-center gap-3">
          <div className="h-12 w-12">
            <img
              src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/logo.png"
              alt="SimplifAI Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl md:text-3xl font-heading font-bold text-black">
            SimplifAI
          </span>
        </a>
      </div>

      {/* Navbar */}
      <NavBarDemo />

      {/* Hero Section */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* Main Content */}
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
