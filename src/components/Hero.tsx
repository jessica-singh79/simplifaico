'use client';
import React, { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
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

// About Section (scales up and rotates as you scroll into view)
const AboutSection: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  
  return (
    <motion.section
      style={{ scale, rotate }}
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      {/* Grid pattern overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      
      <article className='container mx-auto px-6 md:px-8 py-20 relative z-10'>
        <h2 className='text-4xl md:text-6xl leading-tight font-bold tracking-tight mb-8'>
          About SimplifAI
        </h2>
        
        <div className='max-w-3xl'>
          <p className='text-lg md:text-xl text-slate-300 mb-6 leading-relaxed'>
            We build growth systems for businesses - booking automation, lead capture, 
            smart follow-ups, and modern websites.
          </p>
          <p className='text-lg md:text-xl text-slate-300 leading-relaxed'>
            Custom solutions that actually work for your business, not cookie-cutter templates.
          </p>
        </div>

        {/* You can add your about content here */}
      </article>
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