import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import TypedBullets from './TypedBullets';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      
      {/* Hero Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-32">
        <div className="flex flex-col md:flex-row items-center min-h-[600px]">
          
          {/* Left Column - Text Content (60% width on desktop) */}
          <div className="w-full md:w-3/5 md:pr-12 text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6 md:mb-6 flex items-center flex-wrap gap-3">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                Let's
              </span>
              <GooeyText
                texts={["SimplifAI", "Automate", "Optimize", "Transform"]}
                morphTime={1}
                cooldownTime={1.5}
                className="inline-block"
                textClassName="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-heading font-black"
              />
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                it
              </span>
            </h1>

            {/* Subheading - Desktop */}
            <p className="hidden md:block text-sm sm:text-base md:text-lg lg:text-xl font-body text-gray-600 font-light leading-relaxed mb-4 max-w-2xl">
              Transform your business with intelligent automation that works around the clock. Real results, measurable impact.
            </p>

            {/* Subheading - Mobile */}
            <p className="block md:hidden text-sm font-body text-gray-600 font-light leading-relaxed mb-4 max-w-2xl">
              AI that works while you sleep.
            </p>

            {/* Animated Typing Bullets - All Screen Sizes */}
            <div className="mb-6 md:mb-6">
              <TypedBullets />
            </div>

            {/* CTA Button */}
            <div className="mb-8 md:mb-12">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full text-[1.1rem] md:text-lg font-body font-semibold shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <span>See What We Do</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Mission Statement - Desktop */}
            <p className="hidden md:block text-xs sm:text-sm md:text-base lg:text-lg font-body text-gray-600 font-bold leading-relaxed max-w-3xl">
              We started SimplifAI to empower businesses of all sizes with the power of artificial intelligence. Our mission is to make complex automation accessible, helping you grow smarter, not harder.
            </p>

            {/* Mission Statement - Mobile */}
            <p className="block md:hidden text-xs sm:text-sm font-body text-gray-600 font-bold leading-relaxed max-w-3xl mt-8 px-2">
              Empowering businesses with accessible AI automation. Grow smarter, not harder.
            </p>
          </div>

          {/* Right Column - Lottie Animation (40% width on desktop) */}
          <div className="w-full md:w-2/5 mt-12 md:mt-0 flex items-center justify-center">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://gist.githubusercontent.com/jessica-singh79/011e7878d7d3b8a1e08b9a9f2c7c1b48/raw/cadb5492959621fd032af455aaa965bc99f2cd52/gistfile1.txt"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '400px sm:500px md:600px lg:700px'
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