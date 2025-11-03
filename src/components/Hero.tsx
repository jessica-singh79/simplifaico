import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      
      {/* Hero Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-32">
        <div className="flex flex-col md:flex-row items-center min-h-[600px] gap-12">
          
          {/* Left Column - Text Content */}
          <div className="w-full md:w-3/5 text-left">
            
            {/* Main Headline - Improved with Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="block text-gray-900 mb-2">
                Your Team Drowns in
              </span>
              <span className="flex items-center flex-wrap gap-3">
                <GooeyText
                  texts={["Repetitive Tasks", "Manual Work", "Busywork", "Data Entry"]}
                  morphTime={1}
                  cooldownTime={1.5}
                  className="inline-block"
                  textClassName="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black"
                />
              </span>
              <span className="block text-gray-900 mt-4">
                Let's Fix That.
              </span>
            </h1>

            {/* Subheadline - Clear Benefit */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-2xl">
              Automate customer support, data entry, and sales follow-ups in 2-3 weeks.
              <span className="block mt-2 font-semibold text-gray-700">No developers needed.</span>
            </p>

            {/* Trust Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <span className="font-semibold">Trusted by 500+ businesses</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">40% average cost reduction</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <span>Get Free Automation Audit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-all"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Case Study Stat */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-lg">
              <p className="text-sm text-gray-600 mb-2">REAL RESULTS</p>
              <p className="text-gray-800 font-semibold">
                "Saved our team <span className="text-blue-600 font-bold">25 hours per week</span> in the first month. ROI was instant."
              </p>
              <p className="text-sm text-gray-500 mt-2">— Sarah J., Operations Manager</p>
            </div>
          </div>

          {/* Right Column - Lottie Animation */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <div className="w-full max-w-md">
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://gist.githubusercontent.com/jessica-singh79/011e7878d7d3b8a1e08b9a9f2c7c1b48/raw/cadb5492959621fd032af455aaa965bc99f2cd52/gistfile1.txt"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '500px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;