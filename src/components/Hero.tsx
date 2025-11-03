import React from "react";
import { ArrowRight } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center z-10 bg-gradient-to-br from-[#5e2497] via-[#58278e] to-[#421c6d]" // Your current background utility or custom class
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 tracking-tight">
          <span className="block text-gray-900 mb-4">
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
                textClassName="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black"
              />
            </span>
          </span>
          <span className="block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Fix That.
          </span>
        </h1>
        {/* ...rest of your content */}
      </div>
    </section>
  );
};

export default Hero;
