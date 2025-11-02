import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: "🛠️",
      question: "Do I need technical skills?",
      answer: "No technical skills required! We handle all the setup and deliver ready-to-use tools. Our team takes care of the complex technical work so you can focus on running your business. Everything is designed to be intuitive and user-friendly."
    },
    {
      icon: "⚡",
      question: "What kind of tasks can be automated?",
      answer: "We can automate a wide range of repetitive tasks including client booking and scheduling, lead capture and qualification, email follow-ups and nurturing, customer support queries, data entry and management, content updates, and much more. If it's repetitive, we can likely automate it."
    },
    {
      icon: "🔒",
      question: "How secure is this?",
      answer: "Security is our top priority. We use enterprise-grade encryption, secure data storage, and follow industry best practices for data protection. All integrations use secure OAuth protocols, and we're compliant with major data protection regulations. Your business data is safe with us."
    },
    {
      icon: "⏱️",
      question: "How quickly will I see results?",
      answer: "Most clients see immediate impact once their automation is deployed. The setup typically takes 1-2 weeks depending on complexity, but once live, you'll start saving time instantly. Many businesses report saving 10-20 hours per week within the first month."
    },
    {
      icon: "💰",
      question: "What's the cost?",
      answer: "Pricing varies based on your specific needs and the complexity of automation required. We offer flexible plans to suit businesses of all sizes. Book a free consultation and we'll provide a custom quote based on your requirements and expected ROI."
    },
    {
      icon: "🔄",
      question: "Can I integrate with my existing tools?",
      answer: "Absolutely! We integrate seamlessly with popular tools like CRMs, email platforms, calendars, payment systems, and more. Our solutions are designed to work with your existing tech stack, not replace it. If you use a specific tool, just let us know and we'll make it work."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about SimplifAI and how it can transform your business.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-purple-100/50 transition-all duration-300 hover:shadow-lg hover:border-purple-200/50 ${
                  isOpen ? 'shadow-lg border-purple-200/50' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-7 text-left transition-all duration-300 ${
                    isOpen ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' : 'hover:bg-purple-50/30'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-lg flex-shrink-0">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-gradient-to-r from-blue-500 to-purple-600 rotate-180' : ''
                  }`}>
                    <div className={`text-sm transition-colors ${isOpen ? 'text-white' : 'text-purple-600'}`}>
                      ▼
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-400 overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-7 pb-7 pl-20">
                    <p className="font-body text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-12 bg-white rounded-3xl border-2 border-dashed border-purple-300/50">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="font-body text-gray-600 mb-6">
            We're here to help! Reach out and we'll answer any questions you have.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-body font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Contact Us</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;