"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";
import { RoleCycle } from "./RoleCycle";
import { MagneticLink } from "./MagneticLink";
import { TechMarquee } from "./TechMarquee";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-32 -left-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-accent-2/25 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="section-container relative w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted"
          >
            <Sparkles size={14} className="text-accent" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
            <br />
            <RoleCycle />
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-balance text-muted sm:text-lg">
            {profile.tagline} 1 year of hands-on experience shipping polished Flutter apps
            to the App Store and Play Store.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticLink
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              <Download size={16} />
              Download Resume
            </MagneticLink>
            <MagneticLink
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              <Mail size={16} />
              Get in Touch
            </MagneticLink>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid w-full grid-cols-3 gap-4 border-t border-surface-border pt-8"
          >
            {[
              { label: "Years Experience", value: "1+" },
              { label: "Apps Shipped", value: "4+" },
              { label: "Platforms", value: "iOS & Android" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <TechMarquee />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll to About"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
