import Image from "next/image";
import Link from "next/link";

export default function MobileNavHeader() {
  return (
    <>
      <Link href="/" className="fixed top-4 left-4 z-50 md:hidden">
        <Image src="/logo.png" alt="Meyvex" width={1017} height={245} className="h-6 w-auto" />
      </Link>

      <Link
        href="/contact"
        className="fixed top-4 right-4 z-50 rounded-full bg-[#FFE862] px-4 py-1.5 text-xs font-medium uppercase tracking-tight text-[#242424] shadow-sm transition-transform hover:scale-105 md:hidden"
        style={{ letterSpacing: "-0.02em" }}
      >
        Contact
      </Link>
    </>
  );
}
