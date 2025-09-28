"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Globe,
  FileText,
  CalendarClock,
  XCircle,
} from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    question: "What is Kravy Retailer Billing Software?",
    answer:
      "Kravy is a comprehensive billing solution for retailers, allowing easy invoice generation, GST compliance, inventory management, and customer tracking.",
  },
  {
    icon: Sparkles,
    question: "What features are included in the subscription?",
    answer:
      "You get access to billing, multi-shop management, loyalty tracking, invoice history, GST-compliant reports, and detailed analytics dashboards.",
  },
  {
    icon: ShieldCheck,
    question: "Is my business data secure?",
    answer:
      "Yes. Kravy uses encryption, role-based permissions, and secure cloud storage to protect your business and customer data.",
  },
  {
    icon: Globe,
    question: "Can I access Kravy from multiple devices?",
    answer:
      "Absolutely. Your account is cloud-based, allowing access from any authorized device, including desktops, tablets, and mobile devices.",
  },
  {
    icon: FileText,
    question: "Does Kravy support GST and invoice generation?",
    answer:
      "Yes! Generate GST-compliant invoices automatically for all sales, track payments, and export reports for taxation or audit purposes.",
  },
  {
    icon: XCircle,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. There are no lock-ins — you can cancel your subscription anytime before renewal.",
  },
  {
    icon: CalendarClock,
    question: "Can I request custom features for my store?",
    answer:
      "Yes. You can request new features or enhancements, and our team will prioritize them for future updates.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-4 px-4 sm:px-8 w-full mx-auto text-neutral-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        💻 Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const Icon = faq.icon;
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              className={`rounded-md border border-neutral-200 dark:border-neutral-700 shadow-lg dark:shadow-black/20 bg-white/70 dark:bg-[#10101a]/70 backdrop-blur transition-colors overflow-hidden`}
              whileHover={{ scale: 1.01 }}
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-5 py-4 text-left font-medium text-md md:text-lg transition-all duration-300 ${
                  isOpen
                    ? "bg-indigo-100 dark:bg-[#1a183b]/60"
                    : "hover:bg-indigo-50 dark:hover:bg-[#16142f]/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                  <span className="text-neutral-900 dark:text-white">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 text-start py-5 text-sm sm:text-base text-neutral-700 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
