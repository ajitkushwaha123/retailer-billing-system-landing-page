import Template from "@/components/global/template";
import { Headset, Rows, Zap, ShieldCheck, Trash2 } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Privacy Policy - Kravy",
  description:
    "Learn how Kravy Retail Billing Software collects, uses, and safeguards your business and customer data with full transparency and compliance.",
  keywords: [
    "Kravy",
    "Retail Billing Software",
    "Privacy Policy",
    "Data Protection",
    "Customer Information",
    "Business Privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Kravy",
    description:
      "Learn how Kravy Retail Billing Software collects, uses, and safeguards your business and customer data with full transparency and compliance.",
    url: "https://kravy.in/privacy-policy",
    siteName: "Kravy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Kravy",
    description:
      "Learn how Kravy Retail Billing Software collects, uses, and safeguards your business and customer data with full transparency and compliance.",
  },
};

const cardData = [
  {
    title: "Types of Information We Collect",
    description:
      "We gather only the necessary data to help your business run smoothly.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy collects business and customer details such as shop information,
        invoices, GST data, payment modes, and customer contact details.
        <br />
        <br />
        We may also record sales activity, product usage, and login history to
        optimize reporting and prevent misuse.
      </>
    ),
  },
  {
    title: "How We Use Your Data",
    description:
      "Your data powers billing, analytics, offers, and reporting features.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Data collected through Kravy is used for billing, invoice generation,
        customer management, analytics dashboards, loyalty tracking, and
        automated WhatsApp reports.
        <br />
        <br />
        It also supports promotions, GST-compliant invoicing, and system
        improvements tailored to your retail operations.
      </>
    ),
  },
  {
    title: "Protecting Your Data",
    description:
      "We ensure your business and customer data stays secure at all times.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All information is stored with encrypted access, secure servers, and
        strict internal controls.
        <br />
        <br />
        Kravy never sells or shares your business/customer data. Any external
        integrations (such as payment gateways or WhatsApp APIs) are handled
        securely with limited permissions.
      </>
    ),
  },
  {
    title: "Data Retention & Deletion",
    description: "You stay in control of your records and privacy.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy retains business and customer records as long as your account is
        active or required by law (such as GST compliance).
        <br />
        <br />
        You may request deletion of your account and data anytime by contacting
        us at{" "}
        <a
          href="mailto:privacy@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          privacy@kravy.in
        </a>
        .
      </>
    ),
  },
];

const contactData = {
  title: "Have Questions About Your Data?",
  description:
    "We’re committed to protecting your privacy. Reach out anytime for support or clarification.",
  content: (
    <div>
      <p className="mb-4">
        At Kravy, safeguarding your business and customer data is our highest
        priority. If you have concerns about how your information is handled,
        please contact us.
      </p>
      <p className="mb-2">
        General Queries:{" "}
        <a
          href="mailto:contact@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@kravy.in
        </a>
      </p>
      <p className="mb-2">
        Technical Support:{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kravy.in
        </a>
      </p>
      <p>
        Privacy/Data Requests:{" "}
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
      title="Privacy Policy"
      heading={
        <div>
          Your Data. <br className="hidden sm:block" />
          Your Business. Our Responsibility.
        </div>
      }
      description="Learn how Kravy collects, uses, and safeguards your business and customer data with transparency and compliance."
      ctaDescription="We take data protection seriously. This policy explains what we collect, why we collect it, and how you remain in control."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Report a Concern
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
