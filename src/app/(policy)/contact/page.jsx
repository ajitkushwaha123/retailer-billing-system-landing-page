import React from "react";
import { Mail, Phone, MapPin, Headset } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Contact Us | Kravy Retailer Billing Software",
  description:
    "Need help with billing, POS setup, or subscriptions? Contact the Kravy team for retailer support and assistance.",
  keywords: [
    "Kravy contact",
    "billing software support",
    "POS support",
    "customer help",
    "subscription queries",
    "Kravy retailer software",
  ],
  openGraph: {
    title: "Contact Us | Kravy Retailer Billing Software",
    description:
      "Need help with billing, POS setup, or subscriptions? Contact the Kravy team for retailer support and assistance.",
    url: "https://kravy.in/contact",
    siteName: "Kravy Retailer Billing Software",
    images: [
      {
        url: "https://kravy.in/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Kravy Retailer Billing Software",
    description:
      "Need help with billing, POS setup, or subscriptions? Contact the Kravy team for retailer support and assistance.",
    images: ["https://kravy.in/og-image.png"],
  },
};

const cardData = [
  {
    title: "Customer Support",
    description: "Need help with your account, POS setup, or billing issues?",
    icon: <Headset className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Whether you’re facing trouble with invoices, customer management,
        subscriptions, or multi-shop setup, our support team is here for you.
        <br />
        <br />
        Reach out via email at{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kravy.in
        </a>{" "}
        — we typically respond within 24 hours.
      </>
    ),
  },
  {
    title: "Phone Support",
    description: "Prefer to talk to someone directly?",
    icon: <Phone className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We currently do not offer dedicated phone support. Please reach out via
        email for all inquiries, and our team will respond promptly.
      </>
    ),
  },
  {
    title: "Location",
    description: "We operate from India’s capital city.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Kravy Retailer Billing Software – Headquarters</strong>
        <br />
        New Delhi, India
        <br />
        <br />
        Please contact us via email before requesting any form of correspondence
        or meetings.
      </>
    ),
  },
];

const contactData = {
  title: "We’re Here to Help",
  description:
    "Questions about billing, subscriptions, or POS setup? Get in touch.",
  content: (
    <div>
      <p className="mb-4">
        Whether you're a retailer, wholesaler, or multi-shop business, we value
        your questions and feedback. Let us know how we can support your growth
        with Kravy.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kravy.in
        </a>{" "}
        <br />
        General Queries:{" "}
        <a
          href="mailto:contact@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          contact@kravy.in
        </a>{" "}
        <br />
        Billing & Refund Issues:{" "}
        <a
          href="mailto:billing@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          billing@kravy.in
        </a>{" "}
        <br />
        Location: New Delhi, India
      </p>
    </div>
  ),
};

const Page = () => {
  return (
    <Template
      title="Contact Us"
      heading={
        <div>
          Get in Touch <br className="hidden sm:block" />
          with Kravy Support
        </div>
      }
      description="Need help with billing, POS setup, or subscriptions? Contact the Kravy team for retailer support and assistance."
      ctaDescription="We’re just an email away. Reach out with your questions, and our support team will get back to you promptly."
      ctaLink="/support"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Contact Support
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default Page;
