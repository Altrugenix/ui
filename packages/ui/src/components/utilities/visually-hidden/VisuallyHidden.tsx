import React from "react";
import { cn } from "~/lib/utils/cn";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}

/**
 * Hides content from the screen while keeping it accessible to screen readers.
 */
export const VisuallyHidden = React.forwardRef<
  HTMLElement,
  VisuallyHiddenProps
>(({ className, as: Component = "span", ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "absolute h-px w-px overflow-hidden whitespace-nowrap p-0",
        "clip-[rect(0,0,0,0)] border-0", // tailwind's sr-only equivalent
        className
      )}
      {...props}
    />
  );
});

VisuallyHidden.displayName = "VisuallyHidden";
