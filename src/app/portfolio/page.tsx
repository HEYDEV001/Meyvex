"use client";

import { useState } from "react";
import Link from "next/link";
import FooterSection5 from "@/components/ui/footer-section-5";

export default function PortfolioPage() {
  const [view, setView] = useState<"image" | "reels">("image");

  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-32 pb-20">
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

        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          We&apos;re not an Agency
          <br />
          We&apos;re an Eco-System
        </h1>

        <div className="inline-flex rounded-full border border-border bg-muted/40 p-1">
          <button
            type="button"
            onClick={() => setView("image")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              view === "image"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Image
          </button>
          <button
            type="button"
            onClick={() => setView("reels")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              view === "reels"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Reels
          </button>
        </div>

        <div className="flex min-h-[400px] w-full max-w-6xl items-center justify-center rounded-2xl border border-dashed border-border">
          <p className="text-muted-foreground">
            {view === "image" ? "Image content coming soon" : "Reels content coming soon"}
          </p>
        </div>
      </main>

      <FooterSection5 />
    </div>
  );
}
