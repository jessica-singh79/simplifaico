import React from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import RealExamples from './components/RealExamples';

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary">
      <NavBarDemo />
      <Hero />
      <About />
      <RealExamples />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;