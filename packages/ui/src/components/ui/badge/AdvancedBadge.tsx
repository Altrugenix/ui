import React from "react";
import { cn } from "~/lib/utils/cn";
import { Badge, type BadgeProps } from "./Badge";

export interface AdvancedBadgeProps extends BadgeProps {
  /** The content to display inside the badge (usually a number or text) */
  content?: React.ReactNode;
  /** Maximum value to display before showing overflow (e.g., 99+) */
  max?: number;
  /** Whether to show a zero value */
  showZero?: boolean;
  /** Placement of the badge relative to children */
  placement?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /** Whether the badge should overlap children corners */
  overlap?: "circular" | "rectangular";
  /** Anchor child */
  children?: React.ReactNode;
}

/**
 * An enhanced version of the Badge component that can wrap children and handle overflow counts.
 */
export const AdvancedBadge = React.forwardRef<
  HTMLDivElement,
  AdvancedBadgeProps
>(
  (
    {
      className,
      content,
      max = 99,
      showZero = false,
      placement = "top-right",
      overlap = "rectangular",
      children,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const isNumber = typeof content === "number";
    const displayContent = isNumber && content > max ? `${max}+` : content;
    const isHidden = content === 0 && !showZero;

    if (!children) {
      return (
        <Badge ref={ref} variant={variant} className={className} {...props}>
          {displayContent}
        </Badge>
      );
    }

    const placementClasses = {
      "top-right": "-top-2 -right-2",
      "top-left": "-top-2 -left-2",
      "bottom-right": "-bottom-2 -right-2",
      "bottom-left": "-bottom-2 -left-2",
    };

    const overlapClasses = {
      circular: "translate-x-[15%] -translate-y-[15%]",
      rectangular: "translate-x-[0%] -translate-y-[0%]",
    };

    return (
      <div className="relative inline-flex shrink-0 align-middle">
        {children}
        {!isHidden && (
          <Badge
            ref={ref}
            variant={variant}
            className={cn(
              "absolute z-10 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 py-0 text-[10px]",
              placementClasses[placement],
              overlap === "circular" && overlapClasses.circular,
              className
            )}
            {...props}
          >
            {displayContent}
          </Badge>
        )}
      </div>
    );
  }
);

AdvancedBadge.displayName = "AdvancedBadge";
