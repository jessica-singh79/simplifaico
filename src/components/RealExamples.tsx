import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const RealExamples = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Real Examples
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Here's what we've built and how it works
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Large Box - Chat Assistant */}
          <div className={`lg:col-span-2 bg-background-primary rounded-2xl p-6 md:p-8 border border-border-light shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                Always On
              </h3>
              <p className="text-sm md:text-base text-text-secondary">
                Answers questions at 2am. Books appointments while you sleep.
              </p>
            </div>

            {/* Chat Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border-light shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/agent1.jpeg" alt="Chat assistant initial response" className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border-light shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/agent2.jpeg" alt="Chat assistant booking flow" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Small Box - BIMworx Workflow */}
          <div className={`bg-background-primary rounded-2xl p-6 md:p-8 border border-border-light shadow-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                Automated Invoicing
              </h3>
              <p className="text-sm md:text-base text-text-secondary">
                Customer fills form. Invoice generates automatically. Built for BIMworx.
              </p>
            </div>

            {/* Workflow with Animated Arrows */}
            <div className="space-y-4">
              
              {/* Step 1: Tally Form Video */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-border-light shadow-md">
                  <video autoPlay loop muted playsInline className="w-full h-auto" style={{ playbackRate: 2 }}>
                    <source src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/tallyform.MP4" type="video/mp4" />
                  </video>
                </div>
                <p className="text-xs text-text-tertiary mt-2">Form submitted</p>
              </div>

              {/* Animated Arrow */}
              <div className="flex justify-center">
                <ArrowRight className={`w-6 h-6 text-primary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`} style={{ animationDelay: '400ms' }} />
              </div>

              {/* Step 2: Gmail */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-border-light shadow-md">
                  <img src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/GMAIL.jpg" alt="Email notification" className="w-full h-auto" />
                </div>
                <p className="text-xs text-text-tertiary mt-2">Email sent</p>
              </div>

              {/* Animated Arrow */}
              <div className="flex justify-center">
                <ArrowRight className={`w-6 h-6 text-primary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`} style={{ animationDelay: '600ms' }} />
              </div>

              {/* Step 3: Invoice */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-border-light shadow-md">
                  <img src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/invoice.jpeg" alt="Generated invoice" className="w-full h-auto" />
                </div>
                <p className="text-xs text-text-tertiary mt-2">Invoice generated</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealExamples;