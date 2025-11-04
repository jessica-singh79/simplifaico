import React from "react";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  const morphTexts = ["Capture Leads", "Book Appointments", "Follow Up", "Answer Questions"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pb-20 overflow-hidden text-center bg-background-primary"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Headline */}
        <h1 className="text-text-primary font-heading font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
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

        <h2 className="text-text-primary font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
          We Build It in 2-3 Weeks.
        </h2>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-text-secondary font-body text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Websites with booking, follow-ups, and chat built in. No extra staff needed.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8 text-xs sm:text-sm md:text-base text-text-secondary font-body">
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-400 text-sm sm:text-base">★★★★★</span>
            <span className="font-medium">Built for small businesses</span>
          </span>
          <span className="hidden sm:inline mx-1">|</span>
          <span>Works 24/7</span>
          <span className="hidden sm:inline mx-1">|</span>
          <span>Live in 2-3 weeks</span>
        </div>

        {/* Main CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-tertiary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-tertiary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;