import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@altrugenix/core";

export interface RevealProps {
  /** The content to be revealed */
  children: React.ReactNode;
  /** Width of the container (default: "fit-content") */
  width?: "fit-content" | "100%";
  /** Whether to only reveal once (default: true) */
  once?: boolean;
  /** Delay before the reveal animation starts in seconds (default: 0.25) */
  delay?: number;
  /** Duration of the reveal animation in seconds (default: 0.5) */
  duration?: number;
  /** Direction from which the element enters (default: "up") */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Custom CSS classes for the container */
  className?: string;
}

/**
 * Reveal - High-level wrapper for `framer-motion` to easily add entry animations
 * to any component as it enters the viewport.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "fit-content",
  once = true,
  delay = 0.25,
  duration = 0.5,
  direction = "up",
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const slideVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number], // premium cubic-bezier ease
      },
    },
  };

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ width }}
    >
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

Reveal.displayName = "Reveal";
