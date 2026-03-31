import React from "react";
import { cn } from "@/lib/utils/cn";

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
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium text-muted-foreground">
            {label}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        className={cn(
          orientation === "horizontal"
            ? "h-px w-full bg-border"
            : "inline-block h-full w-px bg-border",
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";
