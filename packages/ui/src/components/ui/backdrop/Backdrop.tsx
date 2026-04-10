import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "~/lib/utils/cn";

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the backdrop is visible */
  open: boolean;
  /** Whether the backdrop is transparent */
  invisible?: boolean;
}

/**
 * A standalone utility component for dimming the background behind active elements like Modals or Drawers.
 */
export const Backdrop: React.FC<BackdropProps> = ({
  open,
  invisible = false,
  className,
  children,
  ...props
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-[50] flex items-center justify-center bg-black/50 backdrop-blur-sm",
            invisible && "bg-transparent backdrop-blur-none",
            className
          )}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Backdrop.displayName = "Backdrop";
