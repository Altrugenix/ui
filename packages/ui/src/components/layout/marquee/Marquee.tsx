import React from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils/cn";

export interface MarqueeProps {
  /** The content to be scrolled. It's best to have enough components to fill the width. */
  children: React.ReactNode;
  /** Direction of movement (default: "left") */
  direction?: "left" | "right";
  /** Whether to pause the animation when the user hovers over the container (default: true) */
  pauseOnHover?: boolean;
  /** Speed of the animation in seconds (default: 40) */
  speed?: number;
  /** Custom CSS classes for the container */
  className?: string;
  /** The gap between duplicated content blocks (default: "2rem") */
  gap?: string;
  /** Vertical scrolling instead of horizontal (default: false) */
  vertical?: boolean;
}

/**
 * Marquee - A smooth, infinitely scrolling container for logos, reviews, or tickers.
 */
export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  pauseOnHover = true,
  speed = 40,
  className,
  gap = "2rem",
  vertical = false,
}) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        vertical ? "h-full flex-col" : "w-full flex-row",
        className
      )}
      style={{ gap }}
    >
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            [vertical ? "y" : "x"]:
              direction === "left" && !vertical
                ? ["0%", "-100%"]
                : direction === "right" && !vertical
                  ? ["-100%", "0%"]
                  : direction === "left" && vertical
                    ? ["0%", "-100%"]
                    : ["-100%", "0%"],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className={cn(
            "flex shrink-0 items-center justify-around",
            vertical ? "min-h-full flex-col" : "min-w-full flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ gap }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
};

Marquee.displayName = "Marquee";
