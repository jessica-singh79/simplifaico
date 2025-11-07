'use client';
import React from 'react';
import { ArrowRight, Globe, Calendar, Mail, MessageCircle } from 'lucide-react';
import { motion, MotionValue } from 'framer-motion';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  bgColor,
  glowColor,
}: { 
  icon: any; 
  title: string; 
  description: string;
  bgColor: string;
  glowColor: string;
}) => (
  <div className={`group relative p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl ${bgColor} border border-border-light shadow-lg ${glowColor} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
    {/* Icon */}
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-border flex items-center justify-center mb-4 md:mb-6 group-hover:border-primary transition-colors bg-white/50">
      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
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

const About: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  
  return (
    <motion.section
      style={{ scale, rotate }}
      id="about"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-background-secondary"
    >
      {/* Grid pattern overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
            What We Build
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-text-secondary">
            Booking appointments, following up with leads, answering the same questions over and over. 
            We build systems that handle this automatically. All connected, all working together, so you don't have to.
          </p>
        </header>

        {/* Feature Grid - 2 columns on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <FeatureCard
            icon={Globe}
            title="Websites That Get You Customers"
            description="Fast sites with booking and forms built in. No templates, no bloat, just what you need to turn visitors into customers."
            bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
            glowColor="shadow-blue-200/50"
          />
          
          <FeatureCard
            icon={Calendar}
            title="Booking Without the Back-and-Forth"
            description="Synced to your calendar. Sends reminders. Handles reschedules. No more email ping-pong trying to find a time."
            bgColor="bg-gradient-to-br from-purple-50 to-pink-50"
            glowColor="shadow-purple-200/50"
          />
          
          <FeatureCard
            icon={Mail}
            title="Follow-Ups That Never Forget"
            description="Email and SMS sent automatically at the right time. Leads don't slip through anymore."
            bgColor="bg-gradient-to-br from-cyan-50 to-blue-50"
            glowColor="shadow-cyan-200/50"
          />
          
          <FeatureCard
            icon={MessageCircle}
            title="24/7 Assistant"
            description="Answers common questions, qualifies leads, and books appointments, even at 2am. Escalates to you when it needs a real person."
            bgColor="bg-gradient-to-br from-indigo-50 to-purple-50"
            glowColor="shadow-indigo-200/50"
          />
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
    </motion.section>
  );
};

export default About;