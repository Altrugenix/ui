import React from "react";
import { cn } from "~/lib/utils/cn";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the buttons */
  orientation?: "horizontal" | "vertical";
  /** Whether the buttons should be full width */
  fullWidth?: boolean;
}

/**
 * A container component to group multiple buttons into a single visually cohesive unit.
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      orientation = "horizontal",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          "inline-flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          fullWidth && "w-full",
          // Common styles for grouping buttons
          "[&>button:not(:first-child):not(:last-child)]:rounded-none",
          "[&>button:not(:first-child):not(:last-child)]:border-l-0",
          "[&>button:not(:first-child):not(:last-child)]:border-r-0",

          orientation === "horizontal" && [
            "[&>button:first-child]:rounded-r-none",
            "[&>button:last-child]:rounded-l-none",
            "[&>button:last-child]:border-l-0",
            "[&>button:not(:first-child)]:ml-[-1px]",
          ],

          orientation === "vertical" && [
            "[&>button:first-child]:rounded-b-none",
            "[&>button:last-child]:rounded-t-none",
            "[&>button:last-child]:border-t-0",
            "[&>button:not(:first-child)]:mt-[-1px]",
          ],

          fullWidth && "[&>button]:flex-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
