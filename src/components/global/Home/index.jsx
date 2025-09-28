"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { GradientText } from "../GradientTextButton/GradientText";
import { Video } from "./Video";
import PricingSection from "./Pricing";
import Faqs from "./Faqs";
import Testimonials from "./Reviews";
import WhyChooseUs from "./whyChooseUs";
import AboutPlatform from "./AboutThisPlatform";
import OutletPhotoCompare from "./OutletPhotoCompare";
import OutletCompare from "./OutletCompare";
import MasonryGallery from "../galllery";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="pb-16 w-full text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="w-full px-4 text-center pt-20 bg-grid bg-grid-dark flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <GradientText title="Introducing Kravy.in" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl w-full sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white"
        >
          The Powerful Tools for Your <br />
          <span className="text-red-500 underline">Retailer Business</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-md md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          Simplify your billing and inventory management. Kravy provides
          powerful, easy-to-use tools for your retailer business — save time,
          reduce errors, and grow efficiently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="https://billing.foodsnap.in"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold
            px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow"
          >
            {" "}
            Try Now <ArrowRight className="w-4 h-4" />
          </a>

          {/* <a href="https://billing.foodsnap.in" target="_blank">
            <button className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-xl transition-all shadow-sm">
              Try Now
            </button>
          </a> */}
        </motion.div>
      </div>

      <div className="mt-12 md:mt-20 px-4">
        <Video />
      </div>

      {/* <MasonryGallery /> */}

      {/* <OutletPhotoCompare /> */}
      {/* <OutletCompare /> */}
      <WhyChooseUs />
      {/* <AboutPlatform /> */}
      <PricingSection />
      <Testimonials />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 px-4"
      >
        <div className="max-w-6xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 md:p-10 backdrop-blur-lg shadow-lg dark:shadow-black/20 bg-white/60 dark:bg-[#10101a]/70">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="md:w-2/3 text-neutral-700 dark:text-neutral-300 text-md leading-relaxed">
              Streamline your retail operations with <strong>Kravy</strong> —
              the all-in-one billing software for retailers. Manage invoices,
              track inventory, handle GST compliance, and monitor customer
              purchases — efficiently and accurately.
            </p>

            <Link
              href="#pricing"
              className="flex justify-center w-full md:w-auto items-center px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12"
      >
        <Faqs />
      </motion.div>
    </div>
  );
}
