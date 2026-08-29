import Link from "next/link";
import { Changelog1 } from "@/components/ui/changelog-1";
import FooterSection5 from "@/components/ui/footer-section-5";

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
          description="Please read these terms and conditions carefully before using our services."
        />
      </main>

      <FooterSection5 />
    </div>
  );
}
