import Link from "next/link";
import FooterSection5 from "@/components/ui/footer-section-5";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";

const ABOUT_CARDS = [
  {
    title: "Thoughtful by Design",
    description:
      "We start with the why. Before we make a creative, launch a campaign or change a funnel, we understand the brand, the customer and the problem we're solving.",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    title: "D2C Is Our Playground",
    description:
      "We understand the game because we play it every day. From the first purchase to the next, we look beyond individual channels to understand what actually moves a D2C business forward.",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "How We Work",
    description:
      "Strategy first. Execution close behind. We move fast, test often and stay close to the work. Every decision has a reason, every test has a takeaway, and every win becomes a learning.",
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Built on Partnership",
    description:
      "We work with brands, not just briefs. The best work happens when we're close to the people building the business. We get involved, stay accountable and treat your growth like it matters to us.",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Our Vision",
    description:
      "Build brands that outgrow the playbook. We want to help build the next generation of Indian D2C brands—brands that don't just compete in their category, but redefine it and take Indian ambition to the world.",
    className: "lg:col-span-2 lg:row-span-1",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-20 pb-0">
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
            heading="Built for brands that want to go further."
            description="Meyvex is a D2C growth ecosystem built for ambitious founders. We bring strategy, creative, performance, technology and retention together to help brands make better decisions, move faster and build something that lasts."
          />
        </div>
      </main>

      <FooterSection5 />
    </div>
  );
}
