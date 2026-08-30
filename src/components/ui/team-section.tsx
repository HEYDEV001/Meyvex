"use client";

import * as React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility for classnames

// Define the type for each team member
interface TeamMember {
  name: string;
  image: string;
  role?: string;
  bio?: string;
}

// Define the props for the component
export interface AnimatedTeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
  className?: string;
}

// Helper function to calculate the final transform values for each card
const getCardState = (index: number, total: number, spread: number) => {
  const centerIndex = (total - 1) / 2;
  const distanceFromCenter = index - centerIndex;

  // Horizontal spread to ensure cards are wide apart
  const x = distanceFromCenter * spread;
  // Vertical lift to form the curve
  const y = Math.abs(distanceFromCenter) * -30;
  // Rotation for the fanned effect
  const rotate = distanceFromCenter * 12;

  return { x, y, rotate };
};

// Keeps the fan spread narrow enough to stay within the viewport on small
// screens, since the cards are transform-shifted and can't rely on
// overflow-hidden clipping consistently across mobile browsers.
const useCardSpread = () => {
  const [spread, setSpread] = React.useState(90);

  React.useEffect(() => {
    const updateSpread = () => {
      const width = window.innerWidth;
      if (width < 768) setSpread(28);
      else if (width < 1024) setSpread(75);
      else setSpread(90);
    };
    updateSpread();
    window.addEventListener("resize", updateSpread);
    return () => window.removeEventListener("resize", updateSpread);
  }, []);

  return spread;
};

const AnimatedTeamSection = React.forwardRef<
  HTMLDivElement,
  AnimatedTeamSectionProps
>(({ title, description, members, className, ...props }, ref) => {
  const controls = useAnimation();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [selected, setSelected] = React.useState<number | null>(null);
  const spread = useCardSpread();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  React.useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  // Animation for the container to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // REBUILT ANIMATION LOGIC: Integrated positioning directly into framer-motion
  const itemVariants = {
    // All cards start at the center, scaled down
    hidden: { opacity: 0, scale: 0.5, x: 0, y: 0, rotate: 0 },
    // Animate to the final calculated position
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: getCardState(i, members.length, spread).x,
      y: getCardState(i, members.length, spread).y,
      rotate: getCardState(i, members.length, spread).rotate,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className={cn("w-full py-20 lg:py-28 overflow-hidden", className)}
      {...props}
    >
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
          {title}
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl">
          {description}
        </p>

        {/* Sized container for the absolute positioning */}
        <motion.div
          ref={inViewRef}
          className="relative mt-20 flex items-center justify-center"
          style={{ minHeight: "250px" }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {members.map((member, index) => (
            <motion.button
              type="button"
              key={index}
              onClick={() => setSelected(index)}
              aria-label={`View info about ${member.name}`}
              className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-xl overflow-hidden shadow-lg border-2 border-background cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring"
              custom={index} // Pass index to variants for calculation
              variants={itemVariants}
              // Set initial zIndex based on distance from center
              style={{ zIndex: members.length - Math.abs(index - (members.length - 1) / 2) }}
              whileHover={{
                scale: 1.1,
                zIndex: 99,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <React.Fragment key="team-overlay">
            {/* Outside-click layer, same scheme as the Service Grid's backdrop */}
            <motion.div
              className="fixed inset-0 left-0 top-0 z-40 h-full w-full bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 m-auto flex h-1/3 w-4/5 flex-col items-center justify-center overflow-hidden rounded-lg md:w-1/3"
            >
              {/* Bottom-aligned scrim + text, matching the Service Grid's SelectedCard */}
              <div className="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="absolute inset-0 z-10 h-full w-full bg-black"
                />
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-[70] px-8 pb-4"
                >
                  <p className="font-bold text-white md:text-4xl text-xl">
                    {members[selected].name}
                  </p>
                  {members[selected].role && (
                    <p className="font-normal text-base text-white">
                      {members[selected].role}
                    </p>
                  )}
                  {members[selected].bio && (
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                      {members[selected].bio}
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Background image, full card */}
              <img
                src={members[selected].image.replace(/w=\d+/, "w=800")}
                alt={members[selected].name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </section>
  );
});

AnimatedTeamSection.displayName = "AnimatedTeamSection";

export { AnimatedTeamSection };
