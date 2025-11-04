import React from "react";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  const morphTexts = ["Book Appointments", "Capture Leads", "Follow Up", "Answer Questions"];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 py-32 overflow-hidden text-center bg-background-primary"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Headline */}
        <h1 className="text-text-primary font-heading font-bold tracking-tight text-4xl md:text-6xl leading-tight mb-3">
          Your Business Should{" "}
          <GooeyText
            texts={morphTexts}
            morphTime={1}
            cooldownTime={1.5}
            className="inline-block"
            textClassName="text-text-primary font-heading font-bold"
          />
          {" "}Automatically
        </h1>

        <h2 className="text-text-primary font-heading font-semibold text-3xl md:text-5xl mb-6">
          We Build It in 2-3 Weeks.
        </h2>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-text-secondary font-body text-lg md:text-xl leading-relaxed mb-10">
          Websites with booking, follow-ups, and chat built in. No extra staff needed.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8 text-sm md:text-base text-text-secondary font-body">
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium hidden sm:inline">Built for small businesses</span>
            <span className="font-medium sm:hidden">For small business</span>
          </span>
          <span className="hidden sm:inline mx-2">|</span>
          <span>Works 24/7</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="hidden sm:inline">Live in 2-3 weeks</span>
          <span className="sm:hidden">Quick launch</span>
        </div>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
