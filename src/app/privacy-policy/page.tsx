import Link from "next/link";
import { Changelog1, type ChangelogEntry } from "@/components/ui/changelog-1";
import FooterSection5 from "@/components/ui/footer-section-5";

const PRIVACY_ENTRIES: ChangelogEntry[] = [
  {
    version: "Section 1",
    title: "Information We Collect",
    description:
      "We collect information you provide directly to us, as well as information gathered automatically when you use our services.",
    items: [
      "Contact details such as your name, email address, and phone number",
      "Usage data including pages visited and actions taken on our site",
      "Device and browser information collected automatically",
    ],
  },
  {
    version: "Section 2",
    title: "How We Use Your Information",
    description:
      "We use the information we collect to provide, maintain, and improve our services, and to communicate with you.",
    items: [
      "To respond to your inquiries and provide customer support",
      "To personalize and improve your experience with our services",
      "To send updates, marketing communications, and important notices",
    ],
  },
  {
    version: "Section 3",
    title: "Data Security",
    description:
      "We implement reasonable technical and organizational measures designed to protect your information from unauthorized access, alteration, or disclosure.",
    items: [
      "Access to personal data is restricted to authorized personnel only",
      "No method of transmission or storage is guaranteed to be 100% secure",
    ],
  },
  {
    version: "Section 4",
    title: "Your Rights",
    description:
      "You have the right to access, correct, or request deletion of your personal information, subject to applicable law.",
    items: [
      "You may request a copy of the personal data we hold about you",
      "You may ask us to correct or delete inaccurate information",
      "You may opt out of marketing communications at any time",
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
          description="Learn how we collect, use, and protect your personal information."
          entries={PRIVACY_ENTRIES}
        />
      </main>

      <FooterSection5 />
    </div>
  );
}
