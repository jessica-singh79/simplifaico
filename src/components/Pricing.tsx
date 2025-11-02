import React, { useState } from 'react';
import { Check, Zap, Crown, Building, X } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for solo founders and small teams getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      color: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "Up to 5 automated workflows",
        "Basic integrations (50+ apps)",
        "Email support",
        "Standard templates",
        "Basic analytics dashboard",
        "1,000 tasks per month"
      ],
      limitations: ["Limited customization options", "Standard support only"]
    },
    {
      name: "Professional",
      icon: Crown,
      description: "For growing businesses ready to scale their automation",
      monthlyPrice: 99,
      yearlyPrice: 990,
      color: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "Unlimited automated workflows",
        "Advanced integrations (500+ apps)",
        "Priority support",
        "Custom templates & AI builder",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "API access",
        "Workflow versioning",
        "10,000 tasks per month"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      icon: Building,
      description: "For large organizations with complex automation needs",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      color: "from-green-500 to-teal-500",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Advanced security & compliance",
        "Dedicated customer success manager",
        "Custom integrations",
        "On-premise deployment options",
        "Advanced workflow analytics",
        "SLA guarantees",
        "24/7 phone support",
        "Unlimited tasks"
      ],
      limitations: []
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choose the perfect plan to automate your workflows. Start free, scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg font-semibold transition-colors ${!isYearly ? 'text-purple-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`mx-4 relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                isYearly ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-semibold transition-colors ${isYearly ? 'text-purple-600' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="ml-3 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? '/year' : '/month';
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-2 border-purple-500 scale-105' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${price}
                    </span>
                    <span className="text-gray-600 text-lg">
                      {period}
                    </span>
                  </div>

                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white hover:scale-105 shadow-lg`
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-lg">Everything included:</h4>
                  
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 text-green-500 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}

                  {plan.limitations.length > 0 && (
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <h5 className="font-semibold text-gray-700 text-sm mb-2">Limitations:</h5>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start space-x-3 mb-2">
                          <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm leading-relaxed">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-3xl opacity-0 hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">24/7 support</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What happens after the free trial?</h4>
              <p className="text-gray-600 text-sm">Your account will automatically convert to the plan you selected. You can cancel anytime during the trial.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom solutions?</h4>
              <p className="text-gray-600 text-sm">Yes, our Enterprise plan includes custom integrations and dedicated support for unique requirements.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is my data secure?</h4>
              <p className="text-gray-600 text-sm">Absolutely. We use enterprise-grade security with SOC 2 compliance and end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;