import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Simple process. No confusion. You're up and running in weeks, not months.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-5xl mx-auto mb-12 md:mb-16">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:flex items-start justify-between">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-background-secondary border-2 border-border flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Free Consultation
              </h3>
              <p className="text-sm text-text-secondary mb-2">
                15-minute call. We talk about what's eating up your time and how automation can fix it.
              </p>
              <p className="text-xs text-text-tertiary font-medium">
                15 minutes
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
              <p className="text-sm text-text-secondary mb-2">
                We build your custom website and automation systems. You approve it before it goes live.
              </p>
              <p className="text-xs text-text-tertiary font-medium">
                2-3 weeks
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
                Launch & Support
              </h3>
              <p className="text-sm text-text-secondary mb-2">
                You go live. Systems run 24/7. We handle any issues and make adjustments as you grow.
              </p>
              <p className="text-xs text-text-tertiary font-medium">
                Ongoing
              </p>
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-text-primary">1</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Free Consultation
                  </h3>
                  <p className="text-sm text-text-secondary mb-2">
                    15-minute call. We talk about what's eating up your time and how automation can fix it.
                  </p>
                  <p className="text-xs text-text-tertiary font-medium">
                    15 minutes
                  </p>
                </div>
              </div>
              {/* Connecting line */}
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
                  <p className="text-sm text-text-secondary mb-2">
                    We build your custom website and automation systems. You approve it before it goes live.
                  </p>
                  <p className="text-xs text-text-tertiary font-medium">
                    2-3 weeks
                  </p>
                </div>
              </div>
              {/* Connecting line */}
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
                    Launch & Support
                  </h3>
                  <p className="text-sm text-text-secondary mb-2">
                    You go live. Systems run 24/7. We handle any issues and make adjustments as you grow.
                  </p>
                  <p className="text-xs text-text-tertiary font-medium">
                    Ongoing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Start With a Free Call</span>
            <Phone className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-text-secondary">
            No commitment. Just a conversation about what you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;