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
      stat: 3,
      statLabel: " weeks",
      description:
        "Most agencies take months. We get your system live in 2-3 weeks with everything working.",
      details: [
        "Week 1: Map your process and plan the build",
        "Week 2: Build and test with your real data",
        "Week 3: Launch and train your team",
      ],
    },
    {
      icon: Shield,
      title: "Your Data Stays Yours",
      stat: 0,
      statLabel: "",
      description:
        "We don't touch your customer data. No AI training, no selling, no snooping. What's yours stays yours.",
      details: [
        "Encrypted storage and transmission",
        "We never access sensitive customer info",
        "You control who sees what",
      ],
    },
    {
      icon: TrendingUp,
      title: "Built to Save You Time",
      stat: 0,
      statLabel: "",
      description:
        "Stop spending hours on booking, follow-ups, and answering the same questions. Let the system handle the repetitive stuff while you do real work.",
      details: [
        "Dashboard shows what's working",
        "Track leads, bookings, and responses in real time",
        "We tune things based on what you tell us",
      ],
    },
    {
      icon: Zap,
      title: "Works With Your Tools",
      stat: 0,
      statLabel: "",
      description:
        "We connect to what you're already using. Google Calendar, Stripe, your CRM, whatever. No ripping out your current setup and starting over.",
      details: [
        "Connects to the major platforms you know",
        "Custom integrations for your specific tools",
        "Built to work reliably without babysitting",
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
                  {/* Stat - only show if greater than 0 */}
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