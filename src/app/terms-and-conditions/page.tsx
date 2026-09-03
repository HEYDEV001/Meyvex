import Link from "next/link";
import { Changelog1, type ChangelogEntry } from "@/components/ui/changelog-1";
import FooterSection5 from "@/components/ui/footer-section-5";

const TERMS_ENTRIES: ChangelogEntry[] = [
  {
    version: "Section 1",
    title: "The Unified D2C Ecosystem (Services)",
    description:
      "Meyvex provides an integrated suite of growth services designed for D2C brands. The scope of work includes:",
    items: [
      "Performance Marketing: Scalable paid acquisition strategies on Meta and Google.",
      "Shopify Development: End-to-end storefront design, development, and CRO.",
      "Retention Marketing: Lifecycle automation via WhatsApp, Email, and SMS.",
      "Content Marketing: Strategic brand storytelling and high-performance creative production.",
      "Social Media Marketing: Organic community management and brand positioning.",
      "Specific deliverables and timelines will be defined in a signed Statement of Work (SOW) or Service Agreement.",
    ],
  },
  {
    version: "Section 2",
    title: "Client Obligations & Access",
    description:
      "To ensure the performance of the ecosystem, the Client agrees to:",
    items: [
      "Provide timely access to Shopify backends, Meta Business Manager, Google Ads accounts, and other necessary third-party tools.",
      "Furnish brand assets, high-resolution media, and product information required for execution.",
      "Approve creative assets and strategy pivots within [Insert Number, e.g., 48] hours to maintain growth momentum.",
    ],
  },
  {
    version: "Section 3",
    title: "Financial Terms & GST",
    items: [
      "Service Fees: Monthly retainers are billed in advance. Project-based services (e.g., Shopify Dev) require a 50% upfront deposit.",
      "Advertising Spend: The Client is responsible for paying advertising platforms (Meta, Google, etc.) directly. Meyvex fees are strictly for management and strategy.",
      "GST: As per Indian law, Goods and Services Tax (GST) at the prevailing rate (currently 18%) will be applicable to all service invoices.",
      "Late Payments: Invoices unpaid for more than 7 days may result in a pause of all active campaigns and services.",
    ],
  },
  {
    version: "Section 4",
    title: "Intellectual Property Rights",
    items: [
      "Client Property: All trademarks, logos, and pre-existing content provided by the Client remain their exclusive property.",
      "Work Product: Upon full payment of all outstanding invoices, Meyvex transfers the ownership of final ad creatives, custom Shopify code, and copy developed specifically for the Client.",
      "Proprietary Frameworks: Meyvex retains all rights to its internal data-modeling techniques, strategy frameworks, and proprietary growth processes used during the service.",
    ],
  },
  {
    version: "Section 5",
    title: "Third-Party Platform Disclaimer",
    description:
      "Meyvex operates within the infrastructure of third-party platforms (Shopify, Meta, Google). We are not liable for:",
    items: [
      "Unexpected downtime or technical bugs on Shopify.",
      "Ad account suspensions or policy changes initiated by Meta or Google.",
      "Fluctuations in performance caused by third-party algorithm updates.",
    ],
  },
  {
    version: "Section 6",
    title: "Performance & Growth Guarantee",
    description:
      "While Meyvex is committed to engineering high-velocity growth, marketing performance is influenced by external factors including market volatility, competition, and product-market fit. We do not offer a 100% guarantee of specific revenue figures or ROAS. Past performance in our portfolio is not a guarantee of future results for new brands.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-20 pb-20">
        <Link href="/" className="absolute top-6 left-6 z-20 md:top-8 md:left-8">
          <img src="/logo.png" alt="Meyvex" className="h-9 w-auto md:h-11" />
        </Link>

        <Link
          href="/contact"
          className="absolute top-6 right-6 z-20 rounded-full bg-[#FFE862] px-5 py-2 text-sm font-medium uppercase tracking-tight text-[#242424] transition-transform hover:scale-105 md:top-8 md:right-8"
          style={{ letterSpacing: "-0.02em" }}
        >
          Contact
        </Link>

        <Changelog1
          title="Terms & Conditions"
          description={
            'Last Updated: [Insert Date], 2025. Welcome to Meyvex. These Terms and Conditions ("Terms") govern your access to and use of the website and services provided by [Full Legal Name of your Pvt Ltd Company] ("Meyvex," "the Agency," "we," "us," or "our"), a company incorporated under the Companies Act, 2013, with CIN: [Insert Your CIN Number]. By accessing our website or engaging our services, you (the "Client") agree to be legally bound by these Terms.'
          }
          entries={TERMS_ENTRIES}
          entryTitleClassName="text-xl md:text-3xl"
          className="space-y-10 md:space-y-14"
        />
      </main>

      <FooterSection5 />
    </div>
  );
}
