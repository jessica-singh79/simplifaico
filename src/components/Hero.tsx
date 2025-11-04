import React from "react";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  const morphTexts = ["Busywork", "Data Entry", "Follow-Ups","Admin Work"];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 py-32 overflow-hidden text-center bg-background-primary"
    >
      {/* Static Logo + Name */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-50">
        <a href="/" className="flex items-center gap-3">
          <div className="h-12 w-12">
            <img
              src="https://raw.githubusercontent.com/jessica-singh79/simplifaico/main/logo.png"
              alt="SimplifAI Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            SimplifAI
          </span>
        </a>
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto p-8 rounded-lg bg-background-primary">
        {/* Headline */}
       <h1 className="text-text-primary font-heading font-semibold tracking-tight text-4xl md:text-6xl leading-tight mb-2">
  Your Team Drowns in{" "}
  <span className="inline-flex items-center align-middle">
    <GooeyText
      texts={morphTexts}
      morphTime={1}
      cooldownTime={1.5}
      className="inline-flex items-center"
      textClassName="text-text-primary font-heading font-semibold"
    />
  </span>
</h1>

        <h2 className="text-text-primary font-heading font-semibold text-4xl md:text-6xl mb-6">
          Let's Fix That.
        </h2>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-text-secondary font-body text-lg md:text-xl leading-relaxed mb-10">
          Build websites that convert. Automate workflows that scale.
          <span className="block mt-2 font-semibold text-text-primary">
            Grow your business without the technical headaches.
          </span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm text-text-secondary font-body">
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium">Trusted by 50+ small businesses</span>
          </span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="hidden sm:inline">AI-Powered Automation</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="hidden sm:inline">Average 40% cost reduction</span>
        </div>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Get Free Automation Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Micro-Details */}
        <div className="flex flex-wrap gap-4 justify-center mt-4 text-sm text-text-tertiary font-body">
          <span>• Average 40% cost reduction</span>
          <span>• Custom web solutions</span>
          <span>• Workflow automation</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;