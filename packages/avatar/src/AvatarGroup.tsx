import React from "react";
import { cn } from "@altrugenix/core";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to display */
  max?: number;
  /** Size multiplier for all avatars in the group */
  size?: "sm" | "md" | "lg";
}

/**
 * A component for stacking multiple avatars (overlapping) with a limit indicator.
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 5, size = "md", children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const visibleChildren = childrenArray.slice(0, max);
    const surplus = childrenArray.length - max;

    const sizeClasses = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row-reverse items-center justify-end -space-x-4",
          className
        )}
        {...props}
      >
        {surplus > 0 && (
          <div
            className={cn(
              "bg-muted text-muted-foreground ring-background relative flex items-center justify-center rounded-full font-bold ring-2",
              sizeClasses[size]
            )}
            style={{ zIndex: 0 }}
          >
            +{surplus}
          </div>
        )}
        {visibleChildren.reverse().map((child, index) => {
          if (React.isValidElement(child)) {
            const childProps = child.props as { className?: string };
            return React.cloneElement(
              child as React.ReactElement<{
                className?: string;
                style?: React.CSSProperties;
              }>,
              {
                key: index,
                className: cn(
                  childProps.className,
                  "ring-2 ring-background",
                  sizeClasses[size]
                ),
                style: { zIndex: index + 1 },
              }
            );
          }
          return child;
        })}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
