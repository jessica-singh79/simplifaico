import React from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary">
      <NavBarDemo />
      <Hero />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;