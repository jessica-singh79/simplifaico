import React from 'react';
import { ArrowRight, Globe, Calendar, Mail, MessageCircle, TrendingUp } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
}: { 
  icon: any; 
  title: string; 
  description: string;
}) => (
  <div className="group relative p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-background-primary border border-border-light shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    {/* Icon */}
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-border flex items-center justify-center mb-4 md:mb-6 group-hover:border-primary transition-colors">
      <Icon className="w-6 h-6 md:w-7 md:h-7 text-text-tertiary group-hover:text-primary transition-colors" />
    </div>
    
    {/* Title */}
    <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-primary mb-3 leading-tight">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
      {description}
    </p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
            What We Build
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-text-secondary">
            Booking appointments, following up with leads, answering the same questions over and over. 
            We build systems that handle this automatically so you don't have to.
          </p>
        </header>

        {/* Feature Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <FeatureCard
            icon={Globe}
            title="Websites That Get You Customers"
            description="Fast sites with booking and forms built in. No templates, no bloat, just what you need to turn visitors into customers."
          />
          
          <FeatureCard
            icon={Calendar}
            title="Booking Without the Back-and-Forth"
            description="Synced to your calendar. Sends reminders. Handles reschedules. No more email ping-pong trying to find a time."
          />
          
          <FeatureCard
            icon={Mail}
            title="Follow-Ups That Never Forget"
            description="Email and SMS sent automatically at the right time. Leads don't slip through anymore."
          />
          
          <FeatureCard
            icon={MessageCircle}
            title="Support That's Always On"
            description="Answers common questions, books appointments, qualifies leads. Hands off to you when it needs a human touch."
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Every Lead Captured"
            description="Forms that work. Tracking that's automatic. Leads routed to you instantly. Nothing gets missed."
          />
          
          <div className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">
              All Working Together
            </h3>
            <p className="text-sm sm:text-base opacity-95 leading-relaxed mb-4 md:mb-6">
              One system. Everything connected. Your website, booking, messages, and support all running automatically.
            </p>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">✓</span>
                </div>
                <span>Live in 2-3 weeks</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">✓</span>
                </div>
                <span>No tech skills needed</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">✓</span>
                </div>
                <span>Training included</span>
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
            <span>Let's Build Yours</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-text-secondary max-w-xl mx-auto">
            Need something specific?{' '}
            <button 
              className="underline text-primary font-medium hover:text-primary-dark transition-colors" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Talk to us
            </button>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;