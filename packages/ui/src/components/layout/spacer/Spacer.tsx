import React from "react";
import { cn } from "~/lib/utils/cn";

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spacer */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Axis — vertical adds height, horizontal adds width */
  axis?: "vertical" | "horizontal";
}

const sizeMap = {
  xs: { vertical: "h-1", horizontal: "w-1" },
  sm: { vertical: "h-2", horizontal: "w-2" },
  md: { vertical: "h-4", horizontal: "w-4" },
  lg: { vertical: "h-8", horizontal: "w-8" },
  xl: { vertical: "h-12", horizontal: "w-12" },
  "2xl": { vertical: "h-16", horizontal: "w-16" },
};

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = "md", axis = "vertical", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sizeMap[size][axis], className)}
        aria-hidden="true"
        {...props}
      />
    );
  }
);
Spacer.displayName = "Spacer";
