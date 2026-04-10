import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface GrowProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "exit" | "transition"
> {
  in?: boolean;
  timeout?: number;
  origin?: "center" | "top" | "bottom" | "left" | "right";
}

export const Grow = React.forwardRef<HTMLDivElement, GrowProps>(
  (
    { in: appear = true, timeout = 300, origin = "center", children, ...props },
    ref
  ) => {
    return (
      <AnimatePresence>
        {appear && (
          <motion.div
            ref={ref}
            style={{ transformOrigin: origin }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: timeout / 1000,
              type: "spring",
              bounce: 0.1,
            }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
Grow.displayName = "Grow";
