"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FooterSection5 from "@/components/ui/footer-section-5";
import { Gallery, GalleryGrid, GalleryImage } from "@/components/ui/shared-element-gallery";

const PORTFOLIO_IMAGES = [
  { id: "img-1", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/215f11bd-8f46-486d-8b18-377cf347096f_3840w.webp" },
  { id: "img-2", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edaf8dff-6ac4-4fed-b5ff-f41e6863a090_3840w.jpg" },
  { id: "img-3", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ab0a4be-b66e-441b-9576-a9d5ac06f8fb_3840w.jpg" },
  { id: "img-4", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32ecf28d-1c1d-4769-9096-c1094771e78c_3840w.webp" },
  { id: "img-5", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e5d812f-98e8-460c-ab63-780281a96167_3840w.jpg" },
  { id: "img-6", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2eae1d-50c9-4fc6-bc0b-6e04ab1507b1_3840w.webp" },
  { id: "img-7", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/765e26b6-040b-48cb-96df-db0ea0f7f300_3840w.jpg" },
  { id: "img-8", src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00d83233-ec00-4110-bf1d-95338af5875e_3840w.jpg" },
];

const PORTFOLIO_REELS = [
  { id: "reel-1", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=1050&fit=crop" },
  { id: "reel-2", src: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=600&h=1050&fit=crop" },
  { id: "reel-3", src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=1050&fit=crop" },
  { id: "reel-4", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=1050&fit=crop" },
  { id: "reel-5", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=1050&fit=crop" },
  { id: "reel-6", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=1050&fit=crop" },
  { id: "reel-7", src: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=600&h=1050&fit=crop" },
  { id: "reel-8", src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=1050&fit=crop" },
];

export default function PortfolioPage() {
  const [view, setView] = useState<"image" | "reels">("image");

  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-32 pb-20">
        <Link href="/" className="absolute top-6 left-6 z-20 md:top-8 md:left-8">
          <Image src="/logo.png" alt="Meyvex" width={1017} height={245} className="h-9 w-auto md:h-11" />
        </Link>

        <Link
          href="/contact"
          className="absolute top-6 right-6 z-20 rounded-full bg-[#FFE862] px-5 py-2 text-sm font-medium uppercase tracking-tight text-[#242424] transition-transform hover:scale-105 md:top-8 md:right-8"
          style={{ letterSpacing: "-0.02em" }}
        >
          Contact
        </Link>

        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          We&apos;re not an <span style={{ color: "#FC3712" }}>Agency</span>
          <br />
          We&apos;re an <span style={{ color: "#FC3712" }}>Eco-System</span>
        </h1>

        <div className="inline-flex rounded-full border border-border bg-muted/40 p-1">
          <button
            type="button"
            onClick={() => setView("image")}
            className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              view === "image"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {view === "image" && (
              <motion.span
                layoutId="portfolio-toggle-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[#000000]"
                transition={{ type: "spring", stiffness: 180, damping: 26, mass: 1 }}
              />
            )}
            Image
          </button>
          <button
            type="button"
            onClick={() => setView("reels")}
            className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              view === "reels"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {view === "reels" && (
              <motion.span
                layoutId="portfolio-toggle-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[#000000]"
                transition={{ type: "spring", stiffness: 180, damping: 26, mass: 1 }}
              />
            )}
            Reels
          </button>
        </div>

        <div className="w-full max-w-7xl">
          {view === "image" ? (
            <Gallery>
              <GalleryGrid>
                {PORTFOLIO_IMAGES.map((image) => (
                  <GalleryImage
                    key={image.id}
                    id={image.id}
                    src={image.src}
                    alt={`Portfolio image ${image.id}`}
                  />
                ))}
              </GalleryGrid>
            </Gallery>
          ) : (
            <Gallery>
              <GalleryGrid>
                {PORTFOLIO_REELS.map((reel) => (
                  <GalleryImage
                    key={reel.id}
                    id={reel.id}
                    src={reel.src}
                    alt={`Portfolio reel ${reel.id}`}
                  />
                ))}
              </GalleryGrid>
            </Gallery>
          )}
        </div>
      </main>

      <FooterSection5 />
    </div>
  );
}
