import FluidFlowGrid from "@/components/ui/fluid-flow-grid";
import MobileNavHeader from "@/components/ui/mobile-nav-header";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import SocialCards from "@/components/ui/card-fan-carousel";
import HowItWorks from "@/components/ui/how-it-works";
import { AnimatedTeamSection } from "@/components/ui/team-section";
import FooterSection5 from "@/components/ui/footer-section-5";
import { CircularGallery } from "@/components/ui/circular-gallery-2";

const resultItems = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    text: "2.5x User Growth",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    text: "40% Faster Launch",
  },
  {
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop",
    text: "3x Revenue Increase",
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    text: "98% Client Retention",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    text: "60% Cost Reduction",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    text: "12+ Awards Won",
  },
];

const teamMembers = [
  {
    name: "Johnathan Doe",
    role: "Founder & CEO",
    bio: "Sets the studio's direction and leads client partnerships from first pitch to final launch.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    bio: "Shapes the visual language behind every brand we touch, from concept to final polish.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Peter Jones",
    role: "Lead Developer",
    bio: "Turns designs into fast, reliable products, with a soft spot for clean, maintainable code.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Product Designer",
    bio: "Designs interfaces that feel obvious in hindsight, grounded in real user research.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Brown",
    role: "Marketing Lead",
    bio: "Plans the campaigns that get our clients' work seen by the right people, at the right time.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Emily Davis",
    role: "Brand Strategist",
    bio: "Digs into positioning and story so every brand we build stands for something clear.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "David Garcia",
    role: "Growth Engineer",
    bio: "Builds the analytics and experiments that turn traffic into measurable growth.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
];

const reelCards = [
  { imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=700&fit=crop", alt: "Mountain landscape" },
  { imgUrl: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=400&h=700&fit=crop", alt: "City night" },
  { imgUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=700&fit=crop", alt: "Foggy forest" },
  { imgUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=700&fit=crop", alt: "Sunlit woods" },
  { imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=700&fit=crop", alt: "Tropical beach" },
  { imgUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=700&fit=crop", alt: "Starry mountain" },
  { imgUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=400&h=700&fit=crop", alt: "Golden sunset" },
  { imgUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=700&fit=crop", alt: "Lake reflection" },
  { imgUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=700&fit=crop", alt: "Green valley" },
  { imgUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=700&fit=crop", alt: "Sunbeam nature" },
];

const CDN = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev";

const streamImages = [
  {
    src: `${CDN}/stock-images/767d99bb371a54d0d36751e8cecae43c.jpg`,
    alt: "Diver silhouetted inside a sunset seascape shaped like a profile",
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-01.png`,
    alt: "Soft multi-tone gradient wash",
  },
  {
    src: `${CDN}/stock-images/821d815affa6496c39cbdeeec7a84603.jpg`,
    alt: "Double-exposure portrait blended with a city skyline at dusk",
  },
  {
    src: `${CDN}/gradients/crimson_aura/crimson-aura-02.png`,
    alt: "Crimson aura gradient",
  },
  {
    src: `${CDN}/stock-images/937438c560ada1c83317f2c11b3454b0.jpg`,
    alt: "Motion-blurred side-profile portrait against a deep orange backdrop",
  },
  {
    src: `${CDN}/gradients/hue-flow/hue-flow-01.png`,
    alt: "Flowing hue gradient",
  },
  {
    src: `${CDN}/stock-images/98f89cb9994f5c382ab964062c4039db.jpg`,
    alt: "Figure holding a racket that dissolves into a swirling colourful cloud",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-03.png`,
    alt: "Moon-toned gradient",
  },
  {
    src: `${CDN}/stock-images/ddcbee38be8b7274e19e132d7ab35b53.jpg`,
    alt: "Hand gesture with a colourful cutout of a bird flying through the fingers",
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-03.png`,
    alt: "Layered hero gradient",
  },
  {
    src: `${CDN}/gradients/hue-flow/hue-flow-02.png`,
    alt: "Second flowing hue gradient",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-05.png`,
    alt: "Deep moon-toned gradient",
  },
];

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

const ServiceOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Performance Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      ROI-driven paid campaigns across search and social, built to turn ad
      spend into measurable growth.
    </p>
  </div>
);
const ServiceTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Social Media Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Consistent, on-brand content and community management that grows your
      audience across platforms.
    </p>
  </div>
);
const ServiceThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Content Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Strategic content that builds authority and keeps your audience
      engaged at every stage.
    </p>
  </div>
);
const ServiceFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Shopify Development</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Fast, conversion-focused Shopify storefronts built and customized for
      your brand.
    </p>
  </div>
);
const ServiceFive = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Retention Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Lifecycle campaigns that keep customers coming back and grow their
      lifetime value.
    </p>
  </div>
);

const services = [
  {
    id: 1,
    content: <ServiceOne />,
    className: "row-span-2 md:row-span-1 md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <ServiceTwo />,
    className: "md:col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <ServiceThree />,
    className: "md:col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <ServiceFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <ServiceFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <MobileNavHeader />
      <FluidFlowGrid />

      <section className="relative mx-auto w-full max-w-3xl px-4 pt-20 pb-6 md:pb-16">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>

      <div className="flex h-dvh flex-col pt-16 md:block md:h-auto md:pt-0">
        <section className="w-full shrink-0 px-4 pt-3 pb-2 text-center font-sans md:pt-16 md:pb-6">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
            From Idea to Scale
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-xs text-muted-foreground md:mt-4 md:text-lg">
            Strategy, creativity, and performance all working towards growth.
          </p>
        </section>

        <section className="min-h-0 flex-1 w-full pb-2 md:h-screen md:pt-2 md:pb-20">
          <LayoutGrid cards={services} />
        </section>
      </div>

      <section className="w-full px-4 pt-20 pb-8 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Results That Speak
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Real outcomes from real partnerships, drag to explore.
          </p>
        </div>
        <div className="relative mt-12 h-50 w-full lg:h-145">
          <CircularGallery items={resultItems} bend={3} borderRadius={0.05} scrollEase={0.02} />
        </div>
      </section>

      <section className="w-full pt-8 pb-20 lg:pt-20">
        <ImageStreamHero
          images={streamImages}
          className="h-[560px] w-full bg-background"
        >
          <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
            <div className="px-6">
              <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                Your work,
                <br />
                front and centre.
              </h1>
            </div>
            <p className="max-w-md text-balance px-6 text-sm text-muted-foreground">
              A hero that leads with the images instead of describing them.
              Swap in your own and the corridor rebuilds around them.
            </p>
          </div>
        </ImageStreamHero>
      </section>

      <SocialCards cards={reelCards} />

      <section className="w-full px-4 pt-24 text-center font-sans">
        <h2 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          How It Works ?
        </h2>
      </section>

      <HowItWorks className="mt-8" />

      <AnimatedTeamSection
        title="Our commitment to integrity and innovation"
        description="At TopOpti, we believe in forging strong partnerships build on integrity and honesty. Our mission is to drive innovation and ensure our clients success through dedicated service and creative solutions."
        members={teamMembers}
      />

      <FooterSection5 />
    </div>
  );
}
