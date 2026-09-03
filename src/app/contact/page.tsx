import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import FooterSection5 from "@/components/ui/footer-section-5";
import { Component as VintageKeyboard } from "@/components/ui/vintage-keyboard";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-32 pb-0">
        <Link href="/" className="absolute top-6 left-6 z-20 md:top-8 md:left-8">
          <img
            src="/logo.png"
            alt="Meyvex"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Let&apos;s Make It Happen.
        </h1>
        <div className="mx-auto max-w-5xl">
          <ContactCard
            title="Start a Conversation."
            description="Have a growth challenge, a new idea, or a brand ready for its next stage? Tell us what you're building. We'll take it from there."
            contactInfo={[
              {
                icon: MailIcon,
                label: "Email",
                value: "hello@meyvex.com",
              },
              {
                icon: PhoneIcon,
                label: "Phone",
                value: "+91 8819964315",
              },
              {
                icon: MapPinIcon,
                label: "Address",
                value: "306, HQ City Walk, Scheme No.54, Vijay Nagar, Indore, 452010",
                className: "col-span-2",
              },
            ]}
          >
            <ContactForm />
          </ContactCard>
        </div>
      </main>

      <div className="contact-keyboard -mt-10 hidden md:block">
        <VintageKeyboard respondWhileTyping />
      </div>

      <FooterSection5 />
    </div>
  );
}
