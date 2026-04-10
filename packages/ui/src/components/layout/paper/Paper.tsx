import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils/cn";
import { paperVariants } from "./paperVariants";

export interface PaperProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperVariants> {
  /** Render as a different HTML element */
  as?: React.ElementType;
}

export const Paper = React.forwardRef<HTMLElement, PaperProps>(
  (
    { className, elevation, variant, square, as: Component = "div", ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(paperVariants({ elevation, variant, square }), className)}
        {...props}
      />
    );
  }
);
Paper.displayName = "Paper";
