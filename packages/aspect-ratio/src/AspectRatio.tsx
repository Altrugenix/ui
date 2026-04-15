import React from "react";
import { cn } from "@altrugenix/core";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The aspect ratio (e.g., 16/9) */
  ratio?: number;
}

/**
 * A utility wrapper to force a specific ratio on its children.
 * Useful for images, videos, or map embeds.
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, className, children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        style={{
          ...style,
          paddingBottom: `${100 / ratio}%`,
        }}
        {...props}
      >
        <div className="absolute inset-0 [&>*]:h-full [&>*]:w-full">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";
