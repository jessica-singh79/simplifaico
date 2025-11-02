import React, { useState } from 'react';
import { Building2, Megaphone, Users, DollarSign } from 'lucide-react';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      icon: Building2,
      title: "Operations",
      description: "Streamline operational workflows",
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Transform Operations with AI",
        subtitle: "Automate complex operational processes and eliminate manual bottlenecks",
        features: [
          "Automated approval workflows that adapt to urgency levels",
          "Intelligent resource allocation based on real-time demand",
          "Predictive maintenance scheduling to prevent downtime",
          "Smart vendor management with automated contract renewals"
        ],
        metric: "87% reduction in processing time",
        image: "📊"
      }
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Optimize campaigns and lead generation",
      color: "from-purple-500 to-pink-500",
      content: {
        title: "Marketing Automation Reimagined",
        subtitle: "Create personalized campaigns that convert with zero manual intervention",
        features: [
          "Dynamic content generation based on user behavior",
          "Automated A/B testing with real-time optimization",
          "Lead scoring and nurturing with AI-powered insights",
          "Cross-platform campaign orchestration and tracking"
        ],
        metric: "156% increase in conversion rates",
        image: "🚀"
      }
    },
    {
      icon: Users,
      title: "HR",
      description: "Enhance employee experience and hiring",
      color: "from-green-500 to-teal-500",
      content: {
        title: "Revolutionize Human Resources",
        subtitle: "Build a workplace where people thrive through intelligent automation",
        features: [
          "Automated candidate screening with bias-free evaluation",
          "Personalized onboarding journeys for new hires",
          "Performance review automation with actionable insights",
          "Employee satisfaction monitoring with proactive interventions"
        ],
        metric: "73% faster hiring process",
        image: "👥"
      }
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Automate financial processes and compliance",
      color: "from-orange-500 to-red-500",
      content: {
        title: "Smart Financial Operations",
        subtitle: "Ensure accuracy and compliance while accelerating financial workflows",
        features: [
          "Intelligent invoice processing and approval routing",
          "Automated expense categorization and reporting",
          "Real-time budget tracking with predictive analytics",
          "Compliance monitoring with automated audit trails"
        ],
        metric: "92% reduction in manual errors",
        image: "💰"
      }
    }
  ];

  const activeUseCase = useCases[activeTab];

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Use Cases
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how SimplifAI transforms workflows across every department
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tab Navigation */}
          <div className="lg:w-1/3 space-y-4">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isActive = activeTab === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200 shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center ${
                      isActive ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className={`text-xl font-bold transition-colors ${
                        isActive ? 'text-purple-800' : 'text-gray-900'
                      }`}>
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3">
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-8 lg:p-12 min-h-[500px] relative overflow-hidden">
              <div className="relative z-10">
                <div className="mb-8">
                  <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${activeUseCase.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                    <span>{activeUseCase.metric}</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    {activeUseCase.content.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-8">
                    {activeUseCase.content.subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {activeUseCase.content.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${activeUseCase.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className={`bg-gradient-to-r ${activeUseCase.color} text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform`}>
                    Explore {activeUseCase.title} Solutions
                  </button>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute top-8 right-8 text-8xl opacity-10">
                {activeUseCase.content.image}
              </div>
              
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r ${activeUseCase.color} rounded-full opacity-10`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;