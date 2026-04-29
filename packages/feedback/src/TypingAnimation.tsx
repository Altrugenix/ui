import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@altrugenix/core";

export interface TypingAnimationProps {
  /** The text content to animate */
  text: string;
  /** Speed of typing in milliseconds per character (default: 100) */
  speed?: number;
  /** Custom CSS classes for the container */
  className?: string;
  /** Whether to restart the animation once it finishes (default: false) */
  repeat?: boolean;
  /** Whether to show the blinking cursor (default: true) */
  cursor?: boolean;
  /** Delay before starting the animation in milliseconds (default: 0) */
  delay?: number;
}

/**
 * TypingAnimation - A utility to simulate a typing effect for headings or hero sections.
 */
export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  className,
  repeat = false,
  cursor = true,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const isFinished = index >= text.length;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (delay > 0 && index === 0 && !isFinished) {
      timeout = setTimeout(() => {
        setIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (!isFinished) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (repeat) {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, repeat, delay, isFinished]);

  return (
    <div
      className={cn(
        "inline-flex items-center text-lg font-medium md:text-xl",
        className
      )}
    >
      <span>{displayedText}</span>
      {cursor && (!isFinished || repeat) && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="ml-1 inline-block h-[1.1em] w-[2px] bg-primary align-middle"
        />
      )}
    </div>
  );
};

TypingAnimation.displayName = "TypingAnimation";
