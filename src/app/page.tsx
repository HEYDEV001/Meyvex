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
    image: "/result-1.jpg",
    text: "2.5x User Growth",
  },
  {
    image: "/result-2.jpg",
    text: "40% Faster Launch",
  },
  {
    image: "/result-3.jpg",
    text: "3x Revenue Increase",
  },
  {
    image: "/result-4.jpg",
    text: "98% Client Retention",
  },
  {
    image: "/result-1.jpg",
    text: "60% Cost Reduction",
  },
  {
    image: "/result-2.jpg",
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

const streamImages = [
  {
    src: "/portfolio-raksha-bandhan.jpg",
    alt: "Meyvex Raksha Bandhan festival creative",
  },
  {
    src: "/portfolio-urjax-key-nutrients.jpg",
    alt: "Urja-X key nutrients infographic creative",
  },
  {
    src: "/portfolio-urjax-chill-summers.jpg",
    alt: "Urja-X chill summers campaign creative",
  },
  {
    src: "/portfolio-urjax-lose-weight.jpg",
    alt: "Urja-X weight loss product creative",
  },
  {
    src: "/portfolio-urjax-good-choices.jpg",
    alt: "Urja-X good choices product creative",
  },
  {
    src: "/portfolio-raksha-bandhan.jpg",
    alt: "Meyvex Raksha Bandhan festival creative",
  },
  {
    src: "/portfolio-urjax-key-nutrients.jpg",
    alt: "Urja-X key nutrients infographic creative",
  },
  {
    src: "/portfolio-urjax-chill-summers.jpg",
    alt: "Urja-X chill summers campaign creative",
  },
  {
    src: "/portfolio-urjax-lose-weight.jpg",
    alt: "Urja-X weight loss product creative",
  },
  {
    src: "/portfolio-urjax-good-choices.jpg",
    alt: "Urja-X good choices product creative",
  },
  {
    src: "/portfolio-raksha-bandhan.jpg",
    alt: "Meyvex Raksha Bandhan festival creative",
  },
  {
    src: "/portfolio-urjax-key-nutrients.jpg",
    alt: "Urja-X key nutrients infographic creative",
  },
  {
    src: "/portfolio-urjax-chill-summers.jpg",
    alt: "Urja-X chill summers campaign creative",
  },
];

const logos = [
  {
    src: "/client-tact-lifestyle.png",
    alt: "tACT Lifestyle Logo",
    width: 195,
    height: 89,
  },
  {
    src: "/client-urja-x.png",
    alt: "Urja-X Logo",
    width: 150,
    height: 58,
  },
  {
    src: "/client-sun-breeze.png",
    alt: "Sun Breeze Logo",
    width: 300,
    height: 227,
  },
  {
    src: "/client-havit-greens.jpg",
    alt: "Havit Greens Logo",
    width: 1287,
    height: 534,
  },
  {
    src: "/client-voyage-academy.png",
    alt: "Voyage Academy Logo",
    width: 757,
    height: 329,
  },
];

const ServiceOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Performance Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      High-velocity paid acquisition across Meta and Google. We don&rsquo;t
      just &quot;run ads&quot;—we engineer data-backed growth engines that
      optimize for maximum ROAS and aggressive revenue scaling for your D2C
      brand.
    </p>
  </div>
);
const ServiceTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Social Media Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Dominating the social landscape. We build organic communities and
      massive social proof that turn your brand into a category leader,
      creating a long-term competitive moat for your D2C business.
    </p>
  </div>
);
const ServiceThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Content Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      High-impact creative strategy designed to convert. We create brand
      narratives and high-performance visual assets that build immediate
      trust, lower your CAC, and elevate your brand above the competition.
    </p>
  </div>
);
const ServiceFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Shopify Development</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      High-conversion digital storefronts built for scale. We develop
      lightning-fast Shopify experiences engineered to turn traffic into
      profit through seamless UX and data-backed conversion rate
      optimization (CRO).
    </p>
  </div>
);
const ServiceFive = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Retention Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The profitability engine of your ecosystem. We deploy advanced
      WhatsApp and Email automation to maximize Customer Lifetime Value
      (LTV), turning every single acquisition into a recurring revenue
      stream.
    </p>
  </div>
);

const services = [
  {
    id: 1,
    content: <ServiceOne />,
    className: "row-span-2 md:row-span-1 md:col-span-2",
    thumbnail: "/service-performance-marketing.jpg",
  },
  {
    id: 2,
    content: <ServiceTwo />,
    className: "md:col-span-1",
    thumbnail: "/service-social-media-marketing.jpg",
  },
  {
    id: 3,
    content: <ServiceThree />,
    className: "md:col-span-1",
    thumbnail: "/service-content-marketing.jpg",
  },
  {
    id: 4,
    content: <ServiceFour />,
    className: "md:col-span-1",
    thumbnail: "/service-shopify-development.jpg",
  },
  {
    id: 5,
    content: <ServiceFive />,
    className: "md:col-span-1",
    thumbnail: "/service-retention-marketing.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <MobileNavHeader />
      <FluidFlowGrid />

      <section className="relative mx-auto w-full max-w-3xl px-4 pt-20 pb-6 md:pb-16">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">The Ecosystem of Choice</span>
          <br />
          <span className="font-semibold">Powering the Top Brands</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>

      <div className="flex h-dvh flex-col pt-16 md:block md:h-auto md:pt-0">
        <section className="w-full shrink-0 px-4 pt-3 pb-2 text-center font-sans md:pt-16 md:pb-6">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
            The D2C Blueprint
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-xs text-muted-foreground md:mt-4 md:text-lg">
            A specialized growth framework for Indian D2C founders ready to
            own their market and scale globally.
          </p>
        </section>

        <section className="min-h-0 flex-1 w-full pb-2 md:h-screen md:pt-2 md:pb-20">
          <LayoutGrid cards={services} />
        </section>
      </div>

      <section className="w-full px-4 pt-20 pb-8 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            UNFILTERED SCALE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Real-time growth metrics from the D2C brands we&rsquo;ve scaled.
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
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                PERFORMANCE CREATIVE
              </h1>
            </div>
            <p className="max-w-md text-balance px-6 text-sm text-muted-foreground">
              Scroll-stopping visuals and viral-ready reels engineered to
              lower your CAC and scale your brand profitably.
            </p>
          </div>
        </ImageStreamHero>
      </section>

      <SocialCards cards={reelCards} />

      <section className="w-full px-4 pt-24 text-center font-sans">
        <h2 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          THE GROWTH ROADMAP
        </h2>
      </section>

      <HowItWorks className="mt-8" />

      <AnimatedTeamSection
        title="THE ARCHITECTS OF SCALE"
        description="At Meyvex, we are a unified collective of D2C specialists, creators, and growth engineers. We don't just manage brands, we embed ourselves into your mission to turn your vision into India's next category leader."
        members={teamMembers}
      />

      <FooterSection5 />
    </div>
  );
}
