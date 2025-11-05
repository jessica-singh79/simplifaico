import React from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { WhySimplifAISection } from './components/WhySimplifAISection';
import FAQTabs from './components/FAQTabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Hero Section with Static Logo */}
      <section className="relative z-10">
        <Hero />
      </section>
      
      {/* Main Content */}
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <About />
        <Services />
        <WhySimplifAISection />
        <FAQTabs />
        <Footer />
      </div>
    </div>
  );
}

export default App;