"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    title: "Shop Owner, Sharma General Store",
    quote:
      "Kravy ne mere billing aur inventory ka sara kaam itna smooth kar diya! Ab reports ek click mein mil jaati hain, time save ho gaya.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Mehra",
    title: "Owner, Cozy Mart",
    quote:
      "GST calculations aur customer invoices ab hassle-free ho gaye. Kravy ka support bhi 10/10 hai!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Karan Desai",
    title: "Retailer, Spice & More",
    quote:
      "Inventory tracking aur sales reports se business decisions lena ab easy ho gaya hai. Kravy ne shop management ka scene simplify kar diya.",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Testimonials() {
  return (
    <section className="mt-20 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
          Khud Suno Hamare Retailer Clients Se 💬
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          100+ Shops already trust Kravy 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 md:p-8 backdrop-blur-lg shadow-lg dark:shadow-black/20 bg-white/60 dark:bg-[#10101a]/70 transition-colors"
          >
            <div className="flex items-center gap-1 text-yellow-500 mb-3">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed mb-6 italic">
              “{t.quote}”
            </p>
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full object-cover border border-neutral-300 dark:border-neutral-600"
              />
              <div>
                <div className="text-sm font-semibold text-neutral-800 dark:text-white">
                  {t.name}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {t.title}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
