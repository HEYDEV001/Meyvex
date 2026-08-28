import Link from "next/link";
import FooterSection5 from "@/components/ui/footer-section-5";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";

const ABOUT_CARDS = [
  {
    title: "Thoughtful Design",
    description:
      "Every project starts with understanding the problem deeply before we design a single pixel. We believe great design solves real problems, not just looks good.",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    title: "Small, Focused Team",
    description:
      "We stay lean on purpose. A tight team means clear communication, fast decisions, and work that never gets lost in hand-offs.",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "How We Work",
    description:
      "We work in short, focused cycles — from discovery and strategy through design, build, and launch. You're looped in at every stage, not just the beginning and the end. We favor working software over long decks, and we'd rather show you something real early than talk about it for weeks.",
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Built to Last",
    description:
      "We design and build systems that hold up long after launch, not just for the demo.",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Always Learning",
    description:
      "The tools change fast. We stay current so your product benefits from what's actually working today, not what worked five years ago.",
    className: "lg:col-span-2 lg:row-span-1",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-32 pb-0">
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

        <div className="w-full">
          <RuixenBentoCards
            cards={ABOUT_CARDS}
            title="About Us"
            heading="Built with care. Driven by craft."
            description="Meyvex is a small studio that partners closely with founders and teams to design, build, and grow products people actually want to use. We care about the details as much as the big picture."
          />
        </div>
      </main>

      <FooterSection5 />
    </div>
  );
}
