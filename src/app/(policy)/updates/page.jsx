"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Rows,
  ShieldCheck,
  MessageCircle,
  FileText,
  Bell,
  Wallet,
  BarChart2,
  Users,
} from "lucide-react";
import Template from "@/components/global/template";

const updates = [
  // ✅ Completed Features
  {
    title: "August 17, 2025 – Customer Signup & Authentication 🎉",
    description: "Smooth onboarding with Email, OTP, Password & Google login.",
    status: "done",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    image: "/assets/updates/authentication.png",
    content: (
      <>
        Customers can now create accounts using email, OTP, password, or Google
        login. Secure JWT sessions ensure safe authentication.
        <br />
        📊 <b>Market Insight:</b> Many apps like Vyapar & MyBillBook only
        support OTP logins. By adding Google login, signup friction is reduced
        by nearly 40%.
      </>
    ),
  },
  {
    title: "August 24, 2025 – Dashboard Launched",
    description: "A central hub to manage billing, products, and reports.",
    status: "done",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    image: "/assets/updates/dashboard.png",
    content: (
      <>
        A clean dashboard with quick navigation to billing, products, and
        reports. (Currently demo data, analytics coming soon).
        <br />
        📊 <b>Research:</b> Many retailers churn from Zoho Books due to
        complicated dashboards. We’re keeping it simple and fast.
      </>
    ),
  },
  {
    title: "August 31, 2025 – Multi-Organisation Management",
    description: "Easily manage multiple shops or outlets without logging out.",
    status: "done",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    image: "/assets/updates/multi.jpeg",
    content: (
      <>
        Retailers can now create and switch between multiple organisations
        without needing separate accounts.
        <br />
        📌 <b>Competitor Gap:</b> Vyapar & MyBillBook allow only one shop. Zoho
        Books requires separate subscriptions. Multi-org is our key
        differentiator.
      </>
    ),
  },
  {
    title: "September 7, 2025 – User Profile & Settings",
    description: "Profile customization and notification preferences.",
    status: "done",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    image: "/assets/updates/profile.jpeg",
    content: (
      <>
        Users can update their name, email, password, and notification
        preferences directly.
        <br />
        📊 <b>Market Note:</b> Many retailers share logins with staff. Secure
        profiles help maintain ownership and accountability.
      </>
    ),
  },
  {
    title: "September 14, 2025 – Staff Invitations & Role Management",
    description: "Invite team members and assign access roles.",
    status: "done",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    image: "/assets/updates/staff.jpeg",
    content: (
      <>
        Owners can now invite staff via email and assign roles like Admin,
        Manager, or Cashier.
        <br />
        📌 <b>Survey Insight:</b> KiranaTech’s 2024 report highlighted staff
        misuse as a top concern. Role-based access directly addresses this.
      </>
    ),
  },
  {
    title: "September 21, 2025 – Product Management",
    description: "Manage your product catalog with images and bulk upload.",
    status: "done",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    image: "/assets/updates/product.jpeg",
    content: (
      <>
        Add and edit products with name, price, category, and stock. Bulk
        import/export via Excel/CSV. Upload product images for catalog clarity.
        <br />
        📊 <b>Market Gap:</b> MyBillBook supports invoicing but lacks
        image-based catalogs. Retailers with FMCG catalogs need this clarity.
      </>
    ),
  },
  {
    title: "September 28, 2025 – Billing & Cart System",
    description: "Seamless billing with cart, discounts, and GST support.",
    status: "done",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    image: "/assets/updates/billing.jpeg",
    content: (
      <>
        Add products to a cart, apply discounts & GST, and generate bills.
        Invoices can be shared instantly via Email or WhatsApp.
        <br />
        📌 <b>Competitor Weakness:</b> Vyapar is fast but lacks cart-based
        billing. Our system is built for FMCG, pharmacy & retail sectors.
      </>
    ),
  },

  // 🚀 Upcoming Features
  {
    title: "October 5, 2025 – Invoice Generation",
    description: "Download or print GST-compliant invoices instantly.",
    status: "upcoming",
    icon: <FileText className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Retailers will be able to generate PDF invoices with GST details, share
        via WhatsApp/Email, and keep proper tax records.
      </>
    ),
  },
  {
    title: "October 12, 2025 – Customer Notifications",
    description: "Automatic bill notifications and updates sent to customers.",
    status: "upcoming",
    icon: <Bell className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        After every purchase, customers will receive WhatsApp notifications with
        their bill copy, discounts, or offers.
      </>
    ),
  },
  {
    title: "October 19, 2025 – Payment Reminders",
    description: "Automated reminders to customers for pending payments.",
    status: "upcoming",
    icon: <Bell className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Never chase payments manually again. Customers with pending dues will
        automatically get polite WhatsApp reminders.
      </>
    ),
  },
  {
    title: "October 26, 2025 – Low Stock Alerts",
    description: "WhatsApp alerts to shop owners when stock is running low.",
    status: "upcoming",
    icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Receive real-time WhatsApp notifications whenever stock drops below
        threshold levels, so you can restock in time.
      </>
    ),
  },
  {
    title: "November 2, 2025 – Daily Sales Reports",
    description: "WhatsApp daily summary to shop owners and customers.",
    status: "upcoming",
    icon: <Rows className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Every day, a WhatsApp message will be sent to the shop owner with sales
        summary, and customers can also opt-in for their purchase history.
      </>
    ),
  },
  {
    title: "November 9, 2025 – Wallet & Loyalty Points",
    description: "Reward system for customers with in-app wallet & points.",
    status: "upcoming",
    icon: <Wallet className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Customers can earn loyalty points on each purchase, redeem them for
        discounts, and use an in-app wallet for faster checkout.
      </>
    ),
  },
  {
    title: "November 16, 2025 – Sales & Inventory Forecasting",
    description:
      "Predict future sales and stock requirements using ARIMA model.",
    status: "upcoming",
    icon: <BarChart2 className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Retailers will be able to forecast sales and inventory using ARIMA-based
        predictive models, helping reduce stockouts and overstock situations.
      </>
    ),
  },
  {
    title: "November 23, 2025 – Advanced Customer Management",
    description: "Manage customers, track purchase history, and segment them.",
    status: "upcoming",
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Keep detailed customer records, track their purchases, assign loyalty
        tiers, and send targeted promotions to increase engagement and
        retention.
      </>
    ),
  },
];

const contactData = {
  title: "Need a Feature?",
  description:
    "If you have a feature request or face any issues, let us know. We’re building this software based on your needs.",
  content: (
    <div>
      <p className="mb-4">
        Every update reflects our mission to build the simplest and most
        powerful retail billing platform. Your feedback directly shapes our
        roadmap.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kravy.in
        </a>
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Product Updates"
      heading={
        <div>
          Kravy – <br className="hidden sm:block" /> Product Changelog
        </div>
      }
      description="Stay up to date with the latest improvements to our retail billing software. All updates are designed to help you sell faster, manage smarter, and scale easily."
      ctaDescription="Check back often for new features and improvements."
      ctaLink="/contact"
      ctaButton={
        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Request a Feature
        </span>
      }
      infoData={updates}
      contactData={contactData}
    />
  );
};

export default page;
