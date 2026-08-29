import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ChangelogEntry = {
  version: string;
  title: string;
  description: string;
  items?: string[];
  button?: {
    url: string;
    text: string;
  };
};

export interface Changelog1Props {
  title?: string;
  description?: string;
  entries?: ChangelogEntry[];
  className?: string;
}

export const defaultEntries: ChangelogEntry[] = [
  {
    version: "Section 1",
    title: "Acceptance of Terms",
    description:
      "By accessing or using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our services.",
    items: [
      "These terms apply to all visitors, users, and others who access our services",
      "Continued use of the service constitutes acceptance of any updates to these terms",
      "You must be of legal age to enter into a binding agreement to use our services",
    ],
  },
  {
    version: "Section 2",
    title: "User Responsibilities",
    description:
      "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
    items: [
      "Provide accurate and complete information when using our services",
      "Do not use our services for any unlawful or unauthorized purpose",
      "Notify us immediately of any unauthorized use of your account",
      "You are solely responsible for the content you submit through our services",
    ],
  },
  {
    version: "Section 3",
    title: "Limitation of Liability",
    description:
      "Our services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied.",
    items: [
      "We are not liable for any indirect, incidental, or consequential damages",
      "We do not guarantee uninterrupted or error-free operation of our services",
      "Your use of our services is at your own risk",
    ],
  },
  {
    version: "Section 4",
    title: "Governing Law",
    description:
      "These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms will be resolved in the appropriate courts of jurisdiction.",
  },
];

export const Changelog1 = ({
  title = "Changelog",
  description = "Get the latest updates and improvements to our platform.",
  entries = defaultEntries,
}: Changelog1Props) => {
  return (
    <section className="pt-12 pb-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:gap-16"
            >
              <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                <Badge
                  variant="secondary"
                  className="border-transparent bg-[#F83F16] text-xs text-white hover:bg-[#F83F16]/90"
                >
                  {entry.version}
                </Badge>
              </div>
              <div className="flex flex-col">
                <h2 className="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">
                  {entry.description}
                </p>
                {entry.items && entry.items.length > 0 && (
                  <ul className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.button && (
                  <Button
                    variant="link"
                    className="mt-4 self-end"
                    render={
                      <a href={entry.button.url} target="_blank" rel="noopener noreferrer" />
                    }
                  >
                    {entry.button.text} <ArrowUpRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
