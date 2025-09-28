
import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Service & Subscription Policy | Kravy - Retailer Billing Software",
  description:
    "Learn about Kravy’s subscription, service, and cancellation policies. Our billing software is digital-only with instant access after activation.",
  keywords: [
    "Kravy",
    "Retailer Billing Software",
    "POS",
    "Subscription Policy",
    "Refund Policy",
    "Digital Access",
  ],
};

const cardData = [
  {
    title: "Digital Service & Access Policy",
    description:
      "Get instant access to Kravy’s retailer billing software after subscription.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At <strong>Kravy</strong>, our solutions are 100% digital. We do not
        provide any physical shipment, CDs, or installation kits.
        <br />
        <br />
        <strong>Instant Digital Access:</strong> Upon successful subscription
        and payment, you’ll receive your account credentials and software access
        within <strong>24 hours</strong> — usually much sooner.
        <br />
        <br />
        This includes:
        <ul className="list-disc pl-5 mt-2">
          <li>Access to Kravy’s web dashboard and POS features</li>
          <li>Multi-shop and multi-device login support</li>
          <li>Automated reports, analytics, and customer management tools</li>
        </ul>
        <br />
        <strong>Access Confirmation:</strong> You will receive an email/WhatsApp
        confirmation after activation. If you don’t receive details within 24
        hours, please check your spam folder or contact us at{" "}
        <a
          href="mailto:support@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kravy.in
        </a>
        .
        <br />
        <br />
        <strong>No Physical Shipping:</strong> As a SaaS platform, no physical
        shipping or logistics are involved.
      </>
    ),
  },
  {
    title: "Refund & Cancellation Policy",
    description:
      "All subscription payments are final. No refunds after activation.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Due to the digital nature of our service, <strong>Kravy</strong> does
        not provide refunds once a subscription is activated. Subscribers get
        instant access to our complete billing software, making refunds
        impractical.
        <br />
        <br />
        We encourage users to try our free demo and review features before
        purchasing. All payments are final and non-refundable.
      </>
    ),
  },
  {
    title: "Subscription Management & Expiry",
    description:
      "Cancel anytime. Access ends automatically when your subscription expires.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You can cancel your <strong>Kravy</strong> subscription anytime from
        your dashboard. Your access will remain active until the end of your
        billing cycle.
        <br />
        <br />
        After expiry, you will no longer be able to access the dashboard,
        invoices, or reports. However, you can export your data before
        cancellation. You can re-subscribe anytime to regain access.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help With Your Subscription?",
  description: "Have questions about refunds, billing, or activation?",
  content: (
    <div>
      <p className="mb-4">
        For any queries regarding subscription, billing, or cancellations, reach
        us at{" "}
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
        For urgent issues, you can also connect via WhatsApp support on our
        official number. We’re based in India and ready to help retailers
        succeed.
      </p>
    </div>
  ),
};

const Page = () => {
  return (
    <Template
      title="Service & Subscription Policy"
      heading={
        <div>
          Service & Subscription <br className="hidden sm:block" /> Policy
        </div>
      }
      description="Understand Kravy’s subscription, refund, and cancellation policies for using our retailer billing software."
      ctaDescription="Kravy is a digital-only SaaS platform. Once subscribed, you get instant access to billing, invoicing, and customer management features."
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
