import React from 'react';
import { FAQ } from '@/components/ui/faq-tabs';

const FAQTabs = () => {
  const categories = {
    "general": "General Questions",
    "technical": "Technical Details",
    "pricing": "Pricing & Plans",
    "integration": "Integration & Setup",
    "security": "Security & Compliance"
  };

  const faqData = {
    "general": [
      {
        question: "What is SimplifAI?",
        answer: "SimplifAI is an AI automation platform that helps businesses streamline their operations, reduce manual work, and improve efficiency through intelligent automation solutions."
      },
      {
        question: "Do I need technical skills to use SimplifAI?",
        answer: "No technical skills required! We handle all the setup and deliver ready-to-use tools. Our team takes care of the complex technical work so you can focus on running your business."
      },
      {
        question: "What kind of tasks can be automated?",
        answer: "We can automate a wide range of repetitive tasks including client booking and scheduling, lead capture and qualification, email follow-ups, customer support queries, data entry and management, content updates, and much more."
      },
      {
        question: "How quickly will I see results?",
        answer: "Most clients see immediate impact once their automation is deployed. The setup typically takes 1-2 weeks depending on complexity, but once live, you'll start saving time instantly. Many businesses report saving 10-20 hours per week within the first month."
      },
      {
        question: "What industries do you serve?",
        answer: "We work with businesses across various industries including professional services, e-commerce, healthcare, education, real estate, and more. Our solutions are customizable to fit your specific industry needs."
      }
    ],
    "technical": [
      {
        question: "What technologies does SimplifAI use?",
        answer: "SimplifAI is built on cutting-edge AI and machine learning technologies, utilizing natural language processing, computer vision, and predictive analytics to deliver intelligent automation solutions."
      },
      {
        question: "Can I integrate with my existing tools?",
        answer: "Absolutely! We integrate seamlessly with popular tools like CRMs, email platforms, calendars, payment systems, and more. Our solutions are designed to work with your existing tech stack, not replace it."
      },
      {
        question: "What is your uptime guarantee?",
        answer: "We maintain a 99.9% uptime SLA for all our services. Our infrastructure is built on reliable cloud platforms with automatic failover and redundancy to ensure your automations run smoothly 24/7."
      },
      {
        question: "Do you provide API access?",
        answer: "Yes, we offer comprehensive API access for enterprise clients who want to build custom integrations or extend our platform's capabilities to meet their specific requirements."
      },
      {
        question: "How do you handle system updates?",
        answer: "We perform regular updates and maintenance during off-peak hours with zero downtime. You'll be notified in advance of any scheduled maintenance, and all updates are thoroughly tested before deployment."
      }
    ],
    "pricing": [
      {
        question: "How much does SimplifAI cost?",
        answer: "Pricing varies based on your specific needs and the complexity of automation required. We offer flexible plans to suit businesses of all sizes. Book a free consultation and we'll provide a custom quote based on your requirements."
      },
      {
        question: "Do you offer a free trial?",
        answer: "Yes! We offer a 14-day free trial for new customers to experience the power of our automation solutions. No credit card required to get started."
      },
      {
        question: "What's included in each plan?",
        answer: "All plans include core automation features, customer support, regular updates, and integrations with popular tools. Higher-tier plans offer advanced features, priority support, and custom automation development."
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will be applied at the start of your next billing cycle."
      },
      {
        question: "Is there a setup fee?",
        answer: "Setup fees vary depending on the complexity of your automation requirements. Simple setups are often included in your plan, while more complex custom solutions may have a one-time implementation fee."
      }
    ],
    "integration": [
      {
        question: "How long does implementation take?",
        answer: "Most standard implementations take 1-2 weeks from kickoff to go-live. More complex custom solutions may take 4-6 weeks depending on your specific requirements and integrations needed."
      },
      {
        question: "What support do you provide during setup?",
        answer: "We provide dedicated onboarding support including initial consultation, system configuration, team training, testing assistance, and post-launch support to ensure a smooth transition."
      },
      {
        question: "Can you migrate data from our old system?",
        answer: "Yes, we offer data migration services to help you transition from your existing systems. We'll work with you to ensure all your important data is safely transferred and properly formatted."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Absolutely! We provide comprehensive training sessions for your team, including video tutorials, documentation, and live training calls to ensure everyone is comfortable using the system."
      },
      {
        question: "What if we need custom integrations?",
        answer: "We can develop custom integrations for your specific needs. Our team will work with you to understand your requirements and build tailored solutions that connect SimplifAI with your unique tools and workflows."
      }
    ],
    "security": [
      {
        question: "How secure is SimplifAI?",
        answer: "Security is our top priority. We use enterprise-grade encryption, secure data storage, and follow industry best practices for data protection. All integrations use secure OAuth protocols, and we're compliant with major data protection regulations."
      },
      {
        question: "Where is my data stored?",
        answer: "Your data is stored in secure, SOC 2 certified data centers with redundant backups. We use industry-leading cloud providers and ensure your data is encrypted both in transit and at rest."
      },
      {
        question: "Are you GDPR compliant?",
        answer: "Yes, we are fully GDPR compliant. We provide tools for data privacy management, including data export, deletion requests, and consent management to help you meet your compliance obligations."
      },
      {
        question: "Do you perform security audits?",
        answer: "We conduct regular security audits and penetration testing by third-party security firms. Our systems are continuously monitored for vulnerabilities, and we maintain industry-standard security certifications."
      },
      {
        question: "How do you handle data backups?",
        answer: "We perform automated daily backups of all your data with multiple redundant copies stored in geographically distributed locations. Backups are encrypted and can be restored quickly if needed."
      }
    ]
  };

  return (
    <FAQ
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about SimplifAI"
      categories={categories}
      faqData={faqData}
      className="bg-gradient-to-br from-slate-50 to-blue-50"
    />
  );
};

export default FAQTabs;
