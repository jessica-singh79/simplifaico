import React, { useState } from 'react';
import { MessageSquare, TrendingUp, Gauge, Puzzle, Shield, Workflow } from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Automation",
      description: "Create workflows using plain English. No coding required.",
      details: "Transform complex automation rules into simple conversational commands that anyone can understand and modify.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Workflow Prediction",
      description: "AI predicts bottlenecks and suggests optimizations before they occur.",
      details: "Advanced machine learning algorithms analyze your workflow patterns to prevent issues and maximize efficiency.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Gauge,
      title: "Smart Dashboards",
      description: "Real-time insights with intelligent data visualization.",
      details: "Customizable dashboards that adapt to your role and priorities, highlighting what matters most to your work.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Puzzle,
      title: "API Integrations",
      description: "Connect with 500+ tools and platforms seamlessly.",
      details: "Pre-built connectors and custom API integration capabilities ensure all your tools work together harmoniously.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with compliance guarantees.",
      details: "SOC 2 Type II certified with end-to-end encryption, role-based access controls, and audit logging.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Workflow,
      title: "Smart Process Mining",
      description: "Automatically discover and optimize existing workflows.",
      details: "AI-powered process discovery identifies inefficiencies and suggests improvements across your organization.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate, optimize, and revolutionize your enterprise workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === index;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className={`transition-all duration-500 overflow-hidden ${
                      isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {feature.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-600">Ready to experience these features?</span>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;