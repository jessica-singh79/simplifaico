import React from 'react';
import { Clock, Zap, DollarSign, Shield, Users, TrendingUp } from 'lucide-react';

export function WhySimplifAISection() {
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

        {/* Timeline List */}
        <div className="space-y-12 md:space-y-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left - Icon and Title */}
                <div className="md:w-1/3 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <span className="inline-block text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {reason.stat}
                    </span>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="md:w-2/3">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
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
        </div>
      </div>
    </section>
  );
}