import React from "react";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  const morphTexts = ["Capture Leads", "Book Appointments", "Answer Questions", "Follow Up"];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 py-32 overflow-hidden text-center bg-background-primary"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto p-8 rounded-lg bg-background-primary">
        {/* Headline */}
        <h1 className="text-text-primary font-heading font-semibold tracking-tight text-4xl md:text-6xl leading-tight mb-2">
          Your Business Should{" "}
          <GooeyText
            texts={morphTexts}
            morphTime={1}
            cooldownTime={1.5}
            className="inline-block"
            textClassName="text-text-primary font-heading font-semibold"
          />
          {" "}Automatically
        </h1>

        <h2 className="text-text-primary font-heading font-semibold text-4xl md:text-6xl mb-6">
          We Build The System That Does It.
        </h2>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-text-secondary font-body text-lg md:text-xl leading-relaxed mb-10 mt-6">
          Smart websites + AI automation that captures leads, books appointments, and follows up 24/7.
          <span className="block mt-2 font-semibold text-text-primary">
            No extra staff needed. Just results.
          </span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm md:text-base text-text-secondary font-body">
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium">Lead-Generation Systems</span>
          </span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="hidden sm:inline">Works 24/7</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="hidden sm:inline">2-3 Week Setup</span>
        </div>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
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