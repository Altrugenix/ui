import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface CollapseProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "exit" | "transition"
> {
  in?: boolean;
  timeout?: number;
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  ({ in: appear = true, timeout = 300, children, ...props }, ref) => {
    return (
      <AnimatePresence>
        {appear && (
          <motion.div
            ref={ref}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: timeout / 1000 }}
            style={{ overflow: "hidden" }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
Collapse.displayName = "Collapse";
