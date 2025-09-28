import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Return & Refund Policy | Kravy Retailer Billing Software",
  description:
    "Understand our refund and cancellation policy for Kravy — your all-in-one retailer billing & POS subscription software.",
  keywords: [
    "Kravy",
    "refund policy",
    "cancellation policy",
    "billing software",
    "POS system",
    "subscription",
    "no refund",
    "digital service",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "Digital Delivery & Account Activation",
    description:
      "Access to Kravy billing software is provided digitally and instantly after subscription.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At <strong>Kravy</strong>, all services are 100% digital. We do not ship
        or deliver any physical products.
        <br />
        <br />
        <strong>Instant Access:</strong> Upon successful subscription and
        payment, your account will be activated immediately with access to
        billing, invoicing, analytics, and other POS features.
        <br />
        <br />
        This includes:
        <ul className="list-disc pl-5 mt-2">
          <li>Access to multi-shop & POS management tools</li>
          <li>Customer management, offers & loyalty features</li>
          <li>Analytics dashboard & automated WhatsApp reports</li>
        </ul>
        <br />
        <strong>Confirmation:</strong> You will receive an email confirming your
        subscription and activation details. If you do not receive this within a
        few minutes, please check your spam folder or contact us at{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kravy.in
        </a>
        .
        <br />
        <br />
        <strong>No Physical Shipping:</strong> As a SaaS platform, there are no
        logistics or shipping charges involved.
      </>
    ),
  },
  {
    title: "Strict No Refund Policy on Subscriptions",
    description:
      "All purchases are final. We do not offer returns, refunds, or exchanges once activated.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Due to the digital nature of our SaaS product,{" "}
        <strong>Kravy strictly does not provide refunds</strong> once a
        subscription is activated. Users gain immediate access to premium
        billing and POS features, making refunds impractical and inapplicable.
        <br />
        <br />
        We encourage customers to explore our free demo or contact our support
        team before subscribing.
        <br />
        <br />
        <strong>Note:</strong> Refunds may only be considered in case of
        verifiable billing errors such as duplicate transactions or technical
        failures.
      </>
    ),
  },
  {
    title: "Subscription Cancellation & Access Expiry",
    description:
      "Cancel anytime. Access remains until the end of your billing cycle.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You can cancel your <strong>Kravy</strong> subscription anytime from
        your dashboard. Your account will remain active until the end of the
        billing cycle.
        <br />
        <br />
        After cancellation or expiry:
        <ul className="list-disc pl-5 mt-2">
          <li>Your account will be downgraded to free/limited mode</li>
          <li>Access to premium features will be removed</li>
          <li>
            Your previously generated invoices and reports will remain available
            for record-keeping
          </li>
        </ul>
        <br />
        You can re-subscribe anytime to restore premium features instantly.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help Understanding Our Policy?",
  description:
    "Have questions about refunds, billing errors, or subscription cancellation?",
  content: (
    <div>
      <p className="mb-4">
        For any queries regarding refunds, billing, or cancellations, you can
        reach out to us at{" "}
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
        For urgent billing disputes, please mark your subject line as{" "}
        <strong>“Refund Request”</strong>. Our team is based in India and ready
        to assist during business hours.
      </p>
    </div>
  ),
};

const Page = () => {
  return (
    <Template
      title="Return & Refund Policy"
      heading={
        <div>
          Refund & Cancellation <br className="hidden sm:block" />
          Policy for Kravy Subscriptions
        </div>
      }
      description="Understand our refund and cancellation policy for Kravy — your retailer billing & POS subscription software. Digital-only delivery, no refunds except for billing errors."
      ctaDescription="Kravy is a digital SaaS platform. Once subscribed, you get instant access to premium features. Refunds are not permitted, except in rare billing error cases."
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
