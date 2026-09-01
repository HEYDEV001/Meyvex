"use client";

import type { DialogRootActions } from "@base-ui/react/dialog";
import { PlusIcon, X } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/morphing-dialog-utils/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogViewport,
} from "@/components/ui/morphing-dialog-utils/dialog";
import { ScrollArea } from "@/components/ui/morphing-dialog-utils/scroll-area";

export function MorphingDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<(typeof ITEMS)[0] | null>(null);

  const actionsRef = useRef<DialogRootActions>({
    close: () => {},
    unmount: () => {},
  });

  const handleOpen = (item: (typeof ITEMS)[0]) => {
    setActiveItem(item);
    setIsOpen(true);
  };

  const handleClose = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className="w-full">
      <LayoutGroup>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {ITEMS.map((item, index) => (
              <motion.button
                className={`relative group overflow-hidden cursor-pointer bg-muted hover:bg-muted/80 transition-colors w-full h-64 lg:h-80 rounded-2xl focus-visible:outline focus-visible:outline-ring focus-visible:ring-4 focus-visible:ring-ring/10 ${
                  index === 3 ? "md:col-span-2" : "md:col-span-1"
                }`}
                key={item.id}
                layoutId={`card-container-${item.id}`}
                onClick={() => handleOpen(item)}
                style={{
                  opacity: activeItem?.id === item.id && isOpen ? 0 : 1,
                  pointerEvents:
                    activeItem?.id === item.id && isOpen ? "none" : "auto",
                }}
              >
                <motion.div
                  className="absolute inset-0 h-full w-full"
                  layoutId={`image-container-${item.id}`}
                >
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover dark:brightness-20 dark:grayscale-25"
                    height={500}
                    src={item.image}
                    width={500}
                  />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <motion.h3
                    className="text-lg font-semibold text-white"
                    layoutId={`title-${item.id}`}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <PlusIcon className="text-white/80 transition-all group-hover:text-white" />
                </div>
              </motion.button>
            ))}
        </div>
        <Dialog
          actionsRef={actionsRef}
          onOpenChange={handleClose}
          open={isOpen}
        >
          <AnimatePresence mode="popLayout">
            {isOpen && activeItem && (
              <DialogPortal keepMounted>
                <DialogBackdrop />
                <DialogViewport
                  className="grid place-items-center p-4 pt-32"
                  hidden={false}
                >
                  <DialogPopup
                    className="relative w-full max-w-4xl flex flex-col overflow-hidden rounded-2xl border-0 shadow-none"
                    hidden={false}
                    render={
                      <motion.div
                        layoutId={`card-container-${activeItem.id}`}
                        onLayoutAnimationComplete={() => {
                          if (!isOpen) {
                            actionsRef.current?.unmount();
                            setTimeout(() => setActiveItem(null), 50);
                          }
                        }}
                      />
                    }
                  >
                    <ScrollArea className="h-[calc(100vh-4rem)]" noScrollBar>
                      <motion.div
                        animate={{ opacity: 1 }}
                        className="flex flex-col h-full pb-[10vh]"
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{
                          duration: 0.15,
                        }}
                      >
                        <div className="relative h-64 sm:h-96 w-full shrink-0 overflow-hidden">
                          <motion.div
                            className="w-full h-full"
                            layoutId={`image-container-${activeItem.id}`}
                          >
                            <img
                              alt={activeItem.title}
                              className="h-full w-full object-cover dark:brightness-20 dark:grayscale-25"
                              height={500}
                              src={activeItem.image}
                              width={500}
                            />
                          </motion.div>
                        </div>

                        <div className="flex flex-col p-4 sm:p-8 justify-start text-left space-y-6">
                          <DialogTitle
                            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold uppercase"
                            render={
                              <motion.h2 layoutId={`title-${activeItem.id}`}>
                                {activeItem.title}
                              </motion.h2>
                            }
                          />
                          <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2 }}
                          >
                            {activeItem.content}
                          </motion.div>
                        </div>

                        <DialogClose
                          className="absolute right-4 top-4 z-20"
                          render={
                            <Button
                              className="rounded-full shadow-lg"
                              size="icon"
                              variant="secondary"
                            >
                              <X size={16} />
                            </Button>
                          }
                        />
                      </motion.div>
                    </ScrollArea>
                  </DialogPopup>
                </DialogViewport>
              </DialogPortal>
            )}
          </AnimatePresence>
        </Dialog>
      </LayoutGroup>
    </div>
  );
}

type CardItem = {
  id: string;
  title: string;
  image: string;
  content: React.ReactNode;
};

function ServiceHero({
  tagline,
  paragraphs,
  ctaLabel,
  ctaHref,
}: {
  tagline: string;
  paragraphs: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-xl sm:text-2xl font-semibold uppercase text-foreground">
        {tagline}
      </p>
      {paragraphs.map((paragraph, i) => (
        <p className="text-muted-foreground leading-relaxed" key={i}>
          {paragraph}
        </p>
      ))}
      <a
        className="inline-flex items-center gap-1.5 pt-2 font-semibold text-foreground underline-offset-4 hover:underline"
        href={ctaHref}
      >
        {ctaLabel}
      </a>
    </div>
  );
}

function ServiceSection({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-3 border-t border-border pt-8">
      <p className="inline-block w-fit rounded-full bg-[#FEE762] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#232323]">
        {eyebrow}
      </p>
      <h4 className="text-2xl font-bold uppercase text-[#F83F16]">{heading}</h4>
      {children}
    </div>
  );
}

function WhatWeDoGrid({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  const spans = ["sm:col-span-2", "sm:col-span-3", "sm:col-span-3", "sm:col-span-2"];

  return (
    <div className="grid gap-4 sm:grid-cols-5">
      {items.map((item, i) => (
        <div
          className={`space-y-1.5 rounded-3xl bg-[#B4C5F1]/40 p-4 ${spans[i % spans.length]}`}
          key={item.title}
        >
          <p className="font-semibold uppercase text-foreground">{item.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

const ITEMS: CardItem[] = [
  {
    id: "card-1",
    title: "Performance Marketing",
    image:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <ServiceHero
          tagline="Turn Ad Spend Into Real Growth."
          paragraphs={[
            "Performance marketing built for D2C brands that want more than clicks and pretty dashboards.",
            "We combine paid acquisition, creative testing and funnel optimisation to build a growth engine that gets better with every test.",
          ]}
          ctaLabel="Let's Talk Growth →"
          ctaHref="/contact"
        />

        <ServiceSection
          eyebrow="The Problem"
          heading="More Budget Isn't Always the Answer."
        >
          <p className="text-muted-foreground leading-relaxed">
            If CAC keeps rising, creatives stop converting and scaling starts
            hurting margins, the problem isn&apos;t always your ad spend.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We find what&apos;s holding your acquisition back—and fix it.
          </p>
        </ServiceSection>

        <ServiceSection
          eyebrow="What We Do"
          heading="Everything Your Growth Engine Needs."
        >
          <WhatWeDoGrid
            items={[
              {
                title: "Paid Acquisition",
                description:
                  "Meta & Google campaigns built around your business goals and unit economics.",
              },
              {
                title: "Creative Testing",
                description:
                  "Hooks, angles, formats and messaging tested to find what actually converts.",
              },
              {
                title: "Funnel Optimisation",
                description:
                  "From ad click to checkout, we identify and remove conversion leaks.",
              },
              {
                title: "Scale & Optimise",
                description:
                  "We double down on what works and continuously optimise what doesn't.",
              },
            ]}
          />
        </ServiceSection>

        <ServiceSection eyebrow="Our Approach" heading="Test. Learn. Scale. Repeat.">
          <p className="text-muted-foreground leading-relaxed">
            We don&apos;t believe in launching a campaign and letting it run.
          </p>
          <p className="font-semibold text-foreground">
            Research → Test → Learn → Optimise → Scale
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every result gives us a better understanding of your customer—and
            a smarter direction for the next move.
          </p>
        </ServiceSection>

        <ServiceSection
          eyebrow="Why Meyvex"
          heading="Performance Doesn't Exist in Isolation."
        >
          <p className="text-muted-foreground leading-relaxed">
            Your ads are only as strong as the experience behind them.
          </p>
        </ServiceSection>
      </div>
    ),
  },
  {
    id: "card-2",
    title: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <ServiceHero
          tagline="Build a Brand People Remember."
          paragraphs={[
            "Strategic social media built around your audience, your category and your business goals.",
            "We create content systems that strengthen brand presence, build trust and keep your audience engaged.",
          ]}
          ctaLabel="Build My Social Presence →"
          ctaHref="/contact"
        />

        <ServiceSection
          eyebrow="The Problem"
          heading="Your Content Needs a Clear Direction."
        >
          <p className="text-muted-foreground leading-relaxed">
            In a crowded feed, consistency alone won&apos;t create impact.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Strong social presence comes from the right content pillars,
            creative formats, messaging and publishing strategy working
            together.
          </p>
        </ServiceSection>

        <ServiceSection
          eyebrow="What We Do"
          heading="A Social System Built Around Your Brand."
        >
          <WhatWeDoGrid
            items={[
              {
                title: "Content Strategy",
                description:
                  "Content pillars and themes designed around your audience, category and positioning.",
              },
              {
                title: "Creative & Production",
                description:
                  "Reels, carousels, static creatives and campaigns created for your brand's visual language.",
              },
              {
                title: "Community & Engagement",
                description:
                  "Meaningful conversations and interactions that strengthen your relationship with the audience.",
              },
              {
                title: "Growth & Optimisation",
                description:
                  "Continuous analysis of content performance to understand what resonates and refine the strategy.",
              },
            ]}
          />
        </ServiceSection>

        <ServiceSection
          eyebrow="Our Approach"
          heading="Strategy → Create → Analyse → Evolve"
        />
      </div>
    ),
  },
  {
    id: "card-3",
    title: "Product Strategy",
    image:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Research-driven planning that turns a rough idea into a clear,
          prioritized roadmap — so every design and engineering decision has a
          reason behind it.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Discovery:</strong>{" "}
            User research and competitive analysis to ground decisions in
            reality, not guesswork.
          </li>
          <li>
            <strong className="text-foreground">Roadmapping:</strong>{" "}
            A prioritized plan that balances user needs, business goals, and
            technical constraints.
          </li>
          <li>
            <strong className="text-foreground">Validation:</strong>{" "}
            Fast prototyping and testing loops before committing to full
            builds.
          </li>
        </ul>
        <div className="pt-8">
          <h4 className="text-foreground font-semibold mb-4 text-lg">
            How we plan
          </h4>
          <div className="flex flex-col gap-4">
            <div className="h-32 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
              Discovery
            </div>
            <div className="h-10 text-center text-muted-foreground text-sm">
              ↓ leads to ↓
            </div>
            <div className="h-32 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
              Roadmap
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "card-4",
    title: "Motion & Animation",
    image:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Subtle, purposeful motion that brings interfaces and stories to life
          — used to guide attention, not distract from it.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Micro-interactions:</strong>{" "}
            Small animated details that make an interface feel considered and
            alive.
          </li>
          <li>
            <strong className="text-foreground">Scroll &amp; Page Motion:</strong>{" "}
            Transitions that guide a visitor through a story, not just
            decorate a page.
          </li>
          <li>
            <strong className="text-foreground">Brand Animation:</strong>{" "}
            Motion identity for launch videos, social content, and product
            demos.
          </li>
        </ul>
        <div className="pt-8">
          <h4 className="text-foreground font-semibold mb-4 text-lg">
            Where motion shows up
          </h4>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="bg-muted/50 rounded-lg p-4 space-y-2" key={i}>
                <div className="h-4 w-1/3 bg-muted rounded" />
                <div className="h-20 w-full bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "card-5",
    title: "Growth & Marketing",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Data-informed campaigns designed to turn visibility into real
          traction — planned and measured, not just launched and hoped for.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Campaign Planning:</strong>{" "}
            Channels and messaging matched to where your audience actually
            spends time.
          </li>
          <li>
            <strong className="text-foreground">Analytics &amp; Experiments:</strong>{" "}
            Ongoing testing so spend shifts toward what&apos;s actually working.
          </li>
          <li>
            <strong className="text-foreground">Reporting:</strong>{" "}
            Clear, regular visibility into what&apos;s driving growth and what
            isn&apos;t.
          </li>
        </ul>
        <div className="pt-8">
          <h4 className="text-foreground font-semibold mb-4 text-lg">
            What we track
          </h4>
          <div className="grid gap-4">
            <div className="aspect-video bg-muted rounded-lg w-full flex items-center justify-center text-muted-foreground">
              Growth Funnel
            </div>
            <div className="aspect-video bg-muted rounded-lg w-full flex items-center justify-center text-muted-foreground">
              Campaign Performance
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default MorphingDialog;
