import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/particles";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pb-20 overflow-hidden text-center bg-background-primary"
    >
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#4F46E5"
        refresh={false}
      />

      {/* Floating Preview - Desktop Only */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="relative">
          {/* Glow effect behind preview */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl"></div>
          
          {/* Chat preview */}
          <div className="relative w-72 rounded-2xl border-2 border-primary/30 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/agent1.jpeg"
              alt="SimplifAI Assistant Preview"
              className="w-full h-auto"
            />
          </div>
          
          {/* Optional caption */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
            24/7 Assistant →
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Headline */}
        <h1 className="text-text-primary font-body font-bold tracking-tight text-3xl md:text-5xl leading-tight mb-4">
          Stop Wasting Hours on Work That Should Be Automatic
        </h1>

        {/* Subheading */}
        <h2 className="text-text-primary font-body font-medium text-xl md:text-3xl mb-6 leading-relaxed">
          We Build Systems That Handle the Boring Parts
        </h2>

        {/* Body */}
        <p className="max-w-2xl mx-auto text-text-secondary font-body font-normal text-base md:text-lg leading-relaxed mb-10">
          Booking, follow-ups, and support done automatically. Custom-built for your business.
        </p>

        {/* CTA Button */}
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

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-text-tertiary" />
      </div>
    </section>
  );
};

export default Hero;