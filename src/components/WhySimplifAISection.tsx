import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Zap, Users, TrendingUp, Shield } from "lucide-react";
import CountUp from "react-countup";

export function WhySimplifAISection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Safe height calculation
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.getBoundingClientRect().height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const reasons = [
    {
      icon: Clock,
      title: "2-3 Week Implementation",
      stat: 2.5,
      statLabel: " weeks",
      description:
        "Most AI agencies take months to deploy. We have your first automation live in 2-3 weeks with a proven rapid deployment process.",
      details: [
        "Week 1: Discovery & setup with your team",
        "Week 2: Build & test with your actual data",
        "Week 3: Deploy & train your team to use it",
      ],
    },
    {
      icon: Shield,
      title: "Your Data Stays Private",
      stat: 100,
      statLabel: "% confidential",
      description:
        "We never use your business data to train AI models. Your conversations, documents, and processes stay completely private—unlike platforms that harvest data.",
      details: [
        "GDPR & SOC 2 compliant systems",
        "Data encrypted at rest and in transit",
        "Your data is never shared or sold",
      ],
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI From Day One",
      stat: 40,
      statLabel: "% cost reduction",
      description:
        "Every client gets a custom dashboard tracking hours saved, costs reduced, and process improvements. Our average client saves 25 hours/week within the first month.",
      details: [
        "Real-time analytics dashboard",
        "Monthly performance reports",
        "Continuous optimization included",
      ],
    },
    {
      icon: Zap,
      title: "Integrations Out of the Box",
      stat: 50,
      statLabel: "+ tools",
      description:
        "Works with the tools you already use—no rip-and-replace. We connect to Salesforce, HubSpot, QuickBooks, Stripe, Google Workspace, Slack, and 45+ more platforms.",
      details: [
        "Pre-built integrations for popular tools",
        "Custom API connections available",
        "Zapier & Make.com compatible",
      ],
    },
  ];

  return (
    <section
      id="why-simplifai"
      className="bg-background-secondary relative"
      ref={containerRef}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black leading-tight">
          <span className="bg-gradient-to-r from-text-primary via-primary to-secondary bg-clip-text text-transparent">
            Why SimplifAI?
          </span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto pb-20">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row md:gap-10 pt-4 md:pt-12"
            >
              {/* Sticky Icon + Title */}
              <div className="sticky flex items-center top-40 max-w-xs md:max-w-[220px] self-start">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
                >
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="relative md:pl-8 flex-1">
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-background-primary rounded-2xl p-6 md:p-8 shadow-lg border border-border mt-4 md:mt-0"
                >
                  {/* Stat */}
                  {reason.stat > 0 && (
                    <div className="text-primary font-bold text-lg md:text-xl mb-3">
                      <CountUp
                        end={reason.stat}
                        duration={1.5}
                        decimals={reason.stat % 1 !== 0 ? 1 : 0}
                      />
                      {reason.statLabel && (
                        <span className="ml-1">{reason.statLabel}</span>
                      )}
                    </div>
                  )}

                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                    {reason.title}
                  </h3>

                  <p className="text-text-secondary mb-4">{reason.description}</p>

                  <div className="space-y-2 pt-2 border-t border-border-light">
                    {reason.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}

        {/* Animated Timeline Line */}
        {containerHeight > 0 && (
          <div
            style={{ height: containerHeight + "px" }}
            className="absolute md:left-16 left-10 top-0 w-[3px] bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-primary via-secondary to-transparent rounded-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}