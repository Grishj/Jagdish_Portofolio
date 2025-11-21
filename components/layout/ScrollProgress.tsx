"use client";

import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function ScrollProgress() {
  const { scrollPercentage } = useScrollPosition();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      style={{ scaleX: scrollPercentage / 100 }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1 }}
    />
  );
}
