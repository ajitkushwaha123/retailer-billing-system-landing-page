import React from "react";
import { Headset, Rows, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "FAQ - Kravy",
  description:
    "Find answers to common questions about using Kravy — from account setup, billing, product management, notifications, to support.",
  keywords: [
    "Kravy",
    "FAQ",
    "Retail billing software",
    "POS",
    "Invoices",
    "Notifications",
    "Support",
  ],
  authors: [{ name: "Kravy Team", url: "https://kravy.in" }],
  openGraph: {
    title: "FAQ - Kravy",
    description:
      "Find answers to common questions about using Kravy — from account setup, billing, product management, notifications, to support.",
    url: "https://kravy.in/faq",
    siteName: "Kravy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Kravy",
    description:
      "Find answers to common questions about using Kravy — from account setup, billing, product management, notifications, to support.",
  },
};

const cardData = [
  {
    title: "What is Kravy?",
    description:
      "Kravy is a complete billing and inventory management software for small businesses.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy is an all-in-one platform for retailers to manage billing,
        track products, generate invoices, and communicate with customers. Ideal
        for shops, pharmacies, FMCG stores, and small businesses.
      </>
    ),
  },
  {
    title: "How do I get started with Kravy?",
    description:
      "Sign up and start managing your shop instantly — no complex setup.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Visit <strong>www.kravy.in</strong>, create an account, add your
        products and start billing. Our simple interface ensures you are ready
        in minutes.
      </>
    ),
  },
  {
    title: "Can I manage multiple shops?",
    description:
      "Yes — Kravy allows you to manage multiple outlets under one account.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Add multiple organizations or outlets and switch between them without
        logging out. Keep track of sales and inventory for all your shops in one
        place.
      </>
    ),
  },
  {
    title: "How can I invite my staff?",
    description: "Invite staff members and assign roles with access control.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Owners can invite staff via email and assign roles like Admin, Manager,
        or Cashier. Role-based access prevents misuse and ensures
        accountability.
      </>
    ),
  },
  {
    title: "How do I manage my products?",
    description: "Easily add, edit, and track your products.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Add product details including name, price, category, stock, and images.
        Bulk import/export is supported via Excel/CSV for faster management.
      </>
    ),
  },
  {
    title: "Can I generate invoices?",
    description: "Yes — create GST-compliant invoices quickly.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Generate PDF invoices instantly for any sale. Share invoices with
        customers via WhatsApp or Email for easy record-keeping.
      </>
    ),
  },
  {
    title: "Does Kravy send notifications?",
    description: "Keep your customers and staff informed automatically.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Customers can receive WhatsApp notifications for bills, offers, or
        payment reminders. Shop owners get low-stock alerts and daily sales
        summaries.
      </>
    ),
  },
  {
    title: "What are the pricing plans?",
    description: "Affordable monthly plans for small businesses.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We offer simple subscription plans starting at ₹999/month. Plans include
        unlimited billing, product management, and notifications. No hidden
        fees.
      </>
    ),
  },
  {
    title: "Can I cancel anytime?",
    description: "Yes, subscriptions are flexible and cancellable anytime.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You can cancel your subscription at any time. Access will remain active
        until the end of the billing cycle.
      </>
    ),
  },
  {
    title: "How do I get support?",
    description: "Our support team is available via email for assistance.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Contact us at{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kravy.in
        </a>{" "}
        for any issues with billing, products, or notifications. We typically
        respond within 24 hours.
      </>
    ),
  },
];

const contactData = {
  title: "Still Have Questions?",
  description:
    "We’re here to help you get the most out of Kravy. Reach out anytime.",
  content: (
    <div>
      <p className="mb-4">
        Whether you need help setting up your shop, managing products, or
        understanding notifications — our team is ready to assist.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kravy.in
        </a>
        <br />
        Location: New Delhi, India
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Frequently Asked Questions"
      heading={
        <div>
          FAQs About <br className="hidden sm:block" />
          Kravy
        </div>
      }
      description="Find answers to common questions about using Kravy — from account setup, billing, product management, notifications, to support."
      ctaDescription="Can’t find what you're looking for? Reach out and we’ll help you right away."
      ctaLink="/contact"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Ask a Question
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
