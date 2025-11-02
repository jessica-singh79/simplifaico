import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Cog } from 'lucide-react';

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
      icon: "📅",
      title: "Effortless Client Booking",
      description: "Automated scheduling that syncs with your calendar, sends confirmations, and handles reschedules.",
      tags: ["Auto-sync", "Smart calendar"],
      color: {
        iconGradient: "from-blue-500 to-cyan-500",
        tagBg: "bg-blue-100",
        tagText: "text-blue-700"
      }
    },
    {
      icon: "🎯",
      title: "Lead Capture & Management",
      description: "Capture leads from any channel, qualify them automatically, and nurture with intelligent follow-ups.",
      tags: ["Multi-channel", "Auto-qualify"],
      color: {
        iconGradient: "from-green-500 to-teal-500",
        tagBg: "bg-green-100",
        tagText: "text-green-700"
      }
    },
    {
      icon: "🔄",
      title: "Automated Follow Ups",
      description: "Never miss a follow-up. AI sends personalized messages at the perfect time to keep leads warm.",
      tags: ["Smart timing", "Personalized"],
      color: {
        iconGradient: "from-orange-500 to-red-500",
        tagBg: "bg-orange-100",
        tagText: "text-orange-700"
      }
    },
    {
      icon: "🌐",
      title: "Dynamic Content & Websites",
      description: "Your website adapts to each visitor, showing the right content to the right person at the right time.",
      tags: ["Personalization", "Real-time"],
      color: {
        iconGradient: "from-indigo-500 to-purple-500",
        tagBg: "bg-indigo-100",
        tagText: "text-indigo-700"
      }
    },
    {
      icon: "🤖",
      title: "Smart AI Assistant",
      description: "24/7 intelligent support that handles queries, provides information, and seamlessly hands off to humans.",
      tags: ["24/7 support", "Multi-language"],
      isSpecial: true
    },
    {
      icon: "✨",
      title: "Not What You're Looking For?",
      description: "We provide tailored AI solutions designed specifically for your unique business needs and workflows.",
      tags: ["Custom solutions", "Bespoke AI"],
      color: {
        iconGradient: "from-purple-500 to-pink-500",
        tagBg: "bg-purple-100",
        tagText: "text-purple-700"
      }
    }
  ];

  const totalCards = services.length;

  // Calculate card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 640) {
        // Mobile: use viewport width minus padding
        setCardWidth(window.innerWidth - 16); // 16px = 1rem padding on each side
      } else {
        // Desktop: use fixed width (380px card + 32px gap)
        setCardWidth(412);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalCards);
      }, 4000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoPlaying, totalCards]);

  const updateCarousel = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : totalCards - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev < totalCards - 1 ? prev + 1 : 0));
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
        // Swipe left
        goToNext();
      } else {
        // Swipe right
        goToPrevious();
      }
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6">
            <Cog className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-800">Our Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 px-4 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent break-words">
              Automate Your Business Tasks
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 max-w-3xl mx-auto px-4">
            From admin work to customer support, SimplifAI builds tools that handle the repetitive stuff for you.
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
                className={`w-[calc(100vw-1rem)] sm:w-[380px] flex-shrink-0 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  service.isSpecial
                    ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white shadow-2xl hover:scale-105 transition-transform'
                    : 'bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow'
                }`}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg ${
                  service.isSpecial
                    ? 'bg-white/20 backdrop-blur-sm'
                    : `bg-gradient-to-br ${service.color.iconGradient}`
                }`}>
                  <span>{service.icon}</span>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className={`text-xl sm:text-2xl font-heading font-bold leading-tight ${
                    service.isSpecial ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base font-body leading-relaxed ${
                    service.isSpecial ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                       className={`px-4 py-2 rounded-full text-sm font-body font-semibold ${
                          service.isSpecial
                            ? 'bg-white/20 text-white backdrop-blur-sm'
                            : `${service.color.tagBg} ${service.color.tagText}`
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
            className="w-12 h-12 rounded-full bg-white border-2 border-purple-200 text-purple-600 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => updateCarousel(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full bg-white border-2 border-purple-200 text-purple-600 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;