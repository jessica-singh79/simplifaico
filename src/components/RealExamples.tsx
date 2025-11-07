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
    <section className="relative py-10 sm:py-14 md:py-16 bg-background-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">

        {/* subtle glow (kept small) */}
        <div className="absolute inset-0 flex justify-center -z-10 pointer-events-none">
          <div className="w-2/3 h-[46%] bg-primary/16 blur-3xl opacity-25 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
            Real Examples
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
            Here's what we've built and how it works
          </p>
        </div>

        {/* Content Box (kept border) */}
        <div className="bg-background-primary rounded-2xl p-6 border border-border-light shadow-xl max-w-5xl mx-auto relative mb-6 transition-all duration-500">

          {/* Title & Description */}
          <div className="text-center mb-5 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
              {examples[activeExample].title}
            </h3>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
              {examples[activeExample].description}
            </p>
          </div>

          {/* Content Area */}
          <div className="transition-opacity duration-400">

            {/* 24/7 Support (Chatbot) */}
            {activeExample === 0 && (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start max-w-4xl">
                  {[1, 2].map((num) => (
                    <div
                      key={num}
                      className="rounded-xl overflow-hidden border border-primary/20 shadow-sm transition-all duration-300 bg-white flex items-center justify-center p-3 max-w-[320px] mx-auto"
                    >
                      {/* image fully visible, not cropped */}
                      <img
                        src={`https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/agent${num}.jpeg`}
                        alt={`Chat Support example ${num}`}
                        className="object-contain w-full h-[320px]"
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
                  <div className="flex-1 max-w-[320px] mx-auto">
                    <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-contain w-full h-[320px]"
                        style={{ filter: 'contrast(1.05) saturate(1.05)' }}
                      >
                        <source
                          src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/tallyform.MP4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p className="text-xs text-text-tertiary text-center mt-2 font-medium">Form submitted</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex-1 max-w-[320px] mx-auto">
                    <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                      <img
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/GMAIL.jpg"
                        alt="Email notification"
                        className="object-contain w-full h-[320px]"
                      />
                    </div>
                    <p className="text-xs text-text-tertiary text-center mt-2 font-medium">Email sent</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex-1 max-w-[320px] mx-auto">
                    <div className="rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-white p-3">
                      <img
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/invoice.jpeg"
                        alt="Generated invoice"
                        className="object-contain w-full h-[320px]"
                      />
                    </div>
                    <p className="text-xs text-text-tertiary text-center mt-2 font-medium">Invoice generated</p>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden space-y-3 max-w-xs mx-auto">
                  <div className="rounded-lg overflow-hidden border border-primary/20 shadow-sm bg-white p-2">
                    <video autoPlay loop muted playsInline className="object-contain w-full h-[220px]">
                      <source
                        src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/tallyform.MP4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <p className="text-xs text-center text-text-tertiary">Form → Email → Invoice</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg overflow-hidden border border-primary/20 shadow-sm bg-white p-2">
                      <img src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/GMAIL.jpg" alt="Email" className="object-contain w-full h-[140px]" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-primary/20 shadow-sm bg-white p-2">
                      <img src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/invoice.jpeg" alt="Invoice" className="object-contain w-full h-[140px]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-5">
          <button onClick={() => setActiveExample(0)} className="flex flex-col items-center gap-2 group">
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeExample === 0 ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'}`} />
            <span className={`text-xs font-medium transition-colors ${activeExample === 0 ? 'text-primary' : 'text-text-tertiary'}`}>24/7 Support</span>
          </button>

          <button onClick={() => setActiveExample(1)} className="flex flex-col items-center gap-2 group">
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeExample === 1 ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'}`} />
            <span className={`text-xs font-medium transition-colors ${activeExample === 1 ? 'text-primary' : 'text-text-tertiary'}`}>BIMworx</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealExamples;
