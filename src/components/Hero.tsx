import React from "react";
import { ArrowRight } from "lucide-react";
// import GooeyText safely
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  // fallback texts if GooeyText fails
  const morphTexts = ["Repetitive Tasks", "Manual Work", "Busywork", "Data Entry"];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 py-32 overflow-hidden text-center bg-background-primary"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto p-8 rounded-lg bg-background-primary">
        
        {/* Headline */}
        <h1 className="text-[#1E1E1E] font-heading font-semibold tracking-tight sm:tracking-normal md:tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-2">
          Your Team Drowns in{" "}
          <span className="inline-block align-middle">
            {GooeyText ? (
              <GooeyText
                texts={morphTexts}
                morphTime={1}
                cooldownTime={1.5}
                className="inline-block"
                textClassName="text-[#1E1E1E] font-heading font-semibold"
              />
            ) : (
              morphTexts[0]
            )}
          </span>
        </h1>

        <h2 className="text-[#1E1E1E] font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Let's Fix That.
        </h2>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-[#334155] font-body text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mb-10">
          Build websites that convert. Automate workflows that scale.
          <span className="block mt-2 font-semibold text-[#1E1E1E]">
            Grow your business without the technical headaches.
          </span>
        </p>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-accent transition-transform duration-300"
          >
            <span>Get Free Automation Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
