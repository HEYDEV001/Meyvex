"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import FloatingMenu from "@/components/ui/liquid-morph-floating-menu";

export default function SiteNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  // Once the route has actually changed to the page we navigated to,
  // the new page has rendered — only then start collapsing the menu.
  useEffect(() => {
    if (pendingHref && pathname === pendingHref) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(false);
      setPendingHref(null);
    }
  }, [pathname, pendingHref]);

  const navigate = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
      return;
    }
    setPendingHref(href);
    router.push(href);
  };

  const navItems = [
    { label: "Services", onClick: () => navigate("/services") },
    { label: "About" },
    { label: "Portfolio" },
    { label: "Contact", onClick: () => navigate("/contact") },
  ];

  return <FloatingMenu items={navItems} open={isOpen} onOpenChange={setIsOpen} />;
}
