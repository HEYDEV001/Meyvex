import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FooterSection5 from "@/components/ui/footer-section-5";
import { Component as VintageKeyboard } from "@/components/ui/vintage-keyboard";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-16 pb-0">
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
            <form action="" className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <Input type="text" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email" placeholder="Your work email" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Phone</Label>
                <Input type="phone" placeholder="Your phone number" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Message</Label>
                <Textarea placeholder="Tell us a little about your brand and what you're looking to build." />
              </div>
              <Button className="w-full" type="button">
                Let&apos;s Talk →
              </Button>
            </form>
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
