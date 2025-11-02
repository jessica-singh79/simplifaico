import React, { useState } from 'react';
import { ArrowRight, FileText, Mail, BarChart3, Clock, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const SeeTheTransformation = () => {
  const [isPaused, setIsPaused] = useState(false);

  const transformations = [
    {
      icon: FileText,
      headline: "Manual Forms → AI Forms",
      description: "Collect data automatically with smart forms.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      icon: Mail,
      headline: "Email Chaos → Auto Workflows",
      description: "Route tasks automatically, keep projects moving.",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      icon: BarChart3,
      headline: "Spreadsheets → Live Dashboards",
      description: "Turn data into insights automatically.",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100"
    },
    {
      icon: Clock,
      headline: "Delays → Instant Approvals",
      description: "Automate approvals, eliminate bottlenecks.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    {
      icon: Zap,
      headline: "Repetition → AI Efficiency",
      description: "Eliminate repetitive work, free up time.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100"
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTransformations = [...transformations, ...transformations];

  const formatHeadline = (headline: string) => {
    const parts = headline.split('→');
    if (parts.length === 2) {
      return (
        <>
          {parts[0].trim()}
          <span className="text-blue-600 font-bold mx-2">→</span>
          {parts[1].trim()}
        </>
      );
    }
    return headline;
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            See the Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real examples of how businesses simplify their workflows with AI.
          </p>
        </div>

        {/* Desktop Arrow Indicators */}
        <div className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </div>
        </div>
        <div className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className={`flex space-x-6 ${isPaused ? '' : 'animate-scroll'}`}
              style={{
                width: `${duplicatedTransformations.length * 400}px`,
                animation: isPaused ? 'none' : 'scroll 60s linear infinite'
              }}
            >
              {duplicatedTransformations.map((transformation, index) => {
                const Icon = transformation.icon;
                
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-96 ${transformation.bgColor} ${transformation.borderColor} border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className="flex justify-center">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                      
                      {/* Headline */}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight text-center">
                        {formatHeadline(transformation.headline)}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed font-light text-center">
                        {transformation.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gradient Overlays for Seamless Effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Mobile Swipe Dots */}
        <div className="flex md:hidden justify-center space-x-2 mb-8">
          {transformations.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-300 rounded-full"
            ></div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 mx-auto shadow-lg"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${transformations.length * 400}px);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SeeTheTransformation;