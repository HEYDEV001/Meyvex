import FluidFlowGrid from "@/components/ui/fluid-flow-grid";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import SocialCards from "@/components/ui/card-fan-carousel";
import HowItWorks from "@/components/ui/how-it-works";

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
    <p className="font-bold md:text-4xl text-xl text-white">Brand Identity</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Distinctive visual systems — logo, color, and typography — built to
      make a brand instantly recognizable.
    </p>
  </div>
);
const ServiceTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Web Design & Development</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Fast, responsive websites crafted with modern tooling and an eye for
      detail.
    </p>
  </div>
);
const ServiceThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Product Strategy</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Research-driven planning that turns rough ideas into a clear product
      roadmap.
    </p>
  </div>
);
const ServiceFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Motion & Animation</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Subtle, purposeful motion that brings interfaces and stories to life.
    </p>
  </div>
);
const ServiceFive = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Growth & Marketing</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Data-informed campaigns designed to turn visibility into real
      traction.
    </p>
  </div>
);

const services = [
  {
    id: 1,
    content: <ServiceOne />,
    className: "md:col-span-2",
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
      <FluidFlowGrid />

      <section className="relative mx-auto w-full max-w-3xl px-4 pt-20 pb-16">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>

      <section className="w-full px-4 pt-16 pb-6 text-center font-sans">
        <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          From Idea to Scale
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Strategy, creativity, and performance all working towards growth.
        </p>
      </section>

      <section className="h-screen pt-2 pb-20 w-full">
        <LayoutGrid cards={services} />
      </section>

      <section className="w-full py-20">
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

      <HowItWorks />
    </div>
  );
}
