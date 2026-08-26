import Link from "next/link";
import FooterSection5 from "@/components/ui/footer-section-5";

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="relative flex size-full w-full flex-col items-center justify-start gap-10 px-4 pt-16 pb-0">
        <Link href="/" className="absolute top-6 left-6 z-20 md:top-8 md:left-8">
          <img
            src="/logo.png"
            alt="Meyvex"
            className="h-9 w-auto md:h-11"
          />
        </Link>
      </main>

      <FooterSection5 />
    </div>
  );
}
