import React from 'react';
import { Bot, Globe, Wrench, MessageSquare, ArrowRight } from 'lucide-react';

type Service = {
  icon: any;
  title: string;
  description: string;
  tags: string[];
  benefits?: string[];
  isSpecial?: boolean;
};

const services: Service[] = [
  {
    icon: Bot,
    title: "Smart AI Assistant",
    description:
      "A 24/7 digital teammate that handles customer questions, qualifies leads, schedules meetings, and escalates only the complex cases to your humans.",
    tags: ["24/7 Support", "Lead Qualification"],
    benefits: ["Reduce response time by 90%", "Handle 100+ conversations concurrently"],
    isSpecial: true,
  },
  {
    icon: Globe,
    title: "Personalized Website Experiences",
    description:
      "Show the right content to the right visitor at the right time — personalized CTAs, recommendations, and flows that increase engagement and conversions.",
    tags: ["Real-time", "Behavior-driven"],
    benefits: ["Increase conversions up to 40%", "Reduce bounce rate"],
  },
  {
    icon: Wrench,
    title: "Custom AI Workflows",
    description:
      "From invoice processing to customer follow-ups, we build workflows that connect your tools, eliminate repetitive tasks, and enforce business rules reliably.",
    tags: ["API Integrations", "Process Automation"],
    benefits: ["Automated invoices & reports", "Smart appointment scheduling"],
  },
];

const IconBox = ({ Icon, isSpecial }: { Icon: any; isSpecial?: boolean }) => (
  <div
    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 ${
      isSpecial ? 'bg-white/10 ring-1 ring-white/10' : 'bg-gradient-to-br from-indigo-500 to-violet-600'
    }`}
    aria-hidden
  >
    <Icon className="w-7 h-7 text-white" />
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Our services
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4">
            Automate your business tasks
          </h2>

          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto">
            We design and ship practical AI that removes manual work and turns time into growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {services.map((svc, idx) => {
            const special = svc.isSpecial;
            return (
              <article
                key={idx}
                className={`group rounded-3xl p-6 lg:p-8 relative overflow-hidden transition-all duration-300 ${
                  special
                    ? 'bg-indigo-600 text-white shadow-2xl transform md:scale-102'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
                aria-labelledby={`service-title-${idx}`}
              >
                {special && (
                  <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    Most popular
                  </div>
                )}

                <IconBox Icon={svc.icon} isSpecial={special} />

                <header className="mb-3">
                  <h3
                    id={`service-title-${idx}`}
                    className={`text-xl sm:text-2xl font-semibold leading-tight ${special ? 'text-white' : 'text-gray-900'}`}
                  >
                    {svc.title}
                  </h3>
                </header>

                <p className={`text-sm sm:text-base leading-relaxed mb-4 ${special ? 'text-white/95' : 'text-gray-600'}`}>
                  {svc.description}
                </p>

                {svc.benefits && (
                  <div className="space-y-2 pt-2">
                    {svc.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span
                          className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            special ? 'bg-white/20' : 'bg-indigo-50'
                          }`}
                          aria-hidden
                        >
                          <span className={`w-2 h-2 rounded-full ${special ? 'bg-white' : 'bg-indigo-600'}`} />
                        </span>
                        <span className={`text-xs sm:text-sm ${special ? 'text-white/90' : 'text-gray-700'}`}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {svc.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                        special ? 'bg-white/10 text-white' : 'bg-indigo-50 text-indigo-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA inside card for conversion */}
                <div className="mt-6">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`inline-flex items-center gap-2 text-sm sm:text-base font-semibold rounded-full px-4 py-2 transition-transform duration-200 ${
                      special ? 'bg-white text-indigo-600 hover:opacity-95' : 'bg-indigo-600 text-white hover:scale-105'
                    }`}
                    aria-label={`Talk about ${svc.title}`}
                  >
                    {special ? 'Start a conversation' : 'Learn more'}
                    <ArrowRight className={`w-4 h-4 ${special ? 'text-indigo-600' : 'text-white'}`} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-base text-text-secondary mb-6">
            Have a unique process to automate? We design tailored AI solutions that plug into your stack.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            aria-label="Let's talk about your needs"
          >
            <span>Let's build your AI advantage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
