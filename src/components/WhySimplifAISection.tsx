import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Zap, Shield, TrendingUp } from "lucide-react";
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
      title: "Fast Turnaround",
      stat: 2.5,
      statLabel: " weeks",
      description:
        "Most agencies take months. We get your site live in 2-3 weeks with everything working—booking, follow-ups, the whole thing.",
      details: [
        "Week 1: We map out your process and get started",
        "Week 2: Build it out and test with real data",
        "Week 3: Launch and show your team how to use it",
      ],
    },
    {
      icon: Shield,
      title: "Your Data Stays Yours",
      stat: 100,
      statLabel: "% private",
      description:
        "We don't train AI models on your customer data. Ever. What's yours stays yours—encrypted, compliant, and locked down.",
      details: [
        "GDPR and SOC 2 compliant",
        "Encrypted storage and transmission",
        "We never share or sell your data",
      ],
    },
    {
      icon: TrendingUp,
      title: "You'll See The Numbers",
      stat: 40,
      statLabel: "% average savings",
      description:
        "Every project includes a dashboard showing hours saved, costs cut, and leads captured. Most clients save 25 hours a week within the first month.",
      details: [
        "Live dashboard you can check anytime",
        "Monthly reports showing what's working",
        "We keep tuning things to perform better",
      ],
    },
    {
      icon: Zap,
      title: "Works With Your Tools",
      stat: 50,
      statLabel: "+ integrations",
      description:
        "We plug into what you're already using—Salesforce, QuickBooks, Google Calendar, Stripe, whatever. No ripping out your current setup.",
      details: [
        "Pre-built connections to major platforms",
        "Custom integrations if you need them",
        "Plays nice with Zapier and Make",
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
            Why work with us?
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
              {/* Sticky Icon */}
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