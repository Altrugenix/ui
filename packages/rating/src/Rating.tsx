import React, { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@altrugenix/core";

export interface RatingProps {
  /** Current value */
  value?: number;
  /** Maximum number of stars */
  max?: number;
  /** Whether the rating is read-only */
  readonly?: boolean;
  /** Size multiplier */
  size?: "sm" | "md" | "lg";
  /** Callback for value changes */
  onChange?: (value: number) => void;
  /** Custom icon colors */
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
}

/**
 * An interactive star rating component for user feedback and reviews.
 */
export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  readonly = false,
  size = "md",
  onChange,
  activeColor = "text-amber-400 fill-amber-400",
  inactiveColor = "text-muted fill-muted",
  className,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const currentValue = hoverValue ?? value;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1;
        const isActive = starValue <= currentValue;

        return (
          <button
            key={i}
            type="button"
            disabled={readonly}
            className={cn(
              "transition-transform focus:outline-none focus-visible:scale-125",
              !readonly && "cursor-pointer hover:scale-110 active:scale-95",
              isActive ? activeColor : inactiveColor
            )}
            onMouseEnter={() => !readonly && setHoverValue(starValue)}
            onMouseLeave={() => !readonly && setHoverValue(null)}
            onClick={() => !readonly && onChange?.(starValue)}
          >
            <Star className={cn(sizeClasses[size])} />
          </button>
        );
      })}
    </div>
  );
};

Rating.displayName = "Rating";
