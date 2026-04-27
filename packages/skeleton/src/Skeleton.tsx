import React from "react";
import { cn } from "@altrugenix/core";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape variant */
  variant?: "text" | "circular" | "rectangular" | "rounded";
  /** Animation type */
  animation?: "pulse" | "wave" | "none";
  /** Width — accepts any CSS value */
  width?: string | number;
  /** Height — accepts any CSS value */
  height?: string | number;
}

/**
 * Skeleton loading placeholder with customizable shapes and animation modes.
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "text",
      animation = "pulse",
      width,
      height,
      style,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      text: "h-3 w-full rounded mt-2 mb-2",
      circular: "rounded-full shrink-0",
      rectangular: "rounded-none",
      rounded: "rounded-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-muted",
          animation === "pulse" && "animate-pulse",
          animation === "wave" &&
            "after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer after:bg-gradient-to-r after:from-transparent after:via-foreground/5 after:to-transparent",
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
