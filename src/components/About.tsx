import React from 'react';
import { ArrowRight, Globe, Calendar, Mail, MessageCircle, TrendingUp } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  label,
  title, 
  description,
  visual 
}: { 
  icon: any; 
  label: string;
  title: string; 
  description: string;
  visual?: React.ReactNode;
}) => (
  <div className="group relative p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-background-primary border border-border-light shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
    {/* Icon */}
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-border flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:border-primary transition-colors">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-text-tertiary group-hover:text-primary transition-colors" />
    </div>
    
    {/* Label */}
    <div className="text-[10px] sm:text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2 md:mb-3">
      {label}
    </div>
    
    {/* Title */}
    <h3 className="text-sm sm:text-base md:text-xl font-bold text-text-primary mb-2 md:mb-3 leading-tight">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
      {description}
    </p>
    
    {/* Visual Element (if provided) */}
    {visual && (
      <div className="mt-4 md:mt-6">
        {visual}
      </div>
    )}
  </div>
);

const GrowthChart = () => (
  <div className="relative h-20 sm:h-24 md:h-32 flex items-end justify-between gap-1">
    {[20, 35, 45, 60, 55, 70, 85, 95, 100].map((height, i) => (
      <div
        key={i}
        className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-sm transition-all duration-500 hover:from-primary-dark"
        style={{ 
          height: `${height}%`,
          animationDelay: `${i * 100}ms`,
        }}
      />
    ))}
  </div>
);

const LeadFlowVisual = () => (
  <div className="flex items-center justify-between gap-1 sm:gap-2 mt-3 md:mt-4">
    <div className="flex flex-col items-center gap-1">
      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-[10px] sm:text-xs font-bold text-primary">👤</span>
      </div>
      <span className="text-[9px] sm:text-[10px] md:text-xs text-text-tertiary">New Lead</span>
    </div>
    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-text-tertiary" />
    <div className="flex flex-col items-center gap-1">
      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
      </div>
      <span className="text-[9px] sm:text-[10px] md:text-xs text-text-tertiary">Chat</span>
    </div>
    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-text-tertiary" />
    <div className="flex flex-col items-center gap-1">
      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
      </div>
      <span className="text-[9px] sm:text-[10px] md:text-xs text-text-tertiary">Booked</span>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-3 md:mb-4">
            Here's what you get
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-text-secondary px-4">
            You're stuck doing the same tasks every day—booking appointments, following up with leads, answering questions. 
            We build systems that handle this while you focus on growing your business.
          </p>
        </header>

        {/* Feature Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16">
          <FeatureCard
            icon={Globe}
            label="Web Design"
            title="Websites That Convert"
            description="Fast, mobile-first sites built to turn visitors into customers—with forms, scheduling, and CRM integration baked in."
          />
          
          <FeatureCard
            icon={Calendar}
            label="Automated Booking"
            title="Scheduling That Runs Itself"
            description="Synced to your calendar, sends reminders, handles reschedules. No more back-and-forth emails trying to find a time."
          />
          
          <FeatureCard
            icon={Mail}
            label="Follow-Up Automation"
            title="Messages That Send Themselves"
            description="Email and SMS sequences that nurture leads, remind customers, and follow up at the perfect time—without you lifting a finger."
          />
          
          <FeatureCard
            icon={MessageCircle}
            label="AI Chat Agents"
            title="Support That Never Sleeps"
            description="Answers questions, books appointments, and qualifies leads 24/7—handing off to you only when a human touch is needed."
            visual={<LeadFlowVisual />}
          />
          
          <FeatureCard
            icon={TrendingUp}
            label="Lead Generation"
            title="Capture Every Opportunity"
            description="Track every visitor, capture contact info, route leads automatically, and watch your pipeline fill up while you sleep."
            visual={<GrowthChart />}
          />
          
          <div className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 md:mb-4 opacity-90">
              The Result
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Everything Connected
            </h3>
            <p className="text-xs sm:text-sm opacity-95 leading-relaxed mb-4 md:mb-6">
              One system. No manual work between tools. Your website, booking, messaging, and support all working together.
            </p>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs">✓</span>
                </div>
                <span>Live in 2-3 weeks</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs">✓</span>
                </div>
                <span>No tech expertise needed</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs">✓</span>
                </div>
                <span>Full training included</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>See Real Examples</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-text-secondary max-w-xl mx-auto">
            Need something custom?{' '}
            <button 
              className="underline text-primary font-medium hover:text-primary-dark transition-colors" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's build it together
            </button>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;