"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@altrugenix/core";
import { Button } from "@altrugenix/button";

export interface CarouselProps {
  /** Items to display (images or any components) */
  items: React.ReactNode[];
  /** Auto-play interval in ms (default: 5000) */
  autoPlayInterval?: number;
  /** Whether to show navigation buttons */
  showArrows?: boolean;
  /** Whether to show dot indicators */
  showDots?: boolean;
  /** Custom class for the items container */
  className?: string;
  /** Custom class for the item wrapper */
  itemClassName?: string;
}

/**
 * A premium Carousel component with smooth Framer Motion transitions,
 * auto-play support, and dot indicators.
 */
export const Carousel = ({
  items,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  className,
  itemClassName,
}: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    if (items.length <= 1) return;
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    if (items.length <= 1) return;
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (autoPlayInterval <= 0 || items.length <= 1) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval, items.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-xl",
        className
      )}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={cn(
            "absolute flex h-full w-full items-center justify-center",
            itemClassName
          )}
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 scale-90 rounded-full border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all hover:scale-100 hover:bg-black/40 group-hover:opacity-100 dark:bg-white/10 dark:hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 scale-90 rounded-full border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all hover:scale-100 hover:bg-black/40 group-hover:opacity-100 dark:bg-white/10 dark:hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                i === index
                  ? "shadow-glow w-6 bg-white"
                  : "bg-white/40 hover:bg-white/60"
              )}
              onClick={(e) => {
                e.stopPropagation();
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
