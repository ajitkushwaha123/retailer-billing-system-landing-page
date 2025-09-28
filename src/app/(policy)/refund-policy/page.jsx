import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Refund Policy - Kravy Retailer Billing Software",
  description:
    "Understand Kravy’s refund policy for retailer billing software subscriptions. Due to instant digital access, refunds are only applicable in rare billing error cases.",
  keywords: [
    "Kravy",
    "Refund Policy",
    "Retailer Billing Software",
    "POS",
    "Billing Issues",
    "Subscription Refund",
  ],
  openGraph: {
    title: "Refund Policy - Kravy Retailer Billing Software",
    description:
      "Kravy provides instant digital access to billing and POS features. Refunds are only applicable in rare billing error scenarios.",
    url: "https://kravy.in/refund-policy",
    siteName: "Kravy",
    type: "website",
  },
};

const cardData = [
  {
    title: "No Refund Policy for Subscriptions",
    description:
      "Due to the digital nature of SaaS, refunds are generally not provided once access is activated.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Kravy</strong> provides instant access to billing, invoicing,
        and analytics tools upon subscription.
        <br />
        <br />
        Since services are digital, subscription-based, and activated
        immediately, Kravy follows a strict <strong>
          no-refund policy
        </strong>{" "}
        unless required by applicable law or in the case of a verified billing
        error.
      </>
    ),
  },
  {
    title: "User Agreement at Time of Subscription",
    description:
      "Users agree to our refund terms before activating their subscription.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By subscribing to <strong>Kravy</strong>, users acknowledge that their
        plan includes full software access and becomes non-refundable once
        activated.
        <br />
        <br />
        We strongly recommend users to try our demo or contact support before
        purchasing if they are unsure about features or plans.
      </>
    ),
  },
  {
    title: "Refunds in Rare Billing Error Cases",
    description: "Refunds may only be considered in billing-related scenarios.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Kravy</strong> may consider refunds only in specific
        billing-related cases such as:
        <ul className="list-disc ml-5 mt-2">
          <li>Duplicate payment made by mistake</li>
          <li>Technical transaction failure</li>
          <li>Accidental overcharge due to system error</li>
        </ul>
        <br />
        To request a billing review, please contact our support team with
        complete transaction details. Each case will be reviewed individually.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help with a Billing or Refund Concern?",
  description:
    "Our support team can review valid refund queries for Kravy subscriptions.",
  content: (
    <div>
      <p className="mb-4">
        Although we operate under a no-refund policy for SaaS subscriptions, we
        understand rare billing issues may arise. If you believe you are
        eligible for a refund due to a payment error, please contact us at{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kravy.in
        </a>
        .
      </p>
      <p>
        All refund requests are carefully reviewed by our billing team. For
        issues related to access, login, or technical difficulties, you may also
        reach out to{" "}
        <a
          href="mailto:contact@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@kravy.in
        </a>
        .
      </p>
    </div>
  ),
};

const Page = () => {
  return (
    <Template
      title="Refund Policy"
      heading={
        <div>
          Refund Policy <br className="hidden sm:block" />
          for Kravy Subscriptions
        </div>
      }
      description="Understand Kravy’s refund policy for retailer billing software subscriptions. Due to instant digital access, refunds are limited to billing errors only."
      ctaDescription="Kravy follows a strict no-refund policy for digital subscriptions. Exceptions apply only in the case of duplicate payments or verified billing errors."
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
