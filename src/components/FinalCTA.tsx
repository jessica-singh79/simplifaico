import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Ready to SimplifAI Your Business?
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stop wasting hours on repetitive work. Let AI handle it so you can focus on growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 100;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-body font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 shadow-lg"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;