import React from "react";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Disclaimer - Kravy Retailer Billing Software",
  description:
    "Understand the scope, limitations, and responsibilities of using Kravy’s retailer billing and POS software. Learn about usage rights, integrations, and user responsibility.",
  keywords: [
    "Kravy",
    "Retailer Billing Software",
    "Disclaimer",
    "POS System",
    "User Responsibility",
    "Business Analytics",
  ],
  authors: [{ name: "Kravy Team", url: "https://kravy.in" }],
  openGraph: {
    title: "Disclaimer - Kravy Retailer Billing Software",
    description:
      "Understand the scope, limitations, and responsibilities of using Kravy’s billing software.",
    url: "https://kravy.in/disclaimer",
    siteName: "Kravy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - Kravy Retailer Billing Software",
    description:
      "Understand the scope, limitations, and responsibilities of using Kravy’s billing and POS software.",
  },
};

const cardData = [
  {
    title: "Software Provided As-Is",
    description:
      "All features, dashboards, and reports are provided for general business use only.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        The tools and modules within <strong>Kravy</strong> are designed to
        support retailers with billing, inventory, analytics, and customer
        management.
        <br />
        <br />
        While we aim for accuracy and reliability, we do not guarantee
        uninterrupted access, error-free performance, or compatibility with all
        devices at all times. Users are responsible for validating reports and
        outputs before making business-critical decisions.
      </>
    ),
  },
  {
    title: "No Guarantee of Business Outcomes",
    description:
      "We do not guarantee increased sales, profits, or compliance results.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Using <strong>Kravy</strong> may help streamline billing and
        administration, but business results depend on various factors such as
        operations, pricing, staff efficiency, and external market conditions.
        <br />
        <br />
        Kravy does not guarantee any specific increase in sales, profitability,
        or compliance simply by using the software.
      </>
    ),
  },
  {
    title: "Third-Party Integrations",
    description:
      "We are not liable for third-party APIs, payment gateways, or integrations.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Kravy</strong> may integrate with third-party platforms such as
        WhatsApp, UPI payment providers, or accounting systems.
        <br />
        <br />
        We are not affiliated with, endorsed by, or responsible for the
        performance, uptime, or policies of these external providers. All
        trademarks belong to their respective owners.
      </>
    ),
  },
  {
    title: "User Responsibility",
    description:
      "You are responsible for how you use Kravy’s software and reports.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Users are solely responsible for ensuring compliance with local laws,
        GST filing requirements, and customer data protection when using{" "}
        <strong>Kravy</strong>.
        <br />
        <br />
        Kravy is not liable for misreporting, tax penalties, or losses arising
        from misuse, incorrect data entry, or interpretation of reports.
      </>
    ),
  },
];

const contactData = {
  title: "Have Questions About This Disclaimer?",
  description:
    "Our team is happy to clarify any concerns related to usage limitations, integrations, or compliance responsibilities.",
  content: (
    <div>
      <p className="mb-4">
        If you have any questions about this disclaimer or its application to
        your business, please reach out to us at{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kravy.in
        </a>{" "}
        or{" "}
        <a
          href="mailto:contact@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@kravy.in
        </a>
        .
      </p>
      <p>
        We're based in India and here to assist retailers with subscription,
        technical, and compliance-related queries.
      </p>
    </div>
  ),
};

const Page = () => {
  return (
    <Template
      title="Disclaimer"
      heading={
        <div>
          Disclaimer <br className="hidden sm:block" />
          and User Responsibility
        </div>
      }
      description="Understand the scope, limitations, and responsibilities of using Kravy’s billing and POS software."
      ctaDescription="Kravy provides digital billing and analytics solutions. However, results and compliance outcomes depend on your business practices. Please read this disclaimer carefully."
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
