import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const RealExamples = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-switch every 20 seconds on desktop only
  useEffect(() => {
    if (!isAutoPlay) return;
    
    // Disable auto-play on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveExample((prev) => (prev === 0 ? 1 : 0));
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const examples = [
    {
      id: 'chat',
      title: '24/7 Support',
      description: 'Answers questions at 2am. Books appointments while you sleep.',
      type: 'grid',
    },
    {
      id: 'bimworx',
      title: 'Automated Invoicing – Tailored for BIMworx',
      description: 'Customer fills form. Invoice generates automatically. Built for BIMworx.',
      type: 'workflow',
    },
  ];

  const handlePrev = () => {
    setIsAutoPlay(false);
    setActiveExample((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setActiveExample((prev) => (prev === 0 ? 1 : 0));
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setActiveExample(index);
  };

  return (
    <section id="real-examples" className="relative py-16 md:py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* subtle glow */}
        <div className="absolute inset-0 flex justify-center -z-10 pointer-events-none">
          <div className="w-2/3 h-[46%] bg-primary/16 blur-3xl opacity-25 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3">
            Real Examples
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Here's what we've built and how it works
          </p>
        </div>

        {/* Content Box with Arrows */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-border-light shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous example"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-text-secondary group-hover:text-primary transition-colors" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-border-light shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300 flex items-center justify-center group"
            aria-label="Next example"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-text-secondary group-hover:text-primary transition-colors" />
          </button>

          {/* Content Container */}
          <div className="bg-background-primary rounded-2xl p-6 md:p-8 border border-border-light shadow-xl mx-4 md:mx-0 transition-all duration-500">

            {/* Title & Description */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-3">
                {examples[activeExample].title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-text-secondary max-w-2xl mx-auto">
                {examples[activeExample].description}
              </p>
            </div>

            {/* Content Area */}
            <div className="transition-opacity duration-400">

              {/* 24/7 Support (Chatbot) */}
              {activeExample === 0 && (
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start max-w-4xl w-full">
                    {[1, 2].map((num) => (
                      <div
                        key={num}
                        className="rounded-xl overflow-hidden border border-primary/20 shadow-sm transition-all duration-300 bg-white flex items-center justify-center p-3 mx-auto w-full max-w-md"
                      >
                        <img
                          src={`https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/agent${num}.jpeg`}
                          alt={`Chat Support example ${num}`}
                          className="object-contain w-full h-[350px] md:h-[320px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* BIMworx Workflow */}
              {activeExample === 1 && (
                <div>
                  {/* Desktop layout */}
                  <div className="hidden md:flex items-center justify-center gap-6 max-w-5xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex-1 max-w-[300px]">
                      <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="object-contain w-full h-[320px]"
                        >
                          <source
                            src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/tallyform.MP4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <p className="text-sm text-text-tertiary text-center mt-3 font-medium">Form submitted</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />

                    {/* Step 2 */}
                    <div className="flex-1 max-w-[300px]">
                      <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                        <img
                          src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/GMAIL.jpg"
                          alt="Email notification"
                          className="object-contain w-full h-[320px]"
                        />
                      </div>
                      <p className="text-sm text-text-tertiary text-center mt-3 font-medium">Email sent</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />

                    {/* Step 3 */}
                    <div className="flex-1 max-w-[300px]">
                      <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                        <img
                          src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/invoice.jpeg"
                          alt="Generated invoice"
                          className="object-contain w-full h-[320px]"
                        />
                      </div>
                      <p className="text-sm text-text-tertiary text-center mt-3 font-medium">Invoice generated</p>
                    </div>
                  </div>

                  {/* Mobile layout - Full width, stacked vertically */}
                  <div className="md:hidden space-y-6 max-w-md mx-auto">
                    <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                      <video autoPlay loop muted playsInline className="object-contain w-full h-[350px]">
                        <source
                          src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/tallyform.MP4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p className="text-sm text-center text-text-tertiary font-medium">↓</p>
                    
                    <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                      <img 
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/GMAIL.jpg" 
                        alt="Email" 
                        className="object-contain w-full h-[350px]" 
                      />
                    </div>
                    <p className="text-sm text-center text-text-tertiary font-medium">↓</p>
                    
                    <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                      <img 
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/invoice.jpeg" 
                        alt="Invoice" 
                        className="object-contain w-full h-[350px]" 
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Dots Navigation - Bigger and easier to tap */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <button 
            onClick={() => handleDotClick(0)} 
            className="flex flex-col items-center gap-2 group touch-manipulation"
            aria-label="View 24/7 Support example"
          >
            <div className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ${activeExample === 0 ? 'bg-primary scale-125' : 'bg-border group-hover:bg-primary/50'}`} />
            <span className={`text-xs md:text-sm font-medium transition-colors ${activeExample === 0 ? 'text-primary' : 'text-text-tertiary group-hover:text-primary'}`}>
              24/7 Support
            </span>
          </button>

          <button 
            onClick={() => handleDotClick(1)} 
            className="flex flex-col items-center gap-2 group touch-manipulation"
            aria-label="View BIMworx example"
          >
            <div className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ${activeExample === 1 ? 'bg-primary scale-125' : 'bg-border group-hover:bg-primary/50'}`} />
            <span className={`text-xs md:text-sm font-medium transition-colors ${activeExample === 1 ? 'text-primary' : 'text-text-tertiary group-hover:text-primary'}`}>
              BIMworx
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealExamples;