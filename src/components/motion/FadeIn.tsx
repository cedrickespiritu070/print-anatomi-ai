"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  duration?: number;
  /** Direction to slide in from */
  from?: "bottom" | "top" | "left" | "right" | "none";
  /** Distance in pixels to travel */
  distance?: number;
  once?: boolean;
}

const buildVariants = (from: FadeInProps["from"], distance: number): Variants => {
  const offset = {
    bottom: { y: distance },
    top: { y: -distance },
    left: { x: -distance },
    right: { x: distance },
    none: {},
  }[from ?? "bottom"];

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export function FadeIn({
  children,
  className,
  id,
  delay = 0,
  duration = 0.5,
  from = "bottom",
  distance = 24,
  once = true,
}: FadeInProps) {
  const variants = buildVariants(from, distance);

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
