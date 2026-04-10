import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface FadeProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "exit" | "transition"
> {
  in?: boolean;
  timeout?: number;
}

export const Fade = React.forwardRef<HTMLDivElement, FadeProps>(
  ({ in: appear = true, timeout = 300, children, ...props }, ref) => {
    return (
      <AnimatePresence>
        {appear && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
Fade.displayName = "Fade";
