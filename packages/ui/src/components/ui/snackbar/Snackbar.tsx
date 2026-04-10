import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "~/lib/utils/cn";
import { Button } from "../button";

export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the snackbar is visible */
  open: boolean;
  /** Message to display */
  message: string;
  /** Action button text */
  actionLabel?: string;
  /** Callback for action button click */
  onAction?: () => void;
  /** Callback for close button click */
  onClose?: () => void;
  /** Duration in ms before auto-closing (optional) */
  autoHideDuration?: number;
  /** Anchor position */
  position?:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";
  /** Visual variant */
  variant?: "default" | "inverted" | "error" | "success";
}

const positionClasses = {
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
};

const variantClasses = {
  default: "bg-background border border-border text-foreground",
  inverted: "bg-foreground text-background",
  error: "bg-destructive text-destructive-foreground",
  success: "bg-success text-success-foreground",
};

/**
 * A specialized "Toast" variant for bottom/top persistent notifications.
 * Inspired by MUI and Joy UI.
 */
export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  actionLabel,
  onAction,
  onClose,
  autoHideDuration,
  position = "bottom-center",
  variant = "inverted",
  className,
  ...props
}) => {
  React.useEffect(() => {
    if (open && autoHideDuration && onClose) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: position.startsWith("bottom") ? 20 : -20,
          }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: position.startsWith("bottom") ? 20 : -20,
          }}
          className={cn(
            "fixed z-[9999] flex min-w-[320px] max-w-[500px] items-center justify-between gap-4 rounded-lg px-4 py-3 shadow-lg",
            positionClasses[position],
            variantClasses[variant],
            className
          )}
          {...props}
        >
          <span className="text-sm font-medium">{message}</span>

          <div className="flex items-center gap-1">
            {actionLabel && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onAction}
                className={cn(
                  "h-8 px-2 text-xs font-bold uppercase tracking-wider",
                  variant === "inverted"
                    ? "text-background hover:bg-background/10"
                    : "text-primary hover:bg-primary/10"
                )}
              >
                {actionLabel}
              </Button>
            )}

            {onClose && (
              <button
                onClick={onClose}
                className={cn(
                  "rounded-full p-1 transition-opacity hover:opacity-100",
                  variant === "inverted"
                    ? "text-background opacity-70"
                    : "text-foreground opacity-50"
                )}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Snackbar.displayName = "Snackbar";
