import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@altrugenix/core";

const sheetVariants = cva("rounded-xl transition-all duration-200", {
  variants: {
    variant: {
      plain: "bg-transparent",
      outlined: "bg-background border border-border pb-px shadow-sm",
      soft: "bg-muted/50 border border-transparent",
      solid: "bg-card text-card-foreground border border-border shadow-md",
    },
    elevation: {
      none: "shadow-none",
      xs: "shadow-xs",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    padding: {
      none: "p-0",
      xs: "p-2",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
  },
  defaultVariants: {
    variant: "outlined",
    elevation: "none",
    padding: "md",
  },
});

export interface SheetProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetVariants> {
  as?: React.ElementType;
}

/**
 * A foundational surface component for grouping content with specific elevations and backgrounds.
 * Inspired by Joy UI's Sheet component.
 */
export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  (
    { className, variant, elevation, padding, as: Component = "div", ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          sheetVariants({ variant, elevation, padding, className })
        )}
        {...props}
      />
    );
  }
);

Sheet.displayName = "Sheet";
