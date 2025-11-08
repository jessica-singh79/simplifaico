import React from 'react';
import { Phone, Wrench, Rocket, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Free Call",
      description: "15 minutes to see if we're a fit. We'll map out what's taking your time and what we can automate.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      number: "02",
      icon: Wrench,
      title: "We Build Your System",
      description: "We build it based on what you told us. You review it. When you're happy, we launch.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Go Live",
      description: "Your system starts working. Appointments book themselves. Follow-ups send on time. Support runs 24/7. You focus on your actual business.",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 md:py-24 bg-background-primary relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none opacity-30">
        <div className="w-1/2 h-1/2 bg-primary/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            How This Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Three steps. Fast. No confusion.
          </p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:flex items-start justify-between gap-8 mb-16 relative">
          {/* Connecting line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 opacity-20 -z-10"></div>
          
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1 group">
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-border-light hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full border-4 border-background-primary shadow-lg flex items-center justify-center">
                    <span className={`text-lg font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`} style={{stroke: 'url(#gradient)'}} />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center pt-20 px-2">
                  <ArrowRight className={`w-10 h-10 text-primary opacity-40`} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 border border-border-light shadow-sm">
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-white rounded-full border-4 border-background-primary shadow-lg flex items-center justify-center">
                  <span className={`text-base font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                    {step.number}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 pt-1">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary/40 to-transparent rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-semibold shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Book Your Call</span>
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
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