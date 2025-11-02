import React from 'react';
import { Lightbulb, Users, Zap, Target, Eye, Award, ArrowRight, Brain, Loader, AlertCircle, Cpu, Network, Bot } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-100 via-white to-purple-100 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
                <Target className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-semibold text-purple-800">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="lottie-float-container w-full max-w-sm lg:max-w-md">
                  <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://gist.githubusercontent.com/jessica-singh79/a7ab6edf05b8f64b72a768900618bce6/raw/bebfe6384b862e6caf9dc4685845a899cdc739e8/gistfile1.txt"
                    style={{width: '100%', height: '100%'}}
                  />
                </div>
              </div>

              <div className="space-y-6 text-left">
                <div className="text-sm sm:text-base md:text-lg font-body text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    At <span className="font-bold">SimplifAI</span>, we noticed firsthand how businesses were <span className="font-bold">losing valuable time</span> on <span className="font-bold">repetitive tasks</span> such as data entry, booking management, and follow-ups. These <span className="font-bold">manual processes</span> often led to <span className="font-bold">missed opportunities</span> while simple <span className="font-bold">AI automation</span> could have prevented them.
                  </p>

                  <p className="mb-6">
                    Our founder experienced this firsthand while working in a taxi business, where <span className="font-bold">time delays</span> in transferring data often led to <span className="font-bold">missed opportunities</span>. That inspired <span className="font-bold">SimplifAI</span>: to make <span className="font-bold">AI automation simple</span>, <span className="font-bold">accessible</span>, and <span className="font-bold">tailored to real business needs</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 flex justify-center">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-body font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <span>Discover Your AI Solution</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;