import React from "react";
import { ArrowRight } from "lucide-react";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";

const Hero = () => {
  return (
    <NeuralNetworkHero
      title="Your Team Drowns in Repetitive Tasks. Let's Fix That."
      description="Build websites that convert. Automate workflows that scale. Drive growth without the technical headaches."
      badgeText="AI-Powered Automation"
      badgeLabel="Trusted by Small Businesses"
      ctaButtons={[
        {
          text: "Get Free Automation Audit",
          href: "#contact",
          primary: true
        }
      ]}
      microDetails={[
        "Average 40% cost reduction",
        "Custom web solutions",
        "Workflow automation"
      ]}
    />
  );
};

export default Hero;
