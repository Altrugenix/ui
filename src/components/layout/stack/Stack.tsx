import React from "react";
import { cn } from "@/lib/utils/cn";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction of the stack */
  direction?: "vertical" | "horizontal";
  /** Spacing between items */
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Alignment of items along the cross axis */
  align?: "start" | "center" | "end" | "stretch";
}

const spacingMap = {
  xs: { vertical: "space-y-1", horizontal: "space-x-1" },
  sm: { vertical: "space-y-2", horizontal: "space-x-2" },
  md: { vertical: "space-y-4", horizontal: "space-x-4" },
  lg: { vertical: "space-y-6", horizontal: "space-x-6" },
  xl: { vertical: "space-y-8", horizontal: "space-x-8" },
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = "vertical",
      spacing = "md",
      align = "stretch",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "horizontal" ? "flex-row" : "flex-col",
          spacingMap[spacing][direction],
          alignMap[align],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Stack.displayName = "Stack";
