import React from "react";
import { cn } from "@altrugenix/core";

export interface CircularProgressProps extends React.SVGAttributes<SVGSVGElement> {
  /** Current progress value (0–100) */
  value?: number;
  /** Visual size */
  size?: "sm" | "md" | "lg";
  /** Thickness of the ring */
  thickness?: number;
  /** Whether the progress is indeterminate */
  indeterminate?: boolean;
}

const sizeMap = {
  sm: 24,
  md: 40,
  lg: 64,
};

/**
 * A circular indeterminate or determinate loading indicator.
 */
export const CircularProgress = React.forwardRef<
  SVGSVGElement,
  CircularProgressProps
>(
  (
    {
      className,
      value = 0,
      size = "md",
      thickness = 4,
      indeterminate = false,
      ...props
    },
    ref
  ) => {
    const radius = 20;
    const center = 22;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    const dimensions = sizeMap[size];

    return (
      <svg
        ref={ref}
        viewBox="0 0 44 44"
        width={dimensions}
        height={dimensions}
        className={cn(
          "inline-block",
          indeterminate && "animate-spin",
          className
        )}
        {...props}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          className="text-muted/30"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={indeterminate ? circumference * 0.75 : offset}
          strokeLinecap="round"
          className={cn(
            "text-primary transition-all duration-500 ease-in-out",
            indeterminate && "animate-progress-circular" // You might need to add this keyframe to tailwind
          )}
        />
      </svg>
    );
  }
);

CircularProgress.displayName = "CircularProgress";
