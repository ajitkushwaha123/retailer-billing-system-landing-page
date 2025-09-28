import React from "react";
import { Headset, Rows, Zap, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Terms & Conditions | Kravy",
  description:
    "Understand the rules that govern your use of Kravy – Retailer Billing Software. Learn about account usage, data handling, and billing compliance.",
  keywords: [
    "Kravy",
    "Retail Billing Software",
    "Terms and Conditions",
    "Invoices",
    "Customer Management",
    "GST Compliance",
    "Billing",
    "Data Privacy",
  ],
  authors: [{ name: "Kravy", url: "https://kravy.in" }],
  openGraph: {
    title: "Terms & Conditions | Kravy",
    description:
      "Understand the rules that govern your use of Kravy – Retailer Billing Software, including billing, customer data, and software usage.",
    url: "https://kravy.in/terms-and-conditions",
    siteName: "Kravy",
    type: "website",
  },
};

const cardData = [
  {
    title: "User Responsibilities",
    description:
      "Users must operate Kravy software ethically and comply with applicable laws and GST regulations.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By using Kravy, you agree to use the software for lawful retail billing
        and customer management purposes. Misuse of the software, falsifying
        invoices, or unauthorized access to customer data is strictly
        prohibited.
        <br />
        <br />
        Users are responsible for securing their account credentials and
        ensuring authorized personnel have access only to permitted modules.
      </>
    ),
  },
  {
    title: "Platform Usage & Limitations",
    description:
      "Kravy provides tools for billing, invoicing, analytics, and customer management — not ownership of customer data.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy offers access to billing, invoice generation, customer management,
        multi-shop dashboards, loyalty tracking, and automated reporting.
        <br />
        <br />
        Redistribution, unauthorized data sharing, or attempts to bypass
        software limits may result in suspension or legal action.
      </>
    ),
  },
  {
    title: "Security & Data Integrity",
    description:
      "We protect your business and customer data, but you must also follow best practices.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All data within Kravy is encrypted and stored securely. Role-based
        access ensures employees only see information necessary for their work.
        <br />
        <br />
        Users should avoid sharing login details and immediately report any
        suspicious activity to Kravy support.
      </>
    ),
  },
  {
    title: "Termination & Data Deletion",
    description:
      "You may cancel your account anytime. We may terminate accounts violating policies.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Accounts may be canceled by the user at any time. Upon termination,
        access to the software and customer data dashboards will cease.
        <br />
        <br />
        Kravy reserves the right to terminate accounts that misuse the platform,
        violate terms, or engage in fraudulent activity. Data deletion requests
        can be submitted via our support channels.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Terms or Usage?",
  description:
    "Reach out if you need clarification on policies, billing, or data handling in Kravy.",
  content: (
    <div>
      <p className="mb-4">
        These Terms & Conditions govern your use of Kravy – Retailer Billing
        Software. By accessing the platform, you agree to comply with them.
      </p>
      <p className="mb-2">
        General inquiries:{" "}
        <a
          href="mailto:contact@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@kravy.in
        </a>
      </p>
      <p className="mb-2">
        Technical support:{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kravy.in
        </a>
      </p>
      <p>
        Data or privacy requests:{" "}
        <a
          href="mailto:privacy@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          privacy@kravy.in
        </a>
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Terms & Conditions"
      heading={
        <div>
          Your Account. <br className="hidden sm:block" />
          Our Terms. Clear & Fair.
        </div>
      }
      description="Understand the rules that govern your use of Kravy – Retailer Billing Software, including billing, customer management, and analytics."
      ctaDescription="By using Kravy, you agree to these Terms & Conditions designed to ensure ethical, secure, and compliant use of our software."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Report an Issue
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
