import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import Lottie from "lottie-react";

const Hero = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/jessica-singh79/7b538f65bff0403da58ebc86dc63a2c2/raw/9c59ab2a6fdb3a84d04a5ae2ae8e62f74e17a97b/gistfile1.txt')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

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

      {/* Scroll Indicator with Workflow Animation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-10">
        {animationData && (
          <div className="w-20 h-20 mx-auto mb-2 opacity-70">
            <Lottie animationData={animationData} loop={true} />
          </div>
        )}
        <p className="text-xs text-text-tertiary font-medium">See it working</p>
        <ChevronDown className="w-6 h-6 text-text-tertiary animate-bounce mx-auto mt-1" />
      </div>
    </section>
  );
};

export default Hero;