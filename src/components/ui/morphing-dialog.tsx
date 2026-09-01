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
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {ITEMS.map((item, index) => (
              <motion.button
                className={`relative group overflow-hidden cursor-pointer bg-muted hover:bg-muted/80 transition-colors w-full h-64 lg:h-80 rounded-2xl focus-visible:outline focus-visible:outline-ring focus-visible:ring-4 focus-visible:ring-ring/10 ${
                  index === 0 ? "col-span-2 md:col-span-1" : ""
                } ${index === 3 ? "md:col-span-2" : "md:col-span-1"}`}
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
      <h4 className="text-2xl font-bold uppercase text-black">{heading}</h4>
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
    title: "Content Marketing",
    image:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <ServiceHero
          tagline="Content People Believe."
          paragraphs={[
            "UGC-led content built to make your product feel relevant, relatable and worth trying.",
            "From creator selection to concepts, scripts and final edits, we produce content designed for the way people actually discover and evaluate D2C brands.",
          ]}
          ctaLabel="Create With Meyvex →"
          ctaHref="/contact"
        />

        <ServiceSection
          eyebrow="The Problem"
          heading="Your Product Needs More Than a Good Video."
        >
          <p className="text-muted-foreground leading-relaxed">
            People trust people.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The right creator, the right hook and the right story can make a
            product feel instantly familiar—and give customers a reason to
            care.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We build UGC around those moments.
          </p>
        </ServiceSection>

        <ServiceSection eyebrow="What We Do" heading="UGC, Built for Performance.">
          <WhatWeDoGrid
            items={[
              {
                title: "Creator Sourcing",
                description:
                  "We find creators who fit your audience, category and brand personality.",
              },
              {
                title: "Concepts & Scripts",
                description:
                  "Hooks and storylines built around real customer problems, desires and buying triggers.",
              },
              {
                title: "UGC Production",
                description:
                  "Authentic, creator-led videos that feel native to the platform and natural to the audience.",
              },
              {
                title: "Editing & Variations",
                description:
                  "Multiple cuts, hooks and formats ready for organic content and paid campaigns.",
              },
            ]}
          />
        </ServiceSection>

        <ServiceSection
          eyebrow="Our Approach"
          heading="Find the Angle. Make the Content. Learn From It."
        >
          <p className="text-muted-foreground leading-relaxed">
            We develop multiple creative directions, see what connects with
            the audience and use those insights to shape the next batch.
          </p>
          <p className="font-semibold text-foreground">
            Research → Concept → Create → Test → Learn
          </p>
        </ServiceSection>

        <ServiceSection eyebrow="Why Meyvex" heading="Content With a Job to Do.">
          <p className="text-muted-foreground leading-relaxed">
            Every UGC video starts with a purpose—attention, trust, education
            or conversion.
          </p>
        </ServiceSection>
      </div>
    ),
  },
  {
    id: "card-4",
    title: "Shopify Development",
    image:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <ServiceHero
          tagline="Your Store Should Sell the Brand."
          paragraphs={[
            "High-converting Shopify experiences built to turn more visitors into customers.",
            "We combine thoughtful UX, sharp design and conversion-focused development to create storefronts that are fast, intuitive and built for growth.",
          ]}
          ctaLabel="Build My Store →"
          ctaHref="/contact"
        />

        <ServiceSection
          eyebrow="The Problem"
          heading="Traffic Means Little Without Conversion."
        >
          <p className="text-muted-foreground leading-relaxed">
            A customer can discover your brand through an ad, creator or
            search—but the store decides what happens next.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Slow pages, confusing navigation and weak product journeys can
            turn high-intent visitors into lost customers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We build the experience around the decision to buy.
          </p>
        </ServiceSection>

        <ServiceSection
          eyebrow="What We Do"
          heading="Built Around the Customer Journey."
        >
          <WhatWeDoGrid
            items={[
              {
                title: "Shopify Store Development",
                description:
                  "Custom storefronts designed around your brand and business goals.",
              },
              {
                title: "UX & UI Design",
                description:
                  "Clear, intuitive experiences that make discovering and buying easier.",
              },
              {
                title: "Conversion Optimisation",
                description:
                  "Product pages, offers and checkout journeys refined to reduce friction.",
              },
              {
                title: "Speed & Performance",
                description:
                  "Fast-loading storefronts built for a smoother shopping experience across devices.",
              },
            ]}
          />
        </ServiceSection>

        <ServiceSection
          eyebrow="Our Approach"
          heading="Understand → Design → Build → Optimise"
        >
          <p className="text-muted-foreground leading-relaxed">
            We look at how customers move through your store, identify the
            friction and build an experience that makes the next step feel
            natural.
          </p>
        </ServiceSection>

        <ServiceSection
          eyebrow="Why Meyvex"
          heading="A Store Built for the Full Growth Journey."
        >
          <p className="text-muted-foreground leading-relaxed">
            Your Shopify store sits at the centre of your acquisition,
            conversion and retention efforts.
          </p>
        </ServiceSection>
      </div>
    ),
  },
  {
    id: "card-5",
    title: "Retention Marketing",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <ServiceHero
          tagline="Turn First Orders Into Long-Term Customers."
          paragraphs={[
            "Retention strategies designed to increase repeat purchases, customer lifetime value and revenue from the customers you already have.",
            "We use WhatsApp, Email and customer data to create timely, relevant journeys that bring customers back.",
          ]}
          ctaLabel="Grow Customer Value →"
          ctaHref="/contact"
        />

        <ServiceSection
          eyebrow="The Problem"
          heading="The First Purchase Is Only the Beginning."
        >
          <p className="text-muted-foreground leading-relaxed">
            You&apos;ve already spent to acquire the customer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The next opportunity is turning that purchase into a
            relationship—and that relationship into repeat revenue.
          </p>
        </ServiceSection>

        <ServiceSection
          eyebrow="What We Do"
          heading="Build More Reasons to Come Back."
        >
          <WhatWeDoGrid
            items={[
              {
                title: "WhatsApp Marketing",
                description:
                  "Personalised campaigns and automated journeys that bring customers back at the right moment.",
              },
              {
                title: "Email Marketing",
                description:
                  "Lifecycle campaigns designed to educate, engage and drive repeat purchases.",
              },
              {
                title: "Automation & Flows",
                description:
                  "Welcome, abandoned cart, post-purchase, win-back and replenishment journeys built around customer behaviour.",
              },
              {
                title: "Customer Segmentation",
                description:
                  "Different customers need different messages. We segment audiences to make every communication more relevant.",
              },
            ]}
          />
        </ServiceSection>

        <ServiceSection
          eyebrow="Our Approach"
          heading="Acquire → Understand → Engage → Retain"
        >
          <p className="text-muted-foreground leading-relaxed">
            We use customer behaviour and purchase data to understand when,
            why and what customers are likely to buy next.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Then we build journeys around those moments.
          </p>
        </ServiceSection>

        <ServiceSection
          eyebrow="Why Meyvex"
          heading="Growth Gets More Valuable With Every Customer."
        >
          <p className="text-muted-foreground leading-relaxed">
            Acquisition brings customers in.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Retention makes each customer worth more.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We connect performance, customer data and retention to create a
            growth loop where every new customer has the potential to
            generate more value over time.
          </p>
        </ServiceSection>
      </div>
    ),
  },
];

export default MorphingDialog;
