import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pb-20 overflow-hidden text-center bg-background-primary"
    >
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Headline */}
        <h1 className="text-text-primary font-heading font-bold tracking-tight text-4xl md:text-6xl leading-tight mb-4">
          Stop Wasting Hours on Booking, Follow-Ups, and Customer Support
        </h1>

        <h2 className="text-text-primary font-heading font-semibold text-2xl md:text-4xl mb-6">
          We Build the System That Handles It All
        </h2>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-text-secondary font-body text-lg md:text-xl leading-relaxed mb-8">
          Your website, automated booking, smart messaging, and 24/7 support—working together as one system. Built custom for your business. Live in 2-3 weeks.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8 text-sm md:text-base text-text-secondary font-body font-medium">
          <span>No coding needed</span>
          <span className="hidden sm:inline mx-1">|</span>
          <span>Works 24/7</span>
          <span className="hidden sm:inline mx-1">|</span>
          <span>Live in 2-3 weeks</span>
        </div>

        {/* Main CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Down Arrow indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-text-tertiary" />
      </div>
    </section>
  );
};

export default Hero;