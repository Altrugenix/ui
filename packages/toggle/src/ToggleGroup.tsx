import React from "react";
import { cn } from "@altrugenix/core";

export interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the group */
  orientation?: "horizontal" | "vertical";
  /** Type of selection */
  type?: "single" | "multiple";
  /** Current value(s) */
  value?: string | string[];
  /** Callback for value changes */
  onValueChange?: (value: string | string[]) => void;
}

/**
 * A container for grouping multiple toggle buttons into a selection set.
 */
export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  (
    {
      className,
      orientation = "horizontal",
      type = "single",
      value,
      onValueChange,
      children,
      ...props
    },
    ref
  ) => {
    const handleToggle = (childValue: string) => {
      if (type === "single") {
        onValueChange?.(value === childValue ? "" : childValue);
      } else {
        const values = Array.isArray(value) ? value : [];
        if (values.includes(childValue)) {
          onValueChange?.(values.filter((v) => v !== childValue));
        } else {
          onValueChange?.([...values, childValue]);
        }
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md border bg-background p-1 shadow-sm",
          orientation === "vertical" ? "flex-col" : "flex-row",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childProps = child.props as { value: string };
            const childValue = childProps.value;
            const isPressed =
              type === "single"
                ? value === childValue
                : Array.isArray(value) && value.includes(childValue);

            return React.cloneElement(
              child as React.ReactElement<{
                pressed: boolean;
                onClick: () => void;
              }>,
              {
                pressed: isPressed,
                onClick: () => handleToggle(childValue),
              }
            );
          }
          return child;
        })}
      </div>
    );
  }
);

ToggleGroup.displayName = "ToggleGroup";
