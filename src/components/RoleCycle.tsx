"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = ["Flutter Developer", "Mobile App Engineer", "Cross-platform Dev"];

export function RoleCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.span layout className="relative inline-grid min-w-0 max-w-full align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="col-start-1 row-start-1 min-w-0"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
