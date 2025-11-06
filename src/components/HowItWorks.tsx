import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            How This Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Three steps. Fast. No confusion.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-5xl mx-auto mb-12 md:mb-16">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:flex items-start justify-between">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-background-secondary border-2 border-border flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-text-tertiary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Free Call
              </h3>
              <p className="text-sm text-text-secondary">
                15 minutes. We figure out what's eating your time and if we can help.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-4 pt-8">
              <ArrowRight className="w-8 h-8 text-text-tertiary" />
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-background-secondary border-2 border-border flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                We Build It
              </h3>
              <p className="text-sm text-text-secondary">
                We build it based on what you told us. You review it. When you're happy, we launch.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-4 pt-8">
              <ArrowRight className="w-8 h-8 text-text-tertiary" />
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-background-secondary border-2 border-border flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                You Launch
              </h3>
              <p className="text-sm text-text-secondary">
                You launch. Everything runs itself. We're around if something breaks or you need changes.
              </p>
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-text-tertiary" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Free Call
                  </h3>
                  <p className="text-sm text-text-secondary">
                    15 minutes. We figure out what's eating your time and if we can help.
                  </p>
                </div>
              </div>
              <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-text-primary">2</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    We Build It
                  </h3>
                  <p className="text-sm text-text-secondary">
                    We build it based on what you told us. You review it. When you're happy, we launch.
                  </p>
                </div>
              </div>
              <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-text-primary">3</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    You Launch
                  </h3>
                  <p className="text-sm text-text-secondary">
                    You launch. Everything runs itself. We're around if something breaks or you need changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300">
            <span>Book Your Call</span>
            <Phone className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-text-secondary">
            No pressure. Just 15 minutes to see if we're a fit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;