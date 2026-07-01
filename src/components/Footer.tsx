"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-surface-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="order-last text-xs text-muted/70 sm:order-none">
          Built with Next.js, Tailwind CSS & Framer Motion — psst, try the terminal (bottom-left, or Ctrl + `).
        </p>
        <motion.a
          href="#top"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.a>
      </div>
    </footer>
  );
}
