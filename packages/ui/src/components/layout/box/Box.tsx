import React from "react";
import { cn } from "~/lib/utils/cn";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a different HTML element */
  as?: React.ElementType;
  /** Padding preset */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const paddingMap = {
  none: "",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
};

/**
 * Box is a generic wrapper component — the most basic layout primitive.
 * Use it to apply spacing, padding, and styling to a block of content.
 */
export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    { className, as: Component = "div", padding = "none", children, ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(paddingMap[padding], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Box.displayName = "Box";
