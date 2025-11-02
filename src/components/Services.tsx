import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Bot, Globe, Wrench, MessageSquare, ArrowRight } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(410);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const services = [
    {
      icon: Bot,
      title: "Smart AI Assistant",
      description: "24/7 intelligent support that handles customer queries, schedules appointments, qualifies leads, and seamlessly escalates complex issues to your team.",
      tags: ["24/7 Support", "Multi-language"],
      benefits: ["Reduce response time by 90%", "Handle 100+ conversations simultaneously"],
      isSpecial: true
    },
    {
      icon: Globe,
      title: "Personalized Website Experiences",
      description: "Your website adapts to each visitor in real-time, showing personalized content, recommendations, and CTAs based on their behavior—increasing conversions by up to 40%.",
      tags: ["Real-time", "Behavior-based"],
      benefits: ["Increase conversions up to 40%", "Personalized for each visitor"]
    },
    {
      icon: Wrench,
      title: "Custom AI Workflows",
      description: "Automate your unique business processes—from invoice processing and data entry to inventory management and customer follow-ups. Built specifically for your needs.",
      tags: ["Process Automation", "API Integration"],
      benefits: ["Save 30+ hours per week", "Zero coding required"]
    }
  ];

  const totalCards = services.length;

  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(window.innerWidth - 32);
      } else {
        setCardWidth(360);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalCards);
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoPlaying, totalCards]);

  const updateCarousel = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : totalCards - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev < totalCards - 1 ? prev + 1 : 0));
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const IconComponent = ({ icon: Icon, isSpecial }: { icon: any, isSpecial?: boolean }) => (
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 ${
      isSpecial
        ? 'bg-white/20 backdrop-blur-sm'
        : 'bg-gradient-to-br from-indigo-500 to-violet-600'
    }`}>
      <Icon className={`w-7 h-7 ${isSpecial ? 'text-white' : 'text-white'}`} />
    </div>
  );

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Our Services
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-violet-800 bg-clip-text text-transparent">
              Automate Your Business Tasks
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From customer support to operational workflows, SimplifAI builds intelligent automation that works 24/7—so you can focus on growth.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden py-10">
          <div
            ref={carouselRef}
            className="flex gap-8 transition-transform duration-500 ease-out px-2"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-[calc(100vw-2rem)] sm:w-[328px] flex-shrink-0 rounded-3xl p-6 relative overflow-hidden transition-all duration-300 ${
                  service.isSpecial
                    ? 'bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 text-white shadow-2xl hover:scale-[1.02]'
                    : 'bg-white border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-1'
                }`}
              >
                {service.isSpecial && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                {/* Service Icon */}
                <IconComponent icon={service.icon} isSpecial={service.isSpecial} />

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl sm:text-3xl font-black leading-tight ${
                    service.isSpecial ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-base leading-relaxed ${
                    service.isSpecial ? 'text-white/95' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Benefits */}
                  {service.benefits && (
                    <div className="space-y-2 pt-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            service.isSpecial ? 'bg-white/20' : 'bg-indigo-100'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              service.isSpecial ? 'bg-white' : 'bg-indigo-600'
                            }`} />
                          </div>
                          <span className={`text-sm ${
                            service.isSpecial ? 'text-white/90' : 'text-gray-700'
                          }`}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          service.isSpecial
                            ? 'bg-white/20 text-white backdrop-blur-sm'
                            : 'bg-indigo-100 text-indigo-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={goToPrevious}
            aria-label="Previous service"
            className="w-12 h-12 rounded-full bg-white border-2 border-indigo-200 text-indigo-600 flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => updateCarousel(index)}
                aria-label={`Go to service ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-indigo-500 to-violet-600'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            aria-label="Next service"
            className="w-12 h-12 rounded-full bg-white border-2 border-indigo-200 text-indigo-600 flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 mb-6">
              <Wrench className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We build tailored AI solutions designed specifically for your unique business processes and workflows. No two businesses are the same—your automation shouldn't be either.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <span>Let's Talk About Your Needs</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;