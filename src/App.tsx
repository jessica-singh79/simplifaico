import React from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import { WhySimplifAISection } from './components/WhySimplifAISection';
import FAQTabs from './components/FAQTabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary">
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <About />
      <WhySimplifAISection />
      <FAQTabs />
      <Footer />
    </div>
  );
}

export default App;
