
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../ModToggle";
import Link from "next/link";
import { SITE_NAME } from "@/constant";

const navLinks = [
  { title: "Updates", href: "/updates" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
  { title: "Pricing", href: "/pricing" },
];

const navMobileLinks = [
  { title: "Updates", href: "/updates" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => isOpen && setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 rounded-xl backdrop-blur-md bg-white/70 dark:bg-darkBackground/40 border border-gray-200 dark:border-gray-500 shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between py-3">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl cursor-pointer font-extrabold text-black dark:text-white tracking-tight"
          >
             Kravy <span className="text-green-500">.in</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks?.map((link, i) => (
            <motion.a
              key={i}
              href={`${link?.href}`}
              className="relative text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors group"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {link?.title}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <ModeToggle />
          <motion.a
            href="https://billing.foodsnap.in"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-xl transition-all"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Get Started
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 pt-1 space-y-2 border-t border-gray-200 dark:border-gray-800"
          >
            {navMobileLinks?.map((link, i) => (
              <a
                key={i}
                href={`${link?.href}`}
                className="block text-gray-800 dark:text-gray-100 py-2 border-b border-gray-100 dark:border-gray-700 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a
              href="https://billing.foodsnap.in"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-semibold transition"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
