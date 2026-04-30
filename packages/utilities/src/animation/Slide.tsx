import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface SlideProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "exit" | "transition"
> {
  in?: boolean;
  timeout?: number;
  direction?: "up" | "down" | "left" | "right";
}

const offsets = {
  up: { y: 100, x: 0 },
  down: { y: -100, x: 0 },
  left: { x: 100, y: 0 },
  right: { x: -100, y: 0 },
};

export const Slide = React.forwardRef<HTMLDivElement, SlideProps>(
  (
    { in: appear = true, timeout = 300, direction = "up", children, ...props },
    ref
  ) => {
    return (
      <AnimatePresence>
        {appear && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offsets[direction] }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, ...offsets[direction] }}
            transition={{ duration: timeout / 1000 }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
Slide.displayName = "Slide";
