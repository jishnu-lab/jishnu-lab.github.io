"use client";
import { usePathname } from "next/navigation";
import { FloatingDock } from "@/components/ui/floating-dock";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar({ items }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <motion.div // for the dock appearance
        key={isHomePage ? "top" : "side"}
        layout
        initial={{ opacity: 0, x: isHomePage ? 0 : -50, y: isHomePage ? 50 : 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: isHomePage ? 0 : -50, y: isHomePage ? 50 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn(
          "fixed z-50", // always fixed and on top
          // mobile (always top-center)
          "top-4 left-1/2 -translate-x-1/2",
          // desktop overrides (depending on home page or not)
          isHomePage
            ? "md:top-4 md:left-1/2 md:-translate-x-1/2 md:translate-y-0 md:flex-row"
            : "md:top-1/2 md:left-4 md:translate-x-0 md:-translate-y-1/2 md:flex-col"
        )}
      >
        <FloatingDock
          items={items}
          direction={isHomePage ? "horizontal" : "vertical"}
        />
      </motion.div>
    </AnimatePresence>
  );
}
