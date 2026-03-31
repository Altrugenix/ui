import React from "react";
import { cn } from "~/lib/utils/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape variant */
  variant?: "text" | "circular" | "rectangular" | "rounded";
  /** Width — accepts any CSS value */
  width?: string | number;
  /** Height — accepts any CSS value */
  height?: string | number;
}

/**
 * Skeleton loading placeholder with a shimmer animation.
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "text", width, height, style, ...props }, ref) => {
    const variantStyles = {
      text: "h-4 w-full rounded-md",
      circular: "rounded-full",
      rectangular: "rounded-none",
      rounded: "rounded-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse bg-muted",
          variantStyles[variant],
          className
        )}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
