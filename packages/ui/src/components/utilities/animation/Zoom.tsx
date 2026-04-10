import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface ZoomProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "exit" | "transition"
> {
  in?: boolean;
  timeout?: number;
}

export const Zoom = React.forwardRef<HTMLDivElement, ZoomProps>(
  ({ in: appear = true, timeout = 300, children, ...props }, ref) => {
    return (
      <AnimatePresence>
        {appear && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
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
Zoom.displayName = "Zoom";
