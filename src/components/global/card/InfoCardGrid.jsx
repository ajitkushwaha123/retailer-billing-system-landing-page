"use client";

import { motion } from "framer-motion";

export default function InfoCardGrid({ cardData = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto relative z-10">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-[#0f0f1f] border border-neutral-200 dark:border-[#272742] 
            rounded-2xl shadow-md relative overflow-hidden backdrop-blur-md"
        >
          {/* Status Badge */}
          {card?.status && (
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                card?.status === "done"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              }`}
            >
              {card?.status === "done" ? "Done ✅" : "Upcoming 🚀"}
            </div>
          )}

          {/* Header */}
          <div className="flex bg-grid dark:bg-grid-dark p-4 md:p-8 items-start gap-4">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full shadow-sm">
              {card?.icon}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-white mb-1">
                {card?.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-400">
                {card?.description}
              </p>
            </div>
          </div>

          <div className="relative mx-4 mb-4 md:mx-8 mt-1 rounded-xl border border-neutral-200 dark:border-[#31314a] p-5 text-sm leading-relaxed text-neutral-700 dark:text-gray-300">
            <div className="absolute top-0 left-0 w-2 h-2 rounded-bl-xl border-l-4 border-b-4 border-green-400" />
            {card?.content}
          </div>

          {card?.image && (
            <div className="mx-4 mb-6 md:mx-8">
              <img
                src={card?.image || ""}
                alt={card?.title}
                className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
            </div>
          )}

          <div className="absolute bottom-[-20px] right-6 flex gap-2 opacity-20 dark:opacity-10">
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
