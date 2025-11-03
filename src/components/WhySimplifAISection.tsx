import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Clock, Zap, Users, TrendingUp } from 'lucide-react';

export function WhySimplifAISection() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const reasons = [
    {
      icon: Clock,
      title: "2-3 Week Implementation",
      stat: "vs 3-6 months",
      description: "Most AI agencies take months to deploy. We have your first automation live in 2-3 weeks with a proven rapid deployment process.",
      details: [
        "Week 1: Discovery & setup with your team",
        "Week 2: Build & test with your actual data", 
        "Week 3: Deploy & train your team to use it"
      ]
    },
    {
      icon: Users,
      title: "Built for Small-Mid Business",
      stat: "Not enterprise bloat",
      description: "Enterprise AI tools are complex, expensive, and require dedicated teams. We build automation that your current team can manage—no new hires needed.",
      details: [
        "Simple admin dashboards anyone can use",
        "Training included in onboarding",
        "Email & Slack support (no ticketing systems)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI From Day One",
      stat: "Avg. 40% cost reduction",
      description: "Every client gets a custom dashboard tracking hours saved, costs reduced, and process improvements. Our average client saves 25 hours/week within the first month.",
      details: [
        "Real-time analytics dashboard",
        "Monthly performance reports",
        "Continuous optimization included"
      ]
    },
    {
      icon: Zap,
      title: "Integrations Out of the Box",
      stat: "50+ tools supported",
      description: "Works with the tools you already use—no rip-and-replace. We connect to Salesforce, HubSpot, QuickBooks, Stripe, Google Workspace, Slack, and 45+ more platforms.",
      details: [
        "Pre-built integrations for popular tools",
        "Custom API connections available",
        "Zapier & Make.com compatible"
      ]
    }
  ];

  return (
    <section id="why-simplifai" className="bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
        {/* Header - More Compact */}
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-violet-800 bg-clip-text text-transparent">
              Why SimplifAI?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're not the biggest AI agency, but we're the fastest, most transparent, and most focused on businesses like yours.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-gray-800">
                  {reason.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-800">
                  {reason.title}
                </h3>
                
                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {reason.stat}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    {reason.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Animated Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}