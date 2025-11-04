import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: "🌐",
      question: "Do you just build websites or handle the automation too?",
      answer: "Both. We build the site and set up all the automation—booking, follow-ups, chatbots—so everything works together from day one."
    },
    {
      icon: "⏱️",
      question: "How long does it take?",
      answer: "Most projects go live in 2-3 weeks. Week one is planning, week two is building, week three is testing and launch."
    },
    {
      icon: "💰",
      question: "What does it cost?",
      answer: "Depends on what you need. Simple site with booking starts around $X,XXX. We'll give you a fixed price after our first call—no surprises."
    },
    {
      icon: "🛠️",
      question: "Do I need to know how to code?",
      answer: "Nope. We build everything and show you how to use it. If something breaks or needs tweaking, we handle that too."
    },
    {
      icon: "🔌",
      question: "Will this work with my current tools?",
      answer: "Probably. We connect to most popular tools—Google Calendar, Stripe, Mailchimp, QuickBooks, etc. If you use something specific, just ask."
    },
    {
      icon: "📈",
      question: "What if I want to add more features later?",
      answer: "Easy. We can add new automation, pages, or features anytime. Most changes take a few days, not weeks."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background-secondary">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Common Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Here's what most people ask before we start working together.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            
            return (
              <div
                key={index}
                className={`bg-background-primary rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-md ${
                  isOpen ? 'shadow-md border-primary/30' : 'border-border'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 ${
                    isOpen ? 'bg-primary/5' : 'hover:bg-background-subtle'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg flex-shrink-0">
                      {faq.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-text-primary pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-primary rotate-180' : ''
                  }`}>
                    <div className={`text-sm transition-colors ${isOpen ? 'text-white' : 'text-primary'}`}>
                      ▼
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-10 bg-background-primary rounded-3xl border-2 border-dashed border-border">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            Still not sure?
          </h3>
          <p className="text-text-secondary mb-6">
            Book a quick call and we'll walk you through exactly how it works.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;