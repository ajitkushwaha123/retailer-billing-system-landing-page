"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Simple & fast billing & invoicing",
  "GST-compliant invoices automatically generated",
  "Track sales, inventory & customer data in one place",
  "Multi-outlet management & reporting",
  "Customer loyalty & discount tracking",
  "Secure cloud backup & data safety",
];

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="mt-24 px-4 md:px-0 max-w-6xl mx-auto text-center relative z-10">
      {/* Optional Subtle Background */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white via-neutral-100 to-white dark:from-transparent dark:via-white/5 dark:to-transparent blur-lg" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
      >
        Why Choose Kravy?
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-600 dark:text-neutral-300 mb-10 max-w-2xl mx-auto text-base md:text-lg"
      >
        A complete retail billing software for small to medium businesses. Kravy
        simplifies billing, inventory, and customer management — all in one
        secure platform.
      </motion.p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
            className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-white/10 p-5 md:p-6 bg-white dark:bg-white/10 shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-green-600 p-2 rounded-full text-white shrink-0"
            >
              <CheckCircle size={18} />
            </motion.div>
            <span className="text-left text-sm text-gray-800 dark:text-white leading-snug tracking-wide">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
