'use client';
import React, { useRef } from "react";
import { ArrowRight, ChevronDown, Globe, Calendar, Mail, MessageCircle } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

// Hero Section (scales down and rotates as you scroll)
const HeroSection: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  
  return (
    <motion.section
      style={{ scale, rotate }}
      id="hero"
      className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pb-20 overflow-hidden text-center bg-background-primary"
    >
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#4F46E5"
        refresh={false}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <h1 className="text-text-primary font-body font-bold tracking-tight text-3xl md:text-5xl leading-tight mb-4">
          Stop Wasting Hours on Work That Should Be Automatic
        </h1>
        <h2 className="text-text-primary font-body font-medium text-xl md:text-3xl mb-6 leading-relaxed">
          We Build Systems That Handle the Boring Parts
        </h2>
        <p className="max-w-2xl mx-auto text-text-secondary font-body font-normal text-base md:text-lg leading-relaxed mb-10">
          Booking, follow-ups, and support done automatically. Custom-built for your business.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-10">
        <p className="text-xs text-text-tertiary mb-2 font-medium">See it working</p>
        <ChevronDown className="w-8 h-8 text-text-tertiary animate-bounce mx-auto" />
      </div>
    </motion.section>
  );
};

// Feature Card Component
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

// About/Features Section (scales up and rotates as you scroll into view)
const AboutSection: React.FC<SectionProps> = ({ scrollYProgress }) => {
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
            title="24/7 Assistant"
            description="Answers common questions, qualifies leads, and books appointments, even at 2am. Escalates to you when it needs a real person."
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

// Main Component Wrapper
const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className='relative h-[200vh]'>
      <HeroSection scrollYProgress={scrollYProgress} />
      <AboutSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default Hero;