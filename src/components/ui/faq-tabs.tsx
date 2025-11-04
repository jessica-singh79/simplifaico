import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, FAQItem[]>;
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
  ...props
}) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background px-4 py-12 text-foreground",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <FAQList
        faqData={faqData}
        selected={selectedCategory}
      />
    </section>
  );
};

interface FAQHeaderProps {
  title: string;
  subtitle: string;
}

const FAQHeader: React.FC<FAQHeaderProps> = ({ title, subtitle }) => (
  <div className="relative z-10 flex flex-col items-center justify-center">
    <span className="mb-8 bg-gradient-to-r from-primary to-primary-light bg-clip-text font-medium text-transparent">
      {subtitle}
    </span>
    <h2 className="mb-8 text-5xl font-bold">{title}</h2>
    <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary-50/50 to-primary-100/30 blur-3xl" />
  </div>
);

interface FAQTabsProps {
  categories: Record<string, string>;
  selected: string;
  setSelected: (category: string) => void;
}

const FAQTabs: React.FC<FAQTabsProps> = ({ categories, selected, setSelected }) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-500",
          selected === key
            ? "border-primary text-white"
            : "border-border-DEFAULT bg-transparent text-gray-600 hover:text-gray-900"
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-light"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

interface FAQListProps {
  faqData: Record<string, FAQItem[]>;
  selected: string;
}

const FAQList: React.FC<FAQListProps> = ({ faqData, selected }) => (
  <div className="mx-auto mt-12 max-w-3xl">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="space-y-4"
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border transition-colors",
        isOpen ? "bg-gray-50" : "bg-white"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-gray-900" : "text-gray-600"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-gray-900" : "text-gray-600"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="text-gray-600">{answer}</p>
      </motion.div>
    </motion.div>
  );
};
