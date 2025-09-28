"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "₹499/mo",
      features: [
        "Basic billing & invoicing",
        "Inventory management for up to 100 items",
        "GST-compliant invoices",
        "Access to sales reports",
      ],
      button: "Get Started",
      highlight: false,
    },
    {
      name: "Standard",
      price: "₹999/mo",
      features: [
        "Unlimited billing & invoicing",
        "Full inventory management",
        "GST & tax reporting",
        "Customer database & loyalty tracking",
        "Sales analytics & dashboard",
        "Priority email support",
      ],
      button: "Go Standard",
      highlight: true,
    },
    {
      name: "Premium",
      price: "₹1,499/mo",
      features: [
        "Everything in Standard",
        "Multi-outlet support",
        "Advanced reporting & analytics",
        "Automated alerts for low stock",
        "Dedicated account support",
      ],
      button: "Go Premium",
      highlight: false,
    },
  ],
  quarterly: [
    {
      name: "Starter",
      price: "₹1,299/3mo",
      features: [
        "Basic billing & invoicing",
        "Inventory management for up to 100 items",
        "GST-compliant invoices",
        "Access to sales reports",
      ],
      button: "Get Started",
      highlight: false,
    },
    {
      name: "Standard",
      price: "₹2,699/3mo",
      features: [
        "Unlimited billing & invoicing",
        "Full inventory management",
        "GST & tax reporting",
        "Customer database & loyalty tracking",
        "Sales analytics & dashboard",
        "Priority email support",
      ],
      button: "Go Standard",
      highlight: true,
    },
    {
      name: "Premium",
      price: "₹3,999/3mo",
      features: [
        "Everything in Standard",
        "Multi-outlet support",
        "Advanced reporting & analytics",
        "Automated alerts for low stock",
        "Dedicated account support",
      ],
      button: "Go Premium",
      highlight: false,
    },
  ],
  early: [
    {
      name: "Early Access",
      price: "₹299/mo",
      features: [
        "Basic billing & invoicing",
        "Inventory for up to 50 items",
        "GST-compliant invoices",
        "Email support",
      ],
      button: "Join Early",
      highlight: true,
    },
  ],
};

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="px-4 py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        Choose Your Kravy Plan
      </h2>
      <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-xl mx-auto mb-10">
        Flexible plans for retailers of every size — from small shops to
        multi-outlet chains.
      </p>

      <div className="flex justify-center mb-12 gap-3">
        {["early", "monthly", "quarterly"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setBilling(type)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              billing === type
                ? "bg-green-600 text-white shadow"
                : "bg-gray-200 dark:bg-[#0a092d] text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-[#1a1b38]"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {type === "monthly"
              ? "1 Month"
              : type === "quarterly"
              ? "Quarterly"
              : "Early Plan"}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={billing}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {plans[billing].map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={plan.highlight ? { scale: 1.03 } : { y: -4 }}
            className={`relative rounded-2xl border transition-all duration-300 p-8 text-left ${
              plan.highlight
                ? "bg-gradient-to-b from-green-100 to-white dark:from-[#1b2a1b] dark:to-[#0f120f] border-green-400 dark:border-[#7cffa0] shadow-xl"
                : "bg-white border-gray-200 dark:bg-[#0a092d] dark:border-neutral-700"
            } backdrop-blur-lg shadow-md dark:shadow-black/20 transition-colors`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {plan.price}
            </p>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-neutral-300 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://billing.foodsnap.in"
              className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                plan.highlight
                  ? "bg-green-600 text-white hover:bg-green-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-[#ffffff10] dark:text-white dark:hover:bg-[#ffffff20]"
              }`}
            >
              {plan.button} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
