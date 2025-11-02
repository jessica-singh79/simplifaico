import React from 'react';
import { Clock, Zap, DollarSign, Shield, Users, TrendingUp } from 'lucide-react';

const WhySimplifAITimeline = () => {
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
      icon: DollarSign,
      title: "Transparent Pricing",
      stat: "No surprises",
      description: "No hidden fees, no surprise costs. Month-to-month contracts mean you're never locked in. Most competitors require 12-month commitments with enterprise pricing.",
      details: [
        "Clear pricing before we start",
        "Cancel anytime after 30 days",
        "All support included in monthly fee"
      ]
    },
    {
      icon: Shield,
      title: "Your Data Stays Private",
      stat: "100% confidential",
      description: "We never use your business data to train AI models. Your conversations, documents, and processes stay completely private—unlike platforms that harvest data.",
      details: [
        "GDPR & SOC 2 compliant systems",
        "Data encrypted at rest and in transit",
        "Your data is never shared or sold"
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
    <section id="why-simplifai" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-violet-800 bg-clip-text text-transparent">
              Why SimplifAI?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're not the biggest AI agency, but we're the fastest, most transparent, and most focused on businesses like yours.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" />

          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="relative mb-12 md:mb-20 last:mb-0"
              >
                <div className="flex flex-col md:flex-row md:gap-10">
                  {/* Left side - Icon and Title (Desktop) */}
                  <div className="md:w-1/3 flex items-start">
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Icon Circle */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-gray-50 relative z-10">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Title (Mobile) */}
                      <h3 className="md:hidden text-xl font-bold text-gray-800">
                        {reason.title}
                      </h3>
                    </div>
                    
                    {/* Title (Desktop) */}
                    <h3 className="hidden md:block text-2xl lg:text-3xl font-bold text-gray-800 ml-6">
                      {reason.title}
                    </h3>
                  </div>

                  {/* Right side - Content Card */}
                  <div className="md:w-2/3 mt-4 md:mt-0 ml-20 md:ml-0">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySimplifAITimeline;