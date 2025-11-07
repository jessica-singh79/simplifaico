import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const RealExamples = () => {
  const [activeExample, setActiveExample] = useState(0);

  // Auto-switch every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Subtle Glow Behind Box */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-3/4 h-[60%] bg-primary/20 blur-3xl opacity-20 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3">
            Real Examples
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Here's what we've built and how it works
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-background-primary rounded-2xl p-5 md:p-8 border border-border-light shadow-xl relative mb-6 transition-all duration-500">

          {/* Title & Description */}
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
              {examples[activeExample].title}
            </h3>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
              {examples[activeExample].description}
            </p>
          </div>

          {/* Content Area */}
          <div className="transition-opacity duration-500">

            {/* 24/7 Support (Chat Assistant) */}
            {activeExample === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
                <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300">
                  <img
                    src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/agent1.jpeg"
                    alt="Chat support response"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300">
                  <img
                    src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/agent2.jpeg"
                    alt="Booking automation flow"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}

            {/* BIMworx Workflow */}
            {activeExample === 1 && (
              <div>
                {/* Desktop layout */}
                <div className="hidden md:flex items-center justify-center gap-4 max-w-5xl mx-auto">

                  {/* Step 1: Tally Form */}
                  <div className="flex-1 max-w-xs">
                    <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-md">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                        style={{ filter: 'contrast(1.05) saturate(1.1)' }}
                      >
                        <source
                          src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/tallyform.MP4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p className="text-xs md:text-sm text-text-tertiary text-center mt-2 font-medium">
                      Form submitted
                    </p>
                  </div>

                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />

                  {/* Step 2: Gmail */}
                  <div className="flex-1 max-w-xs">
                    <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-md">
                      <img
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/GMAIL.jpg"
                        alt="Email notification"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-text-tertiary text-center mt-2 font-medium">
                      Email sent
                    </p>
                  </div>

                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />

                  {/* Step 3: Invoice */}
                  <div className="flex-1 max-w-xs">
                    <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-md">
                      <img
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/invoice.jpeg"
                        alt="Generated invoice"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-text-tertiary text-center mt-2 font-medium">
                      Invoice generated
                    </p>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden space-y-3 max-w-sm mx-auto">
                  <div className="rounded-lg overflow-hidden border border-primary/20 shadow-md">
                    <video autoPlay loop muted playsInline className="w-full h-auto">
                      <source
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/tallyform.MP4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <p className="text-xs text-center text-text-tertiary">
                    Form → Email → Invoice
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg overflow-hidden border border-primary/20">
                      <img
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/GMAIL.jpg"
                        alt="Email"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-primary/20">
                      <img
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/invoice.jpeg"
                        alt="Invoice"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setActiveExample(0)}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeExample === 0
                  ? 'bg-primary scale-125'
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
            <span
              className={`text-xs font-medium transition-colors ${
                activeExample === 0
                  ? 'text-primary'
                  : 'text-text-tertiary'
              }`}
            >
              24/7 Support
            </span>
          </button>

          <button
            onClick={() => setActiveExample(1)}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeExample === 1
                  ? 'bg-primary scale-125'
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
            <span
              className={`text-xs font-medium transition-colors ${
                activeExample === 1
                  ? 'text-primary'
                  : 'text-text-tertiary'
              }`}
            >
              BIMworx
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealExamples;
