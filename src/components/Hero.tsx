import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center">
      
      {/* Hero Content - Centered */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-32 text-center">
        
        {/* Main Headline - MASSIVE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 tracking-tight">
          <span className="block text-gray-900">
            Your Team Drowns in
          </span>
          <span className="block text-gray-900">
            Repetitive Tasks.
          </span>
          <span className="block mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Fix That.
          </span>
        </h1>

        {/* Subheadline - Clear Benefit */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
          Automate customer support, data entry, and sales follow-ups in 2-3 weeks. 
          <span className="block mt-2 font-semibold text-gray-700">No developers needed.</span>
        </p>

        {/* Trust Badge */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
          </div>
          <span className="font-semibold">Trusted by 500+ businesses</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Average 40% cost reduction</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <span>Get Free Automation Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-5 rounded-full text-lg font-semibold hover:border-gray-400 transition-all"
          >
            <Play className="w-5 h-5" />
            <span>Watch 2-Min Demo</span>
          </button>
        </div>

        {/* Social Proof - Client Logos or Stats */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Replace with actual client logos */}
            <div className="text-gray-400 font-semibold">Company 1</div>
            <div className="text-gray-400 font-semibold">Company 2</div>
            <div className="text-gray-400 font-semibold">Company 3</div>
            <div className="text-gray-400 font-semibold">Company 4</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;