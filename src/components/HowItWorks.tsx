import React, { useEffect, useRef, useState } from 'react';
import { Upload, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Upload,
      title: "Connect Your Data",
      description: "Seamlessly integrate with your existing tools and workflows in minutes. No complex setup required.",
      details: "Our smart connectors automatically map your data sources and identify automation opportunities.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "AI Learns & Adapts",
      description: "Our intelligent algorithms analyze patterns and automate repetitive tasks while you focus on growth.",
      details: "Machine learning models continuously optimize your workflows based on usage patterns and outcomes.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Workflow Simplified",
      description: "Watch as complex processes become streamlined, automated operations that save time and reduce errors.",
      details: "Real-time monitoring and intelligent adjustments ensure your workflows run smoothly 24/7.",
      color: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...prev, stepIndex]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = sectionRef.current?.querySelectorAll('[data-step]');
    stepElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to transform your workflows with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            
            return (
              <div
                key={index}
                data-step={index}
                className={`relative text-center transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  {/* Step Icon */}
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-x-10">
                      <div 
                        className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                          isVisible ? 'w-3/4' : 'w-0'
                        }`}
                        style={{ transitionDelay: `${(index + 1) * 400}ms` }}
                      ></div>
                    </div>
                  )}

                  {/* Step Number */}
                  <div className={`absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    {index + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                  
                  {/* Expandable Details */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isVisible ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`} style={{ transitionDelay: `${index * 300 + 600}ms` }}>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-4 rounded-xl mt-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">See the Transformation</h3>
            <p className="text-gray-600">From manual chaos to automated excellence</p>
          </div>
          
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-600 font-bold">Before</span>
              </div>
              <p className="text-sm text-gray-600">Manual processes<br />Time-consuming tasks<br />Human errors</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-purple-600" />
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 font-bold">After</span>
              </div>
              <p className="text-sm text-gray-600">Automated workflows<br />10x faster execution<br />Zero errors</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>Start Your Automation Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;