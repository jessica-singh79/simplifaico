import React from 'react';
import { Bot, Globe, Wrench, MessageSquare, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Smart AI Assistant",
      description: "24/7 intelligent support that handles customer queries, schedules appointments, qualifies leads, and seamlessly escalates complex issues to your team.",
      tags: ["24/7 Support", "Multi-language"],
      benefits: ["Reduce response time by 90%", "Handle 100+ conversations simultaneously"],
      isSpecial: true
    },
    {
      icon: Globe,
      title: "Personalized Website Experiences",
      description: "Your website adapts to each visitor in real-time, showing personalized content, recommendations, and CTAs based on their behavior—increasing conversions by up to 40%.",
      tags: ["Real-time", "Behavior-based"],
      benefits: ["Increase conversions up to 40%", "Personalized for each visitor"]
    },
    {
      icon: Wrench,
      title: "Custom AI Workflows",
      description: "Automate your unique business processes—from invoice processing and data entry to inventory management and customer follow-ups. Built specifically for your needs.",
      tags: ["Process Automation", "API Integration"],
      benefits: ["Automated invoice generation", "Smart appointment scheduling"]
    }
  ];

  const IconComponent = ({ icon: Icon, isSpecial }: { icon: any, isSpecial?: boolean }) => (
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110 ${
      isSpecial
        ? 'bg-white/20 backdrop-blur-sm'
        : 'bg-gradient-to-br from-indigo-500 to-violet-600'
    }`}>
      <Icon className={`w-7 h-7 text-white`} />
    </div>
  );

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://github.com/jessica-singh79/simplifaico/raw/main/pexels-cottonbro-6153344.jpg"
        alt="Services background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        draggable={false}
      />
      {/* Overlay for readability/contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-gray-50/80 to-gray-200/90 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Our Services
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-violet-800 bg-clip-text text-transparent">
              Automate Your Business Tasks
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From customer support to operational workflows, SimplifAI builds intelligent automation that works 24/7—so you can focus on growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group rounded-3xl p-6 lg:p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                service.isSpecial
                  ? 'bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 text-white shadow-2xl md:scale-105'
                  : 'bg-white border border-gray-200 shadow-xl hover:shadow-2xl'
              }`}
            >
              {service.isSpecial && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              {/* Service Icon */}
              <IconComponent icon={service.icon} isSpecial={service.isSpecial} />

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className={`text-xl sm:text-2xl font-black leading-tight ${
                  service.isSpecial ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm sm:text-base leading-relaxed ${
                  service.isSpecial ? 'text-white/95' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* Benefits */}
                {service.benefits && (
                  <div className="space-y-2 pt-2">
                    {index === 2 && (
                      <p className={`text-xs font-semibold mb-2 ${
                        service.isSpecial ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        Example automations:
                      </p>
                    )}
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          service.isSpecial ? 'bg-white/20' : 'bg-indigo-100'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            service.isSpecial ? 'bg-white' : 'bg-indigo-600'
                          }`} />
                        </div>
                        <span className={`text-xs sm:text-sm ${
                          service.isSpecial ? 'text-white/90' : 'text-gray-700'
                        }`}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                        service.isSpecial
                          ? 'bg-white/20 text-white backdrop-blur-sm'
                          : 'bg-indigo-100 text-indigo-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Have a unique process to automate? We build tailored AI solutions for your specific needs.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <span>Let's Talk About Your Needs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;