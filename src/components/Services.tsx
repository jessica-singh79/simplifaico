import React from 'react';
import { Globe, Zap, Calendar, RefreshCw, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Professional websites built to convert. Fast loading, mobile-optimized, and designed to turn visitors into customers—not just look pretty.",
  },
  {
    icon: Zap,
    title: "Lead Capture Automation",
    description: "Smart forms and chatbots that capture leads 24/7, auto-qualify prospects, and send hot leads straight to your phone or CRM.",
  },
  {
    icon: Calendar,
    title: "Booking & Scheduling",
    description: "Let customers book appointments directly on your site. Automatic confirmations, reminders, and calendar sync—no more phone tag.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up Automation",
    description: "Never lose a lead to silence. Automatic email and SMS follow-ups that nurture prospects and recover abandoned bookings.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What We Build
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Websites and automation that work while you sleep
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-4 md:mb-5">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-slate-400 mb-6 text-sm md:text-base">
            Need something custom? We build tailored solutions for your business.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;