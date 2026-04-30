import React from "react";
import { cn } from "@altrugenix/core";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Optional label displayed in the center */
  label?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (label && orientation === "horizontal") {
      return (
        <div
          ref={ref}
          className={cn("flex items-center gap-3", className)}
          role="separator"
          {...props}
        >
          <div className="bg-border h-px flex-1" />
          <span className="text-muted-foreground text-xs font-medium">
            {label}
          </span>
          <div className="bg-border h-px flex-1" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        className={cn(
          orientation === "horizontal"
            ? "bg-border h-px w-full"
            : "bg-border inline-block h-full w-px",
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";
