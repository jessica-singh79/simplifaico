import React from "react";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 py-32 bg-gradient-to-br from-[#5e2497] via-[#58278e] to-[#421c6d] text-center"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Hero Headline with GooeyText typing effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5">
          <span className="block text-white/90">
            Your Team Drowns in{" "}
            <span className="inline-block">
              <GooeyText
                texts={[
                  "Repetitive Tasks",
                  "Manual Work",
                  "Busywork",
                  "Data Entry"
                ]}
                morphTime={1}
                cooldownTime={1.5}
                className="inline-block"
                textClassName="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-black"
              />
            </span>
          </span>
          <span className="block mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Fix That.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-10">
          Build websites that convert. Automate workflows that scale.
          <span className="block mt-2 font-semibold text-white/90">Grow your business without the technical headaches.</span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm text-white/70">
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium">Trusted by small businesses</span>
          </span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="hidden sm:inline">AI-Powered Automation</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="hidden sm:inline">Average 40% cost reduction</span>
        </div>

        {/* Single Main CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <span>Get Free Automation Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Micro-Details */}
        <div className="flex flex-wrap gap-4 justify-center mt-4 text-sm text-white/60">
          <span>• Average 40% cost reduction</span>
          <span>• Custom web solutions</span>
          <span>• Workflow automation</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
