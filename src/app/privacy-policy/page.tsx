import Link from "next/link";
import { Changelog1, type ChangelogEntry } from "@/components/ui/changelog-1";
import FooterSection5 from "@/components/ui/footer-section-5";

const PRIVACY_ENTRIES: ChangelogEntry[] = [
  {
    version: "Section 1",
    title: "Information We Collect",
    description:
      "We collect information in two ways: (A) Directly from you when you inquire about our services, and (B) Indirectly through cookies and tracking technologies.",
    items: [
      "Contact Information: Name, email address, phone number, and LinkedIn profile.",
      "Business Details: Brand name, website URL, monthly revenue, and advertising budget.",
      "Technical Data: IP address, browser type, and usage patterns on our website.",
    ],
  },
  {
    version: "Section 2",
    title: "Data We Process for Clients",
    description:
      "As a D2C Ecosystem provider, we act as a Data Processor for our clients. In providing Retention Marketing and Performance Marketing services, we may process:",
    items: [
      "Customer lists (Emails/Phone numbers) for WhatsApp, SMS, and Email automation.",
      "Conversion data via Meta Pixel and Google Tag Manager.",
      "Shopify store data to analyze and improve ROAS and LTV.",
      "Meyvex does not own this data; we process it strictly under the instructions of our D2C clients.",
    ],
  },
  {
    version: "Section 3",
    title: "How We Use Your Information",
    description: "We use the collected data to:",
    items: [
      "Deliver and optimize our growth services.",
      "Personalize your experience on our storefront.",
      "Send project updates, invoices, and marketing communications.",
      'Analyze website traffic to improve our "Unified" user experience.',
    ],
  },
  {
    version: "Section 4",
    title: "Data Sharing & Third Parties",
    description:
      "Meyvex does not sell or rent your data. We only share information with trusted third-party platforms essential for D2C growth:",
    items: [
      "Advertising Platforms: Meta (Facebook/Instagram), Google, and TikTok.",
      "E-commerce Infrastructure: Shopify.",
      "Retention Tools: WhatsApp Business API providers (e.g., Interakt, Wati), Klaviyo, and Omnisend.",
      "Legal Compliance: When required by Indian law or in response to legal proceedings.",
    ],
  },
  {
    version: "Section 5",
    title: "Cookies and Tracking",
    description:
      "We use cookies to understand how you interact with the Meyvex ecosystem. You can manage your cookie preferences through your browser settings, though this may affect the functionality of certain sections of our site.",
  },
  {
    version: "Section 6",
    title: "Data Security",
    description:
      "We implement industry-standard security measures, including encryption and secure servers, to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.",
  },
  {
    version: "Section 7",
    title: "Data Retention",
    description:
      "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by Indian financial and corporate laws.",
  },
  {
    version: "Section 8",
    title: "Your Rights (DPDP Act Compliance)",
    description: "Under Indian data protection laws, you have the right to:",
    items: [
      "Request access to the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      'Request the erasure of your data (the "Right to be Forgotten").',
      "Withdraw consent for marketing communications at any time.",
    ],
  },
  {
    version: "Section 9",
    title: "Grievance Officer",
    description:
      "To address any questions, concerns, or grievances regarding your privacy, you may contact our designated Grievance Officer as per the Information Technology Act:",
    items: [
      "Attn: Abhishek Kumar",
      "Designation: Founder & CEO",
      "Address: 306, HQ CityWalk, Scheme no 54, Vijay Nagar, Indore - 452010 (Madhya Pradesh)",
      "Email: hello@meyvex.com",
    ],
  },
  {
    version: "Section 10",
    title: "Updates to this Policy",
    description:
      'Meyvex reserves the right to update this Privacy Policy at any time. Changes will be reflected with a new "Effective Date" at the top of this page. We encourage you to review this policy periodically.',
  },
  {
    version: "Section 11",
    title: "Corporate Identity",
    items: [
      "Entity Name: MEYVEX MEDIA PRIVATE LIMITED",
      "CIN: U73100MP2026PTC085270",
      "Registered in: 306, HQ CityWalk, Scheme no 54, Vijay Nagar, Indore - 452010 (Madhya Pradesh)",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
          title="Privacy Policy"
          description={
            'Effective Date: 03th Sep, 2025. Meyvex Media Pvt. Ltd. ("Meyvex," "we," "us," or "our") is committed to protecting the privacy and security of your data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or engage with our D2C growth services. In compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023, this policy outlines our data practices.'
          }
          entries={PRIVACY_ENTRIES}
          className="space-y-10 md:space-y-14"
          entryTitleClassName="text-xl md:text-3xl"
        />
      </main>

      <FooterSection5 />
    </div>
  );
}
