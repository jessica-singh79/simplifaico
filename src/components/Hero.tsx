import React from "react";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 py-32 overflow-hidden text-center bg-background-primary"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto p-8 rounded-lg bg-background-primary">
        {/* Headline */}
        <h1 className="text-black font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-1">
          Your Team Drowns in{" "}
          <span className="inline-block align-middle text-black font-heading">
            <GooeyText
              texts={[
                "Repetitive Tasks",
                "Manual Work",
                "Busywork",
                "Data Entry",
              ]}
              morphTime={1}
              cooldownTime={1.5}
              className="inline-block"
              textClassName="text-black font-heading"
            />
          </span>
        </h1>

        <h2 className="text-black font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
          Let&apos;s Fix That.
        </h2>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-black font-body text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-10">
          Build websites that convert. Automate workflows that scale.
          <span className="block mt-2 font-semibold text-black font-body">
            Grow your business without the technical headaches.
          </span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium">Trusted by small businesses</span>
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
            className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:bg-accent transition-transform duration-300"
          >
            <span>Get Free Automation Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Micro-Details */}
        <div className="flex flex-wrap gap-4 justify-center mt-4 text-sm text-gray-600">
          <span>• Average 40% cost reduction</span>
          <span>• Custom web solutions</span>
          <span>• Workflow automation</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
