"use client";

import { useRouter } from "next/navigation";
import FloatingMenu from "@/components/ui/liquid-morph-floating-menu";

export default function SiteNav() {
  const router = useRouter();

  const navItems = [
    { label: "Services" },
    { label: "About" },
    { label: "Portfolio" },
    { label: "Contact", onClick: () => router.push("/contact") },
  ];

  return <FloatingMenu items={navItems} />;
}
