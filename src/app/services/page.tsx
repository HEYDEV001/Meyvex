import Image from "next/image";
import Link from "next/link";
import FooterSection5 from "@/components/ui/footer-section-5";
import { MorphingDialog } from "@/components/ui/morphing-dialog";

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-32 pb-20">
        <Link href="/" className="fixed top-4 left-4 z-50 md:top-8 md:left-8">
          <Image
            src="/logo.png"
            alt="Meyvex"
            width={1017}
            height={245}
            className="h-6 w-auto md:h-11"
          />
        </Link>

        <Link
          href="/contact"
          className="fixed top-4 right-4 z-50 rounded-full bg-[#FFE862] px-4 py-1.5 text-xs shadow-sm font-medium uppercase tracking-tight text-[#242424] transition-transform hover:scale-105 md:top-8 md:right-8 md:px-5 md:py-2 md:text-sm md:shadow-none"
          style={{ letterSpacing: "-0.02em" }}
        >
          Contact
        </Link>

        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          What We Do
        </h1>

        <MorphingDialog />
      </main>

      <FooterSection5 />
    </div>
  );
}
