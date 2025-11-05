import React from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import Hero from './components/Hero';
import About from './components/About';
import FAQTabs from './components/FAQTabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary">
      <NavBarDemo />
      <Hero />
      <About />
      <FAQTabs />
      <Footer />
    </div>
  );
}

export default App;