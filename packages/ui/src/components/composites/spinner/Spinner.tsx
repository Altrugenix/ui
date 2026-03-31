import React from "react";
import { cn } from "~/lib/utils/cn";
import { Loader2 } from "lucide-react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner */
  size?: "sm" | "md" | "lg" | "xl";
  /** Optional label displayed below the spinner */
  label?: string;
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

/**
 * Spinner / Loader component using Lucide's Loader2 icon with a spin animation.
 */
export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          "flex flex-col items-center justify-center gap-2",
          className
        )}
        {...props}
      >
        <Loader2
          className={cn("animate-spin text-primary", sizeMap[size])}
          aria-hidden="true"
        />
        {label && (
          <span className="text-sm text-muted-foreground">{label}</span>
        )}
        <span className="sr-only">{label || "Loading..."}</span>
      </div>
    );
  }
);
Spinner.displayName = "Spinner";
