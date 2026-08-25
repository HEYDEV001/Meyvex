import FluidFlowGrid from "@/components/ui/fluid-flow-grid";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { LayoutGrid } from "@/components/ui/layout-grid";

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
    </div>
  );
}
